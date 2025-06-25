'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Monitor, Smartphone, GraduationCap, ArrowRight, Check, Star } from 'lucide-react'
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

export default function ServicesPage() {
  const services = [SERVICES.WEBSITE, SERVICES.APP, SERVICES.ACADEMIC]

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
          Layanan Profesional Kami
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Solusi lengkap untuk kebutuhan digital dan akademis Anda. Dari konsep hingga implementasi, 
          kami siap membantu mewujudkan visi Anda dengan kualitas terbaik.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Package Overview */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Paket Tersedia:</h4>
                    <div className="grid gap-3">
                      {service.packages.map((pkg) => (
                        <div key={pkg.id} className="flex items-center justify-between p-3 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <div className="font-medium">{pkg.name}</div>
                            {pkg.id === 'standard' && (
                              <Badge variant="default" className="text-xs">
                                <Star className="h-3 w-3 mr-1" />
                                Populer
                              </Badge>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-primary">
                              {formatCurrency(pkg.price)}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {pkg.delivery_time} hari
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold">Fitur Utama:</h4>
                    <ul className="space-y-2">
                      {service.packages?.[0]?.features?.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      )) || []}
                      {(service.packages?.[0]?.features?.length || 0) > 4 && (
                        <li className="text-sm text-muted-foreground">
                          +{(service.packages?.[0]?.features?.length || 0) - 4} fitur lainnya
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                  <Link href={`/services/${service.id}`} className="w-full">
                    <Button className="w-full group">
                      Lihat Detail & Pesan
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="w-full">
                      Konsultasi Gratis
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-muted/30 rounded-lg p-8 mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Mengapa Memilih Kami?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Kualitas Terjamin",
              description: "Tim profesional dengan pengalaman bertahun-tahun",
              icon: "🏆"
            },
            {
              title: "Harga Kompetitif",
              description: "Paket harga yang sesuai dengan budget Anda",
              icon: "💰"
            },
            {
              title: "Support 24/7",
              description: "Dukungan teknis kapan saja Anda butuhkan",
              icon: "🕒"
            },
            {
              title: "Garansi Revisi",
              description: "Revisi gratis hingga Anda puas dengan hasilnya",
              icon: "✅"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Siap Memulai Proyek Anda?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Konsultasikan kebutuhan Anda dengan tim ahli kami. Dapatkan penawaran terbaik 
          dan solusi yang tepat untuk proyek Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="min-w-[200px]">
              Konsultasi Gratis
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Lihat Portfolio
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
