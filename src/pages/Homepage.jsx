import { Image, SekilasAcara, timDeveloper, dataKategori } from '../data';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const HomePage = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [selectedKategori, setSelectedKategori] = useState(null);

  const [showWelcome, setShowWelcome] = useState(false);

  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );

  useEffect(() => {

    const sudahMuncul = sessionStorage.getItem(
      "welcomeShown"
    );

    if (!sudahMuncul) {

      setShowWelcome(true);

      sessionStorage.setItem(
        "welcomeShown",
        "true"
      );

      setTimeout(() => {
        setShowWelcome(false);
      }, 5000);
    }

  }, []);

  useEffect(() => {

    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {

      reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
          element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener(
      "scroll",
      revealOnScroll
    );

    revealOnScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        revealOnScroll
      );

  }, []);


  return (
    <div className='homepage md:pt-20 pt-24 bg-white min-h-screen overflow-hidden font-sans relative'>
      {/* POPUP SAPAAN */}
      {showWelcome && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 px-4 ">

          <div className="bg-white rounded-[35px] p-5 sm:p-8 shadow-2xl text-center animate-popup-smooth w-full max-w-sm">

            <div className="bg-green-500 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-5">
              <i className="ri-open-arm-line text-4xl sm:text-5xl text-white"></i>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-indigo-700 mb-3 break-words">
              Halo, {user?.nama}!
            </h1>

            <p className="text-gray-600 text-sm sm:text-lg">
              Selamat Datang di Website SOLO <i class="ri-chat-smile-3-line"></i>
            </p>

          </div>
        </div>
      )}
      {/* BACKGROUND ORNAMENT (Top & Bottom Wave Styles) */}
      <div className="absolute z-0 inset-0  bg-[url('/bgEarth3.jpeg')] bg-cover h-screen top-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-100 to-transparent opacity-60 pointer-events-none"></div>

      {/* ================= HERO SECTION ================= */}

      <div className=" container mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-36 relative bg-no-repeat bg-contain bg-center">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-8 reveal">

          {/* TEXT CONTENT */}
          <div className='text-center md:text-left  pb-10 mt-1  z-10'>
            <h1 className='font-heading xl:text-6xl lg:text-5xl text-4xl font-black text-green-500 mb-4 tracking-wide'>
              Aplikasi Edukasi <br />
              <span className="bg-green-500 bg-clip-text text-transparent ">
                Interaktif
              </span>
            </h1>



            <div className='flex gap-4 justify-center md:justify-start'>
              <Link to={"/klasifikasi-event"}>
                <button className='bg-green-500 hover:bg-green-600 cursor-pointer duration-600 text-white px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2'>
                  <span>▶</span> Mainkan Sekarang
                </button>
              </Link>
            </div>
          </div>

          {/* HERO IMAGE */}

        </div>
      </div>


      {/* ================= KATEGORI SECTION ================= */}
      <div className="kategori md:py-20 md:mt-0 mt-44  py-20 bg-gradient-to-b from-transparent to-green-50 relative">
        <div className="container mx-auto px-4 reveal">
          <h2 className='text-center bg-green-500 bg-clip-text pb-5 text-transparent md:text-5xl text-3xl mb-16'>
            Pelajari Jenis Sampah
          </h2>

          {/* GRID UTAMA KATEGORI */}
          <div className='grid xl:grid-cols-3 md:grid-cols-2   grid-cols-1 gap-6 md:gap-8 max-w-6xl mx-auto '>
            {dataKategori.map((kat) => (
              <div
                key={kat.id}
                className={`bg-white rounded-[30px] shadow-sm border p-8 text-center flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-102 ${kat.warnaUtama}`}
              >
                <div>
                  {/* ICON / GAMBAR */}
                  <div className='w-24 h-24 flex items-center justify-center mx-auto mb-6 bg-gray-50 rounded-2xl p-2'>
                    <img src={kat.icon} alt={kat.judul} className="w-full h-full object-contain" />
                  </div>

                  {/* JUDUL */}
                  <h3 className='text-green-500 text-center py-3 font-bold text-lg mb-1 line-clamp-1'>{kat.judul}</h3>

                  {/* RINGKASAN TEKS */}
                  <p className='text-md text-gray-500 leading-relaxed mb-6'>
                    {kat.ringkasan}
                  </p>
                </div>

                {/* BUTTON LIHAT DETAIL */}
                <button
                  onClick={() => setSelectedKategori(kat)}
                  className={`w-full  bg-green-400  text-white py-3 rounded-xl  text-md  transition-all flex items-center justify-center gap-2 cursor-pointer mt-auto`}
                >
                  Lihat Detail
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ================= POPUP DETAIL KATEGORI SAMPAH ================= */}
        {selectedKategori && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4 ">
            <div className="bg-white p-6 md:p-8 rounded-[35px] shadow-2xl w-full max-w-lg text-gray-800 border-[6px] border-white relative animate-popup-smooth">

              {/* Tombol Close Silang */}
              <button
                onClick={() => setSelectedKategori(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold cursor-pointer"
              >
                ✕
              </button>

              {/* Gambar Mini di Pop-up */}
              <div className="w-20 h-20 bg-gray-50 rounded-2xl p-2 flex items-center justify-center mb-4">
                <img
                  src={selectedKategori.icon}
                  alt={selectedKategori.judul}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Judul Kategori */}
              <h3 className="text-3xl   text-green-500 mb-4">
                {selectedKategori.judul}
              </h3>

              {/* Deskripsi Lengkap */}
              <div className="bg-blue-50/50 rounded-2xl p-5 mb-6 max-h-60 overflow-y-auto">
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line text-left">
                  {selectedKategori.deskripsiLengkap}
                </p>
              </div>

              {/* Tombol Tutup */}
              <button
                onClick={() => setSelectedKategori(null)}
                className={`w-full bg-green-500 text-white py-3 rounded-full  text-md shadow-lg transition-all duration-300 cursor-pointer`}
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ================= APLIKASI SECTION ================= */}


      {/* ================= TENTANG SOLO / FITUR SECTION ================= */}
      <div className="aplikasi py-16 md:mt-0 mt-5 text-white">
        <div className="container mx-auto px-4 reveal">
          <h2 className='text-center text-green-500  md:text-5xl text-3xl  mb-6'>
            Tentang SOLO
          </h2>
          <p className='text-center text-gray-500 font-light mb-12 text-shadow-2xs max-w-2xl mx-auto text-sm md:text-lg'>
            SOLO adalah aplikasi pintar yang membantu kita mengenal jenis sampah,
            belajar menjaga lingkungan, dan membuat bumi menjadi lebih bersih
            dengan cara yang menyenangkan.
          </p>

          {/* Diubah menjadi grid agar rapi dan responsive di berbagai ukuran layar */}
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-5xl mx-auto'>
            {SekilasAcara.map((app) => (
              <div
                key={SekilasAcara.id}
                className='bg-white rounded-2xl overflow-hidden shadow-lg text-gray-800 flex flex-col justify-between p-4 pb-5 h-full transition-all duration-300 hover:shadow-xl hover:scale-102 '
              >
                <div>
                  <div className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4">
                    <img src={app.icon} alt={app.Judul} className="w-full h-full object-cover" />
                  </div>
                  <h3 className='text-green-500 text-center py-3 font-bold text-lg mb-1 line-clamp-1'>{app.Judul}</h3>
                  <p className='text-md text-gray-500 mb-4 line-clamp-2'>{app.text}</p>
                </div>

                {/* Saat tombol diklik, isi state dengan data aplikasi saat ini */}
                <button
                  onClick={() => setSelectedApp(app)}
                  className='w-full bg-green-500 text-white  py-2.5 rounded-xl  text-md shadow transition-all flex items-center justify-center gap-2 cursor-pointer'
                >
                  Lihat Detail
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ================= POPUP DETAIL APLIKASI / FITUR ================= */}
        {selectedApp && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
            <div className="bg-white p-6 md:p-8 rounded-[35px] shadow-2xl w-full max-w-lg text-gray-800 border-[6px] border-white relative animate-popup-smooth">

              {/* Tombol Close Silang */}
              <button
                onClick={() => setSelectedApp(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold cursor-pointer"
              >
                ✕
              </button>

              {/* Gambar besar fitur di dalam pop-up */}
              <div className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-5 shadow-inner">
                <img
                  src={selectedApp.icon}
                  alt={selectedApp.Judul}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Judul Fitur */}
              <h3 className="text-2xl font-black text-green-500 mb-3 flex items-center gap-2">
                <span>{selectedApp.Judul}</span>
              </h3>

              {/* Deskripsi Lengkap Fitur */}
              <div className="bg-blue-50/50 rounded-2xl p-5 mb-6 max-h-48 overflow-y-auto">
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {selectedApp.deskripsiLengkap || selectedApp.text || "Belum ada informasi detail mengenai fitur ini."}
                </p>
              </div>

              {/* Tombol Tutup Pop-up */}
              <button
                onClick={() => setSelectedApp(null)}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-black text-md shadow-lg transition-all duration-300 cursor-pointer"
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ================= TENTANG KAMI SECTION ================= */}
      <div className="tentang-kami py-20 bg-gradient-to-t from-transparent to-blue-50 relative">
        <div className="container mx-auto px-4 max-w-5xl reveal">
          <h2 className='text-center bg-green-500 text-transparent bg-clip-text md:text-5xl text-3xl py-6  mb-12'>
            Tentang Kami
          </h2>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 items-center mb-16">
            <div className="flex justify-center md:col-span-1">
              {/* Logo Qreatif */}
              <div className="text-center">
                <span className="text-green-500 text-5xl font-black block">SOLO</span>
                <span className="text-gray-400 text-sm tracking-[0.5em] block uppercase mt-1">educative</span>
              </div>
            </div>
            <div className="md:col-span-2 font-bold text-white bg-green-400 p-5 rounded-3xl text-sm md:font-bold md:text-white leading-relaxed text-center md:text-left">
              Kami adalah pengembang aplikasi edukasi SOLO untuk anak-anak hingga remaja yang bertempat di Jakarta, Indonesia. Bersama dengan 5 anggota tim, kami fokus mengembangkan aplikasi edukasi sampah yang interaktif dan mudah digunakan. Aplikasi ini memiliki berbagai fitur seperti klasifikasi sampah, peta bank sampah, serta kuis edukatif untuk membantu pengguna belajar mengenai pengelolaan sampah dengan cara yang menyenangkan dan modern
            </div>
          </div>

          {/* Profiles Grid */}

          <div className='flex flex-wrap gap-10 items-center justify-around md:justify-around'>
            {timDeveloper.map((dev) => (
              <div key={dev.id} className='bg-white w-60 h-full rounded-2xl border border-blue-50 shadow-sm p-3 text-center bg-radial-dots'>
                <div className='w-28 h-28 rounded-full border-4 border-green-500 p-1 mx-auto mb-4 overflow-hidden'>
                  <img src={dev.foto} alt={dev.nama} className='w-full h-full object-cover rounded-full' />
                </div>
                <h4 className='text-xl font-black text-blue-500 mb-1'>{dev.nama}</h4>
                <p className='text-xs text-gray-500 font-medium'>{dev.role}</p>
              </div>
            ))}

            {/* Ilustrasi Tambahan Sisi Kanan Profil (opsional sesuai gambar) */}

          </div>
        </div>
      </div>
    </div >
  )
}

export default HomePage;