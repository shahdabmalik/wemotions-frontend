import { useEffect, useState } from "react"
// import logo from "../../assets/logo.png"
import DarkModeBtn from "../darkModeBtn/DarkModeBtn"
import { FaArrowRight } from "react-icons/fa6";
import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {

    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [shadow, setShadow] = useState(false)
    const [navMenu, setNavMenu] = useState(false)

    const handleNavMenu = () => {
        setNavMenu(!navMenu)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 64) {
                if (window.scrollY < lastScrollY) {
                    setShow(true)
                    setShadow(true)
                } else {
                    setShow(false)
                }
            } else {
                setShow(true)
                setShadow(false)
            }
            setLastScrollY(window.scrollY)
        })
    }, [lastScrollY])

    return (
        <>
            <div className={"fixed z-50 top-0 left-0 w-full border-b border-slate-300 dark:border-slate-800 transition-all duration-300 ease-linear backdrop-blur-lg bg-slate-100 dark:bg-slate-950 bg-opacity-75 dark:bg-opacity-75 " + (show ? " translate-y-0 " : " -translate-y-32 ") + (shadow ? " shadow-md " : " ")} >
                <nav className="max max-w-screen-2xl w-full mx-auto px-4 md:px-10 h-16 flex justify-between items-center" >
                    <Link to={"/"} className="text-2xl font-inter font-extrabold text-slate-800 dark:text-slate-100 transition-all duration-300 ease-linear" >We<span className="text-blue-700 dark:text-blue-600">Motions</span></Link>
                    <div className="flex items-center gap-4 font-inter">
                        <div className="hidden md:flex gap-4 items-center" >{children}</div>
                        <div className="flex gap-5 items-center" >
                            <DarkModeBtn />
                            {children !== undefined || children?.length > 0 && <RiMenuFill size={28} onClick={handleNavMenu} className="md:hidden text-black dark:text-slate-300" />}
                        </div>
                    </div>
                </nav>
            </div>
            <div className={"fixed top-0 left-0 z-[100] w-full h-full flex flex-col shadow-2xl md:hidden bg-white dark:bg-slate-950 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm transition-all duration-500 " + (navMenu ? "" : " translate-x-[120%] ")} >
                <div className="h-16 w-full  flex justify-end items-center px-5 hover:text-blue-500 dark:text-slate-200" ><FaArrowRight size={32} onClick={handleNavMenu} /></div>
                <div className="flex-grow flex gap-10 flex-col justify-center px-5 text-center text-3xl" onClick={handleNavMenu} >
                    {children}
                </div>
            </div>
        </>
    )
}

export default Navbar