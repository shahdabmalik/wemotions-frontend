import { Link } from "react-router-dom"

const NavbarLink = ({ path, name }) => {
    return (
        <>
            <Link className=" transition-all font-medium text-slate-800 dark:text-slate-100 hover:text-purple-600 dark:hover:text-purple-400 px-1" to={path} > {name}</Link>
        </>
    )
}

export default NavbarLink