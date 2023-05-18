import { AlertColor } from '@mui/material'

export interface SnackbarProviderProps {
  children: React.ReactNode
}

export interface AddSnackbarProps {
  type: AlertColor
  message: string
}

export interface SnackbarProviderType {
  addSnackbar: ({ type, message }: AddSnackbarProps) => void
}
