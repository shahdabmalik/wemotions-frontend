import { useState } from 'react'
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";
import image11 from "../../assets/manifesto-11.webp"
import image12 from "../../assets/manifesto-12.webp"
import image13 from "../../assets/manifesto-13.webp"

const SubSectionFive = () => {

    const [show, setShow] = useState(false)

    return (
        <div className='mt-4' >
            <h3 className="flex gap-2 items-center font-semibold cursor-pointer" onClick={() => setShow(!show)}  >{!show ? <BiSolidRightArrow /> : <BiSolidDownArrow />}Defining The What: Your Great Narrative</h3>
            {show && <div className=' mt-8 h-auto border p-4 dark:border-slate-800' >
                <p className='' >There is one story, equivalent around all religions, dogmas, and philosophies which is the reaching of eternal fulfillment, utopia, heaven, the kingdom of god, nirvana. Today we have no great storytellers like those of the past who look to the heavens. The closest we get is those who look to the stars. </p>
                <div className='w-full mt-8' ><img className='w-full' src={image11} alt='image' /></div>
                <p className='mt-8' >I hope we as a humanity continue to search for stories, and beliefs that act as a glue between these bubbles. </p>
                <div className='w-full mt-8' ><img className='w-full' src={image12} alt='image' /></div>
                <p className='mt-8' >At the very least, we have love, but saying universal love is the answer is a bit abstract. It lacks a defined vision for the future. Instead of pushing forward an idea of utopia, pushing something universally “cool” and more concrete is my version of dreaming of these future in a way that is universal. </p>
                <p className='mt-4'>This is the final piece of the story I am telling, a party on the moon that everyone in the world is invited to. Free first class, free buffets, free ride tickets (better than you&apos;ve ever experienced in the low gravity of the moon). It is an all inclusive vision of a time which requires a positive future, but is one that anyone can hope for without any religious precedents holding people apart.</p>
                <div className='w-full mt-8' ><img className='w-full' src={image13} alt='image' /></div>
                <p className='mt-8' >Obviously this moon mission is not a profit seeking business. (It is set a decade in the future to allow time for autonomous construction robots to bring the cost of materials down far enough that we can actually provide this free service. This is a time called post-scarcity.)</p>
                <p className='mt-4' >Now, in order to get there we are going to need to take on a few other major projects.</p>
                <h4 className='mt-8 font-semibold font-inter'>Become A WeMotions creator:</h4>
                <p className='mt-1' >In order to make sure you do not disappear on us, there is a $500 deposit as a commitment to being a verified WeMotions creator.</p>
                <p className='mt-4' >Script For The Video “Heres what (number of people) most wanted to hear from (person) this is day 1 of reading the top submissions until (person) answers the top 10 on a podcast.” </p>
            </div>}
        </div>
    )
}

export default SubSectionFive