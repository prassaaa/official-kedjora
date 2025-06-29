'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Smartphone, Check, Clock, RefreshCw, ArrowRight, Star, MessageCircle, Sparkles, Zap, Shield, Award, Code, Palette, Store, Bell, Database, Users, CheckCircle, Target, Globe, Lock, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SERVICES, SITE_CONFIG } from '@/constants'
import { formatCurrency } from '@/lib/utils'

const appFeatures = [
  {
    icon: Code,
    title: 'Native Development',
    description: 'Pengembangan aplikasi native untuk performa optimal di iOS dan Android',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Palette,
    title: 'Modern UI/UX',
    description: 'Desain interface yang intuitif dan user experience yang memukau',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Database,
    title: 'Backend Integration',
    description: 'Integrasi dengan database dan API untuk fungsionalitas lengkap',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Sistem notifikasi real-time untuk engagement pengguna',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Lock,
    title: 'Security & Privacy',
    description: 'Keamanan data tingkat enterprise dengan enkripsi end-to-end',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Store,
    title: 'App Store Ready',
    description: 'Optimasi dan submission ke App Store dan Google Play Store',
    color: 'from-indigo-500 to-purple-500'
  }
]

const appTypes = [
  {
    title: 'Mobile App',
    description: 'Aplikasi mobile native untuk iOS dan Android',
    icon: Smartphone,
    features: ['Native performance', 'Offline capability', 'Device integration', 'App Store optimization']
  },
  {
    title: 'Web App',
    description: 'Progressive Web App yang responsive dan cepat',
    icon: Globe,
    features: ['Cross-platform', 'Fast loading', 'Offline support', 'Push notifications']
  },
  {
    title: 'E-Commerce App',
    description: 'Aplikasi toko online dengan fitur pembayaran',
    icon: TrendingUp,
    features: ['Product catalog', 'Payment gateway', 'Order tracking', 'Customer support']
  },
  {
    title: 'Enterprise App',
    description: 'Aplikasi bisnis untuk produktivitas perusahaan',
    icon: Award,
    features: ['User management', 'Analytics dashboard', 'API integration', 'Security compliance']
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Requirement Analysis',
    description: 'Analisis mendalam kebutuhan bisnis, target user, dan spesifikasi teknis aplikasi',
    duration: '1-2 minggu',
    icon: Target
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description: 'Pembuatan wireframe, mockup, dan prototype dengan fokus pada user experience',
    duration: '2-3 minggu',
    icon: Palette
  },
  {
    step: '03',
    title: 'Backend Development',
    description: 'Pengembangan server, database, API, dan sistem keamanan aplikasi',
    duration: '3-4 minggu',
    icon: Database
  },
  {
    step: '04',
    title: 'Frontend Development',
    description: 'Implementasi UI design menjadi aplikasi yang fully functional',
    duration: '4-6 minggu',
    icon: Code
  },
  {
    step: '05',
    title: 'Testing & QA',
    description: 'Comprehensive testing, bug fixing, dan quality assurance',
    duration: '1-2 minggu',
    icon: Shield
  },
  {
    step: '06',
    title: 'Deployment & Launch',
    description: 'App Store submission, deployment, dan launch strategy',
    duration: '1 minggu',
    icon: Zap
  }
]

const technologies = [
  { name: 'React Native', category: 'Mobile', color: 'bg-blue-500' },
  { name: 'Flutter', category: 'Mobile', color: 'bg-cyan-500' },
  { name: 'Swift', category: 'iOS', color: 'bg-orange-500' },
  { name: 'Kotlin', category: 'Android', color: 'bg-green-500' },
  { name: 'Node.js', category: 'Backend', color: 'bg-green-600' },
  { name: 'Firebase', category: 'Backend', color: 'bg-yellow-500' },
  { name: 'MongoDB', category: 'Database', color: 'bg-green-700' },
  { name: 'PostgreSQL', category: 'Database', color: 'bg-blue-600' },
]

