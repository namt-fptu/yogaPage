import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20">
      <div className="bg-stone-100 dark:bg-stone-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-2">Góc Chia Sẻ</h1>
          <p className="text-stone-600 dark:text-stone-400">Kiến thức và cảm hứng sống xanh</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 dark:border-stone-800 flex flex-col h-full">
              <div className="overflow-hidden h-56">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-stone-500 dark:text-stone-400 mb-3">
                  <span className="bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded text-primary font-bold uppercase tracking-wide">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-primary font-medium hover:underline mt-auto">
                  Đọc tiếp <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
