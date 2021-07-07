import React, {useState} from 'react'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PageHeader from '../../components/PageHeader';
import { makeStyles, Paper, TableRow, TableBody, TableCell } from '@material-ui/core';
import useTable from '../../components/useTable'
import * as employeeService from '../../services/employeeService';

const useStyle = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name'},
    { id: 'email', label: 'Email Address (Personal)'},
    { id: 'mobile', label: 'Mobile Number'},
    { id: 'department', label: 'Department'},
]

export default function Employees() {

    const classes = useStyle();
    const [records, setRecords] = useState(employeeService.getAllEmployees())

    const { TblContainer, TblHead, TblPagination } = useTable(records, headCells);

    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                {/* <EmployeeForm /> */}
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            records.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.department}</TableCell>

                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </>
    )
}
