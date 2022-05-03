import * as React from 'react';
import AddServiceRecord from './AddServiceRecord'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteDialog from '../truck/DeleteDialog';
import Grid from '@mui/material/Grid';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Image from "../../assets/images/gear.png";
import Typography from '@mui/material/Typography';
import { useOutletContext } from 'react-router-dom';

function ServiceCard({ service, deleteService }) {
    return (
        <Grid item >
            <Card sx={{ maxWidth: 300, marginTop: 3 }}>
                <CardMedia
                    component="img"
                    alt="maintenance image"
                    height="140"
                    image={Image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {service.regNumber}

                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {service.structure}
                        <br />
                        <b>Дата:</b> {service.date}
                        <br />
                        <b>Киломeтраж:</b> {service.mileage} км
                        <br />
                        <b>Моточасовник:</b> {service.engineHoursMeter} м/ч
                        <br />
                        <b>Описание:</b> {service.description}
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
                                <Button variant="contained" color="warning" sx={{ width: '100%' }}>
                                    детайли <HelpOutlineOutlinedIcon />
                                </Button>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-end"
                            >
                                <Button variant="contained" color="success">Edit</Button>
                                <DeleteDialog
                                    id={service.id}
                                    buttonLabel={'Изтрий'}
                                    type={'service'}
                                    deleteService={deleteService}
                                    deleteMessage={`запис за обслужване с №: ${service.id} от ${service.date} за пожарен автомобил с рег. № ${service.regNumber} `} />
                            </Grid>
                        </Grid>
                    </Box>
                </CardActions>
            </Card >
        </Grid>
    );
}


export default function ServiceRecords() {

    const { services } = useOutletContext();

    const { addServiceRecord } = useOutletContext();

    const { deleteService } = useOutletContext()

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="start"
                alignItems="center"
                spacing={3}
            >
                {services.map((service) => <ServiceCard key={service.id} service={service} deleteService={deleteService} />)}
            </Grid >
            <AddServiceRecord addServiceRecord={addServiceRecord} />
        </>
    );
}