import React from 'react';
import { SCHEDULE_DATA } from '../constants';
import { Calendar, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const SchedulePage: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-primary-50/30 to-accent-gold/10 dark:from-stone-900 dark:via-primary-900/20 dark:to-accent-gold/5 py-24 text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-6">
            <Calendar size={16} className="text-primary" />
            <span>Lịch Tập</span>
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="gradient-text">Lịch Tập</span> Tuần Này
          </h1>
          <p className="text-stone-600 dark:text-stone-400 max-w-xl mx-auto text-lg">
            Hãy dành ít nhất 1 giờ mỗi ngày cho bản thân
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16">
        {/* Desktop Table View */}
        <div className="hidden lg:block glass-card rounded-3xl overflow-hidden shadow-glass-lg mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-primary-50 via-primary-100/50 to-primary-50 dark:from-primary-900/30 dark:via-primary-800/20 dark:to-primary-900/30">
                <th className="p-6 text-left font-serif font-bold text-stone-800 dark:text-stone-100 border-b border-r border-stone-200/50 dark:border-stone-700/50 w-36">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white">
                      <Clock size={18} />
                    </div>
                    <span>Giờ</span>
                  </div>
                </th>
                {['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'].map((day) => (
                  <th key={day} className="p-6 font-bold text-stone-700 dark:text-stone-200 border-b border-stone-200/50 dark:border-stone-700/50 text-center">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SCHEDULE_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-primary-50/30 dark:hover:bg-primary-900/10 transition-colors">
                  <td className="p-6 border-b border-r border-stone-100 dark:border-stone-800 font-bold text-primary">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-accent-gold" />
                      {row.time}
                    </div>
                  </td>
                  {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => {
                    const classContent = row[day as keyof typeof row];
                    return (
                      <td key={day} className="p-4 border-b border-stone-100 dark:border-stone-800 text-center">
                        {classContent ? (
                          <div className="inline-block bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 px-4 py-3 rounded-xl text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer border border-primary-200/50 dark:border-primary-700/30">
                            {classContent}
                          </div>
                        ) : (
                          <span className="text-stone-300 dark:text-stone-700">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile List View */}
        <div className="lg:hidden space-y-6">
          {SCHEDULE_DATA.map((row, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/40 dark:to-primary-800/20 p-4 border-b border-stone-100 dark:border-stone-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white shadow-lg">
                  <Clock size={18} />
                </div>
                <span className="font-bold text-stone-800 dark:text-stone-100">{row.time}</span>
              </div>
              <div className="p-4 space-y-2">
                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => {
                  const classContent = row[day as keyof typeof row];
                  if (!classContent) return null;

                  const dayLabels: Record<string, string> = {
                    monday: 'Thứ 2', tuesday: 'Thứ 3', wednesday: 'Thứ 4',
                    thursday: 'Thứ 5', friday: 'Thứ 6', saturday: 'Thứ 7', sunday: 'CN'
                  };

                  return (
                    <div key={day} className="flex items-center justify-between p-3 bg-stone-50 dark:bg-stone-800/50 rounded-xl">
                      <span className="text-sm font-medium text-stone-500 dark:text-stone-400">{dayLabels[day]}</span>
                      <span className="font-bold text-primary">{classContent}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block rounded-3xl p-10 max-w-lg mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <Calendar size={28} strokeWidth={1.5} />
            </div>
            <p className="text-stone-500 dark:text-stone-400 mb-6 italic">
              * Vui lòng đến trước giờ tập 10 phút để chuẩn bị.
            </p>
            <a
              href="https://zalo.me/0367852022"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              Đăng Ký Giữ Chỗ
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
