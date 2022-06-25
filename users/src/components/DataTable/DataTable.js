import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DataTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {props.columns && props.columns.map((column) => (
                            <TableCell key={Math.random()} className={props.cellClasses} align="center">{column}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows && props.rows.map((row) => (
                        <TableRow
                            key={Math.random()}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {props.columns && props.columns.map((column) => (
                                <TableCell key={Math.random()} className={props.cellClasses} align="left" size='small'>{row[column]}</TableCell>
                            ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DataTable;