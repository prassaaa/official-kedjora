'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Monitor, Check, Clock, RefreshCw, ArrowRight, Star, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SERVICES, SITE_CONFIG } from '@/constants'
import { formatCurrency } from '@/lib/utils'

export default function WebsiteServicePage() {
  const service = SERVICES.WEBSITE
  const [selectedPackage, setSelectedPackage] = useState(service.packages[1]) // Default to Standard

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Beranda
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-muted-foreground">/</span>
              <Link href="/services" className="text-muted-foreground hover:text-primary">
                Layanan
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-foreground font-medium">Pembuatan Website</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-lg bg-primary/10 mb-6">
          <Monitor className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {service.description}. Dari landing page sederhana hingga e-commerce kompleks, 
          kami siap membantu mewujudkan website impian Anda.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Package Selection */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-6">Pilih Paket yang Sesuai</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {service.packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedPackage.id === pkg.id 
                        ? 'ring-2 ring-primary shadow-lg' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    <CardHeader className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        {pkg.is_popular && (
                          <Badge variant="default" className="text-xs">
                            <Star className="h-3 w-3 mr-1" />
                            Populer
                          </Badge>
                        )}
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
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
                    <CardContent>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Fitur Lengkap</TabsTrigger>
                <TabsTrigger value="process">Proses Kerja</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fitur Lengkap Website</CardTitle>
                    <CardDescription>
                      Semua fitur yang akan Anda dapatkan dalam layanan pembuatan website
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="process" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Proses Pengerjaan</CardTitle>
                    <CardDescription>
                      Tahapan kerja yang akan kami lakukan untuk proyek Anda
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { step: 1, title: "Konsultasi & Analisis", desc: "Diskusi kebutuhan dan analisis requirement" },
                        { step: 2, title: "Design & Wireframe", desc: "Pembuatan design dan struktur website" },
                        { step: 3, title: "Development", desc: "Coding dan implementasi fitur website" },
                        { step: 4, title: "Testing & Review", desc: "Testing fungsionalitas dan review bersama klien" },
                        { step: 5, title: "Launch & Handover", desc: "Deploy website dan serah terima project" }
                      ].map((item) => (
                        <div key={item.step} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="portfolio" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Website</CardTitle>
                    <CardDescription>
                      Contoh website yang telah kami buat untuk klien
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        Lihat portfolio lengkap kami untuk melihat kualitas pekerjaan
                      </p>
                      <Link href="/portfolio?category=website">
                        <Button variant="outline">
                          Lihat Portfolio Website
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sticky top-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Paket Terpilih</CardTitle>
                <CardDescription>
                  {selectedPackage.name} - {service.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {formatCurrency(selectedPackage.price)}
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {selectedPackage.delivery_time} hari
                    </div>
                    <div className="flex items-center gap-1">
                      <RefreshCw className="h-4 w-4" />
                      {selectedPackage.revisions === -1 ? 'Unlimited' : `${selectedPackage.revisions}x`} revisi
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold">Yang Anda Dapatkan:</h4>
                  <ul className="space-y-1">
                    {selectedPackage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button className="w-full" size="lg">
                  Pesan Sekarang
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href={SITE_CONFIG.links.whatsapp} target="_blank" className="w-full">
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat WhatsApp
                  </Button>
                </Link>
                <Link href="/contact" className="w-full">
                  <Button variant="ghost" className="w-full">
                    Konsultasi Gratis
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
