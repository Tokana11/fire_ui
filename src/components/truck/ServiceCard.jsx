import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteDialog from '../truck/DeleteDialog';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Image from "../../assets/images/gear.png";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import EditServiceRecord from './EditServiceRecord';

function ServiceDetails({ service }) {

    const [ open, setOpen ] = React.useState(false);

    const [ scroll, setScroll ] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [ open ]);


    function createLiquidsData(type, brand, quantity) {
        return { type, brand, quantity };
    }

    const liquids = [
        createLiquidsData('Двигателно масло', service.engineOil, service.engineOilVol),
        createLiquidsData('Хидравлично масло', service.hydolicOil, service.hydolicOilVol),
        createLiquidsData('Диференциално масло', service.differentialOil, service.differentialOilVol),
        createLiquidsData('Трансмисионно масло', service.transmissinOil, service.transmissinOilVol),
        createLiquidsData('Масло помпа', service.pumpOil, service.pumpOilVol),
        createLiquidsData('Спитачна течност', service.brakeFluid, service.brakeFluidVol),
        createLiquidsData('Антифриз', service.antifreeze, service.antifreezeVol)
    ];


    function createTiresData(type, changed, brand, quantity) {
        return { type, changed, brand, quantity };
    }

    const tires = [
        createTiresData('Предни гуми', service.tires.frontTiresChanged, service.tires.frontTires, service.tires.frontTiresQuantity),
        createTiresData('Задни гуми', service.tires.rearTiresChanged, service.tires.rearTires, service.tires.rearTiresQuantity),
    ];


    function createFilterData(type, changed, serialNumber, quantity) {
        return { type, changed, serialNumber, quantity }
    }

    const filters = [
        createFilterData('Въздушен ф-р', service.filters.airFilterChanged, service.filters.airFilter, service.filters.airFilterQuantity),
        createFilterData('Горивен ф-р', service.filters.fuelFilterChanged, service.filters.fuelFilter, service.filters.fuelFilterQuantity),
        createFilterData('Маслен ф-р', service.filters.oilFilterChanged, service.filters.oilFilter, service.filters.oilFilterQuantity)
    ];

    return (
        <Grid item container>
            <Button
                variant="contained"
                color="warning"
                sx={{ width: '100%' }}
                onClick={handleClickOpen('paper')}
            >
                детайли <HelpOutlineOutlinedIcon />
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
            >
                <DialogTitle id="scroll-dialog-title">Детайли:</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <Divider ><h6>Eксплоатацинни течности</h6></Divider>
                            <br />
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 550 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">тип</TableCell>
                                            <TableCell align="center">
                                                марка /
                                                <br />
                                                вискозитет
                                            </TableCell>
                                            <TableCell align="center">
                                                количество
                                                <br />
                                                /л./
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {liquids.map((liquid) => (
                                            <TableRow
                                                key={liquid.type}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left">{liquid.type}</TableCell>
                                                <TableCell align="center">{liquid.brand !== '' ? liquid.brand : '-'}</TableCell>
                                                <TableCell align="center">{isNaN(liquid.quantity) ? '-' : liquid.quantity}</TableCell>
                                            </TableRow>
                                        ))}

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item>
                            <Divider ><h6>Филтри</h6></Divider>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 550 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">тип</TableCell>
                                            <TableCell align="center">
                                                сменен
                                            </TableCell>
                                            <TableCell align="center">
                                                сериен номер
                                            </TableCell>
                                            <TableCell align="center">
                                                количество
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {filters.map((filter) => (
                                            <TableRow
                                                key={filter.type}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left">{filter.type}</TableCell>
                                                <TableCell align="center">{filter.changed ? 'да' : 'не'}</TableCell>
                                                <TableCell align="center">{filter.serialNumber !== '' ? filter.serialNumber : '-'}</TableCell>
                                                <TableCell align="center">{filter.changed ? filter.quantity : '-'}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item sx={{ width: '100%' }}>
                            <Divider><h6>Гуми</h6></Divider>
                            <br />
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 550 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">тип</TableCell>
                                            <TableCell align="center">
                                                смяна
                                            </TableCell>
                                            <TableCell align="center">
                                                марка/размер
                                            </TableCell>
                                            <TableCell align="center">
                                                количество
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {tires.map((tire) => (

                                            <TableRow
                                                key={tire.type}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left">{tire.type}</TableCell>
                                                <TableCell align="center">{tire.changed ? 'да' : 'не'}</TableCell>
                                                <TableCell align="center">{tire.brand !== '' ? tire.brand : '-'}</TableCell>
                                                <TableCell align="center">{tire.changed ? tire.quantity : '-'}</TableCell>
                                            </TableRow>

                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>



                        </Grid>
                        <Grid item sx={{ width: '100%' }}>
                            <Divider><h6>Други</h6></Divider>
                            <br />
                            {service.message !== '' ? <p>{service.message}</p> : <p>Няма данни за извършени други дейности по обслужване на автомобила!</p>}
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='contained'
                        color="error"
                        onClick={handleClose}
                    >
                        Затвори
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

export default function ServiceCard({ service, editServiceRecord, deleteService }) {
    return (
        <Grid item >
            <Card sx={{ maxWidth: 300, marginTop: 3 }}>
                <CardMedia
                    component="img"
                    alt="maintenance image"
                    height="155"
                    image={Image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {service.regNumber}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {service.structure}
                        <br />
                        <b>Описание:</b> {service.description}
                        <br />
                        <b>Дата:</b> {service.date}
                        <br />
                        <b>Киломeтраж:</b> {service.mileage} км
                        <br />
                        <b>Моточасовник:</b> {service.engineHoursMeter} м/ч
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                            <Grid
                                container
                                direction="row"
                                item xs={12}
                            >
                                <ServiceDetails service={service} />
                            </Grid>
                            <Grid
                                item
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-end"
                            >
                                <EditServiceRecord
                                    id={service.id}
                                    service={service}
                                    editServiceRecord={editServiceRecord}
                                />
                                <DeleteDialog
                                    id={service.id}
                                    buttonLabel={'Изтрий'}
                                    type={'service'}
                                    deleteService={deleteService}
                                    deleteMessage={`запис за обслужване с №: ${service.id} от ${service.date} за пожарен автомобил с рег. № ${service.regNumber} `}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </CardActions>
            </Card >
        </Grid>
    );
}