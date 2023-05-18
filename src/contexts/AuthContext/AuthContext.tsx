import { api } from '@common/resources/api'
import { AuthApi } from '@common/resources/api/auth/api'
import { UserApi } from '@common/resources/api/user'
import { createContext, useCallback, useEffect, useState } from 'react'

import { AuthContextType, AuthProviderProps, SignInData, User } from './types'

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() =>
    localStorage.getItem('@App:token') ? true : false,
  )

  useEffect(() => {
    const accessToken = localStorage.getItem('@App:token')
    const user = localStorage.getItem('@App:user')

    if (accessToken && user) {
      setIsAuthenticated(true)
      api.defaults.headers['Authorization'] = `Bearer ${accessToken}`
      recoverUserInformation().then((response) => {
        setUser({ ...response, accessToken })
      })
      return
    }

    setIsAuthenticated(false)
  }, [])

  const recoverUserInformation = useCallback(async () => {
    const { name, points, username, email: userEmail, image } = await UserApi.getUser()
    return { name, points, username, email: userEmail, image }
  }, [])

  const signIn = useCallback(
    async ({ email, password, addSnackbar, toggleIsLoading, navigate }: SignInData) => {
      console.log('signIn')
      try {
        const { accessToken } = await AuthApi.login({ email, password })
        localStorage.setItem('@App:token', accessToken)
        api.defaults.headers['Authorization'] = `Bearer ${accessToken}`

        const userInfo = await recoverUserInformation()
        localStorage.setItem('@App:user', JSON.stringify(userInfo))
        setUser({ ...userInfo, accessToken })
        navigate('/app/dashboard')
        setIsAuthenticated(true)
      } catch (e) {
        if (addSnackbar)
          addSnackbar({
            type: 'error',
            message: 'Algo de errado não está certo',
          })
      } finally {
        toggleIsLoading()
      }
    },
    [],
  )

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
