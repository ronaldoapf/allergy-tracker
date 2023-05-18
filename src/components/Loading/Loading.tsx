import { Backdrop, CircularProgress } from '@mui/material'
import { useLayoutEffect } from 'react'

interface LoadingProps {
  open: boolean
  title?: string
}

export function Loading({ open, title }: LoadingProps) {
  useLayoutEffect(() => {
    if (open === true) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100%'
      return
    }
    document.body.style.overflow = 'auto'
  }, [open])

  return (
    <Backdrop open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 3 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p style={{ textAlign: 'center' }}>{title}</p>
        <CircularProgress color="inherit" />
      </div>
    </Backdrop>
  )
}
