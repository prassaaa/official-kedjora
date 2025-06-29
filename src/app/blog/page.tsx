'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, Search, Tag, ArrowRight, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

// Mock data - replace with actual data from database
const blogPosts = [
  {
    id: 1,
    title: 'Tips Memilih Jasa Pembuatan Website yang Tepat',
    slug: 'tips-memilih-jasa-pembuatan-website',
    excerpt: 'Panduan lengkap untuk memilih jasa pembuatan website yang sesuai dengan kebutuhan dan budget Anda. Pelajari faktor-faktor penting yang harus dipertimbangkan.',
    content: 'Dalam era digital saat ini, memiliki website yang profesional adalah kebutuhan mutlak untuk bisnis...',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    category: 'Web Development',
    tags: ['website', 'tips', 'bisnis', 'digital'],
    author: 'Tim Kedjora',
    publishedAt: '2024-01-15',
    views: 1250,
    readTime: 5,
    featured: true
  },
  {
    id: 2,
    title: 'Tren Teknologi Mobile App Development 2024',
    slug: 'tren-teknologi-mobile-app-2024',
    excerpt: 'Eksplorasi tren terbaru dalam pengembangan aplikasi mobile yang akan mendominasi tahun 2024. Dari AI hingga AR/VR.',
    content: 'Industri pengembangan aplikasi mobile terus berkembang pesat. Berikut adalah tren terbaru yang perlu Anda ketahui...',
    featuredImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
    category: 'Mobile Development',
    tags: ['mobile', 'app', 'teknologi', '2024', 'tren'],
    author: 'Tim Kedjora',
    publishedAt: '2024-01-20',
    views: 980,
    readTime: 7,
    featured: true
  },
  {
    id: 3,
    title: 'Cara Menulis Skripsi yang Baik dan Benar',
    slug: 'cara-menulis-skripsi-yang-baik',
    excerpt: 'Panduan komprehensif untuk menulis skripsi yang berkualitas dengan metodologi yang tepat. Tips dari para ahli.',
    content: 'Menulis skripsi adalah tantangan besar bagi setiap mahasiswa. Berikut adalah panduan step-by-step...',
    featuredImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
    category: 'Academic',
    tags: ['skripsi', 'akademik', 'tips', 'mahasiswa', 'penelitian'],
    author: 'Tim Kedjora',
    publishedAt: '2024-01-25',
    views: 1500,
    readTime: 10,
    featured: false
  },
  {
    id: 4,
    title: 'Pentingnya SEO untuk Website Bisnis',
    slug: 'pentingnya-seo-untuk-website-bisnis',
    excerpt: 'Mengapa SEO sangat penting untuk kesuksesan website bisnis Anda. Strategi SEO yang efektif untuk meningkatkan traffic.',
    content: 'Search Engine Optimization (SEO) adalah kunci untuk meningkatkan visibilitas website Anda...',
    featuredImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop',
    category: 'SEO & Marketing',
    tags: ['seo', 'marketing', 'website', 'bisnis', 'traffic'],
    author: 'Tim Kedjora',
    publishedAt: '2024-02-01',
    views: 850,
    readTime: 6,
    featured: false
  },
  {
    id: 5,
    title: 'UI/UX Design Principles untuk Aplikasi Mobile',
    slug: 'ui-ux-design-principles-mobile-app',
    excerpt: 'Prinsip-prinsip dasar UI/UX design yang harus diterapkan dalam pengembangan aplikasi mobile untuk user experience yang optimal.',
    content: 'User Interface dan User Experience adalah aspek krusial dalam pengembangan aplikasi mobile...',
    featuredImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
    category: 'UI/UX Design',
    tags: ['ui', 'ux', 'design', 'mobile', 'user experience'],
    author: 'Tim Kedjora',
    publishedAt: '2024-02-05',
    views: 720,
    readTime: 8,
    featured: true
  },
  {
    id: 6,
    title: 'Strategi Digital Marketing untuk UMKM',
    slug: 'strategi-digital-marketing-umkm',
    excerpt: 'Panduan praktis digital marketing untuk UMKM dengan budget terbatas. Strategi yang terbukti efektif meningkatkan penjualan.',
    content: 'Digital marketing adalah kunci sukses UMKM di era digital. Berikut strategi yang dapat diterapkan...',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    category: 'Digital Marketing',
    tags: ['marketing', 'umkm', 'digital', 'strategi', 'penjualan'],
    author: 'Tim Kedjora',
    publishedAt: '2024-02-10',
    views: 650,
    readTime: 9,
    featured: false
  }
]

const categories = [
  'Semua',
  'Web Development',
  'Mobile Development',
  'Academic',
  'SEO & Marketing',
  'UI/UX Design',
  'Digital Marketing'
]

const popularTags = [
  'website', 'mobile', 'app', 'seo', 'ui/ux', 'tips', 'bisnis', 'akademik', 'teknologi', 'marketing'
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  useEffect(() => {
    let filtered = blogPosts

    // Filter by category
    if (selectedCategory !== 'Semua') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }, [selectedCategory, searchQuery])

  const featuredPosts = blogPosts.filter(post => post.featured)
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 pt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">
          Blog & Artikel
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Temukan tips, tutorial, dan insight terbaru seputar teknologi, pengembangan web & mobile, 
          serta dunia akademik dari para ahli kami.
        </p>
      </motion.div>

      {/* Featured Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-8">Artikel Pilihan</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.slice(0, 2).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative aspect-video">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="default">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString('id-ID')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} min baca
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {post.views}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="group">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari artikel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="space-y-8">
            <AnimatePresence>
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={`${selectedCategory}-${post.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  layout
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative aspect-video md:aspect-square">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline">{post.category}</Badge>
                          {post.featured && (
                            <Badge variant="default" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.publishedAt).toLocaleDateString('id-ID')}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime} min
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {post.views}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 4).map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="outline" className="group">
                            Baca Artikel
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">Tidak ada artikel ditemukan</h3>
              <p className="text-muted-foreground mb-6">
                Coba ubah kata kunci pencarian atau kategori
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory('Semua')
                  setSearchQuery('')
                }}
                variant="outline"
              >
                Reset Filter
              </Button>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-8">
            {/* Latest Posts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Artikel Terbaru</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {latestPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          sizes="64px"
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <Link href={`/blog/${post.slug}`}>
                          <h4 className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors">
                            {post.title}
                          </h4>
                        </Link>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.publishedAt).toLocaleDateString('id-ID')}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Popular Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Tag Populer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Button
                        key={tag}
                        variant="outline"
                        size="sm"
                        onClick={() => setSearchQuery(tag)}
                        className="text-xs"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                  <CardDescription>
                    Dapatkan artikel terbaru langsung di email Anda
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Email Anda" type="email" />
                  <Button className="w-full" size="sm">
                    Berlangganan
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
