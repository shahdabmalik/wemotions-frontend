import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Link, useParams } from "react-router-dom"
import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { RiYoutubeLine } from "react-icons/ri";

const EntityPage = () => {

    const { id } = useParams()
    const [entity, setEntity] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getEntity() {
            try {
                setIsLoading(true)
                const { data } = await axios.get(`/entity/admin/${id}`)
                setEntity(data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error);
                const message = error.response.data.message || error.message
                toast.error(message)
            }
        }
        getEntity()
    }, [id])

    return (
        <> {!isLoading ?
            <div>
                <div className=" flex items-center gap-5">
                    <div className="max-w-full w-16 h-16 rounded-full shadow-md aspect-square border bg-slate-100 dark:bg-slate-900 dark:border-slate-800 transition-colors" ></div>
                    <h1 className="capitalize flex-grow text-4xl font-bold dark:text-purple-500 text-purple-600" >{entity?.name}</h1>
                </div>
                <p className="mt-5" >{entity?.description}</p>
                <div className="mt-4 flex items-center gap-5 border-b pb-4 border-slate-200 dark:border-slate-800 md:transition-colors" >
                    <a className="p-2 bg-purple-600 rounded-full text-white dark:text-black md:transition-transform dark:bg-purple-500 hover:-translate-y-1 hover:shadow-lg border dark:border-slate-700 hover:shadow-purple-300 dark:shadow-none dark:hover:border-purple-500 " target="_blank" href="https://instagram.com" rel="noreferrer"><BsInstagram size={20} /></a>
                    <a className="p-2 bg-purple-600 rounded-full text-white dark:text-black md:transition-transform dark:bg-purple-500 hover:-translate-y-1 hover:shadow-lg border dark:border-slate-700 hover:shadow-purple-300 dark:shadow-none dark:hover:border-purple-500 " target="_blank" href="https://twitter.com" rel="noreferrer"><SlSocialTwitter size={20} /></a>
                    <a className="p-2 bg-purple-600 rounded-full text-white dark:text-black md:transition-transform dark:bg-purple-500 hover:-translate-y-1 hover:shadow-lg border dark:border-slate-700 hover:shadow-purple-300 dark:shadow-none dark:hover:border-purple-500 " target="_blank" href="https://facebook.com" rel="noreferrer"><FiFacebook size={20} /></a>
                    <a className="p-2 bg-purple-600 rounded-full text-white dark:text-black md:transition-transform dark:bg-purple-500 hover:-translate-y-1 hover:shadow-lg border dark:border-slate-700 hover:shadow-purple-300 dark:shadow-none dark:hover:border-purple-500 " target="_blank" href="https://tiktok.com" rel="noreferrer"><PiTiktokLogo size={20} /></a>
                    <a className="p-2 bg-purple-600 rounded-full text-white dark:text-black md:transition-transform dark:bg-purple-500 hover:-translate-y-1 hover:shadow-lg border dark:border-slate-700 hover:shadow-purple-300 dark:shadow-none dark:hover:border-purple-500 " target="_blank" href="https://youtube.com" rel="noreferrer"><RiYoutubeLine size={20} /></a>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 dark:text-slate-100 text-xl" >Additional Links</h3>
                <div className="mt-2 flex flex-col gap-1">
                    <a className="text-blue-600 hover:underline" href="#" target="_blank" rel="noreferrer">Link 1</a>
                    <a className="text-blue-600 hover:underline" href="#" target="_blank" rel="noreferrer">Link 1</a>
                    <a className="text-blue-600 hover:underline" href="#" target="_blank" rel="noreferrer">Link 1</a>
                </div>
                <Link className=" mt-4 inline-block rounded hover:bg-purple-700 bg-purple-600 dark:bg-purple-500 text-white font-semibold px-4 py-1.5" to={`/pages/edit/${entity?._id}`} >Edit Page</Link>
            </div>
            : <EntitySkeleton />}
        </>
    )
}

export default EntityPage



const EntitySkeleton = () => {
    return (
        <div className=" animate-pulse" >
            <div className="flex gap-5 items-center" >
                <div className="max-w-full rounded-full w-16 h-16 shadow-md aspect-square border bg-slate-100 dark:bg-slate-900 dark:border-slate-800 transition-colors" ></div>
                <div className="h-8 w-40 dark:bg-slate-800 bg-slate-200 rounded-full" ></div>
            </div>
            <div className="w-full" >
                <p className="mt-8 h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-full" ></p>
                <p className="mt-3 h-4 md:hidden w-full bg-slate-200 dark:bg-slate-800 rounded-full" ></p>
                <p className="mt-3 h-4 md:hidden w-full bg-slate-200 dark:bg-slate-800 rounded-full" ></p>
                <p className="mt-3 h-4 xs:hidden w-full bg-slate-200 dark:bg-slate-800 rounded-full" ></p>
                <p className="mt-3 h-4 xs:hidden w-full bg-slate-200 dark:bg-slate-800 rounded-full" ></p>
                <p className="mt-3 h-4 xs:hidden w-full bg-slate-200 dark:bg-slate-800 rounded-full" ></p>
                <p className="mt-3 h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-full" ></p>
            </div>
            <div className="mt-4 flex items-center gap-5 pb-4 border-b border-slate-200 dark:border-slate-800" >
                <div className="w-[37.6px] h-[37.6px] bg-slate-200 dark:bg-slate-800 rounded-full" ></div>
                <div className="w-[37.6px] h-[37.6px] bg-slate-200 dark:bg-slate-800 rounded-full" ></div>
                <div className="w-[37.6px] h-[37.6px] bg-slate-200 dark:bg-slate-800 rounded-full" ></div>
                <div className="w-[37.6px] h-[37.6px] bg-slate-200 dark:bg-slate-800 rounded-full" ></div>
                <div className="w-[37.6px] h-[37.6px] bg-slate-200 dark:bg-slate-800 rounded-full" ></div>
            </div>
            <h3 className="mt-8 mb-1 h-6 w-28 bg-slate-200 dark:bg-slate-800 rounded-full" ></h3>
            <div className="mt-3 flex flex-col gap-1">
                <div className="my-1 h-4 w-36 bg-slate-200 dark:bg-slate-800 rounded-full" ></div>
                <div className="my-1 h-4 w-36 bg-slate-200 dark:bg-slate-800 rounded-full" ></div>
                <div className="my-1 h-4 w-36 bg-slate-200 dark:bg-slate-800 rounded-full" ></div>
                <div className="my-1 h-4 w-36 bg-slate-200 dark:bg-slate-800 rounded-full" ></div>
            </div>
            <div className="h-8 mt-5 bg-slate-200 dark:bg-slate-800 rounded w-28"> </div>
        </div>
    )
}