import React from 'react';
import { Image } from '../data';
import { dataBankSampah } from '../data';


const AlamatDetailpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent to-gray-100 py-52  overflow-hidden">

      {/* BULAT BACKGROUND */}
      <div className="absolute top-20 left-10 w-52 h-52 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-cyan-300 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto w-fit px-4 relative z-10">

        {/* TITLE */}
        <h1 className=" flex text-5xl md:text-6xl font-black text-green-500 mb-6 justify-center">
          Bank Sampah Jakarta
        </h1>

        <p className="text-center flex items-center text-gray-600 font-bold text-lg leading-loose max-w-2xl mx-auto mb-20">
          Yuk cari lokasi bank sampah terdekat dan mulai menjaga bumi
          bersama-sama
        </p>

        {/* CARD */}
        <div className="space-y-14 flex flex-wrap gap-3 justify-around">

          {dataBankSampah.map((item) => (
            <div
              key={item.id}
              className="bg-white w-2xl rounded-[35px] shadow-2xl overflow-hidden grid md:grid-cols-2 gap-0 hover:scale-[1.01] transition-all duration-300"
            >

              {/* MAP */}
              <div className="p-5 bg-pink-50 flex items-center justify-center">

                <iframe
                  src={item.link}
                  width="100%"
                  height="320"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-[25px] shadow-xl border-[6px] border-white"
                ></iframe>

              </div>

              {/* INFO */}
              <div className="p-8 flex flex-col justify-center">

                {/* BADGE */}
                <div className={`bg-gradient-to-r bg-indigo-600 w-fit px-5 py-2 rounded-full text-white font-bold shadow-lg mb-6`}>
                  Bank Sampah
                </div>

                {/* KOTA */}
                <div className="flex items-center gap-4 mb-6">

                  <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center">
                    <i className="ri-earth-fill text-3xl text-cyan-500"></i>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Kota
                    </p>

                    <h1 className="text-2xl font-black text-indigo-700">
                      {item.kota}
                    </h1>
                  </div>

                </div>

                {/* ALAMAT */}
                <div className="flex items-center gap-4 mb-8">

                  <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-fill text-3xl text-pink-500"></i>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Alamat
                    </p>

                    <h1 className="text-xl font-bold text-gray-700">
                      {item.alamat}
                    </h1>
                  </div>

                </div>

                {/* BUTTON */}
                <button className="bg-green-500 hover:scale-105 transition-all duration-300 text-white font-black py-4 rounded-full shadow-xl">
                  <a href={item.anchor}>Lihat Maps</a>
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