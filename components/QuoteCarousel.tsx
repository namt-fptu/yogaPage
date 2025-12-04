import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Quote } from 'lucide-react';

const QUOTES = [
  {
    content: "Yoga là cuộc hành trình của cái tôi, thông qua cái tôi, đến với cái tôi.",
    source: "The Bhagavad Gita"
  },
  {
    content: "Yoga không phải là chạm vào ngón chân, mà là những gì bạn học được trên đường đi xuống.",
    source: "Jigar Gor"
  },
  {
    content: "Hơi thở là vua của tâm trí.",
    source: "B.K.S. Iyengar"
  },
  {
    content: "Yoga là suối nguồn của tuổi trẻ. Bạn chỉ già đi khi cột sống của bạn ngừng linh hoạt.",
    source: "Indra Devi"
  },
  {
    content: "Cơ thể bạn là ngôi đền, hãy giữ cho nó trong sạch và tinh khiết để linh hồn trú ngụ.",
    source: "B.K.S. Iyengar"
  }
];

const QuoteCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setInterval(nextQuote, 5000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPaused, currentIndex]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) {
      nextQuote();
    } else if (info.offset.x > 50) {
      prevQuote();
    }
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto px-6 py-12 cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="flex justify-center mb-8">
        <Quote size={48} className="text-primary/20 dark:text-primary/40" />
      </div>

      <div className="relative h-64 md:h-48 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <blockquote className="font-serif text-2xl md:text-3xl italic text-stone-700 dark:text-stone-300 leading-relaxed select-none">
              "{QUOTES[currentIndex].content}"
            </blockquote>
            <p className="mt-6 text-stone-500 dark:text-stone-400 uppercase tracking-widest text-sm font-medium select-none">
              — {QUOTES[currentIndex].source}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {QUOTES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-primary w-8" 
                : "bg-stone-300 dark:bg-stone-600 hover:bg-primary/50"
            }`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteCarousel;
