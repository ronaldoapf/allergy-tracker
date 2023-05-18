import { CreateUserType } from '@common/resources/api/auth/api'
import { useCreateUser } from '@common/resources/api/auth/hooks'
import { Loading } from '@components/Loading'
import { Card, Container, CardContent } from '@mui/material'

import { RegisterForm } from './Form/RegisterForm/RegisterForm'
import { RegisterContainer } from './style'

export function Register() {
  const { data, isLoading, error, mutateAsync } = useCreateUser()

  const options = [
    {
      label: 'Estados Unidos',
      value: 'Estados Unidos',
    },
  ]

  const initialValues: CreateUserType = {
    name: '',
    city: '',
    image: '',
    email: '',
    country: '',
    password: '',
    birthDate: '',
    confirmPassword: '',
  }

  const handleSubmit = (values: CreateUserType) => {
    mutateAsync(values)
  }

  return (
    <>
      <Loading open={isLoading} />
      <RegisterContainer>
        <Container maxWidth="sm">
          <Card>
            <CardContent>
              <RegisterForm
                onSubmit={handleSubmit}
                initialValues={initialValues}
                options={options}
              />
            </CardContent>
          </Card>
        </Container>
      </RegisterContainer>
    </>
  )
}
