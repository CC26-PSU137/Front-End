import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from "../data";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-auto z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4">

          <div className="flex items-center justify-between py-5">

            {/* LOGO */}
            <div className="flex items-center gap-3">

              <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                <i className="ri-recycle-fill text-3xl text-white"></i>
              </div>

              <div>
                <h1 className="text-3xl font-heading flex items-center font-black text-green-500">
                  SOLO
                </h1>
                <p className="text-sm font-heading text-gray-500 -mt-1">
                  Smart Trash AI
                </p>

              </div>
              <div className='flex -mt-2 items-center - relative z-10 '>
                <img
                  src={Image.SOLO_Fix} // Ganti atau sesuaikan dengan aset gambar laptop/ilustrasi isometrik Qreatif
                  alt="Qreatif Hero"
                  className='w-[100px] object-contain'
                />
              </div>
            </div>

            {/* MENU */}
            <div
              className={`
                absolute lg:static
                left-1/2 lg:left-0
                -translate-x-1/2 lg:-translate-x-0
                w-[90%] lg:w-auto
                flex flex-col lg:flex-row
                items-center
                gap-5 lg:gap-3
                bg-white lg:bg-white/70
                backdrop-blur-lg
                rounded-[30px]
                lg:rounded-full
                shadow-2xl lg:shadow-lg
                px-8 py-8 lg:py-3
                transition-all duration-500
                ${menuActive
                  ? "top-24 opacity-100"
                  : "-top-[500px] opacity-0 lg:opacity-100"
                }
              `}
            >

              <NavLink
                to="/homepage"
                className={({ isActive }) =>
                  `px-5 py-3 rounded-full  font-bold transition-all duration-300 ${isActive
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-green-500 hover:bg-green-100"
                  }`
                }
              >
                <i class="ri-home-smile-fill"></i> Home
              </NavLink>

              <NavLink
                to="alamatdetail-event"
                className={({ isActive }) =>
                  `px-5 py-3 rounded-full font-bold transition-all duration-300 ${isActive
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-green-500 hover:bg-green-100"
                  }`
                }
              >
                <i class="ri-map-pin-5-fill text-&#xEF0D;"></i> Bank Sampah
              </NavLink>

              <NavLink
                to="klasifikasi-event"
                className={({ isActive }) =>
                  `px-5 py-3 rounded-full font-bold transition-all duration-300 ${isActive
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-green-500 hover:bg-green-100"
                  }`
                }
              >
                <i class="ri-recycle-fill"></i> Klasifikasi
              </NavLink>

              <NavLink
                to="kuis-event"
                className={({ isActive }) =>
                  `px-5 py-3 rounded-full font-bold transition-all duration-300 ${isActive
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-green-500 hover:bg-green-100"
                  }`
                }
              >
                <i class="ri-game-2-line"></i> Quiz
              </NavLink>


              <NavLink
                to="profile-event"
                className={({ isActive }) =>
                  `px-5 py-3 rounded-full font-bold transition-all duration-300 ${isActive
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-green-500 hover:bg-green-100"
                  }`
                }
              >
                <i class="ri-account-circle-fill"></i> profile
              </NavLink>



            </div>

            {/* BUTTON MOBILE */}
            <div
              className="lg:hidden block"
              onClick={handleClick}
            >

              <button className="bg-green-600 cursor-pointer w-14 h-14 rounded-full shadow-xl flex items-center justify-center active:scale-95 transition-all">

                <i
                  className={`text-white text-3xl ${menuActive
                    ? "ri-close-line"
                    : "ri-menu-3-line"
                    }`}
                ></i>

              </button>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;