import { useParams } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import { useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import ListBox from "../../components/listBox/ListBox"
import InfiniteScroll from "react-infinite-scroll-component"
import Motion from "../../components/motion/Motion"
import MotionSkeleton from "../../components/motion/MotionSkeleton"
import NavbarLink from "../../components/navbar/NavbarLink"
import AddMotion from "../../components/addMotion/AddMotion"
import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { RiYoutubeLine } from "react-icons/ri";

const options = [
    { name: 'A.I' },
    { name: 'Votes' },
    { name: "Latest" }
]

const Entity = () => {

    const { slug } = useParams()
    const [entity, setEntity] = useState(null)
    const [motions, setMotions] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [entityLoading, setEntityLoading] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0].name)
    const [page, setPage] = useState(1)

    // get entity
    useEffect(() => {
        window.scrollTo(0, 0);
        async function getEntity() {
            try {
                setEntityLoading(true)
                const entityResponse = await axios.get(`/entity/${slug}`)
                setEntity(entityResponse?.data?.entity)
                setEntityLoading(false)
            } catch (error) {
                setEntityLoading(false)
                console.log(error);
                const message = error.response.data.message || error.message
                toast.error(message)
            }
        }
        getEntity()
        setPage(1)
    }, [slug])

    const getMotions = useCallback(async () => {
        try {
            if (entity?._id) {
                const response = await axios.get(`/idea/entityidea?entity=${entity?._id}&sort=${selectedOption}&page=${page}&limit=8`);
                setMotions(prev => [...prev, ...response.data.motions]);
                if (response.data.motions.length === 0 || response.data.motions.length < 8) {
                    setHasMore(false);
                }
            } else {
                return
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
            setHasMore(false);
        }
    }, [entity?._id, page, selectedOption])

    // get motions
    useEffect(() => {
        getMotions()
    }, [getMotions])

    // option change
    const onOptionChange = (value) => {
        if (value !== selectedOption) {
            setHasMore(true)
            setMotions([])
            setPage(1)
            setSelectedOption(value)
        }
    }
    const fetchMoreData = () => {
        if (motions?.length > 0) {
            setPage(prev => prev + 1);
        }
    };

    const resetMotions = () => {
        setPage(1)
        setMotions([])
        getMotions()
    }

    return (
        <div className={'w-full min-h-screen bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear text-slate-700 dark:text-slate-300 '} >
            <Navbar>
                <NavbarLink path={"/motions"} name={"Motions"} />
                <NavbarLink path={"/pages"} name={"Motion Pages"} />
            </Navbar>
            <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10 " >
                {!entityLoading ? (
                    <div className="pt-24" >
                        <div className=" flex items-center gap-5">
                            <div className="max-w-full overflow-hidden w-16 h-16 rounded-full shadow-md aspect-square border bg-slate-100 dark:bg-slate-900 dark:border-slate-800 transition-colors" >
                                <img src={entity?.image?.url} alt={entity?.name} />
                            </div>
                            <h1 className="capitalize flex-grow text-4xl font-bold dark:text-slate-100 text-slate-900" >{entity?.name}</h1>
                        </div>
                        <p className="mt-5" >{entity?.description}</p>
                        <div className="mt-4 flex items-center gap-5  md:transition-colors" >
                            {entity?.socialMediaLinks?.map((link, index) => (
                                link.link && <a key={index} className="p-2 bg-purple-600 rounded-full text-white dark:text-black md:transition-transform dark:bg-purple-500 hover:-translate-y-1 hover:shadow-lg border dark:border-slate-700 hover:shadow-purple-300 dark:shadow-none dark:hover:border-purple-500 " target="_blank" href={link?.link} rel="noreferrer">
                                    {link.name === "twitter" && <SlSocialTwitter size={20} />}
                                    {link.name === "instagram" && <BsInstagram size={20} />}
                                    {link.name === "facebook" && <FiFacebook size={20} />}
                                    {link.name === "tiktok" && <PiTiktokLogo size={20} />}
                                    {link.name === "youtube" && <RiYoutubeLine size={20} />}
                                </a>
                            ))}
                        </div>
                        <h3 className="mt-4 font-semibold text-slate-900 dark:text-slate-100 text-xl" >Additional Links</h3>
                        <div className="mt-2 flex flex-col gap-1 border-b pb-4 border-slate-200 dark:border-slate-800">
                            {entity?.additionalLinks?.map((link, index) => (
                                link && <a key={index} className="text-blue-600 text-xs xs:text-base hover:underline" href={link} target="_blank" rel="noreferrer">{link}</a>
                            ))}
                        </div>
                        <AddMotion id={entity?._id} resetMotions={resetMotions} />
                    </div>
                ) : (<EntitySkeleton />)}

                <div className="mt-16" >
                    <div className=" flex justify-between items-end border-b pb-1 dark:border-slate-800 border-slate-300 transition-colors" >
                        <h3 className="text-3xl text-purple-600 dark:text-purple-500 font-semibold " >Motions</h3>
                        <ListBox options={options} onOptionChange={onOptionChange} />
                    </div>
                    <div className="mt-5" >
                        <InfiniteScroll
                            dataLength={motions.length}
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={
                                hasMore && <div className={"flex flex-col gap-8 pr-2 " + (motions.length === 0 ? " mt-0 " : " mt-8 ")}  >
                                    <MotionSkeleton />
                                    <MotionSkeleton />
                                    <MotionSkeleton />
                                </div>
                            }
                            className=""
                            endMessage={<span className="block text-center py-8 text-3xl font-semibold" >That&apos;s all, folks!</span>}
                        >
                            <div className="flex flex-col gap-8 mt-8 pr-2"  >
                                {motions.map(motion => (
                                    <Motion key={motion?._id} motion={motion} />
                                ))}
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entity

const EntitySkeleton = () => {
    return (
        <div className="pt-24 animate-pulse" >
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
            <div className="mt-4 flex items-center gap-5  md:transition-colors" >
                <div className="w-[37.6px] h-[37.6px] rounded-full bg-slate-200 dark:bg-slate-800" ></div>
                <div className="w-[37.6px] h-[37.6px] rounded-full bg-slate-200 dark:bg-slate-800" ></div>
                <div className="w-[37.6px] h-[37.6px] rounded-full bg-slate-200 dark:bg-slate-800" ></div>
                <div className="w-[37.6px] h-[37.6px] rounded-full bg-slate-200 dark:bg-slate-800" ></div>
                <div className="w-[37.6px] h-[37.6px] rounded-full bg-slate-200 dark:bg-slate-800" ></div>
            </div>
            <div className="mt-4 mb-1 h-6 w-60 bg-slate-200 dark:bg-slate-800 rounded-full" ></div>
            <div className="mt-2 flex flex-col gap-1 border-b pb-4 border-slate-200 dark:border-slate-800">
                <p className="mt-3 h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-full" ></p>
                <p className="mt-3 h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-full" ></p>
                <p className="mt-3 h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-full" ></p>
            </div>
            <div className="h-9 w-[138px] bg-slate-200 rounded dark:bg-slate-800 mt-4" ></div>
        </div>
    )
}