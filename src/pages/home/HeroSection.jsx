import { Link } from "react-router-dom"

const HeroSection = () => {

    return (
        <div className="pt-24 sm:pt-32" >
            <h1 className="  xl:text-start text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-700 dark:text-blue-500 font-inter uppercase" >Wemotions<span className="text-slate-800 dark:text-slate-200 lowercase" >.io</span></h1>
            <p className=" mt-2 sm:mt-4 font-medium text-justify " >Welcome to a space where creativity knows no bounds and every idea holds the potential to spark change. In our community, your thoughts are the seeds of innovation, ready to grow and reshape the world. Here, you&apos;ll find like-minded individuals eager to collaborate, share insights, and help turn your visions into reality. Whether you&apos;re looking to inspire or be inspired, to challenge the status quo or find solutions to real-world problems, you&apos;re in the right place. Join us in this journey of discovery and creation, where together, we can make a difference, one idea at a time.</p>
            <div className="mt-5 flex gap-5 flex-wrap">
                <Link to={"/motions"} type="button" className="w-36 xs:w-40 xs:text-base text-sm h-9 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded flex items-center justify-center" >Explore Motions</Link>
                <Link to={"/pages"} type="button" className="w-36 xs:w-40 xs:text-base text-sm h-9 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded flex items-center justify-center" >Motions Pages</Link>
            </div>
        </div>
    )
}

export default HeroSection