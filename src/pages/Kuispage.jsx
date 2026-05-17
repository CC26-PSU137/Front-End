import React, { useState } from 'react';

const soalKuis = [
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
];

const KuisPage = () => {
  const [indexSoal, setIndexSoal] = useState(0);
  const [score, setScore] = useState(0);
  const [showHasil, setShowHasil] = useState(false);

  const handleJawab = (pilihan) => {
    if (pilihan === soalKuis[indexSoal].jawaban) {
      setScore(score + 1);
    }

    const next = indexSoal + 1;

    if (next < soalKuis.length) {
      setIndexSoal(next);
    } else {
      setShowHasil(true);
    }
  };

  const ulangiKuis = () => {
    setIndexSoal(0);
    setScore(0);
    setShowHasil(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-pink-100 to-yellow-100 flex items-center justify-center p-5 overflow-hidden">

      {/* BACKGROUND BULAT */}
      <div className="absolute top-10 left-10 w-52 h-52 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-cyan-300 rounded-full blur-3xl opacity-30"></div>

      {/* CARD */}
      <div className="relative bg-white w-full max-w-2xl rounded-[35px] shadow-2xl p-8 border-[6px] border-white">

        {/* HEADER */}
        <div className="text-center mb-10">

          <div className="bg-yellow-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
            <i className="ri-questionnaire-fill text-5xl text-yellow-700"></i>
          </div>

          <h1 className="text-5xl font-black text-indigo-700 mb-3">
            KUIS SOLO 🎮
          </h1>

          <p className="text-gray-600 text-lg">
            Yuk jawab pertanyaan tentang sampah dan lingkungan 🌍
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

              <div className="w-full bg-pink-100 h-5 rounded-full overflow-hidden">

                <div
                  className="bg-gradient-to-r from-pink-400 to-indigo-400 h-full transition-all duration-500"
                  style={{
                    width: `${((indexSoal + 1) / soalKuis.length) * 100}%`
                  }}
                ></div>

              </div>

            </div>

            {/* SOAL */}
            <div className="bg-cyan-50 rounded-[30px] p-8 shadow-inner mb-8">

              <h2 className="text-3xl font-black text-indigo-700 text-center leading-relaxed">
                {soalKuis[indexSoal].soal}
              </h2>

            </div>

            {/* PILIHAN */}
            <div className="grid md:grid-cols-2 gap-5">

              {soalKuis[indexSoal].pilihan.map((pilihan, index) => (
                <button
                  key={index}
                  onClick={() => handleJawab(pilihan)}
                  className="bg-white hover:bg-pink-300 hover:text-white border-4 border-pink-100 rounded-[25px] p-5 text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {pilihan}
                </button>
              ))}

            </div>
          </>
        ) : (
          <div className="text-center">

            {/* ICON */}
            <div className="bg-green-200 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="ri-medal-fill text-6xl text-green-500"></i>
            </div>

            {/* TEXT */}
            <h1 className="text-5xl font-black text-indigo-700 mb-4">
              Hebattt! 🎉
            </h1>

            <p className="text-gray-600 text-xl mb-8">
              Kamu sudah menyelesaikan kuis SOLO ✨
            </p>

            {/* SCORE */}
            <div className="bg-yellow-100 rounded-[30px] p-8 mb-8 shadow-inner">

              <p className="text-2xl font-bold text-yellow-700 mb-3">
                Skor Kamu
              </p>

              <h1 className="text-7xl font-black text-pink-500">
                {score}/{soalKuis.length}
              </h1>

            </div>

            {/* BUTTON */}
            <button
              onClick={ulangiKuis}
              className="bg-gradient-to-r from-pink-400 to-indigo-400 hover:scale-105 transition-all duration-300 text-white px-10 py-4 rounded-full text-xl font-black shadow-xl"
            >
              Main Lagi 🚀
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default KuisPage;