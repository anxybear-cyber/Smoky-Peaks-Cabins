import React from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'angelheights' | 'angelrise' | 'planner' | 'blog' | 'contact') => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  return (
    <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <button 
          onClick={() => onNavigate('home')}
          className="flex flex-col items-center md:items-start group transition-all"
        >
          <span className="text-2xl font-serif tracking-tight text-emerald-900 group-hover:text-emerald-700 transition-colors">Smoky Peaks Cabins</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-medium">Gatlinburg Tennessee</span>
        </button>
        
        <div className="flex items-center gap-6 text-sm font-medium text-stone-600">
          <button 
            onClick={() => onNavigate('home')}
            className={`hover:text-emerald-800 transition-colors ${currentPage === 'home' ? 'text-emerald-900 font-semibold' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('angelheights')}
            className={`hover:text-emerald-800 transition-colors ${currentPage === 'angelheights' ? 'text-emerald-900 font-semibold' : ''}`}
          >
            Angel Heights
          </button>
          <button 
            onClick={() => onNavigate('angelrise')}
            className={`hover:text-emerald-800 transition-colors ${currentPage === 'angelrise' ? 'text-emerald-900 font-semibold' : ''}`}
          >
            Angel Rise
          </button>
          <button 
            onClick={() => onNavigate('blog')}
            className={`hover:text-emerald-800 transition-colors ${currentPage === 'blog' ? 'text-emerald-900 font-semibold' : ''}`}
          >
            Blog
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className={`hover:text-emerald-800 transition-colors ${currentPage === 'contact' ? 'text-emerald-900 font-semibold' : ''}`}
          >
            Contact
          </button>
          <button 
            onClick={() => onNavigate('planner')}
            className="bg-emerald-900 text-white px-5 py-2 rounded-full hover:bg-emerald-800 transition-all shadow-md"
          >
            AI Planner
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;