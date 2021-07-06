import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import React from 'react'

function DatePicker(props) {

const {name,label,value,onChange} = props
const convertToDefaEventParameter = (name, value) => ({
    target: {
        name, value
    }
})

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined" 
                label={label}
                formate="MMM/dd/yyyy"
                name={name}
                value={value}
                onChange={ date => onChange(convertToDefaEventParameter(name, date))}
            />
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker
