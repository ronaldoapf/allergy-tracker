import { LoginType } from '@common/resources/api/auth/api'
import { Input } from '@components/Input'
import { Button, Divider, Grid, Typography } from '@mui/material'
import { FormikProvider, useFormik, Form } from 'formik'
import { Link } from 'react-router-dom'

export interface LoginFormProps {
  onSubmit: (values: LoginType) => void
  initialValues: LoginType
}

export function LoginForm({ onSubmit, initialValues }: LoginFormProps) {
  const context = useFormik({
    onSubmit,
    initialValues,
  })

  return (
    <FormikProvider value={context}>
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input fullWidth size="medium" name="email" type="email" label="E-mail" />
          </Grid>

          <Grid item xs={12}>
            <Input fullWidth size="medium" name="password" type="password" label="Senha" />
          </Grid>

          <Grid item xs={12}>
            <Link to="#" style={{ textDecoration: 'none' }}>
              <Typography color="primary" fontWeight={500} textAlign="right" variant="subtitle2">
                Esqueceu sua senha?
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth>
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
      </Form>
    </FormikProvider>
  )
}
