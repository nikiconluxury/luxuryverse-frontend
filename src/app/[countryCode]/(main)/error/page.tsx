'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const error = searchParams.get('error')

  useEffect(() => {
    if (error === 'InsufficientBalance') {
      router.push('/token-balance')
    }
  }, [error, router])

  if (error === 'InsufficientBalance') {
    return <div>Insufficient balance. Redirecting to token balance page...</div>
  }

  if (error) {
    return <div>An error occurred: {error}. Please try again.</div>
  }

  return <div>Loading...</div>
}