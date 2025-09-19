import React from 'react';

interface VehicleDetailProps {
  vehicle: {
    id: string;
    name: string;
    category: string;
    price: string;
    imageUrl: string;
  };
  onClose: () => void;
}

const VehicleDetail: React.FC<VehicleDetailProps> = ({ vehicle, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{vehicle.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image */}
          <div className="mb-6">
            <img
              src={vehicle.imageUrl}
              alt={vehicle.name}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Construction Message */}
          <div className="text-center py-12">
            <div className="mb-6">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Página en Construcción</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Estamos trabajando en la página de detalles de <strong>{vehicle.name}</strong>.
              <br />
              Pronto tendrás acceso a toda la información técnica, especificaciones y características de este vehículo.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <strong>¿Interesado en este modelo?</strong><br />
                Contactanos para recibir información detallada y programar una cita de prueba.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Cerrar
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-center"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
