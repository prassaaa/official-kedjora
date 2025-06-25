'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  MapPin, 
  Clock,
  Users,
  Star,
  Upload,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG, SERVICES } from '@/constants'
import { formatCurrency } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(10, 'Nomor telepon minimal 10 digit'),
  service: z.string().min(1, 'Pilih layanan yang diinginkan'),
  budget: z.string().optional(),
  deadline: z.string().optional(),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
  files: z.array(z.any()).optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  'Pembuatan Website',
  'Pembuatan Aplikasi',
  'Joki Tugas Kuliah',
  'Joki Skripsi',
  'Konsultasi IT',
  'Lainnya',
]

const budgetRanges = [
  'Di bawah 1 juta',
  '1 - 5 juta',
  '5 - 10 juta',
  '10 - 20 juta',
  'Di atas 20 juta',
  'Diskusi lebih lanjut'
]

const contactMethods = [
  {
    name: 'WhatsApp',
    description: 'Chat langsung untuk konsultasi cepat',
    icon: MessageCircle,
    href: SITE_CONFIG.links.whatsapp,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    available: '24/7'
  },
  {
    name: 'Email',
    description: 'Kirim detail proyek via email',
    icon: Mail,
    href: `mailto:${SITE_CONFIG.links.email}`,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    available: 'Respon dalam 24 jam'
  },
  {
    name: 'Telepon',
    description: 'Hubungi langsung untuk diskusi',
    icon: Phone,
    href: 'tel:+6281234567890',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    available: '09:00 - 21:00 WIB'
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const selectedService = watch('service')

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // TODO: Implement actual form submission to Supabase
      console.log('Form data:', { ...data, files: uploadedFiles })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
      reset()
      setUploadedFiles([])
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setUploadedFiles(prev => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
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
          Hubungi Kami
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Siap memulai proyek Anda? Mari diskusikan kebutuhan dan wujudkan ide digital Anda bersama tim ahli kami.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1 space-y-6"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Cara Menghubungi Kami
            </h2>
            
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.name}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block"
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="flex items-center p-6">
                      <div className={`rounded-lg p-3 ${method.bgColor} mr-4`}>
                        <method.icon className={`h-6 w-6 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {method.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          {method.description}
                        </p>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {method.available}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Informasi Perusahaan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Alamat</h4>
                  <p className="text-sm text-muted-foreground">
                    Jakarta, Indonesia<br />
                    (Remote & On-site Available)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Jam Operasional</h4>
                  <p className="text-sm text-muted-foreground">
                    Senin - Jumat: 09:00 - 21:00 WIB<br />
                    Sabtu - Minggu: 10:00 - 18:00 WIB
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    WhatsApp: Instant<br />
                    Email: Maksimal 24 jam
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Mengapa Memilih Kami?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">300+ Klien Puas</div>
                    <div className="text-sm text-muted-foreground">Dari berbagai industri</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">500+ Proyek Selesai</div>
                    <div className="text-sm text-muted-foreground">Dengan kualitas terbaik</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Rating 4.9/5</div>
                    <div className="text-sm text-muted-foreground">Kepuasan pelanggan</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>Konsultasi Gratis</CardTitle>
              <CardDescription>
                Isi form di bawah ini untuk mendapatkan konsultasi gratis dan penawaran terbaik
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
                    Pesan Terkirim!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Terima kasih! Tim kami akan menghubungi Anda dalam 24 jam.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <a href={SITE_CONFIG.links.whatsapp} target="_blank" rel="noopener noreferrer">
                      <Button>
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat WhatsApp
                      </Button>
                    </a>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Kirim Pesan Lain
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Info */}
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
                        Nomor WhatsApp *
                      </label>
                      <Input
                        placeholder="08123456789"
                        {...register('phone')}
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Layanan yang Diinginkan *
                      </label>
                      <select
                        {...register('service')}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          errors.service ? 'border-red-500' : ''
                        }`}
                      >
                        <option value="">Pilih layanan</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.service.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Budget (Opsional)
                      </label>
                      <select
                        {...register('budget')}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Pilih range budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Deadline (Opsional)
                      </label>
                      <Input
                        type="date"
                        {...register('deadline')}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Detail Proyek *
                    </label>
                    <Textarea
                      placeholder="Ceritakan detail proyek Anda, fitur yang diinginkan, referensi, atau pertanyaan lainnya..."
                      rows={5}
                      {...register('message')}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Lampiran (Opsional)
                    </label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Upload file referensi, mockup, atau dokumen pendukung
                      </p>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload">
                        <Button type="button" variant="outline" size="sm" asChild>
                          <span className="cursor-pointer">Pilih File</span>
                        </Button>
                      </label>
                      <p className="text-xs text-muted-foreground mt-2">
                        Max 10MB per file. Format: PDF, DOC, JPG, PNG, ZIP
                      </p>
                    </div>
                    
                    {/* Uploaded Files */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                            <span className="text-sm truncate">{file.name}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Service Package Suggestion */}
                  {selectedService && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-primary/5 border border-primary/20 rounded-lg p-4"
                    >
                      <h4 className="font-semibold mb-2">💡 Rekomendasi Paket</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Berdasarkan layanan yang dipilih, berikut paket yang mungkin sesuai:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedService === 'Pembuatan Website' &&
                          SERVICES.WEBSITE.packages.map(pkg => (
                            <Badge key={pkg.id} variant="outline">
                              {pkg.name} - {formatCurrency(pkg.price)}
                            </Badge>
                          ))
                        }
                        {selectedService === 'Pembuatan Aplikasi' &&
                          SERVICES.APP.packages.map(pkg => (
                            <Badge key={pkg.id} variant="outline">
                              {pkg.name} - {formatCurrency(pkg.price)}
                            </Badge>
                          ))
                        }
                        {(selectedService === 'Joki Tugas Kuliah' || selectedService === 'Joki Skripsi') &&
                          SERVICES.ACADEMIC.packages.map(pkg => (
                            <Badge key={pkg.id} variant="outline">
                              {pkg.name} - {formatCurrency(pkg.price)}
                            </Badge>
                          ))
                        }
                      </div>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Mengirim...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
