import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link to satisfy "send an email directly" requirement for frontend-only app
    const subject = encodeURIComponent(`New Inquiry: Smoky Peaks Cabins - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Question:\n${formData.question}`
    );
    
    window.location.href = `mailto:anxybear@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
    // Reset form after a delay
    setTimeout(() => {
        setFormData({ name: '', email: '', question: '' });
        setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-fadeIn">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-serif text-emerald-950 mb-6">Get in Touch</h1>
        <p className="text-stone-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Have a question about our cabins or planning your Gatlinburg escape? Send us a note and we'll help you find your perfect mountain retreat.
        </p>
        <div className="w-24 h-1 bg-emerald-900 mx-auto mt-8 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-emerald-900 text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            <h3 className="text-2xl font-serif mb-6">Stay with Us</h3>
            <p className="text-emerald-100/70 text-sm mb-8 leading-relaxed">
              Our cabins are privately owned and managed with a personal touch. We treat every guest like family.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">📍</div>
                <div className="text-xs font-bold uppercase tracking-widest">Gatlinburg, Tennessee</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">🏔️</div>
                <div className="text-xs font-bold uppercase tracking-widest">Great Smoky Mountains</div>
              </div>
            </div>
          </div>

          <div className="px-4">
            <h4 className="font-serif text-xl text-stone-800 mb-4">Frequently Asked</h4>
            <ul className="space-y-4 text-sm text-stone-500 italic">
              <li>"How close is the nearest grocery store?"</li>
              <li>"Is the road to Angel Rise paved?"</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-10 md:p-12 rounded-[2rem] shadow-xl border border-stone-200 relative overflow-hidden"
          >
            {isSubmitted && (
              <div className="absolute inset-0 bg-emerald-950/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 animate-fadeIn">
                <div className="text-6xl mb-6">✉️</div>
                <h3 className="text-3xl font-serif text-white mb-4">Message Prepared!</h3>
                <p className="text-emerald-100/70 text-sm max-w-xs leading-relaxed">
                  Your email client should open shortly. If it doesn't, please click the send button again or email us directly at anxybear@gmail.com.
                </p>
              </div>
            )}

            <div className="space-y-8">
              <div className="group">
                <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2 group-focus-within:text-emerald-700 transition-colors">
                  Your Full Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-stone-50 border-b-2 border-stone-200 py-3 px-1 focus:outline-none focus:border-emerald-700 transition-all text-stone-800 placeholder-stone-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2 group-focus-within:text-emerald-700 transition-colors">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-stone-50 border-b-2 border-stone-200 py-3 px-1 focus:outline-none focus:border-emerald-700 transition-all text-stone-800 placeholder-stone-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="group">
                <label htmlFor="question" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2 group-focus-within:text-emerald-700 transition-colors">
                  How can we help you?
                </label>
                <textarea
                  required
                  id="question"
                  name="question"
                  rows={5}
                  value={formData.question}
                  onChange={handleChange}
                  className="w-full bg-stone-50 border-2 border-stone-200 rounded-2xl p-4 focus:outline-none focus:border-emerald-700 transition-all text-stone-800 placeholder-stone-300 resize-none"
                  placeholder="Tell us about your trip plans or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-950 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-800 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 group"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;