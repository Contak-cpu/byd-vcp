import React, { useState } from 'react';
import { CarModel } from '../types';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../hooks/useTheme';
import { scrollToElementWithDelay } from '../utils/scrollUtils';

interface VehiclePageProps {
  vehicle: CarModel;
  onBack: () => void;
}

const VehiclePage: React.FC<VehiclePageProps> = ({ vehicle, onBack }) => {
  const [theme, toggleTheme] = useTheme();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  // Imágenes adicionales para cada modelo (puedes agregar más según necesites)
  const getVehicleImages = (vehicleId: string) => {
    const baseImages = {
      'byd-dolphin': [
        './images/byd-mini-dolphin-model.png',
        './images/byd-mini-dolphin-1.png',
        './images/byd-mini-dolphin-2.png',
        './images/byd-mini-dolphin-3.png'
      ],
      'byd-yuan-pro': [
        './images/byd-yuanpro-model.png',
        './images/byd-yuan-pro-1.png',
        './images/byd-yuan-pro-2.png',
        './images/byd-yuan-pro-3.png'
      ],
      'byd-seal': [
        './images/byd-song-model.png',
        './images/byd-hero.png'
      ]
    };
    return baseImages[vehicleId as keyof typeof baseImages] || [vehicle.imageUrl];
  };

  const vehicleImages = getVehicleImages(vehicle.id);

  const handleScrollToForm = () => {
    document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigationClick = (href: string) => {
    if (href.startsWith('#')) {
      // Si es un enlace interno, regresar a la página principal y luego navegar
      onBack(); // Regresar a la página principal
      // Usar la función utilitaria con delay
      scrollToElementWithDelay(href, 200, 80);
    } else {
      // Si es un enlace externo, navegar directamente
      window.location.href = href;
    }
  };

  const tabs = [
    { id: 'overview', label: 'Resumen', icon: '📋' },
    { id: 'specs', label: 'Especificaciones', icon: '⚙️' },
    { id: 'features', label: 'Características', icon: '✨' },
    { id: 'gallery', label: 'Galería', icon: '📸' }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 font-sans transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} onNavigationClick={handleNavigationClick} />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <button
                  onClick={onBack}
                  className="mb-6 flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Volver a Modelos
                </button>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{vehicle.name}</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-6">{vehicle.category}</p>
                <p className="text-lg text-white/80 mb-8 max-w-2xl">{vehicle.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleScrollToForm}
                    className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                  >
                    Solicitar Información
                  </button>
                  <button
                    onClick={handleScrollToForm}
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-colors"
                  >
                    Agendar Prueba
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={vehicle.imageUrl}
                  alt={vehicle.name}
                  className="w-full h-auto max-w-lg mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-white text-primary-600 px-6 py-3 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">{vehicle.price}</div>
                  <div className="text-sm text-gray-600">Precio referencial</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 min-w-[140px] ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-2xl shadow-primary-500/30 scale-105'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-2xl">{tab.icon}</span>
                    <span className="text-sm font-semibold">{tab.label}</span>
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full shadow-lg"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'overview' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                    Resumen del {vehicle.name}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔋</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">Autonomía</h3>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{vehicle.autonomy}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Ciclo NEDC</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">Motor</h3>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{vehicle.motor}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">Carga Rápida</h3>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{vehicle.charge}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔋</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">Batería</h3>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{vehicle.battery}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📏</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">Dimensiones</h3>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{vehicle.dimensions}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">Colores</h3>
                      <div className="flex flex-wrap gap-2 mt-3 justify-center">
                        {vehicle.colors.map((color, index) => (
                          <span key={index} className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                    Especificaciones Técnicas
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Motor y Rendimiento</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-4 px-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Potencia del Motor</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">{vehicle.motor}</span>
                      </div>
                      <div className="flex justify-between items-center py-4 px-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Autonomía</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">{vehicle.autonomy}</span>
                      </div>
                      <div className="flex justify-between items-center py-4 px-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Tipo de Batería</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">{vehicle.battery}</span>
                      </div>
                      <div className="flex justify-between items-center py-4 px-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Carga Rápida</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">{vehicle.charge}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">📏</span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Dimensiones</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-4 px-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Largo x Ancho x Alto</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">{vehicle.dimensions}</span>
                      </div>
                      <div className="flex justify-between items-center py-4 px-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Segmento</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">{vehicle.segment}</span>
                      </div>
                      <div className="flex justify-between items-center py-4 px-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Categoría</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">{vehicle.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                    Características y Equipamiento
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">🚗</span>
                        </div>
                        <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Interior</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{vehicle.interior}</p>
                    </div>
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">📱</span>
                        </div>
                        <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Conectividad</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{vehicle.connectivity}</p>
                    </div>
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">🤖</span>
                        </div>
                        <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Asistencia al Conductor</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{vehicle.assistant}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">🛡️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Seguridad</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{vehicle.safety}</p>
                    </div>
                    {vehicle.recognition && (
                      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-200 dark:border-yellow-800">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mr-4">
                            <span className="text-2xl">🏆</span>
                          </div>
                          <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">Reconocimientos</h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-semibold">{vehicle.recognition}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                    Galería de Imágenes
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"></div>
                </div>
                <div className="space-y-8">
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-4 shadow-2xl">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={vehicleImages[activeImageIndex]}
                        alt={`${vehicle.name} - Imagen ${activeImageIndex + 1}`}
                        className="w-full h-96 md:h-[500px] object-cover transition-all duration-500"
                      />
                      {vehicleImages.length > 1 && (
                        <>
                          <button
                            onClick={() => setActiveImageIndex((prev) => prev > 0 ? prev - 1 : vehicleImages.length - 1)}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white p-3 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={() => setActiveImageIndex((prev) => prev < vehicleImages.length - 1 ? prev + 1 : 0)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white p-3 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </>
                      )}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {activeImageIndex + 1} / {vehicleImages.length}
                      </div>
                    </div>
                  </div>
                  {vehicleImages.length > 1 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {vehicleImages.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 ${
                            activeImageIndex === index 
                              ? 'ring-4 ring-primary-500 shadow-lg shadow-primary-500/25' 
                              : 'hover:shadow-lg'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${vehicle.name} - Thumbnail ${index + 1}`}
                            className="w-full h-24 md:h-32 object-cover transition-transform duration-300"
                          />
                          {activeImageIndex === index && (
                            <div className="absolute inset-0 bg-primary-500/20 flex items-center justify-center">
                              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="bg-gray-100 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Interesado en el {vehicle.name}?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Contactanos para recibir información detallada, programar una prueba de manejo o resolver cualquier consulta.
              </p>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder={`Estoy interesado en el ${vehicle.name}. Me gustaría...`}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors"
                  >
                    Enviar Consulta
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VehiclePage;
