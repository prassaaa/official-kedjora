'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, Users, CheckCircle, Sparkles, Zap, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { name: 'Proyek Selesai', value: '500+', icon: CheckCircle },
  { name: 'Klien Puas', value: '300+', icon: Users },
  { name: 'Rating', value: '4.9/5', icon: Star },
]

const floatingElements = [
  { icon: Sparkles, position: 'top-20 left-10', delay: 0 },
  { icon: Zap, position: 'top-40 right-20', delay: 0.5 },
  { icon: Target, position: 'bottom-40 left-20', delay: 1 },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
        />
        
        {/* Floating icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              y: [0, -20, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
            className={`absolute ${element.position} text-white/20`}
          >
            <element.icon size={32} />
          </motion.div>
        ))}
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex items-center min-h-screen">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/20">
              <Sparkles className="mr-2 h-4 w-4 text-yellow-400" />
              <span>Dipercaya oleh 300+ Klien</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Wujudkan{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Visi Digital
              </motion.span>{' '}
              Anda Menjadi Kenyataan
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-xl leading-8 text-gray-300 max-w-3xl mx-auto"
          >
            Layanan pengembangan web profesional, aplikasi mobile, dan bantuan akademik. 
            Dari konsep hingga deployment, kami mewujudkan ide Anda dengan teknologi terdepan 
            dan solusi desain yang inovatif.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-2xl shadow-purple-500/25"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-md blur-xl opacity-30 group-hover:opacity-50 transition-opacity"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="relative flex items-center">
                    Mulai Proyek Anda
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>
            </Link>
            
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold"
                >
                  Lihat Portfolio
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-20 max-w-4xl"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <dt className="text-base leading-7 text-gray-300 text-center mb-2">
                        {stat.name}
                      </dt>
                      <dd className="text-4xl font-bold tracking-tight text-white">
                        {stat.value}
                      </dd>
                    </div>
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
            <p className="text-white/60 text-sm mt-2 text-center">Gulir untuk menjelajahi</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}