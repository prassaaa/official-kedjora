'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MessageCircle, Send, CheckCircle, MapPin, Clock, Shield, Zap, Star, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SITE_CONFIG } from '@/constants'
import Link from 'next/link'

const contactSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Masukkan email yang valid'),
  phone: z.string().min(10, 'Nomor telepon minimal 10 digit'),
  service: z.string().min(1, 'Pilih jenis layanan'),
  budget: z.string().min(1, 'Pilih rentang budget'),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  'Pembuatan Website',
  'Pembuatan Aplikasi Mobile', 
  'Bantuan Akademik',
  'Bantuan Skripsi',
  'Konsultasi IT',
  'Layanan Lainnya',
]

const budgetRanges = [
  'Di bawah Rp 7.500.000',
  'Rp 7.500.000 - Rp 15.000.000',
  'Rp 15.000.000 - Rp 37.500.000',
  'Rp 37.500.000 - Rp 75.000.000',
  'Rp 75.000.000 - Rp 150.000.000',
  'Di atas Rp 150.000.000',
]

const contactMethods = [
  {
    name: 'WhatsApp',
    description: 'Chat langsung untuk konsultasi cepat',
    detail: 'Rata-rata respon: 5 menit',
    icon: MessageCircle,
    href: SITE_CONFIG.links.whatsapp,
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    name: 'Email',
    description: 'Kirim detail kebutuhan proyek',
    detail: 'Rata-rata respon: 2 jam',
    icon: Mail,
    href: `mailto:${SITE_CONFIG.links.email}`,
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    name: 'Telepon',
    description: 'Diskusi langsung dengan tim kami',
    detail: 'Tersedia: 09.00 - 18.00',
    icon: Phone,
    href: 'tel:+6281234567890',
    color: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
]

const benefits = [
  {
    icon: Zap,
    title: 'Respon Cepat',
    description: 'Balasan dalam 24 jam',
  },
  {
    icon: Shield,
    title: 'Kualitas Terjamin',
    description: 'Garansi kepuasan 100%',
  },
  {
    icon: Clock,
    title: 'Tepat Waktu',
    description: 'Selalu sesuai deadline',
  },
  {
    icon: Star,
    title: 'Tim Ahli',
    description: 'Pengalaman 5+ tahun',
  },
]

const officeInfo = [
  {
    icon: MapPin,
    label: 'Lokasi Kantor',
    value: 'Kediri, Indonesia',
  },
  {
    icon: Clock,
    label: 'Jam Kerja',
    value: 'Sen-Jum: 09.00 - 18.00',
  },
  {
    icon: Mail,
    label: 'Alamat Email',
    value: SITE_CONFIG.links.email,
  },
  {
    icon: Phone,
    label: 'Nomor Telepon',
    value: '+62 812-3456-7890',
  },
]

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const watchedFields = watch()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // TODO: Implement actual form submission
      console.log('Form data:', data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
      reset()
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
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
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-200/30 to-pink-200/30 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Mari Mulai Membangun Bersama
            </div>
          </motion.div>
          
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Siap Mewujudkan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Visi Digital Anda?
            </span>
          </h2>
          
          <p className="text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
            Hubungi kami hari ini untuk konsultasi gratis dan temukan bagaimana kami dapat membantu 
            mengubah ide Anda menjadi solusi digital yang luar biasa.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
              >
                <benefit.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Hubungi Kami
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Pilih cara yang paling nyaman untuk menghubungi tim kami. Kami siap membantu!
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="block group"
                >
                  <Link href={method.href} target="_blank" rel="noopener noreferrer">
                    <Card className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-purple-500/20">
                      <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      <CardContent className="flex items-center p-6 relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`rounded-2xl p-4 ${method.bgColor} mr-6 relative`}
                        >
                          <method.icon className={`h-8 w-8 ${method.iconColor}`} />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                          />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h4 className="font-bold text-foreground text-lg mb-1 group-hover:text-purple-600 transition-colors">
                            {method.name}
                          </h4>
                          <p className="text-muted-foreground mb-1">
                            {method.description}
                          </p>
                          <p className="text-sm text-green-600 font-medium">
                            {method.detail}
                          </p>
                        </div>
                        
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"
              />
              
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Informasi Kantor
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {officeInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <info.icon className="w-4 h-4 mt-1 text-purple-200" />
                      <div>
                        <p className="text-sm text-purple-200 font-medium">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              
              <CardHeader className="relative z-10 text-center pb-6">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <Send className="w-8 h-8 text-white" />
                </motion.div>
                
                <CardTitle className="text-2xl font-bold">Kirim Pesan</CardTitle>
                <CardDescription className="text-base">
                  Isi formulir di bawah ini dan kami akan menghubungi Anda dalam 24 jam
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                      }}
                      transition={{ duration: 0.8 }}
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="h-12 w-12 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Pesan Berhasil Dikirim!
                    </h3>
                    <p className="text-muted-foreground text-lg mb-4">
                      Terima kasih telah menghubungi kami! Kami akan menghubungi Anda dalam 24 jam.
                    </p>
                    <p className="text-sm text-green-600 font-medium">
                      Periksa email Anda untuk pesan konfirmasi
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative"
                      >
                        <Input
                          placeholder="Nama Lengkap"
                          {...register('name')}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`transition-all duration-300 ${
                            errors.name 
                              ? 'border-red-500 focus:border-red-500' 
                              : focusedField === 'name' 
                              ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                              : ''
                          }`}
                        />
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-500 mt-2"
                          >
                            {errors.name.message}
                          </motion.p>
                        )}
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative"
                      >
                        <Input
                          type="email"
                          placeholder="email.anda@contoh.com"
                          {...register('email')}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`transition-all duration-300 ${
                            errors.email 
                              ? 'border-red-500 focus:border-red-500' 
                              : focusedField === 'email' 
                              ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                              : ''
                          }`}
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-500 mt-2"
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>

                    {/* Phone and Service */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative"
                      >
                        <Input
                          placeholder="Nomor WhatsApp"
                          {...register('phone')}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className={`transition-all duration-300 ${
                            errors.phone 
                              ? 'border-red-500 focus:border-red-500' 
                              : focusedField === 'phone' 
                              ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                              : ''
                          }`}
                        />
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-500 mt-2"
                          >
                            {errors.phone.message}
                          </motion.p>
                        )}
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative"
                      >
                        <select
                          {...register('service')}
                          onFocus={() => setFocusedField('service')}
                          onBlur={() => setFocusedField(null)}
                          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300 ${
                            errors.service 
                              ? 'border-red-500 focus:border-red-500' 
                              : focusedField === 'service' 
                              ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                              : ''
                          }`}
                        >
                          <option value="">Pilih Jenis Layanan</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-500 mt-2"
                          >
                            {errors.service.message}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>

                    {/* Budget */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <select
                        {...register('budget')}
                        onFocus={() => setFocusedField('budget')}
                        onBlur={() => setFocusedField(null)}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300 ${
                          errors.budget 
                            ? 'border-red-500 focus:border-red-500' 
                            : focusedField === 'budget' 
                            ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                            : ''
                        }`}
                      >
                        <option value="">Pilih Rentang Budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-500 mt-2"
                        >
                          {errors.budget.message}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="relative"
                    >
                      <Textarea
                        placeholder="Ceritakan detail proyek Anda..."
                        rows={5}
                        {...register('message')}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className={`transition-all duration-300 resize-none ${
                          errors.message 
                            ? 'border-red-500 focus:border-red-500' 
                            : focusedField === 'message' 
                            ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                            : ''
                        }`}
                      />
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-500 mt-2"
                        >
                          {errors.message.message}
                        </motion.p>
                      )}
                      
                      {/* Character count */}
                      <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                        {watchedFields.message?.length || 0}/500
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        disabled={isSubmitting}
                      >
                        {/* Button shimmer effect */}
                        <motion.div
                          animate={isSubmitting ? { x: ['-100%', '100%'] } : {}}
                          transition={{ 
                            duration: 1.5,
                            repeat: isSubmitting ? Infinity : 0,
                            ease: "linear"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        />
                        
                        <div className="relative flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                              />
                              Mengirim Pesan...
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                              Kirim Pesan
                            </>
                          )}
                        </div>
                      </Button>
                    </motion.div>

                    {/* Form Progress Indicator */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>Kelengkapan Formulir</span>
                        <span>{Math.round(((Object.keys(watchedFields).filter(key => watchedFields[key as keyof ContactFormData]).length) / 6) * 100)}%</span>
                        </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${((Object.keys(watchedFields).filter(key => watchedFields[key as keyof ContactFormData]).length) / 6) * 100}%` 
                          }}
                          transition={{ duration: 0.3 }}
                          className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      </div>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}