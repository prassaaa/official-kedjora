-- Insert sample services
INSERT INTO public.services (id, name, description, category, features, is_active) VALUES
(
    '550e8400-e29b-41d4-a716-446655440001',
    'Pembuatan Website',
    'Layanan pembuatan website profesional untuk bisnis dan personal',
    'website',
    ARRAY['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile Friendly', 'Admin Panel'],
    true
),
(
    '550e8400-e29b-41d4-a716-446655440002',
    'Pembuatan Aplikasi Mobile',
    'Pengembangan aplikasi mobile Android dan iOS dengan teknologi terdepan',
    'app',
    ARRAY['Cross Platform', 'Native Performance', 'Push Notifications', 'Offline Support', 'Analytics'],
    true
),
(
    '550e8400-e29b-41d4-a716-446655440003',
    'Joki Tugas Kuliah',
    'Bantuan pengerjaan tugas kuliah dan skripsi dengan kualitas terbaik',
    'academic',
    ARRAY['Berbagai Mata Kuliah', 'Plagiarism Free', 'Revisi Gratis', 'Konsultasi', 'Deadline Fleksibel'],
    true
);

-- Insert service packages for Website
INSERT INTO public.service_packages (service_id, name, price, features, delivery_time, revisions, is_popular) VALUES
(
    '550e8400-e29b-41d4-a716-446655440001',
    'Basic',
    500000,
    ARRAY['Landing Page Responsif', 'Domain & Hosting 1 Tahun', 'SSL Certificate', 'SEO Basic', '3x Revisi'],
    7,
    3,
    false
),
(
    '550e8400-e29b-41d4-a716-446655440001',
    'Standard',
    1500000,
    ARRAY['Website Multi-Page', 'Admin Panel', 'Contact Form', 'Google Analytics', 'SEO Optimized', '5x Revisi'],
    14,
    5,
    true
),
(
    '550e8400-e29b-41d4-a716-446655440001',
    'Premium',
    3000000,
    ARRAY['E-commerce/Custom Features', 'Database Integration', 'Payment Gateway', 'Advanced SEO', 'Maintenance 3 Bulan', 'Unlimited Revisi'],
    30,
    -1,
    false
);

-- Insert service packages for Mobile App
INSERT INTO public.service_packages (service_id, name, price, features, delivery_time, revisions, is_popular) VALUES
(
    '550e8400-e29b-41d4-a716-446655440002',
    'Basic',
    2000000,
    ARRAY['Aplikasi Android/iOS', 'UI/UX Design', 'Basic Features', 'Testing', '3x Revisi'],
    21,
    3,
    false
),
(
    '550e8400-e29b-41d4-a716-446655440002',
    'Standard',
    5000000,
    ARRAY['Cross-Platform App', 'Backend Integration', 'Push Notifications', 'Analytics', '5x Revisi'],
    45,
    5,
    true
),
(
    '550e8400-e29b-41d4-a716-446655440002',
    'Premium',
    10000000,
    ARRAY['Advanced Features', 'Real-time Features', 'Payment Integration', 'Admin Dashboard', 'Maintenance 6 Bulan', 'Unlimited Revisi'],
    60,
    -1,
    false
);

-- Insert service packages for Academic
INSERT INTO public.service_packages (service_id, name, price, features, delivery_time, revisions, is_popular) VALUES
(
    '550e8400-e29b-41d4-a716-446655440003',
    'Tugas Kuliah',
    50000,
    ARRAY['Tugas Harian/Mingguan', 'Berbagai Mata Kuliah', 'Plagiarism Check', 'Revisi Gratis', 'Konsultasi'],
    3,
    2,
    true
),
(
    '550e8400-e29b-41d4-a716-446655440003',
    'Skripsi/Thesis',
    2000000,
    ARRAY['Skripsi Lengkap', 'Bimbingan Intensif', 'Revisi Unlimited', 'Presentasi Support', 'Garansi Lulus'],
    90,
    -1,
    false
);

-- Insert sample portfolio items
INSERT INTO public.portfolio (title, description, category, image_url, project_url, github_url, technologies, featured, is_published) VALUES
(
    'E-Commerce Fashion Store',
    'Platform e-commerce modern dengan fitur lengkap untuk toko fashion online. Dilengkapi dengan sistem pembayaran, manajemen inventory, dan dashboard admin yang komprehensif.',
    'website',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    'https://demo-ecommerce.example.com',
    'https://github.com/example/ecommerce',
    ARRAY['Next.js', 'Tailwind CSS', 'Supabase', 'Stripe', 'Vercel'],
    true,
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
    true,
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
    false,
    true
);

-- Insert sample testimonials
INSERT INTO public.testimonials (name, email, rating, message, avatar_url, approved) VALUES
(
    'Sarah Wijaya',
    'sarah@example.com',
    5,
    'Pelayanan yang sangat memuaskan! Website yang dibuat sangat profesional dan sesuai dengan kebutuhan bisnis saya. Tim Kedjora sangat responsif dan membantu.',
    'https://ui-avatars.com/api/?name=Sarah+Wijaya&background=0D8ABC&color=fff',
    true
),
(
    'Ahmad Rahman',
    'ahmad@example.com',
    5,
    'Aplikasi mobile yang dibuat sangat berkualitas. Proses development transparan dan hasil akhir melebihi ekspektasi. Highly recommended!',
    'https://ui-avatars.com/api/?name=Ahmad+Rahman&background=0D8ABC&color=fff',
    true
),
(
    'Maya Sari',
    'maya@example.com',
    4,
    'Bantuan untuk tugas kuliah sangat membantu. Penjelasan detail dan hasil yang berkualitas. Terima kasih Kedjora!',
    'https://ui-avatars.com/api/?name=Maya+Sari&background=0D8ABC&color=fff',
    true
),
(
    'Budi Santoso',
    'budi@example.com',
    5,
    'Website e-commerce yang dibuat sangat user-friendly dan loading-nya cepat. Fitur admin panel juga sangat mudah digunakan.',
    'https://ui-avatars.com/api/?name=Budi+Santoso&background=0D8ABC&color=fff',
    true
);
