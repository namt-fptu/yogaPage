import React from 'react';
import { motion } from 'framer-motion';
import { Flag, MapPin, Star, Heart } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const MILESTONES: Milestone[] = [
  {
    year: '2017',
    title: 'Khởi Đầu Hành Trình',
    description: 'Bắt đầu tập luyện Yoga để cải thiện sức khỏe và tìm lại sự cân bằng sau những áp lực công việc văn phòng.',
    icon: Heart
  },
  {
    year: '2019',
    title: 'Chứng Chỉ RYT 200h',
    description: 'Hoàn thành khóa đào tạo giáo viên Yoga quốc tế 200 giờ tại Rishikesh, cái nôi của Yoga tại Ấn Độ.',
    icon: MapPin
  },
  {
    year: '2021',
    title: 'Nâng Cao Chuyên Môn',
    description: 'Tiếp tục tu nghiệp khóa RYT 300h nâng cao tại Bali, chuyên sâu về Yoga Trị Liệu và Thiền Định.',
    icon: Star
  },
  {
    year: '2023',
    title: 'Thành Lập An Nhiên Yoga',
    description: 'Mở studio riêng với mong muốn tạo ra một không gian xanh, yên bình để cộng đồng cùng nhau tập luyện.',
    icon: Flag
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h3 className="text-3xl font-serif font-bold text-center text-stone-800 dark:text-stone-100 mb-16">
        Hành Trình Phát Triển
      </h3>
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 dark:bg-stone-700 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {MILESTONES.map((milestone, index) => {
            const isEven = index % 2 === 0;
            const Icon = milestone.icon;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 md:text-right">
                  <div className={`bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800 relative ${
                    isEven ? 'md:text-left' : 'md:text-right'
                  }`}>
                    {/* Arrow for desktop */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white dark:bg-stone-900 border-t border-r border-stone-100 dark:border-stone-800 transform rotate-45 ${
                      isEven ? '-left-2 border-t-0 border-r-0 border-b border-l' : '-right-2'
                    }`}></div>

                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-2">
                      {milestone.year}
                    </span>
                    <h4 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white border-4 border-stone-50 dark:border-stone-900 z-10">
                  <Icon size={14} />
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden md:block"></div>
                
                {/* Mobile Spacer to push content right of the line */}
                <div className="md:hidden w-8 flex-shrink-0"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
