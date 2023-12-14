import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import { Toaster } from "react-hot-toast"
import axios from "axios"
import Dashboard from "./pages/dashboard/Dashboard"
import Login from "./pages/login/Login"

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL

function App() {

  return (
    <BrowserRouter>
      <Toaster
        toastOptions={{
          className: "toast"
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
