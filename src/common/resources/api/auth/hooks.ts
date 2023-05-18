import { useSnackbar } from '@hooks/useSnackbar'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

import { AuthApi, CreateUserType } from './api'

export function useCreateUser() {
  const { addSnackbar } = useSnackbar()

  return useMutation(async (payload: CreateUserType) => AuthApi.createUser(payload), {
    onSuccess: () => {
      addSnackbar({
        type: 'success',
        message: 'Cliente cadastrado com sucesso',
      })
    },
    onError: (error: AxiosError) => {
      const { data } = error.response as AxiosResponse
      addSnackbar({
        type: 'error',
        message: data.userMessage,
      })
    },
  })
}

// export function useAuth() {
//   return useMutation(
//     async (value: UseUpdateProtocol) =>
//       AttendanceProtocolApi.updateAttendanceProtocol(value.id, value.caseNumber),
//     {
//       onSuccess: () => {
//         addSnackbar({
//           type: 'success',
//           message: 'Protocolo atualizado com sucesso',
//         })
//         queryClient.invalidateQueries({ queryKey: ['attendance-protocol'] })
//       },
//       onError: (error: AxiosError) => {
//         const { data } = error.response as AxiosResponse
//         addSnackbar({
//           type: 'error',
//           message: data.userMessage,
//         })
//       },
//     },
//   )
// }
