import React from 'react';
import { Image } from '../data';
import { dataBankSampah } from '../data';

const AlamatDetailpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent to-gray-100 py-20 md:py-32 overflow-hidden relative">

      {/* BULAT BACKGROUND */}
      <div className="absolute top-20 left-10 w-40 h-40 md:w-52 md:h-52 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-44 h-44 md:w-60 md:h-60 bg-cyan-300 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 mt-24 relative z-10">

        {/* TITLE */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-6xl font-black text-green-500 mb-6 leading-tight">
          Bank Sampah Jakarta
        </h1>

        <p className="text-center text-gray-600 font-bold text-sm sm:text-base md:text-lg leading-loose max-w-2xl mx-auto mb-14 md:mb-20 px-2">
          Yuk cari lokasi bank sampah terdekat dan mulai menjaga bumi
          bersama-sama
        </p>

        {/* CARD */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          {dataBankSampah.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full rounded-[25px] md:rounded-[35px] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 hover:scale-[1.01] transition-all duration-300"
            >

              {/* MAP */}
              <div className="p-4 md:p-5 bg-pink-50 flex items-center justify-center">

                <iframe
                  src={item.link}
                  width="100%"
                  height="320"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-[20px] md:rounded-[25px] shadow-xl border-4 md:border-[6px] border-white"
                ></iframe>

              </div>

              {/* INFO */}
              <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">

                {/* BADGE */}
                <div className="bg-gradient-to-r bg-indigo-600 w-fit px-4 py-2 md:px-5 rounded-full text-white text-sm md:text-base font-bold shadow-lg mb-5 md:mb-6">
                  Bank Sampah
                </div>

                {/* KOTA */}
                <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">

                  <div className="bg-green-500 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="ri-building-2-fill text-2xl"></i>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs md:text-sm">
                      Kota
                    </p>

                    <h1 className="text-xl sm:text-2xl font-black text-green-700 break-words">
                      {item.kota}
                    </h1>
                  </div>

                </div>

                {/* ALAMAT */}
                <div className="flex items-start gap-3 md:gap-4 mb-6 md:mb-8">

                  <div className="bg-pink-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-fill text-2xl md:text-3xl text-pink-500"></i>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs md:text-sm">
                      Alamat
                    </p>

                    <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 leading-relaxed break-words">
                      {item.alamat}
                    </h1>
                  </div>

                </div>

                {/* BUTTON */}
                <button className="w-full md:w-fit px-8 bg-green-500 hover:scale-105 transition-all duration-300 text-white font-black py-3 md:py-4 rounded-full shadow-xl">
                  <a href={item.anchor} target="_blank" rel="noopener noreferrer">
                    Lihat Maps
                  </a>
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default AlamatDetailpage;