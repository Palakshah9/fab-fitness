
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxuryBlack text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">F</div>
              <span className="text-3xl font-extrabold tracking-tighter font-serif">
                FAB <span className="text-neonPink">FITNESS</span>
              </span>
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              Varanasi's premier destination for high-end fitness and wellness. Join a community that celebrates progress, power, and luxury.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'WhatsApp', 'Twitter'].map(social => (
                <a key={social} href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-luxuryBlack transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 border-b border-gold/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Programs', 'Membership', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-neonBlue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 border-b border-neonPink/30 pb-2 inline-block">Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white font-semibold">5:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-semibold">6:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-semibold italic">9:00 - 13:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Fab Fitness Varanasi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
