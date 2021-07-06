import React from 'react'
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core'

export default function Checkbox(props) {
    const {name,label,value, onChange} = props

    const convertToDefaEventParameter = (name, value) => ({
        target: {
            name, value
        }
    })
    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                name={name}
                checked={value}
                onChange={ e => onChange(convertToDefaEventParameter(name, e.target.checked))}
                />}
                label={label}
            />

            
        </FormControl>
    )
}