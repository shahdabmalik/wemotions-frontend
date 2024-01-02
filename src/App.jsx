import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import axios from "axios"
import { Toaster } from "react-hot-toast"
import Entity from "./pages/entity/Entity"
import AllMotions from "./pages/allMotions/AllMotions"
import AllEntities from "./pages/allEntities/AllEntities"
import EntitiesSearch from "./pages/allEntities/EntitiesSearch"
import Manifesto from "./pages/manifesto/Manifesto"
import AdminLogin from "./pages/adminLogin/AdminLogin"
import AdminDashboard from "./pages/adminDashboard/AdminDashboard"
import UsersPanel from "./pages/adminDashboard/UsersPanel"
import PagesPanel from "./pages/adminDashboard/PagesPanel"
import AddPage from "./pages/adminDashboard/AddPage"
import EntityPage from "./pages/adminDashboard/EntityPage"
import EditPage from "./pages/adminDashboard/EditPage"
// import Dashboard from "./pages/dashboard/Dashboard"
// import Login from "./pages/login/Login"

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
        <Route path="/motions" element={<AllMotions />} />
        <Route path="/pages" element={<AllEntities />} />
        <Route path="/manifesto" element={<Manifesto />} />
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/users"
          element={
            <AdminDashboard>
              <UsersPanel />
            </AdminDashboard>
          }
        />
        <Route path="/admin/pages"
          element={
            <AdminDashboard>
              <PagesPanel />
            </AdminDashboard>
          }
        />
        <Route path="admin/pages/add"
          element={
            <AdminDashboard>
              <AddPage />
            </AdminDashboard>
          }
        />
        <Route path="/admin/pages/edit/:id"
          element={
            <AdminDashboard>
              <EditPage />
            </AdminDashboard>
          }
        />
        <Route path="admin/pages/:id"
          element={
            <AdminDashboard>
              <EntityPage />
            </AdminDashboard>
          }
        />
        <Route path="/pages/search/:search" element={<EntitiesSearch />} />
        <Route path="/:slug" element={<Entity />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
