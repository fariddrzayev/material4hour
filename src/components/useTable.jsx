import { TablePagination } from '@material-ui/core';
import { Table, TableHead, TableCell, makeStyles } from '@material-ui/core'
import React, {useState} from 'react'

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
}))

export default function useTable(records, headCells) {

    const classes = useStyles()
    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])


    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props => {
        return (
            <TableHead>
                {
                    headCells.map(headCell => (
                        <TableCell key={headCell.id}>
                            {headCell.label}
                        </TableCell>
                    ))
                }
            </TableHead>
        )
    }

    const TblPagination =() => (
        <TablePagination
            component="div"
            rowsPerPageOptions={pages}
            rowsPerPage={rowsPerPage}
            count={records.length}
            page={page }
         />
    )

    return {
        TblContainer,
        TblHead,
        TblPagination
    }
}
