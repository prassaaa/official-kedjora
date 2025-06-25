# 🚀 Kedjora - Jasa Freelance Website

Website profesional untuk layanan freelance yang menyediakan jasa pembuatan website, aplikasi mobile, dan bantuan tugas kuliah/skripsi. Dibangun dengan teknologi modern dan mengikuti best practices untuk performa dan maintainability yang optimal.

## ✨ Fitur Utama

### 🏠 **Halaman Utama (Home)**
- **Hero Section** dengan animasi interaktif menggunakan Framer Motion
- **Service Highlights** dengan card interaktif dan hover animations
- **Portfolio Preview** dengan slider dan filtering
- **Testimonials Carousel** dengan auto-play dan navigation
- **Quick Contact Form** dengan validasi real-time

### 📋 **Layanan (Services)**
- **Pembuatan Website** - Landing page hingga e-commerce kompleks
- **Pembuatan Aplikasi** - Mobile dan web application
- **Joki Tugas & Skripsi** - Bantuan akademik berkualitas
- Paket layanan dengan pricing yang jelas dan transparan
- Sistem konsultasi gratis

### 💼 **Portfolio System**
- Showcase proyek dengan kategori filtering
- Detail proyek dengan teknologi yang digunakan
- Live demo dan source code links
- Admin panel untuk mengelola portfolio

### 💬 **Real-time Chat Support**
- Live chat menggunakan Supabase Realtime
- Floating chat widget
- Notifikasi real-time untuk pesan baru

### 👥 **Dashboard Klien**
- Tracking progress pesanan real-time
- Upload/download file hasil pekerjaan
- History transaksi dan pembayaran
- Sistem notifikasi email otomatis

### 🔧 **Dashboard Admin**
- Manajemen pesanan dan klien
- Upload hasil pekerjaan
- Analytics dan reporting
- Manajemen portfolio dan testimoni

### 📝 **Blog & Content Management**
- SEO-optimized blog system
- Content management untuk artikel
- Kategori dan tag system

### 🔐 **Authentication & Security**
- Supabase Auth dengan Google OAuth
- Role-based access control (Client/Admin)
- Secure file upload dan storage

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** - React framework dengan App Router
- **TypeScript** - Type safety dan better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations dan transitions
- **Lottie React** - High-quality animations
- **React Hook Form + Zod** - Form handling dengan validation
- **Lucide React** - Beautiful icons

### **Backend & Database**
- **Supabase** - Backend-as-a-Service
  - PostgreSQL database
  - Real-time subscriptions
  - Authentication & authorization
  - File storage
  - Edge functions

### **SEO & Performance**
- **Next SEO** - SEO optimization
- **Next.js Image Optimization** - Automatic image optimization
- **Responsive Design** - Mobile-first approach

## 📁 Struktur Project

```
kedjora/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles
│   │   └── favicon.ico        # Favicon
│   ├── components/            # Reusable components
│   │   ├── ui/               # Base UI components
│   │   ├── layout/           # Layout components
│   │   ├── sections/         # Page sections
│   │   └── forms/            # Form components
│   ├── lib/                  # Utilities & configurations
│   │   ├── supabase.ts       # Supabase client setup
│   │   └── utils.ts          # Helper functions
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript type definitions
│   ├── constants/            # App constants
│   └── styles/               # Additional styles
├── public/                   # Static assets
├── .env.local.example       # Environment variables template
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm atau yarn
- Supabase account

### Installation

1. **Clone repository**
```bash
git clone <repository-url>
cd kedjora
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
```

3. **Setup environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` dengan konfigurasi Anda:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Kedjora - Jasa Freelance
```

4. **Setup Supabase Database**
   - Buat project baru di [Supabase](https://supabase.com)
   - Jalankan SQL migrations (akan disediakan di folder `/database`)
   - Setup Row Level Security (RLS) policies

5. **Run development server**
```bash
npm run dev
# atau
yarn dev
```

6. **Open browser**
   Buka [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

### Core Tables
- `users` - User profiles dan authentication
- `services` - Layanan yang ditawarkan
- `orders` - Pesanan dari klien
- `portfolio` - Showcase proyek
- `testimonials` - Review dari klien
- `blog_posts` - Artikel blog
- `chat_rooms` & `chat_messages` - Live chat system

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray (#6B7280)
- **Accent**: Green (#10B981)
- **Background**: White/Dark mode support

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Font weight 600-800
- **Body**: Font weight 400-500

### Components
- Consistent spacing menggunakan Tailwind spacing scale
- Rounded corners dengan radius konsisten
- Shadow system untuk depth
- Hover states dan transitions

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Code Style
- ESLint + Prettier untuk code formatting
- TypeScript strict mode
- Conventional commits
- Component-based architecture

## 📱 Responsive Design

- **Mobile First**: Optimized untuk mobile devices
- **Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Connect repository di Vercel
3. Set environment variables
4. Deploy automatically

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔒 Security

- Environment variables untuk sensitive data
- Supabase RLS untuk database security
- Input validation dengan Zod
- CSRF protection
- Rate limiting untuk API endpoints

## 📈 Performance

- Next.js automatic code splitting
- Image optimization
- Lazy loading untuk components
- Caching strategies
- Bundle analysis

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

Untuk pertanyaan atau dukungan:
- Email: hello@kedjora.com
- WhatsApp: +62 812-3456-7890
- Website: [kedjora.com](https://kedjora.com)

---

**Dibuat dengan ❤️ menggunakan Next.js dan Supabase**
