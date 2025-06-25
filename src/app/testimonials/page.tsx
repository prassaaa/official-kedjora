'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Star, Quote, Send, CheckCircle, Filter, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

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
    category: 'website',
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Ahmad Rizki',
    role: 'Mahasiswa Teknik Informatika',
    avatar: 'https://ui-avatars.com/api/?name=Ahmad+Rizki&background=10b981&color=fff',
    rating: 5,
    message: 'Bantuan untuk skripsi sangat membantu! Mendapat bimbingan yang detail dan berkualitas. Alhamdulillah skripsi saya lulus dengan nilai A. Terima kasih Kedjora!',
    project: 'Skripsi Sistem Informasi',
    category: 'academic',
    date: '2024-02-20'
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Owner, Restaurant Chain',
    avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=f59e0b&color=fff',
    rating: 5,
    message: 'Aplikasi POS untuk restoran kami sangat membantu dalam mengelola operasional. Interface yang mudah digunakan dan fitur-fitur yang lengkap. Highly recommended!',
    project: 'Restaurant POS App',
    category: 'app',
    date: '2024-03-10'
  },
  {
    id: 4,
    name: 'Lisa Chen',
    role: 'Marketing Manager',
    avatar: 'https://ui-avatars.com/api/?name=Lisa+Chen&background=ef4444&color=fff',
    rating: 5,
    message: 'Website company profile yang dibuat sangat elegan dan profesional. Banyak klien yang memberikan feedback positif tentang website kami. Great job!',
    project: 'Company Profile Website',
    category: 'website',
    date: '2024-01-25'
  },
  {
    id: 5,
    name: 'Dian Pratiwi',
    role: 'Mahasiswa Psikologi',
    avatar: 'https://ui-avatars.com/api/?name=Dian+Pratiwi&background=8b5cf6&color=fff',
    rating: 5,
    message: 'Tugas-tugas kuliah yang dibantu selalu berkualitas dan tepat waktu. Penjelasan yang diberikan juga sangat detail sehingga saya bisa memahami materinya dengan baik.',
    project: 'Tugas Kuliah Psikologi',
    category: 'academic',
    date: '2024-02-05'
  },
  {
    id: 6,
    name: 'Reza Firmansyah',
    role: 'Startup Founder',
    avatar: 'https://ui-avatars.com/api/?name=Reza+Firmansyah&background=06b6d4&color=fff',
    rating: 5,
    message: 'Aplikasi mobile untuk startup kami dikerjakan dengan sangat profesional. Dari UI/UX design hingga development, semuanya sesuai ekspektasi bahkan lebih!',
    project: 'Mobile App Development',
    category: 'app',
    date: '2024-03-15'
  },
  {
    id: 7,
    name: 'Maya Sari',
    role: 'Online Shop Owner',
    avatar: 'https://ui-avatars.com/api/?name=Maya+Sari&background=ec4899&color=fff',
    rating: 5,
    message: 'Website toko online yang dibuat sangat membantu bisnis saya. Fitur-fitur lengkap dan mudah digunakan. Customer service juga sangat responsif.',
    project: 'Online Store Website',
    category: 'website',
    date: '2024-01-30'
  },
  {
    id: 8,
    name: 'Andi Wijaya',
    role: 'Mahasiswa Teknik',
    avatar: 'https://ui-avatars.com/api/?name=Andi+Wijaya&background=84cc16&color=fff',
    rating: 5,
    message: 'Bantuan untuk tugas akhir sangat berkualitas. Hasilnya memuaskan dan sesuai dengan standar kampus. Proses revisi juga cepat dan mudah.',
    project: 'Tugas Akhir Teknik',
    category: 'academic',
    date: '2024-02-28'
  }
]

