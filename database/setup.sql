-- Kedjora Database Setup
-- Run this script in your Supabase SQL Editor

-- 1. Initial Schema
\i 001_initial_schema.sql

-- 2. Functions and Triggers
\i 002_functions_and_triggers.sql

-- 3. Row Level Security
\i 003_row_level_security.sql

-- 4. Initial Data (optional - for development/testing)
\i seed/001_initial_data.sql

-- Create storage buckets for file uploads
INSERT INTO storage.buckets (id, name, public) VALUES 
('avatars', 'avatars', true),
('portfolio', 'portfolio', true),
('order-files', 'order-files', false),
('blog-images', 'blog-images', true);

-- Storage policies for avatars bucket
CREATE POLICY "Avatar images are publicly accessible" ON storage.objects
FOR SELECT USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload their own avatar" ON storage.objects
FOR INSERT WITH CHECK (
    bucket_id = 'avatars' AND 
    auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update their own avatar" ON storage.objects
FOR UPDATE USING (
    bucket_id = 'avatars' AND 
    auth.uid()::text = (storage.foldername(name))[1]
);

-- Storage policies for portfolio bucket
CREATE POLICY "Portfolio images are publicly accessible" ON storage.objects
FOR SELECT USING (bucket_id = 'portfolio');

CREATE POLICY "Admins can manage portfolio images" ON storage.objects
FOR ALL USING (
    bucket_id = 'portfolio' AND 
    is_admin(auth.uid())
);

-- Storage policies for order files bucket
CREATE POLICY "Users can view their order files" ON storage.objects
FOR SELECT USING (
    bucket_id = 'order-files' AND (
        auth.uid()::text = (storage.foldername(name))[1] OR
        is_admin(auth.uid())
    )
);

CREATE POLICY "Users can upload to their order folder" ON storage.objects
FOR INSERT WITH CHECK (
    bucket_id = 'order-files' AND 
    auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Admins can manage all order files" ON storage.objects
FOR ALL USING (
    bucket_id = 'order-files' AND 
    is_admin(auth.uid())
);

-- Storage policies for blog images bucket
CREATE POLICY "Blog images are publicly accessible" ON storage.objects
FOR SELECT USING (bucket_id = 'blog-images');

CREATE POLICY "Admins can manage blog images" ON storage.objects
FOR ALL USING (
    bucket_id = 'blog-images' AND 
    is_admin(auth.uid())
);

-- Create admin user (update email as needed)
-- Note: You need to create the user through Supabase Auth first, then update the role
-- UPDATE public.users SET role = 'admin' WHERE email = 'admin@kedjora.com';

-- Verify setup
SELECT 'Database setup completed successfully!' as status;
