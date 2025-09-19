
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FaqItem: React.FC<{ faq: { q: string, a: string }, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="w-full flex justify-between items-center text-left py-4 sm:py-5 px-2 sm:px-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        onClick={onClick}
      >
        <span className="text-sm sm:text-base md:text-lg font-medium text-gray-900 dark:text-white pr-4">{faq.q}</span>
        <span className={`transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="pb-4 sm:pb-5 px-2 sm:px-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          {faq.a}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">Preguntas Frecuentes</h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes sobre la llegada de BYD a Villa Carlos Paz.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          {FAQS.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
