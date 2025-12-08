import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Moon, Sun, Sparkles, Heart, MapPin, Mail, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import MusicPlayer from './MusicPlayer';
import ScrollToTop from './ScrollToTop';
import LoadingScreen from './LoadingScreen';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-700 dark:text-stone-300 bg-surface-light dark:bg-candle transition-colors duration-500">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled
            ? 'glass py-3 shadow-glass'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110 inline-block">✾</span>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-2xl font-serif font-bold bg-gradient-to-r from-stone-800 via-primary to-stone-800 dark:from-stone-100 dark:via-primary-300 dark:to-stone-100 bg-clip-text text-transparent bg-size-200 hover:bg-right transition-all duration-500">
              Sen Yoga
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm uppercase tracking-wider font-medium transition-all duration-300 rounded-full hover:bg-primary/10 ${location.pathname === item.path
                    ? 'text-primary'
                    : 'text-stone-600 dark:text-stone-300 hover:text-primary'
                  }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 p-3 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-300 hover:scale-110 hover:rotate-12"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode
                ? <Sun size={20} className="text-amber-400" />
                : <Moon size={20} className="text-stone-500" />
              }
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              {isDarkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-stone-800 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 lg:hidden ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div className={`absolute right-0 top-0 h-full w-80 max-w-full glass-card transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-stone-800 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors"
            >
              <X size={28} />
            </button>

            <div className="mt-16 flex flex-col gap-2">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${location.pathname === item.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="absolute bottom-8 left-6 right-6">
              <div className="flex gap-3 justify-center">
                <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary/30 hover:scale-110 transition-transform">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/30 hover:scale-110 transition-transform">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-b from-stone-100 to-stone-200 dark:from-stone-900 dark:to-candle pt-20 pb-8">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">✾</span>
                <span className="text-3xl font-serif font-bold gradient-text">Sen Yoga</span>
              </div>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-8 max-w-md">
                Lan tỏa năng lượng tích cực và sự bình an qua từng hơi thở. Hãy cùng nhau xây dựng một cộng đồng khỏe mạnh cả về thể chất lẫn tinh thần.
              </p>
              <div className="flex gap-3">
                <a href="#" className="group w-12 h-12 rounded-2xl bg-white dark:bg-stone-800 shadow-md flex items-center justify-center text-stone-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                  <Facebook size={20} />
                </a>
                <a href="#" className new="group w-12 h-12 rounded-2xl bg-white dark:bg-stone-800 shadow-md flex items-center justify-center text-stone-400 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-2">
                <Sparkles size={18} className="text-primary" />
                Liên Kết
              </h4>
              <ul className="space-y-3">
                {NAV_ITEMS.map(item => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-stone-600 dark:text-stone-400 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-2">
                <Heart size={18} className="text-primary" />
                Liên Hệ
              </h4>
              <ul className="space-y-4 text-stone-600 dark:text-stone-400">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>contact@senyoga.vn</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>0367 852 022</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>123 Thảo Điền, Quận 2, TP.HCM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 dark:border-stone-800">
            <p className="text-sm text-stone-500 dark:text-stone-500">
              © {new Date().getFullYear()} Sen Yoga. All rights reserved.
            </p>
            <p className="text-sm text-stone-400 dark:text-stone-600 mt-2 md:mt-0 flex items-center gap-1">
              Designed with <Heart size={14} className="text-red-400 fill-red-400" /> for mindfulness
            </p>
          </div>
        </div>
      </footer>

      <MusicPlayer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;