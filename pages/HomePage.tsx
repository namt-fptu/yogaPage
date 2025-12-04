import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { HERO_SLOGAN, HERO_SUBTEXT, YOGA_STYLES, TESTIMONIALS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Yoga background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-stone-50 dark:to-candle"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block py-1 px-3 border border-stone-600 dark:border-stone-300 rounded-full text-xs tracking-[0.2em] uppercase mb-6 text-stone-800 dark:text-stone-200">
              Mindfulness & Balance
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 dark:text-white mb-6 leading-tight animate-breathe">
              {HERO_SLOGAN}
            </h1>
            <p className="text-lg md:text-xl text-stone-700 dark:text-stone-200 max-w-2xl mx-auto mb-10 font-light">
              {HERO_SUBTEXT}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule" className="px-8 py-4 bg-primary text-white rounded-full hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Đặt Lịch Ngay <ArrowRight size={18} />
              </Link>
              <Link to="/classes" className="px-8 py-4 bg-white/80 dark:bg-stone-800/80 backdrop-blur text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-600 rounded-full hover:bg-white dark:hover:bg-stone-700 transition-colors">
                Xem Các Lớp
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-500 dark:text-stone-300">
           <span className="text-sm tracking-widest uppercase text-[10px]">Cuộn xuống</span>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-24 bg-stone-50 dark:bg-candle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">Phong Cách Luyện Tập</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {YOGA_STYLES.map((style, index) => {
              const Icon = style.icon;
              return (
                <div key={index} className="bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group border border-stone-100 dark:border-stone-800">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={32} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 text-stone-800 dark:text-stone-100">{style.name}</h3>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{style.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-secondary dark:bg-stone-800">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="font-serif text-2xl md:text-4xl italic text-stone-700 dark:text-stone-300 max-w-4xl mx-auto leading-normal">
            "Yoga là cuộc hành trình của cái tôi, thông qua cái tôi, đến với cái tôi."
          </blockquote>
          <p className="mt-6 text-stone-500 dark:text-stone-400 uppercase tracking-widest text-sm">— The Bhagavad Gita</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-50 dark:bg-candle">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-2">Học Viên Nói Gì?</h2>
                <p className="text-stone-600 dark:text-stone-400">Những câu chuyện thay đổi tích cực từ cộng đồng.</p>
             </div>
             <Link to="/about" className="hidden md:block text-primary font-medium hover:underline">Xem thêm về An Nhiên</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800 flex flex-col h-full">
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 dark:text-stone-300 mb-6 italic flex-grow">"{t.content}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-stone-100">{t.name}</h4>
                    <p className="text-xs text-stone-500 dark:text-stone-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
