
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">F</div>
            <span className={`text-2xl font-extrabold tracking-tighter font-serif ${scrolled ? 'text-luxuryBlack' : 'text-white md:text-luxuryBlack lg:text-white lg:mix-blend-difference'}`}>
              FAB <span className="text-neonPink">FITNESS</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-luxuryBlack hover:text-neonPink transition-colors font-semibold uppercase text-xs tracking-widest"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#pricing"
                className="bg-gold text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-luxuryBlack transition-all shadow-md active:scale-95"
              >
                Join Now
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-luxuryBlack p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute top-full left-0 w-full animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-luxuryBlack hover:text-neonPink hover:bg-gray-50 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-neonPink text-white py-4 mt-4 font-bold uppercase tracking-widest"
            >
              Join Gym
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
