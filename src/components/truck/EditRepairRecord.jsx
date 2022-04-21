import * as React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import bgLocale from 'date-fns/locale/bg';
import Button from '@mui/material/Button';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
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

export default function EditRepairRecord({ repair, editRepairRecord }) {

    const { cards } = useOutletContext();

    const [ locale ] = React.useState('bg');

    const [ open, setOpen ] = React.useState(false);

    const regNumOptions = cards.map(item => item.regNumber);

    const [ structure, setStructure ] = React.useState(repair.structure);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            id: repair.id,
            regNumber: repair.regNumber,
            structure: repair.structure,
            date: repair.date,
            description: repair.description,
            price: repair.price,
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

    function getStructuteByTruckRegNum(regNumber) {
        cards.forEach(element => {
            if (element.regNumber === regNumber) {
                console.log(element.structure)
                setStructure(element.structure);
            }
        });
    }

    const editRecord = (data) => {
        data.structure = structure;
        data.price = Number.parseFloat(data.price)
        editRepairRecord(data)
        handleClose();
    }

    return (
        <div>
            <Button
                size='small'
                variant='contained'
                sx={{ background: '#1a535c' }}
                onClick={handleClickOpen}
            >
                <CreateOutlinedIcon />
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
                            let formatedDate = new Date(data.date).toLocaleDateString(locale)
                            data.date = formatedDate;
                            editRecord(data);
                            reset();
                        })}
                    >
                        <Stack direction={'row'}>
                            <Autocomplete
                                id="outlined-basic"
                                disablePortal
                                defaultValue={repair.regNumber}
                                options={regNumOptions}
                                onChange={(_event, regNumber) => {
                                    getStructuteByTruckRegNum(regNumber)
                                }}
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
                            <Controller
                                control={control}
                                name={'date'}
                                render={({ field }) => (
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[ locale ]}>
                                        <DatePicker
                                            label={'Дата'}
                                            value={field.value}
                                            onChange={(date) => handleChange(date, field)}
                                            renderInput={(params) => (
                                                <TextField  {...params} />
                                            )}
                                        />
                                    </LocalizationProvider>
                                )}
                            />
                        </Stack>
                        <Stack direction={'row'}>
                            <TextField
                                id="outlined-basic"
                                label="Описание"
                                variant="outlined"
                                {...register("description", {
                                    required: 'Въведете описание на извършената дейност!',
                                })}
                                helperText={errors.description?.message}
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
