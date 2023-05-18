import { SelectProps as MaterialSelectProps } from '@mui/material'

export type SelectOptions = Array<{
  label: string
  value: string | number
}>

export type SelectProps = MaterialSelectProps & {
  name: string
  size: string
  options: SelectOptions
  fullWidth: boolean
}
