import Pembicara2 from "/assets/pembicara-2.webp";
import SOLO from "/assets/SOLO.png";
import SOLO_Fix from "/assets/SOLO_Fix.png";
import bingung from "/assets/bingung.png";
import timDev from "/assets/timDev.png";
import petaJakarta from "/assets/petaJakarta.png";
import bgEarth from "/assets/bgEarth.png";
import bgEarth2 from "/assets/bgEarth2.jpg";
import bgEarth3 from "/assets/bgEarth3.jpeg";
import B3 from "/assets/B3.jpg";
import organik from "/assets/organik.jpg";
import anorganik from "/assets/anorganik.jpg"
import quiz from "/assets/quiz.png"
import klasifikasi from "/assets/klasifikasi.png"

export const Image = {
  Pembicara2,
  SOLO,
  SOLO_Fix,
  bingung,
  timDev,
  petaJakarta,
  bgEarth,
  bgEarth2,
  bgEarth3,
  B3,
  organik,
  anorganik,
  quiz,
  klasifikasi,
};

export const SekilasAcara = [
  {
    id: 1,
    icon: Image.klasifikasi,
    Judul: "Mengenal Jenis Sampah",
    text: "Anak-anak belajar mengenali perbedaan sampah organik, anorganik, dan sampah yang dapat didaur ulang dengan cara yang sederhana dan menyenangkan.",
  },

  {
    id: 2,
    icon: Image.quiz,
    Judul: "Kuis Interaktif",
    text: "Tersedia kuis edukatif untuk melatih anak memilih jenis sampah yang benar sehingga mereka bisa belajar sambil berlatih secara mandiri.",
  },

  {
    id: 3,
    icon: Image.SOLO_Fix,
    Judul: "Peduli Kebersihan",
    text: "Melalui pembelajaran ini, anak-anak diajak membangun kebiasaan membuang sampah pada tempatnya demi menjaga lingkungan tetap bersih dan sehat.",
  },
];

export const timDeveloper = [
  {
    id: 1,
    foto: Image.Pembicara2,
    nama: "M. Almustofa khanafi",
    role: "Data science",
  },
  {
    id: 2,
    foto: Image.Pembicara2,
    nama: "M. Ajar Danu Wiratama",
    role: "Back End",
  },
  {
    id: 3,
    foto: Image.Pembicara2,
    nama: "M. Athif Nur Abdilah",
    role: "Data Scient",
  },
  {
    id: 3,
    foto: Image.Pembicara2,
    nama: "M. Ravlyansyah",
    role: "Ai Engineer",
  },
  {
    id: 3,
    foto: Image.Pembicara2,
    nama: "Amar Triadi",
    role: "Front end",
  },
];

export const dataKategori = [
  {
    id: 'organik',
    icon: Image.organik,
    judul: 'Sampah Organik ',
    ringkasan: 'Sampah alami yang mudah membusuk dan terurai kembali ke alam.',
    deskripsiLengkap: 'Sampah Organik merupakan jenis limbah yang berasal dari sisa makhluk hidup (hewan maupun tumbuhan) yang dapat membusuk dan terurai secara alami oleh mikroorganisme tanpa mencemari lingkungan.\n\nContoh: Sisa makanan, kulit buah, sayuran, daun kering, dan potongan rumput.\n\nCara Pengolahan: Sangat cocok untuk diolah kembali menjadi pupuk kompos atau pakan maggot.',
    warnaUtama: 'text-green-600 border-green-100 hover:bg-green-50/50',
    tombolWarna: 'bg-green-500 hover:bg-green-600',
    foto: '/images/organik-icon.png' // Sesuaikan dengan path aset gambarmu
  },
  {
    id: 'anorganik',
    icon: Image.anorganik,
    judul: 'Sampah Anorganik ',
    ringkasan: 'Sampah buatan manusia yang sulit atau tidak bisa hancur alami.',
    deskripsiLengkap: 'Sampah Anorganik adalah limbah yang dihasilkan dari bahan-bahan non-hayati atau proses sintetik/teknologi. Jenis sampah ini membutuhkan waktu puluhan hingga ratusan tahun untuk bisa terurai secara alami.\n\nContoh: Botol plastik, kaleng, kaca, kantong plastik, kardus, dan sterofoam.\n\nCara Pengolahan: Dapat dipilah dan disetorkan ke bank sampah terdekat untuk didaur ulang (recycle) menjadi barang kerajinan atau material baru.',
    warnaUtama: 'text-blue-500 border-blue-100 hover:bg-blue-50/50',
    tombolWarna: 'bg-blue-500 hover:bg-blue-600',
    foto: '/images/anorganik-icon.png'
  },
  {
    id: 'b3',
    icon: Image.B3,
    judul: 'Sampah B3',
    ringkasan: 'Sampah beracun dan berbahaya yang membutuhkan penanganan khusus.',
    deskripsiLengkap: 'Sampah B3 (Bahan Berbahaya dan Beracun) adalah jenis limbah yang karena sifat, konsentrasi, atau jumlahnya dapat merusak, mencemari lingkungan hidup, serta membahayakan kesehatan manusia secara langsung.\n\nContoh: Baterai bekas, lampu neon, jarum suntik, botol sisa detergen/pestisida, dan barang elektronik rusak.\n\nCara Pengolahan: Wajib dibuang ke tempat penampungan khusus atau dropbox sampah elektronik, tidak boleh dicampur dengan sampah harian karena bisa meledak atau meracuni tanah.',
    warnaUtama: 'text-red-500 border-red-100 hover:bg-red-50/50',
    tombolWarna: 'bg-red-500 hover:bg-red-600',
    foto: '/images/b3-icon.png'
  }
];


