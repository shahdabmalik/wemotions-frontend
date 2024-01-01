import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Oval } from "react-loader-spinner"
import { useDispatch } from "react-redux"
import DarkModeBtn from "../../components/darkModeBtn/DarkModeBtn"
import axios from "axios"
import toast from "react-hot-toast"
import { SET_ADMINUSER, SET_ADMINUSER_LOGIN } from "../../redux/features/admin/adminSlice"

const AdminLogin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { handleSubmit, register, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        try {
            setIsLoading(true)
            const response = await axios.post("/admin/login", data)
            dispatch(SET_ADMINUSER(response?.data?.admin))
            dispatch(SET_ADMINUSER_LOGIN(true))
            window.localStorage.setItem('adminToken', response?.data?.adminToken)
            toast.success("Logged In")
            setIsLoading(false)
            navigate("/admin/pages")
        } catch (error) {
            console.log(error);
            const message = error.response.data.message || error.message
            toast.error(message)
            setIsLoading(false)
        }
    }

    return (
        <div className='w-full bg-white dark:bg-slate-950 transition-colors text-slate-700 dark:text-slate-300' >
            <div className="max-w-screen-xl mx-auto min-h-screen flex items-center justify-center px-4 md:px-10 relative" >
                <div className="absolute top-4 right-5 border-2 h-10 w-10 border-purple-500 rounded-full p-1 aspect-square flex items-center justify-center" ><DarkModeBtn /></div>
                <div className="flex justify-center w-full ">
                    <div className="max-w-[400px] bg-white dark:bg-slate-900 transition-colors w-full p-5 flex flex-col gap-4 border-2 dark:border-slate-800 rounded-md shadow-lg overflow-hidden" >
                        {/* <h1 className=" font-inter text-3xl font-bold text-blue-700 dark:text-blue-600" >Login</h1> */}
                        <form onSubmit={handleSubmit(onSubmit)} className="flex-grow flex flex-col gap-6 justify-center mt-4">
                            <div className="flex flex-col gap-1.5 font-poppins relative" >
                                <input type="email" name="email" id="email"
                                    {...register('email', {
                                        required: 'Please enter you email address',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Invalid email format"
                                        }
                                    })}
                                    placeholder="Email"
                                    className="h-10 bg-white dark:bg-slate-950 border dark:border-slate-800 placeholder:text-sm dark:placeholder:text-slate-600 dark:placeholder:font-semibold transition-colors rounded focus:outline-none p-2 " />
                                {errors.email && <p className="text-[11px] text-red-600 font-semibold absolute -bottom-[20px] right-0.5">{errors.email.message}</p>}
                            </div>
                            <div className="flex flex-col gap-1.5 font-poppins relative" >
                                <input type="password" name="password" id="password"
                                    {...register('password',
                                        {
                                            required: 'Please provide a password',
                                            minLength: { value: 8, message: "Password must be upto 8 characters" },
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                message: "Include a number and a special character"
                                            }
                                        })}
                                    placeholder="Password"
                                    className="h-10 bg-white dark:bg-slate-950 border dark:border-slate-800 placeholder:text-sm dark:placeholder:text-slate-600 dark:placeholder:font-semibold transition-colors rounded focus:outline-none p-2 " />
                                {errors.password && <p className="text-[11px] text-red-600 font-semibold absolute -bottom-[20px] right-0.5">{errors.password.message}</p>}
                            </div>
                            <button type="submit" disabled={isLoading} className="h-10 bg-purple-600 text-white hover:bg-blue-600 dark:hover:bg-purple-700 mt-2 rounded font-semibold flex items-center justify-center" >
                                {!isLoading ? "Login" :
                                    <Oval
                                        height={24}
                                        width={24}
                                        color="#ffffff"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                        ariaLabel='oval-loading'
                                        secondaryColor="#ffffff"
                                        strokeWidth={4}
                                        strokeWidthSecondary={3}
                                    />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin