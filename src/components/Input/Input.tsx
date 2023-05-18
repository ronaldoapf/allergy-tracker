import { TextField, TextFieldProps } from '@mui/material'
import { useField } from 'formik'
import { memo } from 'react'

export type InputProps = TextFieldProps & {
  name: string
}

export function _Input({ name, ...props }: InputProps) {
  const [field, meta] = useField(name)
  const errorText = meta.error && meta.touched ? meta.error : ''
  return <TextField {...field} {...props} error={!!errorText} helperText={errorText} />
}

export const Input = memo(_Input)
