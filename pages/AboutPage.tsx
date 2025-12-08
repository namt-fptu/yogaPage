import React, { useState } from 'react';
import { Award, Heart, Leaf, ChevronLeft, ChevronRight, Users, Clock, Calendar, Sparkles, Quote } from 'lucide-react';
import Timeline from '../components/Timeline';

const IMAGES = [
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544367563-12123d895951?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-primary-50/30 to-accent-gold/10 dark:from-stone-900 dark:via-primary-900/20 dark:to-accent-gold/5 py-24 text-center">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} className="text-primary" />
            <span>Về Chúng Tôi</span>
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="gradient-text">Sen Yoga</span>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 max-w-xl mx-auto text-lg">
            Hành trình từ một nhân viên văn phòng bận rộn đến người hướng dẫn Yoga đầy đam mê.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Slideshow */}
          <div className="relative group">
            {/* Background decoration */}
            <div className="absolute inset-4 bg-gradient-to-br from-primary/30 to-accent-gold/30 rounded-[2.5rem] transform rotate-3 blur-sm"></div>

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-stone-900/10 dark:shadow-stone-900/50 aspect-[3/4]">
              {IMAGES.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Sen Yoga ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                />
              ))}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`transition-all duration-300 rounded-full ${idx === currentImage
                        ? 'w-8 h-2 bg-white'
                        : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Giới Thiệu
              </span>
              <h2 className="text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">
                Chào bạn, tôi là <span className="gradient-text">An Nhiên</span>
              </h2>
            </div>

            <div className="space-y-4 text-stone-600 dark:text-stone-300 text-lg leading-relaxed">
              <p>
                Cách đây 5 năm, tôi cũng giống như nhiều bạn, quay cuồng trong áp lực công việc và quên mất việc chăm sóc bản thân. Những cơn đau lưng triền miên và giấc ngủ chập chờn đã đưa tôi đến với tấm thảm tập lần đầu tiên.
              </p>
              <p>
                Yoga đến với tôi như một "cứu cánh" chữa lành cả thể chất lẫn tinh thần. Sau chuyến đi tu nghiệp 200 giờ tại Rishikesh (Ấn Độ) và 300 giờ nâng cao tại Bali, tôi nhận ra sứ mệnh của mình không chỉ là tập luyện cho bản thân, mà là lan tỏa sự bình an này đến mọi người.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-700">
              {[
                { icon: Award, color: 'orange', title: 'Chứng Chỉ Quốc Tế', desc: 'E-RYT 500h Yoga Alliance & YACEP' },
                { icon: Heart, color: 'red', title: 'Tâm Huyết', desc: 'Dạy từ trái tim, điều chỉnh từng tư thế' },
                { icon: Leaf, color: 'green', title: 'Lối Sống', desc: 'Thực hành ăn chay & sống tối giản' },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="flex items-center gap-4 p-4 glass-card rounded-2xl hover-lift">
                  <div className={`bg-${color}-100 dark:bg-${color}-900/30 p-3 rounded-xl text-${color}-600 dark:text-${color}-400`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 dark:text-stone-100">{title}</h4>
                    <p className="text-sm text-stone-500 dark:text-stone-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {[
            { icon: Clock, value: '5000+', label: 'Giờ đứng lớp', gradient: 'from-primary-400 to-primary-600' },
            { icon: Users, value: '1000+', label: 'Học viên', gradient: 'from-accent-teal to-primary-500' },
            { icon: Calendar, value: '7 Năm', label: 'Kinh nghiệm', gradient: 'from-accent-gold to-orange-500' },
            { icon: Award, value: '10+', label: 'Workshop lớn', gradient: 'from-accent-purple to-pink-500' },
          ].map(({ icon: Icon, value, label, gradient }) => (
            <div key={label} className="group glass-card p-8 rounded-3xl text-center hover-lift">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-1">{value}</div>
              <div className="text-sm text-stone-500 dark:text-stone-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="mb-28">
          <Timeline />
        </div>

        {/* Philosophy */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-gold/20 dark:from-primary-900/30 dark:to-accent-gold/10 rounded-[3rem] transform -rotate-1"></div>

          <div className="relative glass-card rounded-[2.5rem] p-10 md:p-16 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <Quote size={28} strokeWidth={1.5} />
            </div>

            <h3 className="text-3xl font-serif font-bold mb-6 gradient-text">
              Triết Lý Giảng Dạy
            </h3>

            <p className="text-2xl text-stone-700 dark:text-stone-200 italic mb-10 font-serif leading-relaxed">
              "Không ép buộc cơ thể vào tư thế, hãy dùng tư thế để khám phá cơ thể."
            </p>

            <div className="text-left space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed">
              <p>
                Lớp học của Sen Yoga chú trọng vào <strong className="text-primary">sự an toàn (Safety)</strong>, <strong className="text-primary">định tuyến chuẩn (Alignment)</strong> và việc <strong className="text-primary">kết nối hơi thở (Breath Connection)</strong>.
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
    </div>
  );
};

export default AboutPage;