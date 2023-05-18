import { AuthContext } from '@contexts/AuthContext'
import { AuthContextType } from '@contexts/AuthContext/types'
import { useContext } from 'react'

export const useAuth = (): AuthContextType => {
  const data = useContext(AuthContext)

  if (!data) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return data
}
