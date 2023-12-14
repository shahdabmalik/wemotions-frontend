import { Link } from "react-router-dom"

const NavbarLink = ({ path, name }) => {
    return (
        <>
            <Link className=" transition-all font-medium px-1" to={path} > {name}</Link>
        </>
    )
}

export default NavbarLink