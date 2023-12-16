import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_AUTH_DIALOG, SET_LOGIN, SET_USER } from '../../redux/features/auth/authSlice';
import { IoLogoGoogle } from "react-icons/io5";
import { jwtDecode } from 'jwt-decode';
import { loginUserGoogle } from '../../redux/features/auth/authServices';
import toast from 'react-hot-toast';

const AuthDialog = () => {

    const dispatch = useDispatch()
    const { authDialog } = useSelector(state => state.auth)

    function closeModal() {
        dispatch(SET_AUTH_DIALOG(false))
    }

    function openModal() {
        dispatch(SET_AUTH_DIALOG(true))
    }

    async function handleCallback(response) {
        try {
            const userObj = jwtDecode(response.credential)
            const userData = {
                name: userObj.name,
                email: userObj.email,
                profile: {
                    link: userObj.picture
                }
            }
            console.log(userObj);
            const data = await loginUserGoogle(userData)
            dispatch(SET_USER(data.user))
            dispatch(SET_LOGIN(true))
            dispatch(SET_AUTH_DIALOG(false))
            window.localStorage.setItem('token', data.token)
            toast.success("Logged In")
        } catch (error) {
            console.log(error);
            toast.error("Error occurred while login.")
        }
    }

    setTimeout(() => {
        // eslint-disable-next-line no-undef
        google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: handleCallback
        })
        // eslint-disable-next-line no-undef
        google.accounts.id.renderButton(
            document.getElementById('signIn'),
            { theme: 'filled_blue', size: 'fill', shape: 'square' }
        );
    }, 100);

    return (
        <>
            <button className='px-2 py-1 text-white bg-blue-600 rounded-full flex gap-1.5 font-semibold items-center' type='button' onClick={openModal} ><IoLogoGoogle size={16} />Login </button>
            <Transition appear show={authDialog} as={Fragment}>
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
                        <div className="fixed inset-0 bg-white/25 dark:bg-black/25 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-sm border-2 dark:border-slate-800 h-[190px] transform overflow-hidden rounded-lg bg-white dark:bg-slate-900 p-4 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-3xl font-bold text-slate-800 dark:text-slate-200"
                                    >
                                        Login
                                    </Dialog.Title>
                                    <p className=' mt-2 font-semibold text-slate-600 dark:text-slate-400' >Welcome! Log in to continue exploring and sharing your innovative ideas.</p>
                                    <div className='mt-4 flex items-center justify-center' >
                                        <button className='focus:outline-none' id='signIn'></button>
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

export default AuthDialog