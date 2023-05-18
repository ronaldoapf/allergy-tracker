import { AddSnackbarProps } from '@contexts/SnackbarContext/types'
import { ReactNode } from 'react'
import { NavigateFunction } from 'react-router-dom'

export interface AuthProviderProps {
  children: ReactNode
}

export interface User {
  name: string
  email: string
  image: string
  points: number
  username: string
  accessToken: string
}

export interface SignInData {
  email: string
  password: string
  addSnackbar: ({ type, message }: AddSnackbarProps) => void
  toggleIsLoading: () => void
  navigate: NavigateFunction
}

export interface AuthContextType {
  user: User
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<void>
}
