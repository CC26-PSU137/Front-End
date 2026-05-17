import Homepage from "./pages/Homepage"

import { Routes, Route } from "react-router-dom"


import AlamatDetailpage from "./pages/AlamatDetailpage"
import Kuispage from "./pages/Kuispage"
import Klasifikasikan from "./pages/Klasifikasikan"
import Loginpage from "./pages/Loginpage"
import RegisterPage from "./pages/Registerpage"
import MainLayout from "./layout/MainLayout"

function App() {


  return (
    <>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/alamatdetail-event" element={<AlamatDetailpage />} />
          <Route path="/klasifikasi-event" element={<Klasifikasikan />} />
          <Route path="/kuis-event" element={<Kuispage />} />
        </Route>

        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </>
  )
}

export default App
