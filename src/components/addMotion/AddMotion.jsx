import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import { Fragment, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import AsyncSelect from "react-select/async"
import { SET_AUTH_DIALOG } from '../../redux/features/auth/authSlice'
import { debounce } from 'lodash'

const AddMotion = () => {

    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth)
    let [isOpen, setIsOpen] = useState(false)
    const { handleSubmit, control, setValue, register, formState: { errors } } = useForm()
    const [isLoading, setIsLoading] = useState(false)
    const token = window.localStorage.getItem('token')

    const onSubmit = async (data) => {
        console.log(data);
        const formData = {
            entityId: data.entity.value,
            userIdea: data.motion
        }
        try {
            setIsLoading(true)
            const { data } = await axios.post("/idea/add",
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            )
            setIsLoading(false)
            toast.success(data?.message)
            setValue('entity', "")
            setValue('motion', '')
            closeModal()
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            const message = error.response.data.message
            toast.error(message)
        }
    }

    // Debounced API call
    const debouncedLoadOptions = debounce(async (inputValue, callback) => {
        try {
            const response = await axios.get(`/entity/search?search=${inputValue}&limit=5`);
            callback(response?.data?.map(entity => ({ value: entity._id, label: entity.name })));
        } catch (error) {
            console.error('Error fetching entities:', error);
            callback([]);
        }
    }, 500); // 500ms debounce time

    const loadOptions = (inputValue, callback) => {
        debouncedLoadOptions(inputValue, callback);
    };


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        if (!isLoggedIn) {
            dispatch(SET_AUTH_DIALOG(true))
            return
        }
        setIsOpen(true)
    }

    return (
        <>
            <button type='button' onClick={openModal} className='bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded' >Add Motion</button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed z-50 inset-0 bg-black/25 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed z-50 inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform rounded-lg bg-white dark:bg-slate-900 p-4 pb-5 text-left align-middle shadow-xl transition-all overflow-visible">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl border-b pb-2 dark:border-slate-700 transition-colors font-bold leading-6 text-slate-800 dark:text-slate-200"
                                    >
                                        Add Motion
                                    </Dialog.Title>
                                    <div className="mt-5">
                                        <form onSubmit={handleSubmit(onSubmit)} >
                                            <div className='relative'>
                                                <label className='font-semibold text-slate-700 dark:text-slate-300' >Search Entity</label>
                                                <Controller
                                                    name='entity'
                                                    control={control}
                                                    rules={{ required: "Please select entity type" }}
                                                    render={({ field }) => (
                                                        <AsyncSelect
                                                            {...field}
                                                            loadOptions={loadOptions}
                                                            defaultOptions
                                                            placeholder={"Search Entity..."}
                                                            onChange={(option) => field.onChange(option)}
                                                            className='mt-2 font-semibold select-input capitalize'
                                                        />
                                                    )}
                                                />
                                                {errors.entityType && <p className='absolute -bottom-5 right-0 text-xs text-red-600 dark:text-red-500 font-semibold' >{errors.entityType.message}</p>}
                                            </div>
                                            <div className='mt-4 flex flex-col gap-2 relative'  >
                                                <label className='font-semibold text-slate-700 dark:text-slate-300' >Motion</label>
                                                <input type="motion" name="motion" id="motion"
                                                    {...register('motion', {
                                                        required: 'Please enter your motion',
                                                        minLength: { value: 20, message: "Motion must be upto 20 characters." },
                                                    })}
                                                    className="h-10 bg-white border border-slate-300 dark:border-slate-800 placeholder:text-sm dark:placeholder:text-slate-600 dark:placeholder:font-semibold transition-all duration-300 ease-linear rounded focus:outline-none p-2 " />
                                                {errors.motion && <p className="text-[11px] text-red-600 font-semibold absolute -bottom-[20px] right-0.5">{errors.motion.message}</p>}
                                            </div>
                                            <button type='submit' className='mt-8 flex items-center justify-center w-full h-11 rounded font-semibold bg-blue-700 text-white hover:bg-blue-600'>
                                                {!isLoading ? "Add Motion" :
                                                    <RotatingLines
                                                        strokeColor="white"
                                                        strokeWidth="4"
                                                        animationDuration="0.75"
                                                        width="28"
                                                        visible={true}
                                                    />}
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default AddMotion