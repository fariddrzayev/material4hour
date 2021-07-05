import React from 'react'
import { FormControl, FormLabel, RadioGroup as MiuRadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export default function RadioGroup(props) {
    const {name, label, value, onChange, items} = props;
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MiuRadioGroup row 
                name={name}
                value={value}
                onChange={onChange} >
                {
                    items.map(
                        (item) => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                        )
                    )
                }
                {/* <FormControlLabel  value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
            </MiuRadioGroup>
        </FormControl>
    )
}