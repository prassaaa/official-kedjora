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

-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.users 
        WHERE id = user_id AND role = 'admin'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Users table policies
CREATE POLICY "Users can view their own profile" ON public.users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all users" ON public.users
    FOR SELECT USING (is_admin(auth.uid()));

CREATE POLICY "Admins can update user roles" ON public.users
    FOR UPDATE USING (is_admin(auth.uid()));

-- Services table policies (public read, admin write)
CREATE POLICY "Anyone can view active services" ON public.services
    FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage services" ON public.services
    FOR ALL USING (is_admin(auth.uid()));

-- Service packages table policies
CREATE POLICY "Anyone can view service packages" ON public.service_packages
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage service packages" ON public.service_packages
    FOR ALL USING (is_admin(auth.uid()));

-- Orders table policies
CREATE POLICY "Users can view their own orders" ON public.orders
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create orders" ON public.orders
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their pending orders" ON public.orders
    FOR UPDATE USING (
        auth.uid() = user_id AND status = 'pending'
    );

CREATE POLICY "Admins can view all orders" ON public.orders
    FOR SELECT USING (is_admin(auth.uid()));

CREATE POLICY "Admins can update orders" ON public.orders
    FOR UPDATE USING (is_admin(auth.uid()));

-- Order files table policies
CREATE POLICY "Users can view files from their orders" ON public.order_files
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.orders 
            WHERE id = order_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Users can upload files to their orders" ON public.order_files
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.orders 
            WHERE id = order_id AND user_id = auth.uid()
        ) AND uploaded_by = auth.uid()
    );

CREATE POLICY "Admins can manage all order files" ON public.order_files
    FOR ALL USING (is_admin(auth.uid()));

-- Portfolio table policies (public read, admin write)
CREATE POLICY "Anyone can view published portfolio" ON public.portfolio
    FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage portfolio" ON public.portfolio
    FOR ALL USING (is_admin(auth.uid()));

-- Testimonials table policies
CREATE POLICY "Anyone can view approved testimonials" ON public.testimonials
    FOR SELECT USING (approved = true);

CREATE POLICY "Users can create testimonials" ON public.testimonials
    FOR INSERT WITH CHECK (
        auth.uid() = user_id OR user_id IS NULL
    );

CREATE POLICY "Users can view their own testimonials" ON public.testimonials
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all testimonials" ON public.testimonials
    FOR ALL USING (is_admin(auth.uid()));

-- Blog posts table policies
CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts
    FOR SELECT USING (published = true);

CREATE POLICY "Admins can manage blog posts" ON public.blog_posts
    FOR ALL USING (is_admin(auth.uid()));

-- Chat rooms table policies
CREATE POLICY "Users can view their own chat rooms" ON public.chat_rooms
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create chat rooms" ON public.chat_rooms
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all chat rooms" ON public.chat_rooms
    FOR SELECT USING (is_admin(auth.uid()));

CREATE POLICY "Admins can update chat rooms" ON public.chat_rooms
    FOR UPDATE USING (is_admin(auth.uid()));

-- Chat messages table policies
CREATE POLICY "Users can view messages from their chat rooms" ON public.chat_messages
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.chat_rooms 
            WHERE id = room_id AND user_id = auth.uid()
        ) OR is_admin(auth.uid())
    );

CREATE POLICY "Users can send messages to their chat rooms" ON public.chat_messages
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.chat_rooms 
            WHERE id = room_id AND user_id = auth.uid()
        ) AND user_id = auth.uid()
    );

CREATE POLICY "Admins can send messages to any chat room" ON public.chat_messages
    FOR INSERT WITH CHECK (is_admin(auth.uid()));

-- Notifications table policies
CREATE POLICY "Users can view their own notifications" ON public.notifications
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own notifications" ON public.notifications
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "System can create notifications" ON public.notifications
    FOR INSERT WITH CHECK (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated;
