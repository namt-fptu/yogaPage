import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Square, Wind } from 'lucide-react';

type BreathingState = 'idle' | 'inhale' | 'hold' | 'exhale';

const BreathingExercise: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [breathingState, setBreathingState] = useState<BreathingState>('idle');
  const [text, setText] = useState('Sẵn sàng?');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isActive) {
      if (breathingState === 'idle') {
        setBreathingState('inhale');
      } else if (breathingState === 'inhale') {
        setText('Hít vào...');
        timer = setTimeout(() => setBreathingState('hold'), 4000);
      } else if (breathingState === 'hold') {
        setText('Giữ...');
        timer = setTimeout(() => setBreathingState('exhale'), 7000);
      } else if (breathingState === 'exhale') {
        setText('Thở ra...');
        timer = setTimeout(() => setBreathingState('inhale'), 8000);
      }
    } else {
      setBreathingState('idle');
      setText('Sẵn sàng?');
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [isActive, breathingState]);

  const variants = {
    idle: { scale: 1, opacity: 0.8, transition: { duration: 0.5 } },
    inhale: { scale: 1.5, opacity: 1, transition: { duration: 4, ease: "easeInOut" } },
    hold: { scale: 1.5, opacity: 1, transition: { duration: 0 } },
    exhale: { scale: 1, opacity: 0.8, transition: { duration: 8, ease: "easeInOut" } },
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-stone-50 dark:bg-stone-900 rounded-3xl my-8 border border-stone-100 dark:border-stone-800">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif font-bold text-stone-800 dark:text-stone-100 flex items-center justify-center gap-2">
          <Wind className="text-primary" /> Bài Tập Thở 4-7-8
        </h3>
        <p className="text-stone-600 dark:text-stone-400 mt-2">Giúp giảm căng thẳng và đưa cơ thể vào trạng thái thư giãn sâu.</p>
      </div>

      <div className="relative flex items-center justify-center w-64 h-64 mb-8">
        <motion.div
          className="absolute w-40 h-40 bg-primary/20 rounded-full blur-xl"
          animate={breathingState}
          variants={{
            idle: { scale: 1 },
            inhale: { scale: 1.8 },
            hold: { scale: 1.8 },
            exhale: { scale: 1 },
          }}
        />
        
        <motion.div
          className="w-40 h-40 bg-primary rounded-full flex items-center justify-center shadow-lg z-10 relative"
          animate={breathingState}
          variants={variants}
        >
          <span className="text-white font-bold text-lg">{text}</span>
        </motion.div>
      </div>

      <button
        onClick={() => setIsActive(!isActive)}
        className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${
          isActive 
            ? 'bg-stone-200 text-stone-800 hover:bg-stone-300 dark:bg-stone-700 dark:text-stone-200' 
            : 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl'
        }`}
      >
        {isActive ? (
          <>
            <Square size={18} fill="currentColor" /> Dừng lại
          </>
        ) : (
          <>
            <Play size={18} fill="currentColor" /> Bắt đầu
          </>
        )}
      </button>
    </div>
  );
};

export default BreathingExercise;
