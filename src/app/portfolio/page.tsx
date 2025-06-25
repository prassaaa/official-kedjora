'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, Filter, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

// Mock data - replace with actual data from database
const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Fashion Store',
    description: 'Platform e-commerce modern dengan fitur lengkap untuk toko fashion online. Dilengkapi dengan sistem pembayaran, manajemen inventory, dan dashboard admin yang komprehensif.',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Stripe', 'Vercel'],
    projectUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true,
    year: '2024'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Aplikasi mobile banking dengan UI/UX modern dan fitur keamanan tinggi. Mendukung transfer, pembayaran, dan monitoring keuangan real-time.',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Firebase'],
    projectUrl: 'https://demo-banking.example.com',
    githubUrl: null,
    featured: true,
    year: '2024'
  },
  {
    id: 3,
    title: 'Sistem Manajemen Skripsi',
    description: 'Platform digital untuk manajemen dan monitoring progress skripsi mahasiswa. Dilengkapi dengan sistem bimbingan online dan tracking milestone.',
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
    technologies: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js', 'WebSocket'],
    projectUrl: 'https://demo-thesis.example.com',
    githubUrl: 'https://github.com/example/thesis-management',
    featured: false,
    year: '2023'
  },
  {
    id: 4,
    title: 'Restaurant Management System',
    description: 'Sistem manajemen restoran dengan POS dan inventory management. Mendukung multi-outlet dan real-time reporting.',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'PWA'],
    projectUrl: 'https://demo-restaurant.example.com',
    githubUrl: null,
    featured: true,
    year: '2024'
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    description: 'Aplikasi tracking fitness dengan fitur workout planner dan nutrition guide. Terintegrasi dengan wearable devices.',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    technologies: ['Flutter', 'Firebase', 'Google Fit API', 'HealthKit', 'ML Kit'],
    projectUrl: 'https://demo-fitness.example.com',
    githubUrl: 'https://github.com/example/fitness-app',
    featured: false,
    year: '2023'
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'Platform e-learning dengan fitur video streaming, quiz interaktif, dan progress tracking untuk institusi pendidikan.',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis', 'AWS S3'],
    projectUrl: 'https://demo-lms.example.com',
    githubUrl: 'https://github.com/example/lms',
    featured: true,
    year: '2024'
  },
  {
    id: 7,
    title: 'Real Estate Platform',
    description: 'Platform properti dengan fitur pencarian advanced, virtual tour, dan sistem booking viewing.',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Mapbox', 'Cloudinary'],
    projectUrl: 'https://demo-realestate.example.com',
    githubUrl: null,
    featured: false,
    year: '2023'
  },
  {
    id: 8,
    title: 'Healthcare Mobile App',
    description: 'Aplikasi kesehatan untuk konsultasi dokter online, booking appointment, dan tracking kesehatan.',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
    projectUrl: 'https://demo-healthcare.example.com',
    githubUrl: 'https://github.com/example/healthcare-app',
    featured: false,
    year: '2023'
  }
]

const categories = [
  { id: 'all', name: 'Semua', count: portfolioItems.length },
  { id: 'website', name: 'Website', count: portfolioItems.filter(item => item.category === 'website').length },
  { id: 'app', name: 'Aplikasi', count: portfolioItems.filter(item => item.category === 'app').length },
  { id: 'academic', name: 'Akademik', count: portfolioItems.filter(item => item.category === 'academic').length },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredItems, setFilteredItems] = useState(portfolioItems)

  useEffect(() => {
    let filtered = portfolioItems

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    setFilteredItems(filtered)
  }, [activeCategory, searchQuery])

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">
          Portfolio Kami
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Lihat koleksi proyek terbaik yang telah kami kerjakan. Dari website modern hingga aplikasi mobile inovatif, 
          setiap proyek mencerminkan dedikasi kami terhadap kualitas dan inovasi.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {category.name}
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari proyek atau teknologi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${activeCategory}-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              layout
            >
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <ExternalLink className="h-8 w-8 text-primary/60" />
                      </div>
                      <p className="text-sm text-muted-foreground">Portfolio Image</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    {item.githubUrl && (
                      <Button size="sm" variant="secondary" asChild>
                        <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="default" className="capitalize">
                      {item.category === 'website' ? 'Website' : 
                       item.category === 'app' ? 'Aplikasi' : 'Akademik'}
                    </Badge>
                  </div>
                  
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        +{item.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">Tidak ada hasil ditemukan</h3>
          <p className="text-muted-foreground mb-6">
            Coba ubah filter atau kata kunci pencarian Anda
          </p>
          <Button 
            onClick={() => {
              setActiveCategory('all')
              setSearchQuery('')
            }}
            variant="outline"
          >
            Reset Filter
          </Button>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-16 bg-muted/30 rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold mb-4">
          Tertarik dengan Proyek Kami?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Mari diskusikan proyek Anda dan wujudkan ide digital yang Anda impikan. 
          Tim ahli kami siap membantu dari konsep hingga implementasi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="min-w-[200px]">
              Mulai Proyek Anda
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Lihat Layanan
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
