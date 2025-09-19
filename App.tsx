
import React from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import VisualDivider from './components/VisualDivider';
import YuanProSlider from './components/YuanProSlider'; // This is now Yuan Pro Features
import Models from './components/Models';
import Benefits from './components/Benefits';
import PreRegistrationForm from './components/PreRegistrationForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-dark dark:text-gray-200 font-sans transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <VisualDivider />
        <YuanProSlider /> 
        <Benefits />
        <PreRegistrationForm />
        <Models />
        {/* <Testimonials /> */}
        {/* <FAQ /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;