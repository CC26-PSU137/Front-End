import React from 'react';

const dataBankSampah = [
  {
    id: 1,
    kota: "Bekasi, Jawa Barat",
    alamat: "Jl. Sukamulyo, Bekasi",
    warna: "from-pink-300 to-pink-400",
  },
  {
    id: 2,
    kota: "Jakarta Pusat",
    alamat: "Jl. Kalipasir Gg. Eretan",
    warna: "from-cyan-300 to-cyan-400",
  },
  {
    id: 3,
    kota: "Bandung, Jawa Barat",
    alamat: "Jl. Kebersihan No. 21",
    warna: "from-yellow-300 to-yellow-400",
  },
];

const AlamatDetailpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-pink-100 to-yellow-100 py-28 overflow-hidden">

      {/* BULAT BACKGROUND */}
      <div className="absolute top-20 left-10 w-52 h-52 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-cyan-300 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* TITLE */}
        <h1 className="text-center text-5xl md:text-6xl font-black text-indigo-700 mb-6">
          Bank Sampah 🌍
        </h1>

        <p className="text-center text-gray-600 text-lg leading-loose max-w-2xl mx-auto mb-20">
          Yuk cari lokasi bank sampah terdekat dan mulai menjaga bumi
          bersama-sama ♻️✨
        </p>

        {/* CARD */}
        <div className="space-y-14">

          {dataBankSampah.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[35px] shadow-2xl overflow-hidden grid md:grid-cols-2 gap-0 hover:scale-[1.01] transition-all duration-300"
            >

              {/* MAP */}
              <div className="p-5 bg-pink-50 flex items-center justify-center">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5810536004005!2d106.83741691081518!3d-6.1867789605915116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43821b2c1e3%3A0xb1f7ae8e466e1421!2sJl.%20Kalipasir%20Gg.%20Eretan%2C%20Kb.%20Sirih%2C%20Kec.%20Menteng%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1778734774691!5m2!1sen!2sid"
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
                <div className={`bg-gradient-to-r ${item.warna} w-fit px-5 py-2 rounded-full text-white font-bold shadow-lg mb-6`}>
                  Bank Sampah ♻️
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
                <button className="bg-gradient-to-r from-indigo-400 to-pink-400 hover:scale-105 transition-all duration-300 text-white font-black py-4 rounded-full shadow-xl">
                  Kunjungi Lokasi 🚀
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