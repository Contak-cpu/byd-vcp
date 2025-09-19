
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-secondary dark:text-white">Experiencias que Inspiran</h2>
          <p className="mt-4 text-lg text-text-light dark:text-gray-400 max-w-2xl mx-auto">
            Qué dicen los propietarios y expertos sobre BYD en el mundo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-surface dark:bg-surface-dark p-8 rounded-lg shadow-sm">
              <p className="text-text-light dark:text-gray-300 italic">"{testimonial.text}"</p>
              <p className="mt-4 font-bold text-right text-secondary dark:text-gray-200">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
