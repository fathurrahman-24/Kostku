import React, { useState, useEffect } from "react"; 
import { Button } from "../../atoms"; 
import { RatingSection, SearchBar } from "../../molekules"; 
import { Typewriter } from "react-simple-typewriter"; 
import BgImages from "/images/Rectangle 5.png"; 

const HeroSection = () => { 
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState(["Temukan Kost Impianmu!"]); 
  const BgImage = `url(${BgImages})`; 
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    // Ambil username dari localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
      name: "Kost Harmoni Seturan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
      name: "Kost Sakura Gejayan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      name: "Kost Lestari Condongcatur",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
      name: "Kost Senja Babarsari",
    },
  ];

  return (
    <div>
      <div
        className="relative flex flex-col items-start justify-center m-auto font-poppins px-4 sm:px-10 text-black min-h-screen bg-white"
        style={{
          backgroundImage: `${BgImage}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 p-4 m-auto lg:mt-28 md:mt-28 sm:mt-28 mt-32 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl font-semibold mb-4">Welcome Back, {username || "User"}!</h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Cari <span className="text-[#c66e4e]">Kost Nyaman</span> Yang
            Pas?
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <Typewriter words={message} loop={false} cursor={"|"} />
          </p>
          <div className="mt-6 sm:mt-10 text-base sm:text-lg md:text-xl lg:text-xl font-medium mb-4">
            <p>Bandingkan fasilitas, harga, dan lokasi</p>
            <p>untuk kost yang sesuai kebutuhanmu.</p>
          </div>
          <Button 
            className="mb-4 bg-[#c66e4e] text-white" 
            onClick={() => window.location.href = '/daftar-tempat'}
          >
            Lihat Daftar Kost
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
