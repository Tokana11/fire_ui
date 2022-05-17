import * as React from 'react';
import { useOutletContext } from 'react-router-dom';
import AddServiceRecord from './AddServiceRecord'
import Grid from '@mui/material/Grid';
import ServiceCard from './ServiceCard'

export default function ServiceRecords() {

    const { services } = useOutletContext();

    const { addServiceRecord } = useOutletContext();

    const {editServiceRecord} = useOutletContext();

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
                {services.map((service) => <ServiceCard
                    key={service.id}
                    service={service}
                    editServiceRecord={editServiceRecord}
                    deleteService={deleteService} />)}
            </Grid >
            <AddServiceRecord addServiceRecord={addServiceRecord} />
        </>
    );
}