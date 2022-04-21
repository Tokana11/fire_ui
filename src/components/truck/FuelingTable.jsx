import React from 'react';
import { useOutletContext } from 'react-router-dom';
import AddFielingRecord from './AddFielingRecord';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditFuelingRecord from './EditFuelingRecord';
import DeleteDialog from '../truck/DeleteDialog';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function FuelingTable() {

    const { fuelings } = useOutletContext();
    const { addFuelingRecord } = useOutletContext();
    const { editFuelingRecord } = useOutletContext();
    const { deleteFueling } = useOutletContext();

    function sumQuantity() {
        return Number.parseFloat(fuelings.reduce((quantity, fueling) => quantity = quantity + fueling.quantity, 0)).toFixed(2)
    }

    function sumPrice() {
        return Number.parseFloat(fuelings.reduce((price, fueling) => price = price + fueling.price, 0)).toFixed(2)
    }

    return (
        <>
            <TableContainer className='mb-5 mt-5' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell >Структура</TableCell>
                            <TableCell >Автомобил</TableCell>
                            <TableCell align="center">Дата</TableCell>
                            <TableCell align="center">Количество</TableCell>
                            <TableCell align="center">Цена</TableCell>
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
                                <TableCell align="center">{fueling.date.toString()}</TableCell>
                                <TableCell align="center">{fueling.quantity}</TableCell>
                                <TableCell align="center">{fueling.price}</TableCell>
                                <TableCell align="center">
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            '& > *': {
                                                m: 1,
                                            },
                                        }}
                                    >
                                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                                            <EditFuelingRecord
                                                id={fueling.id}
                                                fueling={fueling}
                                                editFuelingRecord={editFuelingRecord}
                                            />
                                            <DeleteDialog
                                                id={fueling.id}
                                                type={'fueling'}
                                                deleteFueling={deleteFueling}
                                                deleteMessage={`запис за зарядка с №: ${fueling.id} от ${fueling.date} за пожарен автомобил с рег. № ${fueling.regNumber} `} />
                                        </ButtonGroup>
                                    </Box>
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
            <AddFielingRecord addFuelingRecord={addFuelingRecord} />
        </>
    )
}
