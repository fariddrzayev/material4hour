import { Grid, makeStyles, TextField, FormControl, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
// import Input from '../../components/controls/Input' ;
import Controls from '../../components/controls/Controls' ;
import React, {useState, useEffect} from 'react';
import {useForm, Form} from '../../components/useForm';
import  * as employeeService from '../../services/employeeService';

const useStyle = makeStyles(theme => ({
    root: {
        // backgroundColor: ''
        '& .MuiFormControl-root': {
           width: '80%',
           margin: theme.spacing(1) 
        }
    }
}))
    
const genderItems = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
    {id: 'other', title: 'Other'},
]
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

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName?"":"This field is required."
        if('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email)?"":"Email is not valid."
        if('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length>9?"":"Minumum 10 numbers required."
        if('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length !=0?"":"This field is required"
        setErrors({
            ...temp
        })

        if(fieldValues == values)  
            return Object.values(temp).every(x => x =="")
    }
 
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if(validate()){
            employeeService.insertEmployee(values)
        }
    }


    return (
        <form onSubmit={handleSubmit} className={classes.root} autoComplete="off" >
            <Grid container>
                <Grid item xs={6}>
                <Controls.Input
                name="fullName"
                label="Full Name"
                value={values.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
                />
                
                <Controls.Input 
                name="email"
                label="Email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
                />
                <Controls.Input 
                name="mobile"
                label="Mobile"
                value={values.mobile}
                onChange={handleInputChange}
                error={errors.mobile}
                />
                <Controls.Input 
                name="city"
                label="City"
                value={values.city}
                onChange={handleInputChange}
                error={errors.city}
                />
                </Grid>
                
                <Grid item xs={6}>

                    <Controls.RadioGroup 
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentColllection()}
                        error={errors.departmentId}
                    />

                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />

                    <Controls.Checkbox 
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                        
                        <div>
                            <Controls.Button 
                                text="Submit"
                                type="submit"
                            />
                            <Controls.Button 
                                onClick={resetForm}
                                text="Reset"
                                color="default"
                            />
                        </div>
                </Grid>
            </Grid>
        </form>
    )
}
