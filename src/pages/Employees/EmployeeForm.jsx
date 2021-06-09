import { Grid, makeStyles, TextField } from '@material-ui/core';
import React, {useState, useEffect} from 'react'

const useStyle = makeStyles(theme => ({
    root: {
        // backgroundColor: ''
        '& .MuiFormControl-root': {
           width: '80%',
           margin: theme.spacing(1) 
        }
    }
}))
    

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false 
}

export default function EmployeeForm() {
    const classes = useStyle();
    const [values, setValues] = useState(initialFValues);
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                     variant="outlined"
                     label="Full Name"
                     value={values.fullName}
                     onChange= {handleInputChange}
                     name="fullName"
                    />
                    <TextField
                     variant="outlined"
                     label="Email"
                     value={values.email}
                    />
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </form>
    )
}
