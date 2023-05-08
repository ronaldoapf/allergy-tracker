import { createTheme } from '@mui/material'

export const AppTheme = createTheme({
  palette: {
    background: {
      default: '#EEF2F6',
    },
    primary: {
      main: '#673ab7',
    },
  },
  typography: {
    fontFamily: 'Inter',
    fontSize: 14,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          fontSize: 24,
        },
      },
    },
  },
})
