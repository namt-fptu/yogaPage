import React, { useState } from 'react';
import { CLASSES, PRICING, POPULAR_POSES } from '../constants';
import { Check, Clock, Signal, X, Lightbulb, Sparkles, ArrowRight, Crown } from 'lucide-react';
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
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-primary-50/30 to-accent-gold/10 dark:from-stone-900 dark:via-primary-900/20 dark:to-accent-gold/5 py-24 text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} className="text-primary" />
            <span>Khám Phá</span>
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="gradient-text">Lớp Học</span> & Gói Tập
          </h1>
          <p className="text-stone-600 dark:text-stone-400 max-w-xl mx-auto text-lg">
            Chọn hành trình phù hợp nhất với bạn
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Classes List */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {CLASSES.map((cls, index) => (
            <Reveal key={cls.id} delay={index * 100}>
              <div className="group relative rounded-3xl overflow-hidden glass-card hover-lift h-full">
                {/* Image container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-primary to-primary-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-primary/30">
                      {cls.difficulty}
                    </span>
                  </div>

                  {/* Title on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{cls.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-stone-600 dark:text-stone-400 mb-6 line-clamp-2">{cls.description}</p>

                  <div className="flex items-center justify-between text-sm text-stone-500 dark:text-stone-400 pt-4 border-t border-stone-100 dark:border-stone-800">
                    <div className="flex items-center gap-2 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-full">
                      <Clock size={16} className="text-primary" />
                      <span>{cls.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-full">
                      <Signal size={16} className="text-primary" />
                      <span>Offline</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pricing */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-gold/20 text-accent-gold text-sm font-medium rounded-full mb-4">
            Bảng Giá
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="gradient-text-gold">Gói Tập</span> Phù Hợp
          </h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-xl mx-auto">
            Đầu tư cho sức khỏe là khoản đầu tư khôn ngoan nhất
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-32">
          {PRICING.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 100} className="h-full">
              <div
                className={`relative rounded-3xl p-8 h-full flex flex-col transition-all duration-500 ${plan.isPopular
                    ? 'bg-gradient-to-b from-primary-600 to-primary-700 text-white scale-105 shadow-2xl shadow-primary/30 z-10'
                    : 'glass-card hover-lift'
                  }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-gold to-yellow-500 text-stone-900 text-xs font-bold uppercase py-2 px-6 rounded-full flex items-center gap-2 shadow-lg">
                    <Crown size={14} />
                    Phổ Biến Nhất
                  </div>
                )}

                <h3 className={`text-xl font-bold text-center mb-2 ${plan.isPopular ? 'text-white' : 'text-stone-800 dark:text-stone-100'}`}>
                  {plan.name}
                </h3>

                <div className="text-center mb-8">
                  <span className={`text-5xl font-serif font-bold ${plan.isPopular ? 'text-white' : 'gradient-text'}`}>
                    {plan.price}
                  </span>
                  {plan.id !== 'drop-in' && (
                    <span className={`text-sm ${plan.isPopular ? 'text-white/70' : 'text-stone-500'}`}>/tháng</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start gap-3 ${plan.isPopular ? 'text-white/90' : 'text-stone-600 dark:text-stone-300'}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.isPopular ? 'bg-white/20' : 'bg-primary/20'}`}>
                        <Check size={12} className={plan.isPopular ? 'text-white' : 'text-primary'} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://zalo.me/0367852022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-2xl font-bold transition-all text-center flex items-center justify-center gap-2 ${plan.isPopular
                      ? 'bg-white text-primary-600 hover:bg-stone-100 shadow-lg'
                      : 'bg-gradient-to-r from-primary to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary/20'
                    }`}
                >
                  Đăng Ký Ngay
                  <ArrowRight size={18} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Popular Poses Section */}
        <div className="border-t border-stone-200 dark:border-stone-800 pt-28">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Tư Thế
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="gradient-text">Tư Thế Phổ Biến</span> & Lợi Ích
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Khám phá các động tác nền tảng giúp cải thiện sức khỏe toàn diện. Nhấn vào từng thẻ để xem chi tiết.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
            {POPULAR_POSES.map((pose) => {
              const Icon = pose.icon;
              return (
                <div
                  key={pose.id}
                  onClick={() => openModal(pose)}
                  className="group glass-card p-6 rounded-2xl cursor-pointer hover-lift flex items-start gap-5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/50 dark:to-primary-800/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/10">
                    <Icon size={28} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-bold text-lg text-stone-800 dark:text-stone-100 group-hover:text-primary transition-colors">
                        {pose.name}
                      </h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold ${pose.difficulty === 'Cơ bản' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                          pose.difficulty === 'Trung bình' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                            'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                        {pose.difficulty}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 font-serif italic mb-2">{pose.sanskrit}</p>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-2">
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
            className="absolute inset-0 bg-stone-900/70 backdrop-blur-md transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="glass-card rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 animate-scale-in border-2 border-white/20 dark:border-white/5">
            {/* Header with Image */}
            <div className="relative">
              <img
                src={selectedPose.image}
                alt={selectedPose.name}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-3 glass rounded-full text-white hover:bg-white/30 transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Title on image */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white shadow-lg">
                  {React.createElement(selectedPose.icon, { size: 32, strokeWidth: 1.5 })}
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-serif font-bold text-white">{selectedPose.name}</h2>
                  <p className="text-white/70 italic">{selectedPose.sanskrit}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full mb-6">
                Cấp độ: {selectedPose.difficulty}
              </div>

              <div className="space-y-6">
                {/* Benefit */}
                <div>
                  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-3 uppercase tracking-wide text-sm flex items-center gap-2">
                    <Sparkles size={16} className="text-primary" />
                    Lợi Ích
                  </h4>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{selectedPose.benefit}</p>
                </div>

                {/* Steps */}
                {selectedPose.steps && (
                  <div className="bg-gradient-to-br from-primary-50 to-accent-gold/10 dark:from-primary-900/20 dark:to-accent-gold/5 p-6 rounded-2xl">
                    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-4 uppercase tracking-wide text-sm">Cách Thực Hiện</h4>
                    <ul className="space-y-3">
                      {selectedPose.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-4 text-stone-600 dark:text-stone-300">
                          <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-primary/20">
                            {idx + 1}
                          </span>
                          <span className="pt-1">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tips */}
                {selectedPose.tips && (
                  <div className="flex gap-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-5 rounded-2xl border border-amber-200/50 dark:border-amber-800/30">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20">
                      <Lightbulb size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-amber-800 dark:text-amber-200 block mb-1">Mẹo nhỏ:</span>
                      <p className="text-amber-700 dark:text-amber-300 text-sm">{selectedPose.tips}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={closeModal}
                className="w-full py-4 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-2xl font-medium transition-all"
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