const categories = [
  { id: 'all', name: 'Semua', count: testimonials.length },
  { id: 'website', name: 'Website', count: testimonials.filter(t => t.category === 'website').length },
  { id: 'app', name: 'Aplikasi', count: testimonials.filter(t => t.category === 'app').length },
  { id: 'academic', name: 'Akademik', count: testimonials.filter(t => t.category === 'academic').length },
]

const testimonialSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  role: z.string().min(2, 'Peran/jabatan minimal 2 karakter'),
  project: z.string().min(2, 'Nama proyek minimal 2 karakter'),
  rating: z.number().min(1).max(5),
  message: z.string().min(10, 'Testimoni minimal 10 karakter'),
})

type TestimonialFormData = z.infer<typeof testimonialSchema>

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      rating: 5
    }
  })

  const rating = watch('rating')

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory)

  const onSubmit = async (data: TestimonialFormData) => {
    setIsSubmitting(true)
    
    try {
      // TODO: Implement actual form submission to Supabase
      console.log('Testimonial data:', data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
      reset()
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setShowForm(false)
      }, 3000)
    } catch (error) {
      console.error('Error submitting testimonial:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
        onClick={interactive && onRate ? () => onRate(i + 1) : undefined}
      />
    ))
  }

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
          Testimoni Klien
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Kepuasan klien adalah prioritas utama kami. Lihat apa kata mereka tentang layanan dan kualitas pekerjaan kami.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <div className="text-sm text-muted-foreground">Rating Rata-rata</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-primary mb-2">300+</div>
            <div className="text-sm text-muted-foreground">Klien Puas</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Proyek Selesai</div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters and Add Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12"
      >
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

        {/* Add Testimonial Button */}
        <Button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Tambah Testimoni
        </Button>
      </motion.div>

      {/* Add Testimonial Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Bagikan Pengalaman Anda</CardTitle>
                <CardDescription>
                  Testimoni Anda akan membantu calon klien lain untuk mengenal kualitas layanan kami
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Testimoni Terkirim!
                    </h3>
                    <p className="text-muted-foreground">
                      Terima kasih! Testimoni Anda akan ditampilkan setelah diverifikasi.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Nama Lengkap *
                        </label>
                        <Input
                          placeholder="Masukkan nama lengkap"
                          {...register('name')}
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          placeholder="nama@email.com"
                          {...register('email')}
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Peran/Jabatan *
                        </label>
                        <Input
                          placeholder="CEO, Mahasiswa, dll"
                          {...register('role')}
                          className={errors.role ? 'border-red-500' : ''}
                        />
                        {errors.role && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.role.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Nama Proyek *
                        </label>
                        <Input
                          placeholder="Website E-commerce, Aplikasi Mobile, dll"
                          {...register('project')}
                          className={errors.project ? 'border-red-500' : ''}
                        />
                        {errors.project && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.project.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Rating *
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {renderStars(rating, true, (newRating) => setValue('rating', newRating))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({rating}/5)
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Testimoni *
                      </label>
                      <Textarea
                        placeholder="Ceritakan pengalaman Anda bekerja sama dengan kami..."
                        rows={4}
                        {...register('message')}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          'Mengirim...'
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Kirim Testimoni
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowForm(false)}
                      >
                        Batal
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${activeCategory}-${testimonial.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              layout
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <Quote className="h-6 w-6 text-primary/20" />
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.project}
                    </Badge>
                  </div>

                  <blockquote className="text-sm leading-relaxed text-muted-foreground mb-4">
                    "{testimonial.message}"
                  </blockquote>

                  <div className="text-xs text-muted-foreground">
                    {new Date(testimonial.date).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No Results */}
      {filteredTestimonials.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">💬</div>
          <h3 className="text-xl font-semibold mb-2">Belum ada testimoni</h3>
          <p className="text-muted-foreground mb-6">
            Jadilah yang pertama memberikan testimoni untuk kategori ini
          </p>
          <Button onClick={() => setShowForm(true)}>
            Tambah Testimoni
          </Button>
        </motion.div>
      )}
    </div>
  )
}