export const dataBankSampah = [
  {
    id: 1,
    kota: "Jakarta Pusat",
    alamat: "Kompleks Angkasa Pura, Kemayoran",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.825218314884!2d106.855747!3d-6.154158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f598647c9a0d%3A0xe5e96f0390d273a4!2sBank%20Sampah%20Hijau%20Selaras%20Mandiri!5e0!3m2!1sen!2sid!4v1779809064557!5m2!1sen!2sid", width: "600", height: "450", style: "border:0;", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade",
    anchor: "https://www.google.com/maps/place/Bank+Sampah+Hijau+Selaras+Mandiri/@-6.154158,106.855747,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f598647c9a0d:0xe5e96f0390d273a4!8m2!3d-6.154158!4d106.855747!16s%2Fg%2F11b7k0v9z6?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
    warna: "from-green-300 to-green-400",
  },
  {
    id: 2,
    kota: "Jakarta Timur",
    alamat: "Jl. Kesatrian X, Kb. Manggis, Matraman",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4360984341542!2d106.8505399!3d-6.206064500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f500030c5a45%3A0xee3dc67f336b6d88!2sBank%20sampah%20IREKA%20RAYON%204!5e0!3m2!1sen!2sid!4v1779809462228!5m2!1sen!2sid", width: "400", height: "300", style: "border:0;", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade",
    anchor: "https://www.google.com/maps/place/Bank+sampah+IREKA+RAYON+4/@-6.2060645,106.8505399,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f500030c5a45:0xee3dc67f336b6d88!8m2!3d-6.2060645!4d106.8505399!16s%2Fg%2F11zbh1lgkq?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
    warna: "from-green-300 to-green-400",
  },
  {
    id: 3,
    kota: "Jakarta Selatan",
    alamat: "Jl. Menteng Pulo, Kecamatan Setiabudi",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.314240540348!2d106.8384225!3d-6.222231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f48740405b%3A0xc676fc19415cd72b!2sbank%20sampah%20induk%20gesit!5e0!3m2!1sen!2sid!4v1779809683709!5m2!1sen!2sid", width: "400", height: "300", style: "border:0;", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade",
    anchor: "https://www.google.com/maps/place/bank+sampah+induk+gesit/@-6.222231,106.8384225,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f3f48740405b:0xc676fc19415cd72b!8m2!3d-6.222231!4d106.8384225!16s%2Fg%2F11t1lq4rgf?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
    warna: "from-green-300 to-green-400",
  },

  {
    id: 4,
    kota: "Jakarta Pusat ",
    alamat: "Jl. Mangga Dua Dalam, Kecamatan Sawah Besar",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.944680980466!2d106.82692050000001!3d-6.1381346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5fb13695eaf%3A0xb0a5d3a6bf1770b2!2sBank%20Sampah%20Madusela!5e0!3m2!1sen!2sid!4v1779809904398!5m2!1sen!2sid", width: "400", height: "300", style: "border:0;", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade",
    anchor: "https://www.google.com/maps/place/Bank+Sampah+Madusela/@-6.1381346,106.8269205,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f5fb13695eaf:0xb0a5d3a6bf1770b2!8m2!3d-6.1381346!4d106.8269205!16s%2Fg%2F11vprrvpy3?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",


  },
  {
    id: 5,
    kota: "Jakarta Pusat",
    alamat: "Jl. Galindra, Kb. Kosong, Kemayoran",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8101369043475!2d106.8561294!3d-6.1561778999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e0566df171%3A0xfc0982cc0c4ed7ce!2sBank%20Sampah%20Cempaka!5e0!3m2!1sen!2sid!4v1779810094671!5m2!1sen!2sid", width: "400", height: "300", style: "border:0;", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade",
    anchor: "https://www.google.com/maps/place/Bank+Sampah+Cempaka/@-6.1561779,106.8561294,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f5e0566df171:0xfc0982cc0c4ed7ce!8m2!3d-6.1561779!4d106.8561294!16s%2Fg%2F11y5vzc7r9?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"

  },
  {
    id: 6,
    kota: "Jakarta Selatan",
    alamat: "Jl. Sultan Agung No.20, Guntur, Kecamatan Setiabudi",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4381813614104!2d106.8365219!3d-6.205787799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f40d51c950e5%3A0x9a3a71bb071a7df0!2sBank%20Sampah%20My%20Darling!5e0!3m2!1sen!2sid!4v1779810313961!5m2!1sen!2sid", width: "400", height: "300", style: "border:0;", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade",

  },
];

