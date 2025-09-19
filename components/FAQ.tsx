
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FaqItem: React.FC<{ faq: { q: string, a: string }, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-border dark:border-border-dark">
      <button
        className="w-full flex justify-between items-center text-left py-5 px-2"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-secondary dark:text-white">{faq.q}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="pb-5 px-2 text-text-light dark:text-gray-400">
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
    <section id="faq" className="py-20 bg-surface dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-secondary dark:text-white">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-text-light dark:text-gray-400 max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes sobre la llegada de BYD a Villa Carlos Paz.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
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
