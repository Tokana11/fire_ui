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

    const { repairs } = useOutletContext();
    const { deleteRepair } = useOutletContext();

    function sumPrice() {
        return Number.parseFloat(repairs.reduce((price, repair) => price = price + repair.price, 0)).toFixed(2)
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
                        <TableCell >Описание</TableCell>
                        <TableCell >Цена/лв.</TableCell>
                        <TableCell align="center">Опции</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {repairs.map((repair) => (
                        <TableRow
                            hover={true}
                            key={repair.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >{repair.id}</TableCell>
                            <TableCell >{repair.structure}</TableCell>
                            <TableCell >{repair.regNumber}</TableCell>
                            <TableCell align="center">{repair.date}</TableCell>
                            <TableCell >{repair.description}</TableCell>
                            <TableCell >{repair.price}</TableCell>
                            <TableCell align="center">
                                <ButtonGroup size={"sm"}>
                                    <Button variant="outline-primary">
                                        <CreateOutlinedIcon />
                                    </Button>{' '}
                                    <DeleteDialog id={repair.id}
                                        type={'repair'}
                                        deleteRepair={deleteRepair}
                                        deleteMessage={`запис за ремонт с №: ${repair.id} от ${repair.date} за пожарен автомобил с рег. № ${repair.regNumber} `} />

                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell>Общо:</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell >Цена:</TableCell>
                        <TableCell >{sumPrice()} лв.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
