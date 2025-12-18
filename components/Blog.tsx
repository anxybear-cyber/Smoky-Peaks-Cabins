
import React, { useState } from 'react';
import { BlogPost } from '../types';

interface BlogProps {
  posts: BlogPost[];
  onUpdatePostImage: (postId: string, base64: string) => void;
}

const Blog: React.FC<BlogProps> = ({ posts, onUpdatePostImage }) => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = posts.find(p => p.id === selectedPostId);

  const handleImageUpload = (postId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onUpdatePostImage(postId, reader.result);
        }
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    }
  };

  if (selectedPost) {
    return (
      <article className="animate-fadeIn max-w-4xl mx-auto px-6 py-16">
        <button 
          onClick={() => setSelectedPostId(null)}
          className="flex items-center gap-2 text-emerald-900 hover:text-emerald-700 font-bold mb-8 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Stories
        </button>

        <header>
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mb-12 border border-stone-200 group">
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 bg-emerald-950 text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              {selectedPost.category}
            </div>
            
            {/* Update Photo Overlay */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <label 
                className="cursor-pointer bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest px-4 py-2 rounded-full border border-white/20 uppercase transition-all flex items-center gap-2 shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Change Photo
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={(e) => handleImageUpload(selectedPost.id, e)} 
                  className="hidden" 
                />
              </label>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-xs text-stone-400 font-bold tracking-widest uppercase">
              <time dateTime={selectedPost.date}>{selectedPost.date}</time>
              <span className="w-1 h-1 bg-stone-300 rounded-full" />
              <span>By {selectedPost.author}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-emerald-950 leading-tight">{selectedPost.title}</h1>
            <div className="w-24 h-1 bg-emerald-800 rounded-full" />
          </div>
        </header>

        <section className="text-lg text-stone-700 leading-relaxed font-serif space-y-6 pt-12">
          {selectedPost.content.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>
      </article>
    );
  }

  return (
    <div className="animate-fadeIn bg-stone-100 min-h-screen pb-24">
      {/* Blog Hero */}
      <section className="bg-emerald-950 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Mountain Musings</h1>
          <p className="text-emerald-100/70 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            Insights on Gatlinburg cabin life, local secrets, and Smoky Mountain guides.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-200 group flex flex-col hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={`Blog post thumbnail: ${post.title}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-emerald-900 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase shadow-sm">
                  {post.category}
                </div>

                {/* Update Photo Button Overlay for Thumbnail */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <label 
                    className="cursor-pointer bg-white/90 hover:bg-white backdrop-blur-md text-emerald-900 text-[8px] font-bold tracking-[0.2em] px-3 py-1.5 rounded-full border border-stone-200 uppercase transition-all flex items-center gap-2 shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    </svg>
                    Update Photo
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => handleImageUpload(post.id, e)} 
                      className="hidden" 
                    />
                  </label>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-[10px] text-stone-400 font-bold tracking-widest uppercase mb-3">
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h3 className="text-2xl font-serif text-emerald-950 mb-4 group-hover:text-emerald-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <button 
                  onClick={() => setSelectedPostId(post.id)}
                  className="text-emerald-900 font-bold text-xs uppercase tracking-widest border-b-2 border-emerald-900/20 hover:border-emerald-900 pb-1 w-fit transition-all"
                >
                  Read Story
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
