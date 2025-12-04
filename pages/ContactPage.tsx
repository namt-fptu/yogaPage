import React from 'react';
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';

const ContactPage: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="bg-stone-100 dark:bg-stone-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-2">Liên Hệ</h1>
          <p className="text-stone-600 dark:text-stone-400">Bắt đầu hành trình của bạn ngay hôm nay</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Info Side */}
          <div className="space-y-8">
             <h2 className="text-2xl font-serif font-bold text-stone-800 dark:text-stone-100">Thông Tin Kết Nối</h2>
             <p className="text-stone-600 dark:text-stone-300">
               Nếu bạn có bất kỳ câu hỏi nào về lớp học, lịch tập hay cần tư vấn về Yoga, đừng ngần ngại nhắn tin cho Sen Yoga nhé.
             </p>
             
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-stone-100">Địa chỉ Studio</h4>
                    <p className="text-stone-600 dark:text-stone-400">123 Đường Thảo Điền, Quận 2, TP. Hồ Chí Minh</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-stone-100">Hotline / Zalo</h4>
                    <p className="text-stone-600 dark:text-stone-400">0367 852 022</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-stone-100">Email</h4>
                    <p className="text-stone-600 dark:text-stone-400">contact@senyoga.vn</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-stone-100">Giờ Mở Cửa</h4>
                    <ul className="text-stone-600 dark:text-stone-400 text-sm mt-1 space-y-1">
                      <li className="flex justify-between w-48"><span>Thứ 2 - Thứ 6:</span> <span>05:00 - 18:30</span></li>
                      <li className="flex justify-between w-48"><span>Thứ 7:</span> <span>05:00 - 06:00</span></li>
                      <li className="flex justify-between w-48"><span>Chủ Nhật:</span> <span>Nghỉ</span></li>
                    </ul>
                  </div>
                </div>
             </div>

             {/* Map Placeholder */}
             <div className="w-full h-64 bg-stone-200 dark:bg-stone-800 rounded-2xl flex items-center justify-center text-stone-400">
                [Google Map Embed Here]
             </div>
          </div>

          {/* Form Side */}
          <div className="bg-white dark:bg-stone-900 p-8 rounded-3xl shadow-lg border border-stone-100 dark:border-stone-800 flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center text-center py-8 space-y-6">
              <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-full flex items-center justify-center mb-2">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" className="w-14 h-14" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-3">Chat qua Zalo</h3>
                <p className="text-stone-600 dark:text-stone-400 max-w-xs mx-auto leading-relaxed">
                  Nhắn tin trực tiếp qua Zalo để được tư vấn nhanh nhất về lịch tập và học phí.
                </p>
              </div>

              <a 
                href="https://zalo.me/0367852022" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full max-w-xs py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                <span>Chat Zalo Ngay</span>
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
