import { useParams } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import ListBox from "../../components/listBox/ListBox"
import InfiniteScroll from "react-infinite-scroll-component"
import Motion from "../../components/motion/Motion"

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
    // const [motionLoading, setMotionLoading] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0].name)
    const [page, setPage] = useState(1)

    console.log(page);

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

    useEffect(() => {
        async function getMotions() {
            try {
                if (entity?._id) {
                    const response = await axios.get(`/idea/entityidea?entity=${entity?._id}&sort=${selectedOption}&page=${page}`);
                    setMotions(prev => [...prev, ...response.data.motions]);
                    if (response.data.motions.length === 0 || response.data.motions.length < 20) {
                        setHasMore(false);
                    }
                } else {
                    return
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
                setHasMore(false);
            }

        }
        getMotions()
    }, [page, entity, selectedOption])

    const onOptionChange = (value) => {
        setMotions([])
        setSelectedOption(value)
    }
    const fetchMoreData = () => {
        setPage(prev => prev + 1);
    };

    return (
        <div className='w-full min-h-screen bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear text-slate-700 dark:text-slate-300' >
            <Navbar />
            <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10 " >
                {!entityLoading ? (
                    <div className="pt-24 flex flex-col md:flex-row gap-8" >
                        <div className="max-w-full w-full xs:w-80 xs:h-80 shadow-lg aspect-square border bg-slate-100 dark:bg-slate-900 dark:border-slate-800 rounded-md transition-colors" ></div>
                        <div>
                            <h1 className="capitalize text-4xl font-bold dark:text-slate-100 text-slate-900" >{entity?.name}</h1>
                            <p className="mt-3" >{entity?.description}</p>
                        </div>
                    </div>
                ) : (<EntitySkeleton />)}

                <div className="mt-16" >
                    <div className=" flex justify-between items-end border-b pb-1 dark:border-slate-800 border-slate-300 transition-colors" >
                        <h3 className="text-3xl text-slate-800 dark:text-slate-200 font-semibold " >Motions</h3>
                        <ListBox options={options} onOptionChange={onOptionChange} />
                    </div>
                    <div>
                        <InfiniteScroll
                            dataLength={motions.length}
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={
                                hasMore && <div className="flex flex-col gap-8 mt-8 pr-2"  >
                                    <MotionSkeleton />
                                    <MotionSkeleton />
                                    <MotionSkeleton />
                                </div>
                            }
                            className="min-h-screen"
                            endMessage={<span></span>}
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





const MotionSkeleton = () => {
    return (
        <div className="w-full h-32 xs:h-28 p-3 border rounded-md shadow-lg animate-pulse relative" >
            <div className="h-3 rounded-md w-32 bg-slate-200 dark:bg-slate-800" ></div>
            <div className="h-4 mt-3 rounded-md w-full bg-slate-200 dark:bg-slate-800" ></div>
            <div className="h-2 mt-3 rounded-md w-full max-w-[150px] bg-slate-200 dark:bg-slate-800" ></div>
            <div className=" aspect-square absolute -top-5 -right-2 w-10 bg-slate-200 dark:bg-slate-800 rounded-full border-2" ></div>
            <div className=" aspect-square absolute -top-5 right-10 w-10 bg-slate-200 dark:bg-slate-800 rounded-full border-2" ></div>
            <div className="flex flex-col xs:flex-row gap-2.5 xs:gap-5 justify-between mt-3" >
                <div className="flex gap-5 justify-between w-full xs:w-auto">
                    <div className="h-3 w-16 rounded-md bg-slate-200 dark:bg-slate-800" ></div>
                    <div className="h-3 w-16 rounded-md bg-slate-200 dark:bg-slate-800" ></div>
                    <div className="h-3 w-16 rounded-md bg-slate-200 dark:bg-slate-800" ></div>
                </div>
                <div className="h-3 w-28 bg-slate-200 dark:bg-slate-800 rounded-md" ></div>
            </div>
        </div>
    )
}


const EntitySkeleton = () => {
    return (
        <div className="pt-24 flex flex-col md:flex-row gap-8 animate-pulse" >
            <div className="max-w-full w-full xs:w-80 xs:h-80 shadow-lg aspect-square border bg-slate-100 dark:bg-slate-900 dark:border-slate-800 rounded-md transition-colors" ></div>
            <div className="w-full" >
                <div className="h-10 w-80 dark:bg-slate-800 bg-slate-200 rounded-md" ></div>
                <p className="mt-8 h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-md" ></p>
                <p className="mt-3 h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-md" ></p>
                <p className="mt-3 h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-md" ></p>
                <p className="mt-3 h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-md" ></p>
            </div>
        </div>
    )
}