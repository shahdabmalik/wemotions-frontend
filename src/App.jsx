import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import axios from "axios"
import useGoogleLogin from "./customHook/useGoogleLogin"
import { Toaster } from "react-hot-toast"
// import Dashboard from "./pages/dashboard/Dashboard"
// import Login from "./pages/login/Login"

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL

function App() {

  useGoogleLogin()

  return (
    <BrowserRouter>
      <Toaster
        toastOptions={{
          className: "toast"
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
