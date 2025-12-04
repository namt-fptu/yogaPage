import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="animate-fade-in pb-20">
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
               Nếu bạn có bất kỳ câu hỏi nào về lớp học, lịch tập hay cần tư vấn về Yoga, đừng ngần ngại nhắn tin cho An Nhiên nhé.
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
                    <p className="text-stone-600 dark:text-stone-400">0909 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-stone-100">Email</h4>
                    <p className="text-stone-600 dark:text-stone-400">contact@yogaanhien.vn</p>
                  </div>
                </div>
             </div>

             {/* Map Placeholder */}
             <div className="w-full h-64 bg-stone-200 dark:bg-stone-800 rounded-2xl flex items-center justify-center text-stone-400">
                [Google Map Embed Here]
             </div>
          </div>

          {/* Form Side */}
          <div className="bg-white dark:bg-stone-900 p-8 rounded-3xl shadow-lg border border-stone-100 dark:border-stone-800">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-2">Đã gửi tin nhắn!</h3>
                <p className="text-stone-600 dark:text-stone-400">Cảm ơn bạn đã liên hệ. Mình sẽ phản hồi sớm nhất có thể.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-primary hover:underline"
                >
                  Gửi tin nhắn khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">Gửi Tin Nhắn</h3>
                
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Họ và Tên</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all dark:text-stone-200"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all dark:text-stone-200"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Nội dung</label>
                  <textarea 
                    rows={4}
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all dark:text-stone-200 resize-none"
                    placeholder="Tôi muốn đăng ký lớp học..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-primary hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-md disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {formStatus === 'submitting' ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
                  {!formStatus && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
