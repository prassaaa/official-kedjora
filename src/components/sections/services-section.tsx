'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Monitor, Smartphone, GraduationCap, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { SERVICES } from '@/constants'
import { formatCurrency } from '@/lib/utils'

const serviceIcons = {
  website: Monitor,
  app: Smartphone,
  academic: GraduationCap,
}

export default function ServicesSection() {
  const services = [SERVICES.WEBSITE, SERVICES.APP, SERVICES.ACADEMIC]

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Layanan Profesional Kami
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Solusi lengkap untuk kebutuhan digital dan akademis Anda dengan kualitas terjamin
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
            const popularPackage = service.packages[1] // Standard package

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Popular Package Highlight */}
                    <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-primary">
                          {popularPackage.name}
                        </h4>
                        <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded-full">
                          Populer
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-3">
                        {formatCurrency(popularPackage.price)}
                      </div>
                      <ul className="space-y-2">
                        {popularPackage.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {popularPackage.features.length > 3 && (
                          <li className="text-sm text-muted-foreground">
                            +{popularPackage.features.length - 3} fitur lainnya
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* All Packages Summary */}
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        {service.packages.length} paket tersedia
                      </p>
                      <div className="flex justify-center items-center gap-2 text-sm">
                        <span>Mulai dari</span>
                        <span className="font-semibold text-primary">
                          {formatCurrency(Math.min(...service.packages.map(p => p.price)))}
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-3">
                    <Link href={`/services/${service.id}`} className="w-full">
                      <Button className="w-full group">
                        Lihat Detail
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            Tidak Yakin Layanan Mana yang Tepat?
          </h3>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Tim ahli kami siap membantu Anda memilih solusi terbaik sesuai kebutuhan dan budget
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Link href="/contact">
              <Button size="lg">
                Konsultasi Gratis
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                Lihat Semua Layanan
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
