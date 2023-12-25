import { useParams } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import axios from "axios"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import PageCardSkeleton from "../../components/pageCard/PageCardSkeleton"
import PageCard from "../../components/pageCard/PageCard"
import toast from "react-hot-toast"

const EntitiesSearch = () => {

    const { search } = useParams()
    const [motionPages, setMotionPages] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0);
        async function searchMotions() {
            try {
                const response = await axios.get(`/entity?limit=8&page=${page}&search=${search}`)
                setMotionPages(prev => [...prev, ...response.data]);
                if (response.data.length === 0 || response.data.length < 8) {
                    setHasMore(false);
                }
            } catch (error) {
                console.log(error);
                const message = error.response.data.message || error.message
                toast.error(message)
            }
        }
        searchMotions()
    }, [page, search])

    const fetchMoreData = () => {
        if (motionPages?.length > 0) {
            setPage(prev => prev + 1);
        }
    };

    return (
        <div className={'w-full min-h-screen bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear text-slate-700 dark:text-slate-300 '} >
            <Navbar>
                <NavbarLink path={"/pages"} name={"Motion Pages"} />
            </Navbar>
            <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10 pt-24 " >
                <div className="flex justify-between items-center border-b dark:border-slate-800 pb-2 transition-none md:transition-colors ease-linear" >
                    <h3 className="text-2xl xs:text-3xl font-inter font-bold transition-none" >Searched for &quot;{search}&quot;</h3>
                </div>
                <div className="mt-5" >
                    {!hasMore && motionPages.length === 0 ? <p className="mt-20 text-center text-2xl" >No pages found</p> :
                        <InfiniteScroll
                            dataLength={motionPages.length}
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={
                                hasMore && <div className="flex flex-col gap-8 mt-3 pr-2"  >
                                    <PageCardSkeleton />
                                    <PageCardSkeleton />
                                    <PageCardSkeleton />
                                </div>
                            }
                            className=""
                            endMessage={<span className="block text-center py-8 text-4xl font-semibold h-px w-full" ></span>}
                        >
                            <div className="flex flex-col gap-8 mt-8 pr-2"  >
                                {motionPages?.map(page => (
                                    <PageCard key={page?._id} page={page} />
                                ))}
                            </div>
                        </InfiniteScroll>
                    }
                </div>
            </div>
        </div>
    )
}

export default EntitiesSearch