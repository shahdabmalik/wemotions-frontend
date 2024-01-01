import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Oval } from "react-loader-spinner"

const ContactForm = () => {

    const { handleSubmit, register, setValue, formState: { errors } } = useForm()
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const onSubmit = async (data) => {
        try {
            setIsLoading(true)
            const response = await axios.post("/contact", data)
            toast.success(response?.data?.message)
            setSuccess(true)
            setValue('name', '')
            setValue('email', '')
            setValue('message', '')
            setIsLoading(false)
        } catch (error) {
            setSuccess(false)
            setIsLoading(false)
            console.log(error);
            const message = error.response.data.message || error.message
            toast.error(message)
        }
    }
    return (
        <div className="mt-16" >
            <h3 className="text-3xl xs:text-4xl md:text-5xl font-inter font-bold text-slate-900 dark:text-slate-100" >Get in Touch!</h3>
            <form onSubmit={handleSubmit(onSubmit)}
                className="bg-white dark:bg-slate-950 mt-4 md:mt-8 p-4 shadow-lg border-2 dark:border-slate-700 rounded"
            >
                <div className="flex flex-col gap-1 font-inter relative" >
                    <label className="font-semibold text-sm text-slate-800 dark:text-slate-100">Full Name:</label>
                    <input type="text" name="name" id="name"
                        {...register('name', { required: 'Please enter your name' })}
                        className="h-10 bg-transparent border dark:border-slate-700 rounded focus:outline-none p-2 " />
                    {errors.name && <p className="text-[11px] text-red-600 font-semibold absolute -bottom-[20px] right-0.5">{errors.name.message}</p>}
                </div>
                <div className="relative mt-4 flex flex-col gap-1 font-inter" >
                    <label className="font-semibold text-sm text-slate-800 dark:text-slate-100 ">Email:</label>
                    <input type="email" id="email" name="email"
                        {...register('email', {
                            required: 'Please enter you email address',
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email format"
                            }
                        })}
                        className="w-full h-10 bg-transparent dark:border-slate-700 focus:outline-none border rounded p-2"
                    />
                    {errors.email && <p className="text-[11px] text-red-600 font-semibold absolute -bottom-[20px] right-0.5">{errors.email.message}</p>}
                </div>
                <div className="mt-4 flex flex-col gap-1.5 font-inter relative" >
                    <label className="font-semibold text-sm  text-slate-800 dark:text-slate-100" >Message:</label>
                    <textarea name="message" id="message"
                        {...register('message', {
                            required: 'Please enter your message',
                            minLength: { value: 20, message: "Motion must be upto 20 characters." },
                        })}
                        className=" h-32 w-full p-2 border rounded bg-transparent dark:border-slate-700 focus:outline-none " />
                    {errors.message && <p className="text-[11px] text-red-600 font-semibold absolute -bottom-[20px] right-0.5">{errors.message.message}</p>}
                </div>
                <button type="submit" className="flex items-center justify-center h-11 border-none bg-blue-700 hover:bg-blue-600 text-white font-semibold w-full rounded mt-6" >
                    {!isLoading ? "Send" : <Oval
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
            {success && <p className="mt-4 font-medium text-center" >Mail received, We will be in touch with you soon...</p>}
        </div>
    )
}

export default ContactForm