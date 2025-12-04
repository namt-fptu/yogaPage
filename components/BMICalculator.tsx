import React, { useState } from 'react';
import { Calculator, ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!height || !weight) return;

    const h = parseFloat(height) / 100; // convert to meters
    const w = parseFloat(weight);
    
    if (h <= 0 || w <= 0) return;

    const bmiValue = w / (h * h);
    const roundedBmi = parseFloat(bmiValue.toFixed(1));
    setBmi(roundedBmi);

    if (roundedBmi < 18.5) {
      setStatus('Thiếu cân');
      setSuggestion('Bạn nên tập trung vào các lớp Power Yoga hoặc Hatha Yoga để xây dựng cơ bắp và tăng cường sức mạnh.');
    } else if (roundedBmi >= 18.5 && roundedBmi < 25) {
      setStatus('Cân đối');
      setSuggestion('Tuyệt vời! Hãy duy trì với Vinyasa Flow hoặc Hatha Yoga để giữ gìn vóc dáng và sự dẻo dai.');
    } else {
      setStatus('Thừa cân');
      setSuggestion('Các lớp Vinyasa Flow cường độ cao hoặc Power Yoga sẽ giúp bạn đốt cháy calo và săn chắc cơ thể hiệu quả.');
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image/Visual Side */}
            <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[500px]">
                    <img 
                        src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" 
                        alt="Yoga BMI" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                        <div className="bg-primary/90 p-3 rounded-xl inline-block mb-4">
                            <Activity size={32} className="text-white" />
                        </div>
                        <h3 className="text-3xl font-serif font-bold mb-2">Hiểu Về Cơ Thể Bạn</h3>
                        <p className="opacity-90 text-lg">Chỉ số BMI là bước khởi đầu để lựa chọn lộ trình tập luyện phù hợp nhất với thể trạng của bạn.</p>
                    </div>
                </div>
            </div>

            {/* Calculator Side */}
            <div className="w-full lg:w-1/2">
                <div className="max-w-md mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-3">
                        <Calculator className="text-primary" size={32} />
                        Tính BMI & Gợi Ý Lớp Học
                    </h2>
                    <p className="text-stone-600 dark:text-stone-400 mb-8">
                        Nhập chiều cao và cân nặng của bạn để nhận được gợi ý lớp học Yoga phù hợp nhất từ An Nhiên.
                    </p>
                    
                    <form onSubmit={calculateBMI} className="space-y-6 bg-stone-50 dark:bg-stone-800 p-8 rounded-2xl border border-stone-100 dark:border-stone-700 shadow-sm">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Chiều cao (cm)</label>
                                <input 
                                    type="number" 
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-600 focus:ring-2 focus:ring-primary/50 outline-none dark:text-white"
                                    placeholder="165"
                                    required
                                    min="50"
                                    max="300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Cân nặng (kg)</label>
                                <input 
                                    type="number" 
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-600 focus:ring-2 focus:ring-primary/50 outline-none dark:text-white"
                                    placeholder="55"
                                    required
                                    min="20"
                                    max="300"
                                />
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className="w-full py-4 bg-primary hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
                        >
                            <Calculator size={20} />
                            Tính Ngay
                        </button>

                        {bmi !== null && (
                            <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-700">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-stone-600 dark:text-stone-400 font-medium">Chỉ số BMI của bạn:</span>
                                    <span className="text-4xl font-serif font-bold text-primary">{bmi}</span>
                                </div>
                                <div className="mb-4">
                                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide ${
                                        status === 'Cân đối' 
                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                                            : status === 'Thiếu cân'
                                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                                : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                    }`}>
                                        {status}
                                    </span>
                                </div>
                                <div className="bg-white dark:bg-stone-900 p-4 rounded-xl border border-stone-100 dark:border-stone-700 mb-4">
                                    <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                                        <span className="font-bold text-primary block mb-1">Lời khuyên:</span>
                                        {suggestion}
                                    </p>
                                </div>
                                <Link to="/classes" className="inline-flex items-center gap-2 text-primary font-bold hover:underline group">
                                    Xem lịch tập ngay <ArrowRight size={16} />
                                </Link>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
