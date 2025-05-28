import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false); // Estado para controlar o modal
  const subtitle = "Transforme a sua bicicleta numa smart bike.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < subtitle.length) {
        setText(subtitle.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gradient-to-b from-[#7451A6] to-[#EAE4F2] pt-10 px-6 md:px-20 flex items-center min-h-[60vh] transition-transform duration-300 ease-in-out">
      <div className="max-w-2xl text-left">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
          The Heart Box
        </h1>
        <h2 className="text-2xl md:text-4xl text-[#E8E0F0] mt-4 shadow-none transition-opacity duration-500 ease-in-out">
          {text}
        </h2>
        <p className="text-lg md:text-xl text-[#F2F2F2] mt-4 max-w-lg">
          O The Heart Box é um sistema modular que monitora a saúde e o desempenho dos ciclistas em tempo real, oferecendo dados essenciais para um treino seguro e eficiente.
        </p>
        <div className="flex gap-4 mt-6">
          <Link 
            to="/saiba-mais"
            className="py-3 px-6 bg-[#68B9AD] text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:bg-[#7451A6] hover:scale-105"
          >
            Saiba Mais
          </Link>
          <button
            onClick={() => setShowModal(true)} // Abre o modal
            className="py-3 px-6 bg-[#7451A6] text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:bg-[#68B9AD] hover:scale-105"
          >
            Assistir Vídeo
          </button>
        </div>
      </div>

      {/* Modal */}
{showModal && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={() => setShowModal(false)} // Fecha o modal ao clicar fora
  >
    <div
      className="bg-white rounded-lg shadow-lg p-6 max-w-5xl w-full relative"
      onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal feche o pop-up
    >
      <button
        onClick={() => setShowModal(false)} // Fecha o modal
        className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-3xl font-bold"
      >
        &times; {/* Ícone de fechar */}
      </button>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/EebaH6asVLo" // Substitua pelo link do vídeo
          title="Vídeo do YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[600px] rounded-lg" // Aumentei a altura para 600px
        ></iframe>
      </div>
    </div>
  </div>
      )}
    </header>
  );
}

export default Header;