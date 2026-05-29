import React, { useState, useEffect } from 'react';

const Klasifikasikan = () => {
  const [hasilAI, setHasilAI] = useState(null);
  const [file, setFile] = useState(null);
  const [gambar, setGambar] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  // HISTORY
  const [history, setHistory] = useState(() => {

    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const savedHistory = localStorage.getItem(
      `history-${currentUser?.email}`
    );

    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {

    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    localStorage.setItem(
      `history-${currentUser?.email}`,
      JSON.stringify(history)
    );

  }, [history]);
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {

      setFile(selectedFile);

      setGambar(
        URL.createObjectURL(selectedFile)
      );
    }
  };

  const klasifikasiHandle = async () => {

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("image", file);

      const response = await fetch(
        "https://backend-solo-cc26-psu137-production.up.railway.app/api/classification",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (result.status === "success") {

        setHasilAI(result.data);

        const hasilBaru = {
          id: Date.now(),
          jenis: result.data.prediction,
          tanggal: new Date().toLocaleDateString(),
          gambar: result.data.imageUrl,
        };

        setHistory([hasilBaru, ...history]);

        setShowPopup(true);

      } else {

        alert(result.message);
      }

    } catch (error) {

      console.log(error);

      alert("Terjadi kesalahan");

    } finally {

      setLoading(false);
    }
  };

  const hapusHistory = (id) => {

    const filterHistory = history.filter(
      (item) => item.id !== id
    );

    setHistory(filterHistory);
  };
  return (
   <div className="min-h-screen bg-gradient-to-b from-transparent to-gray-200 px-4 sm:px-6 md:px-10 lg:px-16 py-10 overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-green-300 rounded-full blur-3xl opacity-40"></div>
  <div className="absolute bottom-10 right-10 w-52 h-52 bg-green-500 rounded-full blur-3xl opacity-40"></div>

  <div className="relative z-10 flex flex-col items-center">

    {/* CARD */}
    <div className="relative bg-white shadow-2xl mt-36 rounded-[35px] p-5 sm:p-8 w-full max-w-md mt-10 sm:mt-24 md:mt-24 border-[6px] border-white">

      {/* ICON */}
      <div className="flex justify-center mb-5">
        <div className="bg-green-100 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-lg">
          <i className="ri-camera-fill text-4xl sm:text-5xl text-green-500"></i>
        </div>
      </div>

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-green-500 mb-3">
        Upload Sampah
      </h2>

      <p className="text-center leading-relaxed mb-8 text-green-500 text-sm sm:text-base">
        Upload gambar sampah lalu biarkan AI membantu
        mengenali jenis sampahmu
      </p>

      {/* UPLOAD */}
      <label
        htmlFor="upload"
        className="flex flex-col items-center justify-center w-full h-44 sm:h-52 border-4 border-solid hover:shadow-2xl border-green-300 rounded-[30px] cursor-pointer hover:bg-green-100 transition-all duration-300"
      >
        <div className="bg-green-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4">
          <i className="ri-upload-2-line text-white text-2xl sm:text-3xl"></i>
        </div>

        <span className="text-indigo-700 font-bold text-base sm:text-lg text-center">
          Klik untuk upload gambar
        </span>

        <span className="text-xs sm:text-sm text-gray-400 mt-2">
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
          <p className="text-indigo-700 font-black text-lg sm:text-xl mb-4 text-center">
            Preview Gambar
          </p>

          <div className="bg-pink-50 p-3 rounded-[30px] shadow-inner">
            <img
              src={gambar}
              alt="Preview"
              className="w-full h-52 sm:h-64 object-cover rounded-[25px] shadow-lg"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={klasifikasiHandle}
            className='bg-green-400 cursor-pointer text-white rounded-full w-full py-4 mt-8 hover:scale-105 transition-all duration-300 text-base sm:text-lg shadow-xl font-black'
          >
            Klasifikasikan Sekarang
          </button>
        </div>
      )}

      {/* LOADING POPUP */}
      {loading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-[35px] p-5 sm:p-8 w-full max-w-sm text-center shadow-2xl border-[6px] border-white">

            {/* ICON ANIMASI */}
            <div className="relative flex justify-center mb-6">

              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-green-200 animate-ping absolute"></div>

              <div className="relative bg-green-500 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-xl">
                <i className="ri-ai-generate text-white text-5xl sm:text-6xl animate-bounce"></i>
              </div>

            </div>

            {/* TEXT */}
            <h1 className="text-2xl sm:text-3xl font-black text-indigo-700 mb-4">
              SOLO AI Sedang Berpikir <i className="ri-robot-2-line"></i>
            </h1>

            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Tunggu yaa...
              AI sedang mengenali jenis sampahmu
            </p>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-6">

              <div className="w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>

              <div
                className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>

              <div
                className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>

            </div>

          </div>
        </div>
      )}

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
          <div className="bg-white p-5 sm:p-8 rounded-[35px] shadow-2xl w-full max-w-sm text-center">

            {/* ICON */}
            <div className="flex justify-center mb-5">
              <div className="bg-green-200 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center">
                <i className="ri-checkbox-circle-fill text-5xl sm:text-6xl text-green-500"></i>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-green-500 mb-4">
              Horeee!
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Gambar berhasil diklasifikasikan oleh AI
            </p>

            {/* RESULT */}
            <div className="bg-green-500 rounded-2xl p-4 mt-6">
              <p className="text-base sm:text-lg font-bold text-white">
                Jenis Sampah:
              </p>

              <h1 className="text-2xl sm:text-3xl font-black text-white mt-2 break-words">
                {hasilAI?.prediction}
              </h1>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => setShowPopup(false)}
              className="mt-8 bg-green-500 hover:bg-green-600 cursor-pointer text-white px-4 py-3 rounded-full w-full font-black text-base sm:text-lg shadow-lg transition-all duration-300"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>

    {/* HISTORY SECTION */}
    <div className="w-full mt-10 sm:mt-16 bg-white rounded-[35px] shadow-2xl p-4 sm:p-8 overflow-x-auto border-[6px] border-white">

      {/* TITLE */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">

        <div className="bg-green-200 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center">
          <i className="ri-history-fill text-3xl sm:text-4xl text-green-600"></i>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-green-500">
            History Klasifikasi
          </h1>

          <p className="text-gray-500 text-sm sm:text-base">
            Riwayat sampah yang sudah diklasifikasikan
          </p>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full overflow-hidden rounded-3xl">

          <thead>
            <tr className="bg-green-500 text-white">
              <th className="py-5 px-4 text-left rounded-tl-3xl">Gambar</th>
              <th className="py-5 px-4 text-left">Jenis Sampah</th>
              <th className="py-5 px-4 text-left">Tanggal</th>
              <th className="py-5 px-4 text-left rounded-tr-3xl">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>

            {history.length > 0 ? (
              history.map((item) => (
                <tr
                  key={item.id}
                  className="border-b-2 border-pink-100 hover:bg-green-50 transition-all"
                >
                  <td className="py-4 px-4">
                    <img
                      src={item.gambar}
                      alt=""
                      className="w-20 h-20 object-cover rounded-2xl shadow-md"
                    />
                  </td>

                  <td className="py-5 px-4">
                    <h1 className="text-lg sm:text-xl text-black">
                      {item.jenis}
                    </h1>
                  </td>

                  <td className="py-5 px-4">
                    <p className="font-semibold text-gray-600 text-sm sm:text-base">
                      {item.tanggal}
                    </p>
                  </td>

                  <td className="py-4 px-4">
                    <button
                      onClick={() => hapusHistory(item.id)}
                      className="bg-red-500 hover:bg-red-700 cursor-pointer text-white px-4 py-2 rounded-xl font-bold transition-all"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="py-12 text-center bg-gray-50 rounded-b-3xl"
                >
                  <div className="flex flex-col items-center justify-center gap-2 text-gray-400">

                    <i className="ri-inbox-archive-line text-5xl"></i>

                    <span className="font-bold text-lg">
                      Belum ada riwayat klasifikasi
                    </span>

                    <p className="text-sm">
                      Silakan upload dan proses foto sampah Anda terlebih dahulu.
                    </p>

                  </div>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

    </div>

  </div>
</div>
  );
};

export default Klasifikasikan;