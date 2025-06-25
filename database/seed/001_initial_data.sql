-- Insert initial services
INSERT INTO public.services (id, name, description, category, features) VALUES
(
    uuid_generate_v4(),
    'Pembuatan Website',
    'Layanan pembuatan website profesional untuk bisnis dan personal',
    'website',
    ARRAY['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile Friendly', 'Admin Panel']
),
(
    uuid_generate_v4(),
    'Pembuatan Aplikasi',
    'Pengembangan aplikasi mobile dan web untuk berbagai kebutuhan',
    'app',
    ARRAY['Cross Platform', 'Native Performance', 'Push Notifications', 'Offline Support', 'Analytics']
),
(
    uuid_generate_v4(),
    'Joki Tugas & Skripsi',
    'Bantuan profesional untuk tugas kuliah dan skripsi berkualitas',
    'academic',
    ARRAY['Plagiarism Free', 'On Time Delivery', 'Unlimited Revisions', 'Expert Writers', 'Quality Guarantee']
);

-- Insert service packages for Website
INSERT INTO public.service_packages (service_id, name, price, features, delivery_time, revisions, is_popular) 
SELECT 
    s.id,
    'Basic',
    500000,
    ARRAY['Landing Page Responsif', 'Domain & Hosting 1 Tahun', 'SSL Certificate', 'SEO Basic', '3x Revisi'],
    7,
    3,
    false
FROM public.services s WHERE s.category = 'website';

INSERT INTO public.service_packages (service_id, name, price, features, delivery_time, revisions, is_popular) 
SELECT 
    s.id,
    'Standard',
    1500000,
    ARRAY['Website Multi-Page', 'Admin Panel', 'Contact Form', 'Google Analytics', 'SEO Optimized', '5x Revisi'],
    14,
    5,
    true
FROM public.services s WHERE s.category = 'website';

INSERT INTO public.service_packages (service_id, name, price, features, delivery_time, revisions, is_popular) 
SELECT 
    s.id,
    'Premium',
    3000000,
    ARRAY['E-commerce/Custom Features', 'Database Integration', 'Payment Gateway', 'Advanced SEO', 'Maintenance 3 Bulan', 'Unlimited Revisi'],
    21,
    -1,
    false
FROM public.services s WHERE s.category = 'website';

-- Insert service packages for App
INSERT INTO public.service_packages (service_id, name, price, features, delivery_time, revisions, is_popular) 
SELECT 
    s.id,
    'Basic',
    2000000,
    ARRAY['Aplikasi Android/iOS', 'UI/UX Design', 'Basic Features', 'Testing', '3x Revisi'],
    21,
    3,
    false
FROM public.services s WHERE s.category = 'app';

INSERT INTO public.service_packages (service_id, name, price, features, delivery_time, revisions, is_popular) 
SELECT 
    s.id,
    'Standard',
    5000000,
    ARRAY['Cross-Platform App', 'Backend Integration', 'Push Notifications', 'Analytics', '5x Revisi'],
    30,
    5,
    true
FROM public.services s WHERE s.category = 'app';

INSERT INTO public.service_packages (service_id, name, price, features, delivery_time, revisions, is_popular) 
SELECT 
    s.id,
    'Premium',
    10000000,
    ARRAY['Advanced Features', 'Real-time Features', 'Payment Integration', 'Admin Dashboard', 'Maintenance 6 Bulan', 'Unlimited Revisi'],
    45,
    -1,
    false
FROM public.services s WHERE s.category = 'app';

-- Insert service packages for Academic
INSERT INTO public.service_packages (service_id, name, price, features, delivery_time, revisions, is_popular) 
SELECT 
    s.id,
    'Tugas Kuliah',
    50000,
    ARRAY['Tugas Harian/Mingguan', 'Berbagai Mata Kuliah', 'Plagiarism Check', 'Revisi Gratis', 'Konsultasi'],
    3,
    2,
    true
FROM public.services s WHERE s.category = 'academic';

INSERT INTO public.service_packages (service_id, name, price, features, delivery_time, revisions, is_popular) 
SELECT 
    s.id,
    'Skripsi/Thesis',
    2000000,
    ARRAY['Skripsi Lengkap', 'Bimbingan Intensif', 'Revisi Unlimited', 'Presentasi Support', 'Garansi Lulus'],
    60,
    -1,
    false
FROM public.services s WHERE s.category = 'academic';

