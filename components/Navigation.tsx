import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAV_LINKS, MODEL_LINKS, CAR_MODELS } from '../constants';
import { CarModel } from '../types';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const [isModelsDropdownOpen, setIsModelsDropdownOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(href);
    }
    setIsModelsDropdownOpen(false);
  };

  const handleModelClick = (modelId: string) => {
    navigate(`/modelo/${modelId}`);
    setIsModelsDropdownOpen(false);
  };

  return (
    <nav className="hidden md:flex md:items-center md:space-x-8">
      {NAV_LINKS.map(link => {
        if (link.name === 'Modelos') {
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
  );
};

export default Navigation;
