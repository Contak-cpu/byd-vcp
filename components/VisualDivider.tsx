import React from 'react';
import ImageSlider from './ImageSlider';
import { VISUAL_DIVIDER_IMAGES } from '../constants';

const VisualDivider: React.FC = () => {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageSlider images={VISUAL_DIVIDER_IMAGES} />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="text-center pt-6 sm:pt-8 md:pt-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold animate-fade-in-down">
            BYD DOLPHIN MINI
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl animate-fade-in-down animation-delay-300">
            Modelo 2025 Disponible
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto pb-6 sm:pb-8 md:pb-10 animate-fade-in-up animation-delay-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-center">
            {/* Primera fila - 1 elemento en móvil, 2 en tablet, 3 en desktop */}
            <div className="sm:col-span-2 md:col-span-1">
              <FeatureHighlight
                title="Batería Blade"
                description="La batería eléctrica más segura"
              />
            </div>
            {/* Segunda fila - 2 elementos en móvil, 2 en tablet, 3 en desktop */}
            <div className="sm:col-span-1">
              <FeatureHighlight
                title="Hasta 380 km (NEDC)"
                description="Autonomía 100% eléctrica"
              />
            </div>
            <div className="sm:col-span-1">
              <FeatureHighlight
                title="Plataforma-E 3.0"
                description="Destacando la inteligencia, eficiencia y seguridad"
              />
            </div>
          </div>
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
        .animate-fade-in-down, .animate-fade-in-up {
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

const FeatureHighlight: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div>
    <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-heading">{title}</h3>
    <p className="mt-1 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base text-gray-300">{description}</p>
  </div>
);

export default VisualDivider;