import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import axios from "axios"
import PageCardSkeleton from "../../components/pageCard/PageCardSkeleton"
import toast from "react-hot-toast"
import InfiniteScroll from "react-infinite-scroll-component"
import PageCard from "../../components/pageCard/PageCard"
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom"

const AllEntities = () => {

    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const [motionPages, setMotionPages] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    // get motion on intial load
    useEffect(() => {
        window.scrollTo(0, 0);
        async function getMotions() {
            try {
                const response = await axios.get(`/entity?limit=8&&page=${page}`);
                setMotionPages(prev => [...prev, ...response.data]);
                if (response.data.length === 0 || response.data.length < 8) {
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
    }, [page])


    const fetchMoreData = () => {
        if (motionPages?.length > 0) {
            setPage(prev => prev + 1);
        }
    };
    const handleSearch = () => {
        if (search !== "") navigate(`/pages/search/${search}`)
        return
    }

    const handleKeyUp = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            handleSearch()
        }
    };

    return (
        <div className={'w-full min-h-screen bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear text-slate-700 dark:text-slate-300 '} >
            <Navbar>
                <NavbarLink path={"/motions"} name={"Motions"} />
            </Navbar>
            <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10 pt-24 " >
                <div className="flex flex-col sm:flex-row gap-4 items-start justify-between sm:items-center sm:border-b dark:border-slate-800 pb-2 transition-none md:transition-colors ease-linear" >
                    <h3 className="text-3xl border-b sm:border-none dark:border-slate-800 w-full sm:w-auto pb-2 sm:pb-0 font-inter font-bold transition-none text-slate-800 dark:text-slate-200" >Motion Pages</h3>
                    <div className=" w-full sm:w-auto flex items-center border md:transition-colors dark:border-slate-800 dark:text-slate-300 text-slate-700 rounded-full overflow-hidden pl-3 pr-1.5 py-1.5 sm:py-1 bg-white dark:bg-slate-900" >
                        <input type="text" value={search} onKeyUp={handleKeyUp} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name" className="max-w-full sm:max-w-xs w-full bg-inherit focus:outline-none placeholder:text-sm" />
                        <CiSearch size={24} className="cursor-pointer text-blue-500" onClick={() => handleSearch()} />
                    </div>
                </div>
                <div className="sm:mt-5" >
                    <InfiniteScroll
                        dataLength={motionPages.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={
                            hasMore && <div className="flex flex-col gap-8 mt-3"  >
                                <PageCardSkeleton />
                                <PageCardSkeleton />
                                <PageCardSkeleton />
                            </div>
                        }
                        className=""
                        endMessage={<span className="block text-center py-8 text-3xl font-semibold" >End of Pages</span>}
                    >
                        <div className="flex flex-col gap-8 mt-8"  >
                            {motionPages?.map(page => (
                                <PageCard key={page?._id} page={page} />
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    )
}

export default AllEntities