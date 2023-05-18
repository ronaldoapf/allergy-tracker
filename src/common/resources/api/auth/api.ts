import { api } from '..'

const prefix = '/auth'

export interface LoginType {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
}

export interface CreateUserType {
  name: string
  email: string
  password: string
  confirmPassword: string
  country: string
  city: string
  birthDate: string
  image: string
}

export const AuthApi = {
  async login(payload: LoginType): Promise<LoginResponse> {
    const { data } = await api.post(`${prefix}/login`, payload)
    return data
  },

  async createUser(payload: CreateUserType): Promise<void> {
    const { data } = await api.post(`${prefix}/register`, payload)
    return data
  },
}
