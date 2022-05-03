import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteDialog from '../truck/DeleteDialog';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup } from "react-bootstrap";
import { useOutletContext } from 'react-router-dom';

function Row({ service, deleteService }) {
    const [ open, setOpen ] = React.useState(false);
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell >{service.id}</TableCell>
                <TableCell >{service.structure}</TableCell>
                <TableCell >{service.regNumber}</TableCell>
                <TableCell align='center'>{service.description}</TableCell>
                <TableCell align='center'>{service.date}</TableCell>
                <TableCell>{service.mileage} км</TableCell>
                <TableCell align='center'>
                    <ButtonGroup size={"sm"}>
                        <Button variant="outline-primary">
                            <CreateOutlinedIcon />
                        </Button>{' '}
                        <DeleteDialog id={service.id}
                            type={'service'}
                            deleteService={deleteService}
                            deleteMessage={`запис за обслужване с №: ${service.id} от ${service.date} за пожарен автомобил с рег. № ${service.regNumber} `} />
                    </ButtonGroup>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>

                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Филтри:
                            </Typography>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan={2}>
                                            Маслен филтър
                                        </TableCell>
                                        <TableCell align="center" colSpan={2}>
                                            Въздушен
                                        </TableCell>
                                    </TableRow>

                                </TableHead>
                                <TableBody>
                                    <TableCell>{service.filters.oilFilter}</TableCell>
                                    <TableCell>{service.filters.oilFilterQuantity}</TableCell>
                                    <TableCell>{service.filters.airFilter}</TableCell>
                                    <TableCell>{service.filters.airFilterQuantity}</TableCell>
                                </TableBody>
                            </Table>
                        </Box>

                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Експлоатационни течности:
                            </Typography>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan={2}>
                                            Двиг. масло
                                        </TableCell>
                                        <TableCell align="center" colSpan={2}>
                                            Хидр. масло
                                        </TableCell>
                                        <TableCell align="center" colSpan={2}>
                                            Дифер. масло
                                        </TableCell>
                                        <TableCell align="center" colSpan={2}>
                                            Трансм. масло
                                        </TableCell>
                                        <TableCell align="center" colSpan={2}>
                                            Масло помпа
                                        </TableCell>
                                        <TableCell align="center" colSpan={2}>
                                            Спирачна т-ст
                                        </TableCell>
                                        <TableCell align="center" colSpan={2}>
                                            Антифриз
                                        </TableCell>
                                        <TableCell>Гуми</TableCell>
                                    </TableRow>

                                </TableHead>
                                <TableBody>
                                    <TableCell>{service.engineOil}</TableCell>
                                    <TableCell>{service.engineOilVol} л.</TableCell>
                                    <TableCell>{service.hydolicOil}</TableCell>
                                    <TableCell>{service.hydolicOilVol} л.</TableCell>
                                    <TableCell>{service.differentialOil}</TableCell>
                                    <TableCell>{service.differentialOilVol} л.</TableCell>
                                    <TableCell>{service.transmissinOil}</TableCell>
                                    <TableCell>{service.transmissinOilVol} л.</TableCell>
                                    <TableCell>{service.pumpOil}</TableCell>
                                    <TableCell>{service.pumpOilVol} л.</TableCell>
                                    <TableCell>{service.brakeFluid}</TableCell>
                                    <TableCell>{service.brakeFluidVol} л.</TableCell>
                                    <TableCell>{service.antifreeze}</TableCell>
                                    <TableCell>{service.antifreezeVol} л.</TableCell>
                                    <TableCell>{service.tyres}</TableCell>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>


        </React.Fragment>
    )

}


export default function ServiceTable() {

    const { services } = useOutletContext();
    const { deleteService } = useOutletContext();

    return (
        <TableContainer className='mb-5 mt-5' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>№</TableCell>
                        <TableCell >Структура</TableCell>
                        <TableCell >Автомобил</TableCell>
                        <TableCell align='center'>Описание</TableCell>
                        <TableCell align='center'>Дата</TableCell>
                        <TableCell>Километраж</TableCell>
                        <TableCell align='center'>Опции</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services.map((service) => (
                        <Row key={service.id} service={service} deleteService={deleteService} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


