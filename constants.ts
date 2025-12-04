import { NavItem, ClassType, PricingPlan, Testimonial, BlogPost, ScheduleItem, YogaPose } from './types';
import { Leaf, Sun, Moon, Wind, Heart, Anchor, Activity, Zap, Flower2, Smile } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang Chủ', path: '/' },
  { label: 'Về Tôi', path: '/about' },
  { label: 'Lớp Học', path: '/classes' },
  { label: 'Lịch Tập', path: '/schedule' },
  { label: 'Bài Viết', path: '/blog' },
  { label: 'Liên Hệ', path: '/contact' },
];

export const HERO_SLOGAN = "Tìm lại sự cân bằng từ hơi thở";
export const HERO_SUBTEXT = "Yoga không chỉ là bài tập, mà là hành trình quay về với chính mình. Hãy cùng tôi khám phá sức mạnh của sự tĩnh lặng.";

export const YOGA_STYLES = [
  { name: 'Hatha Yoga', icon: Sun, desc: 'Cân bằng thân tâm qua các tư thế cơ bản.' },
  { name: 'Vinyasa Flow', icon: Wind, desc: 'Chuyển động nhịp nhàng kết hợp hơi thở.' },
  { name: 'Yin Yoga', icon: Moon, desc: 'Kéo giãn sâu, thư giãn và phục hồi năng lượng.' },
  { name: 'Thiền Định', icon: Leaf, desc: 'Tìm sự tĩnh lặng và chánh niệm trong tâm hồn.' },
];

export const CLASSES: ClassType[] = [
  {
    id: '1',
    title: 'Yoga Cho Người Mới Bắt Đầu',
    description: 'Lớp học nhẹ nhàng giúp bạn làm quen với các tư thế cơ bản và kỹ thuật hít thở đúng cách.',
    difficulty: 'Cơ bản',
    duration: '60 phút',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Morning Flow - Năng Lượng Sáng',
    description: 'Đánh thức cơ thể với chuỗi bài tập Vinyasa năng động để khởi đầu ngày mới.',
    difficulty: 'Trung bình',
    duration: '45 phút',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Relax & Restore - Thư Giãn Sâu',
    description: 'Kết hợp Yin Yoga và Thiền chuông xoay giúp giảm căng thẳng và ngủ ngon hơn.',
    difficulty: 'Mọi cấp độ',
    duration: '75 phút',
    image: 'https://picsum.photos/800/600?random=3'
  }
];

