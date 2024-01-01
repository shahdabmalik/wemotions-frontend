import axios from "axios";
import { useEffect } from "react"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_ADMINUSER, SET_ADMINUSER_LOGIN } from "../redux/features/admin/adminSlice";


const useAdminRedirect = () => {

    const adminToken = window.localStorage.getItem('adminToken')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        async function checkAdmin() {
            try {
                const { data } = await axios.get("/admin/loggedin", { headers: { Authorization: `Bearer ${adminToken}` } })
                dispatch(SET_ADMINUSER(data?.admin))
                dispatch(SET_ADMINUSER_LOGIN(true))
            } catch (error) {
                console.log(error);
                const message = error.response.data.message || error.message
                toast.error(message)
                dispatch(SET_ADMINUSER_LOGIN(false))
                dispatch(SET_ADMINUSER(null))
                navigate("/")
            }
        }
        checkAdmin()
    }, [adminToken, dispatch, navigate])

}

export default useAdminRedirect