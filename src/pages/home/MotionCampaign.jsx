import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import PageCard from "../../components/pageCard/PageCard";
import PageCardSkeleton from "../../components/pageCard/PageCardSkeleton";

const MotionCampaign = () => {

    const [pages, setPages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getPages() {
            try {
                setIsLoading(true)
                const { data } = await axios.get("/entity")
                setPages(data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error);
                const message = error.response.data.message || error.message
                toast.error(message)
            }
        }
        getPages()
    }, [])

    return (
        <div className="py-16" >
            <h3 className="text-3xl  font-inter font-bold transition-none text-slate-800 dark:text-slate-100" >Motion Campaigns</h3>
            <div className="flex flex-col gap-10 mt-8" >
                {!isLoading ? pages?.map((page) => (
                    <PageCard key={page._id} page={page} />
                )) : <>
                    <PageCardSkeleton />
                    <PageCardSkeleton />
                    <PageCardSkeleton />
                    <PageCardSkeleton />
                    <PageCardSkeleton />
                </>}
            </div>
        </div>
    )
}

export default MotionCampaign