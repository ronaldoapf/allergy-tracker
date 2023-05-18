import { Snackbar } from '@components/Snackbar'
import { SnackbarDataProps } from '@components/Snackbar/types'
import { createContext, useCallback, useState } from 'react'

import { AddSnackbarProps, SnackbarProviderType, SnackbarProviderProps } from './types'

export const SnackbarContext = createContext({} as SnackbarProviderType)

export function SnackbarProvider({ children }: SnackbarProviderProps) {
  const [snackbar, setSnackbar] = useState<SnackbarDataProps>({
    type: 'info',
    message: '',
    open: false,
  })

  const addSnackbar = useCallback(({ type, message }: AddSnackbarProps) => {
    setSnackbar({
      type,
      message,
      open: true,
    })
  }, [])

  const handleClose = (): void => {
    setSnackbar((prevState) => ({ ...prevState, open: false }))
  }

  return (
    <SnackbarContext.Provider value={{ addSnackbar }}>
      <Snackbar onClose={handleClose} snackbarData={snackbar} />
      {children}
    </SnackbarContext.Provider>
  )
}
