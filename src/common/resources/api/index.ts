import { QueryClient } from '@tanstack/react-query'
import axios, { AxiosInstance } from 'axios'

const token = localStorage.getItem('@AllergyToken')

export const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8082',
})

if (token) api.defaults.headers['Authorization'] = `Bearer ${token}`

export const queryClient = new QueryClient()
