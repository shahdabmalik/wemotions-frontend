import { useState } from 'react';
import { IoIosMoon, IoMdSunny } from "react-icons/io";
// import { motion } from "framer-motion"

const DarkModeBtn = () => {

    let theme = window.localStorage.getItem('theme')
    const [darkMode, setDarkMode] = useState(theme)

    const handleDarkMode = () => {
        if (darkMode === "dark") {
            document.documentElement.classList.remove("dark")
            window.localStorage.setItem("theme", "light")
            setDarkMode("light")
        } else {
            document.documentElement.classList.add("dark")
            window.localStorage.setItem("theme", "dark")
            setDarkMode("dark")
        }
    }

    // const itemAni = {
    //     hidden: { opacity: 0, y: -10 },
    //     show: { opacity: 1, y: 0, transition: { duration: 0.25, } }
    // }


    return (
        <>
            <button onClick={handleDarkMode} type="button" className=" text-slate-800 dark:text-orange-400 focus:outline-none hidden md:block" >
                {darkMode === "light" ? <IoIosMoon size={26} /> : <IoMdSunny size={26} />}
            </button>
            <button onClick={handleDarkMode} type="button" className=" text-slate-800 dark:text-orange-400  focus:outline-none md:hidden" >
                {darkMode === "light" ? <IoIosMoon size={28} /> : <IoMdSunny size={28} />}
            </button>
        </>
    )
}

export default DarkModeBtn