import { useEffect, useState } from "react"
import ListBox from "../../components/listBox/ListBox"
import Motion from "../../components/motion/Motion"
import axios from "axios"
import toast from "react-hot-toast"
import MotionSkeleton from "../../components/motion/MotionSkeleton"

const options = [
    { name: 'A.I' },
    { name: 'Votes' },
]

const TopMotions = () => {

    const [selectedOption, setSelectedOption] = useState(options[0]?.name)
    const [motions, setMotions] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const onOptionChange = (value) => {
        setSelectedOption(value)
    }
    // get Top Motions
    useEffect(() => {
        async function getMotions() {
            try {
                setIsLoading(true)
                const response = await axios.get(`/idea?sort=${selectedOption}`)
                setMotions(response?.data?.motions)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error);
                const message = error.response.data.message || error.message
                toast.error(message)
            }
        }
        getMotions()
    }, [selectedOption])

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
