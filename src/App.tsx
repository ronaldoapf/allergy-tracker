import { CssBaseline, ThemeProvider } from '@mui/material'

import { AppRoutes } from './routes'
import { AppTheme } from './theme'

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
