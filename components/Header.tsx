import React, { useState, useEffect } from 'react';
import { NAV_LINKS, MODEL_LINKS, CAR_MODELS } from '../constants';
import { CarModel } from '../types';
import { scrollToElement } from '../utils/scrollUtils';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onModelClick?: (model: CarModel) => void;
  onNavigationClick?: (href: string) => void;
}

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, onModelClick, onNavigationClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModelsDropdownOpen, setIsModelsDropdownOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (onNavigationClick) {
      onNavigationClick(href);
    } else {
      scrollToElement(href, 80);
    }
    setIsMenuOpen(false);
  };

  const handleModelClick = (modelId: string) => {
    const model = CAR_MODELS.find(m => m.id === modelId);
    if (model && onModelClick) {
      onModelClick(model);
    }
    setIsMenuOpen(false);
    setIsModelsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img 
                src="./images/byd-logo.png" 
                alt="BYD Logo" 
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto"
              />
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map(link => {
              if (link.name === 'Modelos' && onModelClick) {
                return (
                  <div key={link.name} className="relative group">
                    <button
                      onClick={() => setIsModelsDropdownOpen(!isModelsDropdownOpen)}
                      className="font-medium text-white hover:text-gray-300 transition-colors flex items-center"
                    >
                      {link.name}
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isModelsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                        <div className="py-2">
                          {MODEL_LINKS.map(modelLink => (
                            <button
                              key={modelLink.id}
                              onClick={() => handleModelClick(modelLink.id)}
                              className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                              <div className="font-semibold">{modelLink.name}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {CAR_MODELS.find(m => m.id === modelLink.id)?.category}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-medium text-white hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-1.5 sm:p-2 rounded-full hover:bg-gray-800 transition-colors">
              {theme === 'light' ? <MoonIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" /> : <SunIcon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />}
            </button>
            <a href="#pre-registro" onClick={(e) => handleLinkClick(e, '#pre-registro')} className="hidden sm:inline-block bg-white hover:bg-gray-100 text-primary-600 font-bold py-1.5 px-4 sm:py-2 sm:px-6 rounded-md transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base">
              Reservar Ahora
            </a>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1.5 sm:p-2 rounded-md text-white hover:bg-gray-800 transition-colors">
                {isMenuOpen ? <XIcon className="h-5 w-5 sm:h-6 sm:w-6" /> : <MenuIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black py-4">
          <nav className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map(link => {
              if (link.name === 'Modelos') {
                return (
                  <div key={link.name} className="w-full">
                    <button
                      onClick={() => setIsModelsDropdownOpen(!isModelsDropdownOpen)}
                      className="font-medium text-white hover:text-gray-300 transition-colors drop-shadow-md flex items-center justify-center w-full"
                    >
                      {link.name}
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isModelsDropdownOpen && (
                      <div className="mt-2 space-y-2">
                        {MODEL_LINKS.map(modelLink => (
                          <button
                            key={modelLink.id}
                            onClick={() => handleModelClick(modelLink.id)}
                            className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white transition-colors"
                          >
                            <div className="font-medium">{modelLink.name}</div>
                            <div className="text-sm text-gray-400">
                              {CAR_MODELS.find(m => m.id === modelLink.id)?.category}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="font-medium text-white hover:text-gray-300 transition-colors drop-shadow-md">
                  {link.name}
                </a>
              );
            })}
            <a href="#pre-registro" onClick={(e) => handleLinkClick(e, '#pre-registro')} className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-2 px-6 rounded-md transition-all duration-300 shadow-sm hover:shadow-md">
              Reservar Ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;