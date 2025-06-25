'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, Users, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/constants'

const stats = [
  { name: 'Proyek Selesai', value: '500+', icon: CheckCircle },
  { name: 'Klien Puas', value: '300+', icon: Users },
  { name: 'Rating', value: '4.9/5', icon: Star },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-accent/10 to-primary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Wujudkan{' '}
              <span className="text-primary">Ide Digital</span>{' '}
              Anda Bersama Kami
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Layanan profesional pembuatan website, aplikasi mobile, dan bantuan tugas kuliah/skripsi 
            dengan kualitas terbaik dan harga terjangkau. Dari konsep hingga implementasi.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link href="/contact">
              <Button size="lg" className="group">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                Lihat Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative flex flex-col items-center"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <dt className="text-base leading-7 text-muted-foreground text-center">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl bg-primary/5 px-6 py-16 text-center ring-1 ring-inset ring-primary/10 sm:mt-20 lg:mx-0 lg:max-w-none lg:px-8 lg:py-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan digital Anda. 
            Tim ahli kami siap membantu mewujudkan visi Anda.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href={SITE_CONFIG.links.whatsapp} target="_blank">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Chat WhatsApp
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                Lihat Layanan
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
