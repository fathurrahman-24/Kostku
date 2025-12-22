import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "../../../assets/Icon";
import "../Footer/footer.css";
const Footer = () => {
  return (
    <footer className="footer bg-[#c66e4e] text-white py-8">
      <div className="container mx-auto px-4 bg-[#c66e4e] ">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">
              Kost<span className="text-black">ku</span>
            </h1>
            <p className="mt-2">
              Cari kost jadi lebih mudah
              <br />
              dengan pilihan yang tepat dan informasi lengkap.
            </p>
          </div>
          <div className="flex flex-col lg:flex-col  md:gap-10">
            <nav className="flex flex-col md:flex-row gap-4 md:gap-6">
              <Link to="/" className="hover:underline">
                Beranda
              </Link>
              <Link to="/daftar-tempat" className="hover:underline">
                Daftar Kost
              </Link>
              <Link to="/tentang-kami" className="hover:underline">
                Tentang Kami
              </Link>
              <Link to="/kontak" className="hover:underline">
                Kontak
              </Link>
            </nav>
            <div className="flex gap-4 mt-4 md:mt-0 lg:justify-end sm:justify-start md:justify-end">
              <Link>
                <Facebook />
              </Link>
              <Link>
                <Instagram />
              </Link>
              <Link>
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-10 text-center md:text-left">
          <p className="text-sm">
            Dibuat oleh Kostku © 2024. All Rights Reserved.
          </p>
          <Link className="text-sm mt-4 md:mt-0 hover:underline">
            halo@kostku.id
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
