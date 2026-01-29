
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-luxuryBlack">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/449/1920/1080" 
          alt="Luxury Gym" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxuryBlack via-transparent to-luxuryBlack opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxuryBlack opacity-90"></div>
      </div>

      {/* Neon Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neonPink/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neonBlue/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-neonPink font-bold tracking-[0.3em] uppercase mb-4 animate-float">Fab Fitness Varanasi</h2>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          Transform Your <span className="text-gold italic">Body</span>.<br /> 
          Elevate Your <span className="text-neonBlue">Lifestyle</span>.
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          A premium fitness space designed to energize, motivate, and support every stage of your fitness journey. Experience the pinnacle of wellness in Varanasi.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#pricing" 
            className="group relative px-8 py-4 bg-neonPink text-white rounded-full font-extrabold text-lg uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,127,0.6)]"
          >
            Join Gym
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg uppercase tracking-widest transition-all hover:border-gold hover:text-gold"
          >
            Explore More
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/50">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