export default function AppServicePage() {
  const service = SERVICES.APP
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
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex mb-8"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-muted-foreground">/</span>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Layanan
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-muted-foreground">/</span>
                <span className="text-foreground font-medium">Pembuatan Aplikasi</span>
              </div>
            </li>
          </ol>
        </motion.nav>

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
              Mobile App Development Service
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-6"
          >
            <Smartphone className="h-12 w-12 text-white" />
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Pembuatan Aplikasi
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Mobile & Web App
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {service.description}. Dari aplikasi mobile native hingga progressive web app yang canggih, 
            kami menciptakan solusi digital yang tidak hanya memukau secara visual, tapi juga powerful dalam mendorong growth bisnis Anda.
          </p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">150+</div>
              <div className="text-sm text-muted-foreground">Apps Developed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.8★</div>
              <div className="text-sm text-muted-foreground">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500K+</div>
              <div className="text-sm text-muted-foreground">Total Downloads</div>
            </div>
          </motion.div>
        </motion.div>

        {/* App Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Fitur Unggulan Aplikasi Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Setiap aplikasi yang kami kembangkan dilengkapi dengan teknologi terdepan dan fitur-fitur modern 
              untuk memberikan pengalaman pengguna yang luar biasa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-purple-500/20">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-purple-600 transition-colors">
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

        {/* App Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Jenis Aplikasi yang Kami Kembangkan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kami spesialisasi dalam berbagai jenis aplikasi sesuai dengan kebutuhan dan target market Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-purple-500/20">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4"
                  >
                    <type.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                    {type.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {type.description}
                  </p>
                  
                  <ul className="space-y-1">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
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
              Kami menggunakan teknologi terdepan dan framework modern untuk memastikan aplikasi Anda memiliki performa optimal.
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
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
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
                          ? 'ring-2 ring-purple-500 shadow-xl shadow-purple-500/25 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20' 
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
                        
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
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
                  <TabsTrigger value="process" className="font-semibold">Proses Development</TabsTrigger>
                  <TabsTrigger value="features" className="font-semibold">Fitur Lengkap</TabsTrigger>
                  <TabsTrigger value="portfolio" className="font-semibold">Portfolio</TabsTrigger>
                </TabsList>
                
                <TabsContent value="process" className="mt-8">
                  <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        Proses Pengembangan Aplikasi
                      </CardTitle>
                      <CardDescription className="text-base">
                        Metodologi agile development dengan quality assurance di setiap tahap
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
                              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold">
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
                              className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"
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
                        Fitur Lengkap Aplikasi
                      </CardTitle>
                      <CardDescription className="text-base">
                        Semua fitur yang akan Anda dapatkan dalam layanan pembuatan aplikasi
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
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        Portfolio Aplikasi
                      </CardTitle>
                      <CardDescription className="text-base">
                        Contoh aplikasi berkualitas tinggi yang telah kami kembangkan untuk klien
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-12">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        >
                          <Smartphone className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          Lihat Hasil Karya Aplikasi Kami
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                          Jelajahi portfolio lengkap aplikasi mobile dan web app yang telah kami kembangkan dengan teknologi terdepan
                        </p>
                        
                        <Link href="/portfolio?category=app">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-6 text-base font-semibold">
                              <Smartphone className="mr-2 h-5 w-5" />
                              Lihat Portfolio Aplikasi
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-lg" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
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
                  <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
                      {formatCurrency(selectedPackage.price)}
                    </div>
                    <div className="flex items-center justify-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-purple-500" />
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
                        <span className="font-medium text-green-700 dark:text-green-400">App Store Ready</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-purple-600" />
                        <span className="font-medium text-purple-700 dark:text-purple-400">Native Performance</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col gap-3 relative z-10">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 font-bold py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300" size="lg">
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
                        <Button variant="outline" className="w-full border-2 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold py-4">
                          <Users className="mr-2 h-4 w-4 text-purple-600" />
                          Konsultasi
                        </Button>
                      </motion.div>
                    </Link>
                  </div>

                  {/* Additional info */}
                  <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-muted-foreground mb-2">
                      📱 <strong>Cross-Platform</strong> - iOS & Android compatible
                    </p>
                    <p className="text-xs text-muted-foreground">
                      🚀 <strong>App Store Submission</strong> - Termasuk dalam paket
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
                <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                    >
                      <Store className="w-6 h-6" />
                    </motion.div>
                    
                    <h3 className="font-bold text-lg mb-2">Launch Special!</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Dapatkan <strong>FREE App Store Submission</strong> untuk pemesanan minggu ini
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
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Smartphone className="w-8 h-8" />
                </div>
              </motion.div>
              
              <h2 className="text-3xl font-bold mb-4">
                Siap Meluncurkan Aplikasi Impian Anda?
              </h2>
              
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Bergabunglah dengan 150+ klien yang telah mempercayakan pengembangan aplikasi mereka kepada kami. 
                Konsultasi gratis sekarang dan wujudkan aplikasi yang dapat mengubah bisnis Anda!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-6 text-base shadow-2xl min-w-[200px]">
                      <Users className="mr-2 h-5 w-5" />
                      Konsultasi Gratis
                    </Button>
                  </motion.div>
                </Link>
                
                <Link href="/portfolio?category=app">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-base min-w-[200px]">
                      <Smartphone className="mr-2 h-5 w-5" />
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