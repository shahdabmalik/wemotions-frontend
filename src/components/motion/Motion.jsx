
const Motion = ({ motion }) => {
    return (
        <div className="flex items-center border shadow-lg rounded-md overflow-hidden" >
            <div className={" text-slate-800 dark:text-slate-200 flex items-center justify-center font-inter text-4xl p-2 font-bold "
                // + (motion?.aiScore < 25 && " bg-red-400 ")
                // + (motion?.aiScore <= 50 && motion?.aiScore > 25 && " bg-orange-400 ")
                // + (motion?.aiScore < 75 && motion?.aiScore > 50 && " bg-amber-200 ")
                // + (motion?.aiScore >= 75 && motion?.aiScore > 50 && " bg-green-400 ")
            } >{motion?.aiScore}</div>
            <div className="px-4 py-2" >
                <p>{motion?.idea}</p>
            </div>
        </div>
    )
}

export default Motion