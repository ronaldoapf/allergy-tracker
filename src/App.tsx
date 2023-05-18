import { queryClient } from '@common/resources/api'
import { AuthProvider } from '@contexts/AuthContext/AuthContext'
import { SnackbarProvider } from '@contexts/SnackbarContext/SnackbarContext'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query'

import { AppRoutes } from './routes'
import { AppTheme } from './theme'

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={AppTheme}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider>
            <CssBaseline />
            <AppRoutes />
          </SnackbarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
