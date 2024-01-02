import { Link } from "react-router-dom"
import heroAnimation from "../../assets/hero.json"
import Lottie from "lottie-react"


const HeroSection = () => {

    return (
        <div className="pt-24 md:pt-32 flex flex-col-reverse md:flex-row justify-between items-center gap-8" >
            <div className="font-inter">
                <p className=" font-semibold sm:font-bold text-slate-900 dark:text-slate-100 text-2xl xs:text-3xl md:text-4xl" >Moving from cancel culture to a culture in motion. </p>
                <p className=" mt-2 font-medium " >Communication is key, so why is there no channel for the voice and emotion of the people to reach  leaders and corporations?</p>
                <p className=" mt-2 font-medium " >Wemotions is a social movement to solve thought, and bring back the town hall, on the global stage. </p>
                <div className="mt-6 flex sm:gap-x-5 gap-y-5 flex-wrap">
                    <Link className="xs:text-base w-full sm:w-auto h-10 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded flex items-center justify-center " to={"/manifesto"} >Read our blueprint for success</Link>
                    <div className="flex gap-x-5 items-center w-full sm:w-auto" >
                        <Link to={"/motions"} type="button" className=" w-full sm:w-auto  px-4 xs:text-base h-10 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded flex items-center justify-center" >Explore Motions</Link>
                        <Link to={"/pages"} type="button" className="  w-full sm:w-auto px-4 xs:text-base h-10 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded flex items-center justify-center" >Motions Pages</Link>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md" >
                <Lottie animationData={heroAnimation} />
            </div>
        </div>
    )
}

export default HeroSection