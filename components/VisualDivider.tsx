import React from 'react';
import ImageSlider from './ImageSlider';
import { VISUAL_DIVIDER_IMAGES } from '../constants';

const VisualDivider: React.FC = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageSlider images={VISUAL_DIVIDER_IMAGES} />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12">
        <div className="text-center pt-10">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fade-in-down">
            BYD DOLPHIN MINI
          </h2>
          <p className="mt-2 text-lg md:text-xl animate-fade-in-down animation-delay-300">
            Modelo 2025 Disponible
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto pb-10 animate-fade-in-up animation-delay-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FeatureHighlight
              title="Batería Blade"
              description="La batería eléctrica más segura"
            />
            <FeatureHighlight
              title="Hasta 380 km (NEDC)"
              description="Autonomía 100% eléctrica"
            />
            <FeatureHighlight
              title="Plataforma-E 3.0"
              description="Destacando la inteligencia, eficiencia y seguridad"
            />
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
    <h3 className="font-bold text-xl lg:text-2xl font-heading">{title}</h3>
    <p className="mt-1 text-sm lg:text-base text-gray-300">{description}</p>
  </div>
);

export default VisualDivider;