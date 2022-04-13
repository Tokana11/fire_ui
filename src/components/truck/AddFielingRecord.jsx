import * as React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import bgLocale from 'date-fns/locale/bg';
import Button from '@mui/material/Button';
import DatePicker from '@mui/lab/DatePicker';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const localeMap = {
    bg: bgLocale
}

export default function AddFielingRecord() {

    const { cards } = useOutletContext();

    const [ locale ] = React.useState('bg');

    const [ open, setOpen ] = React.useState(false);

    const options = cards.map(item => item.regNumber);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            regNumber: '',
            date: new Date().toDateString(),
            quantity: '',
            price: '',
        }
    });

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        reset();
    }

    const handleChange = (date, field) => {
        field.onChange(date);
    };

    const addFuelinRecord = (data) => {
        console.log(data);
        handleClose();
    }
    return (
        <div>
            <Button
                size='small'
                variant='contained'
                sx={{ position: 'fixed', bottom: 16, right: 16, background: '#1a535c' }}
                onClick={handleClickOpen}
            >
                <AddCircleOutlineOutlinedIcon />
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Добавяне на запис:</DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        onSubmit={handleSubmit((data) => {
                            addFuelinRecord(data);
                            reset();
                        })}
                    >
                        <Stack direction={'row'}>
                            <Autocomplete
                                id="outlined-basic"
                                disablePortal
                                options={options}
                                renderInput={(params) => <TextField
                                    {...params}
                                    {...register("regNumber", {
                                        required: 'Изберете автомобил!'
                                    })}
                                    label='Автомобил'
                                    helperText={errors.regNumber?.message}
                                />}
                            />
                        </Stack>
                        <Stack direction={'row'}>
                            <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[ locale ]}>
                                <Controller
                                    control={control}
                                    name={'date'}
                                    render={({ field }) => (
                                        <DatePicker
                                            label={'Дата'}
                                            value={field.value}
                                            onChange={(date) => handleChange(date.toDateString(), field)}
                                            renderInput={(params) => (
                                                <TextField  {...params} />
                                            )}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Stack>
                        <Stack direction={'row'}>
                            <TextField
                                id="outlined-basic"
                                label="Количество"
                                variant="outlined"
                                {...register("quantity", {
                                    required: 'Въведете количество!',
                                    pattern: {
                                        value: /^\d+(\.\d{1,2})?$/,
                                        message: 'Въвдете само цифри!'
                                    }
                                })}
                                helperText={errors.quantity?.message}
                            />
                        </Stack>
                        <Stack direction={'row'}>
                            <TextField
                                id="outlined-basic"
                                label="Цена"
                                variant="outlined"
                                {...register("price", {
                                    required: 'Въведете цена!',
                                    pattern: {
                                        value: /^\d+(\.\d{1,2})?$/,
                                        message: 'Въвдете само цифри!'
                                    }
                                })}
                                helperText={errors.price?.message}
                            />
                        </Stack>
                        <div style={{ float: 'right' }}>
                            <Button
                                variant='contained'
                                color='error'
                                onClick={handleClose}
                            >
                                Отказ
                            </Button>
                            {' '}
                            <Button
                                variant='contained'
                                color='success'
                                type='submit'
                            >
                                Запиши
                            </Button>
                        </div>
                    </Box>
                </DialogContent>
            </Dialog >
        </div >
    )
}
