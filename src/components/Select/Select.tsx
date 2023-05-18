import {
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Select as MaterialSelect,
} from '@mui/material'
import { useField } from 'formik'
import { memo } from 'react'

import { SelectProps } from './types'

function _Select({ name, options, fullWidth, size, ...props }: SelectProps) {
  const [field, meta] = useField(name)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <FormControl fullWidth={fullWidth} size={size} error={!!errorText}>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <MaterialSelect
        MenuProps={{ MenuListProps: { style: { maxHeight: '300px' } } }}
        {...props}
        {...field}
      >
        {options.map((item, index) => {
          return (
            <MenuItem key={`${index}-${item.label}`} value={item.value}>
              {item.label}
            </MenuItem>
          )
        })}
      </MaterialSelect>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  )
}

export const Select = memo(_Select)
