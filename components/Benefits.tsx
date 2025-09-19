import React from 'react';
import ImageSlider from './ImageSlider';
import { BENEFITS_SLIDER_IMAGES } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageSlider images={BENEFITS_SLIDER_IMAGES} />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="text-center pt-6 sm:pt-8 md:pt-10">
        </div>

        <div className="w-full max-w-5xl mx-auto pb-6 sm:pb-8 md:pb-10">
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


export default Benefits;