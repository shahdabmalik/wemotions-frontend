
const MotionSkeleton = () => {
    return (
        <div className="w-full h-32 xs:h-28 p-3 border-2 dark:border-slate-700 rounded-md shadow-lg animate-pulse relative" >
            <div className="h-3 rounded-md w-32 bg-slate-200 dark:bg-slate-800" ></div>
            <div className="h-4 mt-3 rounded-md w-full bg-slate-200 dark:bg-slate-800" ></div>
            <div className="h-2 mt-3 rounded-md w-full max-w-[150px] bg-slate-200 dark:bg-slate-800" ></div>
            <div className=" aspect-square absolute -top-5 right-2 w-10 bg-slate-200 dark:bg-slate-800 rounded-full border-2 dark:border-slate-700" ></div>
            <div className=" aspect-square absolute -top-5 right-14 w-10 bg-slate-200 dark:bg-slate-800 rounded-full border-2 dark:border-slate-700" ></div>
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

export default MotionSkeleton