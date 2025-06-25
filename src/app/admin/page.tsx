'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  FileText, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Clock,
  Star,
  AlertCircle,
  CheckCircle,
  XCircle,
  Eye,
  MessageSquare
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { formatCurrency } from '@/lib/utils'

// Mock data - replace with actual data from database
const dashboardStats = {
  totalUsers: 1250,
  totalOrders: 340,
  totalRevenue: 125000000,
  totalProjects: 89,
  monthlyGrowth: 12.5,
  pendingOrders: 15,
  completedOrders: 325,
  activeProjects: 23
}

const recentOrders = [
  {
    id: 'ORD-001',
    client: 'Sarah Wijaya',
    service: 'Website E-commerce',
    package: 'Premium',
    amount: 15000000,
    status: 'in_progress',
    createdAt: '2024-01-15',
    deadline: '2024-02-15'
  },
  {
    id: 'ORD-002',
    client: 'Ahmad Rizki',
    service: 'Skripsi',
    package: 'Standard',
    amount: 2500000,
    status: 'completed',
    createdAt: '2024-01-14',
    deadline: '2024-01-28'
  },
  {
    id: 'ORD-003',
    client: 'Budi Santoso',
    service: 'Mobile App',
    package: 'Premium',
    amount: 25000000,
    status: 'pending',
    createdAt: '2024-01-13',
    deadline: '2024-03-13'
  },
  {
    id: 'ORD-004',
    client: 'Lisa Chen',
    service: 'Website Company',
    package: 'Standard',
    amount: 8000000,
    status: 'in_progress',
    createdAt: '2024-01-12',
    deadline: '2024-02-12'
  },
  {
    id: 'ORD-005',
    client: 'Dian Pratiwi',
    service: 'Tugas Kuliah',
    package: 'Basic',
    amount: 500000,
    status: 'completed',
    createdAt: '2024-01-11',
    deadline: '2024-01-18'
  }
]

const recentMessages = [
  {
    id: 1,
    client: 'Sarah Wijaya',
    message: 'Kapan website saya bisa selesai?',
    timestamp: '2024-01-15 14:30',
    unread: true
  },
  {
    id: 2,
    client: 'Ahmad Rizki',
    message: 'Terima kasih untuk bantuan skripsinya!',
    timestamp: '2024-01-15 13:15',
    unread: false
  },
  {
    id: 3,
    client: 'Budi Santoso',
    message: 'Bisa minta update progress aplikasi?',
    timestamp: '2024-01-15 12:45',
    unread: true
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'in_progress':
      return 'bg-blue-100 text-blue-800'
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'pending':
      return <AlertCircle className="h-4 w-4" />
    case 'in_progress':
      return <Clock className="h-4 w-4" />
    case 'completed':
      return <CheckCircle className="h-4 w-4" />
    case 'cancelled':
      return <XCircle className="h-4 w-4" />
    default:
      return <AlertCircle className="h-4 w-4" />
  }
}

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('30d')

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Kelola bisnis Anda dengan dashboard yang komprehensif
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+{dashboardStats.monthlyGrowth}%</span> dari bulan lalu
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.totalOrders}</div>
            <p className="text-xs text-muted-foreground">
              {dashboardStats.pendingOrders} pending, {dashboardStats.completedOrders} completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(dashboardStats.totalRevenue)}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15.2%</span> dari bulan lalu
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.activeProjects}</div>
            <p className="text-xs text-muted-foreground">
              {dashboardStats.totalProjects} total projects
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>
                Daftar order terbaru dari klien
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold">{order.client}</h4>
                        <Badge className={getStatusColor(order.status)}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(order.status)}
                            {order.status.replace('_', ' ')}
                          </div>
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {order.service} - {order.package}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Order: {order.id}</span>
                        <span>Deadline: {new Date(order.deadline).toLocaleDateString('id-ID')}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">
                        {formatCurrency(order.amount)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(order.createdAt).toLocaleDateString('id-ID')}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  Lihat Semua Orders
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Create New Project
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Manage Users
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                View Messages
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="mr-2 h-4 w-4" />
                Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>
                Pesan terbaru dari klien
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="flex gap-3">
                    <div className="relative w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      {message.unread && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm truncate">
                          {message.client}
                        </h4>
                        {message.unread && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-1">
                        {message.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full">
                  View All Messages
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Order Completion Rate</span>
                <span className="font-semibold">95.6%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Average Rating</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Response Time</span>
                <span className="font-semibold">< 2h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Client Retention</span>
                <span className="font-semibold">87%</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
