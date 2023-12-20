import { useEffect, useState } from "react"
import ListBox from "../../components/listBox/ListBox"
import Motion from "../../components/motion/Motion"
import { useSelector } from "react-redux"
import axios from "axios"
import toast from "react-hot-toast"

const options = [
    { name: 'A.I' },
    { name: 'Votes' },
]

const TopMotions = () => {

    const [selectedOption, setSelectedOption] = useState(options[0]?.name)
    const [motions, setMotions] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { isLoggedIn } = useSelector(state => state.auth)

    const onOptionChange = (value) => {
        setSelectedOption(value)
    }
    // get Top Motions
    useEffect(() => {
        async function getMotions() {
            try {
                setIsLoading(true)
                const response = await axios.get(`/idea?sort=${selectedOption}`)
                setMotions(response?.data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error);
                const message = error.response.data.message || error.message
                toast.error(message)
            }
        }
        getMotions()
    }, [selectedOption, isLoggedIn])

    return (
        <div className="py-16" >
            <div className="flex justify-between items-center border-b dark:border-slate-800 pb-2 transition-none md:transition-colors ease-linear" >
                <h3 className="text-2xl md:text-4xl font-inter font-bold transition-none" >Top Motions</h3>
                <ListBox options={options} onOptionChange={onOptionChange} />
            </div>
            <div className="flex flex-col gap-8 mt-8 "  >
                {!isLoading ? motions.map((motion) => (
                    <Motion key={motion._id} motion={motion} />
                )) : (<>
                    <MotionSkeleton />
                    <MotionSkeleton />
                    <MotionSkeleton />
                    <MotionSkeleton />
                    <MotionSkeleton />
                    <MotionSkeleton />
                    <MotionSkeleton />
                    <MotionSkeleton />
                    <MotionSkeleton />
                    <MotionSkeleton />
                </>)}
            </div>
        </div>
    )
}

export default TopMotions

const MotionSkeleton = () => {
    return (
        <div className="w-full h-28 p-3 border rounded-md shadow-lg animate-pulse relative" >
            <div className="h-3 rounded-md w-32 bg-slate-200 dark:bg-slate-800" ></div>
            <div className="h-4 mt-3 rounded-md w-full bg-slate-200 dark:bg-slate-800" ></div>
            <div className="h-2 mt-3 rounded-md w-full max-w-[150px] bg-slate-200 dark:bg-slate-800" ></div>
            <div className=" aspect-square absolute -top-5 -right-2 w-10 bg-slate-200 dark:bg-slate-800 rounded-full border-2" ></div>
            <div className=" aspect-square absolute -top-5 right-10 w-10 bg-slate-200 dark:bg-slate-800 rounded-full border-2" ></div>
            <div className="flex justify-between gap-5 items-center mt-3" >
                <div className="flex gap-5">
                    <div className="h-3 w-16 rounded-md bg-slate-200 dark:bg-slate-800" ></div>
                    <div className="h-3 w-16 rounded-md bg-slate-200 dark:bg-slate-800" ></div>
                    <div className="h-3 w-16 rounded-md bg-slate-200 dark:bg-slate-800" ></div>
                </div>
                <div className="h-3 w-28 bg-slate-200 dark:bg-slate-800 rounded-md" ></div>
            </div>
        </div>
    )
}