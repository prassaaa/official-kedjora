import HeroSection from '@/components/sections/hero-section'
import ServicesSection from '@/components/sections/services-section'
import PortfolioSection from '@/components/sections/portfolio-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import ContactSection from '@/components/sections/contact-section'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
