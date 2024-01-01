import { useSelector } from "react-redux"
import useAdminRedirect from "../../customHook/useAdminRedirect"
import DarkModeBtn from "../../components/darkModeBtn/DarkModeBtn"
import { NavLink } from "react-router-dom"

const AdminDashboard = ({ children }) => {

    useAdminRedirect()
    const { user } = useSelector(state => state.admin)

    return (
        <div className="bg-white dark:bg-slate-950 md:transition-colors w-full  relative text-slate-700 dark:text-slate-300 min-h-screen" >
            <div className="absolute top-0 left-0 w-full z-40 bg-white dark:bg-slate-950 border-b dark:border-slate-800 border-slate-200 md:transition-colors" >
                <div className=" max-w-screen-xl px-4 md:px-10 mx-auto h-16 flex items-center justify-between " >
                    <div className="flex gap-6 items-center" >
                        <NavLink to={"/admin/pages"} className={({ isActive }) => isActive ? " text-purple-600 dark:text-purple-500 text-lg font-semibold " : " text-slate-700 dark:text-slate-300 text-lg font-semibold "} >Pages</NavLink>
                        <NavLink to={"/admin/users"} className={({ isActive }) => isActive ? " text-purple-600 dark:text-purple-500 text-lg font-semibold " : " text-slate-700 dark:text-slate-300 text-lg font-semibold "} >Users</NavLink>
                    </div>
                    <div className="flex items-center gap-5" >
                        <DarkModeBtn />
                        <p className="font-inter text-2xl font-semibold border-2 h-9 w-9 flex items-center justify-center rounded-full bg-purple-600 border-purple-600 text-white " >{user?.name?.charAt(0) || user?.username?.charAt(0)}</p>
                    </div>
                </div>
            </div>
            <div className="pt-24 px-4 md:px-10 max-w-screen-xl mx-auto" >{children}</div>
        </div>
    )
}

export default AdminDashboard