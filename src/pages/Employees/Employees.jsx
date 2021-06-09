import React from 'react'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PageHeader from '../../components/PageHeader';
import { makeStyles, Paper } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employees() {

    const classes = useStyle();

    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
        </>
    )
}