export const PRICING: PricingPlan[] = [
  {
    id: 'drop-in',
    name: 'Buổi Lẻ',
    price: '150.000đ',
    features: ['Tham gia 1 buổi tập bất kỳ', 'Thảm tập miễn phí', 'Nước uống detox'],
    isPopular: false
  },
  {
    id: 'monthly',
    name: 'Gói Tháng',
    price: '1.200.000đ',
    features: ['12 buổi tập / tháng', 'Tư vấn lộ trình cá nhân', 'Tham gia workshop miễn phí'],
    isPopular: true
  },
  {
    id: 'private',
    name: 'Huấn Luyện 1:1',
    price: '500.000đ',
    features: ['Giáo án thiết kế riêng', 'Linh hoạt thời gian', 'Chỉnh sửa kỹ thuật chi tiết'],
    isPopular: false
  }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  { time: '06:00 - 07:00', monday: 'Morning Flow', wednesday: 'Hatha Yoga', friday: 'Vinyasa' },
  { time: '09:00 - 10:15', tuesday: 'Cơ Bản', thursday: 'Cơ Bản', saturday: 'Yoga Dây' },
  { time: '17:30 - 18:30', monday: 'Giảm Mỡ', wednesday: 'Power Yoga', friday: 'Core Strength' },
  { time: '19:00 - 20:15', tuesday: 'Yin Yoga', thursday: 'Trị Liệu Lưng', sunday: 'Thiền & Thở' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Minh Hạnh',
    role: 'Nhân viên văn phòng',
    content: 'Sau 3 tháng tập luyện, chứng đau lưng của mình đã giảm hẳn. Cô giáo rất tận tâm chỉnh sửa từng động tác.',
    avatar: 'https://picsum.photos/100/100?random=10',
    rating: 5
  },
  {
    id: 't2',
    name: 'Thu Thảo',
    role: 'Freelancer',
    content: 'Không gian tập luyện vô cùng thư thái. Mỗi buổi tập là một lần mình được nạp lại năng lượng tích cực.',
    avatar: 'https://picsum.photos/100/100?random=11',
    rating: 5
  },
  {
    id: 't3',
    name: 'Quang Huy',
    role: 'Lập trình viên',
    content: 'Yoga giúp mình cải thiện sự tập trung rất nhiều. Các bài tập thở thực sự hiệu quả để giảm stress.',
    avatar: 'https://picsum.photos/100/100?random=12',
    rating: 4
  },
  {
    id: 't4',
    name: 'Hoàng Yến',
    role: 'Graphic Designer',
    content: 'Lớp học buổi sáng thực sự thay đổi thói quen sinh hoạt của mình. Cảm thấy tràn đầy năng lượng và sáng tạo hơn trong công việc.',
    avatar: 'https://picsum.photos/100/100?random=13',
    rating: 5
  },
  {
    id: 't5',
    name: 'Đức Thịnh',
    role: 'Kỹ sư xây dựng',
    content: 'Ban đầu mình nghĩ Yoga chỉ dành cho nữ, nhưng sau khi thử lớp Power Yoga, mình đã hoàn toàn thay đổi suy nghĩ. Rất thử thách và hiệu quả!',
    avatar: 'https://picsum.photos/100/100?random=14',
    rating: 5
  },
  {
    id: 't6',
    name: 'Thanh Trúc',
    role: 'Mẹ bỉm sữa',
    content: 'Mình tìm đến Yoga để phục hồi sau sinh. Cô giáo rất hiểu tâm lý và hướng dẫn những bài tập phù hợp, nhẹ nhàng giúp mình lấy lại vóc dáng.',
    avatar: 'https://picsum.photos/100/100?random=15',
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: '5 Lợi Ích Của Việc Tập Yoga Buổi Sáng',
    excerpt: 'Khởi động ngày mới với Yoga không chỉ giúp cơ thể dẻo dai mà còn mang lại tinh thần minh mẫn.',
    date: '20/05/2024',
    category: 'Lifestyle',
    image: 'https://picsum.photos/600/400?random=20'
  },
  {
    id: 'b2',
    title: 'Kỹ Thuật Hít Thở Ujjayi Cho Người Mới',
    excerpt: 'Hơi thở chiến binh giúp bạn duy trì nhiệt lượng cơ thể và sự tập trung trong suốt buổi tập.',
    date: '15/05/2024',
    category: 'Kỹ Thuật',
    image: 'https://picsum.photos/600/400?random=21'
  },
  {
    id: 'b3',
    title: 'Chế Độ Dinh Dưỡng Cho Yogi',
    excerpt: 'Ăn gì trước và sau khi tập để cơ thể hấp thu tốt nhất mà không bị nặng bụng?',
    date: '10/05/2024',
    category: 'Dinh Dưỡng',
    image: 'https://picsum.photos/600/400?random=22'
  }
];

