'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { Star, Quote, Send, CheckCircle, Plus, User, Award, Sparkles, Monitor, Smartphone, GraduationCap, MessageCircle, Zap, Calendar, ArrowRight, Users, TrendingUp } from 'lucide-react'
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
    date: '2024-01-15',
    featured: true
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
    date: '2024-02-20',
    featured: false
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
    date: '2024-03-10',
    featured: true
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
    date: '2024-01-25',
    featured: false
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
    date: '2024-02-05',
    featured: false
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
    date: '2024-03-15',
    featured: true
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
    date: '2024-01-30',
    featured: false
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
    date: '2024-02-28',
    featured: false
  }
]

const categories = [
  { 
    id: 'all', 
    name: 'Semua Testimoni', 
    count: testimonials.length, 
    icon: MessageCircle,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    id: 'website', 
    name: 'Website', 
    count: testimonials.filter(t => t.category === 'website').length,
    icon: Monitor,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    id: 'app', 
    name: 'Aplikasi', 
    count: testimonials.filter(t => t.category === 'app').length,
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    id: 'academic', 
    name: 'Akademik', 
    count: testimonials.filter(t => t.category === 'academic').length,
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
      return MessageCircle
  }
}

const testimonialSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  role: z.string().min(2, 'Peran/jabatan minimal 2 karakter'),
  project: z.string().min(2, 'Nama proyek minimal 2 karakter'),
  category: z.enum(['website', 'app', 'academic']),
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
      rating: 5,
      category: 'website'
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
      
      // Reset success state after 3 seconds
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
        } ${interactive ? 'cursor-pointer hover:text-yellow-400 transition-colors' : ''}`}
        onClick={interactive && onRate ? () => onRate(i + 1) : undefined}
      />
    ))
  }

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
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-yellow-200/20 to-orange-200/20 dark:from-yellow-500/10 dark:to-orange-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
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
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Client Testimonials
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg mb-6"
          >
            <Quote className="h-12 w-12 text-white" />
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Testimoni Klien
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              Kepuasan Adalah Prioritas
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Kepuasan klien adalah prioritas utama kami. Lihat apa kata mereka tentang layanan berkualitas tinggi 
            dan dedikasi tim kami dalam menghadirkan solusi digital terbaik.
          </p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">4.9★</div>
              <div className="text-sm text-muted-foreground">Rating Rata-rata</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">300+</div>
              <div className="text-sm text-muted-foreground">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-sm text-muted-foreground">Proyek Selesai</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-yellow-500/20">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="text-3xl font-bold text-yellow-600 mb-2">98%</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-purple-500/20 h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>

                <div className="text-3xl font-bold text-purple-600 mb-2">300+</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-blue-500/20 h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>

                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-sm text-muted-foreground">Completed Projects</div>
              </Card>
            </motion.div>
          </div>
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
              Kategori Testimoni
            </h2>
            <p className="text-lg text-muted-foreground">
              Lihat feedback klien berdasarkan jenis layanan yang mereka gunakan
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
                      ? 'ring-2 ring-yellow-500 shadow-xl shadow-yellow-500/25 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20' 
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
                    
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-yellow-600 transition-colors">
                      {category.name}
                    </CardTitle>
                    
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Badge variant="outline" className="text-sm">
                        {category.count} testimoni
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Add Testimonial Button - Updated with icon change */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => setShowForm(!showForm)} 
              className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white border-0 font-bold px-8 py-6 text-base shadow-lg"
              size="lg"
            >
              <motion.div
                animate={{ rotate: showForm ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="mr-2"
              >
                <Plus className="h-5 w-5" />
              </motion.div>
              {showForm ? 'Tutup Form' : 'Bagikan Pengalaman Anda'}
            </Button>
          </motion.div>
        </motion.div>

        {/* Updated Form with better dropdown styling */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Bagikan Pengalaman Anda</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Testimoni Anda sangat berharga untuk membantu calon klien lain mengenal kualitas layanan kami
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        Testimoni Berhasil Dikirim!
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        Terima kasih atas feedback Anda. Testimoni akan ditampilkan setelah diverifikasi oleh tim kami.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-3 text-foreground">
                            Nama Lengkap *
                          </label>
                          <Input
                            placeholder="Masukkan nama lengkap Anda"
                            {...register('name')}
                            className={`py-3 ${errors.name ? 'border-red-500' : ''}`}
                          />
                          {errors.name && (
                            <p className="text-sm text-red-500 mt-2">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-3 text-foreground">
                            Email *
                          </label>
                          <Input
                            type="email"
                            placeholder="nama@email.com"
                            {...register('email')}
                            className={`py-3 ${errors.email ? 'border-red-500' : ''}`}
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500 mt-2">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-3 text-foreground">
                            Peran/Jabatan *
                          </label>
                          <Input
                            placeholder="CEO, Mahasiswa, Freelancer, dll"
                            {...register('role')}
                            className={`py-3 ${errors.role ? 'border-red-500' : ''}`}
                          />
                          {errors.role && (
                            <p className="text-sm text-red-500 mt-2">
                              {errors.role.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-3 text-foreground">
                            Nama Proyek *
                          </label>
                          <Input
                            placeholder="Website E-commerce, Aplikasi Mobile, Skripsi, dll"
                            {...register('project')}
                            className={`py-3 ${errors.project ? 'border-red-500' : ''}`}
                          />
                          {errors.project && (
                            <p className="text-sm text-red-500 mt-2">
                              {errors.project.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-3 text-foreground">
                            Kategori Layanan *
                          </label>
                          <div className="relative">
                            <select
                              {...register('category')}
                              className="w-full py-3 px-4 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-400 transition-all duration-200 appearance-none cursor-pointer"
                            >
                              <option value="website" className="py-2 px-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                                🌐 Website Development
                              </option>
                              <option value="app" className="py-2 px-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                                📱 Mobile App Development
                              </option>
                              <option value="academic" className="py-2 px-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                                🎓 Academic Writing
                              </option>
                            </select>
                            
                            {/* Custom dropdown arrow */}
                            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          {errors.category && (
                            <p className="text-sm text-red-500 mt-2">
                              {errors.category.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-3 text-foreground">
                            Rating *
                          </label>
                          <div className="flex items-center gap-3">
                            <div className="flex">
                              {renderStars(rating, true, (newRating) => setValue('rating', newRating))}
                            </div>
                            <span className="text-sm text-muted-foreground font-medium">
                              ({rating}/5)
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-3 text-foreground">
                          Testimoni *
                        </label>
                        <Textarea
                          placeholder="Ceritakan pengalaman Anda bekerja sama dengan tim Kedjora. Bagaimana layanan kami membantu mencapai tujuan Anda?"
                          rows={5}
                          {...register('message')}
                          className={`${errors.message ? 'border-red-500' : ''}`}
                        />
                        {errors.message && (
                          <p className="text-sm text-red-500 mt-2">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1"
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white border-0 font-bold py-6 text-base"
                            size="lg"
                          >
                            {isSubmitting ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                              />
                            ) : (
                              <Send className="h-5 w-5 mr-2" />
                            )}
                            {isSubmitting ? 'Mengirim Testimoni...' : 'Kirim Testimoni'}
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setShowForm(false)}
                            className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold py-6 px-8"
                            size="lg"
                          >
                            Batal
                          </Button>
                        </motion.div>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Counter */}
        {filteredTestimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground">
              Menampilkan <span className="font-semibold text-foreground">{filteredTestimonials.length}</span> testimoni
              {activeCategory !== 'all' && (
                <span> dalam kategori <span className="font-semibold text-yellow-600">{categories.find(c => c.id === activeCategory)?.name}</span></span>
              )}
            </p>
          </motion.div>
        )}

        {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredTestimonials.map((testimonial, index) => {
            const CategoryIcon = getCategoryIcon(testimonial.category)
            const categoryColor = getCategoryColor(testimonial.category)
            
            return (
              <motion.div
                key={`${activeCategory}-${testimonial.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg relative">
                  {/* Header dengan Badges - Fixed Layout */}
                  <div className="relative px-4 pt-4 pb-2">
                    {/* Background Quote - Positioned better */}
                    <div className="absolute top-2 right-2 opacity-5">
                      <Quote className="h-20 w-20 text-gray-400 transform rotate-12" />
                    </div>
                    
                    {/* Badges Container - Proper spacing */}
                    <div className="flex items-start justify-between gap-2 mb-4">
                      {/* Category Badge - Left side */}
                      <Badge className={`bg-gradient-to-r ${categoryColor} text-white border-0 capitalize font-semibold text-xs px-2 py-1 flex items-center gap-1 flex-shrink-0`}>
                        <CategoryIcon className="h-3 w-3" />
                        {testimonial.category === 'website' ? 'Website' : 
                        testimonial.category === 'app' ? 'Mobile' : 'Academic'}
                      </Badge>

                      {/* Featured Badge - Right side */}
                      {testimonial.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 font-semibold text-xs px-2 py-1 flex items-center gap-1 flex-shrink-0">
                          <Star className="h-3 w-3" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="px-6 pb-6 pt-0">
                    {/* User Info - Better spacing */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`relative w-12 h-12 overflow-hidden rounded-full bg-gradient-to-r ${categoryColor} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <User className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base text-foreground group-hover:text-yellow-600 transition-colors truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground font-medium truncate">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Rating - Improved spacing */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {testimonial.rating}.0/5
                      </span>
                    </div>

                    {/* Project Badge - Better positioning */}
                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs font-medium px-3 py-1">
                        📋 {testimonial.project}
                      </Badge>
                    </div>

                    {/* Message - Better typography */}
                    <blockquote className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-4 relative">
                      <span className="text-xl text-yellow-500 absolute -top-1 -left-1">&ldquo;</span>
                      <span className="pl-5 block">{testimonial.message}</span>
                      <span className="text-xl text-yellow-500 float-right">&ldquo;</span>
                    </blockquote>

                    {/* Date - Bottom positioning */}
                    <div className="flex items-center text-xs text-muted-foreground pt-2 border-t border-gray-100 dark:border-gray-700">
                      <Calendar className="h-3 w-3 mr-2" />
                      {new Date(testimonial.date).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

        {/* No Results */}
        {filteredTestimonials.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <MessageCircle className="w-12 h-12 text-white" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-foreground mb-3">Belum ada testimoni</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Jadilah yang pertama memberikan testimoni untuk kategori ini dan bantu calon klien lain mengenal kualitas layanan kami.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white border-0"
              >
                <Plus className="h-4 w-4 mr-2" />
                Tambah Testimoni Pertama
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
          <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
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
                Siap Menjadi Bagian dari Klien Puas Kami?
              </h2>
              
              <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
                Bergabunglah dengan 300+ klien yang telah merasakan kepuasan bekerja sama dengan tim Kedjora. 
                Mari wujudkan proyek digital impian Anda dengan kualitas terbaik!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 font-bold px-8 py-6 text-base shadow-2xl min-w-[200px]">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Mulai Proyek Anda
                    </Button>
                  </motion.div>
                </Link>
                
                <Link href="/services">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-base min-w-[200px]">
                      <ArrowRight className="mr-2 h-5 w-5" />
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