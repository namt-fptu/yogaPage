import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const CATEGORIES = ['Tất cả', 'Kỹ Thuật', 'Dinh Dưỡng', 'Lối Sống', 'Trị Liệu', 'Tâm Linh', 'Thiền', 'Mẹo Tập'];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const filteredPosts = activeCategory === 'Tất cả' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="pb-20">
      <div className="bg-stone-100 dark:bg-stone-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-2">Góc Chia Sẻ</h1>
          <p className="text-stone-600 dark:text-stone-400">Kiến thức và cảm hứng sống xanh</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 100} className="h-full">
              <article className="group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-stone-100 dark:border-stone-800 flex flex-col h-full">
                <div className="overflow-hidden h-56">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-stone-500 dark:text-stone-400 mb-3">
                    <span className="bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded text-primary font-bold uppercase tracking-wide">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-3 group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-sm line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-primary font-medium hover:underline mt-auto">
                    Đọc tiếp <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
