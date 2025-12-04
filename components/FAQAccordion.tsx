import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Tôi chưa từng tập Yoga bao giờ, có tham gia được không?",
    answer: "Hoàn toàn được! Tại An Nhiên, chúng tôi có các lớp 'Yoga Cho Người Mới Bắt Đầu' được thiết kế riêng để giúp bạn làm quen với các tư thế cơ bản và kỹ thuật hít thở một cách an toàn và hiệu quả."
  },
  {
    question: "Tôi cần chuẩn bị gì khi đến lớp?",
    answer: "Bạn chỉ cần mang theo quần áo thoải mái, thấm hút mồ hôi và một bình nước cá nhân. Studio đã trang bị sẵn thảm tập và các dụng cụ hỗ trợ (gạch, dây) miễn phí cho học viên."
  },
  {
    question: "Lịch học có linh hoạt không?",
    answer: "Rất linh hoạt. Bạn có thể đăng ký gói tập theo buổi lẻ hoặc gói tháng và tự do chọn khung giờ phù hợp với lịch trình cá nhân thông qua hệ thống đặt lịch của chúng tôi."
  },
  {
    question: "Tôi bị đau lưng/cổ vai gáy, tập Yoga có đỡ không?",
    answer: "Yoga trị liệu là phương pháp tuyệt vời để cải thiện các vấn đề về xương khớp. Các bài tập kéo giãn và tăng cường cơ bắp sẽ giúp giảm áp lực lên cột sống và giảm đau hiệu quả. Tuy nhiên, hãy thông báo cho giáo viên về tình trạng của bạn trước buổi tập để được hướng dẫn điều chỉnh phù hợp."
  },
  {
    question: "Học phí các lớp như thế nào?",
    answer: "Chúng tôi có nhiều gói tập đa dạng: Buổi lẻ (150k), Gói tháng (1.200k/12 buổi) và các gói tập 1:1. Bạn có thể tham khảo chi tiết tại trang 'Lớp Học' hoặc liên hệ trực tiếp để được tư vấn gói ưu đãi nhất."
  }
];

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-8">
        <HelpCircle className="text-primary" size={32} />
        <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100">Câu Hỏi Thường Gặp</h2>
      </div>
      
      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div 
            key={index} 
            className="border border-stone-200 dark:border-stone-700 rounded-2xl overflow-hidden bg-white dark:bg-stone-900 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-medium text-lg text-stone-800 dark:text-stone-200 pr-8">
                {faq.question}
              </span>
              <span className="text-primary flex-shrink-0">
                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-stone-600 dark:text-stone-400 leading-relaxed border-t border-stone-100 dark:border-stone-800 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
