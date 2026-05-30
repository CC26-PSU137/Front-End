# SOLO Frontend Web

## Deskripsi Singkat Proyek

SOLO (Sortir & Olah Limbah Online) adalah aplikasi web edukasi berbasis AI yang membantu pengguna mengidentifikasi jenis sampah melalui gambar. Pengguna dapat melakukan registrasi akun, login, mengunggah gambar sampah, melihat hasil klasifikasi AI, serta mengakses riwayat klasifikasi yang pernah dilakukan.

Frontend ini dibangun menggunakan React dan Vite dengan antarmuka yang responsif serta terintegrasi dengan Backend API dan AI Classification Service.

---

## Fitur Utama

* User Registration
* User Login & Authentication
* JWT Token Management
* Upload Image Sampah
* AI Waste Classification Result
* Classification History
* Responsive User Interface
* Backend API Integration
* AI Service Integration
* Cloud Deployment Ready

---

## Tech Stack

### Frontend

* JavaScript
* React.js
* Vite
* Tailwind CSS
* API Fetch
* React Router DOM

### Deployment

* Vercel

---

## Arsitektur Sistem

User
   ↓
Frontend Web (React + Vite)
   ↓
Backend API (Railway)
   ↓
NeonDB PostgreSQL
   ↓
Cloudinary Storage
   ↓
AI Classification Service

Frontend bertugas sebagai penghubung antara pengguna dengan Backend API dan AI Service melalui REST API.

---

## Live Website

https://front-end-blue-tau.vercel.app

---

## Backend API

https://backend-solo-cc26-psu137-production.up.railway.app

---

## AI Service

https://solo-ai-service-production.up.railway.app

---

## Petunjuk Setup Project

### 1. Clone Repository

git clone https://github.com/CC26-PSU137/Front-End.git

### 2. Masuk ke Folder Project

cd Front-End

### 3. Install Dependencies

npm install

### 4. Menjalankan Aplikasi

npm run dev

Aplikasi akan berjalan pada:

http://localhost:5173

---

## Struktur Halaman

### Landing Page

Menampilkan informasi mengenai aplikasi SOLO dan edukasi pengelolaan sampah.

### Login Page

Halaman autentikasi pengguna menggunakan email dan password.

### Register Page

Halaman pendaftaran akun pengguna baru.

### Classification Page

Halaman untuk mengunggah gambar sampah dan melihat hasil klasifikasi AI.

### History Page

Menampilkan riwayat klasifikasi sampah yang pernah dilakukan pengguna.

### Profile Page

Menampilkan informasi akun pengguna.

---

## Integrasi API

Frontend terhubung dengan Backend API menggunakan API Fetch untuk:

* User Authentication
* Upload Image
* Classification Result
* Fetch Classification History

### Authentication Flow

User Login
   ↓
Backend Generate JWT
   ↓
Frontend Save Token
   ↓
Token Dikirim Melalui Header Authorization
   ↓
Backend Verification
   ↓
Access Protected Page
---

## Deployment

Aplikasi frontend dideploy menggunakan Vercel.

---

## Kontributor

### Frontend Developer

Amar Triadi

### Backend Developer

Muhammad Ajar Danu Wiratama

### AI Engineer

Muhammad Ravlyansyah

### Data Science

Muhammad Almustofa Khanafi
Athif Nur Abdillah

---

## License

This project is created for educational and capstone purposes.
