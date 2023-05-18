import { SnackbarContext } from '@contexts/SnackbarContext'
import { SnackbarProviderType } from '@contexts/SnackbarContext/types'
import { useContext } from 'react'

export const useSnackbar = (): SnackbarProviderType => {
  const data = useContext(SnackbarContext)

  if (!data) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return data
}
