import axios from "axios";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const AddPage = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, control, formState: { errors } } = useForm()
    const token = window.localStorage.getItem('adminToken')
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data) => {
        const formData = {
            name: data?.name,
            type: data?.type?.value,
            socialMediaLinks: [
                { name: "twitter", link: data?.twitter.length > 0 ? data?.twitter : null },
                { name: "instagram", link: data?.instagram.length > 0 ? data?.instagram : null },
                { name: "facebook", link: data?.facebook.length > 0 ? data?.facebook : null },
                { name: "tiktok", link: data?.tiktok.length > 0 ? data?.tiktok : null },
                { name: "youtube", link: data?.youtube.length > 0 ? data?.youtube : null },
            ],
            additionalLinks: [
                data?.link1.length > 0 ? data?.link1 : null,
                data?.link2.length > 0 ? data?.link2 : null,
                data?.link3.length > 0 ? data?.link3 : null,
            ]
        }
        try {
            setIsLoading(true)
            const response = await axios.post("/entity/add", formData, {
                headers: { Authorization: `Bearer ${token}` }
            })
            toast.success(response?.data?.message)
            navigate("/admin/pages")
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            const message = error.response.data.message || error.message
            toast.error(message)
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-500" >Add Motion Page</h1>
            <div className="border rounded mt-5 border-slate-200 dark:border-slate-700 md:transition-colors p-4 bg-white dark:bg-slate-950 shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <h2 className=" font-bold text-purple-700 dark:text-purple-500 border-b border-s-teal-200 dark:border-slate-700 md:transition-colors pb-1" >Personal Information</h2>
                    <div className="grid gap-y-3 gap-x-8 md:grid-cols-2 lg:grid-cols-3 mt-4" >
                        <div className="relative flex flex-col gap-2" >
                            <label className='font-semibold text-slate-700 dark:text-slate-300 text-sm' >Name</label>
                            <input autoComplete="off" type="text" name="name" id="name"
                                {...register('name', {
                                    required: 'Please enter name',
                                })}
                                className="h-[38px] bg-white dark:bg-slate-950 border font-medium border-slate-300 dark:border-slate-700 md:transition-colors rounded focus:outline-none p-2 " />
                            {errors.name && <p className="text-[11px] text-red-600 font-semibold absolute -bottom-[20px] right-0.5">{errors.name.message}</p>}
                        </div>
                        <div className='relative flex flex-col gap-2'>
                            <label className='font-semibold text-slate-700 dark:text-slate-300 text-sm' >Type</label>
                            <Controller
                                name='type'
                                control={control}
                                rules={{ required: "Please select type" }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={[
                                            { value: 'person', label: 'Person' },
                                            { value: 'organization', label: 'Organization' },
                                        ]}
                                        isClearable
                                        className=' font-medium select-input'
                                    />
                                )}
                            />
                            {errors.type && <p className='absolute -bottom-5 right-0 text-xs text-red-600 dark:text-red-500 font-semibold' >{errors.type.message}</p>}
                        </div>
                    </div>
                    <h2 className=" mt-5 font-bold text-purple-700 dark:text-purple-500 border-b border-s-teal-200 dark:border-slate-700 md:transition-colors pb-1" >Social Media Links</h2>
                    <div className="grid gap-y-4 gap-x-8 md:grid-cols-2 lg:grid-cols-3 mt-4">
                        <div className="relative flex flex-col gap-2" >
                            <label className='font-semibold text-slate-700 dark:text-slate-300 text-sm' >Twitter</label>
                            <input autoComplete="off" type="text" name="twitter" id="twitter"
                                {...register('twitter', {
                                    pattern: {
                                        // eslint-disable-next-line no-useless-escape
                                        value: /^(https?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9(\.\?)?]+/,
                                        message: "Please enter valid twitter URL"
                                    }
                                })}
                                className="h-[38px] bg-white dark:bg-slate-950 border font-medium border-slate-300 dark:border-slate-700 md:transition-colors rounded focus:outline-none p-2 " />
                            {errors.twitter && <p className='absolute -bottom-5 right-0 text-xs text-red-600 dark:text-red-500 font-semibold' >{errors.twitter.message}</p>}
                        </div>
                        <div className="relative flex flex-col gap-2" >
                            <label className='font-semibold text-slate-700 dark:text-slate-300 text-sm' >Instagram</label>
                            <input autoComplete="off" type="text" name="instagram" id="instagram"
                                {...register('instagram', {
                                    pattern: {
                                        // eslint-disable-next-line no-useless-escape
                                        value: /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9(\.\?)?]+/,
                                        message: "Please enter valid instagram URL"
                                    }
                                })}
                                className="h-[38px] bg-white dark:bg-slate-950 border font-medium border-slate-300 dark:border-slate-700 md:transition-colors rounded focus:outline-none p-2 " />
                            {errors.instagram && <p className='absolute -bottom-5 right-0 text-xs text-red-600 dark:text-red-500 font-semibold' >{errors.instagram.message}</p>}
                        </div>
                        <div className="relative flex flex-col gap-2" >
                            <label className='font-semibold text-slate-700 dark:text-slate-300 text-sm' >Facebook</label>
                            <input autoComplete="off" type="text" name="facebook" id="facebook"
                                {...register('facebook', {
                                    pattern: {
                                        // eslint-disable-next-line no-useless-escape
                                        value: /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9(\.\?)?]+/,
                                        message: "Please enter valid facebook URL"
                                    }
                                })}
                                className="h-[38px] bg-white dark:bg-slate-950 border font-medium border-slate-300 dark:border-slate-700 md:transition-colors rounded focus:outline-none p-2 " />
                            {errors.facebook && <p className='absolute -bottom-5 right-0 text-xs text-red-600 dark:text-red-500 font-semibold' >{errors.facebook.message}</p>}
                        </div>
                        <div className="relative flex flex-col gap-2" >
                            <label className='font-semibold text-slate-700 dark:text-slate-300 text-sm' >TikTok</label>
                            <input autoComplete="off" type="text" name="tiktok" id="tiktok"
                                {...register('tiktok', {
                                    pattern: {
                                        // eslint-disable-next-line no-useless-escape
                                        value: /^(https?:\/\/)?(www\.)?tiktok\.com\/[a-zA-Z0-9(\.\?)?]+/,
                                        message: "Please enter valid tiktok URL"
                                    }
                                })}
                                className="h-[38px] bg-white dark:bg-slate-950 border font-medium border-slate-300 dark:border-slate-700 md:transition-colors rounded focus:outline-none p-2 " />
                            {errors.tiktok && <p className='absolute -bottom-5 right-0 text-xs text-red-600 dark:text-red-500 font-semibold' >{errors.tiktok.message}</p>}
                        </div>
                        <div className="relative flex flex-col gap-2" >
                            <label className='font-semibold text-slate-700 dark:text-slate-300 text-sm' >Youtube</label>
                            <input autoComplete="off" type="text" name="youtube" id="youtube"
                                {...register('youtube', {
                                    pattern: {
                                        // eslint-disable-next-line no-useless-escape
                                        value: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/[a-zA-Z0-9(\.\?)?]+/,
                                        message: "Please enter valid youtube URL"
                                    }
                                })}
                                className="h-[38px] bg-white dark:bg-slate-950 border font-medium border-slate-300 dark:border-slate-700 md:transition-colors rounded focus:outline-none p-2 " />
                            {errors.youtube && <p className='absolute -bottom-5 right-0 text-xs text-red-600 dark:text-red-500 font-semibold' >{errors.youtube.message}</p>}
                        </div>
                    </div>
                    <h2 className=" mt-5 font-bold text-purple-700 dark:text-purple-500 border-b border-s-teal-200 dark:border-slate-700 md:transition-colors pb-1" >Additional Links</h2>
                    <div className="grid gap-y-4 gap-x-8 md:grid-cols-2 lg:grid-cols-3 mt-4">
                        <div className="relative flex flex-col gap-2" >
                            <label className='font-semibold text-slate-700 dark:text-slate-300 text-sm' >Link</label>
                            <input autoComplete="off" type="text" name="link1" id="link1"
                                {...register('link1')}
                                className="h-[38px] bg-white dark:bg-slate-950 border font-medium border-slate-300 dark:border-slate-700 md:transition-colors rounded focus:outline-none p-2 " />
                        </div>
                        <div className="relative flex flex-col gap-2" >
                            <label className='font-semibold text-slate-700 dark:text-slate-300 text-sm' >Link</label>
                            <input autoComplete="off" type="text" name="link2" id="link2"
                                {...register('link2')}
                                className="h-[38px] bg-white dark:bg-slate-950 border font-medium border-slate-300 dark:border-slate-700 md:transition-colors rounded focus:outline-none p-2 " />
                        </div>
                        <div className="relative flex flex-col gap-2" >
                            <label className='font-semibold text-slate-700 dark:text-slate-300 text-sm' >Link</label>
                            <input autoComplete="off" type="text" name="link3" id="link3"
                                {...register('link3')}
                                className="h-[38px] bg-white dark:bg-slate-950 border font-medium border-slate-300 dark:border-slate-700 md:transition-colors rounded focus:outline-none p-2 " />
                        </div>
                    </div>
                    <button type="submit" disabled={isLoading} className="w-full xs:w-40 flex items-center justify-center border mt-5 h-10 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 border-purple-700" >
                        {!isLoading ? "Submit" :
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
    )
}

export default AddPage