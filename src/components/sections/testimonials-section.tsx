'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, User, Play, Pause, ThumbsUp, MessageSquare } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

// Mock data - replace with actual data from database
const testimonials = [
  {
    id: 1,
    name: 'Sarah Wijaya',
    role: 'CEO, Fashion Store',
    company: 'StyleHub Indonesia',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Wijaya&background=gradient&color=fff',
    rating: 5,
    message: 'Kedjora benar-benar mengubah kehadiran online kami secara total! Website e-commerce yang mereka buat tidak hanya cantik tapi juga sangat fungsional. Penjualan kami meningkat 300% dalam bulan pertama. Perhatian tim terhadap detail dan responsivitas selama proyek sangat luar biasa.',
    project: 'Platform E-Commerce',
    projectType: 'website',
    result: '+300% Pertumbuhan Penjualan',
    duration: '6 minggu',
  },
  {
    id: 2,
    name: 'Ahmad Rizki',
    role: 'Mahasiswa Teknik Informatika',
    company: 'Universitas Indonesia',
    avatar: 'https://ui-avatars.com/api/?name=Ahmad+Rizki&background=10b981&color=fff',
    rating: 5,
    message: 'Bantuan akademik yang saya terima untuk skripsi sangat luar biasa! Bimbingannya detail, profesional, dan membantu saya memahami konsep yang kompleks. Saya lulus dengan predikat cumlaude berkat dukungan mereka. Sangat merekomendasikan layanan akademik mereka!',
    project: 'Skripsi Sistem Informasi',
    projectType: 'academic',
    result: 'Lulus Cumlaude',
    duration: '3 bulan',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Pemilik Restoran',
    company: 'Warung Nusantara Chain',
    avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=f59e0b&color=fff',
    rating: 5,
    message: 'Sistem POS yang mereka kembangkan merevolusi operasional restoran kami. Antarmukanya intuitif, dan fitur-fitur komprehensifnya membantu kami mengelola semuanya dengan efisien. Staff kami cepat beradaptasi, dan kami melihat peningkatan signifikan dalam akurasi pesanan dan kecepatan.',
    project: 'Sistem POS Restoran',
    projectType: 'app',
    result: '+40% Efisiensi',
    duration: '8 minggu',
  },
  {
    id: 4,
    name: 'Lisa Chen',
    role: 'Direktur Marketing',
    company: 'Digital Innovation Co.',
    avatar: 'https://ui-avatars.com/api/?name=Lisa+Chen&background=8b5cf6&color=fff',
    rating: 5,
    message: 'Website perusahaan baru kami benar-benar menakjubkan! Desainnya elegan, profesional, dan merepresentasikan brand kami dengan sempurna. Feedback klien sangat positif, dan kami melihat peningkatan engagement dan inquiry melalui website.',
    project: 'Website Korporat',
    projectType: 'website',
    result: '+150% Lead Generation',
    duration: '4 minggu',
  },
  {
    id: 5,
    name: 'Dian Pratiwi',
    role: 'Mahasiswa Psikologi',
    company: 'Universitas Gadjah Mada',
    avatar: 'https://ui-avatars.com/api/?name=Dian+Pratiwi&background=ec4899&color=fff',
    rating: 5,
    message: 'Dukungan akademik yang saya terima luar biasa! Setiap tugas diselesaikan dengan kualitas exceptional dan selalu tepat waktu. Penjelasan detail yang diberikan membantu saya memahami materi dengan lebih baik. Layanan ini benar-benar menyelamatkan karir akademik saya.',
    project: 'Tugas Kuliah Psikologi',
    projectType: 'academic',
    result: 'IPK 3.8/4.0',
    duration: '1 semester',
  },
  {
    id: 6,
    name: 'Reza Firmansyah',
    role: 'Founder Startup',
    company: 'TechStart Indonesia',
    avatar: 'https://ui-avatars.com/api/?name=Reza+Firmansyah&background=06b6d4&color=fff',
    rating: 5,
    message: 'Pengembangan aplikasi mobile melampaui semua ekspektasi! Dari desain UI/UX hingga pengembangan backend, semuanya dieksekusi dengan sempurna. Aplikasi diluncurkan dengan sukses dan mendapat review pengguna yang excellent. Tim profesional dengan hasil yang menakjubkan!',
    project: 'Aplikasi Mobile Startup',
    projectType: 'app',
    result: '4.8★ Rating App Store',
    duration: '12 minggu',
  },
]

