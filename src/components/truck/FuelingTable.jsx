import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup } from "react-bootstrap";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useOutletContext } from 'react-router-dom';

import DeleteDialog from '../truck/DeleteDialog';

export default function RepairTable() {

    const { fuelings } = useOutletContext();
    const { deleteFueling } = useOutletContext();

    function sumQuantity() {
        return Number.parseFloat(fuelings.reduce((price, fueling) => price = price + fueling.quantity, 0)).toFixed(2)
    }

    function sumPrice() {
        return Number.parseFloat(fuelings.reduce((price, fueling) => price = price + fueling.price, 0)).toFixed(2)
    }

    return (
        <TableContainer className='mb-5 mt-5' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>№</TableCell>
                        <TableCell >Структура</TableCell>
                        <TableCell >Автомобил</TableCell>
                        <TableCell align="center">Дата</TableCell>
                        <TableCell align="center">Количество</TableCell>
                        <TableCell >Цена</TableCell>
                        <TableCell align="center">Опции</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fuelings.map((fueling) => (
                        <TableRow
                            hover={true}
                            key={fueling.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >{fueling.id}</TableCell>
                            <TableCell >{fueling.structure}</TableCell>
                            <TableCell >{fueling.regNumber}</TableCell>
                            <TableCell align="center">{fueling.date}</TableCell>
                            <TableCell align="center">{fueling.quantity}</TableCell>
                            <TableCell >{fueling.price}</TableCell>
                            <TableCell align="center">
                                <ButtonGroup size={"sm"}>
                                    <Button variant="outline-primary">
                                        <CreateOutlinedIcon />
                                    </Button>{' '}
                                    <DeleteDialog id={fueling.id}
                                        type={'fueling'}
                                        deleteFueling={deleteFueling}
                                        deleteMessage={`запис за зарядка с №: ${fueling.id} от ${fueling.date} за пожарен автомобил с рег. № ${fueling.regNumber} `} />
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell>Общо:</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell >Количество:</TableCell>
                        <TableCell >{sumQuantity()} л.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >Цена:</TableCell>
                        <TableCell >{sumPrice()} лв.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
