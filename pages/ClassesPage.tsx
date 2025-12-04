import React, { useState } from 'react';
import { CLASSES, PRICING, POPULAR_POSES } from '../constants';
import { Check, Clock, Signal, X, Lightbulb } from 'lucide-react';
import { YogaPose } from '../types';
import BreathingExercise from '../components/BreathingExercise';
import Reveal from '../components/Reveal';

const ClassesPage: React.FC = () => {
  const [selectedPose, setSelectedPose] = useState<YogaPose | null>(null);

  const openModal = (pose: YogaPose) => {
    setSelectedPose(pose);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPose(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="animate-fade-in pb-20 relative">
      {/* Header */}
      <div className="bg-secondary dark:bg-stone-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-2">Lớp Học & Gói Tập</h1>
          <p className="text-stone-600 dark:text-stone-400">Chọn hành trình phù hợp nhất với bạn</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Classes List */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {CLASSES.map((cls, index) => (
            <Reveal key={cls.id} delay={index * 100}>
              <div className="group rounded-2xl overflow-hidden bg-white dark:bg-stone-900 shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100 dark:border-stone-800 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={cls.image} 
                    alt={cls.title} 
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                  />
                  {/* Overlay with subtle fade out on hover to reveal image more */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                  {/* Gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-primary px-2 py-1 rounded text-xs font-bold uppercase tracking-wide mb-2 inline-block">
                      {cls.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">{cls.title}</h3>
                  <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 line-clamp-3">{cls.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-stone-500 dark:text-stone-400 border-t border-stone-100 dark:border-stone-800 pt-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} /> {cls.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Signal size={16} /> Offline
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pricing */}
        <div className="text-center mb-12">
           <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">Bảng Giá</h2>
           <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-32">
          {PRICING.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 100} className="h-full">
              <div 
                className={`relative rounded-2xl p-8 border h-full flex flex-col ${
                  plan.isPopular 
                    ? 'border-primary bg-stone-50 dark:bg-stone-800 shadow-xl scale-105 z-10' 
                    : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-sm'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase py-1 px-4 rounded-full">
                    Phổ Biến Nhất
                  </div>
                )}
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 text-center mb-2">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-serif font-bold text-primary">{plan.price}</span>
                  {plan.id !== 'drop-in' && <span className="text-stone-500 text-sm">/tháng</span>}
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-300">
                      <Check size={18} className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-bold transition-colors ${
                  plan.isPopular 
                    ? 'bg-primary text-white hover:bg-emerald-700' 
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}>
                  Đăng Ký Ngay
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Popular Poses Section */}
        <div className="border-t border-stone-200 dark:border-stone-800 pt-24">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">Tư Thế Phổ Biến & Lợi Ích</h2>
             <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
               Khám phá các động tác nền tảng giúp cải thiện sức khỏe toàn diện và cân bằng năng lượng. Nhấn vào từng thẻ để xem chi tiết.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {POPULAR_POSES.map((pose) => {
              const Icon = pose.icon;
              return (
                <div 
                  key={pose.id} 
                  onClick={() => openModal(pose)}
                  className="bg-stone-50 dark:bg-stone-800/50 p-6 rounded-2xl hover:bg-white dark:hover:bg-stone-800 border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex items-start gap-4 group cursor-pointer"
                >
                  <div className="bg-white dark:bg-stone-900 p-3 rounded-full shadow-sm text-stone-400 group-hover:text-primary transition-colors flex-shrink-0">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-bold text-lg text-stone-800 dark:text-stone-100">{pose.name}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold border ${
                        pose.difficulty === 'Cơ bản' ? 'border-green-200 text-green-700 dark:border-green-800 dark:text-green-400 bg-green-50 dark:bg-green-900/20' :
                        pose.difficulty === 'Trung bình' ? 'border-amber-200 text-amber-700 dark:border-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20' :
                        'border-red-200 text-red-700 dark:border-red-800 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
                      }`}>
                        {pose.difficulty}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 font-serif italic mb-2">{pose.sanskrit}</p>
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      {pose.benefit}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Breathing Exercise Section */}
          <BreathingExercise />
        </div>
      </div>

      {/* Pose Detail Modal */}
      {selectedPose && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" 
            onClick={closeModal}
          ></div>
          <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in-up border border-stone-200 dark:border-stone-700">
            {/* Header with Icon */}
            <div className="p-8 pb-4 relative">
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-sm transition-colors z-10"
              >
                <X size={24} />
              </button>

              <img 
                src={selectedPose.image} 
                alt={selectedPose.name} 
                className="w-full h-64 sm:h-72 object-cover rounded-2xl mb-6 shadow-md"
              />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  {React.createElement(selectedPose.icon, { size: 32 })}
                </div>
                <div>
                   <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">{selectedPose.name}</h2>
                   <p className="text-stone-500 dark:text-stone-400 italic text-lg">{selectedPose.sanskrit}</p>
                </div>
              </div>
              
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-6">
                Cấp độ: {selectedPose.difficulty}
              </div>

              <div className="space-y-6">
                 {/* Benefit */}
                 <div>
                    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2 uppercase tracking-wide text-sm">Lợi Ích</h4>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{selectedPose.benefit}</p>
                 </div>

                 {/* Steps */}
                 {selectedPose.steps && (
                   <div className="bg-stone-50 dark:bg-stone-800/50 p-6 rounded-2xl">
                      <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-4 uppercase tracking-wide text-sm">Cách Thực Hiện</h4>
                      <ul className="space-y-3">
                        {selectedPose.steps.map((step, idx) => (
                          <li key={idx} className="flex gap-3 text-stone-600 dark:text-stone-300">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-300">{idx + 1}</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                 )}

                 {/* Tips */}
                 {selectedPose.tips && (
                   <div className="flex gap-4 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl text-amber-800 dark:text-amber-200 border border-amber-100 dark:border-amber-800/20">
                      <Lightbulb size={24} className="flex-shrink-0" />
                      <div>
                        <span className="font-bold block mb-1">Mẹo nhỏ:</span>
                        <p className="text-sm opacity-90">{selectedPose.tips}</p>
                      </div>
                   </div>
                 )}
              </div>
            </div>
            
            <div className="p-6 pt-0 text-center">
              <button 
                onClick={closeModal}
                className="w-full py-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-xl font-medium transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassesPage;