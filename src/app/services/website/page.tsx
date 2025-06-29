'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Monitor, Check, Clock, RefreshCw, ArrowRight, Star, MessageCircle, Sparkles, Zap, Shield, Award, Code, Palette, Search, Globe, ShoppingCart, Users, CheckCircle, Target, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SERVICES, SITE_CONFIG } from '@/constants'
import { formatCurrency } from '@/lib/utils'

const websiteFeatures = [
  {
    icon: Code,
    title: 'Responsive Design',
    description: 'Website yang sempurna di semua perangkat - desktop, tablet, dan mobile',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Optimasi mesin pencari untuk ranking tinggi di Google dan search engine lainnya',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Fast Loading',
    description: 'Performa website super cepat dengan optimasi loading speed terbaik',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Keamanan tingkat enterprise dengan SSL certificate dan backup otomatis',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Desain unik sesuai brand identity dan preferensi visual Anda',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Database,
    title: 'CMS Integration',
    description: 'Content Management System untuk update konten website dengan mudah',
    color: 'from-indigo-500 to-purple-500'
  }
]

const websiteTypes = [
  {
    title: 'Landing Page',
    description: 'Halaman website satu halaman untuk konversi maksimal',
    icon: Target,
    features: ['Hero section menarik', 'Call-to-action optimal', 'Form kontak terintegrasi', 'Mobile responsive']
  },
  {
    title: 'Company Profile',
    description: 'Website profil perusahaan yang profesional',
    icon: Award,
    features: ['About us page', 'Services showcase', 'Team portfolio', 'Contact information']
  },
  {
    title: 'E-Commerce',
    description: 'Toko online lengkap dengan sistem pembayaran',
    icon: ShoppingCart,
    features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Order management']
  },
  {
    title: 'Portfolio Website',
    description: 'Website showcase untuk menampilkan karya Anda',
    icon: Globe,
    features: ['Gallery showcase', 'Project details', 'Client testimonials', 'Contact form']
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Konsultasi & Planning',
    description: 'Diskusi mendalam tentang kebutuhan, target audience, dan tujuan website Anda',
    duration: '1-2 hari',
    icon: Target
  },
  {
    step: '02',
    title: 'Design & Mockup',
    description: 'Pembuatan wireframe, mockup design, dan prototype website yang sesuai brand',
    duration: '3-5 hari',
    icon: Palette
  },
  {
    step: '03',
    title: 'Development',
    description: 'Coding website dengan teknologi modern dan responsive design',
    duration: '5-10 hari',
    icon: Code
  },
  {
    step: '04',
    title: 'Content Integration',
    description: 'Integrasi konten, gambar, dan optimasi SEO untuk performa terbaik',
    duration: '2-3 hari',
    icon: Database
  },
  {
    step: '05',
    title: 'Testing & Review',
    description: 'Testing komprehensif di berbagai device dan browser untuk memastikan kualitas',
    duration: '1-2 hari',
    icon: Shield
  },
  {
    step: '06',
    title: 'Launch & Training',
    description: 'Website go-live, training penggunaan CMS, dan dokumentasi lengkap',
    duration: '1 hari',
    icon: Zap
  }
]

const technologies = [
  { name: 'Next.js', category: 'Framework', color: 'bg-black' },
  { name: 'React', category: 'Frontend', color: 'bg-blue-500' },
  { name: 'WordPress', category: 'CMS', color: 'bg-blue-600' },
  { name: 'Tailwind CSS', category: 'Styling', color: 'bg-cyan-500' },
  { name: 'Node.js', category: 'Backend', color: 'bg-green-600' },
  { name: 'MySQL', category: 'Database', color: 'bg-orange-500' },
  { name: 'MongoDB', category: 'Database', color: 'bg-green-700' },
  { name: 'Supabase', category: 'Backend', color: 'bg-green-500' },
]

export default function WebsiteServicePage() {
  const service = SERVICES.WEBSITE
  const [selectedPackage, setSelectedPackage] = useState(service?.packages?.[1] || service?.packages?.[0])

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
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-200/20 to-cyan-200/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-green-200/20 to-emerald-200/20 dark:from-green-500/10 dark:to-emerald-500/10 rounded-full blur-3xl"
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
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Website Development Service
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg mb-6"
          >
            <Monitor className="h-12 w-12 text-white" />
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Pembuatan Website
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Profesional & Modern
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {service.description}. Dari landing page yang converting hingga e-commerce yang powerful, 
            kami menciptakan website yang tidak hanya memukau secara visual, tapi juga optimal untuk SEO dan user experience.
          </p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-muted-foreground">Website Dibuat</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">99%</div>
              <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Website Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Fitur Unggulan Website Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Setiap website yang kami buat dilengkapi dengan teknologi terdepan dan fitur-fitur modern 
              untuk memberikan performance dan user experience yang optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-blue-500/20">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Website Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Jenis Website yang Kami Kembangkan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kami spesialisasi dalam berbagai jenis website sesuai dengan kebutuhan bisnis dan tujuan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websiteTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-blue-500/20">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4"
                  >
                    <type.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                    {type.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {type.description}
                  </p>
                  
                  <ul className="space-y-1">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Teknologi yang Kami Gunakan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kami menggunakan teknologi terdepan dan framework modern untuk memastikan website Anda memiliki performa optimal dan future-proof.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group"
              >
                <div className={`px-4 py-2 rounded-full ${tech.color} text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                  {tech.name}
                  <span className="ml-2 text-xs opacity-75">({tech.category})</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Package Selection */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Pilih Paket yang Sesuai</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {service?.packages?.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <Card 
                      className={`cursor-pointer transition-all duration-300 h-full relative overflow-hidden ${
                        selectedPackage.id === pkg.id 
                          ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/25 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20' 
                          : 'hover:shadow-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0'
                      }`}
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      {pkg.id === 'standard' && (
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-bl-lg text-xs font-bold">
                          🔥 POPULER
                        </div>
                      )}
                      
                      <CardHeader className="text-center pb-4">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <CardTitle className="text-xl font-bold text-foreground">{pkg.name}</CardTitle>
                        </div>
                        
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-3">
                          {formatCurrency(pkg.price)}
                        </div>
                        
                        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {pkg.delivery_time} hari
                          </div>
                          <div className="flex items-center gap-1">
                            <RefreshCw className="h-4 w-4" />
                            {pkg.revisions === -1 ? 'Unlimited' : `${pkg.revisions}x`} revisi
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <ul className="space-y-3">
                          {pkg?.features?.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5"
                              >
                                <Check className="h-3 w-3 text-white" />
                              </motion.div>
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          )) || []}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Service Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Tabs defaultValue="process" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                  <TabsTrigger value="process" className="font-semibold">Proses Pembuatan</TabsTrigger>
                  <TabsTrigger value="features" className="font-semibold">Fitur Lengkap</TabsTrigger>
                  <TabsTrigger value="portfolio" className="font-semibold">Portfolio</TabsTrigger>
                </TabsList>
                
                <TabsContent value="process" className="mt-8">
                  <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        Proses Pembuatan Website
                      </CardTitle>
                      <CardDescription className="text-base">
                        Metodologi pengembangan website yang teruji dengan quality assurance di setiap tahap
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {processSteps.map((item, index) => (
                          <motion.div
                            key={item.step}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ x: 5 }}
                            className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-white/50 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-700/50 hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold">
                                {item.step}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-foreground">{item.title}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {item.duration}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center"
                            >
                              <item.icon className="w-4 h-4 text-white" />
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="features" className="mt-8">
                  <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        Fitur Lengkap Website
                      </CardTitle>
                      <CardDescription className="text-base">
                        Semua fitur yang akan Anda dapatkan dalam layanan pembuatan website
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.packages?.flatMap(pkg => pkg.features || []).filter((feature, index, arr) => arr.indexOf(feature) === index).map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center p-3 rounded-lg bg-gradient-to-r from-white/50 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-700/50 hover:shadow-sm transition-all duration-200"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3"
                            >
                              <Check className="h-3 w-3 text-white" />
                            </motion.div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                          </motion.div>
                        )) || []}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="portfolio" className="mt-8">
                  <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        Portfolio Website
                      </CardTitle>
                      <CardDescription className="text-base">
                        Contoh website berkualitas tinggi yang telah kami kembangkan untuk klien
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-12">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        >
                          <Monitor className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          Lihat Hasil Karya Website Kami
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                          Jelajahi portfolio lengkap website yang telah kami kembangkan dengan design modern dan teknologi terdepan
                        </p>
                        
                        <Link href="/portfolio?category=website">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 px-8 py-6 text-base font-semibold">
                              <Monitor className="mr-2 h-5 w-5" />
                              Lihat Portfolio Website
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </motion.div>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-8"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-lg" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"
                    >
                      <CheckCircle className="w-5 h-5 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold">Paket Terpilih</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {selectedPackage.name} - {service.name}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-3">
                      {formatCurrency(selectedPackage.price)}
                    </div>
                    <div className="flex items-center justify-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">{selectedPackage.delivery_time} hari kerja</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <RefreshCw className="h-4 w-4 text-green-500" />
                        <span className="font-medium">
                          {selectedPackage.revisions === -1 ? 'Unlimited' : `${selectedPackage.revisions}x`} revisi
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-bold text-lg text-foreground">Yang Anda Dapatkan:</h4>
                    </div>
                    
                    <ul className="space-y-3">
                      {selectedPackage?.features?.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start text-sm"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5"
                          >
                            <Check className="h-3 w-3 text-white" />
                          </motion.div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                        </motion.li>
                      )) || []}
                    </ul>
                  </div>

                  {/* Trust indicators */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-700 dark:text-green-400">SSL Included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-blue-700 dark:text-blue-400">Fast Loading</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col gap-3 relative z-10">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 font-bold py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300" size="lg">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Pesan Sekarang
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                  
                  <div className="grid grid-cols-2 gap-3 w-full">
                    <Link href={SITE_CONFIG.links.whatsapp} target="_blank" className="w-full">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                        <Button variant="outline" className="w-full border-2 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold py-4">
                          <MessageCircle className="mr-2 h-4 w-4 text-green-600" />
                          WhatsApp
                        </Button>
                      </motion.div>
                    </Link>
                    
                    <Link href="/contact" className="w-full">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                        <Button variant="outline" className="w-full border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold py-4">
                          <Users className="mr-2 h-4 w-4 text-blue-600" />
                          Konsultasi
                        </Button>
                      </motion.div>
                    </Link>
                  </div>

                  {/* Additional info */}
                  <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-muted-foreground mb-2">
                      🌐 <strong>Responsive Design</strong> - Mobile, tablet & desktop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      🚀 <strong>SEO Optimized</strong> - Ready to rank on Google
                    </p>
                  </div>
                </CardFooter>
              </Card>

              {/* Additional CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6"
              >
                <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-0 shadow-xl">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                    >
                      <Globe className="w-6 h-6" />
                    </motion.div>
                    
                    <h3 className="font-bold text-lg mb-2">Launch Special!</h3>
                    <p className="text-green-100 text-sm mb-4">
                      Dapatkan <strong>FREE Domain & Hosting 1 Tahun</strong> untuk pemesanan minggu ini
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>Promo terbatas 7 hari lagi</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600 rounded-3xl p-12 text-white relative overflow-hidden">
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
                  <Monitor className="w-8 h-8" />
                </div>
              </motion.div>
              
              <h2 className="text-3xl font-bold mb-4">
                Siap Meluncurkan Website Impian Anda?
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Bergabunglah dengan 500+ klien yang telah mempercayakan pembuatan website mereka kepada kami. 
                Konsultasi gratis sekarang dan wujudkan website yang dapat mengubah bisnis Anda!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-6 text-base shadow-2xl min-w-[200px]">
                      <Users className="mr-2 h-5 w-5" />
                      Konsultasi Gratis
                    </Button>
                  </motion.div>
                </Link>
                
                <Link href="/portfolio?category=website">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-base min-w-[200px]">
                      <Monitor className="mr-2 h-5 w-5" />
                      Lihat Portfolio
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