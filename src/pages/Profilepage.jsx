import React from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "../data";

const ProfilePage = () => {

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("currentUser")
    );

    const history = JSON.parse(
        localStorage.getItem(
            `history-${user?.email}`
        )
    ) || [];

    const logoutHandle = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        sessionStorage.removeItem("welcomeShown");

        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-white pt-40 p-5">

            <div className="max-w-5xl mx-auto">

                {/* PROFILE CARD */}
                <div className="bg-white rounded-[35px] shadow-2xl p-8 border-[6px] border-white">

                    <div className="flex flex-col md:flex-row items-center gap-6">

                        {/* FOTO */}
                        <div className="w-36 h-36 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white text-6xl font-black shadow-xl">
                            {user?.nama?.charAt(0).toUpperCase()}
                        </div>

                        {/* INFO */}
                        <div className="text-center md:text-left">

                            <h1 className="text-4xl font-black text-green-500">
                                {user?.nama}
                            </h1>

                            <p className="text-gray-500 mt-2">
                                {user?.email}
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 md:mt-2 mt-4">

                                <div className="bg-blue-100 px-5 py-3 rounded-2xl flex-1">
                                    <p className="text-sm text-gray-500">
                                        Total Klasifikasi
                                    </p>

                                    <h2 className="text-2xl text-center font-black text-blue-500">
                                        {history.length}
                                    </h2>
                                </div>

                                <div className="bg-green-100 px-5 py-3 rounded-2xl ">
                                    <p className="text-sm text-gray-500">
                                        Status
                                    </p>

                                    <h2 className="text-lg font-black text-green-500">
                                        SOLO Member
                                    </h2>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* BUTTON */}
                    <button
                        onClick={logoutHandle}
                        className="mt-8 bg-red-400 hover:bg-red-500 cursor-pointer text-white w-full md:w-auto px-4 md:px-6 py-3 rounded-2xl font-bold transition-all text-sm md:text-base"
                    >
                        Logout
                    </button>
                </div>

                {/* HISTORY */}
                <div className="bg-white mt-10 rounded-[35px] shadow-2xl p-8 border-[6px] border-white">

                    <h1 className="text-3xl font-black text-green-500 mb-8">
                        Riwayat Klasifikasi  <i class="ri-recycle-fill"></i>
                    </h1>

                    {history.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {history.map((item) => (

                                <div
                                    key={item.id}
                                    className="bg-green-50 rounded-3xl p-4 shadow-lg"
                                >

                                    <img
                                        src={item.gambar}
                                        alt=""
                                        className="w-full h-52 object-cover rounded-2xl"
                                    />

                                    <h2 className="text-2xl font-black text-green-500 mt-4">
                                        {item.jenis}
                                    </h2>

                                    <p className="text-gray-500 mt-2">
                                        {item.tanggal}
                                    </p>

                                </div>
                            ))}
                        </div>

                    ) : (

                        <div className="text-center py-10 text-gray-400">
                            Belum ada history klasifikasi
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;