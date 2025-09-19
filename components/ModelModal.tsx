
import React, { useEffect } from 'react';
import { CarModel } from '../types';

interface ModelModalProps {
  model: CarModel;
  onClose: () => void;
}

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SpecItem: React.FC<{ label: string; value?: string }> = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="py-3 px-4 bg-gray-50 dark:bg-gray-700/50 rounded-md flex justify-between items-center text-sm">
      <span className="font-medium text-text-light dark:text-gray-400">{label}</span>
      <span className="font-semibold text-secondary dark:text-gray-200 text-right">{value}</span>
    </div>
  );
};


const ModelModal: React.FC<ModelModalProps> = ({ model, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              onClose();
           }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const handleScrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClose();
      document.querySelector('#pre-registro')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-white dark:bg-surface-dark rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto transform scale-95 animate-scale-in" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-white dark:bg-surface-dark p-4 border-b border-border dark:border-border-dark flex justify-between items-center z-10">
                    <h2 className="font-heading text-2xl font-bold text-secondary dark:text-white">{model.name}</h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                        <XIcon className="h-6 w-6 text-text-light dark:text-gray-400" />
                    </button>
                </div>
                
                <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <img src={model.imageUrl} alt={model.name} className="w-full h-auto object-cover rounded-md" />
                            <p className="mt-4 text-text-light dark:text-gray-300">{model.description}</p>
                            {model.recognition && <p className="mt-2 text-sm font-semibold text-green-600 dark:text-green-400">{model.recognition}</p>}
                            <div className="mt-4 flex justify-between items-center">
                                <span className="font-bold text-2xl text-primary">{model.price}</span>
                                <span className="text-sm text-text-light dark:text-gray-400">Precio referencial</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                           <SpecItem label="Categoría" value={model.category} />
                           <SpecItem label="Segmento" value={model.segment} />
                           <SpecItem label="Sistema" value={model.system} />
                           <SpecItem label="Motor" value={model.motor} />
                           <SpecItem label="Potencia" value={model.power} />
                           <SpecItem label="Batería" value={model.battery} />
                           <SpecItem label="Autonomía Eléctrica" value={model.autonomy} />
                           <SpecItem label="Autonomía Total" value={model.totalAutonomy} />
                           <SpecItem label="Consumo" value={model.consumption} />
                           <SpecItem label="Carga" value={model.charge} />
                           <SpecItem label="Dimensiones" value={model.dimensions} />
                           <SpecItem label="Interior" value={model.interior} />
                           <SpecItem label="Conectividad" value={model.connectivity} />
                           <SpecItem label="Seguridad" value={model.safety} />
                           <SpecItem label="Asistente de Voz" value={model.assistant} />
                           <SpecItem label="Extras" value={model.extras} />
                        </div>
                    </div>
                </div>

                <div className="sticky bottom-0 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm p-4 border-t border-border dark:border-border-dark flex justify-end">
                    <button onClick={handleScrollToForm} className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary-dark transition-colors duration-300">
                        Reservar este modelo
                    </button>
                </div>
            </div>
            {/* FIX: Replaced non-standard <style jsx global> with a standard <style> tag to define animations. */}
            <style>{`
              @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

              @keyframes scale-in {
                from { transform: scale(0.95); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
              }
              .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default ModelModal;
