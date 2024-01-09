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
        console.log(data);
        try {
            let socialMediaLinks = [
                { name: "twitter", link: data?.twitter },
                { name: "instagram", link: data?.instagram },
                { name: "facebook", link: data?.facebook },
                { name: "tiktok", link: data?.tiktok },
                { name: "youtube", link: data?.youtube },
            ]

            const formData = new FormData()
            // Append simple text fields
            formData.append('name', data?.name);
            formData.append('type', data?.type?.value);
            // Append social media links
            socialMediaLinks?.forEach(link => {
                if (link.link && link.link.length > 0) {
                    formData.append(link?.name, link?.link);
                }
            });
            // Append additional links
            if (data.link1 && data.link1.length > 0) {
                formData.append('link1', data.link1);
            }
            if (data.link2 && data.link2.length > 0) {
                formData.append('link2', data.link2);
            }
            if (data.link3 && data.link3.length > 0) {
                formData.append('link3', data.link3);
            }

            // Append the image file if it exists
            if (data?.image && data?.image?.length > 0) {
                formData.append('image', data?.image[0]);
            }
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }
            setIsLoading(true)
            const response = await axios.post("/entity/add", formData, {
                headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" }
            })
            toast.success(response?.data?.message)
            navigate("/admin/pages")
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            const message = error?.response?.data?.message || error.message
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
                        <div className='relative flex flex-col gap-2'>
                            <label className='font-semibold text-slate-700 dark:text-slate-300 text-sm' >Type</label>
                            <input
                                type="file"
                                {...register('image', {
                                    required: 'Image is required',
                                    validate: {
                                        isImage: (files) => files[0]?.type.includes('image/') || 'Only images are allowed'
                                    }
                                })}
                                accept="image/*" // Accept only image files
                                className="flex items-center h-[38px] w-full cursor-pointer file:cursor-pointer border border-slate-300 dark:border-slate-700 rounded text-sm text-slate-800 dark:text-slate-200 dark:file:text-slate-100 focus:z-10 file:h-10 file:bg-gray-50 dark:file:bg-slate-900 file:border-0  file:me-4 file:py-1.5 file:px-4 "
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
                                        value: /^https:\/\/www\.tiktok\.com\/@/,
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