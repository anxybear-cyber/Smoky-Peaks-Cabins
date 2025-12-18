import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'angelheights' | 'angelrise' | 'planner' | 'blog' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="col-span-1">
          <h3 className="text-xl font-serif text-emerald-900 mb-6">Smoky Peaks Cabins</h3>
          <p className="text-stone-500 text-sm leading-relaxed mb-6">
            Luxury mountain cabin retreats in the heart of Gatlinburg, Tennessee. Managed with love and attention to every detail for your perfect Smoky Mountain vacation.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a 
              href="https://www.facebook.com/smokypeakscabins" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-emerald-100 transition-colors cursor-pointer" 
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/smokypeakscabins/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-emerald-100 transition-colors cursor-pointer" 
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412a3.481 3.481 0 0 1-1.38-.894 3.481 3.481 0 0 1-.894-1.38c-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.26-2.911.557a5.85 5.85 0 0 0-2.115 1.378A5.85 5.85 0 0 0 .653 5.405c-.297.763-.5 1.634-.557 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.148.557 2.911a5.85 5.85 0 0 0 1.378 2.115 5.85 5.85 0 0 0 2.115 1.378c.763.297 1.634.5 2.911.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.26 2.911-.557a5.85 5.85 0 0 0 2.115-1.378 5.85 5.85 0 0 0 1.378-2.115c.297-.763.5-1.634.557-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.148-.557-2.911a5.85 5.85 0 0 0-1.378-2.115A5.85 5.85 0 0 0 18.595.653c-.763-.297-1.634-.5-2.911-.557-1.28-.058-1.688-.072-4.947-.072z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4a4 0 1 1 0-8 4 a4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="col-span-1">
          <nav aria-label="Footer Navigation">
            <h4 className="font-bold text-xs uppercase tracking-widest text-stone-400 mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-stone-600">
              <li><button onClick={() => onNavigate('home')} className="hover:text-emerald-800 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('angelheights')} className="hover:text-emerald-800 transition-colors">Angel Heights Cabin</button></li>
              <li><button onClick={() => onNavigate('angelrise')} className="hover:text-emerald-800 transition-colors">Angel Rise Cabin</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-emerald-800 transition-colors">Mountain Musings Blog</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-emerald-800 transition-colors">Contact Us</button></li>
              <li><button onClick={() => onNavigate('planner')} className="hover:text-emerald-800 transition-colors">AI Trip Planner</button></li>
            </ul>
          </nav>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-xs uppercase tracking-widest text-stone-400 mb-6">Local Info</h4>
          <ul className="space-y-4 text-sm text-stone-600">
            <li>Gatlinburg Attractions</li>
            <li>Hiking in GSMNP</li>
            <li>Best Dining</li>
            <li>Weather Guide</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-stone-400 uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} Smoky Peaks Cabins | Gatlinburg, TN</p>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Rental Agreement</span>
          <span>Sitemap</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;