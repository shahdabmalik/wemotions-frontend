import axios from "axios"
import toast from "react-hot-toast";

const token = window.localStorage.getItem("token")
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// top motions function
export const getTopMotions = async (sort) => {
    try {
        const response = await axios.get(`/idea?sort=${sort}`)
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response.data.message || error.message
        toast.error(message)
    }
}
