'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, Check, Clock, RefreshCw, ArrowRight, Star, MessageCircle, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SERVICES, SITE_CONFIG } from '@/constants'
import { formatCurrency } from '@/lib/utils'

export default function AcademicServicePage() {
  const service = SERVICES.ACADEMIC
  const [selectedPackage, setSelectedPackage] = useState(service.packages[0]) // Default to Assignment

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
              <span className="text-foreground font-medium">Joki Tugas & Skripsi</span>
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
          <GraduationCap className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {service.description}. Bantuan profesional untuk tugas kuliah, skripsi, dan thesis 
          dengan jaminan kualitas dan originalitas.
        </p>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm">
            <Shield className="h-4 w-4" />
            100% Original
          </div>
          <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
            <Check className="h-4 w-4" />
            Garansi Revisi
          </div>
          <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm">
            <Clock className="h-4 w-4" />
            Tepat Waktu
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Package Selection */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-6">Pilih Layanan yang Sesuai</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                <TabsTrigger value="features">Layanan</TabsTrigger>
                <TabsTrigger value="process">Proses Kerja</TabsTrigger>
                <TabsTrigger value="guarantee">Jaminan</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Layanan Akademik Lengkap</CardTitle>
                    <CardDescription>
                      Berbagai jenis bantuan akademik yang kami sediakan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Tugas Kuliah:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <li className="flex items-center"><Check className="h-3 w-3 text-primary mr-2" />Essay & Paper</li>
                          <li className="flex items-center"><Check className="h-3 w-3 text-primary mr-2" />Laporan Praktikum</li>
                          <li className="flex items-center"><Check className="h-3 w-3 text-primary mr-2" />Case Study</li>
                          <li className="flex items-center"><Check className="h-3 w-3 text-primary mr-2" />Presentasi</li>
                          <li className="flex items-center"><Check className="h-3 w-3 text-primary mr-2" />Analisis Data</li>
                          <li className="flex items-center"><Check className="h-3 w-3 text-primary mr-2" />Review Jurnal</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Skripsi & Thesis:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <li className="flex items-center"><Check className="h-3 w-3 text-primary mr-2" />Proposal Penelitian</li>
                          <li className="flex items-center"><Check className="h-3 w-3 text-primary mr-2" />Bab 1-5 Lengkap</li>
                          <li className="flex items-center"><Check className="h-3 w-3 text-primary mr-2" />Metodologi Penelitian</li>
                          <li className="flex items-center"><Check className="h-3 w-3 text-primary mr-2" />Analisis Statistik</li>
                          <li className="flex items-center"><Check className="h-3 w-3 text-primary mr-2" />Bimbingan Intensif</li>
                          <li className="flex items-center"><Check className="h-3 w-3 text-primary mr-2" />Persiapan Sidang</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="process" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Proses Pengerjaan</CardTitle>
                    <CardDescription>
                      Tahapan kerja yang akan kami lakukan untuk tugas Anda
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { step: 1, title: "Konsultasi Kebutuhan", desc: "Diskusi detail requirement dan deadline" },
                        { step: 2, title: "Research & Planning", desc: "Riset mendalam dan perencanaan struktur" },
                        { step: 3, title: "Pengerjaan", desc: "Penulisan dengan referensi terpercaya" },
                        { step: 4, title: "Review & Revisi", desc: "Quality check dan revisi sesuai feedback" },
                        { step: 5, title: "Final Delivery", desc: "Serah terima hasil akhir dan dokumentasi" }
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
              
              <TabsContent value="guarantee" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Jaminan Kualitas</CardTitle>
                    <CardDescription>
                      Komitmen kami untuk memberikan hasil terbaik
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                        <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-800">100% Original</h4>
                          <p className="text-sm text-green-700">Semua karya dibuat dari nol, bebas plagiarisme dengan laporan Turnitin</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <RefreshCw className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Garansi Revisi</h4>
                          <p className="text-sm text-blue-700">Revisi gratis hingga Anda puas dengan hasilnya</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                        <Clock className="h-5 w-5 text-purple-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-purple-800">Tepat Waktu</h4>
                          <p className="text-sm text-purple-700">Jaminan selesai sesuai deadline yang disepakati</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-orange-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-orange-800">Expert Writer</h4>
                          <p className="text-sm text-orange-700">Tim penulis berpengalaman sesuai bidang studi</p>
                        </div>
                      </div>
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
                <CardTitle>Layanan Terpilih</CardTitle>
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
