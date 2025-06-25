# 🗄️ Database Schema Documentation

## Overview

Database schema untuk aplikasi Kedjora menggunakan PostgreSQL melalui Supabase. Schema ini dirancang untuk mendukung sistem freelance yang komprehensif dengan fitur-fitur modern.

## 📋 Tables

### Core Tables

#### `users`
Extends Supabase auth.users dengan informasi profil tambahan.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key, references auth.users(id) |
| email | TEXT | Email address (unique) |
| full_name | TEXT | Full name |
| avatar_url | TEXT | Profile picture URL |
| phone | TEXT | Phone number |
| role | user_role | 'client' or 'admin' |
| created_at | TIMESTAMPTZ | Creation timestamp |
| updated_at | TIMESTAMPTZ | Last update timestamp |

#### `services`
Layanan yang ditawarkan (Website, App, Academic).

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | TEXT | Service name |
| description | TEXT | Service description |
| category | service_category | 'website', 'app', or 'academic' |
| features | TEXT[] | Array of features |
| is_active | BOOLEAN | Service availability |

#### `service_packages`
Paket layanan dengan pricing dan fitur.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| service_id | UUID | References services(id) |
| name | TEXT | Package name (Basic, Standard, Premium) |
| price | DECIMAL(12,2) | Package price |
| features | TEXT[] | Package features |
| delivery_time | INTEGER | Delivery time in days |
| revisions | INTEGER | Number of revisions (-1 for unlimited) |
| is_popular | BOOLEAN | Popular package flag |

#### `orders`
Pesanan dari klien.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| order_id | TEXT | Human-readable order ID (auto-generated) |
| user_id | UUID | References users(id) |
| service_id | UUID | References services(id) |
| package_id | UUID | References service_packages(id) |
| status | order_status | Order status |
| total_amount | DECIMAL(12,2) | Total order amount |
| description | TEXT | Order description |
| requirements | TEXT | Special requirements |
| deadline | DATE | Project deadline |
| notes | TEXT | Additional notes |

#### `order_files`
File uploads terkait pesanan.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| order_id | UUID | References orders(id) |
| file_name | TEXT | Original file name |
| file_url | TEXT | File storage URL |
| file_type | TEXT | MIME type |
| file_size | BIGINT | File size in bytes |
| uploaded_by | UUID | References users(id) |
| is_result | BOOLEAN | True if result file from admin |

### Content Tables

#### `portfolio`
Showcase proyek yang telah dikerjakan.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| title | TEXT | Project title |
| description | TEXT | Project description |
| category | service_category | Project category |
| image_url | TEXT | Project screenshot |
| project_url | TEXT | Live demo URL |
| github_url | TEXT | Source code URL |
| technologies | TEXT[] | Technologies used |
| featured | BOOLEAN | Featured project flag |
| is_published | BOOLEAN | Publication status |

#### `testimonials`
Review dan testimoni dari klien.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| user_id | UUID | References users(id) (nullable) |
| order_id | UUID | References orders(id) (nullable) |
| name | TEXT | Reviewer name |
| email | TEXT | Reviewer email |
| rating | INTEGER | Rating 1-5 |
| message | TEXT | Testimonial message |
| avatar_url | TEXT | Reviewer avatar |
| approved | BOOLEAN | Admin approval status |

#### `blog_posts`
Artikel blog untuk SEO dan content marketing.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| title | TEXT | Post title |
| slug | TEXT | URL slug (unique) |
| content | TEXT | Post content (Markdown) |
| excerpt | TEXT | Post excerpt |
| featured_image | TEXT | Featured image URL |
| category | TEXT | Post category |
| tags | TEXT[] | Post tags |
| published | BOOLEAN | Publication status |
| author_id | UUID | References users(id) |
| views | INTEGER | View count |

### Communication Tables

#### `chat_rooms`
Chat rooms untuk live support.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| user_id | UUID | References users(id) |
| admin_id | UUID | References users(id) (nullable) |
| status | chat_status | 'active' or 'closed' |
| last_message | TEXT | Last message preview |
| last_message_at | TIMESTAMPTZ | Last message timestamp |

#### `chat_messages`
Pesan dalam chat rooms.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| room_id | UUID | References chat_rooms(id) |
| user_id | UUID | References users(id) |
| message | TEXT | Message content |
| message_type | message_type | 'text', 'file', or 'system' |
| file_url | TEXT | File URL for file messages |

#### `notifications`
Sistem notifikasi untuk users.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| user_id | UUID | References users(id) |
| title | TEXT | Notification title |
| message | TEXT | Notification message |
| type | TEXT | Notification type |
| read | BOOLEAN | Read status |
| data | JSONB | Additional data |

## 🔐 Security

### Row Level Security (RLS)
Semua tabel menggunakan RLS untuk keamanan data:

- **Users**: Dapat melihat/edit profil sendiri, admin dapat melihat semua
- **Orders**: Users hanya dapat melihat pesanan sendiri, admin dapat melihat semua
- **Files**: Users hanya dapat akses file dari pesanan sendiri
- **Public Content**: Portfolio, testimonials, blog posts dapat dilihat publik
- **Chat**: Users hanya dapat akses chat room sendiri

### Helper Functions
- `is_admin(user_id)`: Mengecek apakah user adalah admin
- `generate_order_id()`: Generate unique order ID
- `get_user_stats(user_id)`: Statistik user
- `get_admin_stats()`: Statistik admin dashboard

## 📁 Storage Buckets

### Supabase Storage
- **avatars**: Profile pictures (public)
- **portfolio**: Project screenshots (public)
- **order-files**: Order-related files (private)
- **blog-images**: Blog post images (public)

## 🚀 Setup Instructions

1. **Create Supabase Project**
   ```bash
   # Visit https://supabase.com and create new project
   ```

2. **Run Database Migrations**
   ```sql
   -- Copy and paste content from database/setup.sql
   -- Or run individual migration files in order
   ```

3. **Create Admin User**
   ```sql
   -- First create user through Supabase Auth
   -- Then update role to admin
   UPDATE public.users SET role = 'admin' WHERE email = 'your-admin@email.com';
   ```

4. **Setup Storage Buckets**
   ```sql
   -- Storage buckets and policies are created in setup.sql
   ```

## 🔄 Triggers & Functions

### Auto-generated Fields
- `updated_at`: Automatically updated on record changes
- `order_id`: Auto-generated unique order identifier
- `user profile`: Created automatically on auth signup

### Real-time Updates
- Chat room `last_message` updated on new messages
- Blog post `views` incremented on page visits

## 📊 Indexes

Optimized indexes untuk performa:
- User email dan role
- Order status dan user_id
- Portfolio category dan featured
- Blog post slug dan published status
- Chat room user_id
- Notification user_id dan read status

## 🔧 Maintenance

### Regular Tasks
1. **Cleanup old notifications** (older than 30 days)
2. **Archive completed orders** (older than 1 year)
3. **Backup database** (automated through Supabase)
4. **Monitor storage usage** (file uploads)

### Performance Monitoring
- Query performance through Supabase dashboard
- Storage usage monitoring
- Real-time connection monitoring

## 📈 Analytics Queries

### User Statistics
```sql
SELECT get_user_stats('user-uuid');
```

### Admin Dashboard
```sql
SELECT get_admin_stats();
```

### Popular Services
```sql
SELECT s.name, COUNT(o.id) as order_count
FROM services s
LEFT JOIN orders o ON s.id = o.service_id
GROUP BY s.id, s.name
ORDER BY order_count DESC;
```
