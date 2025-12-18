
import React, { useState, useEffect, useCallback } from 'react';
import { Cabin } from '../types';
import ImageUploader from './ImageUploader';
import Carousel from './Carousel';

interface CabinDetailsProps {
  cabin: Cabin;
  images: string[];
  onImageAdd: (cabinId: string, base64: string) => void;
  onImageRemove: (index: number) => void;
  onImagePromote: (index: number) => void;
}

const CabinDetails: React.FC<CabinDetailsProps> = ({ cabin, images, onImageAdd, onImageRemove, onImagePromote }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  }, [lightboxIndex, images.length]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <div className="animate-fadeIn relative bg-stone-100 pb-24">
      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-[110]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button 
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all z-[110]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative max-w-5xl w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[lightboxIndex]} 
              alt={`Gallery view ${lightboxIndex + 1}`} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scaleIn border border-white/20"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white/50 text-xs font-medium tracking-widest uppercase py-4">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>

          <button 
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all z-[110]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Main Page Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-emerald-950 mb-4">{cabin.name}</h1>
            <p className="text-stone-500 italic text-lg">{cabin.tagline}</p>
        </div>

        <section className="mb-16">
          <Carousel 
            images={images} 
            onImageClick={(idx) => setLightboxIndex(idx)} 
            aspectRatio="aspect-[16/7]"
          />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-emerald-900 border-b border-emerald-100 pb-4">Welcome to Your Sanctuary</h2>
              <p className="text-lg leading-relaxed text-stone-700">{cabin.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cabin.detailedSections.map((section, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-stone-200 hover:shadow-lg transition-all group">
                  <h3 className="text-xl font-bold mb-4 text-emerald-800 font-serif border-b border-stone-100 pb-2 group-hover:text-emerald-600 transition-colors">{section.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Amenities Grid */}
            <div className="space-y-8">
               <h2 className="text-3xl font-serif text-emerald-900 border-b border-emerald-100 pb-4">Key Amenities</h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {cabin.mainFeatures.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-2xl border border-stone-200">
                      <span className="text-3xl mb-3">
                        {feature.includes('Tub') ? '🛀' : feature.includes('Fire') ? '🔥' : feature.includes('View') ? '🏔️' : '🍳'}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-700">{feature}</span>
                    </div>
                  ))}
                  <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-2xl border border-stone-200">
                      <span className="text-3xl mb-3">📶</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-700">Free High-Speed Wi-Fi</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-2xl border border-stone-200">
                      <span className="text-3xl mb-3">🧊</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-700">Central Heat & Air</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-2xl border border-stone-200">
                      <span className="text-3xl mb-3">🧼</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-700">Linens & Towels</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-2xl border border-stone-200">
                      <span className="text-3xl mb-3">☕</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-700">Coffee Bar</span>
                  </div>
               </div>
            </div>

            {/* Gallery Management Section */}
            <div className="space-y-8 bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <div className="flex justify-between items-end border-b border-stone-100 pb-4">
                <div>
                    <h2 className="text-2xl font-serif text-stone-800">Manage Gallery</h2>
                    <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Add or remove actual guest photos</p>
                </div>
                <div className="text-[10px] text-stone-400 font-bold tracking-widest uppercase">
                    {images.length} Photos
                </div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="relative aspect-square overflow-hidden rounded-xl shadow-md group cursor-pointer border border-stone-200"
                  >
                    <img 
                      src={img} 
                      alt={`Cabin View ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      onClick={() => setLightboxIndex(idx)}
                    />
                    
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                      <div className="flex justify-between gap-1">
                        <button 
                          onClick={(e) => { e.stopPropagation(); onImagePromote(idx); }}
                          className="bg-white/20 hover:bg-emerald-600 text-white p-1.5 rounded-lg backdrop-blur-md transition-colors"
                          title="Promote to main"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); onImageRemove(idx); }}
                          className="bg-white/20 hover:bg-red-600 text-white p-1.5 rounded-lg backdrop-blur-md transition-colors"
                          title="Delete photo"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="aspect-square">
                  <ImageUploader cabinId={cabin.id} onImageAdd={onImageAdd} />
                </div>
              </div>
            </div>

            <div className="bg-stone-200/50 p-8 rounded-3xl border border-stone-300">
              <h3 className="text-2xl font-serif mb-6 text-emerald-900">Nearby Attractions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cabin.attractions.map((attraction, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl flex items-start gap-4 shadow-md border border-stone-100 hover:-translate-y-1 transition-transform">
                     <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-stone-200">
                        <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <h4 className="font-bold text-sm text-stone-800">{attraction.name}</h4>
                        <p className="text-xs text-stone-500 mb-1">{attraction.distance}</p>
                        <p className="text-[10px] text-stone-400 line-clamp-2">{attraction.description}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-emerald-950 text-white p-8 rounded-3xl shadow-2xl border border-white/5">
              <h3 className="text-2xl font-serif mb-4">Book Your Stay</h3>
              <p className="text-emerald-100 text-sm mb-6 leading-relaxed opacity-80">
                Experience the breathtaking beauty of the Great Smoky Mountains from your private retreat.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-emerald-200">Accommodates</span>
                  <span className="text-sm">Up to 6 guests</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-emerald-200">Bedrooms</span>
                  <span className="text-sm">3 Private Rooms</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-emerald-200">Check-in</span>
                  <span className="text-sm">4:00 PM</span>
                </div>
              </div>
              
              {cabin.bookingUrl ? (
                <a 
                  href={cabin.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-emerald-950 py-4 rounded-2xl font-bold hover:bg-stone-100 transition-all shadow-xl active:scale-95 text-lg block text-center"
                >
                  Check Availability
                </a>
              ) : (
                <button className="w-full bg-white text-emerald-950 py-4 rounded-2xl font-bold hover:bg-stone-100 transition-all shadow-xl active:scale-95 text-lg">
                  Check Availability
                </button>
              )}

              <p className="text-center text-[10px] mt-6 uppercase tracking-widest text-emerald-300 opacity-40">
                Licensed Gatlinburg Vacation Rental
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinDetails;
