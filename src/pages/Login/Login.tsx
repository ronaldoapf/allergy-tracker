import { AuthApi, LoginType } from '@common/resources/api/auth/api'
import { Loading } from '@components/Loading'
import { useAuth } from '@hooks/useAuth'
import { useSnackbar } from '@hooks/useSnackbar'
import { Card, Container, Typography, CardContent } from '@mui/material'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoginForm } from './Form/LoginForm/LoginForm'
import { LoginContainer, LoginHeaderContainer } from './style'

export function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const { addSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)

  const toggleIsLoading = () => {
    setIsLoading((prevState) => !prevState)
  }

  const handleSubmit = useCallback(async (values: LoginType) => {
    const { email, password } = values
    toggleIsLoading()
    await signIn({ email, password, addSnackbar, toggleIsLoading, navigate })
  }, [])

  return (
    <>
      <Loading open={isLoading} title="Enviando informações ao servidor..." />
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

              <LoginForm
                onSubmit={handleSubmit}
                initialValues={{ email: 'marcelo@gmail.com', password: 'testeeeeeeA@2' }}
              />
            </CardContent>
          </Card>
        </Container>
      </LoginContainer>
    </>
  )
}
