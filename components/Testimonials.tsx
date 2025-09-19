
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">Experiencias que Inspiran</h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Qué dicen los propietarios y expertos sobre BYD en el mundo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
              <p className="mt-3 sm:mt-4 font-bold text-right text-gray-900 dark:text-gray-200 text-sm sm:text-base">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
