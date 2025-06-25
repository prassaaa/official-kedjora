'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, LogOut, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuthContext, useIsAdmin } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/constants'

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Layanan', href: '/services' },
  { name: 'Portofolio', href: '/portfolio' },
  { name: 'Testimoni', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Kontak', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, signOut } = useAuthContext()
  const isAdmin = useIsAdmin()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSignOut = async () => {
    await signOut()
    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-black/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{SITE_CONFIG.name}</span>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -5, 5, 0]
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-2"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              <span className={`text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ${
                scrolled ? '' : 'text-white'
              }`}>
                {SITE_CONFIG.name}
              </span>
            </motion.div>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 hover:bg-white/10 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <span className="sr-only">Buka menu utama</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item, index) => (
            <motion.div 
              key={item.name} 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Link
                href={item.href}
                className={`relative text-sm font-semibold leading-6 transition-all duration-300 hover:scale-105 group ${
                  scrolled 
                    ? 'text-gray-700 hover:text-purple-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Auth section */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {user ? (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-x-4"
            >
              <span className={`text-sm ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>
                Hai, {user.full_name || user.email}
              </span>
              <Link href={isAdmin ? "/admin" : "/dashboard"}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={`${
                      scrolled 
                        ? 'hover:bg-purple-50 text-gray-700' 
                        : 'hover:bg-white/10 text-white'
                    }`}
                  >
                    <User className="h-4 w-4 mr-2" />
                    {isAdmin ? "Panel Admin" : "Dasbor"}
                  </Button>
                </motion.div>
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleSignOut}
                  className={`${
                    scrolled 
                      ? 'hover:bg-red-50 text-gray-700 hover:text-red-600' 
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Keluar
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-x-4"
            >
              <Link href="/auth/login">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={`${
                      scrolled 
                        ? 'hover:bg-gray-100 text-gray-700' 
                        : 'hover:bg-white/10 text-white'
                    }`}
                  >
                    Masuk
                  </Button>
                </motion.div>
              </Link>
              <Link href="/auth/register">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Daftar
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          )}
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-2xl px-6 py-6 sm:max-w-sm border-l border-white/20"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">{SITE_CONFIG.name}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {SITE_CONFIG.name}
                    </span>
                  </div>
                </Link>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
                  >
                    <span className="sr-only">Tutup menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </motion.div>
              </div>
              
              {/* Navigation */}
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-200">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700 transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Auth section */}
                  <div className="py-6">
                    {user ? (
                      <div className="space-y-2">
                        <div className="px-3 py-2 text-sm text-gray-600 bg-gray-50 rounded-lg">
                          Hai, {user.full_name || user.email}
                        </div>
                        <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                          <Link
                            href={isAdmin ? "/admin" : "/dashboard"}
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {isAdmin ? "Panel Admin" : "Dasbor"}
                          </Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.98 }}>
                          <button
                            onClick={handleSignOut}
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-red-600 hover:bg-red-50 w-full text-left"
                          >
                            Keluar
                          </button>
                        </motion.div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Link
                            href="/auth/login"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 text-center border border-gray-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Masuk
                          </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Link
                            href="/auth/register"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-center shadow-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Daftar
                          </Link>
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}