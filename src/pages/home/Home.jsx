import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import HeroSection from "./HeroSection"
import TopMotions from "./TopMotions"

const Home = () => {

  return (
    <div className='w-full min-h-screen bg-white dark:bg-slate-950 transition-none md:transition-colors text-slate-700 dark:text-slate-300' >
      <Navbar>
        <NavbarLink path={"/motions"} name={"Motions"} />
        <NavbarLink path={"/entities"} name={"Entities"} />
      </Navbar>
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10 " >
        <HeroSection />
        <TopMotions />
      </div>
    </div>

  )
}

export default Home