export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  role: 'client' | 'admin'
  phone?: string
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  name: string
  description: string
  category: 'website' | 'app' | 'academic'
  packages: ServicePackage[]
  features: string[]
  created_at: string
  updated_at: string
}

export interface ServicePackage {
  id: string
  name: string
  price: number
  features: string[]
  delivery_time: number // in days
  revisions: number
}

export interface Order {
  id: string
  order_id: string
  user_id: string
  service_id: string
  package_id: string
  status: 'pending' | 'in_progress' | 'review' | 'completed' | 'cancelled'
  total_amount: number
  description: string
  requirements?: string
  deadline?: string
  files?: OrderFile[]
  created_at: string
  updated_at: string
  user?: User
  service?: Service
}

export interface OrderFile {
  id: string
  order_id: string
  file_name: string
  file_url: string
  file_type: string
  file_size: number
  uploaded_by: string
  created_at: string
}

export interface Portfolio {
  id: string
  title: string
  description: string
  category: 'website' | 'app' | 'academic'
  image_url: string
  project_url?: string
  technologies: string[]
  featured: boolean
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  user_id?: string
  name: string
  email?: string
  rating: number
  message: string
  avatar_url?: string
  approved: boolean
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featured_image?: string
  category: string
  tags: string[]
  published: boolean
  author_id: string
  created_at: string
  updated_at: string
  author?: User
}

export interface ChatMessage {
  id: string
  room_id: string
  user_id: string
  message: string
  message_type: 'text' | 'file' | 'system'
  file_url?: string
  created_at: string
  user?: User
}

export interface ChatRoom {
  id: string
  user_id: string
  admin_id?: string
  status: 'active' | 'closed'
  last_message?: string
  last_message_at?: string
  created_at: string
  updated_at: string
  user?: User
  admin?: User
}
