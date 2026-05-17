import React, { useState } from "react";
import {
    Leaf,
    Trees,
    Recycle,
    Eye,
    EyeOff,
} from "lucide-react";

import { Image } from "../data";
import { NavLink } from "react-router-dom";

export default function Loginpage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-200 via-lime-100 to-emerald-200 overflow-hidden relative p-4">

            {/* Floating Decorations */}
            <div className="absolute top-10 left-10 animate-bounce">
                <Leaf className="text-green-500 w-12 h-12" />
            </div>

            <div className="absolute bottom-10 right-10 animate-pulse">
                <Recycle className="text-emerald-500 w-14 h-14" />
            </div>

            <div className="absolute top-20 right-20 animate-bounce delay-200">
                <Trees className="text-lime-600 w-14 h-14" />
            </div>

            {/* Login Card */}
            <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-[35px] p-6 mt-20 w-full max-w-md border-4 border-green-300 relative z-10">

                {/* Header */}
                <div className="text-center mb-8">

                    <img
                        src={Image.SOLO}
                        alt="Eco Kids"
                        className="w-40 mx-auto mb-4 drop-shadow-lg"
                    />

                    <h1 className="text-4xl font-extrabold text-green-700">
                        Hello Sobat SOLO 🌱
                    </h1>

                    <p className="text-green-600 mt-2 text-sm">
                        Yuk login dan jaga bumi bersama 🌍
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">

                    {/* Username */}
                    <div>
                        <label className="block mb-2 text-green-700 font-semibold">
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Masukkan username..."
                            className="w-full px-4 py-3 rounded-2xl border-2 border-green-200 focus:outline-none focus:ring-4 focus:ring-green-200 bg-green-50 text-gray-700"
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
                                placeholder="Masukkan password..."
                                className="w-full px-4 py-3 rounded-2xl border-2 border-emerald-200 focus:outline-none focus:ring-4 focus:ring-emerald-200 bg-emerald-50 text-gray-700"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-3 text-emerald-600"
                            >
                                {showPassword ? (
                                    <EyeOff size={22} />
                                ) : (
                                    <Eye size={22} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember */}
                    <div className="flex items-center gap-2 text-sm text-green-700">
                        <input type="checkbox" className="accent-green-500" />
                        <span>Ingat aku 🌿</span>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-400 hover:scale-105 transition-all duration-300 text-white font-bold py-3 rounded-2xl shadow-lg"
                    >
                        Login Sekarang 🚀
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-green-700 mt-6">
                    Belum punya akun?{" "}
                    <span className="text-emerald-600 font-bold cursor-pointer hover:underline">
                        <NavLink to={"/register"}>Registrasi</NavLink>
                    </span>
                </p>
            </div>

            {/* Animation */}
            <style jsx>{`
        .slow-spin {
          animation: spin 6s linear infinite;
        }
      `}</style>
        </div>
    );
}