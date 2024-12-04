import React from "react";
import "@/app/globals.css";
import LogoNHG from "../../public/LogoNHG.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <Image src={LogoNHG} alt="logo" width={100} height={35} />
        </a>
        <nav>
          <a
            href="#about"
            className="font-bold mx-2 hover:text-gray-400 hover:underline transition"
          >
            Sobre
          </a>
          <a
            href="#services"
            className="font-bold mx-2 hover:text-gray-400 hover:underline transition"
          >
            Serivços
          </a>
          <a
            href="#contact"
            className="font-bold mx-2 hover:text-gray-400 hover:underline transition"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
