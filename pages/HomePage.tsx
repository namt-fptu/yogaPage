import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, X, Check, Sparkles, ChevronDown } from 'lucide-react';
import { HERO_SLOGAN, HERO_SUBTEXT, YOGA_STYLES, TESTIMONIALS } from '../constants';
import Reveal from '../components/Reveal';
import BMICalculator from '../components/BMICalculator';
import QuoteCarousel from '../components/QuoteCarousel';

const HomePage: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<typeof YOGA_STYLES[0] | null>(null);

  const openModal = (style: typeof YOGA_STYLES[0]) => {
    setSelectedStyle(style);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedStyle(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Yoga background"
            className="w-full h-full object-cover scale-105 animate-breathe"
          />
          {/* Premium gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-primary-50/40 to-accent-gold/20 dark:from-candle/80 dark:via-primary-900/40 dark:to-accent-gold/10 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-light via-transparent to-transparent dark:from-candle"></div>

          {/* Floating decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl animate-float-delayed opacity-40"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-rose/10 rounded-full blur-3xl animate-float-slow opacity-30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 py-2 px-5 glass rounded-full text-sm tracking-wider uppercase mb-8 text-stone-700 dark:text-stone-200 shadow-glass animate-fade-in">
              <Sparkles size={16} className="text-primary" />
              <span>Mindfulness & Balance</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-8 leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-stone-900 via-primary-700 to-stone-900 dark:from-white dark:via-primary-300 dark:to-white bg-clip-text text-transparent">
                {HERO_SLOGAN}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl lg:text-2xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {HERO_SUBTEXT}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/schedule"
                className="group relative px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-medium shadow-lg shadow-primary/30 flex items-center gap-3 overflow-hidden btn-magnetic hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                <span className="relative z-10">Đặt Lịch Ngay</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/classes"
                className="group px-10 py-5 glass rounded-full text-stone-700 dark:text-stone-200 font-medium flex items-center gap-3 hover:bg-white/90 dark:hover:bg-stone-800/90 transition-all duration-300 shadow-glass hover:shadow-lg"
              >
                <span>Khám Phá Lớp Học</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-500 dark:text-stone-400 flex flex-col items-center gap-2 animate-bounce-soft">
          <span className="text-xs tracking-[0.2em] uppercase">Cuộn xuống</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Styles Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-light via-primary-50/30 to-surface-light dark:from-candle dark:via-primary-900/10 dark:to-candle"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Phong Cách
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">
              Khám Phá <span className="gradient-text">Hành Trình</span> Yoga
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-lg">
              Mỗi phong cách là một cánh cửa dẫn bạn đến với sự thanh thản và sức mạnh nội tại
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {YOGA_STYLES.map((style, index) => {
              const Icon = style.icon;
              return (
                <Reveal key={index} delay={index * 100}>
                  <div
                    onClick={() => openModal(style)}
                    className="group relative glass-card p-8 rounded-3xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-lg card-shine h-full"
                  >
                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/50 dark:to-primary-800/30 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/10">
                        <Icon size={36} className="text-primary" strokeWidth={1.5} />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <h3 className="text-xl font-serif font-bold mb-3 text-stone-800 dark:text-stone-100 text-center group-hover:text-primary transition-colors">
                      {style.name}
                    </h3>
                    <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed text-center">
                      {style.desc}
                    </p>

                    {/* Hover indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs text-primary font-medium">Xem chi tiết →</span>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Style Detail Modal */}
      {selectedStyle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-stone-900/70 backdrop-blur-md transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="glass-card rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 animate-scale-in border-2 border-white/20 dark:border-white/5">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-3 rounded-full glass hover:bg-stone-200/50 dark:hover:bg-stone-700/50 text-stone-600 dark:text-stone-300 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="flex flex-col items-center text-center mb-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800/50 dark:to-primary-700/30 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
                  {React.createElement(selectedStyle.icon, { size: 48, className: 'text-primary', strokeWidth: 1.5 })}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-2">{selectedStyle.name}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
              </div>

              <div className="space-y-8">
                {/* Description */}
                <div>
                  <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed text-center">
                    {selectedStyle.details}
                  </p>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-gold/10 dark:from-primary-900/20 dark:to-accent-gold/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-5 uppercase tracking-wide text-sm flex items-center gap-2">
                    <Sparkles size={16} className="text-primary" />
                    Lợi Ích
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {selectedStyle.benefits?.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-stone-600 dark:text-stone-300 text-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-primary" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suitable for */}
                <div>
                  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-3 uppercase tracking-wide text-sm">Phù hợp với:</h4>
                  <p className="text-stone-600 dark:text-stone-300 italic bg-stone-100 dark:bg-stone-800/50 px-4 py-3 rounded-xl">
                    {selectedStyle.suitableFor}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 pt-0 flex gap-4 justify-center">
              <button
                onClick={closeModal}
                className="px-8 py-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-xl font-medium transition-all duration-300"
              >
                Đóng
              </button>
              <Link
                to="/schedule"
                onClick={closeModal}
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-primary/30 flex items-center gap-2"
              >
                Xem Lịch Tập
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Quote Section */}
      <section className="py-24 bg-gradient-to-r from-stone-100 via-primary-50/50 to-stone-100 dark:from-stone-900 dark:via-primary-900/20 dark:to-stone-900">
        <div className="container mx-auto px-6">
          <QuoteCarousel />
        </div>
      </section>

      {/* BMI Calculator Section */}
      <BMICalculator />

      {/* Testimonials */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-light to-stone-100 dark:from-candle dark:to-stone-900"></div>
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent-gold/20 text-accent-gold text-sm font-medium rounded-full mb-4">
                Phản Hồi
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">
                Học Viên <span className="gradient-text-gold">Nói Gì?</span>
              </h2>
              <p className="text-stone-600 dark:text-stone-400 text-lg max-w-xl">
                Những câu chuyện thay đổi tích cực từ cộng đồng Sen Yoga yêu dấu của chúng tôi.
              </p>
            </div>
            <Link
              to="/about"
              className="group flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Xem thêm về Sen Yoga
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 6).map((t, index) => (
              <Reveal key={t.id} delay={index * 100} className="h-full">
                <div className="group glass-card p-8 rounded-3xl flex flex-col h-full hover:-translate-y-2 hover:shadow-glass-lg transition-all duration-500">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                    ))}
                    {[...Array(5 - t.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-stone-200 dark:text-stone-700" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-stone-600 dark:text-stone-300 mb-8 flex-grow leading-relaxed text-lg">
                    "{t.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-stone-100 dark:border-stone-800">
                    <div className="relative">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-14 h-14 rounded-2xl object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800 dark:text-stone-100 text-lg">{t.name}</h4>
                      <p className="text-sm text-stone-500 dark:text-stone-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
