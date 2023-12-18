import { useEffect, useState } from "react"
import ListBox from "../../components/listBox/ListBox"
import { getTopMotions } from "../../redux/features/auth/motion/motionServices"
import Motion from "../../components/motion/Motion"

const options = [
    { name: 'A.I' },
    { name: 'Votes' },
]


const TopMotions = () => {

    const [selectedOption, setSelectedOption] = useState(options[0]?.name)
    const [motions, setMotions] = useState([])

    const onOptionChange = (value) => {
        setSelectedOption(value)
    }

    useEffect(() => {
        async function getMotions() {
            try {
                const data = await getTopMotions(selectedOption)
                setMotions(data)
            } catch (error) {
                console.log(error);
            }
        }
        getMotions()
    }, [selectedOption])

    return (
        <div className="py-16" >
            <div className="flex justify-between items-center border-b dark:border-slate-800 pb-2 transition-none md:transition-colors ease-linear" >
                <h3 className="text-2xl md:text-4xl font-inter font-bold" >Top Motions</h3>
                <ListBox options={options} onOptionChange={onOptionChange} />
            </div>
            <div className="flex flex-col gap-5 mt-8"  >
                {motions.map((motion) => (
                    <Motion key={motion._id} motion={motion} />
                ))}
            </div>
        </div>
    )
}

export default TopMotions