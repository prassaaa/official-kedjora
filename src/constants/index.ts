export const SITE_CONFIG = {
  name: 'Kedjora',
  title: 'Kedjora - Jasa Freelance Website, Aplikasi & Skripsi',
  description: 'Layanan profesional pembuatan website, aplikasi mobile, dan bantuan tugas kuliah/skripsi dengan kualitas terbaik dan harga terjangkau.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  links: {
    whatsapp: 'https://wa.me/6281234567890',
    telegram: 'https://t.me/kedjora',
    email: 'hello@kedjora.com',
    instagram: 'https://instagram.com/kedjora',
  }
}

export const SERVICES = {
  WEBSITE: {
    id: 'website',
    name: 'Pembuatan Website',
    description: 'Website profesional untuk bisnis dan personal',
    packages: [
      {
        id: 'basic',
        name: 'Basic',
        price: 500000,
        features: [
          'Landing Page Responsif',
          'Domain & Hosting 1 Tahun',
          'SSL Certificate',
          'SEO Basic',
          '3x Revisi'
        ],
        delivery_time: 7,
        revisions: 3
      },
      {
        id: 'standard',
        name: 'Standard',
        price: 1500000,
        features: [
          'Website Multi-Page',
          'Admin Panel',
          'Contact Form',
          'Google Analytics',
          'SEO Optimized',
          '5x Revisi'
        ],
        delivery_time: 14,
        revisions: 5
      },
      {
        id: 'premium',
        name: 'Premium',
        price: 3000000,
        features: [
          'E-commerce/Custom Features',
          'Database Integration',
          'Payment Gateway',
          'Advanced SEO',
          'Maintenance 3 Bulan',
          'Unlimited Revisi'
        ],
        delivery_time: 21,
        revisions: -1
      }
    ]
  },
  APP: {
    id: 'app',
    name: 'Pembuatan Aplikasi',
    description: 'Aplikasi mobile dan web untuk berbagai kebutuhan',
    packages: [
      {
        id: 'basic',
        name: 'Basic',
        price: 2000000,
        features: [
          'Aplikasi Android/iOS',
          'UI/UX Design',
          'Basic Features',
          'Testing',
          '3x Revisi'
        ],
        delivery_time: 21,
        revisions: 3
      },
      {
        id: 'standard',
        name: 'Standard',
        price: 5000000,
        features: [
          'Cross-Platform App',
          'Backend Integration',
          'Push Notifications',
          'Analytics',
          '5x Revisi'
        ],
        delivery_time: 30,
        revisions: 5
      },
      {
        id: 'premium',
        name: 'Premium',
        price: 10000000,
        features: [
          'Advanced Features',
          'Real-time Features',
          'Payment Integration',
          'Admin Dashboard',
          'Maintenance 6 Bulan',
          'Unlimited Revisi'
        ],
        delivery_time: 45,
        revisions: -1
      }
    ]
  },
  ACADEMIC: {
    id: 'academic',
    name: 'Joki Tugas & Skripsi',
    description: 'Bantuan tugas kuliah dan skripsi berkualitas',
    packages: [
      {
        id: 'assignment',
        name: 'Tugas Kuliah',
        price: 50000,
        features: [
          'Tugas Harian/Mingguan',
          'Berbagai Mata Kuliah',
          'Plagiarism Check',
          'Revisi Gratis',
          'Konsultasi'
        ],
        delivery_time: 3,
        revisions: 2
      },
      {
        id: 'thesis',
        name: 'Skripsi/Thesis',
        price: 2000000,
        features: [
          'Skripsi Lengkap',
          'Bimbingan Intensif',
          'Revisi Unlimited',
          'Presentasi Support',
          'Garansi Lulus'
        ],
        delivery_time: 60,
        revisions: -1
      }
    ]
  }
}

export const ORDER_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  REVIEW: 'review',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
} as const

export const USER_ROLES = {
  CLIENT: 'client',
  ADMIN: 'admin'
} as const

export const CHAT_STATUS = {
  ACTIVE: 'active',
  CLOSED: 'closed'
} as const
