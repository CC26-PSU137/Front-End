import React, { useState } from "react";
import {
    Leaf,
    Trees,
    Recycle,
    User,
    Mail,
    Lock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Image } from "../data";
import { NavLink } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
});

const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
});

const navigate = useNavigate();

const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        const response = await fetch(
            "https://backend-solo-cc26-psu137-production.up.railway.app/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                }),
            }
        );

        const result = await response.json();

        console.log(result);

        if (result.status === "success") {

            setPopup({
                show: true,
                type: "success",
                message: "Yey! Akun berhasil dibuat 🎉",
            });

            setTimeout(() => {

                setPopup({
                    show: false,
                    type: "",
                    message: "",
                });

                navigate("/login");

            }, 2500);

        } else {

            setPopup({
                show: true,
                type: "error",
                message: result.message,
            });

            setTimeout(() => {

                setPopup({
                    show: false,
                    type: "",
                    message: "",
                });

            }, 2500);

        }

    } catch (error) {

        console.log(error);

        setPopup({
            show: true,
            type: "error",
            message: "Server SOLO lagi capek",
        });

    }
};

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-5 overflow-hidden relative">

            {/* Card Register */}
            <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-[35px] w-full max-w-md p-8 border-2 border-green-300 relative z-10">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-md mb-4">
                        <img src={Image.SOLO} alt="" />
                    </div>

                    <h1 className="text-4xl font-extrabold text-green-700">
                       Yuk Join SOLO!
                    </h1>

                    <p className="text-green-600 mt-2 text-sm">
                        Yuk jadi pahlawan bumi bersama <i class="ri-emotion-happy-line"></i>
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
                                className="w-full outline-none px-3 py-3 text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:scale-105 cursor-pointer transition-all duration-300 text-white py-3 rounded-2xl shadow-lg"
                    >
                        Daftar Sekarang
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-green-700 mt-6">
                    Sudah punya akun?{" "}
                    <span className=" cursor-pointer">
                        <NavLink to={"/login"}>Login</NavLink>
                    </span>
                </p>
            </div>

            {popup.show && (
                <div className="fixed top-0  z-50 ">

                    <div
                        className={`px-6 py-4 rounded-3xl shadow-2xl text-white font-bold text-lg flex items-center gap-3 transition-all duration-500
                         ${popup.type === "success"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                    >
                        <p>{popup.message}</p>

                    </div>
                </div>
            )}
        </div>
    );
}