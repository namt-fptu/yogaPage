export interface NavItem {
  label: string;
  path: string;
}

export interface ClassType {
  id: string;
  title: string;
  description: string;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao' | 'Mọi cấp độ';
  duration: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Nhân viên văn phòng"
  content: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface YogaPose {
  id: string;
  name: string;
  sanskrit: string;
  benefit: string;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  icon: any;
  steps?: string[];
  tips?: string;
}