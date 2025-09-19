
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VisualDivider from './components/VisualDivider';
import YuanProSlider from './components/YuanProSlider';
import Models from './components/Models';
import Benefits from './components/Benefits';
import PreRegistrationForm from './components/PreRegistrationForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VehiclePage from './components/VehiclePage';
import { CarModel } from './types';

const App: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<CarModel | null>(null);

  const handleModelClick = (model: CarModel) => {
    setSelectedModel(model);
  };

  const handleBackToHome = () => {
    setSelectedModel(null);
  };

  // Si hay un modelo seleccionado, mostrar la página del modelo
  if (selectedModel) {
    return <VehiclePage vehicle={selectedModel} onBack={handleBackToHome} />;
  }

  return (
    <div className="bg-white text-gray-900 font-sans">
      <Header onModelClick={handleModelClick} />
      <main>
        <Hero />
        <VisualDivider />
        <YuanProSlider /> 
        <Benefits />
        <PreRegistrationForm />
        <Models onModelClick={handleModelClick} />
        {/* <Testimonials /> */}
        {/* <FAQ /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;