import { differenceInCalendarDays, format, formatDistanceToNow, parseISO } from "date-fns"
import { useState } from "react"
import { Link } from "react-router-dom"
import { BiLike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { SET_AUTH_DIALOG } from "../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import axios from "axios";

const Motion = ({ motion }) => {

    const dispatch = useDispatch()
    const { user, isLoggedIn } = useSelector(state => state.auth)
    const [localMotion, setLocalMotion] = useState(motion)
    const [showExplanation, setShowExplanation] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [voted, setVoted] = useState(localMotion?.votes?.voters.includes(user?._id))
    const token = window.localStorage.getItem("token")

    // vote document
    const vote = async () => {
        if (!isLoggedIn) {
            dispatch(SET_AUTH_DIALOG(true))
            return
        }
        try {
            setIsLoading(true)
            const response = await axios.post("/idea/vote",
                { ideaId: localMotion?._id },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            setLocalMotion(response?.data?.idea)
            setVoted(true)
            toast.success("Voted")
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            const message = error.response.data.message || error.message
            toast.error(message)
        }
    }

    // dispose vote
    const disposeVote = async () => {
        if (!isLoggedIn) {
            dispatch(SET_AUTH_DIALOG(true))
            return
        }
        try {
            setIsLoading(true)
            const response = await axios.post("/idea/vote/dispose",
                { ideaId: localMotion?._id },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            setLocalMotion(response?.data?.idea)
            setVoted(false)
            toast.success("Vote Disposed")
            setIsLoading(false)
        } catch (error) {
            const message = error.response.data.message || error.message
            toast.error(message)
            setIsLoading(false)
        }
    }


    // format date function
    const formatDate = (dateString) => {
        if (dateString) {
            const date = parseISO(dateString);
            const now = new Date();
            const differenceInDays = differenceInCalendarDays(now, date);
            if (differenceInDays < 7) {
                let relativeTime = formatDistanceToNow(date, { addSuffix: true });
                relativeTime = relativeTime.replace('about', '')
                return relativeTime
            } else {
                // Otherwise, just show the date
                return format(date, 'PPP');
            }
        }
    };

    return (
        <div className={" border shadow-lg rounded-md relative dark:bg-black px-2 sm:px-3 py-1.5 " + (localMotion?.aiScore <= 25 ? "border-red-500" : localMotion?.aiScore > 25 && localMotion?.aiScrore <= 50 ? "border-orange-500" : localMotion?.aiScore > 50 && localMotion?.aiScore <= 75 ? "border-amber-300" : "border-green-500")} >
            <Link to={`/entity/${localMotion?.entity?.slug}`} className="text-blue-700 dark:text-blue-500  hover:underline underline-offset-2  mt-1.5 capitalize text-sm font-inter">{localMotion?.entity?.name}</Link>
            <p className=" dark:text-slate-100 font-semibold">{localMotion?.idea}</p>
            <p className={" dark:text-slate-100 font-semibold mt-1 " + (showExplanation ? " block " : " hidden ")} >A.I Explanation : <span className="font-normal dark:text-slate-300" >{localMotion?.aiExplanation}</span></p>
            <span onClick={() => setShowExplanation(!showExplanation)} className="text-xs text-blue-700 dark:text-blue-500 font-medium cursor-pointer hover:underline underline-offset-2" >{showExplanation ? "Hide A.I Explanation" : "See A.I Explanation"}</span>
            <div className=" mt-2 flex gap-5 items-center justify-between text-xs w-full dark:text-slate-100 font-inter" >
                <div className="flex gap-5" >
                    <p className="capitalize  flex items-center gap-1 " >A.I Score: <span className={" " + (localMotion?.aiScore <= 25 ? "text-red-500" : localMotion?.aiScore > 25 && localMotion?.aiScrore <= 50 ? "text-orange-500" : localMotion?.aiScore > 50 && localMotion?.aiScore <= 75 ? "text-amber-500 dark:text-amber-300 " : "text-green-500")} >{localMotion?.aiScore}</span></p>
                    <p className="" >Votes: {localMotion?.votes?.count}</p>
                </div>
                <div className=' text-xs font-semibold dark:text-slate-100' >{formatDate(localMotion?.createdAt)}</div>
            </div>
            <button disabled={isLoading} type="button" onClick={() => { voted ? disposeVote() : vote() }} className={"absolute -top-4 -right-4 w-10 shadow-lg aspect-square border-2 rounded-full  flex items-center justify-center cursor-pointer border-slate-500 " + (
                voted ? " bg-green-600 dark:bg-green-500 dark:text-black text-white hover:bg-red-600 dark:hover:bg-red-500 " : " hover:bg-green-300 dark:hover:bg-green-300 dark:hover:text-black bg-white dark:bg-black  "
            )} >{!isLoading ? <BiLike size={24} />
                : <RotatingLines
                    strokeColor="black"
                    strokeWidth="4"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                />
                }</button>
        </div>
    )
}

export default Motion