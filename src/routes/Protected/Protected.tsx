import { useAuth } from '@hooks/useAuth'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export interface ProtectedProps {
  children: ReactNode
}

export function Protected({ children }: ProtectedProps) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
