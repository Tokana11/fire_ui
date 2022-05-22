import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteDialog from '../truck/DeleteDialog';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditRepairRecord from './EditRepairRecord'
import Grid from '@mui/material/Grid';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Image from "../../assets/images/spanner.png";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function ReapirsDetails({ repair }) {

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


    function createRepairsData(id, message, price) {
        return { id, message, price };
    }

    const repairs = [
        createRepairsData(repair.id, repair.message, repair.price),
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
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 550 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Описание</TableCell>
                                            <TableCell align="center">Цена</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {repairs.map((repair) => (
                                            <TableRow
                                                key={repair.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left">{repair.message !== '' ? repair.message : '-'}</TableCell>
                                                <TableCell align="center">{isNaN(repair.price) ? '-' : repair.price} лв.</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
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

export default function RepairCard({ repair, editRepairRecord, deleteRepair }) {
    return (
        <Grid item >
            <Card sx={{ maxWidth: 300, marginTop: 3 }}>
                <CardMedia
                    component="img"
                    alt="repair image"
                    height="155"
                    image={Image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {repair.regNumber}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {repair.structure}
                        <br />
                        <b>Описание:</b> {repair.description}
                        <br />
                        <b>Дата:</b> {repair.date}
                        <br />
                        <b>Киломeтраж:</b> {repair.mileage} км
                        <br />
                        <b>Моточасовник:</b> {repair.engineHoursMeter} м/ч
                        <br />
                        <b>Докладна №:</b> {repair.reportNumber}
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
                                <ReapirsDetails repair={repair} />
                            </Grid>
                            <Grid
                                item
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-end"
                            >
                                <EditRepairRecord
                                    id={repair.id}
                                    repair={repair}
                                    editRepairRecord={editRepairRecord}
                                />
                                <DeleteDialog
                                    id={repair.id}
                                    buttonLabel={'Изтрий'}
                                    type={'repair'}
                                    deleteRepair={deleteRepair}
                                    deleteMessage={`запис за ремонт с №: ${repair.id} от ${repair.date} за пожарен автомобил с рег. № ${repair.regNumber} `}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </CardActions>
            </Card >
        </Grid>
    );
}