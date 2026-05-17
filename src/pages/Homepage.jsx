import { Image, SekilasAcara } from '../data';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='homepage md:pt-20 pt-24 bg-gradient-to-b from-cyan-100 via-pink-100 to-yellow-100 min-h-screen overflow-hidden'>

      {/* HERO */}
      <div className="container mx-auto px-4 py-25">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-10">

          {/* TEXT */}
          <div className='text-center md:text-left pb-10 md:pb-0'>

            <div className='bg-white shadow-lg w-fit px-4 py-2 rounded-full flex items-center gap-3 mx-auto md:mx-0 mb-6'>
              <img src={Image.SOLO} alt="hero" className="w-10" />
              <q className='text-indigo-700 font-bold'>
                SOLO (Sortir & Olah Limbah Online)
              </q>
            </div>

            <h1 className='xl:text-7xl/tight lg:text-6xl/tight text-5xl font-black text-indigo-700 mb-6'>
              Belajar <br />
              Sampah Jadi <br />
              Menyenangkan ♻️
            </h1>

            <p className='text-gray-600 text-lg leading-loose'>
              SOLO membantu anak-anak dan masyarakat belajar memilah sampah
              dengan cara yang seru, interaktif, dan modern menggunakan teknologi AI.
            </p>

            <div className='mt-8 flex gap-4 justify-center md:justify-start flex-wrap'>
              <button className='bg-pink-400 hover:bg-pink-500 text-white px-7 py-3 rounded-full font-bold shadow-xl transition-all duration-300 hover:scale-105'>
                Mulai Belajar 🚀
              </button>

              <button className='bg-yellow-300 hover:bg-yellow-400 text-black px-7 py-3 rounded-full font-bold shadow-xl transition-all duration-300 hover:scale-105'>
                Tentang SOLO 🌎
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className='relative flex justify-center'>
            <div className='absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-40'></div>

            <img
              src={Image.SOLO}
              alt="hero"
              className='w-[350px] relative z-10 animate-bounce'
            />
          </div>
        </div>
      </div>

      {/* TENTANG */}
      <div className="tentang py-28">
        <div className="container mx-auto px-4">

          <h1 className='text-center text-indigo-700 md:text-6xl text-4xl font-black mb-6'>
            Apa Itu SOLO? 🤔
          </h1>

          <p className='text-center text-gray-700 text-lg leading-loose max-w-3xl mx-auto'>
            SOLO adalah aplikasi pintar yang membantu kita mengenal jenis sampah,
            belajar menjaga lingkungan, dan membuat bumi menjadi lebih bersih
            dengan cara yang menyenangkan.
          </p>

          {/* CARD */}
          <div className='mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>

            {SekilasAcara.map((acara) => (
              <div
                key={acara.id}
                className='bg-white rounded-[30px] shadow-2xl p-8 text-center hover:-translate-y-3 transition-all duration-300 group'
              >

                <div className='bg-pink-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-300 transition-all'>
                  <i className={`ri-3x text-pink-500 ${acara.icon}`}></i>
                </div>

                <h1 className='text-3xl font-black text-indigo-700 mb-4'>
                  {acara.Judul}
                </h1>

                <p className='text-gray-600 leading-loose'>
                  {acara.text}
                </p>
              </div>
            ))}

          </div>

          <div className='text-center mt-16'>
            <Link
              to={"tentang-event"}
              className='bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105'
            >
              Lihat Selengkapnya 👀
            </Link>
          </div>

        </div>
      </div>

      {/* DEVELOPER */}
      <div className="developer py-28 bg-yellow-50">
        <div className="container mx-auto px-4">

          <h1 className="text-center text-indigo-700 md:text-6xl text-4xl font-black mb-4">
            Tim Developer 👨‍💻
          </h1>

          <p className="text-center text-gray-600 text-lg mb-16">
            Orang-orang keren di balik SOLO
          </p>

          <div className='flex gap-10 justify-center items-center flex-wrap'>

            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="w-60 bg-white rounded-[30px] shadow-2xl p-4 hover:scale-105 transition-all duration-300"
              >

                <div className='relative overflow-hidden rounded-[25px]'>

                  <img
                    src={Image.Pembicara2}
                    alt=""
                    className='rounded-[25px]'
                  />

                  <div className="absolute w-full h-full bg-gradient-to-t from-black/80 to-transparent bottom-0 left-0"></div>

                  <div className='absolute bottom-5 w-full text-center'>
                    <h1 className='text-white text-2xl font-black'>
                      Ali Oli
                    </h1>

                    <p className='text-white/80'>
                      Data Science
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="jadwal py-24 bg-cyan-50">

        <div className="container mx-auto px-4">

          <h1 className='text-center text-indigo-700 md:text-6xl text-4xl font-black mb-16'>
            Pusat Bank Sampah 🌍
          </h1>

          <div className='flex justify-center gap-10 md:flex-row flex-col items-center'>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31723.571359075173!2d106.97148590595617!3d-6.336173938379624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993cd1cfd5131%3A0xbc41a51ae9cf5e0e!2sBantar%20Gebang%2C%20Bekasi%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1778718429836!5m2!1sen!2sid"
              width="500"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='rounded-[30px] shadow-2xl border-[10px] border-white w-full md:w-[500px]'
            ></iframe>

            <div className='bg-white p-8 rounded-[30px] shadow-2xl max-w-md'>

              <h2 className='text-3xl font-black text-indigo-700 mb-6'>
                Informasi Lokasi 📍
              </h2>

              <div className='space-y-6 text-gray-700'>

                <p className='flex items-center gap-4 text-lg'>
                  <i className='ri-earth-fill ri-2x text-pink-500'></i>
                  Bekasi, Jawa Barat
                </p>

                <p className='flex items-center gap-4 text-lg'>
                  <i className='ri-map-pin-fill ri-2x text-yellow-500'></i>
                  Jl. Sukamulyo, Bekasi
                </p>

                <p className='flex items-center gap-4 text-lg'>
                  <i className='ri-recycle-fill ri-2x text-green-500'></i>
                  Tempat edukasi pengolahan sampah
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}



export default HomePage;
