import React, { useState } from 'react';
import { Award, Heart, Leaf, ChevronLeft, ChevronRight, Users, Clock, Calendar } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Portrait
  "https://images.unsplash.com/photo-1544367563-12123d895951?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Yoga Pose
  "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Meditation/Nature
];

const AboutPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <div className="animate-fade-in pb-20">
      {/* Header */}
      <div className="bg-stone-100 dark:bg-stone-800 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">Về An Nhiên</h1>
          <p className="text-stone-600 dark:text-stone-400 max-w-xl mx-auto">Hành trình từ một nhân viên văn phòng bận rộn đến người hướng dẫn Yoga đầy đam mê.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Slideshow */}
          <div className="relative group">
             <div className="absolute inset-0 bg-primary/20 rounded-[2rem] transform rotate-3 translate-x-2 translate-y-2"></div>
             
             <div className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-[3/4]">
                {IMAGES.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`An Nhiên Yoga ${index + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                
                {/* Controls */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {IMAGES.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-white w-4' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
             </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100">Chào bạn, tôi là An Nhiên</h2>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              Cách đây 5 năm, tôi cũng giống như nhiều bạn, quay cuồng trong áp lực công việc và quên mất việc chăm sóc bản thân. Những cơn đau lưng triền miên và giấc ngủ chập chờn đã đưa tôi đến với tấm thảm tập lần đầu tiên.
            </p>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              Yoga đến với tôi như một "cứu cánh" chữa lành cả thể chất lẫn tinh thần. Sau chuyến đi tu nghiệp 200 giờ tại Rishikesh (Ấn Độ) và 300 giờ nâng cao tại Bali, tôi nhận ra sứ mệnh của mình không chỉ là tập luyện cho bản thân, mà là lan tỏa sự bình an này đến mọi người.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-4 border-t border-stone-200 dark:border-stone-700">
              <div className="flex items-center gap-4 py-2">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full text-orange-600 dark:text-orange-400">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-stone-100">Chứng Chỉ Quốc Tế</h4>
                  <p className="text-sm text-stone-500 dark:text-stone-400">E-RYT 500h Yoga Alliance & YACEP</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 py-2">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full text-red-600 dark:text-red-400">
                   <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-stone-100">Tâm Huyết</h4>
                  <p className="text-sm text-stone-500 dark:text-stone-400">Dạy từ trái tim, điều chỉnh từng tư thế</p>
                </div>
              </div>

               <div className="flex items-center gap-4 py-2">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full text-green-600 dark:text-green-400">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-stone-100">Lối Sống</h4>
                  <p className="text-sm text-stone-500 dark:text-stone-400">Thực hành ăn chay & sống tối giản</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 bg-primary/5 dark:bg-primary/10 rounded-3xl p-8">
            <div className="text-center">
              <div className="flex justify-center text-primary mb-2"><Clock size={32} /></div>
              <div className="text-3xl font-bold text-stone-800 dark:text-stone-100">5000+</div>
              <div className="text-sm text-stone-500 dark:text-stone-400">Giờ đứng lớp</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center text-primary mb-2"><Users size={32} /></div>
              <div className="text-3xl font-bold text-stone-800 dark:text-stone-100">1000+</div>
              <div className="text-sm text-stone-500 dark:text-stone-400">Học viên</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center text-primary mb-2"><Calendar size={32} /></div>
              <div className="text-3xl font-bold text-stone-800 dark:text-stone-100">7 Năm</div>
              <div className="text-sm text-stone-500 dark:text-stone-400">Kinh nghiệm</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center text-primary mb-2"><Award size={32} /></div>
              <div className="text-3xl font-bold text-stone-800 dark:text-stone-100">10+</div>
              <div className="text-sm text-stone-500 dark:text-stone-400">Workshop lớn</div>
            </div>
        </div>

        {/* Philosophy */}
        <div className="text-center max-w-3xl mx-auto">
           <h3 className="text-2xl font-serif font-bold mb-6 text-stone-800 dark:text-stone-100 relative inline-block">
             Triết Lý Giảng Dạy
             <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full opacity-50"></span>
           </h3>
           <p className="text-lg text-stone-600 dark:text-stone-300 italic mb-6">
             "Không ép buộc cơ thể vào tư thế, hãy dùng tư thế để khám phá cơ thể."
           </p>
           <div className="text-left space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800">
             <p>
               Lớp học của An Nhiên chú trọng vào <strong>sự an toàn (Safety)</strong>, <strong>định tuyến chuẩn (Alignment)</strong> và việc <strong>kết nối hơi thở (Breath Connection)</strong>.
             </p>
             <p>
               Tôi tin rằng mỗi cơ thể là một ngôi đền thiêng liêng và độc nhất. Trong lớp học của tôi, không có sự phán xét, không có sự cạnh tranh. Chỉ có bạn, hơi thở của bạn và khoảnh khắc hiện tại.
             </p>
             <p>
               Dù bạn là người mới bắt đầu với cơ thể cứng nhắc, hay người đã tập lâu năm muốn đi sâu vào thiền định, tôi luôn thiết kế các bài tập đa dạng (Modifications) để phù hợp với thể trạng của từng người.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;