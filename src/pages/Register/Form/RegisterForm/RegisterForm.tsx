import { CreateUserType } from '@common/resources/api/auth/api'
import { Input } from '@components/Input'
import { Select } from '@components/Select'
import { SelectOptions } from '@components/Select/types'
import { Grid, Typography, Divider, FormControl, InputLabel, MenuItem, Button } from '@mui/material'
import { Form, FormikProvider, useFormik } from 'formik'
import { Link } from 'react-router-dom'

export interface RegisterFormProps {
  options: SelectOptions
  initialValues: CreateUserType
  onSubmit: (data: CreateUserType) => void
}

export function RegisterForm({ options, onSubmit, initialValues }: RegisterFormProps) {
  const context = useFormik({ onSubmit, initialValues })

  return (
    <FormikProvider value={context}>
      <Form>
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
            <Input fullWidth size="medium" name="name" type="text" label="Nome completo" />
          </Grid>

          <Grid item xs={12}>
            <Input fullWidth size="medium" name="email" type="email" label="E-mail" />
          </Grid>

          <Grid item xs={12}>
            <Input fullWidth size="medium" name="password" type="password" label="Senha" />
          </Grid>

          <Grid item xs={12}>
            <Input
              fullWidth
              size="medium"
              type="password"
              name="confirmPassword"
              label="Confirmar senha"
            />
          </Grid>

          <Grid item xs={12}>
            <Input fullWidth size="medium" name="country" label="País" />
          </Grid>

          <Grid item xs={12}>
            <Input fullWidth size="medium" name="city" label="Cidade" />
          </Grid>

          <Grid item xs={12}>
            <Input
              fullWidth
              type="date"
              size="medium"
              name="birthDate"
              label="Data de nascimento"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth>
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
      </Form>
    </FormikProvider>
  )
}
