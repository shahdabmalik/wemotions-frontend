
const PageCardSkeleton = () => {
    return (
        <div className="border dark:border-slate-800 shadow-lg p-3 rounded-md transition-colors animate-pulse" >
            <div className="flex gap-4 items-center" >
                <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-800"></div>
                <div className="h-6 rounded-full bg-slate-300 dark:bg-slate-800 w-36" ></div>
            </div>
            <div className="mt-3 h-3 w-full bg-slate-300 dark:bg-slate-800 rounded-full" ></div>
            <div className="mt-2 h-3 w-full bg-slate-300 dark:bg-slate-800 rounded-full" ></div>
            <div className="hidden sm:block mt-2 h-3 w-3/4 bg-slate-300 dark:bg-slate-800 rounded-full" ></div>
            <div className="mt-2 h-3 w-full bg-slate-300 dark:bg-slate-800 rounded-full sm:hidden" ></div>
            <div className="mt-2 h-3 w-full bg-slate-300 dark:bg-slate-800 rounded-full sm:hidden" ></div>
            <div className="mt-2 h-3 w-full bg-slate-300 dark:bg-slate-800 rounded-full sm:hidden" ></div>
            <div className="mt-2 h-3 w-full bg-slate-300 dark:bg-slate-800 rounded-full sm:hidden" ></div>
            <div className="mt-2 h-3 w-3/4 bg-slate-300 dark:bg-slate-800 rounded-full sm:hidden" ></div>
            <div className="mt-4 flex items-center justify-between xs:justify-normal gap-5" >
                <div className="h-[37.6px] w-[37.6px] bg-slate-300 dark:bg-slate-800 rounded-full" ></div>
                <div className="h-[37.6px] w-[37.6px] bg-slate-300 dark:bg-slate-800 rounded-full" ></div>
                <div className="h-[37.6px] w-[37.6px] bg-slate-300 dark:bg-slate-800 rounded-full" ></div>
                <div className="h-[37.6px] w-[37.6px] bg-slate-300 dark:bg-slate-800 rounded-full" ></div>
                <div className="h-[37.6px] w-[37.6px] bg-slate-300 dark:bg-slate-800 rounded-full" ></div>
            </div>
        </div>
    )
}

export default PageCardSkeleton