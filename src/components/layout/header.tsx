'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, LogOut, Sparkles, ChevronDown } from 'lucide-react'
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
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { user, signOut } = useAuthContext()
  const isAdmin = useIsAdmin()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSignOut = async () => {
    await signOut()
    setMobileMenuOpen(false)
    setUserMenuOpen(false)
  }

  return (
    <>
      {/* Floating Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      >
        <motion.nav
          animate={{
            backgroundColor: scrolled 
              ? 'rgba(248, 250, 252, 0.85)' // Sedikit lebih gelap dengan hint abu-abu
              : 'rgba(255, 255, 255, 0.1)',
            backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
            borderColor: scrolled 
              ? 'rgba(0, 0, 0, 0.08)' 
              : 'rgba(255, 255, 255, 0.2)',
            boxShadow: scrolled
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.06)'
              : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="mx-auto max-w-6xl rounded-2xl border border-white/20 px-6 py-4"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center space-x-3">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0]
                  }}
                  className="relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -inset-1 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 rounded-xl blur opacity-30"
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span className={`text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent ${
                    !scrolled ? 'drop-shadow-lg' : ''
                  }`}>
                    {SITE_CONFIG.name}
                  </span>
                  <span className={`text-xs font-medium ${
                    scrolled ? 'text-gray-500' : 'text-white/70'
                  }`}>
                    Freelance Services
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        scrolled 
                          ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        whileHover={{
                          width: '70%',
                          x: '-50%',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Auth Section */}
            <div className="hidden lg:flex items-center space-x-3">
              {user ? (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      scrolled 
                        ? 'text-gray-700 hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg`}>
                      {(user.full_name || user.email || 'U')[0].toUpperCase()}
                    </div>
                    <span className="text-sm font-medium max-w-24 truncate">
                      {user.full_name || user.email}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
                  </motion.button>

                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 bg-slate-50/95 backdrop-blur-xl rounded-xl border border-gray-200 shadow-xl py-2"
                      >
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {user.full_name || user.email}
                          </p>
                          <p className="text-xs text-gray-500">
                            {isAdmin ? 'Administrator' : 'Client'}
                          </p>
                        </div>
                        
                        <Link href={isAdmin ? "/admin" : "/dashboard"}>
                          <motion.div
                            whileHover={{ x: 4 }}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <User className="w-4 h-4 mr-3" />
                            {isAdmin ? "Panel Admin" : "Dashboard"}
                          </motion.div>
                        </Link>
                        
                        <motion.button
                          whileHover={{ x: 4 }}
                          onClick={handleSignOut}
                          className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Keluar
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link href="/auth/login">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className={`rounded-xl px-6 ${
                          scrolled 
                            ? 'text-gray-700 hover:bg-gray-100' 
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        Masuk
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/auth/register">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="sm"
                        className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white border-0 rounded-xl px-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                        />
                        <span className="relative z-10">Daftar</span>
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-xl transition-colors duration-200 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 200,
                duration: 0.5 
              }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-slate-50/95 backdrop-blur-2xl border-l border-gray-200 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {SITE_CONFIG.name}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-2 px-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link href={item.href}>
                          <motion.div
                            whileHover={{ x: 4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-200 group"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="text-base font-medium">{item.name}</span>
                            <motion.div
                              className="ml-auto w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100"
                              transition={{ duration: 0.2 }}
                            />
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Auth Section */}
                <div className="border-t border-gray-200 p-6">
                  {user ? (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {(user.full_name || user.email || 'U')[0].toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {user.full_name || user.email}
                          </p>
                          <p className="text-xs text-gray-500">
                            {isAdmin ? 'Administrator' : 'Client'}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Link href={isAdmin ? "/admin" : "/dashboard"}>
                          <motion.div
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <User className="w-5 h-5 mr-3" />
                            <span className="font-medium">{isAdmin ? "Panel Admin" : "Dashboard"}</span>
                          </motion.div>
                        </Link>
                        
                        <motion.button
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleSignOut}
                          className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                        >
                          <LogOut className="w-5 h-5 mr-3" />
                          <span className="font-medium">Keluar</span>
                        </motion.button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link href="/auth/login">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-3 text-center text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Masuk
                        </motion.div>
                      </Link>
                      <Link href="/auth/register">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-3 text-center text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-medium shadow-lg transition-all duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Daftar
                        </motion.div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Click outside to close user menu */}
      {userMenuOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setUserMenuOpen(false)}
        />
      )}
    </>
  )
}