-- Drop all existing policies first to avoid conflicts
DO $$ 
BEGIN
    -- Drop all policies on users table
    DROP POLICY IF EXISTS "Users can view their own profile" ON public.users;
    DROP POLICY IF EXISTS "Users can update their own profile" ON public.users;
    DROP POLICY IF EXISTS "Admins can view all users" ON public.users;
    DROP POLICY IF EXISTS "Admins can update user roles" ON public.users;
    
    -- Drop all policies on services table
    DROP POLICY IF EXISTS "Anyone can view active services" ON public.services;
    DROP POLICY IF EXISTS "Admins can manage services" ON public.services;
    
    -- Drop all policies on service_packages table
    DROP POLICY IF EXISTS "Anyone can view service packages" ON public.service_packages;
    DROP POLICY IF EXISTS "Admins can manage service packages" ON public.service_packages;
    
    -- Drop all policies on orders table
    DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
    DROP POLICY IF EXISTS "Users can create orders" ON public.orders;
    DROP POLICY IF EXISTS "Users can update their pending orders" ON public.orders;
    DROP POLICY IF EXISTS "Admins can view all orders" ON public.orders;
    DROP POLICY IF EXISTS "Admins can update orders" ON public.orders;
    
    -- Drop all policies on other tables
    DROP POLICY IF EXISTS "Users can view files from their orders" ON public.order_files;
    DROP POLICY IF EXISTS "Users can upload files to their orders" ON public.order_files;
    DROP POLICY IF EXISTS "Admins can manage all order files" ON public.order_files;
    
    DROP POLICY IF EXISTS "Anyone can view published portfolio" ON public.portfolio;
    DROP POLICY IF EXISTS "Admins can manage portfolio" ON public.portfolio;
    
    DROP POLICY IF EXISTS "Anyone can view approved testimonials" ON public.testimonials;
    DROP POLICY IF EXISTS "Users can create testimonials" ON public.testimonials;
    DROP POLICY IF EXISTS "Users can view their own testimonials" ON public.testimonials;
    DROP POLICY IF EXISTS "Admins can manage all testimonials" ON public.testimonials;
    
    DROP POLICY IF EXISTS "Anyone can view published blog posts" ON public.blog_posts;
    DROP POLICY IF EXISTS "Admins can manage blog posts" ON public.blog_posts;
    
    DROP POLICY IF EXISTS "Users can view their own chat rooms" ON public.chat_rooms;
    DROP POLICY IF EXISTS "Users can create chat rooms" ON public.chat_rooms;
    DROP POLICY IF EXISTS "Admins can view all chat rooms" ON public.chat_rooms;
    DROP POLICY IF EXISTS "Admins can update chat rooms" ON public.chat_rooms;
    
    DROP POLICY IF EXISTS "Users can view messages from their chat rooms" ON public.chat_messages;
    DROP POLICY IF EXISTS "Users can send messages to their chat rooms" ON public.chat_messages;
    DROP POLICY IF EXISTS "Admins can send messages to any chat room" ON public.chat_messages;
    
    DROP POLICY IF EXISTS "Users can view their own notifications" ON public.notifications;
    DROP POLICY IF EXISTS "Users can update their own notifications" ON public.notifications;
    DROP POLICY IF EXISTS "System can create notifications" ON public.notifications;
END $$;

-- Enable Row Level Security on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Users table policies
CREATE POLICY "Users can view their own profile" ON public.users
    FOR SELECT USING ((auth.uid())::text = (id)::text);

CREATE POLICY "Users can update their own profile" ON public.users
    FOR UPDATE USING ((auth.uid())::text = (id)::text);

CREATE POLICY "Admins can view all users" ON public.users
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users u2
            WHERE (u2.id)::text = (auth.uid())::text AND u2.role = 'admin'
        )
    );

CREATE POLICY "Admins can update user roles" ON public.users
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.users u2
            WHERE (u2.id)::text = (auth.uid())::text AND u2.role = 'admin'
        )
    );

-- Services table policies (public read, admin write)
CREATE POLICY "Anyone can view active services" ON public.services
    FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage services" ON public.services
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE (id)::text = (auth.uid())::text AND role = 'admin'
        )
    );

-- Service packages table policies
CREATE POLICY "Anyone can view service packages" ON public.service_packages
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage service packages" ON public.service_packages
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE (id)::text = (auth.uid())::text AND role = 'admin'
        )
    );

