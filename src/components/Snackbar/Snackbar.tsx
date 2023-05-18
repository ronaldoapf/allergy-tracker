import { Alert, Slide, SlideProps, Snackbar as MaterialSnackbar } from '@mui/material'

import { SnackbarProps } from './types'

export const SlideTransition: React.FC<SlideProps> = (props) => {
  return <Slide {...props} direction="left" />
}

export function Snackbar({ snackbarData, onClose }: SnackbarProps) {
  const { open, type, message } = snackbarData

  return (
    <MaterialSnackbar
      open={open}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={onClose}
      autoHideDuration={3000}
      TransitionComponent={SlideTransition}
    >
      <Alert elevation={6} variant="filled" severity={type}>
        {message}
      </Alert>
    </MaterialSnackbar>
  )
}
