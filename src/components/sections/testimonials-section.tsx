'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Mock data - replace with actual data from database
const testimonials = [
  {
    id: 1,
    name: 'Sarah Wijaya',
    role: 'CEO, Fashion Store',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Wijaya&background=3b82f6&color=fff',
    rating: 5,
    message: 'Website e-commerce yang dibuat sangat profesional dan user-friendly. Penjualan online kami meningkat 300% setelah menggunakan website baru. Tim Kedjora sangat responsif dan detail dalam pengerjaan.',
    project: 'E-Commerce Website',
  },
  {
    id: 2,
    name: 'Ahmad Rizki',
    role: 'Mahasiswa Teknik Informatika',
    avatar: 'https://ui-avatars.com/api/?name=Ahmad+Rizki&background=10b981&color=fff',
    rating: 5,
    message: 'Bantuan untuk skripsi sangat membantu! Mendapat bimbingan yang detail dan berkualitas. Alhamdulillah skripsi saya lulus dengan nilai A. Terima kasih Kedjora!',
    project: 'Skripsi Sistem Informasi',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Owner, Restaurant Chain',
    avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=f59e0b&color=fff',
    rating: 5,
    message: 'Aplikasi POS untuk restoran kami sangat membantu dalam mengelola operasional. Interface yang mudah digunakan dan fitur-fitur yang lengkap. Highly recommended!',
    project: 'Restaurant POS App',
  },
  {
    id: 4,
    name: 'Lisa Chen',
    role: 'Marketing Manager',
    avatar: 'https://ui-avatars.com/api/?name=Lisa+Chen&background=8b5cf6&color=fff',
    rating: 5,
    message: 'Website company profile yang dibuat sangat elegan dan profesional. Banyak klien yang memberikan feedback positif tentang website kami. Great job!',
    project: 'Company Profile Website',
  },
  {
    id: 5,
    name: 'Dian Pratiwi',
    role: 'Mahasiswa Psikologi',
    avatar: 'https://ui-avatars.com/api/?name=Dian+Pratiwi&background=ec4899&color=fff',
    rating: 5,
    message: 'Tugas-tugas kuliah yang dibantu selalu berkualitas dan tepat waktu. Penjelasan yang diberikan juga sangat detail sehingga saya bisa memahami materinya dengan baik.',
    project: 'Tugas Kuliah Psikologi',
  },
  {
    id: 6,
    name: 'Reza Firmansyah',
    role: 'Startup Founder',
    avatar: 'https://ui-avatars.com/api/?name=Reza+Firmansyah&background=06b6d4&color=fff',
    rating: 5,
    message: 'Aplikasi mobile untuk startup kami dikerjakan dengan sangat profesional. Dari UI/UX design hingga development, semuanya sesuai ekspektasi bahkan lebih!',
    project: 'Mobile App Development',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isClient, setIsClient] = useState(false)

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
    }, 5000)

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Apa Kata Klien Kami?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Kepuasan klien adalah prioritas utama kami. Lihat testimoni dari klien yang telah mempercayai layanan kami
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="relative overflow-hidden">
                  <CardContent className="p-8 sm:p-12">
                    <Quote className="h-8 w-8 text-primary/20 mb-6" />
                    
                    <blockquote className="text-lg leading-8 text-foreground mb-8">
                      &ldquo;{testimonials[currentIndex].message}&rdquo;
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <User className="h-6 w-6 text-primary/60" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          {renderStars(testimonials[currentIndex].rating)}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">
                          {testimonials[currentIndex].project}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-background border shadow-lg p-2 hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-background border shadow-lg p-2 hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Rating Rata-rata</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">300+</div>
              <div className="text-sm text-muted-foreground">Klien Puas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Proyek Selesai</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link href="/testimonials">
            <Button variant="outline" size="lg">
              Lihat Semua Testimoni
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
