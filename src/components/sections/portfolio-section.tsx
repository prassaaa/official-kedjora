'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Code, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Mock data - replace with actual data from database
const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Fashion Store',
    description: 'Platform e-commerce modern dengan fitur lengkap untuk toko fashion online',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Stripe'],
    projectUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    featured: true,
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Aplikasi mobile banking dengan UI/UX modern dan fitur keamanan tinggi',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
    projectUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Sistem Manajemen Skripsi',
    description: 'Platform digital untuk manajemen dan monitoring progress skripsi mahasiswa',
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
    technologies: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'],
    projectUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Restaurant Management System',
    description: 'Sistem manajemen restoran dengan POS dan inventory management',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
    projectUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    description: 'Aplikasi tracking fitness dengan fitur workout planner dan nutrition guide',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    technologies: ['Flutter', 'Firebase', 'Google Fit API'],
    projectUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Thesis Research Platform',
    description: 'Platform penelitian untuk mahasiswa dengan database jurnal dan tools analisis',
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    technologies: ['Django', 'PostgreSQL', 'Elasticsearch', 'D3.js'],
    projectUrl: 'https://example.com',
    featured: false,
  },
]

const categories = [
  { id: 'all', name: 'Semua' },
  { id: 'website', name: 'Website' },
  { id: 'app', name: 'Aplikasi' },
  { id: 'academic', name: 'Akademik' },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredItems = activeCategory === 'all' 
    ? portfolioItems.slice(0, 6) // Show only 6 items on homepage
    : portfolioItems.filter(item => item.category === activeCategory).slice(0, 6)

  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Portfolio Terbaru Kami
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Lihat hasil karya terbaik kami yang telah membantu klien mencapai tujuan digital mereka
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex flex-wrap justify-center gap-2 rounded-lg bg-muted p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
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
                            <Code className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link href="/portfolio">
            <Button size="lg" className="group">
              Lihat Semua Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
