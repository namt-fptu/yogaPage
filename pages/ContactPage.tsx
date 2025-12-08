import React from 'react';
import { Mail, MapPin, Phone, Send, Clock, Sparkles, MessageCircle } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';

const ContactPage: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-primary-50/30 to-accent-gold/10 dark:from-stone-900 dark:via-primary-900/20 dark:to-accent-gold/5 py-24 text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-6">
            <MessageCircle size={16} className="text-primary" />
            <span>Kết Nối</span>
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="gradient-text">Liên Hệ</span>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 max-w-xl mx-auto text-lg">
            Bắt đầu hành trình của bạn ngay hôm nay
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info Side */}
          <div className="space-y-10">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Thông Tin
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">
                Thông Tin <span className="gradient-text">Kết Nối</span>
              </h2>
              <p className="text-stone-600 dark:text-stone-300 text-lg">
                Nếu bạn có bất kỳ câu hỏi nào về lớp học, lịch tập hay cần tư vấn về Yoga, đừng ngần ngại nhắn tin cho Sen Yoga nhé.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, title: 'Địa chỉ Studio', content: '123 Đường Thảo Điền, Quận 2, TP. Hồ Chí Minh', gradient: 'from-primary to-primary-600' },
                { icon: Phone, title: 'Hotline / Zalo', content: '0367 852 022', gradient: 'from-accent-teal to-primary-500' },
                { icon: Mail, title: 'Email', content: 'contact@senyoga.vn', gradient: 'from-accent-gold to-orange-500' },
              ].map(({ icon: Icon, title, content, gradient }) => (
                <div key={title} className="flex items-center gap-5 p-5 glass-card rounded-2xl hover-lift">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 dark:text-stone-100 mb-1">{title}</h4>
                    <p className="text-stone-600 dark:text-stone-400">{content}</p>
                  </div>
                </div>
              ))}

              {/* Opening hours */}
              <div className="p-5 glass-card rounded-2xl">
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-purple to-pink-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-stone-800 dark:text-stone-100">Giờ Mở Cửa</h4>
                </div>
                <div className="ml-[4.75rem] space-y-2">
                  {[
                    { day: 'Thứ 2 - Thứ 6', time: '05:00 - 18:30' },
                    { day: 'Thứ 7', time: '05:00 - 06:00' },
                    { day: 'Chủ Nhật', time: 'Nghỉ' },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-stone-500 dark:text-stone-400">{day}</span>
                      <span className={`font-medium ${time === 'Nghỉ' ? 'text-red-500' : 'text-stone-700 dark:text-stone-300'}`}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                alt="Map location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/40 flex items-center justify-center">
                <div className="glass px-8 py-4 rounded-2xl text-white font-medium flex items-center gap-3">
                  <MapPin size={20} />
                  <span>123 Thảo Điền, Quận 2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Zalo CTA Side */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="relative overflow-hidden glass-card rounded-3xl p-10">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex flex-col items-center justify-center text-center py-8 space-y-8">
                {/* Zalo Icon */}
                <div className="relative">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-float">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" className="w-16 h-16" />
                  </div>
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-3xl animate-ping opacity-20 bg-blue-500"></div>
                </div>

                <div>
                  <h3 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">Chat qua Zalo</h3>
                  <p className="text-stone-600 dark:text-stone-400 max-w-sm mx-auto leading-relaxed text-lg">
                    Nhắn tin trực tiếp qua Zalo để được tư vấn nhanh nhất về lịch tập và học phí.
                  </p>
                </div>

                <a
                  href="https://zalo.me/0367852022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full max-w-sm py-5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] btn-magnetic"
                >
                  <span className="text-lg">Chat Zalo Ngay</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-sm text-stone-400 dark:text-stone-500">
                  Thường phản hồi trong vòng 5 phút
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-28">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent-gold/20 text-accent-gold text-sm font-medium rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-4xl font-serif font-bold mb-4">
              Câu Hỏi <span className="gradient-text-gold">Thường Gặp</span>
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
