import axios from "axios"
import toast from "react-hot-toast";

const token = window.localStorage.getItem("token")

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// register user
export const registerUser = async (data) => {
    try {
        const response = await axios.post("/auth/register", data)
        return response.data
    } catch (error) {
        console.log(error);
        const errorMessage = error.response.data.message || error.message
        toast.error(errorMessage)
    }
}
// login user
export const loginUser = async (data) => {
    try {
        const response = await axios.post("/auth/login", data)
        return response.data
    } catch (error) {
        console.log(error);
        const errorMessage = error.response.data.message || error.message
        toast.error(errorMessage)
    }
}