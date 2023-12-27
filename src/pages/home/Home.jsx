import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import HeroSection from "./HeroSection"
import MotionCampaign from "./MotionCampaign"
// import TopMotions from "./TopMotions"

const Home = () => {

  return (
    <div className='w-full min-h-screen bg-white dark:bg-slate-950 transition-none md:transition-colors text-slate-700 dark:text-slate-300' >
      <Navbar>
        <NavbarLink path={"/manifesto"} name={"Manifesto"} />
        <NavbarLink path={"/motions"} name={"Motions"} />
        <NavbarLink path={"/pages"} name={"Motion Pages"} />
      </Navbar>
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10 " >
        <HeroSection />
        {/* <TopMotions /> */}
        <MotionCampaign />
      </div>
    </div>

  )
}

export default Home