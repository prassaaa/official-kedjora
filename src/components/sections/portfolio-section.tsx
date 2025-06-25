'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Code, ArrowRight, Star, Eye, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Mock data - replace with actual data from database
const portfolioItems = [
  {
    id: 1,
    title: 'Toko Fashion E-Commerce',
    description: 'Platform e-commerce modern dengan fitur lengkap untuk retail fashion online, termasuk manajemen inventori, integrasi pembayaran, dan analitik pelanggan',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Stripe'],
    projectUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    featured: true,
    rating: 4.9,
    views: 1250,
    completedDate: '2024-01',
  },
  {
    id: 2,
    title: 'Aplikasi Mobile Banking',
    description: 'Aplikasi mobile banking yang aman dengan desain UI/UX modern, dilengkapi autentikasi biometrik, riwayat transaksi, dan analitik keuangan',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
    projectUrl: 'https://example.com',
    featured: true,
    rating: 4.8,
    views: 980,
    completedDate: '2024-02',
  },
  {
    id: 3,
    title: 'Sistem Manajemen Akademik',
    description: 'Platform digital untuk manajemen skripsi dan monitoring progress mahasiswa dengan workflow otomatis dan fitur kolaborasi pembimbing',
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
    technologies: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'],
    projectUrl: 'https://example.com',
    featured: false,
    rating: 4.7,
    views: 720,
    completedDate: '2023-12',
  },
  {
    id: 4,
    title: 'Sistem POS Restoran',
    description: 'Sistem manajemen restoran komprehensif dengan POS real-time, tracking inventori, dan manajemen hubungan pelanggan',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
    projectUrl: 'https://example.com',
    featured: true,
    rating: 4.9,
    views: 1450,
    completedDate: '2024-03',
  },
  {
    id: 5,
    title: 'Aplikasi Tracking Fitness',
    description: 'Aplikasi fitness komprehensif dengan perencanaan workout, tracking nutrisi, dan fitur sosial untuk penggemar fitness',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    technologies: ['Flutter', 'Firebase', 'Google Fit API'],
    projectUrl: 'https://example.com',
    featured: false,
    rating: 4.6,
    views: 890,
    completedDate: '2024-01',
  },
  {
    id: 6,
    title: 'Platform Kolaborasi Riset',
    description: 'Platform riset canggih dengan database jurnal, tools analitik, dan fitur kolaboratif untuk penelitian akademik',
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    technologies: ['Django', 'PostgreSQL', 'Elasticsearch', 'D3.js'],
    projectUrl: 'https://example.com',
    featured: false,
    rating: 4.8,
    views: 650,
    completedDate: '2023-11',
  },
]

const categories = [
  { id: 'all', name: 'Semua Proyek', count: portfolioItems.length },
  { id: 'website', name: 'Website', count: portfolioItems.filter(item => item.category === 'website').length },
  { id: 'app', name: 'Aplikasi Mobile', count: portfolioItems.filter(item => item.category === 'app').length },
  { id: 'academic', name: 'Akademik', count: portfolioItems.filter(item => item.category === 'academic').length },
]

const categoryColors = {
  website: 'from-blue-500 to-cyan-500',
  app: 'from-purple-500 to-pink-500',
  academic: 'from-green-500 to-emerald-500',
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const filteredItems = activeCategory === 'all' 
    ? portfolioItems.slice(0, 6)
    : portfolioItems.filter(item => item.category === activeCategory).slice(0, 6)

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"
          style={{ maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
              <Star className="w-4 h-4" />
              Portfolio Unggulan
            </div>
          </motion.div>
          
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Karya Terbaru
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Kisah Sukses Kami
            </span>
          </h2>
          
          <p className="text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
            Jelajahi portfolio solusi digital inovatif kami yang telah membantu klien 
            mencapai tujuan bisnis mereka dan melampaui ekspektasi.
          </p>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-3 gap-6 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-muted-foreground">Proyek</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">300+</div>
              <div className="text-sm text-muted-foreground">Klien Senang</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.9★</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex flex-wrap justify-center gap-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-2 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/80 dark:hover:bg-gray-700/80'
                }`}
              >
                <span className="relative z-10">
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </span>
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${activeCategory}-${item.id}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredCard(item.id)}
                onHoverEnd={() => setHoveredCard(null)}
                layout
                className="group"
              >
                <Card className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/20">
                  {/* Featured badge */}
                  {item.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                    >
                      <Star className="w-3 h-3" />
                      Unggulan
                    </motion.div>
                  )}

                  {/* Image container */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay with actions */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === item.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center gap-3"
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: hoveredCard === item.id ? 0 : 20, opacity: hoveredCard === item.id ? 1 : 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Button size="sm" className="bg-white/90 text-black hover:bg-white" asChild>
                          <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo Langsung
                          </a>
                        </Button>
                      </motion.div>
                      
                      {item.githubUrl && (
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: hoveredCard === item.id ? 0 : 20, opacity: hoveredCard === item.id ? 1 : 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Button size="sm" variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Code className="h-4 w-4 mr-2" />
                              Kode
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Category indicator */}
                    <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${categoryColors[item.category as keyof typeof categoryColors]} opacity-80`} />
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    {/* Title and description */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Project stats */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span className="font-medium">{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{item.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{item.completedDate}</span>
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-700/50"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300">
                          +{item.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Progress bar animation */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
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
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear"
              }}
              className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
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
                  <ArrowRight className="w-8 h-8" />
                </div>
              </motion.div>
              
              <h3 className="text-3xl font-bold mb-4">
                Ingin Melihat Karya Luar Biasa Lainnya?
              </h3>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Temukan portfolio lengkap proyek sukses kami dan lihat bagaimana kami dapat 
                mewujudkan visi Anda dengan teknologi mutakhir dan solusi kreatif.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/portfolio">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-6 text-base shadow-2xl"
                    >
                      <Eye className="mr-2 h-5 w-5" />
                      Lihat Portfolio Lengkap
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                
                <Link href="/contact">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-base"
                    >
                      Mulai Proyek Anda
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}