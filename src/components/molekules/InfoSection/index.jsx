import React from "react";

const InfoSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start  justify-between text-black bg-white p-6 sm:p-10 rounded-lg shadow-lg font-poppins">
      <div className="flex gap-4 mb-6  sm:mb-0">
        <div className="w-36 h-44  bg-gray-300 rounded-md shadow-md hidden sm:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"
            alt="Kamar Kost"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-36 h-44  bg-gray-300 rounded-md hidden sm:block shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
            alt="Interior Kost"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="sm:ml-8 text-start sm:text-left">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Temukan{" "}
          <span className="text-[#c66e4e]">Kost Idealmu</span>{" "}
          <br />
          Di <span className="text-[#c66e4e]">Kostku</span>
        </h2>
        <div className="text-sm sm:text-base leading-6">
          <p className="mb-4">
            <strong>01. Informasi Lengkap</strong> <br />
            Detail kost mencakup tipe kamar, fasilitas (AC, kamar mandi dalam,
            Wi-Fi, parkir), peraturan, dan rentang harga.
          </p>
          <p className="mb-4">
            <strong>02. Ulasan Terpercaya</strong> <br />
            Baca ulasan penghuni lain dan bagikan pengalamanmu!
          </p>
          <p>
            <strong>03. Usulkan Rekomendasi</strong> <br />
            Kost favoritmu belum terdaftar? Usulkan rekomendasi lewat WhatsApp!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
