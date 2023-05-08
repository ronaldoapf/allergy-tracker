import { Hero } from '@components/Hero'
import { Menu } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'

import { LandingPageContainer } from './style'

export function LandingPage() {
  return (
    <LandingPageContainer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Hero />
    </LandingPageContainer>
  )
}
