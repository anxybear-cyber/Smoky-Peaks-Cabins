import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import CabinDetails from './components/CabinDetails.tsx';
import Blog from './components/Blog.tsx';
import ContactForm from './components/ContactForm.tsx';
import TripPlanner from './components/TripPlanner.tsx';
import { CABINS, BLOG_POSTS } from './constants.ts';
import { CabinImages, BlogPost } from './types.ts';
import { compressImage, saveToDB, getFromDB } from './utils.ts';

const DB_KEYS = {
  HERO: 'smoky_peaks_hero_v2',
  CABINS: 'smoky_peaks_cabins_v2',
  BLOG: 'smoky_peaks_blog_v2'
};

type Page = 'home' | 'angelheights' | 'angelrise' | 'blog' | 'contact' | 'planner';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoadingDB, setIsLoadingDB] = useState(true);
  const [showExportModal, setShowExportModal] = useState(false);
  const [dbStatus, setDbStatus] = useState<'Checking...' | 'Connected' | 'Error'>('Checking...');
  
  const [homeHeroImage, setHomeHeroImage] = useState<string>('https://images.unsplash.com/photo-1547466832-1d2cc1eeac02?auto=format&fit=crop&q=80&w=1920&h=1080');
  const [cabinImages, setCabinImages] = useState<CabinImages>({
    angelheights: CABINS[0].defaultImages,
    angelrise: CABINS[1].defaultImages,
  });
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);

  useEffect(() => {
    const initData = async () => {
      try {
        const savedHero = await getFromDB(DB_KEYS.HERO);
        const savedCabins = await getFromDB(DB_KEYS.CABINS);
        const savedBlog = await getFromDB(DB_KEYS.BLOG);

        if (savedHero) setHomeHeroImage(savedHero);
        if (savedCabins) {
          try {
            const parsed = JSON.parse(savedCabins);
            if (parsed.angelheights || parsed.angelrise) {
              setCabinImages(prev => ({ ...prev, ...parsed }));
            }
          } catch (e) { console.error("Cabin images parse error"); }
        }
        if (savedBlog) {
          try {
            setBlogPosts(JSON.parse(savedBlog));
          } catch (e) { console.error("Blog parse error"); }
        }
        setDbStatus('Connected');
      } catch (e) {
        console.error("IndexedDB error", e);
        setDbStatus('Error');
      } finally {
        setIsLoadingDB(false);
      }
    };
    initData();
  }, []);

  const handleNavigate = (newPage: Page) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      const reader = new FileReader();
      reader.onload = async () => {
        if (typeof reader.result === 'string') {
          const compressed = await compressImage(reader.result);
          setHomeHeroImage(compressed);
          await saveToDB(DB_KEYS.HERO, compressed);
          setIsProcessing(false);
        }
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    }
  };

  const addImage = async (cabinId: string, base64: string) => {
    setIsProcessing(true);
    const compressed = await compressImage(base64);
    const newCabinImages = {
      ...cabinImages,
      [cabinId]: [compressed, ...cabinImages[cabinId]].slice(0, 32)
    };
    setCabinImages(newCabinImages);
    await saveToDB(DB_KEYS.CABINS, JSON.stringify(newCabinImages));
    setIsProcessing(false);
  };

  const handleRemoveImage = async (cabinId: string, index: number) => {
    const newCabinImages = {
      ...cabinImages,
      [cabinId]: cabinImages[cabinId].filter((_, i) => i !== index)
    };
    setCabinImages(newCabinImages);
    await saveToDB(DB_KEYS.CABINS, JSON.stringify(newCabinImages));
  };

  const handlePromoteImage = async (cabinId: string, index: number) => {
    const current = [...cabinImages[cabinId]];
    const [item] = current.splice(index, 1);
    const newCabinImages = { ...cabinImages, [cabinId]: [item, ...current] };
    setCabinImages(newCabinImages);
    await saveToDB(DB_KEYS.CABINS, JSON.stringify(newCabinImages));
  };

  const handleUpdateBlogPostImage = async (postId: string, base64: string) => {
    setIsProcessing(true);
    const compressed = await compressImage(base64);
    const newBlogPosts = blogPosts.map(post => 
      post.id === postId ? { ...post, image: compressed } : post
    );
    setBlogPosts(newBlogPosts);
    await saveToDB(DB_KEYS.BLOG, JSON.stringify(newBlogPosts));
    setIsProcessing(false);
  };

  if (isLoadingDB) {
    return (
      <div className="h-screen w-screen bg-stone-100 flex items-center justify-center">
        <div className="text-center animate-pulse">
          <div className="w-16 h-1 w-16 border-4 border-emerald-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-serif text-emerald-900 tracking-widest uppercase text-xs">Smoky Peaks</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (page === 'contact') return <ContactForm />;
    if (page === 'blog') return <Blog posts={blogPosts} onUpdatePostImage={handleUpdateBlogPostImage} />;
    if (page === 'planner') return <TripPlanner />;
    
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
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <img 
              src={homeHeroImage} 
              alt="Smoky Mountains View" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="absolute top-28 right-6 z-30">
            <label className="cursor-pointer bg-black/40 hover:bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-widest px-4 py-2 rounded-full border border-white/20 uppercase transition-all flex items-center gap-2">
              {isProcessing ? 'Processing...' : 'Change Hero Photo'}
              <input type="file" accept="image/*" onChange={handleHeroUpload} className="hidden" disabled={isProcessing} />
            </label>
          </div>
          
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-6xl md:text-8xl font-serif mb-4 drop-shadow-2xl">Escape to the Peaks</h1>
            <p className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase mb-12 drop-shadow-lg">Luxury Cabin Retreats</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => handleNavigate('angelheights')} className="bg-emerald-900 hover:bg-emerald-800 text-white px-10 py-4 rounded-full font-bold shadow-2xl transition-all">Angel Heights</button>
              <button onClick={() => handleNavigate('angelrise')} className="bg-white text-emerald-900 hover:bg-stone-100 px-10 py-4 rounded-full font-bold shadow-2xl transition-all">Angel Rise</button>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-stone-100 border-b border-stone-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8">Mountains are Calling</h2>
            <p className="text-lg text-stone-600 leading-relaxed italic">"Smoky Peaks Cabins isn't just a place to stay. It's where the morning fog meets your coffee cup."</p>
          </div>
        </section>

        <section className="py-24 px-6 bg-stone-200/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="group cursor-pointer" onClick={() => handleNavigate('angelheights')}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl mb-8 border border-stone-300">
                <img src={cabinImages.angelheights[0]} alt="Angel Heights" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="text-3xl font-serif text-stone-800">Angel Heights Cabin</h3>
            </div>
            <div className="group cursor-pointer" onClick={() => handleNavigate('angelrise')}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl mb-8 border border-stone-300">
                <img src={cabinImages.angelrise[0]} alt="Angel Rise" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="text-3xl font-serif text-stone-800">Angel Rise Cabin</h3>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header onNavigate={handleNavigate} currentPage={page} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />

      {/* Dev Tools Gear Button */}
      <button 
        onClick={() => setShowExportModal(true)}
        className="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-white/90 backdrop-blur-md border border-stone-200 rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-all transform active:scale-90 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-90 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {/* Official Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-[200] bg-stone-900/90 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeIn">
          <div className="bg-white max-w-2xl w-full rounded-3xl p-8 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-serif text-emerald-950">Site Settings & Export 🚀</h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${dbStatus === 'Connected' ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`}></div>
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Storage Status: {dbStatus}</span>
                </div>
              </div>
              <button onClick={() => setShowExportModal(false)} className="text-stone-400 hover:text-stone-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="bg-emerald-50 p-4 rounded-xl mb-6 border border-emerald-100">
              <p className="text-emerald-900 text-xs leading-relaxed">
                <strong>How to save permanently:</strong> If you see your custom photos below, click the button to copy the code. Then paste it into your <code>constants.ts</code> file and upload to GitHub. This makes sure your photos stay there for everyone!
              </p>
            </div>

            <div className="flex-grow overflow-auto bg-stone-100 rounded-2xl p-4 border border-stone-200 font-mono text-[9px] whitespace-pre text-stone-800 leading-tight">
{`export const CABINS: Cabin[] = ${JSON.stringify(CABINS.map(c => ({
  ...c,
  defaultImages: cabinImages[c.id as keyof CabinImages] || c.defaultImages
})), null, 2)};`}
            </div>

            <button 
              onClick={() => {
                const code = `export const CABINS: Cabin[] = ${JSON.stringify(CABINS.map(c => ({
                  ...c,
                  defaultImages: cabinImages[c.id as keyof CabinImages] || c.defaultImages
                })), null, 2)};`;
                navigator.clipboard.writeText(code);
                alert("Code copied! Now open constants.ts, replace the CABINS list, and save.");
              }}
              className="mt-6 bg-emerald-900 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-all shadow-lg active:scale-95"
            >
              Copy Code for Permanent Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;