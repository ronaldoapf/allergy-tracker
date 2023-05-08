import {
  Button,
  Card,
  Grid,
  TextField,
  Container,
  Typography,
  CardContent,
  Divider,
} from '@mui/material'
import { Link } from 'react-router-dom'

import { LoginContainer, LoginHeaderContainer } from './style'

export function Login() {
  return (
    <LoginContainer>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <LoginHeaderContainer>
              <Typography
                variant="h4"
                component="h2"
                fontWeight={500}
                textAlign="center"
                sx={{ color: '#673ab7' }}
              >
                Olá, bem vindo!
              </Typography>

              <Typography
                gutterBottom
                fontWeight={500}
                component="span"
                variant="caption"
                textAlign="center"
              >
                Entre com suas credenciais para continuar
              </Typography>
            </LoginHeaderContainer>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth size="medium" name="email" type="email" label="E-mail" />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth size="medium" name="password" type="password" label="Senha" />
              </Grid>

              <Grid item xs={12}>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Typography
                    color="primary"
                    fontWeight={500}
                    textAlign="right"
                    variant="subtitle2"
                  >
                    Esqueceu sua senha?
                  </Typography>
                </Link>
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Entrar
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <Typography color="black" fontWeight={600} textAlign="center" variant="subtitle2">
                    Ainda não tem uma conta?
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </LoginContainer>
  )
}
