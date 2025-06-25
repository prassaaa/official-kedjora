import { createRouteHandlerClient } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const response = NextResponse.redirect(requestUrl.origin + '/dashboard')
    const supabase = createRouteHandlerClient(request, response)
    
    await supabase.auth.exchangeCodeForSession(code)
    
    return response
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(requestUrl.origin + '/auth/login?error=oauth-error')
}
