import React from "react";
import "@/app/globals.css";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-black to-blue-950 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Olá, eu sou Diego Cândido</h1>
        <p className="text-xl mb-8">
          Desenvolvedor Fullstack com expertise em Node.js, React e TailwindCSS
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-950 px-6 py-3 rounded-lg shadow hover:bg-gray-400 transition"
        >
          Entre em Contato
        </a>
      </div>
    </section>
  );
};

export default Hero;
