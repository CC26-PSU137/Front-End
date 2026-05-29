import React, { useState } from "react";
import {
    Leaf,
    Trees,
    Recycle,
    Eye,
    EyeOff,
} from "lucide-react";


import { Image } from "../data";
import { NavLink, useNavigate } from "react-router-dom";

export default function Loginpage() {
   const [showPassword, setShowPassword] = useState(false);

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
            "https://backend-solo-cc26-psu137-production.up.railway.app/api/auth/login",
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

        // LOGIN SUCCESS
        if (result.status === "success") {

            // TOKEN
            localStorage.setItem(
                "token",
                result.data.token
            );

            // USER LOGIN
            localStorage.setItem(
                "currentUser",
                JSON.stringify({
                    email: form.email,
                })
            );

            setPopup({
                show: true,
                type: "success",
                message: "Login berhasil 🎉",
            });

            setTimeout(() => {

                navigate("/homepage");

            }, 1500);

        }

        // LOGIN FAILED
        else {

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
            message: "Server sedang bermasalah",
        });

    }
};
    return (
        
        <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative p-4">
        {
    popup.show && (
        <div
            className={`fixed top-5 right-5 z-50 px-6 py-4 rounded-2xl text-white shadow-xl
            ${popup.type === "success"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
        >
            {popup.message}
        </div>
    )
}

            {/* Login Card */}
            <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-[35px] p-6  w-full max-w-md border-2 border-green-300 relative z-10">

                {/* Header */}
                <div className="text-center mb-8">

                    <img
                        src={Image.SOLO}
                        alt="Eco Kids"
                        className="w-40 mx-auto mb-4 drop-shadow-lg"
                    />

                    <h1 className="text-4xl font-extrabold text-green-700">
                        Hello Sobat SOLO
                    </h1>

                    <p className="text-green-600 mt-2 text-sm">
                        Yuk login dan jaga bumi bersama <i class="ri-earth-fill"></i>
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Username */}
                    <div>
                        <label className="block mb-2 text-green-700 font-semibold">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Masukkan Email..."
                            className="w-full px-4 py-3 rounded-2xl border-2 border-green-200 focus:outline-none focus-within:border-green-500 bg-green-50 text-gray-700"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 text-emerald-700 font-semibold">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Masukkan password..."
                                className="w-full px-4 py-3 rounded-2xl border-2 border-emerald-200 focus:outline-none focus-within:border-green-500 bg-emerald-50 text-gray-700"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute cursor-pointer right-4 top-3 text-emerald-600"
                            >
                                {showPassword ? (
                                    <EyeOff size={22} />
                                ) : (
                                    <Eye size={22} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:scale-105 cursor-pointer transition-all duration-300 text-white py-3 rounded-2xl shadow-lg"
                    >
                        Login Sekarang
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-green-700 mt-6">
                    Belum punya akun?{" "}
                    <span className="text-emerald-600  cursor-pointer hover:underline">
                        <NavLink to={"/register"}>Registrasi</NavLink>
                    </span>
                </p>
            </div>

            {/* Animation */}

        </div>
    );
}