export const POPULAR_POSES: YogaPose[] = [
  {
    id: 'p1',
    name: 'Tư Thế Cái Cây',
    sanskrit: 'Vrikshasana',
    benefit: 'Cải thiện khả năng thăng bằng và tăng cường sự tập trung của tâm trí.',
    difficulty: 'Cơ bản',
    icon: Anchor,
    steps: [
      "Đứng thẳng, dồn trọng lượng sang chân trái.",
      "Đặt bàn chân phải lên đùi trong chân trái (tránh khớp gối).",
      "Chắp tay trước ngực (Namaste) hoặc vươn tay lên cao.",
      "Giữ thăng bằng và hít thở sâu trong 5-10 nhịp thở."
    ],
    tips: "Tập trung mắt vào một điểm cố định (Drishti) để giữ thăng bằng tốt hơn."
  },
  {
    id: 'p2',
    name: 'Chó Úp Mặt',
    sanskrit: 'Adho Mukha Svanasana',
    benefit: 'Kéo giãn toàn bộ cột sống, gân kheo và giúp đưa máu về não bộ.',
    difficulty: 'Cơ bản',
    icon: Activity,
    steps: [
      "Bắt đầu ở tư thế Bò (hai tay và hai gối chạm sàn).",
      "Hít vào, nhấn mũi chân xuống sàn.",
      "Thở ra, nâng hông lên cao tạo thành chữ V ngược.",
      "Duỗi thẳng cột sống, thả lỏng đầu cổ giữa hai cánh tay."
    ],
    tips: "Nếu gân kheo còn cứng, hãy chùng nhẹ đầu gối để giữ lưng thẳng."
  },
  {
    id: 'p3',
    name: 'Chiến Binh II',
    sanskrit: 'Virabhadrasana II',
    benefit: 'Tăng sức bền cho đôi chân, mở rộng khớp hông và lồng ngực.',
    difficulty: 'Trung bình',
    icon: Zap,
    steps: [
      "Đứng dang rộng hai chân.",
      "Xoay chân phải ra ngoài 90 độ, chân trái xoay nhẹ vào trong.",
      "Gập đầu gối phải vuông góc với sàn.",
      "Dang hai tay ngang vai, mắt nhìn theo tay phải."
    ],
    tips: "Đảm bảo đầu gối chân trước không vượt quá mũi chân."
  },
  {
    id: 'p4',
    name: 'Tư Thế Em Bé',
    sanskrit: 'Balasana',
    benefit: 'Thư giãn sâu vùng lưng dưới, xoa dịu hệ thần kinh và giải tỏa stress.',
    difficulty: 'Cơ bản',
    icon: Smile,
    steps: [
      "Quỳ gối trên thảm, ngồi lên gót chân.",
      "Mở rộng đầu gối bằng hông.",
      "Gập người về phía trước, trán chạm sàn.",
      "Duỗi tay về phía trước hoặc thả lỏng dọc theo thân."
    ],
    tips: "Đây là tư thế nghỉ ngơi tuyệt vời bất cứ khi nào bạn thấy mệt."
  },
  {
    id: 'p5',
    name: 'Rắn Hổ Mang',
    sanskrit: 'Bhujangasana',
    benefit: 'Tăng cường sự dẻo dai cho cột sống, kích thích tiêu hóa và mở ngực.',
    difficulty: 'Trung bình',
    icon: Heart,
    steps: [
      "Nằm sấp trên thảm, hai tay đặt dưới vai.",
      "Hít vào, ấn bàn tay xuống sàn để nâng ngực lên.",
      "Giữ khuỷu tay hơi trùng và ép sát vào thân.",
      "Thả lỏng vai xa tai, mắt nhìn thẳng hoặc ngước nhẹ."
    ],
    tips: "Dùng cơ lưng để nâng người lên, không dồn hết lực vào thắt lưng."
  },
  {
    id: 'p6',
    name: 'Tư Thế Hoa Sen',
    sanskrit: 'Padmasana',
    benefit: 'Ổn định tâm trí, tư thế ngồi hoàn hảo để thực hành thiền định lâu dài.',
    difficulty: 'Nâng cao',
    icon: Flower2,
    steps: [
      "Ngồi thẳng lưng trên thảm.",
      "Gập chân phải, đặt bàn chân lên đùi trái.",
      "Gập chân trái, đặt bàn chân lên đùi phải.",
      "Hai tay thủ ấn Chin Mudra đặt trên gối."
    ],
    tips: "Nếu cảm thấy đau khớp gối, hãy tập Bán Hoa Sen hoặc ngồi xếp bằng bình thường."
  }
];