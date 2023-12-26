import { useEffect, useState } from "react"
import ListBox from "../../components/listBox/ListBox"
import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import axios from "axios"
import toast from "react-hot-toast"
import MotionSkeleton from "../../components/motion/MotionSkeleton"
import InfiniteScroll from "react-infinite-scroll-component"
import Motion from "../../components/motion/Motion"

const options = [
    { name: 'A.I' },
    { name: 'Votes' },
    { name: "Latest" }
]

const AllMotions = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]?.name)
    const [motions, setMotions] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        async function getMotions() {
            try {
                const response = await axios.get(`/idea?limit=8&sort=${selectedOption}&page=${page}&limit=8`);
                setMotions(prev => [...prev, ...response.data.motions]);
                if (response.data.motions.length === 0 || response.data.motions.length < 8) {
                    setHasMore(false);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
                const message = error.response.data.message
                toast.error(message)
                setHasMore(false);
            }
        }
        getMotions()
    }, [page, selectedOption])

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
    return (
        <div className='w-full min-h-screen bg-white dark:bg-slate-950 transition-none md:transition-colors text-slate-700 dark:text-slate-300' >
            <Navbar>
                <NavbarLink path={"/pages"} name={"Motion Pages"} />
            </Navbar>
            <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10 pt-24 " >
                <div className="flex justify-between items-center border-b dark:border-slate-800 pb-2 transition-none md:transition-colors ease-linear" >
                    <h3 className="text-2xl md:text-4xl font-inter font-bold transition-none" >All Motions</h3>
                    <ListBox options={options} onOptionChange={onOptionChange} />
                </div>
                <div className="mt-5" >
                    <InfiniteScroll
                        dataLength={motions.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={
                            hasMore && <div className={"flex flex-col gap-8" + (motions.length === 0 ? " mt-0 " : " mt-8 ")}  >
                                <MotionSkeleton />
                                <MotionSkeleton />
                                <MotionSkeleton />
                            </div>
                        }
                        className=""
                        endMessage={<span className="block text-center py-8 text-4xl font-semibold" >That&apos;s all, folks!</span>}
                    >
                        <div className="flex flex-col gap-8 mt-8"  >
                            {motions.map(motion => (
                                <Motion key={motion?._id} motion={motion} />
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    )
}

export default AllMotions