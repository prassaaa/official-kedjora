'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Users, CheckCircle, Sparkles, Zap, Target, Monitor, Smartphone, Coffee, Code } from 'lucide-react'
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

// Simplified floating tools
const freelanceTools = [
  { icon: Monitor, position: 'top-32 left-16', delay: 0, rotation: 15 },
  { icon: Smartphone, position: 'top-48 right-24', delay: 1, rotation: -20 },
  { icon: Coffee, position: 'bottom-32 left-24', delay: 2, rotation: 10 },
  { icon: Code, position: 'bottom-48 right-16', delay: 3, rotation: -15 },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 min-h-[85vh]">
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

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          {/* Badge - Centered at top */}
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

          {/* Main Content Area - Text and Image Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left lg:pl-8">
              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
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
                className="mt-8 text-lg leading-8 text-gray-300 max-w-2xl lg:mx-0"
              >
                Layanan pengembangan web profesional, aplikasi mobile, dan bantuan akademik. 
                Dari konsep hingga deployment, kami mewujudkan ide Anda dengan teknologi terdepan.
              </motion.p>
            </div>

            {/* Right Side - Hero Animation Image */}
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Subtle floating tools around the main image */}
              {freelanceTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1.1, 0.8],
                    rotate: [tool.rotation - 5, tool.rotation + 5, tool.rotation - 5],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    delay: tool.delay,
                    ease: "easeInOut"
                  }}
                  className={`absolute ${tool.position} text-white/20 z-10`}
                >
                  <tool.icon size={32} />
                </motion.div>
              ))}

              {/* Main Hero Animation Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Glowing background effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"
                />
                
                {/* Main Image */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative z-20 perspective-1000"
                >
                  <div className="relative w-full max-w-lg mx-auto">
                    <Image
                      src="/animasi-hero.png"
                      alt="Kedjora Freelance Animation - Professional Web Development Process"
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain drop-shadow-2xl"
                      priority
                    />
                    
                    {/* Animated border glow */}
                    <motion.div
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [0.95, 1.05, 0.95]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-cyan-400/30 rounded-2xl blur-xl -z-10"
                    />
                  </div>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-4 py-2 shadow-xl border border-white/20"
                  >
                    <p className="text-white font-semibold text-sm flex items-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        <Sparkles className="w-4 h-4" />
                      </motion.div>
                      Freelance Professional
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* CTA Buttons - Centered below content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
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

          {/* Stats - Centered at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto max-w-4xl"
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
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-3"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <dt className="text-sm leading-6 text-gray-300 text-center mb-1">
                        {stat.name}
                      </dt>
                      <dd className="text-2xl font-bold tracking-tight text-white">
                        {stat.value}
                      </dd>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center mt-12"
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
    </section>
  )
}