import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CabinDetails from './components/CabinDetails';
import TripPlanner from './components/TripPlanner';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import { CABINS, BLOG_POSTS } from './constants';
import { CabinImages, BlogPost } from './types';

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'angelheights' | 'angelrise' | 'planner' | 'blog' | 'contact'>('home');
  const [homeHeroImage, setHomeHeroImage] = useState('https://images.unsplash.com/photo-1547466832-1d2cc1eeac02?auto=format&fit=crop&q=80&w=1920&h=1080');
  const [cabinImages, setCabinImages] = useState<CabinImages>({
    angelheights: CABINS[0].defaultImages,
    angelrise: CABINS[1].defaultImages,
  });
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);

  // Update Page Title dynamically for SEO
  useEffect(() => {
    const baseTitle = "Smoky Peaks Cabins";
    switch (page) {
      case 'home':
        document.title = `${baseTitle} | Gatlinburg Luxury Cabin Rentals`;
        break;
      case 'angelheights':
        document.title = `Angel Heights Cabin | Historic Log Cabin in Gatlinburg, TN`;
        break;
      case 'angelrise':
        document.title = `Angel Rise Cabin | Mountain View Retreat Gatlinburg`;
        break;
      case 'blog':
        document.title = `Mountain Musings Blog | Gatlinburg & Smoky Mountains Guide`;
        break;
      case 'planner':
        document.title = `AI Trip Planner | Plan Your Smoky Mountain Vacation`;
        break;
      case 'contact':
        document.title = `Contact Us | Smoky Peaks Cabins Gatlinburg`;
        break;
    }
  }, [page]);

  const handleNavigate = (newPage: 'home' | 'angelheights' | 'angelrise' | 'planner' | 'blog' | 'contact') => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setHomeHeroImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    }
  };

  const addImage = (cabinId: string, base64: string) => {
    setCabinImages(prev => ({
      ...prev,
      [cabinId]: [base64, ...prev[cabinId]].slice(0, 24)
    }));
  };

  const handleRemoveImage = (cabinId: string, index: number) => {
    setCabinImages(prev => ({
      ...prev,
      [cabinId]: prev[cabinId].filter((_, i) => i !== index)
    }));
  };

  const handlePromoteImage = (cabinId: string, index: number) => {
    setCabinImages(prev => {
      const current = [...prev[cabinId]];
      const [item] = current.splice(index, 1);
      return {
        ...prev,
        [cabinId]: [item, ...current]
      };
    });
  };

  const handleUpdateBlogPostImage = (postId: string, base64: string) => {
    setBlogPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, image: base64 } : post
    ));
  };

  const renderContent = () => {
    if (page === 'planner') return <TripPlanner />;
    if (page === 'contact') return <ContactForm />;
    if (page === 'blog') return (
      <Blog 
        posts={blogPosts} 
        onUpdatePostImage={handleUpdateBlogPostImage} 
      />
    );
    
    if (page === 'angelheights') {
      return (
        <CabinDetails 
          cabin={CABINS[0]} 
          images={cabinImages.angelheights} 
          onImageAdd={addImage} 
          onImageRemove={(idx) => handleRemoveImage('angelheights', idx)}
          onImagePromote={(idx) => handlePromoteImage('angelheights', idx)}
        />
      );
    }
    
    if (page === 'angelrise') {
      return (
        <CabinDetails 
          cabin={CABINS[1]} 
          images={cabinImages.angelrise} 
          onImageAdd={addImage} 
          onImageRemove={(idx) => handleRemoveImage('angelrise', idx)}
          onImagePromote={(idx) => handlePromoteImage('angelrise', idx)}
        />
      );
    }

    return (
      <div className="animate-fadeIn">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <img 
              src={homeHeroImage} 
              alt="Panoramic view of the Great Smoky Mountains landscape in Gatlinburg" 
              className="w-full h-full object-cover filter brightness-100 scale-105 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-stone-900/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
          </div>

          <div className="absolute top-28 right-6 z-30 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
            <label 
              htmlFor="hero-photo-upload"
              className="cursor-pointer bg-black/50 hover:bg-black/70 backdrop-blur-md text-white text-[10px] font-bold tracking-widest px-4 py-2 rounded-full border border-white/20 uppercase transition-all flex items-center gap-2 shadow-2xl active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Update Hero Photo
            </label>
            <input 
              id="hero-photo-upload"
              type="file" 
              accept="image/*" 
              onChange={handleHeroUpload} 
              className="hidden" 
            />
          </div>
          
          <div className="relative z-10 text-center text-white px-6">
            <div className="bg-black/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl inline-block">
              <h1 className="text-6xl md:text-8xl font-serif mb-6 drop-shadow-2xl text-shadow-lg text-white">Escape to the Peaks</h1>
              <p className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase mb-12 drop-shadow-md text-white">Luxury Cabin Retreats in Gatlinburg</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => handleNavigate('angelheights')}
                  className="bg-emerald-900 hover:bg-emerald-800 text-white px-10 py-4 rounded-full font-bold shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  Explore Angel Heights
                </button>
                <button 
                  onClick={() => handleNavigate('angelrise')}
                  className="bg-white text-emerald-900 hover:bg-stone-100 px-10 py-4 rounded-full font-bold shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  Explore Angel Rise
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-24 px-6 bg-stone-100 border-b border-stone-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8">Reconnect with Nature in the Smokies</h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-12 italic">
              "Smoky Peaks Cabins isn't just a vacation rental. It's a sanctuary where the morning fog meets your coffee cup and the sunset paints a different masterpiece on your deck every single evening."
            </p>
            <div className="w-24 h-1 bg-emerald-900 mx-auto rounded-full" />
          </div>
        </section>

        {/* Featured Cabins */}
        <section className="py-24 px-6 bg-stone-200/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Angel Heights Preview */}
              <div className="group cursor-pointer" onClick={() => handleNavigate('angelheights')}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl mb-8 border border-stone-300">
                  <img src={cabinImages.angelheights[0]} alt="Authentic Historic Log Cabin in Gatlinburg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 bg-emerald-900 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">Historic Charm</div>
                </div>
                <h3 className="text-3xl font-serif mb-2 text-stone-800 group-hover:text-emerald-900 transition-colors">Angel Heights Cabin</h3>
                <p className="text-stone-500 mb-6 line-clamp-3">A thoughtfully restored historic log cabin offering mountain views and modern comforts. Secluded in nature but just minutes from the Parkway and Dollywood.</p>
                <div className="flex gap-4">
                  {CABINS[0].mainFeatures.slice(0, 3).map(f => (
                    <span key={f} className="text-[10px] uppercase tracking-tighter text-stone-500 font-bold border border-stone-400 px-2 py-1 rounded">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Angel Rise Preview */}
              <div className="group cursor-pointer" onClick={() => handleNavigate('angelrise')}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl mb-8 border border-stone-300">
                  <img src={cabinImages.angelrise[0]} alt="Angel Rise Cabin with Mt LeConte View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 bg-orange-800 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">Pure Sanctuary</div>
                </div>
                <h3 className="text-3xl font-serif mb-2 text-stone-800 group-hover:text-emerald-900 transition-colors">Angel Rise Cabin</h3>
                <p className="text-stone-500 mb-6 line-clamp-3">A haven for peace and recharging. Floor-to-ceiling tile spa bathrooms and stunning views of Mt. LeConte. The ultimate secluded retreat.</p>
                <div className="flex gap-4">
                  {CABINS[1].mainFeatures.slice(0, 3).map(f => (
                    <span key={f} className="text-[10px] uppercase tracking-tighter text-stone-500 font-bold border border-stone-400 px-2 py-1 rounded">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-6 bg-emerald-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 drop-shadow-lg">Ready for your Gatlinburg getaway?</h2>
            <p className="text-xl text-emerald-100/70 mb-12">Join thousands of happy families who have made Smoky Peaks Cabins their home away from home in the Great Smoky Mountains.</p>
            <button 
              onClick={() => handleNavigate('planner')}
              className="bg-white text-emerald-950 px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform"
            >
              Start Planning Your Trip
            </button>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} currentPage={page} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;