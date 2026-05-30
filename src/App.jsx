import Homepage from "./pages/Homepage"

import { Routes, Route } from "react-router-dom"


import AlamatDetailpage from "./pages/AlamatDetailpage"
import Kuispage from "./pages/Kuispage"
import Klasifikasikan from "./pages/Klasifikasikan"
import Loginpage from "./pages/Loginpage"
import RegisterPage from "./pages/Registerpage"
import MainLayout from "./layout/MainLayout"
import { Navigate } from "react-router-dom"
import ProfilePage from "./pages/Profilepage"
import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"

function App() {


  return (
    <>
      <div className="animate-page">
        <Routes>

          <Route path="/" element={<Navigate to="/register" />} />


          <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/alamatdetail-event" element={<AlamatDetailpage />} />
            <Route path="/klasifikasi-event" element={<Klasifikasikan />} />
            <Route path="/kuis-event" element={<Kuispage />} />
            <Route path="/profile-event" element={<ProfilePage />}></Route>
          </Route>

         <Route
          path="/login"
           element={
           <PublicRoute>
            <Loginpage />
            </PublicRoute>
          }
         />

          <Route
           path="/register"
           element={
           <PublicRoute>
            <RegisterPage />
             </PublicRoute>
            }
            />

        </Routes>
      </div>
    </>
  )
}

export default App
