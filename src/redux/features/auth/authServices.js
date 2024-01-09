import axios from "axios"
import toast from "react-hot-toast";
import store from "../../store"
import { SET_LOGIN } from "./authSlice";

// login user google
export const loginUserGoogle = async (data) => {
    const token = window.localStorage.getItem("token")
    try {
        const response = await axios.post("/auth/google", data, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.log(error);
        const errorMessage = error.response.data.message || error.message
        toast.error(errorMessage)
    }
}

// login status
export const loginStatus = async () => {
    const token = window.localStorage.getItem("token")
    try {
        const response = await axios.get("/auth/loggedin", {}, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.log(error);
        store.dispatch(SET_LOGIN(false))
    }
}

// // register user
// export const registerUser = async (data) => {
//     try {
//         const response = await axios.post("/auth/register", data)
//         return response.data
//     } catch (error) {
//         console.log(error);
//         const errorMessage = error.response.data.message || error.message
//         toast.error(errorMessage)
//     }
// }
// // login user
// export const loginUser = async (data) => {
//     try {
//         const response = await axios.post("/auth/login", data)
//         return response.data
//     } catch (error) {
//         console.log(error);
//         const errorMessage = error.response.data.message || error.message
//         toast.error(errorMessage)
//     }
// }