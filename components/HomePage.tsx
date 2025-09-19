import React from 'react';
import { useTheme } from '../hooks/useTheme';
import Header from './Header';
import Hero from './Hero';
import VisualDivider from './VisualDivider';
import YuanProSlider from './YuanProSlider';
import Models from './Models';
import Benefits from './Benefits';
import PreRegistrationForm from './PreRegistrationForm';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';

const HomePage: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 font-sans transition-colors duration-300">
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

export default HomePage;
