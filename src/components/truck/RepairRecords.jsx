import * as React from 'react';
import { useOutletContext } from 'react-router-dom';
import AddRepairRecord from './AddRepairRecord'
import Grid from '@mui/material/Grid';
import RepairCard from './RepairCard'

export default function RepairRecords() {

    const { repairs } = useOutletContext();

    const { addRepairRecord } = useOutletContext();

    const { editRepairRecord } = useOutletContext();

    const { deleteRepair } = useOutletContext();

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="start"
                alignItems="center"
                spacing={3}
                marginBottom={2}
            >
                {repairs.map((repair) => <RepairCard
                    key={repair.id}
                    repair={repair}
                    editRepairRecord={editRepairRecord}
                    deleteRepair={deleteRepair} />)}
            </Grid >
            <AddRepairRecord addRepairRecord={addRepairRecord} />
        </>
    );
}