import { Link } from "react-router-dom"

const NavbarLink = ({ path, name }) => {
    return (
        <>
            <Link className=" transition-all font-medium text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-500 px-1" to={path} > {name}</Link>
        </>
    )
}

export default NavbarLink