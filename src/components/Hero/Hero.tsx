import Figure from '@assets/illustration.png'
import { Box, Button, Container, Hidden, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { HeroBox, HeroContainer } from './style'

export function Hero() {
  return (
    <HeroContainer maxWidth="lg">
      <HeroBox>
        <Typography className="application-title" variant="h2" fontWeight={900}>
          Sua vida sem preocupação
        </Typography>
        <Typography className="application-description">
          Com o <span>allergy tracker</span>, você pode se concentrar em aproveitar a vida sem se
          preocupar com sua alergia alimentar.
        </Typography>
        <Link to="/register">
          <Button variant="contained">Cadastre-se agora e experimente!</Button>
        </Link>
      </HeroBox>
      <Hidden smDown>
        <img src={Figure} />
      </Hidden>
    </HeroContainer>
  )
}
