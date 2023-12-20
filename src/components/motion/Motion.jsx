import { differenceInCalendarDays, format, formatDistanceToNow, parseISO } from "date-fns"
import { useState } from "react"
import { Link } from "react-router-dom"
import { BiLike, BiDislike } from "react-icons/bi";
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
    const [downVoteLoading, setDownVoteLoading] = useState(false)
    const token = window.localStorage.getItem("token")
    const voted = localMotion?.votes?.voters.includes(user?._id)
    const downVoted = localMotion?.downVotes?.downVoters.includes(user?._id)

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
            toast.success(response?.data?.message)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            const message = error.response.data.message || error.message
            toast.error(message)
        }
    }

    // vote document
    const downVote = async () => {
        if (!isLoggedIn) {
            dispatch(SET_AUTH_DIALOG(true))
            return
        }
        try {
            setDownVoteLoading(true)
            const response = await axios.post("/idea/downvote",
                { ideaId: localMotion?._id },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            setLocalMotion(response?.data?.idea)
            toast.success(response?.data?.message)
            setDownVoteLoading(false)
        } catch (error) {
            setDownVoteLoading(false)
            console.log(error);
            const message = error.response.data.message || error.message
            toast.error(message)
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
        <div className={" border shadow-lg rounded-md relative dark:bg-black px-2 sm:px-3 pt-1.5 pb-2.5 " + (localMotion?.aiScore <= 25 ? "border-red-500" : localMotion?.aiScore > 25 && localMotion?.aiScrore <= 50 ? "border-orange-500" : localMotion?.aiScore > 50 && localMotion?.aiScore <= 75 ? "border-amber-300" : "border-green-500")} >
            <Link to={`/entity/${localMotion?.entity?.slug}`} className="text-blue-700 dark:text-blue-500  hover:underline underline-offset-2  mt-1.5 capitalize text-sm font-medium font-inter">{localMotion?.entity?.name}</Link>
            <p className=" dark:text-slate-100 font-semibold">{localMotion?.idea}</p>
            <p className={" dark:text-slate-100 font-semibold mt-1 text-sm " + (showExplanation ? " block " : " hidden ")} >A.I Explanation : <span className="font-normal text-sm dark:text-slate-300" >{localMotion?.aiExplanation}</span></p>
            <span onClick={() => setShowExplanation(!showExplanation)} className="text-xs text-blue-700 dark:text-blue-500 font-medium cursor-pointer hover:underline underline-offset-2" >{showExplanation ? "Hide A.I Explanation" : "See A.I Explanation"}</span>
            <div className=" mt-1 xs:mt-2 flex flex-col gap-1 xs:flex-row items-center justify-between text-xs w-full dark:text-slate-100 font-inter" >
                <div className="flex justify-between xs:justify-normal gap-5 items-center w-full xs:w-auto" >
                    <p className={"capitalize flex items-center gap-1 font-medium " + (localMotion?.aiScore <= 25 ? "text-red-500" : localMotion?.aiScore > 25 && localMotion?.aiScrore <= 50 ? "text-orange-500" : localMotion?.aiScore > 50 && localMotion?.aiScore <= 75 ? "text-amber-500 dark:text-amber-300 " : "text-green-600 dark:text-green-400")} >A.I Score: <span className={" "} >{localMotion?.aiScore}</span></p>
                    <p className=" text-green-600 dark:text-green-400 font-medium" >Votes: {localMotion?.votes?.count}</p>
                    <p className=" text-red-600 dark:text-red-500 font-medium " >Down Votes: {localMotion?.downVotes?.count || 0}</p>
                </div>
                <div className=' self-start text-xs font-semibold dark:text-slate-300 text-slate-500' >{formatDate(localMotion?.createdAt)}</div>
            </div>
            <button disabled={isLoading || downVoteLoading} type="button" onClick={() => vote()} className={"absolute -top-5 right-10 w-10 shadow-md aspect-square border-2 rounded-full flex items-center justify-center cursor-pointer border-green-500 " + (isLoading && " bg-slate-200 dark:bg-slate-800 ") + (
                voted ? " bg-green-600 dark:bg-green-500 dark:text-black text-white " : " hover:bg-slate-200 dark:hover:bg-slate-800  bg-white dark:bg-black  "
            )} >{!isLoading ? <BiLike size={24} />
                : <RotatingLines
                    strokeColor="grey"
                    strokeWidth="4"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                />
                }</button>
            <button disabled={isLoading || downVoteLoading} type="button" onClick={() => downVote()} className={"absolute -top-5 -right-2 w-10 shadow-md aspect-square border-2 rounded-full  flex items-center justify-center cursor-pointer border-red-500 " + (isLoading && " bg-slate-200 dark:bg-slate-800 ") + (
                downVoted ? " bg-red-600 dark:bg-red-500 dark:text-black text-white " : " hover:bg-slate-200 dark:hover:bg-slate-800  bg-white dark:bg-black  "
            )} >{!downVoteLoading ? <BiDislike size={24} />
                : <RotatingLines
                    strokeColor="grey"
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