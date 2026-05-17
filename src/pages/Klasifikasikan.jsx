import React, { useState } from 'react';

const Klasifikasikan = () => {
  const [gambar, setGambar] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setGambar(URL.createObjectURL(file));
    }
  };

  const klasifikasiHandle = (e) => {
    setShowPopup(true);

  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-pink-100 to-yellow-100 flex items-center justify-center p-5 overflow-hidden">

      {/* BACKGROUND BULAT */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-cyan-300 rounded-full blur-3xl opacity-40"></div>

      {/* CARD */}
      <div className="relative bg-white shadow-2xl rounded-[35px] p-8 w-full max-w-md mt-20 border-[6px] border-white">

        {/* ICON */}
        <div className="flex justify-center mb-5">
          <div className="bg-pink-200 w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
            <i className="ri-camera-fill text-5xl text-pink-500"></i>
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl font-black text-center text-indigo-700 mb-3">
          Upload Sampah ♻️
        </h2>

        <p className="text-center text-gray-500 leading-relaxed mb-8">
          Upload gambar sampah lalu biarkan AI membantu
          mengenali jenis sampahmu ✨
        </p>

        {/* UPLOAD */}
        <label
          htmlFor="upload"
          className="flex flex-col items-center justify-center w-full h-52 border-4 border-dashed border-pink-300 rounded-[30px] cursor-pointer hover:bg-pink-50 transition-all duration-300"
        >

          <div className="bg-yellow-200 w-20 h-20 rounded-full flex items-center justify-center mb-4">
            <i className="ri-upload-cloud-2-fill text-4xl text-yellow-700"></i>
          </div>

          <span className="text-indigo-700 font-bold text-lg">
            Klik untuk upload gambar
          </span>

          <span className="text-sm text-gray-400 mt-2">
            PNG, JPG, JPEG
          </span>
        </label>

        <input
          id="upload"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />

        {/* PREVIEW */}
        {gambar && (
          <div className="mt-8">

            <p className="text-indigo-700 font-black text-xl mb-4 text-center">
              Preview Gambar 📸
            </p>

            <div className="bg-pink-50 p-3 rounded-[30px] shadow-inner">
              <img
                src={gambar}
                alt="Preview"
                className="w-full h-64 object-cover rounded-[25px] shadow-lg"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={klasifikasiHandle}
              className='bg-gradient-to-r from-pink-400 to-indigo-400 text-white rounded-full w-full py-4 mt-8 hover:scale-105 transition-all duration-300 font-black text-lg shadow-xl'
            >
              Klasifikasikan Sekarang 🚀
            </button>

          </div>
        )}

        {/* POPUP */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">

            <div className="bg-white p-8 rounded-[35px] shadow-2xl w-full max-w-sm text-center ">

              {/* ICON */}
              <div className="flex justify-center mb-5">
                <div className="bg-green-200 w-24 h-24 rounded-full flex items-center justify-center">
                  <i className="ri-checkbox-circle-fill text-6xl text-green-500"></i>
                </div>
              </div>

              <h2 className="text-3xl font-black text-indigo-700 mb-4">
                Horeee! 🎉
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Gambar berhasil diklasifikasikan oleh AI ✨
              </p>

              {/* RESULT */}
              <div className="bg-yellow-100 rounded-2xl p-4 mt-6">
                <p className="text-lg font-bold text-yellow-700">
                  Jenis Sampah:
                </p>

                <h1 className="text-3xl font-black text-pink-500 mt-2">
                  Plastik 🧴
                </h1>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setShowPopup(false)}
                className="mt-8 bg-pink-400 hover:bg-pink-500 text-white px-4 py-3 rounded-full w-full font-black text-lg shadow-lg transition-all duration-300"
              >
                Tutup
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Klasifikasikan;