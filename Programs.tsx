
import React from 'react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold font-bold tracking-[0.2em] uppercase mb-4">What We Offer</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxuryBlack mb-6">Designed for Every <span className="text-neonBlue">Goal</span>.</h2>
          <div className="w-24 h-1 bg-neonPink mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((program) => (
            <div 
              key={program.id} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 text-center relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg border-4 border-gray-50 group-hover:border-gold transition-colors">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-luxuryBlack mb-4 mt-6 uppercase tracking-wider">{program.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                <button className="text-xs font-bold uppercase tracking-widest text-gold hover:text-neonPink transition-colors">
                  Learn More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
