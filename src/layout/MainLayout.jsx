import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
    const location = useLocation();
    return (
        <div >
            <Navbar />
            <main key={location.pathname}
                className='animate-page'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
