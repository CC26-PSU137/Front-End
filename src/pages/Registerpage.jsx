import React, { useState } from "react";
import {
    Leaf,
    Trees,
    Recycle,
    User,
    Mail,
    Lock,
} from "lucide-react";

import { Image } from "../data";
import { NavLink } from "react-router-dom";

export default function RegisterPage() {
    const [form, setForm] = useState({
        nama: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Yey! Akun berhasil dibuat 🌱");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-200 via-lime-100 to-emerald-200 flex items-center justify-center p-5 overflow-hidden relative">

            {/* Dekorasi Background */}
            <div className="absolute top-10 left-10 animate-bounce">
                <Leaf className="text-green-500 w-14 h-14" />
            </div>

            <div className="absolute bottom-10 right-10 animate-pulse">
                <Recycle className="text-emerald-500 w-16 h-16" />
            </div>

            <div className="absolute top-24 right-20 animate-bounce delay-200">
                <Trees className="text-lime-600 w-16 h-16" />
            </div>

            {/* Card Register */}
            <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-[35px] w-full max-w-md p-8 border-4 border-green-300 relative z-10">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-md mb-4">
                        <img src={Image.SOLO} alt="" />
                    </div>

                    <h1 className="text-4xl font-extrabold text-green-700">
                        Join SOLO Kids!
                    </h1>

                    <p className="text-green-600 mt-2 text-sm">
                        Yuk jadi pahlawan bumi bersama 🌱
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Nama */}
                    <div>
                        <label className="text-green-700 font-semibold text-sm">
                            Nama
                        </label>

                        <div className="flex items-center bg-green-50 border-2 border-green-200 rounded-2xl px-4 mt-2 focus-within:border-green-500 transition">
                            <User className="text-green-500 w-5 h-5" />

                            <input
                                type="text"
                                name="nama"
                                value={form.nama}
                                onChange={handleChange}
                                placeholder="Masukkan nama kamu"
                                className="w-full bg-transparent outline-none px-3 py-3 text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-green-700 font-semibold text-sm">
                            Email
                        </label>

                        <div className="flex items-center bg-green-50 border-2 border-green-200 rounded-2xl px-4 mt-2 focus-within:border-green-500 transition">
                            <Mail className="text-green-500 w-5 h-5" />

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Masukkan email"
                                className="w-full bg-transparent outline-none px-3 py-3 text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-green-700 font-semibold text-sm">
                            Password
                        </label>

                        <div className="flex items-center bg-green-50 border-2 border-green-200 rounded-2xl px-4 mt-2 focus-within:border-green-500 transition">
                            <Lock className="text-green-500 w-5 h-5" />

                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Masukkan password"
                                className="w-full bg-transparent outline-none px-3 py-3 text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 text-white font-bold py-4 rounded-2xl shadow-lg text-lg"
                    >
                        Daftar Sekarang 🌿
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-green-700 mt-6">
                    Sudah punya akun?{" "}
                    <span className="font-bold cursor-pointer">
                        <NavLink to={"/login"}>Login</NavLink>
                    </span>
                </p>
            </div>
        </div>
    );
}