import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Moon, Sun } from 'lucide-react';
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
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
    // Close mobile menu on route change
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
    <div className="min-h-screen flex flex-col font-sans text-stone-600 dark:text-stone-300 bg-stone-50 dark:bg-candle transition-colors duration-500">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-stone-900/80 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
            <span className="text-primary text-3xl">✾</span> Sen Yoga
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-sm uppercase tracking-wider font-medium hover:text-primary transition-colors ${
                  location.pathname === item.path ? 'text-primary' : 'text-stone-600 dark:text-stone-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
               {isDarkMode ? <Sun size={20} className="text-amber-400"/> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
               {isDarkMode ? <Sun size={20} className="text-amber-400"/> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-800 dark:text-stone-100">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-50 bg-white dark:bg-stone-900 transition-all duration-300 md:hidden flex flex-col justify-center items-center ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute top-6 right-6 p-2 text-stone-800 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-serif font-bold ${
                    location.pathname === item.path ? 'text-primary' : 'text-stone-800 dark:text-stone-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
        </div>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-stone-900 pt-16 pb-8 border-t border-stone-200 dark:border-stone-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
                <span className="text-primary">✾</span> Sen Yoga
              </h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                Lan tỏa năng lượng tích cực và sự bình an qua từng hơi thở. Hãy cùng nhau xây dựng một cộng đồng khỏe mạnh cả về thể chất lẫn tinh thần.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-6 uppercase tracking-wider">Liên Kết</h4>
              <ul className="space-y-3">
                {NAV_ITEMS.map(item => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-stone-600 dark:text-stone-400 hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-6 uppercase tracking-wider">Liên Hệ</h4>
              <ul className="space-y-3 text-stone-600 dark:text-stone-400">
                <li>Email: contact@senyoga.vn</li>
                <li>Hotline: 0367 852 022</li>
                <li>Địa chỉ: 123 Thảo Điền, Quận 2, TP.HCM</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-stone-200 dark:border-stone-800 text-sm text-stone-500">
            © {new Date().getFullYear()} Sen Yoga. All rights reserved. Design with Mindfulness.
          </div>
        </div>
      </footer>

      <MusicPlayer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;