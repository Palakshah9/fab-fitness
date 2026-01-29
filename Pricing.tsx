
import React from 'react';
import { PRICING } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-luxuryBlack relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neonPink/5 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-neonBlue/5 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-neonPink font-bold tracking-[0.2em] uppercase mb-4">Membership</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Choose Your <span className="text-gold italic">Path</span>.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Luxury fitness shouldn't be complicated. Select a plan that fits your lifestyle and start your transformation today.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white/5 border-2 rounded-3xl p-10 flex flex-col transition-all duration-500 hover:scale-[1.02] ${
                plan.isPopular ? 'border-gold shadow-[0_0_30px_rgba(212,175,55,0.2)]' : 'border-white/10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Best Value
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-white text-2xl font-bold mb-2 uppercase tracking-tighter">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm">/ {plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <svg className={`w-5 h-5 ${plan.isPopular ? 'text-gold' : 'text-neonBlue'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-extrabold uppercase tracking-widest transition-all ${
                plan.isPopular ? 'bg-gold text-white hover:bg-white hover:text-luxuryBlack' : 'bg-white/10 text-white hover:bg-white hover:text-luxuryBlack'
              }`}>
                Join Gym
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">Not sure? <a href="#contact" className="text-neonBlue font-bold underline hover:text-neonPink">Book a Free 1-Day Trial</a></p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
