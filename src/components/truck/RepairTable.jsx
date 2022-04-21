import React from 'react'
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useOutletContext } from 'react-router-dom';
import DeleteDialog from '../truck/DeleteDialog';
import EditRepairRecord from './EditRepairRecord';
import AddRepairRecord from './AddRepairRecord';

export default function RepairTable() {

    const { repairs } = useOutletContext();
    const {addRepairRecord} = useOutletContext();
    const { editRepairRecord } = useOutletContext();
    const { deleteRepair } = useOutletContext();

    function sumPrice() {
        return Number.parseFloat(repairs.reduce((price, repair) => price = price + repair.price, 0)).toFixed(2)
    }

    return (
        <div>
            <TableContainer className='mb-5 mt-5' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell >Структура</TableCell>
                            <TableCell >Автомобил</TableCell>
                            <TableCell align="center">Дата</TableCell>
                            <TableCell align="center">Описание</TableCell>
                            <TableCell align="center">Цена/лв.</TableCell>
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
                                <TableCell align="center">{repair.date.toString()}</TableCell>
                                <TableCell align="center">{repair.description}</TableCell>
                                <TableCell align="center">{repair.price}</TableCell>
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
                                            <EditRepairRecord
                                                id={repair.id}
                                                repair={repair}
                                                editRepairRecord={editRepairRecord}
                                            />
                                            {' '}
                                            <DeleteDialog id={repair.id}
                                                type={'repair'}
                                                deleteRepair={deleteRepair}
                                                deleteMessage={`запис за ремонт с №: ${repair.id} от ${repair.date} за пожарен автомобил с рег. № ${repair.regNumber} `} />

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
                            <TableCell >Цена:</TableCell>
                            <TableCell >{sumPrice()} лв.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <AddRepairRecord addRepairRecord={addRepairRecord} />
        </div>
    )
}
