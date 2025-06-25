'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Monitor, Smartphone, GraduationCap, ArrowRight, Check, Star, Zap, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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

const benefits = [
  {
    icon: Zap,
    title: 'Pengerjaan Cepat',
    description: 'Pengerjaan cepat sesuai deadline'
  },
  {
    icon: Shield,
    title: 'Kualitas Terjamin',
    description: 'Kualitas terjamin dengan garansi'
  },
  {
    icon: Clock,
    title: 'Dukungan 24/7',
    description: 'Dukungan teknis sepanjang waktu'
  },
  {
    icon: Star,
    title: 'Tim Ahli',
    description: 'Tim berpengalaman dan profesional'
  }
]

export default function ServicesSection() {
  const services = [SERVICES.WEBSITE, SERVICES.APP, SERVICES.ACADEMIC]

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              ✨ Layanan Profesional
            </div>
          </motion.div>
          
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Wujudkan Ide Anda Menjadi
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Realitas Digital
            </span>
          </h2>
          
          <p className="text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
            Solusi digital lengkap dan bantuan akademik dengan kualitas terjamin, 
            harga kompetitif, dan eksekusi profesional dari konsep hingga selesai.
          </p>
        </motion.div>

        {/* Benefits */}
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
              className="text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
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

        {/* Services Grid */}
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
            const colorClass = serviceColors[service.id as keyof typeof serviceColors]
            const popularPackage = service.packages[1] // Standard package

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="relative h-full overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/25">
                  {/* Card background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Floating elements */}
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
                    className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
                  />

                  <CardHeader className="text-center relative z-10 pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${colorClass} shadow-lg mb-4`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </motion.div>
                    
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-purple-600 transition-colors">
                      {service.name}
                    </CardTitle>
                    
                    <CardDescription className="text-base text-muted-foreground mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6 relative z-10">
                    {/* Popular Package Highlight */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-2xl border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-2xl" />
                      
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-purple-700 dark:text-purple-300 text-lg">
                          {popularPackage.name}
                        </h4>
                        <motion.span
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full font-medium shadow-lg"
                        >
                          🔥 Populer
                        </motion.span>
                      </div>
                      
                      <div className="text-3xl font-black text-foreground mb-4 flex items-baseline">
                        <span className="text-lg text-muted-foreground mr-1">Rp</span>
                        {formatCurrency(popularPackage.price).replace('Rp ', '')}
                      </div>
                      
                      <ul className="space-y-3">
                        {popularPackage.features.slice(0, 3).map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center text-sm font-medium"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3"
                            >
                              <Check className="h-3 w-3 text-white" />
                            </motion.div>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                        {popularPackage.features.length > 3 && (
                          <li className="text-sm text-muted-foreground font-medium pl-8">
                            +{popularPackage.features.length - 3} fitur lanjutan
                          </li>
                        )}
                      </ul>
                    </motion.div>

                    {/* Price Range */}
                    <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <p className="text-sm text-muted-foreground mb-2 font-medium">
                        {service.packages.length} paket tersedia
                      </p>
                      <div className="flex justify-center items-center gap-2">
                        <span className="text-sm font-medium">Mulai dari</span>
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                          {formatCurrency(Math.min(...service.packages.map(p => p.price)))}
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-3 relative z-10 pt-2">
                    <Link href={`/services/${service.id}`} className="w-full">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className={`w-full group bg-gradient-to-r ${colorClass} hover:shadow-lg hover:shadow-purple-500/25 text-white border-0 font-semibold py-6 text-base`}>
                          Lihat Detail
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Siap Memulai Perjalanan Digital Anda?
              </h3>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Tim ahli kami siap membantu Anda memilih solusi sempurna 
                yang sesuai dengan kebutuhan dan anggaran Anda. Mulai dengan konsultasi gratis hari ini!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-6 text-base">
                      Konsultasi Gratis
                    </Button>
                  </motion.div>
                </Link>
                
                <Link href="/services">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base">
                      Lihat Semua Layanan
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}