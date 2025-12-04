import { NavItem, ClassType, PricingPlan, Testimonial, BlogPost, ScheduleItem, YogaPose } from './types';
import { Leaf, Sun, Moon, Wind, Heart, Anchor, Activity, Zap, Flower2, Smile } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang Chủ', path: '/' },
  { label: 'Về Tôi', path: '/about' },
  { label: 'Lớp Học', path: '/classes' },
  { label: 'Lịch Tập', path: '/schedule' },
  { label: 'Thư Viện', path: '/gallery' },
  { label: 'Bài Viết', path: '/blog' },
  { label: 'Liên Hệ', path: '/contact' },
];

export const HERO_SLOGAN = "Tìm lại sự cân bằng từ hơi thở";
export const HERO_SUBTEXT = "Yoga không chỉ là bài tập, mà là hành trình quay về với chính mình. Hãy cùng tôi khám phá sức mạnh của sự tĩnh lặng.";

export const YOGA_STYLES = [
  { 
    name: 'Hatha Yoga', 
    icon: Sun, 
    desc: 'Cân bằng thân tâm qua các tư thế cơ bản.',
    details: 'Hatha Yoga là nền tảng của mọi loại hình Yoga, tập trung vào việc làm chủ cơ thể và hơi thở. Các tư thế (Asana) được giữ lâu hơn để người tập cảm nhận sâu sắc sự tác động vào cơ bắp và tâm trí.',
    benefits: [
      'Cải thiện sự dẻo dai và sức mạnh cơ bắp.',
      'Giúp cân bằng hệ thần kinh, giảm căng thẳng.',
      'Tăng cường sự tập trung và ý thức về cơ thể.',
      'Phù hợp cho người mới bắt đầu để xây dựng nền tảng vững chắc.'
    ],
    suitableFor: 'Người mới bắt đầu, người muốn tập luyện nhẹ nhàng, người cần phục hồi.'
  },
  { 
    name: 'Vinyasa Flow', 
    icon: Wind, 
    desc: 'Chuyển động nhịp nhàng kết hợp hơi thở.',
    details: 'Vinyasa là phong cách Yoga năng động, nơi các động tác được kết nối mượt mà với nhau qua từng nhịp thở. Lớp học thường có tiết tấu nhanh, tạo ra nhiệt lượng và sự hứng khởi.',
    benefits: [
      'Đốt cháy calo hiệu quả, hỗ trợ giảm cân.',
      'Tăng cường sức bền tim mạch và thể lực.',
      'Thải độc cơ thể qua tuyến mồ hôi.',
      'Giúp tâm trí tập trung vào hiện tại (thiền trong chuyển động).'
    ],
    suitableFor: 'Người thích sự năng động, muốn thử thách thể lực, người đã có nền tảng cơ bản.'
  },
  { 
    name: 'Yin Yoga', 
    icon: Moon, 
    desc: 'Kéo giãn sâu, thư giãn và phục hồi năng lượng.',
    details: 'Trái ngược với các loại hình Yoga năng động (Yang), Yin Yoga tập trung vào các mô liên kết sâu (dây chằng, khớp, xương). Các tư thế thường được giữ từ 3-5 phút để kéo giãn thụ động.',
    benefits: [
      'Tăng độ linh hoạt cho khớp và dây chằng.',
      'Giải phóng tắc nghẽn năng lượng trong cơ thể.',
      'Rèn luyện sự kiên nhẫn và khả năng chịu đựng.',
      'Cân bằng lại năng lượng sau những buổi tập nặng hoặc ngày làm việc căng thẳng.'
    ],
    suitableFor: 'Mọi cấp độ, đặc biệt là người bị cứng khớp, người tập thể thao cường độ cao cần phục hồi.'
  },
  { 
    name: 'Thiền Định', 
    icon: Leaf, 
    desc: 'Tìm sự tĩnh lặng và chánh niệm trong tâm hồn.',
    details: 'Thiền định không phải là làm cho tâm trí trống rỗng, mà là quan sát suy nghĩ và cảm xúc mà không phán xét. Các lớp thiền giúp bạn kết nối sâu sắc với nội tâm và tìm thấy sự bình an.',
    benefits: [
      'Giảm lo âu, stress và cải thiện giấc ngủ.',
      'Tăng cường trí tuệ cảm xúc và sự sáng suốt.',
      'Hạ huyết áp và nhịp tim, tốt cho tim mạch.',
      'Nuôi dưỡng lòng trắc ẩn và sự biết ơn.'
    ],
    suitableFor: 'Bất kỳ ai muốn tìm kiếm sự bình yên, cải thiện sức khỏe tinh thần.'
  },
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
  { time: '05:00 - 06:00', monday: 'Morning Flow', tuesday: 'Hatha Yoga', wednesday: 'Vinyasa', thursday: 'Cơ Bản', friday: 'Power Yoga', saturday: 'Yoga Tổng Hợp' },
  { time: '15:00 - 16:00', monday: 'Cơ Bản', tuesday: 'Trị Liệu', wednesday: 'Yin Yoga', thursday: 'Giảm Mỡ', friday: 'Thư Giãn' },
  { time: '17:30 - 18:30', monday: 'Vinyasa Flow', tuesday: 'Core Strength', wednesday: 'Hatha Yoga', thursday: 'Yoga Dây', friday: 'Thiền & Thở' },
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
    content: [
      '<p>Việc tập yoga vào buổi sáng mang lại nhiều lợi ích tuyệt vời cho sức khỏe thể chất và tinh thần. Dưới đây là 5 lý do bạn nên bắt đầu ngày mới trên thảm tập:</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">1. Đánh thức cơ thể tự nhiên</h3>',
      '<p>Sau một giấc ngủ dài, cơ thể thường bị cứng và uể oải. Các động tác kéo giãn nhẹ nhàng giúp đánh thức các nhóm cơ, tăng cường lưu thông máu và giúp bạn cảm thấy tỉnh táo hơn mà không cần caffeine.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">2. Tăng cường sự tập trung</h3>',
      '<p>Các bài tập thở (Pranayama) và thiền định vào buổi sáng giúp làm dịu tâm trí, loại bỏ những suy nghĩ lộn xộn và tăng cường khả năng tập trung cho một ngày làm việc hiệu quả.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">3. Cải thiện hệ tiêu hóa</h3>',
      '<p>Nhiều tư thế yoga như vặn mình (Twists) giúp kích thích nhu động ruột, hỗ trợ quá trình tiêu hóa và thải độc cho cơ thể.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">4. Giảm căng thẳng</h3>',
      '<p>Bắt đầu ngày mới với tâm thế bình an giúp bạn đối mặt với những áp lực trong ngày một cách nhẹ nhàng và điềm tĩnh hơn.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">5. Thiết lập thói quen lành mạnh</h3>',
      '<p>Dành thời gian cho bản thân vào buổi sáng là cách tuyệt vời để yêu thương chính mình và xây dựng kỷ luật tích cực.</p>'
    ],
    date: '20/05/2024',
    category: 'Lối Sống',
    image: 'https://picsum.photos/600/400?random=20'
  },
  {
    id: 'b2',
    title: 'Kỹ Thuật Hít Thở Ujjayi Cho Người Mới',
    excerpt: 'Hơi thở chiến binh giúp bạn duy trì nhiệt lượng cơ thể và sự tập trung trong suốt buổi tập.',
    content: [
      '<p>Hơi thở Ujjayi, hay còn gọi là "Hơi thở chiến binh" hoặc "Hơi thở đại dương", là một kỹ thuật hít thở quan trọng trong Yoga, đặc biệt là Vinyasa và Ashtanga.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Ujjayi là gì?</h3>',
      '<p>Ujjayi có nghĩa là "chiến thắng". Kỹ thuật này bao gồm việc hít vào và thở ra đều qua mũi, đồng thời co nhẹ thanh quản để tạo ra âm thanh êm dịu giống như tiếng sóng biển.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Lợi ích của Ujjayi</h3>',
      '<ul class="list-disc pl-5 space-y-2">',
        '<li>Làm nóng cơ thể từ bên trong, giúp cơ bắp dẻo dai hơn.</li>',
        '<li>Tăng cường sự tập trung và chánh niệm.</li>',
        '<li>Điều hòa nhịp tim và huyết áp.</li>',
        '<li>Giúp giải tỏa căng thẳng và lo âu.</li>',
      '</ul>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Cách thực hiện</h3>',
      '<ol class="list-decimal pl-5 space-y-2">',
        '<li>Ngồi thoải mái, lưng thẳng.</li>',
        '<li>Hít vào sâu qua mũi.</li>',
        '<li>Thở ra qua miệng với âm thanh "Haaaa" (như đang làm mờ gương).</li>',
        '<li>Lặp lại vài lần, sau đó ngậm miệng lại và thở ra qua mũi nhưng vẫn giữ cảm giác co nhẹ ở cổ họng để tạo ra âm thanh tương tự.</li>',
      '</ol>'
    ],
    date: '15/05/2024',
    category: 'Kỹ Thuật',
    image: 'https://picsum.photos/600/400?random=21'
  },
  {
    id: 'b3',
    title: 'Chế Độ Dinh Dưỡng Cho Yogi',
    excerpt: 'Ăn gì trước và sau khi tập để cơ thể hấp thu tốt nhất mà không bị nặng bụng?',
    content: [
      '<p>Dinh dưỡng đóng vai trò quan trọng trong việc hỗ trợ quá trình tập luyện Yoga. Một chế độ ăn uống cân bằng giúp cơ thể nhẹ nhàng, dẻo dai và tràn đầy năng lượng.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Nguyên tắc chung</h3>',
      '<p>Trong Yoga, chế độ ăn Sattvic (tinh khiết) thường được khuyến khích. Thực phẩm nên tươi ngon, dễ tiêu hóa và giàu năng lượng sống (Prana).</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Trước khi tập</h3>',
      '<p>Nên ăn nhẹ trước khi tập khoảng 1-2 tiếng. Tránh ăn quá no để không bị khó chịu khi thực hiện các tư thế gập bụng hay đảo ngược.</p>',
      '<ul class="list-disc pl-5 space-y-2">',
        '<li>Chuối hoặc táo.</li>',
        '<li>Một nắm hạt hạnh nhân hoặc óc chó.</li>',
        '<li>Sinh tố rau xanh.</li>',
      '</ul>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Sau khi tập</h3>',
      '<p>Sau buổi tập là thời điểm cơ thể cần nạp lại năng lượng và phục hồi cơ bắp.</p>',
      '<ul class="list-disc pl-5 space-y-2">',
        '<li>Nước dừa tươi để bù điện giải.</li>',
        '<li>Salad với protein thực vật (đậu hũ, đậu gà).</li>',
        '<li>Súp ấm hoặc cháo yến mạch.</li>',
      '</ul>',
      '<p class="mt-4">Hãy lắng nghe cơ thể và tìm ra chế độ ăn phù hợp nhất với chính mình!</p>'
    ],
    date: '10/05/2024',
    category: 'Dinh Dưỡng',
    image: 'https://picsum.photos/600/400?random=22'
  },
  {
    id: 'b4',
    title: 'Yoga Trị Liệu Cho Dân Văn Phòng: Tạm Biệt Đau Mỏi Vai Gáy',
    excerpt: 'Những động tác đơn giản, dễ thực hiện ngay tại chỗ ngồi giúp giải phóng căng thẳng vùng cổ vai gáy.',
    content: [
      '<p>Đau mỏi vai gáy là "căn bệnh thời đại" của dân văn phòng do ngồi lâu trước máy tính và sai tư thế. Yoga trị liệu là phương pháp tự nhiên và hiệu quả để khắc phục tình trạng này.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Tại sao bạn bị đau vai gáy?</h3>',
      '<p>Việc giữ cổ ở một tư thế cố định quá lâu làm giảm lưu thông máu, gây co cứng cơ. Căng thẳng công việc cũng khiến chúng ta vô thức rụt vai, tạo áp lực lên vùng trapezius (cơ thang).</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">3 Động tác giãn cơ tại chỗ</h3>',
      '<p><strong>1. Xoay cổ (Neck Rolls):</strong> Ngồi thẳng lưng, từ từ xoay cổ theo chiều kim đồng hồ và ngược lại. Hít thở sâu và cảm nhận sự kéo giãn nhẹ nhàng.</p>',
      '<p><strong>2. Tư thế Đại bàng tay (Eagle Arms):</strong> Đưa tay phải xuống dưới tay trái, xoắn hai tay vào nhau, nâng khuỷu tay lên ngang vai. Giữ 5 nhịp thở rồi đổi bên. Động tác này giúp mở rộng vùng bả vai.</p>',
      '<p><strong>3. Đan tay mở ngực:</strong> Đan hai tay sau lưng, duỗi thẳng tay và đẩy ngực về phía trước. Hít sâu, cảm nhận lồng ngực mở rộng và vai được thả lỏng.</p>',
      '<p>Hãy dành 5 phút mỗi 2 tiếng làm việc để thực hiện các động tác này, bạn sẽ thấy sự khác biệt rõ rệt!</p>'
    ],
    date: '02/06/2024',
    category: 'Trị Liệu',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b5',
    title: 'Luân Xa (Chakra) Là Gì? Hiểu Về 7 Trung Tâm Năng Lượng',
    excerpt: 'Khám phá hệ thống năng lượng tinh tế trong cơ thể và cách cân bằng chúng để có cuộc sống hài hòa.',
    content: [
      '<p>Trong triết lý Yoga, cơ thể chúng ta không chỉ có xương thịt mà còn tồn tại một hệ thống năng lượng tinh tế. Các trung tâm năng lượng chính được gọi là Luân Xa (Chakra).</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">7 Luân Xa Chính</h3>',
      '<ul class="list-disc pl-5 space-y-2">',
        '<li><strong>Luân xa 1 (Gốc - Muladhara):</strong> Nằm ở đáy cột sống, tượng trưng cho sự an toàn và sinh tồn. Màu đỏ.</li>',
        '<li><strong>Luân xa 2 (Xương cùng - Svadhisthana):</strong> Liên quan đến cảm xúc và sáng tạo. Màu cam.</li>',
        '<li><strong>Luân xa 3 (Búi mặt trời - Manipura):</strong> Sức mạnh cá nhân và sự tự tin. Màu vàng.</li>',
        '<li><strong>Luân xa 4 (Tim - Anahata):</strong> Tình yêu thương và lòng trắc ẩn. Màu xanh lá.</li>',
        '<li><strong>Luân xa 5 (Cổ họng - Vishuddha):</strong> Sự giao tiếp và chân thật. Màu xanh dương.</li>',
        '<li><strong>Luân xa 6 (Con mắt thứ 3 - Ajna):</strong> Trực giác và trí tuệ. Màu chàm.</li>',
        '<li><strong>Luân xa 7 (Vương miện - Sahasrara):</strong> Kết nối tâm linh và giác ngộ. Màu tím hoặc trắng.</li>',
      '</ul>',
      '<p>Khi các luân xa được cân bằng, năng lượng (Prana) sẽ lưu thông tự do, mang lại sức khỏe và sự bình an nội tại.</p>'
    ],
    date: '28/05/2024',
    category: 'Tâm Linh',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b6',
    title: 'Sống Tối Giản (Minimalism) - Phép Cộng Cho Hạnh Phúc',
    excerpt: 'Tối giản không phải là vứt bỏ tất cả, mà là giữ lại những gì thực sự quan trọng và mang lại niềm vui.',
    content: [
      '<p>Sống tối giản (Minimalism) đang trở thành một xu hướng sống được nhiều người trẻ theo đuổi. Nó không chỉ là việc dọn dẹp nhà cửa, mà là một tư duy sống.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Tối giản vật chất</h3>',
      '<p>Hãy nhìn quanh căn phòng của bạn. Có bao nhiêu món đồ bạn không dùng đến trong 6 tháng qua? Việc loại bỏ những vật dụng thừa thãi giúp không gian sống thoáng đãng, giảm bớt gánh nặng dọn dẹp và mua sắm.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Tối giản tinh thần</h3>',
      '<p>Tương tự như không gian sống, tâm trí chúng ta cũng cần được "dọn dẹp". Hãy học cách nói "không" với những mối quan hệ độc hại, những thông tin tiêu cực trên mạng xã hội và những lo lắng không cần thiết.</p>',
      '<p>Sống tối giản giúp bạn có thêm thời gian, năng lượng và tiền bạc để đầu tư vào những trải nghiệm ý nghĩa, như một khóa học Yoga, một chuyến du lịch hay đơn giản là thời gian bên gia đình.</p>'
    ],
    date: '25/05/2024',
    category: 'Lối Sống',
    image: 'https://images.unsplash.com/photo-1447452001602-7090c7746373?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b7',
    title: 'Công Thức Detox Thanh Lọc Cơ Thể Sau Kỳ Nghỉ Lễ',
    excerpt: 'Lấy lại vóc dáng và làn da tươi sáng với những công thức nước uống detox đơn giản từ thiên nhiên.',
    content: [
      '<p>Sau những bữa tiệc tùng linh đình, cơ thể thường cảm thấy nặng nề và tích tụ nhiều độc tố. Đây là lúc bạn cần một liệu trình detox nhẹ nhàng.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">1. Nước chanh ấm mật ong</h3>',
      '<p>Uống một cốc nước ấm pha chanh và mật ong ngay khi thức dậy giúp kích thích hệ tiêu hóa, làm sạch ruột và tăng cường vitamin C.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">2. Green Juice (Nước ép xanh)</h3>',
      '<p>Công thức: Cần tây, táo xanh, dưa leo, gừng và một chút chanh. Loại nước ép này giàu chất xơ và kiềm hóa cơ thể cực tốt.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">3. Trà gừng sả</h3>',
      '<p>Đun sôi nước với sả đập dập và gừng thái lát. Thức uống này giúp làm ấm bụng, hỗ trợ tiêu hóa và giải cảm rất tốt.</p>',
      '<p>Bên cạnh việc uống detox, hãy nhớ uống đủ 2 lít nước lọc mỗi ngày và ăn nhiều rau xanh để hỗ trợ gan thận làm việc hiệu quả nhé.</p>'
    ],
    date: '18/05/2024',
    category: 'Dinh Dưỡng',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b8',
    title: 'Thiền Đi Bộ (Walking Meditation): Bình An Trong Từng Bước Chân',
    excerpt: 'Không cần ngồi yên một chỗ, bạn vẫn có thể thiền định ngay khi đang di chuyển.',
    content: [
      '<p>Thiền đi bộ là một phương pháp thực hành chánh niệm tuyệt vời, giúp kết nối thân và tâm thông qua chuyển động của đôi chân.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Cách thực hành</h3>',
      '<p>Chọn một không gian yên tĩnh, có thể là công viên hoặc hành lang. Đi chậm hơn bình thường một chút. Chú ý vào cảm giác của bàn chân khi chạm đất, chuyển động của cơ bắp chân.</p>',
      '<p>Kết hợp với hơi thở: Hít vào - bước 3 bước, Thở ra - bước 3 bước. Nếu tâm trí lang thang, hãy nhẹ nhàng đưa nó quay về với bước chân.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Lợi ích</h3>',
      '<p>Thiền đi bộ giúp giải tỏa căng thẳng, cải thiện lưu thông máu và giúp bạn cảm thấy kết nối sâu sắc hơn với thiên nhiên và hiện tại.</p>'
    ],
    date: '12/05/2024',
    category: 'Thiền',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b9',
    title: 'Cách Vệ Sinh Và Bảo Quản Thảm Tập Yoga Bền Đẹp',
    excerpt: 'Thảm tập là người bạn đồng hành thân thiết, hãy chăm sóc nó đúng cách để đảm bảo vệ sinh và độ bám.',
    content: [
      '<p>Một chiếc thảm sạch sẽ không chỉ giúp bạn tránh các bệnh ngoài da mà còn tạo cảm hứng tập luyện tốt hơn.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Vệ sinh hàng ngày</h3>',
      '<p>Sau mỗi buổi tập, hãy dùng khăn ẩm lau sạch mồ hôi trên thảm. Bạn có thể dùng dung dịch xịt thảm chuyên dụng hoặc pha loãng giấm táo với nước.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Giặt thảm định kỳ</h3>',
      '<p>Tùy vào tần suất tập, bạn nên giặt thảm 1-2 tháng/lần. Ngâm thảm trong bồn tắm với nước ấm và một chút xà phòng nhẹ. Dùng bọt biển chà nhẹ nhàng. Xả sạch và phơi thảm ở nơi thoáng mát, tránh ánh nắng trực tiếp.</p>',
      '<h3 class="text-xl font-bold mt-4 mb-2">Lưu ý bảo quản</h3>',
      '<p>Không cuộn thảm khi còn ướt. Khi cuộn, hãy cuộn mặt tập ra ngoài để thảm luôn phẳng khi trải ra. Tránh để thảm trong cốp xe hơi nóng quá lâu.</p>'
    ],
    date: '05/05/2024',
    category: 'Mẹo Tập',
    image: 'https://images.unsplash.com/photo-1593164842264-854604db8a4e?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1573590330099-d6c7355ec595?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    steps: [
      "Ngồi thẳng lưng trên thảm.",
      "Gập chân phải, đặt bàn chân lên đùi trái.",
      "Gập chân trái, đặt bàn chân lên đùi phải.",
      "Hai tay thủ ấn Chin Mudra đặt trên gối."
    ],
    tips: "Nếu cảm thấy đau khớp gối, hãy tập Bán Hoa Sen hoặc ngồi xếp bằng bình thường."
  }
];