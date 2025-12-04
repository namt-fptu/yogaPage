import React from 'react';
import { SCHEDULE_DATA } from '../constants';
import { Calendar } from 'lucide-react';

const SchedulePage: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20">
       <div className="bg-stone-100 dark:bg-stone-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-2">Lịch Tập Tuần Này</h1>
          <p className="text-stone-600 dark:text-stone-400">Hãy dành ít nhất 1 giờ mỗi ngày cho bản thân</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="overflow-x-auto bg-white dark:bg-stone-900 rounded-2xl shadow-lg border border-stone-200 dark:border-stone-800">
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
                <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="p-4 border-b border-r border-stone-100 dark:border-stone-800 font-medium text-primary text-sm">
                    {row.time}
                  </td>
                  {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => {
                    const classContent = row[day as keyof typeof row];
                    return (
                      <td key={day} className="p-4 border-b border-stone-100 dark:border-stone-800 text-center">
                        {classContent ? (
                          <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200 px-3 py-2 rounded-lg text-sm font-medium shadow-sm hover:scale-105 transition-transform cursor-pointer">
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

        <div className="mt-8 text-center">
          <p className="text-stone-500 italic mb-4">* Vui lòng đến trước giờ tập 10 phút để chuẩn bị.</p>
          <button className="bg-primary hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all">
            Đăng Ký Giữ Chỗ
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
