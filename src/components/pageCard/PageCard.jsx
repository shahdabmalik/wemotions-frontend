import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { RiYoutubeLine } from "react-icons/ri";
import { Link } from "react-router-dom";






const PageCard = ({ page }) => {
    return (
        <div className="border-2 dark:border-slate-700 shadow-lg p-3 rounded-md" >
            <div className="flex gap-4 items-center" >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800"><img src={page?.image?.url} alt={page?.name} /></div>
                <Link to={`/${page?.slug}`} className="capitalize text-2xl font-bold font-inter text-purple-600 dark:text-purple-500 hover:underline underline-offset-4" >{page?.name}</Link>
            </div>
            <p className="mt-3 text-sm md:text-base text-sate-600 dark:text-slate-300 leading-6" >{page?.description}</p>
            <div className="mt-4 flex items-center gap-5" >
                {page?.socialMediaLinks?.map((link, index) => (
                    link.link && <a key={index} className="hover:text-purple-700 p-2 bg-slate-100 rounded-full text-slate-900 dark:text-slate-300 md:transition-transform dark:bg-slate-800 hover:-translate-y-1 hover:shadow-lg border dark:border-slate-700 hover:shadow-purple-300 dark:shadow-none dark:hover:border-purple-500 " target="_blank" href={link?.link} rel="noreferrer">
                        {link.name === "twitter" && <SlSocialTwitter size={20} />}
                        {link.name === "instagram" && <BsInstagram size={20} />}
                        {link.name === "facebook" && <FiFacebook size={20} />}
                        {link.name === "tiktok" && <PiTiktokLogo size={20} />}
                        {link.name === "youtube" && <RiYoutubeLine size={20} />}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default PageCard