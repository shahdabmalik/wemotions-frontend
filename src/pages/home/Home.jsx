import Navbar from "../../components/navbar/Navbar"
import HeroSection from "./HeroSection"
import TopMotions from "./TopMotions"

const Home = () => {

  return (
    <div className='w-full min-h-screen bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear text-slate-700 dark:text-slate-300' >
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10 " >
        <HeroSection />
        <TopMotions />
      </div>
    </div>

  )
}

export default Home