import React from 'react';
import { SCHEDULE_DATA } from '../constants';
import { Calendar } from 'lucide-react';

const SchedulePage: React.FC = () => {
  return (
    <div className="pb-20">
       <div className="bg-stone-100 dark:bg-stone-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-2">Lịch Tập Tuần Này</h1>
          <p className="text-stone-600 dark:text-stone-400">Hãy dành ít nhất 1 giờ mỗi ngày cho bản thân</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto bg-white dark:bg-stone-900 rounded-2xl shadow-lg border border-stone-200 dark:border-stone-800">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="bg-primary/10 dark:bg-stone-800">
                <th className="p-4 text-left font-serif font-bold text-stone-800 dark:text-stone-100 border-b border-r border-stone-200 dark:border-stone-700 w-32">
                   <div className="flex items-center gap-2"><Calendar size={18}/> Giờ</div>
                </th>
                <th className="p-4 font-bold text-stone-700 dark:text-stone-200 border-b border-stone-200 dark:border-stone-700">Thứ 2</th>
                <th className="p-4 font-bold text-stone-700 dark:text-stone-200 border-b border-stone-200 dark:border-stone-700">Thứ 3</th>
                <th className="p-4 font-bold text-stone-700 dark:text-stone-200 border-b border-stone-200 dark:border-stone-700">Thứ 4</th>
                <th className="p-4 font-bold text-stone-700 dark:text-stone-200 border-b border-stone-200 dark:border-stone-700">Thứ 5</th>
                <th className="p-4 font-bold text-stone-700 dark:text-stone-200 border-b border-stone-200 dark:border-stone-700">Thứ 6</th>
                <th className="p-4 font-bold text-stone-700 dark:text-stone-200 border-b border-stone-200 dark:border-stone-700">Thứ 7</th>
                <th className="p-4 font-bold text-stone-700 dark:text-stone-200 border-b border-stone-200 dark:border-stone-700">CN</th>
              </tr>
            </thead>
            <tbody>
              {SCHEDULE_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-800/50">
                  <td className="p-4 border-b border-r border-stone-100 dark:border-stone-800 font-medium text-primary text-sm">
                    {row.time}
                  </td>
                  {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => {
                    const classContent = row[day as keyof typeof row];
                    return (
                      <td key={day} className="p-4 border-b border-stone-100 dark:border-stone-800 text-center">
                        {classContent ? (
                          <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200 px-3 py-2 rounded-lg text-sm font-medium shadow-sm cursor-pointer">
                            {classContent}
                          </div>
                        ) : (
                          <span className="text-stone-300 dark:text-stone-700 text-xs">-</span>
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
        <div className="md:hidden space-y-6">
          {SCHEDULE_DATA.map((row, idx) => (
            <div key={idx} className="bg-white dark:bg-stone-900 rounded-xl shadow-md border border-stone-200 dark:border-stone-800 overflow-hidden">
              <div className="bg-primary/10 dark:bg-stone-800 p-4 border-b border-stone-100 dark:border-stone-700 flex items-center gap-2">
                <Calendar size={18} className="text-primary"/>
                <span className="font-bold text-stone-800 dark:text-stone-100">{row.time}</span>
              </div>
              <div className="p-4 space-y-3">
                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => {
                  const classContent = row[day as keyof typeof row];
                  if (!classContent) return null;
                  
                  const dayLabels: Record<string, string> = {
                    monday: 'Thứ 2', tuesday: 'Thứ 3', wednesday: 'Thứ 4', 
                    thursday: 'Thứ 5', friday: 'Thứ 6', saturday: 'Thứ 7', sunday: 'CN'
                  };

                  return (
                    <div key={day} className="flex items-center justify-between p-3 bg-stone-50 dark:bg-stone-800/50 rounded-lg">
                      <span className="text-sm font-medium text-stone-500 dark:text-stone-400">{dayLabels[day]}</span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-300">{classContent}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-stone-500 italic mb-4">* Vui lòng đến trước giờ tập 10 phút để chuẩn bị.</p>
          <a 
            href="https://zalo.me/0367852022" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg"
          >
            Đăng Ký Giữ Chỗ
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