-- Insert sample portfolio items
INSERT INTO public.portfolio (title, description, category, image_url, project_url, github_url, technologies, featured) VALUES
(
    'E-Commerce Fashion Store',
    'Platform e-commerce modern dengan fitur lengkap untuk toko fashion online. Dilengkapi dengan sistem pembayaran, manajemen inventory, dan dashboard admin yang komprehensif.',
    'website',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    'https://demo-ecommerce.example.com',
    'https://github.com/example/ecommerce',
    ARRAY['Next.js', 'Tailwind CSS', 'Supabase', 'Stripe', 'Vercel'],
    true
),
(
    'Mobile Banking App',
    'Aplikasi mobile banking dengan UI/UX modern dan fitur keamanan tinggi. Mendukung transfer, pembayaran, dan monitoring keuangan real-time.',
    'app',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    'https://demo-banking.example.com',
    null,
    ARRAY['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Firebase'],
    true
),
(
    'Sistem Manajemen Skripsi',
    'Platform digital untuk manajemen dan monitoring progress skripsi mahasiswa. Dilengkapi dengan sistem bimbingan online dan tracking milestone.',
    'academic',
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
    'https://demo-thesis.example.com',
    'https://github.com/example/thesis-management',
    ARRAY['Laravel', 'MySQL', 'Bootstrap', 'Chart.js', 'WebSocket'],
    false
),
(
    'Restaurant Management System',
    'Sistem manajemen restoran dengan POS dan inventory management. Mendukung multi-outlet dan real-time reporting.',
    'website',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    'https://demo-restaurant.example.com',
    null,
    ARRAY['React', 'Express.js', 'MongoDB', 'Socket.io', 'PWA'],
    true
),
(
    'Fitness Tracking App',
    'Aplikasi tracking fitness dengan fitur workout planner dan nutrition guide. Terintegrasi dengan wearable devices.',
    'app',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    'https://demo-fitness.example.com',
    'https://github.com/example/fitness-app',
    ARRAY['Flutter', 'Firebase', 'Google Fit API', 'HealthKit', 'ML Kit'],
    false
),
(
    'Learning Management System',
    'Platform e-learning dengan fitur video streaming, quiz interaktif, dan progress tracking untuk institusi pendidikan.',
    'website',
    'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    'https://demo-lms.example.com',
    'https://github.com/example/lms',
    ARRAY['Vue.js', 'Django', 'PostgreSQL', 'Redis', 'AWS S3'],
    true
);

-- Insert sample testimonials
INSERT INTO public.testimonials (name, email, rating, message, avatar_url, approved) VALUES
(
    'Sarah Wijaya',
    'sarah@example.com',
    5,
    'Website e-commerce yang dibuat sangat profesional dan user-friendly. Penjualan online kami meningkat 300% setelah menggunakan website baru. Tim Kedjora sangat responsif dan detail dalam pengerjaan.',
    'https://ui-avatars.com/api/?name=Sarah+Wijaya&background=3b82f6&color=fff',
    true
),
(
    'Ahmad Rizki',
    'ahmad@example.com',
    5,
    'Bantuan untuk skripsi sangat membantu! Mendapat bimbingan yang detail dan berkualitas. Alhamdulillah skripsi saya lulus dengan nilai A. Terima kasih Kedjora!',
    'https://ui-avatars.com/api/?name=Ahmad+Rizki&background=10b981&color=fff',
    true
),
(
    'Budi Santoso',
    'budi@example.com',
    5,
    'Aplikasi POS untuk restoran kami sangat membantu dalam mengelola operasional. Interface yang mudah digunakan dan fitur-fitur yang lengkap. Highly recommended!',
    'https://ui-avatars.com/api/?name=Budi+Santoso&background=f59e0b&color=fff',
    true
),
(
    'Lisa Chen',
    'lisa@example.com',
    5,
    'Website company profile yang dibuat sangat elegan dan profesional. Banyak klien yang memberikan feedback positif tentang website kami. Great job!',
    'https://ui-avatars.com/api/?name=Lisa+Chen&background=ef4444&color=fff',
    true
),
(
    'Dian Pratiwi',
    'dian@example.com',
    5,
    'Tugas-tugas kuliah yang dibantu selalu berkualitas dan tepat waktu. Penjelasan yang diberikan juga sangat detail sehingga saya bisa memahami materinya dengan baik.',
    'https://ui-avatars.com/api/?name=Dian+Pratiwi&background=8b5cf6&color=fff',
    true
),
(
    'Reza Firmansyah',
    'reza@example.com',
    5,
    'Aplikasi mobile untuk startup kami dikerjakan dengan sangat profesional. Dari UI/UX design hingga development, semuanya sesuai ekspektasi bahkan lebih!',
    'https://ui-avatars.com/api/?name=Reza+Firmansyah&background=06b6d4&color=fff',
    true
);

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, content, excerpt, featured_image, category, tags, published, author_id) VALUES
(
    'Tips Memilih Jasa Pembuatan Website yang Tepat',
    'tips-memilih-jasa-pembuatan-website',
    'Dalam era digital saat ini, memiliki website yang profesional adalah kebutuhan mutlak untuk bisnis...',
    'Panduan lengkap untuk memilih jasa pembuatan website yang sesuai dengan kebutuhan dan budget Anda.',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    'Web Development',
    ARRAY['website', 'tips', 'bisnis'],
    true,
    null
),
(
    'Tren Teknologi Mobile App Development 2024',
    'tren-teknologi-mobile-app-2024',
    'Industri pengembangan aplikasi mobile terus berkembang pesat. Berikut adalah tren terbaru yang perlu Anda ketahui...',
    'Eksplorasi tren terbaru dalam pengembangan aplikasi mobile yang akan mendominasi tahun 2024.',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
    'Mobile Development',
    ARRAY['mobile', 'app', 'teknologi', '2024'],
    true,
    null
),
(
    'Cara Menulis Skripsi yang Baik dan Benar',
    'cara-menulis-skripsi-yang-baik',
    'Menulis skripsi adalah tantangan besar bagi setiap mahasiswa. Berikut adalah panduan step-by-step...',
    'Panduan komprehensif untuk menulis skripsi yang berkualitas dengan metodologi yang tepat.',
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
    'Academic',
    ARRAY['skripsi', 'akademik', 'tips', 'mahasiswa'],
    true,
    null
);
