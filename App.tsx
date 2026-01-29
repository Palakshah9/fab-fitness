
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Interactive Floating Features */}
      <AIAssistant />
      
      {/* Global Bottom CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md z-40 border-t border-gray-100 flex gap-2">
        <a 
          href="#pricing" 
          className="flex-grow bg-neonPink text-white text-center py-3 rounded-full font-bold uppercase text-xs tracking-widest shadow-lg"
        >
          Join Now
        </a>
        <a 
          href="#contact" 
          className="flex-grow bg-gold text-white text-center py-3 rounded-full font-bold uppercase text-xs tracking-widest shadow-lg"
        >
          Free Trial
        </a>
      </div>
    </div>
  );
};

export default App;
