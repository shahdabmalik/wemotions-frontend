import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { RiYoutubeLine } from "react-icons/ri";
import { Link } from "react-router-dom";






const PageCard = ({ page }) => {
    return (
        <div className="border dark:border-slate-700 shadow-lg p-3 rounded-md" >
            <div className="flex gap-4 items-center" >
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                <Link to={`/${page?.slug}`} className="capitalize text-2xl font-bold font-inter text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-500" >{page?.name}</Link>
            </div>
            <p className="mt-3 text-sm md:text-base text-sate-600 dark:text-slate-300 leading-6" >{page?.description}</p>
            <div className="mt-4 flex items-center justify-between xs:justify-normal gap-5" >
                <a className="hover:text-blue-700 p-2 bg-slate-100 rounded-full text-slate-900 dark:text-slate-300 md:transition-transform dark:bg-slate-800 hover:-translate-y-1 hover:shadow-lg border dark:border-slate-700 hover:shadow-blue-300 dark:shadow-none dark:hover:border-blue-500" target="_blank" href="https://instagram.com" rel="noreferrer"><BsInstagram size={20} /></a>
                <a className="hover:text-blue-700 p-2 bg-slate-100 rounded-full text-slate-900 dark:text-slate-300 md:transition-transform dark:bg-slate-800 hover:-translate-y-1 hover:shadow-lg border dark:border-slate-700 hover:shadow-blue-300 dark:shadow-none dark:hover:border-blue-500" target="_blank" href="https://twitter.com" rel="noreferrer"><SlSocialTwitter size={20} /></a>
                <a className="hover:text-blue-700 p-2 bg-slate-100 rounded-full text-slate-900 dark:text-slate-300 md:transition-transform dark:bg-slate-800 hover:-translate-y-1 hover:shadow-lg border dark:border-slate-700 hover:shadow-blue-300 dark:shadow-none dark:hover:border-blue-500" target="_blank" href="https://facebook.com" rel="noreferrer"><FiFacebook size={20} /></a>
                <a className="hover:text-blue-700 p-2 bg-slate-100 rounded-full text-slate-900 dark:text-slate-300 md:transition-transform dark:bg-slate-800 hover:-translate-y-1 hover:shadow-lg border dark:border-slate-700 hover:shadow-blue-300 dark:shadow-none dark:hover:border-blue-500" target="_blank" href="https://tiktok.com" rel="noreferrer"><PiTiktokLogo size={20} /></a>
                <a className="hover:text-blue-700 p-2 bg-slate-100 rounded-full text-slate-900 dark:text-slate-300 md:transition-transform dark:bg-slate-800 hover:-translate-y-1 hover:shadow-lg border dark:border-slate-700 hover:shadow-blue-300 dark:shadow-none dark:hover:border-blue-500" target="_blank" href="https://youtube.com" rel="noreferrer"><RiYoutubeLine size={20} /></a>
            </div>
        </div>
    )
}

export default PageCard