const projectTypeColors = {
  website: 'from-blue-500 to-cyan-500',
  app: 'from-purple-500 to-pink-500',
  academic: 'from-green-500 to-emerald-500',
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Client-side detection
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !isClient) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isClient])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        <Star
          className={`h-4 w-4 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      </motion.div>
    ))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-200/20 to-pink-200/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
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
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
              <ThumbsUp className="w-4 h-4" />
              Kisah Sukses Klien
            </div>
          </motion.div>
          
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Apa Kata
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Klien Luar Biasa Kami
            </span>
          </h2>
          
          <p className="text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
            Jangan hanya percaya kata-kata kami. Inilah yang dikatakan klien puas kami 
            tentang pengalaman bekerja dengan kami dan hasil yang mereka capai.
          </p>
        </motion.div>

        {/* Main Testimonial Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-20 max-w-6xl"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <Card className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${projectTypeColors[currentTestimonial.projectType as keyof typeof projectTypeColors]} opacity-5`} />
                  
                  {/* Floating quote icon */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                    className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center"
                  >
                    <Quote className="h-8 w-8 text-purple-500/60" />
                  </motion.div>

                  <CardContent className="p-12 relative z-10">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      {/* Client Info */}
                      <div className="lg:col-span-1 text-center lg:text-left">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative inline-block mb-6"
                        >
                          <div className="w-24 h-24 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                              <User className="h-12 w-12 text-purple-500" />
                            </div>
                          </div>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                          >
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {currentTestimonial.name}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-1">
                          {currentTestimonial.role}
                        </p>
                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-4">
                          {currentTestimonial.company}
                        </p>
                        
                        <div className="flex justify-center lg:justify-start items-center gap-1 mb-6">
                          {renderStars(currentTestimonial.rating)}
                          <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            {currentTestimonial.rating}/5
                          </span>
                        </div>

                        {/* Project info */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-center lg:justify-start gap-2">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${projectTypeColors[currentTestimonial.projectType as keyof typeof projectTypeColors]}`} />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              {currentTestimonial.project}
                            </span>
                          </div>
                          <div className="text-center lg:text-left">
                            <div className="text-sm text-muted-foreground">Durasi: {currentTestimonial.duration}</div>
                            <div className="text-lg font-bold text-green-600">{currentTestimonial.result}</div>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="lg:col-span-2">
                        <motion.blockquote
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-xl leading-relaxed text-foreground mb-8 relative"
                        >
                          <span className="text-6xl text-purple-500/20 absolute -top-4 -left-4 font-serif">&ldquo;</span>
                          <span className="relative z-10">{currentTestimonial.message}</span>
                          <span className="text-6xl text-purple-500/20 absolute -bottom-8 -right-4 font-serif">&rdquo;</span>
                        </motion.blockquote>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex items-center gap-4">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <MessageSquare className="w-4 h-4" />
                              <span>Review Terverifikasi</span>
                            </motion.div>
                          </div>
                          
                          <motion.button
                            onClick={toggleAutoPlay}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium"
                          >
                            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            {isAutoPlaying ? 'Jeda' : 'Putar'}
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={goToPrevious}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            
            <motion.button
              onClick={goToNext}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: isAutoPlaying ? 6 : 0 }}
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            />
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              >
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Mini testimonials grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(testimonial.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
              onClick={() => goToSlide(index)}
            >
              <Card className="relative overflow-hidden bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${projectTypeColors[testimonial.projectType as keyof typeof projectTypeColors]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto flex">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                    {testimonial.message}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-purple-600 dark:text-purple-400 font-medium">
                      {testimonial.project}
                    </span>
                    <span className="text-green-600 font-medium">
                      {testimonial.result}
                    </span>
                  </div>
                </CardContent>

                {/* Hover effect indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredCard === testimonial.id ? 1 : 0 }}
                  className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                >
                  <ChevronRight className="h-3 w-3 text-white" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
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
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  className="text-4xl font-bold mb-2"
                >
                  4.9★
                </motion.div>
                <div className="text-purple-100 font-medium">Rating Rata-rata</div>
                <div className="text-xs text-purple-200 mt-1">Dari 300+ review</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-4xl font-bold mb-2"
                >
                  300+
                </motion.div>
                <div className="text-purple-100 font-medium">Klien Senang</div>
                <div className="text-xs text-purple-200 mt-1">Di seluruh dunia</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-4xl font-bold mb-2"
                >
                  500+
                </motion.div>
                <div className="text-purple-100 font-medium">Proyek Selesai</div>
                <div className="text-xs text-purple-200 mt-1">Sejak 2019</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  className="text-4xl font-bold mb-2"
                >
                  98%
                </motion.div>
                <div className="text-purple-100 font-medium">Tingkat Sukses</div>
                <div className="text-xs text-purple-200 mt-1">Delivery proyek</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}