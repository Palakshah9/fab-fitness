
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-4 border-l-4 border-gold"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-4 border-r-4 border-neonPink"></div>
            <img 
              src="https://picsum.photos/id/10/800/1000" 
              alt="Gym Interior" 
              className="rounded-2xl shadow-2xl relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-8 rounded-full border border-white/20">
              <span className="text-gold font-serif text-5xl italic font-bold">EST. 2018</span>
            </div>
          </div>

          <div>
            <h4 className="text-neonBlue font-bold tracking-[0.2em] uppercase mb-4">Our Legacy</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxuryBlack mb-8 leading-tight">
              Where Fitness Meets <span className="text-neonPink">Confidence</span>.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Fab Fitness was created to be an accessible and vibrant place where anyone can work out with confidence. We combine premium facilities with a welcoming environment, ensuring members feel motivated, supported, and inspired every time they train.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-2xl shadow-sm border border-gold/20">✨</div>
                <div>
                  <h5 className="font-bold text-luxuryBlack text-xl mb-1">Our Mission</h5>
                  <p className="text-gray-500">To make fitness enjoyable, sustainable, and empowering for everyone through professional coaching and premium amenities.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-2xl shadow-sm border border-neonPink/20">🤝</div>
                <div>
                  <h5 className="font-bold text-luxuryBlack text-xl mb-1">Our Values</h5>
                  <p className="text-gray-500">We value inclusivity, consistency, professionalism, and positive energy, creating a community where every member feels at home.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <span className="block text-4xl font-extrabold text-gold">500+</span>
                <span className="text-sm uppercase tracking-widest text-gray-400 font-semibold">Active Members</span>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <span className="block text-4xl font-extrabold text-neonPink">15+</span>
                <span className="text-sm uppercase tracking-widest text-gray-400 font-semibold">Expert Trainers</span>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <span className="block text-4xl font-extrabold text-neonBlue">24/7</span>
                <span className="text-sm uppercase tracking-widest text-gray-400 font-semibold">Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
