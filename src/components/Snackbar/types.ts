import { AlertColor } from '@mui/material'

export interface SnackbarDataProps {
  open: boolean
  message: string
  type: AlertColor
}
export interface SnackbarProps {
  snackbarData: SnackbarDataProps
  onClose: () => void
}
