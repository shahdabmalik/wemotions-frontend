import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import axios from "axios"
import useGoogleLogin from "./customHook/useGoogleLogin"
import { Toaster } from "react-hot-toast"
import Entity from "./pages/entity/Entity"
import AllMotions from "./pages/allMotions/AllMotions"
import AllEntities from "./pages/allEntities/AllEntities"
import EntitiesSearch from "./pages/allEntities/EntitiesSearch"
import Manifesto from "./pages/manifesto/Manifesto"
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
        <Route path="/motions" element={<AllMotions />} />
        <Route path="/pages" element={<AllEntities />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/pages/search/:search" element={<EntitiesSearch />} />
        <Route path="/:slug" element={<Entity />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
