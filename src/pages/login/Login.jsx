import { useForm } from "react-hook-form"
import Navbar from "../../components/navbar/Navbar"
import loginAnimation from "../../assets/login.json"
import { Link, useNavigate } from "react-router-dom"
import Lottie from "lottie-react"
import { useState } from "react"
import { Oval } from "react-loader-spinner"
import { useDispatch } from "react-redux"
import { SET_LOGIN, SET_USER } from "../../redux/features/auth/authSlice"
import { loginUser } from "../../redux/features/auth/authServices"

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { handleSubmit, register, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        const formData = {
            emailUsername: data.emailUsername,
            password: data.password
        }
        try {
            setIsLoading(true)
            const data = await loginUser(formData)
            dispatch(SET_USER(data.user))
            dispatch(SET_LOGIN(true))
            window.localStorage.setItem('token', data.token)
            setIsLoading(false)
            navigate("/dashboard")
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

    return (
        <div className='w-full bg-slate-100 dark:bg-slate-950 transition-all duration-300 ease-linear text-slate-700 dark:text-slate-300' >
            <Navbar />
            <div className="max-w-screen-2xl mx-auto min-h-screen flex items-center justify-center px-4 md:px-10" >
                <div className="flex justify-center w-full ">
                    <div className="max-w-[400px] min-h-[450px] bg-white dark:bg-slate-900 transition-all duration-300 ease-linear w-full p-5 flex flex-col gap-4  border dark:border-slate-800 rounded-md lg:rounded-e-none overflow-hidden" >
                        <div>
                            <h1 className=" font-inter text-3xl font-bold text-blue-700 dark:text-blue-600" >Login</h1>
                            <p className="text-sm mt-1 font-medium" >Welcome back! Log in to continue exploring and sharing your innovative ideas.</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex-grow flex flex-col gap-6 justify-center mt-4">
                            <div className="flex flex-col gap-1.5 font-poppins relative" >
                                <input type="text" name="emailUsername" id="emailUsername"
                                    {...register('emailUsername', { required: 'Please enter username or email', })}
                                    placeholder="Username or email"
                                    className="h-10 bg-slate-100 dark:bg-slate-950 border dark:border-slate-800 placeholder:text-sm dark:placeholder:text-slate-600 dark:placeholder:font-semibold transition-all duration-300 ease-linear rounded focus:outline-none p-2 " />
                                {errors.username && <p className="text-[11px] text-red-600 font-semibold absolute -bottom-[20px] right-0.5">{errors.username.message}</p>}
                            </div>
                            <div className="flex flex-col gap-1.5 font-poppins relative" >
                                <input type="password" name="password" id="password"
                                    {...register('password', { required: 'Please provide a password', })}
                                    placeholder="Password"
                                    className="h-10 bg-slate-100 dark:bg-slate-950 border dark:border-slate-800 placeholder:text-sm dark:placeholder:text-slate-600 dark:placeholder:font-semibold transition-all duration-300 ease-linear rounded focus:outline-none p-2 " />
                                {errors.password && <p className="text-[11px] text-red-600 font-semibold absolute -bottom-[20px] right-0.5">{errors.password.message}</p>}
                            </div>
                            <button type="submit" disabled={isLoading} className="h-10 bg-blue-700 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700 mt-2 rounded font-semibold flex items-center justify-center" >
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
                        <p className="text-center text-sm" >Don&apos;t have an account? <Link className="font-semibold text-blue-600" to="/register">Register</Link> </p>
                    </div>
                    <div className=" hidden max-w-md w-full bg-white dark:bg-slate-900 transition-all duration-300 ease-linear  border dark:border-slate-800 rounded-e-md lg:flex items-center">
                        <Lottie className="block flex-grow p-16" animationData={loginAnimation} loop={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login