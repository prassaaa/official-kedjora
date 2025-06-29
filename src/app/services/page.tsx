'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Monitor, Smartphone, GraduationCap, ArrowRight, Check, Star, Zap, Shield, Clock, Award, Users, TrendingUp, CheckCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SERVICES } from '@/constants'
import { formatCurrency } from '@/lib/utils'

const serviceIcons = {
  website: Monitor,
  app: Smartphone,
  academic: GraduationCap,
}

const serviceColors = {
  website: 'from-blue-500 to-cyan-500',
  app: 'from-purple-500 to-pink-500',
  academic: 'from-green-500 to-emerald-500',
}

const whyChooseUs = [
  {
    title: "Kualitas Terjamin",
    description: "Tim profesional dengan pengalaman 5+ tahun dan sertifikasi internasional",
    icon: Award,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Harga Kompetitif",
    description: "Paket harga transparan yang sesuai dengan budget dan nilai yang Anda dapatkan",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Support 24/7",
    description: "Dukungan teknis dan konsultasi kapan saja melalui berbagai channel komunikasi",
    icon: Clock,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Garansi Kepuasan",
    description: "Revisi unlimited dan garansi uang kembali jika tidak puas dengan hasil",
    icon: Shield,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Pengalaman Luas",
    description: "Telah menangani 500+ proyek dari berbagai industri dan skala bisnis",
    icon: Users,
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Teknologi Terkini",
    description: "Menggunakan framework dan tools terbaru untuk hasil yang optimal dan future-proof",
    icon: Zap,
    color: "from-indigo-500 to-purple-500"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Konsultasi & Analisis",
    description: "Diskusi mendalam tentang kebutuhan, target, dan ekspektasi proyek Anda",
    duration: "1-2 hari"
  },
  {
    step: "02", 
    title: "Perencanaan & Desain",
    description: "Membuat blueprint, wireframe, dan mockup sesuai dengan requirement",
    duration: "3-5 hari"
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Pengembangan dengan metodologi agile dan testing komprehensif",
    duration: "1-4 minggu"
  },
  {
    step: "04",
    title: "Launch & Maintenance",
    description: "Deploy ke production dan dukungan maintenance berkelanjutan",
    duration: "Ongoing"
  }
]

export default function ServicesPage() {
  const services = [SERVICES.WEBSITE, SERVICES.APP, SERVICES.ACADEMIC]

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
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"
          style={{ maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)' }}
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Layanan Profesional
            </div>
          </motion.div>

          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Solusi Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Terdepan untuk Bisnis Anda
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Dari konsep hingga implementasi, kami menyediakan layanan lengkap untuk mengubah visi digital Anda 
            menjadi kenyataan dengan teknologi terkini dan pendekatan yang terpersonalisasi.
          </p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-sm text-muted-foreground">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-sm text-muted-foreground">Tingkat Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
            const colorClass = serviceColors[service.id as keyof typeof serviceColors]
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/25">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Floating decoration */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
                  />

                  <CardHeader className="text-center relative z-10 pb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${colorClass} shadow-lg mb-6`}
                    >
                      <Icon className="h-12 w-12 text-white" />
                    </motion.div>
                    
                    <CardTitle className="text-2xl font-bold group-hover:text-purple-600 transition-colors">
                      {service.name}
                    </CardTitle>
                    
                    <CardDescription className="text-base text-muted-foreground mt-3 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6 relative z-10">
                    {/* Package Overview */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-foreground flex items-center">
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
                        Paket Tersedia
                      </h4>
                      <div className="grid gap-3">
                        {service.packages.map((pkg, pkgIndex) => (
                          <motion.div 
                            key={pkg.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + pkgIndex * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700 transition-all duration-300 bg-white/50 dark:bg-gray-800/50"
                          >
                            <div className="flex items-center gap-3">
                              <div className="font-semibold text-foreground">{pkg.name}</div>
                              {pkg.id === 'standard' && (
                                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                                  <Star className="h-3 w-3 mr-1" />
                                  Populer
                                </Badge>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                {formatCurrency(pkg.price)}
                              </div>
                              <div className="text-xs text-muted-foreground font-medium">
                                {pkg.delivery_time} hari kerja
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-foreground flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Fitur Unggulan
                      </h4>
                      <ul className="space-y-3">
                        {service.packages?.[0]?.features?.slice(0, 4).map((feature, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + idx * 0.1 }}
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
                        {(service.packages?.[0]?.features?.length || 0) > 4 && (
                          <li className="text-sm text-muted-foreground font-medium pl-8">
                            +{(service.packages?.[0]?.features?.length || 0) - 4} fitur canggih lainnya
                          </li>
                        )}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-3 relative z-10 pt-6">
                    <Link href={`/services/${service.id}`} className="w-full">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className={`w-full group bg-gradient-to-r ${colorClass} hover:shadow-lg hover:shadow-purple-500/25 text-white border-0 font-semibold py-6 text-base`}>
                          Lihat Detail & Pesan
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </motion.div>
                    </Link>
                    
                    <Link href="/contact" className="w-full">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button variant="outline" className="w-full border-2 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold py-6 text-base">
                          Konsultasi Gratis
                        </Button>
                      </motion.div>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lebih dari sekedar penyedia layanan, kami adalah partner digital yang berkomitmen 
              untuk kesuksesan jangka panjang bisnis Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full text-center p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-purple-500/20">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Metodologi yang terstruktur dan transparan untuk memastikan hasil terbaik 
              sesuai dengan ekspektasi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <Card className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Step number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  >
                    {step.step}
                  </motion.div>
                  
                  <h3 className="font-bold text-lg text-foreground mb-3 mt-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-3 py-1 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300">
                    {step.duration}
                  </div>
                </Card>

                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
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
                  <Sparkles className="w-8 h-8" />
                </div>
              </motion.div>

              <h2 className="text-3xl font-bold mb-4">
                Siap Mengubah Visi Digital Anda Menjadi Kenyataan?
              </h2>
              
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Bergabunglah dengan 300+ klien yang telah mempercayakan proyek digital mereka kepada kami. 
                Konsultasikan kebutuhan Anda sekarang dan dapatkan penawaran terbaik!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-6 text-base shadow-2xl min-w-[200px]">
                      <Zap className="mr-2 h-5 w-5" />
                      Konsultasi Gratis
                    </Button>
                  </motion.div>
                </Link>
                
                <Link href="/portfolio">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-base min-w-[200px]">
                      <Star className="mr-2 h-5 w-5" />
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