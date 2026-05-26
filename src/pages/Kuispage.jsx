import React, { useState, useEffect } from 'react';

// Master data soal (Tetap simpan di sini sebagai acuan utama)
const masterSoalKuis = [
  {
    soal: "Sampah botol plastik termasuk jenis sampah apa?",
    pilihan: ["Organik", "Anorganik", "Daun Kering", "Sisa Makanan"],
    jawaban: "Anorganik",
  },
  {
    soal: "Kulit pisang termasuk sampah apa?",
    pilihan: ["Anorganik", "B3", "Organik", "Kaca"],
    jawaban: "Organik",
  },
  {
    soal: "Warna tempat sampah organik biasanya?",
    pilihan: ["Merah", "Hijau", "Biru", "Hitam"],
    jawaban: "Hijau",
  },
  {
    soal: "Sampah kaleng bekas minuman kaleng termasuk jenis sampah?",
    pilihan: ["Organik", "B3", "Anorganik", "Cair"],
    jawaban: "Anorganik",
  },
  {
    soal: "Daun-daun berguguran di halaman sekolah bisa diolah menjadi?",
    pilihan: ["Plastik", "Kompos", "Kaca", "Bahan bakar nuklir"],
    jawaban: "Kompos",
  }
];

const KuisPage = () => {
  // State untuk menyimpan soal yang sudah diacak strukturnya
  const [soalKuis, setSoalKuis] = useState([]);
  const [indexSoal, setIndexSoal] = useState(0);
  const [score, setScore] = useState(0);
  const [showHasil, setShowHasil] = useState(false);
  const [jawabanUser, setJawabanUser] = useState([]);
  const [selectedJawaban, setSelectedJawaban] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Fungsi utilitas untuk mengacak urutan array menggunakan algoritma Fisher-Yates
  const acakArray = (array) => {
    const arrayBaru = [...array];
    for (let i = arrayBaru.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayBaru[i], arrayBaru[j]] = [arrayBaru[j], arrayBaru[i]];
    }
    return arrayBaru;
  };

  // Fungsi utama untuk menyiapkan kuis baru yang fresh & acak
  const siapkanKuisBaru = () => {
    // 1. Acak urutan daftar soal utama
    const soalDiacak = acakArray(masterSoalKuis);

    // 2. Acak juga pilihan jawaban di dalam tiap-tiap soal agar letak tombolnya berubah
    const soalDanPilihanDiacak = soalDiacak.map((item) => ({
      ...item,
      pilihan: acakArray(item.pilihan)
    }));

    // 3. Masukkan ke state aktif kuis
    setSoalKuis(soalDanPilihanDiacak);
    setIndexSoal(0);
    setScore(0);
    setShowHasil(false);

    setSelectedJawaban(null);
    setShowFeedback(false);
  };

  // Jalankan pengacakan otomatis saat halaman kuis pertama kali dimuat
  useEffect(() => {
    siapkanKuisBaru();
  }, []);

  const handleJawab = (pilihan) => {

    setSelectedJawaban(pilihan);
    setShowFeedback(true);

    const benar =
      pilihan === soalKuis[indexSoal].jawaban;

    if (benar) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {

      const next = indexSoal + 1;

      if (next < soalKuis.length) {
        setIndexSoal(next);
        setShowFeedback(false);
        setSelectedJawaban(null);
      } else {
        setShowHasil(true);
      }

    }, 1800);
  };

  // Cegah error rendering jika state soalKuis belum selesai di-generate di awal load
  if (soalKuis.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <p className="text-xl font-bold text-indigo-700 animate-pulse">Menyiapkan Pertanyaan... 🚀</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-5 overflow-hidden">

      {/* BACKGROUND BULAT */}
      <div className="absolute top-10 left-10 w-52 h-52 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-cyan-300 rounded-full blur-3xl opacity-30"></div>

      {/* CARD */}
      <div className="relative bg-white w-full border-3 border-green-300 mt-50 max-w-2xl max-h-fit rounded-[35px] shadow-2xl p-8 z-10">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="bg-green-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
            <i className="ri-questionnaire-fill text-5xl text-green-500"></i>
          </div>

          <h1 className="text-5xl font-black text-green-500 mb-3">
            KUIS SOLO
          </h1>

          <p className="text-gray-600 text-lg">
            Yuk jawab pertanyaan tentang sampah dan lingkungan
          </p>
        </div>

        {!showHasil ? (
          <>
            {/* PROGRESS */}
            <div className="mb-8">
              <div className="flex justify-between mb-2 font-bold text-indigo-700">
                <span>Soal {indexSoal + 1}</span>
                <span>{soalKuis.length}</span>
              </div>

              <div className="w-full bg-green-100 h-5 rounded-full overflow-hidden">
                <div
                  className="bg-green-500 h-full transition-all duration-500"
                  style={{
                    width: `${((indexSoal + 1) / soalKuis.length) * 100}%`
                  }}
                ></div>
              </div>
            </div>

            {/* SOAL */}
            <div className="bg-green-500 rounded-[30px] p-8 shadow-inner mb-8">
              <h2 className="text-3xl font-black text-white text-center leading-relaxed">
                {soalKuis[indexSoal].soal}
              </h2>
            </div>

            {/* PILIHAN */}
            <div className="grid md:grid-cols-2 gap-5">

              {soalKuis[indexSoal].pilihan.map((pilihan, index) => {

                const jawabanBenar =
                  pilihan === soalKuis[indexSoal].jawaban;

                const jawabanDipilih =
                  pilihan === selectedJawaban;

                return (
                  <button
                    key={index}
                    disabled={showFeedback}
                    onClick={() => handleJawab(pilihan)}
                    className={`border-4 rounded-[25px] p-5 text-lg font-bold shadow-lg transition-all duration-300 text-left md:text-center

        ${showFeedback && jawabanBenar
                        ? "bg-green-400 text-white border-green-500 scale-105"
                        : ""
                      }

        ${showFeedback &&
                        jawabanDipilih &&
                        !jawabanBenar
                        ? "bg-red-400 text-white border-red-500"
                        : ""
                      }

        ${!showFeedback
                        ? "bg-white hover:bg-green-300 hover:text-white text-green-500 border-green-100 hover:scale-105 cursor-pointer"
                        : ""
                      }
        `}
                  >

                    {pilihan}

                  </button>
                );
              })}
            </div>

            {showFeedback && (

              <div className="mt-8 text-center">

                {selectedJawaban === soalKuis[indexSoal].jawaban ? (

                  <div className="bg-green-100 text-green-500 py-4 rounded-2xl font-black text-2xl animate-bounce">
                    Jawaban Benar!
                  </div>

                ) : (

                  <div className="bg-red-400 text-red-700 py-4 rounded-2xl">

                    <h1 className="font-black text-2xl">
                      Jawaban Salah
                    </h1>

                    <p className="mt-2 text-lg">
                      Jawaban yang benar:
                    </p>

                    <h2 className="text-3xl font-black mt-2">
                      {soalKuis[indexSoal].jawaban}
                    </h2>

                  </div>
                )}

              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            {/* ICON */}
            <div className="bg-green-200 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="ri-medal-fill text-6xl text-green-500"></i>
            </div>

            {/* TEXT */}
            <h1 className="text-5xl font-black text-indigo-700 mb-4">
              Yeyyyy
            </h1>

            <p className="text-gray-600 text-xl mb-8">
              Kamu sudah menyelesaikan kuis SOLO
            </p>

            {/* SCORE */}
            <div className="bg-green-100 rounded-[30px] p-8 mb-8 shadow-inner">
              <p className="text-2xl font-bold text-green-700 mb-3">
                Skor Kamu
              </p>
              <h1 className="text-7xl font-black text-green-500">
                {score}/{soalKuis.length}
              </h1>
            </div>

            {/* BUTTON */}
            <button
              onClick={siapkanKuisBaru}
              className="bg-green-500 cursor-pointer hover:scale-105 transition-all duration-300 text-white px-10 py-4 rounded-full text-xl font-black shadow-xl"
            >
              Main Lagi
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default KuisPage;