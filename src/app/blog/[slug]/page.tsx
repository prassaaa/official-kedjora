'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  User, 
  Eye, 
  Share2, 
  ArrowLeft, 
  ArrowRight,
  Tag,
  Heart,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Copy
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

// Mock data - replace with actual data from database
const blogPost = {
  id: 1,
  title: 'Tips Memilih Jasa Pembuatan Website yang Tepat',
  slug: 'tips-memilih-jasa-pembuatan-website',
  excerpt: 'Panduan lengkap untuk memilih jasa pembuatan website yang sesuai dengan kebutuhan dan budget Anda.',
  content: `
    <h2>Mengapa Website Penting untuk Bisnis?</h2>
    <p>Dalam era digital saat ini, memiliki website yang profesional adalah kebutuhan mutlak untuk bisnis. Website bukan hanya sekedar "kartu nama digital", tetapi juga merupakan aset bisnis yang dapat meningkatkan kredibilitas, memperluas jangkauan pasar, dan meningkatkan penjualan.</p>
    
    <h2>Faktor-Faktor Penting dalam Memilih Jasa Website</h2>
    
    <h3>1. Portfolio dan Pengalaman</h3>
    <p>Hal pertama yang harus Anda perhatikan adalah portfolio dari jasa pembuatan website tersebut. Lihat contoh-contoh website yang pernah mereka buat:</p>
    <ul>
      <li>Apakah design-nya menarik dan profesional?</li>
      <li>Apakah website-nya responsive (mobile-friendly)?</li>
      <li>Apakah loading speed-nya cepat?</li>
      <li>Apakah ada fitur-fitur yang sesuai dengan kebutuhan Anda?</li>
    </ul>
    
    <h3>2. Teknologi yang Digunakan</h3>
    <p>Pastikan jasa website menggunakan teknologi terkini yang mendukung:</p>
    <ul>
      <li>Responsive design untuk semua device</li>
      <li>SEO-friendly structure</li>
      <li>Fast loading speed</li>
      <li>Security yang baik</li>
      <li>Easy to maintain</li>
    </ul>
    
    <h3>3. Layanan Purna Jual</h3>
    <p>Website membutuhkan maintenance dan update berkala. Pastikan penyedia jasa memberikan:</p>
    <ul>
      <li>Garansi dan support</li>
      <li>Training penggunaan</li>
      <li>Backup dan security</li>
      <li>Update content</li>
    </ul>
    
    <h2>Tips Memilih Paket yang Tepat</h2>
    <p>Sesuaikan paket dengan kebutuhan dan budget Anda:</p>
    
    <h3>Paket Basic</h3>
    <p>Cocok untuk bisnis kecil atau personal branding yang membutuhkan website sederhana dengan fitur dasar.</p>
    
    <h3>Paket Standard</h3>
    <p>Ideal untuk bisnis menengah yang membutuhkan fitur lebih lengkap seperti admin panel, contact form, dan integrasi social media.</p>
    
    <h3>Paket Premium</h3>
    <p>Untuk bisnis besar atau e-commerce yang membutuhkan fitur advanced seperti payment gateway, inventory management, dan custom features.</p>
    
    <h2>Red Flags yang Harus Dihindari</h2>
    <ul>
      <li>Harga yang terlalu murah (biasanya kualitas rendah)</li>
      <li>Tidak ada portfolio yang jelas</li>
      <li>Tidak memberikan garansi</li>
      <li>Komunikasi yang buruk</li>
      <li>Tidak transparan tentang teknologi yang digunakan</li>
    </ul>
    
    <h2>Kesimpulan</h2>
    <p>Memilih jasa pembuatan website yang tepat adalah investasi jangka panjang untuk bisnis Anda. Jangan hanya terpaku pada harga, tetapi pertimbangkan juga kualitas, pengalaman, dan layanan purna jual. Lakukan riset yang mendalam dan jangan ragu untuk bertanya detail tentang proses pengerjaan.</p>
    
    <p>Jika Anda membutuhkan konsultasi lebih lanjut tentang pembuatan website, tim Kedjora siap membantu Anda menemukan solusi yang tepat sesuai kebutuhan dan budget.</p>
  `,
  featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
  category: 'Web Development',
  tags: ['website', 'tips', 'bisnis', 'digital', 'web development'],
  author: {
    name: 'Tim Kedjora',
    avatar: 'https://ui-avatars.com/api/?name=Tim+Kedjora&background=3b82f6&color=fff',
    bio: 'Tim ahli Kedjora yang berpengalaman dalam pengembangan website dan aplikasi.'
  },
  publishedAt: '2024-01-15',
  updatedAt: '2024-01-16',
  views: 1250,
  readTime: 5,
  likes: 45,
  comments: 12
}

