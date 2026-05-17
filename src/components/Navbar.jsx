import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const handleClick = () => {
    setMenuActive(!menuActive)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  })




  return (
    <>
      <div className={`navbar fixed z-50 w-full bg-white ${scrolled ? "border-b-2 border-stone-900" : ""}`}>
        <div className="container mx-auto px-2">
          <div className="navbar-box  flex items-center justify-between py-6">
            <div className="logo">
              <h1 className='text-3xl font-bold'>SOLO</h1>
            </div>

            <div className={`menu flex gap-10 absolute md:static left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 flex-col md:flex-row w-full  text-center  ${menuActive ? "top-16 opacity-100" : "-top-72 opacity-0"} md:w-auto py-10  md:py-0 transition-all md:transition-none bg-white -z-10 md:z-0 md:opacity-100`}>
              <NavLink to={""}>Beranda</NavLink>
              <NavLink to={"alamatdetail-event"}>Alamat Detail Bank Sampah</NavLink>
              <NavLink to={"klasifikasi-event"}>Klasifikasikan</NavLink>
              <NavLink to={"kuis-event"}>KUIS</NavLink>
            </div>

            <div className="menu-btn md:hidden block" onClick={handleClick}>
              <i className="ri-menu-3-line ri-2x "></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
