import React from 'react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
    
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#pre-registro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="./images/byd-hero.png" 
          alt="BYD vehicle lineup with a futuristic background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center space-y-4 sm:space-y-6 text-center px-4 sm:px-6">
        <div className="animate-fade-in-down">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold">
            Concesionario Oficial BYD Villa Carlos Paz
            </h1>
        </div>
        <div className="animate-fade-in-up animation-delay-300">
            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            Build Your Dreams - La revolución de la movilidad eléctrica llega a las sierras de Córdoba.
            </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg max-w-2xl w-full mx-auto animate-fade-in-up animation-delay-500">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Gran Apertura del Concesionario en:</h3>
          <Countdown targetDate="2025-11-30T18:00:00-03:00" />
        </div>
        <div className="flex flex-col items-center space-y-2 sm:space-y-3 animate-fade-in-up animation-delay-700">
            <a 
            href="#pre-registro"
            onClick={handleScrollToForm}
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
            Reservá tu BYD por USD $500
            </a>
            <p className="text-xs sm:text-sm opacity-80">Cuanto antes reserves, más beneficios obtendrás.</p>
        </div>
      </div>
      {/* FIX: Replaced non-standard <style jsx global> with a standard <style> tag to define animations. */}
      <style>{`
        @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animate-fade-in-down, .animate-fade-in-up {
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;