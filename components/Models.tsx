
import React, { useState } from 'react';
import { CAR_MODELS } from '../constants';
import { CarModel } from '../types';
import ModelModal from './ModelModal';
import VehicleDetail from './VehicleDetail';

interface ModelCardProps {
  model: CarModel;
  onMoreInfoClick: (model: CarModel) => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, onMoreInfoClick }) => {
  const handleScrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector('#pre-registro')?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 group">
      <div className="relative">
        <img src={model.imageUrl} alt={model.name} className="w-full h-40 sm:h-48 md:h-56 object-cover" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
           <button onClick={() => onMoreInfoClick(model)} className="text-white border-2 border-white rounded-full px-4 py-1.5 sm:px-6 sm:py-2 font-semibold hover:bg-white hover:text-black transition-all text-sm sm:text-base">
             Más Información
           </button>
        </div>
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{model.name}</h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">{model.category}</p>
        <div className="mt-3 sm:mt-4 flex justify-between items-center">
          <span className="font-bold text-base sm:text-lg text-primary-600">{model.price}</span>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Precio referencial</p>
        </div>
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
           <button onClick={() => onMoreInfoClick(model)} className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300 text-sm sm:text-base">
             Configurar
           </button>
           <button onClick={handleScrollToForm} className="flex-1 bg-primary-600 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-md hover:bg-primary-700 transition-colors duration-300 text-sm sm:text-base">
             Reservar
           </button>
        </div>
      </div>
    </div>
  );
};

const Models: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<CarModel | null>(null);

  const handleOpenModal = (model: CarModel) => {
    setSelectedModel(model);
  };

  const handleCloseModal = () => {
    setSelectedModel(null);
  };

  return (
    <section id="models" className="py-12 sm:py-16 md:py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">Nuestros Modelos</h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Descubrí la gama de vehículos BYD que transformará tu manera de conducir.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {CAR_MODELS.map(model => (
            <ModelCard key={model.id} model={model} onMoreInfoClick={handleOpenModal} />
          ))}
        </div>
      </div>
      {selectedModel && <VehicleDetail vehicle={selectedModel} onClose={handleCloseModal} />}
    </section>
  );
};

export default Models;
