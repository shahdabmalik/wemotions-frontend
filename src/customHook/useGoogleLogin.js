import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loginStatus, loginUserGoogle } from "../redux/features/auth/authServices"
import { SET_LOGIN, SET_USER } from "../redux/features/auth/authSlice"
import { jwtDecode } from "jwt-decode"
import toast from "react-hot-toast"


const useGoogleLogin = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.onload = () => checkLogin();
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // handle login function
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
            const data = await loginUserGoogle(userData)
            dispatch(SET_USER(data.user))
            dispatch(SET_LOGIN(true))
            window.localStorage.setItem('token', data.token)
            toast.success("Logged In")
        } catch (error) {
            console.log(error);
            toast.error("Error occurred while login.")
        }
    }
    // check login function
    async function checkLogin() {
        const data = await loginStatus()
        if (data) {
            dispatch(SET_USER(data.user))
            dispatch(SET_LOGIN(true))
        } else {
            // eslint-disable-next-line no-undef
            google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
                callback: handleCallback
            })
            // eslint-disable-next-line no-undef
            google.accounts.id.prompt()
        }
    }
}

export default useGoogleLogin