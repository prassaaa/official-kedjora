'use client'

import { useEffect, useState } from 'react'
import { User as SupabaseUser } from '@supabase/supabase-js'
import { createClientComponentClient } from '@/lib/supabase'
import { User } from '@/types'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Check if Supabase is properly configured
  const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL &&
                               process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co'

  const supabase = createClientComponentClient()

  useEffect(() => {
    // If Supabase is not configured, just set loading to false
    if (!isSupabaseConfigured) {
      setLoading(false)
      return
    }

    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()

        if (session?.user) {
          await fetchUserProfile(session.user)
        } else {
          setLoading(false)
        }
      } catch (error) {
        console.warn('Supabase not configured properly:', error)
        setLoading(false)
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          await fetchUserProfile(session.user)
        } else {
          setUser(null)
          setLoading(false)
        }
      }
    )

    return () => subscription.unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase, isSupabaseConfigured])

  const fetchUserProfile = async (authUser: SupabaseUser) => {
    try {
      console.log('Fetching user profile for:', authUser.id, authUser.email)

      // First try to get user profile
      const { data: profile, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', authUser.id)
        .maybeSingle() // Use maybeSingle instead of single to avoid error if not found

      console.log('Profile query result:', { profile, error })

      if (error) {
        console.error('Database error fetching user profile:', error)

        // If it's a permission or RLS error, try to create the user profile
        if (error.code === '42501' || error.code === '42P17' || error.message?.includes('permission denied') || error.message?.includes('infinite recursion')) {
          console.log('Permission/RLS error detected, attempting to create user profile...')
          await createUserProfile(authUser)
          return
        }

        // For other errors, use fallback user
        const fallbackUser = {
          id: authUser.id,
          email: authUser.email || '',
          full_name: authUser.user_metadata?.full_name || authUser.user_metadata?.name || authUser.email || '',
          avatar_url: authUser.user_metadata?.avatar_url || authUser.user_metadata?.picture || null,
          role: 'client' as const,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
        console.log('Using fallback user:', fallbackUser)
        setUser(fallbackUser)
      } else if (!profile) {
        // Profile doesn't exist, create it
        console.log('User profile not found, creating new profile...')
        await createUserProfile(authUser)
        return
      } else {
        console.log('User profile found:', profile)
        setUser(profile)
      }
    } catch (error) {
      console.error('Unexpected error fetching user profile:', error)
      // Fallback: create user from auth data
      const fallbackUser = {
        id: authUser.id,
        email: authUser.email || '',
        full_name: authUser.user_metadata?.full_name || authUser.user_metadata?.name || authUser.email || '',
        avatar_url: authUser.user_metadata?.avatar_url || authUser.user_metadata?.picture || null,
        role: 'client' as const,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
      console.log('Using fallback user after error:', fallbackUser)
      setUser(fallbackUser)
    } finally {
      setLoading(false)
    }
  }

  const createUserProfile = async (authUser: SupabaseUser) => {
    try {
      console.log('Creating user profile for:', authUser.id, authUser.email)

      const newUser = {
        id: authUser.id,
        email: authUser.email || '',
        full_name: authUser.user_metadata?.full_name || authUser.user_metadata?.name || authUser.email || '',
        avatar_url: authUser.user_metadata?.avatar_url || authUser.user_metadata?.picture || null,
        role: 'client' as const
      }

      console.log('Inserting user data:', newUser)

      const { data: profile, error } = await supabase
        .from('users')
        .insert(newUser)
        .select()
        .single()

      if (error) {
        console.error('Database error creating user profile:', error)
        // Use fallback user if insert fails
        const fallbackUser = {
          ...newUser,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
        console.log('Using fallback user after insert error:', fallbackUser)
        setUser(fallbackUser)
      } else {
        console.log('User profile created successfully:', profile)
        setUser(profile)
      }
    } catch (error) {
      console.error('Unexpected error creating user profile:', error)
      // Use fallback user
      const fallbackUser = {
        id: authUser.id,
        email: authUser.email || '',
        full_name: authUser.user_metadata?.full_name || authUser.user_metadata?.name || authUser.email || '',
        avatar_url: authUser.user_metadata?.avatar_url || authUser.user_metadata?.picture || null,
        role: 'client' as const,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
      console.log('Using fallback user after unexpected error:', fallbackUser)
      setUser(fallbackUser)
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    if (!isSupabaseConfigured) {
      return { data: null, error: new Error('Supabase not configured') }
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    if (!isSupabaseConfigured) {
      return { data: null, error: new Error('Supabase not configured') }
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })
    return { data, error }
  }

  const signInWithGoogle = async () => {
    if (!isSupabaseConfigured) {
      return { data: null, error: new Error('Supabase not configured') }
    }

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    return { data, error }
  }

  const signOut = async () => {
    if (!isSupabaseConfigured) {
      return { error: new Error('Supabase not configured') }
    }

    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (!user) return { error: new Error('No user logged in') }

    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single()

    if (!error && data) {
      setUser(data)
    }

    return { data, error }
  }

  const resetPassword = async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })
    return { data, error }
  }

  const updatePassword = async (password: string) => {
    const { data, error } = await supabase.auth.updateUser({
      password,
    })
    return { data, error }
  }

  return {
    user,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
    updateProfile,
    resetPassword,
    updatePassword,
  }
}