-- Orders table policies
CREATE POLICY "Users can view their own orders" ON public.orders
    FOR SELECT USING ((auth.uid())::text = (user_id)::text);

CREATE POLICY "Users can create orders" ON public.orders
    FOR INSERT WITH CHECK ((auth.uid())::text = (user_id)::text);

CREATE POLICY "Users can update their pending orders" ON public.orders
    FOR UPDATE USING (
        (auth.uid())::text = (user_id)::text AND status = 'pending'
    );

CREATE POLICY "Admins can view all orders" ON public.orders
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE (id)::text = (auth.uid())::text AND role = 'admin'
        )
    );

CREATE POLICY "Admins can update orders" ON public.orders
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE (id)::text = (auth.uid())::text AND role = 'admin'
        )
    );

-- Order files table policies
CREATE POLICY "Users can view files from their orders" ON public.order_files
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.orders
            WHERE (id)::text = (order_id)::text AND (user_id)::text = (auth.uid())::text
        )
    );

CREATE POLICY "Users can upload files to their orders" ON public.order_files
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.orders
            WHERE (id)::text = (order_id)::text AND (user_id)::text = (auth.uid())::text
        ) AND (uploaded_by)::text = (auth.uid())::text
    );

CREATE POLICY "Admins can manage all order files" ON public.order_files
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE (id)::text = (auth.uid())::text AND role = 'admin'
        )
    );

-- Portfolio table policies (public read, admin write)
CREATE POLICY "Anyone can view published portfolio" ON public.portfolio
    FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage portfolio" ON public.portfolio
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE (id)::text = (auth.uid())::text AND role = 'admin'
        )
    );

-- Testimonials table policies
CREATE POLICY "Anyone can view approved testimonials" ON public.testimonials
    FOR SELECT USING (approved = true);

CREATE POLICY "Users can create testimonials" ON public.testimonials
    FOR INSERT WITH CHECK (
        (auth.uid())::text = (user_id)::text OR user_id IS NULL
    );

CREATE POLICY "Users can view their own testimonials" ON public.testimonials
    FOR SELECT USING ((auth.uid())::text = (user_id)::text);

CREATE POLICY "Admins can manage all testimonials" ON public.testimonials
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE (id)::text = (auth.uid())::text AND role = 'admin'
        )
    );

-- Blog posts table policies
CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts
    FOR SELECT USING (published = true);

CREATE POLICY "Admins can manage blog posts" ON public.blog_posts
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE (id)::text = (auth.uid())::text AND role = 'admin'
        )
    );

-- Chat rooms table policies
CREATE POLICY "Users can view their own chat rooms" ON public.chat_rooms
    FOR SELECT USING ((auth.uid())::text = (user_id)::text);

CREATE POLICY "Users can create chat rooms" ON public.chat_rooms
    FOR INSERT WITH CHECK ((auth.uid())::text = (user_id)::text);

CREATE POLICY "Admins can view all chat rooms" ON public.chat_rooms
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE (id)::text = (auth.uid())::text AND role = 'admin'
        )
    );

CREATE POLICY "Admins can update chat rooms" ON public.chat_rooms
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE (id)::text = (auth.uid())::text AND role = 'admin'
        )
    );

-- Chat messages table policies
CREATE POLICY "Users can view messages from their chat rooms" ON public.chat_messages
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.chat_rooms
            WHERE (id)::text = (room_id)::text AND (user_id)::text = (auth.uid())::text
        ) OR EXISTS (
            SELECT 1 FROM public.users
            WHERE (id)::text = (auth.uid())::text AND role = 'admin'
        )
    );

CREATE POLICY "Users can send messages to their chat rooms" ON public.chat_messages
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.chat_rooms
            WHERE (id)::text = (room_id)::text AND (user_id)::text = (auth.uid())::text
        ) AND (user_id)::text = (auth.uid())::text
    );

CREATE POLICY "Admins can send messages to any chat room" ON public.chat_messages
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.users
            WHERE (id)::text = (auth.uid())::text AND role = 'admin'
        )
    );

-- Notifications table policies
CREATE POLICY "Users can view their own notifications" ON public.notifications
    FOR SELECT USING ((auth.uid())::text = (user_id)::text);

CREATE POLICY "Users can update their own notifications" ON public.notifications
    FOR UPDATE USING ((auth.uid())::text = (user_id)::text);

CREATE POLICY "System can create notifications" ON public.notifications
    FOR INSERT WITH CHECK (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated;