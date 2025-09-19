
import React, { useState } from 'react';
import { CAR_MODELS } from '../constants';
import { CarModel } from '../types';
import ModelModal from './ModelModal';

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
    <div className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative">
        <img src={model.imageUrl} alt={model.name} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
           <button onClick={() => onMoreInfoClick(model)} className="text-white border-2 border-white rounded-full px-6 py-2 font-semibold hover:bg-white hover:text-black transition-all">
             Más Información
           </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-2xl font-bold text-secondary dark:text-white">{model.name}</h3>
        <p className="text-text-light dark:text-gray-400 mt-1">{model.category}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-lg text-primary">{model.price}</span>
          <p className="text-sm text-text-light dark:text-gray-400">Precio referencial</p>
        </div>
        <div className="mt-6 flex space-x-2">
           <button onClick={() => onMoreInfoClick(model)} className="flex-1 bg-gray-200 dark:bg-gray-600 text-secondary dark:text-white font-bold py-3 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300">
             Configurar
           </button>
           <button onClick={handleScrollToForm} className="flex-1 bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300">
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
    <section id="models" className="py-20 bg-surface dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-secondary dark:text-white">Nuestros Modelos</h2>
          <p className="mt-4 text-lg text-text-light dark:text-gray-400 max-w-2xl mx-auto">Descubrí la gama de vehículos BYD que transformará tu manera de conducir.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAR_MODELS.map(model => (
            <ModelCard key={model.id} model={model} onMoreInfoClick={handleOpenModal} />
          ))}
        </div>
      </div>
      {selectedModel && <ModelModal model={selectedModel} onClose={handleCloseModal} />}
    </section>
  );
};

export default Models;
