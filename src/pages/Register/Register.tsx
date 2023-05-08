import {
  Card,
  Grid,
  Select,
  Button,
  Divider,
  MenuItem,
  Container,
  TextField,
  InputLabel,
  Typography,
  FormControl,
  CardContent,
} from '@mui/material'
import { Link } from 'react-router-dom'

import { RegisterContainer } from './style'

export function Register() {
  return (
    <RegisterContainer>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  fontWeight={500}
                  textAlign="center"
                  sx={{ color: '#673ab7' }}
                >
                  Crie a sua conta
                </Typography>

                <Typography
                  gutterBottom
                  fontWeight={500}
                  component="span"
                  variant="caption"
                  textAlign="center"
                >
                  Entre com suas credencias para criar sua conta
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth size="medium" name="name" type="text" label="Nome completo" />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth size="medium" name="email" type="email" label="E-mail" />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth size="medium" name="password" type="password" label="Senha" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="medium"
                  type="password"
                  name="confirmPassword"
                  label="Confirmar senha"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">Selecione um país</InputLabel>
                  <Select label="country">
                    <MenuItem value="Estados Unidos">Estados Unidos</MenuItem>
                    <MenuItem value="Brasil">Brasil</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="date"
                  size="medium"
                  name="birthDay"
                  label="Data de nascimento"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Criar conta
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <Typography color="black" fontWeight={600} textAlign="center" variant="subtitle2">
                    Já possui uma conta? Faça login
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </RegisterContainer>
  )
}
