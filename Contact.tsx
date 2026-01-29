
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl">
            <h2 className="text-4xl font-serif font-bold text-luxuryBlack mb-4">Get In <span className="text-gold italic">Touch</span>.</h2>
            <p className="text-gray-500 mb-10">Start your transformation today. Fill out the form and our team will reach out within 24 hours.</p>

            {formStatus === 'success' ? (
              <div className="bg-green-50 text-green-800 p-8 rounded-2xl text-center animate-fadeIn">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold mb-2">Message Received!</h3>
                <p>Get ready, your fitness journey with Fab Fitness starts now.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-4 text-green-900 font-bold underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                    <input type="text" required className="w-full bg-gray-50 border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                    <input type="tel" required className="w-full bg-gray-50 border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="+91 98XXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                  <input type="email" required className="w-full bg-gray-50 border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-neonPink outline-none transition-all" placeholder="hello@fabfitness.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-neonBlue outline-none transition-all" placeholder="Tell us about your fitness goals..."></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'sending'}
                  className="w-full bg-luxuryBlack text-white py-5 rounded-full font-extrabold uppercase tracking-[0.2em] hover:bg-gold transition-all shadow-xl active:scale-95 disabled:opacity-50"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Claim Free Consult'}
                </button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-gold font-bold tracking-[0.2em] uppercase mb-8">Location & Contact</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-neonPink/10 rounded-2xl flex items-center justify-center text-neonPink text-2xl flex-shrink-0">📍</div>
                  <div>
                    <h5 className="font-bold text-luxuryBlack text-xl mb-1">Visit Us</h5>
                    <p className="text-gray-500">Susuwahi, Varanasi, Uttar Pradesh<br />India - 221005</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-neonBlue/10 rounded-2xl flex items-center justify-center text-neonBlue text-2xl flex-shrink-0">📞</div>
                  <div>
                    <h5 className="font-bold text-luxuryBlack text-xl mb-1">Call Us</h5>
                    <p className="text-gray-500">+91 98XXXXXX44</p>
                    <p className="text-gray-400 text-sm">Mon-Sat: 5:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold text-2xl flex-shrink-0">✉️</div>
                  <div>
                    <h5 className="font-bold text-luxuryBlack text-xl mb-1">Email Support</h5>
                    <p className="text-gray-500">fabfitness@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-[30px] overflow-hidden shadow-lg h-64 border-4 border-white grayscale hover:grayscale-0 transition-all duration-700">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14429.623190479105!2d82.97741366914614!3d25.289053860477103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31f87930773d%3A0x6331908b9821815e!2sSusuwahi%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Fab Fitness Varanasi Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