const relatedPosts = [
  {
    id: 2,
    title: 'Pentingnya SEO untuk Website Bisnis',
    slug: 'pentingnya-seo-untuk-website-bisnis',
    featuredImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=200&fit=crop',
    publishedAt: '2024-02-01',
    readTime: 6
  },
  {
    id: 3,
    title: 'Tren Design Website 2024',
    slug: 'tren-design-website-2024',
    featuredImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop',
    publishedAt: '2024-02-05',
    readTime: 7
  }
]

export default function BlogPostPage() {
  const params = useParams()
  const [liked, setLiked] = useState(false)
  const [shareMenuOpen, setShareMenuOpen] = useState(false)

  // Simulate fetching post data based on slug
  useEffect(() => {
    // TODO: Fetch actual post data from database using params.slug
    console.log('Fetching post with slug:', params.slug)
  }, [params.slug])

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = blogPost.title
    
    let shareUrl = ''
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        alert('Link copied to clipboard!')
        return
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
    
    setShareMenuOpen(false)
  }

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
              <Link href="/blog" className="text-muted-foreground hover:text-primary">
                Blog
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-foreground font-medium line-clamp-1">
                {blogPost.title}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <header className="mb-8">
              <div className="mb-4">
                <Badge variant="default" className="mb-4">
                  {blogPost.category}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 overflow-hidden rounded-full">
                    <Image
                      src={blogPost.author.avatar}
                      alt={blogPost.author.name}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <span>{blogPost.author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(blogPost.publishedAt).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blogPost.readTime} min baca
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {blogPost.views} views
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center gap-4 mb-8">
                <Button
                  variant={liked ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLiked(!liked)}
                  className="flex items-center gap-2"
                >
                  <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                  {blogPost.likes + (liked ? 1 : 0)}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  {blogPost.comments}
                </Button>
                
                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShareMenuOpen(!shareMenuOpen)}
                    className="flex items-center gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  
                  {shareMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-background border rounded-lg shadow-lg p-2 z-10">
                      <div className="flex flex-col gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('facebook')}
                          className="justify-start"
                        >
                          <Facebook className="h-4 w-4 mr-2" />
                          Facebook
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('twitter')}
                          className="justify-start"
                        >
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('linkedin')}
                          className="justify-start"
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('copy')}
                          className="justify-start"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Link
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative aspect-video mb-8 overflow-hidden rounded-lg">
              <Image
                src={blogPost.featuredImage}
                alt={blogPost.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Author Bio */}
            <div className="mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 overflow-hidden rounded-full flex-shrink-0">
                      <Image
                        src={blogPost.author.avatar}
                        alt={blogPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        {blogPost.author.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {blogPost.author.bio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Link href="/blog">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Kembali ke Blog
                </Button>
              </Link>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Artikel Sebelumnya
                </Button>
                <Button variant="outline" size="sm">
                  Artikel Selanjutnya
                </Button>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-8 sticky top-8">
            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Artikel Terkait</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="relative w-20 h-16 flex-shrink-0">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          sizes="80px"
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

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Butuh Bantuan?</CardTitle>
                  <CardDescription>
                    Konsultasikan kebutuhan digital Anda dengan tim ahli kami
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/contact">
                    <Button className="w-full">
                      Konsultasi Gratis
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="w-full">
                      Lihat Layanan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
