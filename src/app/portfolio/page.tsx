'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Search, Monitor, Smartphone, GraduationCap, Sparkles, Star, ArrowRight, Eye, Github, Calendar, Award, Zap, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
    year: '2024',
    client: 'Fashion Brand X',
    duration: '2 bulan'
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
    year: '2024',
    client: 'Bank Digital',
    duration: '4 bulan'
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
    year: '2023',
    client: 'Universitas ABC',
    duration: '3 bulan'
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
    year: '2024',
    client: 'Restaurant Chain',
    duration: '3 bulan'
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
    year: '2023',
    client: 'Fitness Startup',
    duration: '2 bulan'
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
    year: '2024',
    client: 'EdTech Company',
    duration: '5 bulan'
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
    year: '2023',
    client: 'PropTech Startup',
    duration: '4 bulan'
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
    year: '2023',
    client: 'HealthTech',
    duration: '3 bulan'
  }
]

const categories = [
  { 
    id: 'all', 
    name: 'Semua Proyek', 
    count: portfolioItems.length, 
    icon: Star,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    id: 'website', 
    name: 'Website', 
    count: portfolioItems.filter(item => item.category === 'website').length,
    icon: Monitor,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    id: 'app', 
    name: 'Aplikasi Mobile', 
    count: portfolioItems.filter(item => item.category === 'app').length,
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    id: 'academic', 
    name: 'Akademik', 
    count: portfolioItems.filter(item => item.category === 'academic').length,
    icon: GraduationCap,
    color: 'from-green-500 to-emerald-500'
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'website':
      return 'from-blue-500 to-cyan-500'
    case 'app':
      return 'from-purple-500 to-pink-500'
    case 'academic':
      return 'from-green-500 to-emerald-500'
    default:
      return 'from-gray-500 to-gray-600'
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'website':
      return Monitor
    case 'app':
      return Smartphone
    case 'academic':
      return GraduationCap
    default:
      return Star
  }
}

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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-200/20 to-pink-200/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Portfolio & Showcase
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-6"
          >
            <Award className="h-12 w-12 text-white" />
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Portfolio Kami
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Karya Digital Terbaik
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Jelajahi koleksi proyek digital terbaik yang telah kami kerjakan. Dari website modern hingga aplikasi mobile inovatif, 
            setiap proyek mencerminkan dedikasi kami terhadap kualitas, inovasi, dan kepuasan klien.
          </p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{portfolioItems.length}+</div>
              <div className="text-sm text-muted-foreground">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Kategori Portfolio
            </h2>
            <p className="text-lg text-muted-foreground">
              Pilih kategori untuk melihat proyek sesuai kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 h-full relative overflow-hidden ${
                    activeCategory === category.id 
                      ? 'ring-2 ring-purple-500 shadow-xl shadow-purple-500/25 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20' 
                      : 'hover:shadow-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-purple-600 transition-colors">
                      {category.name}
                    </CardTitle>
                    
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Badge variant="outline" className="text-sm">
                        {category.count} proyek
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Cari proyek atau teknologi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-base rounded-xl border-2 bg-white/80 backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {/* Results Counter */}
        {filteredItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground">
              Menampilkan <span className="font-semibold text-foreground">{filteredItems.length}</span> proyek
              {activeCategory !== 'all' && (
                <span> dalam kategori <span className="font-semibold text-purple-600">{categories.find(c => c.id === activeCategory)?.name}</span></span>
              )}
            </p>
          </motion.div>
        )}

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const CategoryIcon = getCategoryIcon(item.category)
              const categoryColor = getCategoryColor(item.category)
              
              return (
                <motion.div
                  key={`${activeCategory}-${item.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layout
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                    {/* Image Section */}
                    <div className="relative aspect-video overflow-hidden">
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                        <div className="text-center p-6">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={`w-20 h-20 bg-gradient-to-r ${categoryColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                          >
                            <CategoryIcon className="h-10 w-10 text-white" />
                          </motion.div>
                          <p className="text-sm text-muted-foreground font-medium">Portfolio Preview</p>
                        </div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                        <div className="flex gap-3">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                              <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">
                                <Eye className="h-4 w-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          </motion.div>
                          {item.githubUrl && (
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button size="sm" variant="outline" className="bg-black/20 border-white/30 text-white hover:bg-white/20" asChild>
                                <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4 mr-2" />
                                  Code
                                </a>
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`bg-gradient-to-r ${categoryColor} text-white border-0 capitalize font-semibold`}>
                          <CategoryIcon className="h-3 w-3 mr-1" />
                          {item.category === 'website' ? 'Website' : 
                           item.category === 'app' ? 'Mobile App' : 'Academic'}
                        </Badge>
                      </div>
                      
                      {/* Featured Badge */}
                      {item.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 font-semibold">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-purple-600 transition-colors line-clamp-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{item.year}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Client & Duration */}
                      <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
                        <span>👤 {item.client}</span>
                        <span>⏱️ {item.duration}</span>
                      </div>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.slice(0, 3).map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className={`inline-flex items-center rounded-full bg-gradient-to-r ${categoryColor} px-3 py-1 text-xs font-medium text-white shadow-sm`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {item.technologies.length > 3 && (
                          <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-muted-foreground">
                            +{item.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Search className="w-12 h-12 text-white" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-foreground mb-3">Tidak ada hasil ditemukan</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Maaf, tidak ada proyek yang cocok dengan kriteria pencarian Anda. 
              Coba ubah kata kunci atau filter kategori.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => {
                  setActiveCategory('all')
                  setSearchQuery('')
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Reset Filter
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background animation */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear"
              }}
              className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"
            />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8" />
                </div>
              </motion.div>
              
              <h2 className="text-3xl font-bold mb-4">
                Tertarik dengan Karya Kami?
              </h2>
              
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Mari wujudkan proyek digital impian Anda bersama tim expert kami. 
                Dari konsep hingga launch, kami siap menghadirkan solusi terbaik untuk kebutuhan Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-6 text-base shadow-2xl min-w-[200px]">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Mulai Proyek Anda
                    </Button>
                  </motion.div>
                </Link>
                
                <Link href="/services">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-base min-w-[200px]">
                      <Award className="mr-2 h-5 w-5" />
                      Lihat Layanan
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}