
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const TripPlanner: React.FC = () => {
  const [interest, setInterest] = useState('');
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateItinerary = async () => {
    if (!interest) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am staying at a SmokyPeaks cabin in Gatlinburg. I am interested in: ${interest}. 
                  Create a cozy 2-day itinerary including local spots like Anakeesta, SkyPark, or the National Park. 
                  Keep the tone warm and rustic.`,
        config: {
          systemInstruction: 'You are a local mountain guide in Gatlinburg, TN. You suggest cozy, nature-filled, and relaxing itineraries.',
        }
      });
      setItinerary(response.text || 'Something went wrong. Please try again.');
    } catch (error) {
      console.error(error);
      setItinerary('Unable to reach our mountain guide right now. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-emerald-900 mb-4">Mountain Guide AI</h2>
        <p className="text-stone-600">Tell us what you love, and we'll craft your perfect Smoky Mountain adventure.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100 mb-12">
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="e.g., Hiking, Moonshine, Family Fun, or Romantic Dining..."
            className="flex-1 px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
          <button 
            onClick={generateItinerary}
            disabled={loading || !interest}
            className="bg-emerald-900 text-white px-8 py-4 rounded-2xl hover:bg-emerald-800 transition-all font-bold shadow-lg disabled:opacity-50"
          >
            {loading ? 'Planning...' : 'Plan My Trip'}
          </button>
        </div>
      </div>

      {itinerary && (
        <div className="bg-stone-50 p-10 rounded-3xl border border-emerald-100 animate-fadeIn whitespace-pre-wrap leading-relaxed text-stone-800 font-serif text-lg">
          {itinerary}
        </div>
      )}

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
        <div className="text-center">
            <span className="block text-3xl mb-2">🏔️</span>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-1">Hiking</h4>
            <p className="text-[10px]">Over 800 miles of trails in GSMNP</p>
        </div>
        <div className="text-center">
            <span className="block text-3xl mb-2">🐻</span>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-1">Wildlife</h4>
            <p className="text-[10px]">Cades Cove is prime bear viewing</p>
        </div>
        <div className="text-center">
            <span className="block text-3xl mb-2">🎡</span>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-1">Gatlinburg</h4>
            <p className="text-[10px]">Endless shopping & entertainment</p>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
