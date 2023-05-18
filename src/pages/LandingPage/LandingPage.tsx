import { Hero } from '@components/Hero'
import { Menu } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'

import { LandingPageContainer } from './style'

export function LandingPage() {
  return (
    <LandingPageContainer>
      <Hero />
    </LandingPageContainer>
  )
}
