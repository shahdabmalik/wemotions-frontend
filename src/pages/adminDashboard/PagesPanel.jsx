import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiPagesLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const PagesPanel = () => {

    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [pages, setPages] = useState(null)
    const [filteredPages, setFilteredPages] = useState(pages)

    // scroll top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        async function getPages() {
            try {
                setIsLoading(true)
                const { data } = await axios.get("/entity/admin")
                setPages(data)
                setFilteredPages(data)
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

    useEffect(() => {
        const filteredItems = pages?.filter((page) => page?.name?.toLowerCase().includes(search.toLowerCase()))
        setFilteredPages(filteredItems)
    }, [search, pages])


    return (
        <div>
            <div className="flex items-center justify-between">
                <h3 className="text-3xl font-inter font-bold transition-none text-purple-600 dark:text-purple-500" >All Pages</h3>
                <Link to={"/admin/pages/add"} className="bg-purple-600 text-white font-semibold px-4 py-1.5 rounded-md flex items-center gap-2" ><RiPagesLine size={18} /> Add Page</Link>
            </div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name" className="max-w-full sm:max-w-xs w-full border-slate-200 dark:border-slate-800 md:transition-colors bg-inherit focus:outline-none placeholder:text-sm dark:placeholder:text-slate-500 border mt-4 py-1 px-2 rounded-md" />
            <div className="mt-4" >
                {!isLoading ? filteredPages?.map((page) => (
                    <div key={page?._id} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 md:transition-colors py-2 xs:px-2 flex justify-between items-center" >
                        <div className="flex gap-3 items-center">
                            <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 md:transition-colors" ></div>
                            <Link to={`/admin/pages/${page?._id}`} className="capitalize text-lg font-semibold hover:text-purple-600" >{page?.name}</Link>
                        </div>
                        <div className="flex gap-2" >
                            <Link to={`/admin/pages/edit/${page?._id}`} className="p-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded" ><MdEdit size={24} /></Link>
                        </div>
                    </div>
                )) : <>
                    <PageSkeleton/>
                    <PageSkeleton/>
                    <PageSkeleton/>
                    <PageSkeleton/>
                    <PageSkeleton/>
                    <PageSkeleton/>
                    <PageSkeleton/>
                    <PageSkeleton/>
                    <PageSkeleton/>
                    <PageSkeleton/>
                </>
                }
            </div>
        </div>
    )
}

export default PagesPanel


const PageSkeleton = () => {
    return (
        <div className="border-b hover:bg-slate-50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 md:transition-colors py-2 xs:px-2 animate-pulse flex justify-between items-center" >
            <div className="flex gap-3 items-center">
                <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 md:transition-colors" ></div>
                <p className="h-6 rounded-full w-40 bg-slate-200 dark:bg-slate-800" ></p>
            </div>
            <div className="flex gap-2" >
                <div className="h-8 w-8 rounded bg-slate-200 dark:bg-slate-800" ></div>
            </div>
        </div>
    )
}