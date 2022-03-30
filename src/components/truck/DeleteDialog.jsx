import * as React from 'react';
import { useState } from 'react';

import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function DeleteDialog({ id, type, deleteTruck, deleteRepair, deleteFueling, deleteService, deleteMessage,buttonLabel }) {

    const [ open, setOpen ] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        if (type === 'truck') {
            deleteTruck(id);
        } else if (type === 'repair') {
            deleteRepair(id);
        } else if (type === 'fueling') {
            deleteFueling(id);
        } else if (type === 'service') {
            deleteService(id);
        }
        setOpen(false);
    };

    return (
        <div>
            <Button
                style={{
                    backgroundColor: "#d62828",
                }}
                size="small"
                variant="contained"
                onClick={handleClickOpen}>
                {buttonLabel} <DeleteOutlinedIcon />
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Изтрий!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Сигурни ли сте, че искате да изтрите {deleteMessage} ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        style={{
                            color: "white",
                            backgroundColor: "#d62828",
                        }}
                        onClick={handleClose}>
                        Отказ
                    </Button>
                    <Button
                        style={{
                            color: "white",
                            backgroundColor: "#198754",
                        }}
                        onClick={handleConfirm}>
                        Потвърди
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
