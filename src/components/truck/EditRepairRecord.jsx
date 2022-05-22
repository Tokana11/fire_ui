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
import Grid from '@mui/material/Grid';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';

const localeMap = {
    bg: bgLocale
}

export default function EditRepairRecord({ repair, editRepairRecord }) {

    const { cards } = useOutletContext();

    const [ locale ] = React.useState('bg');

    const [ open, setOpen ] = React.useState(false);

    const regNumOptions = cards.map(item => item.regNumber);

    const [ structure, setStructure ] = React.useState('');

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
            mileage: repair.mileage,
            engineHoursMeter: repair.engineHoursMeter,
            description: repair.description,
            reportNumber: repair.reportNumber,
            message: repair.message,
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
        data.mileage = Number.parseFloat(data.mileage)
        data.engineHoursMeter = Number.parseFloat(data.engineHoursMeter)
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
                <CreateOutlinedIcon /> Редак.
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Добавяне на запис:</DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                        onSubmit={handleSubmit((data) => {
                            let formatedDate = new Date(data.date).toLocaleDateString(locale)
                            data.date = formatedDate;
                            editRecord(data);
                            reset();
                        })}
                    >
                        <Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={6}>
                                    <Autocomplete
                                        disablePortal
                                        value={repair.regNumber}
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
                                </Grid>
                                <Grid item xs={6}>
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
                                                        <TextField style={{ left: 10 }} {...params} />
                                                    )}
                                                />
                                            </LocalizationProvider>
                                        )}
                                    />
                                </Grid>
                                <Grid item container direction={'row'} >
                                    <TextField
                                        fullWidth
                                        label="Вид на дейността:"
                                        {...register("description", {
                                            required: 'Въведете дейност!'
                                        })}
                                        helperText={errors.description?.message}
                                    />
                                </Grid>
                                <Grid item container direction={'row'} spacing={1}>
                                    <Grid item xs={6}>
                                        <TextField
                                            label="Километраж:"
                                            variant="outlined"
                                            fullWidth
                                            {...register("mileage", {
                                                required: 'Въведете показанията на километража!',
                                                pattern: {
                                                    value: /^\d+(\.\d{1,2})?$/,
                                                    message: 'Въвдете само цифри!'
                                                }
                                            })}
                                            helperText={errors.mileage?.message}
                                        />
                                    </Grid>
                                    < Grid item xs={6}>
                                        <TextField
                                            label="Моточасовник:"
                                            variant="outlined"
                                            style={{ width: '95%' }}
                                            {...register("engineHoursMeter", {
                                                required: 'Въведете показанията на моточасовника!',
                                                pattern: {
                                                    value: /^\d+(\.\d{1,2})?$/,
                                                    message: 'Въвдете само цифри!'
                                                }
                                            })}
                                            helperText={errors.engineHoursMeter?.message}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid item container direction={'row'} spacing={1}>
                                    <Grid item xs={6}>
                                        <TextField
                                            label="Докладна №:"
                                            variant="outlined"
                                            fullWidth
                                            type={'text'}
                                            {...register("reportNumber")}
                                        />
                                    </Grid>
                                    < Grid item xs={6}>
                                        <TextField
                                            label="Цена:"
                                            variant="outlined"
                                            style={{ width: '95%' }}
                                            {...register("price", {
                                                required: 'Въведете цена!',
                                                pattern: {
                                                    value: /^\d+(\.\d{1,2})?$/,
                                                    message: 'Въвдете само цифри!'
                                                }
                                            })}
                                            helperText={errors.price?.message}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} >
                                <TextField
                                    fullWidth
                                    label="Друго:"
                                    multiline
                                    rows={2}
                                    {...register("message")}
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                justifyContent="space-between"
                                alignItems="flex-end"
                            >
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
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
            </Dialog >
        </div >

    )
}
