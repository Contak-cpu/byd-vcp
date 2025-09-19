import React from 'react';
import ImageSlider from './ImageSlider';
import { BENEFITS_SLIDER_IMAGES } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="relative h-[90vh] min-h-[600px] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageSlider images={BENEFITS_SLIDER_IMAGES} />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12">
        <div className="text-center pt-10">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fade-in-down">
            ¿Por qué BYD es líder mundial?
          </h2>
          <p className="mt-2 text-lg md:text-xl animate-fade-in-down animation-delay-300">
            Descubrí las innovaciones y ventajas que nos posicionan a la vanguardia de la movilidad eléctrica.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto pb-10 animate-fade-in-up animation-delay-500">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <FeatureHighlight
              title="Innovación Tecnológica"
              description="Tecnología de vanguardia en movilidad eléctrica"
            />
            <FeatureHighlight
              title="Sostenibilidad"
              description="Compromiso con el medio ambiente"
            />
            <FeatureHighlight
              title="Calidad y Seguridad"
              description="Estándares superiores de calidad"
            />
            <FeatureHighlight
              title="Presencia Global"
              description="Presentes en más de 70 países"
            />
          </div>
        </div>
      </div>
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

export default Benefits;