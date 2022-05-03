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
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

const localeMap = {
    bg: bgLocale
}

export default function AddServiceRecord({ addServiceRecord }) {

    const { cards } = useOutletContext();

    const [ locale ] = React.useState('bg');

    const [ open, setOpen ] = React.useState(false);

    const regNumOptions = cards.map(item => item.regNumber);

    const [ structure, setStructure ] = React.useState('');

     const [ airFilterChanged, setAirFilterChanged ] = React.useState(false);

    const [ oilFilterChanged, setOilFilterChanged ] = React.useState(false);

    const [ fuelFilterChanged, setFuelFilterChanged ] = React.useState(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            regNumber: '',
            structure: '',
            description: '',
            engineOil: '',
            engineOilVol: '',
            hydolicOil: '',
            hydolicOilVol: '',
            differentialOil: '',
            differentialOilVol: '',
            transmissinOil: '',
            transmissinOilVol: '',
            pumpOil: '',
            pumpOilVol: '',
            brakeFluid: '',
            brakeFluidVol: '',
            antifreeze: '',
            antifreezeVol: '',
            tyres: '',
            mileage: '',
            date: '',
            filters: {
                airFilter: false,
                oilFilter: false,
                fuelFilter: false
            },
        }

    });

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        reset();
    }

    function getStructuteByTruckRegNum(regNumber) {
        cards.forEach(element => {
            if (element.regNumber === regNumber) {
                console.log(element.structure)
                setStructure(element.structure);
            }
        });
    }

    const handleChange = (date, field) => {
        field.onChange(date);
    };

    const handleAirSwitchChange = (event) => {
        setAirFilterChanged(event.target.checked);

    };

    const handleOilrSwitchChange = (event) => {
        setOilFilterChanged(event.target.checked);

    };

    const handleFuelSwitchChange = (event) => {
        setFuelFilterChanged(event.target.checked);

    };

    const addRecord = (data) => {
        data.structure = structure;
        data.engineOilVol = Number.parseFloat(data.engineOilVol);
        data.hydolicOilVol = Number.parseFloat(data.hydolicOilVol);
        data.differentialOilVol = Number.parseFloat(data.differentialOilVol);
        data.transmissinOilVol = Number.parseFloat(data.transmissinOilVol);
        data.pumpOilVol = Number.parseFloat(data.pumpOilVol);
        data.brakeFluidVol = Number.parseFloat(data.brakeFluidVol);
        data.antifreezeVol = Number.parseFloat(data.antifreezeVolNumber);
        data.filters.airFilter = airFilterChanged;
        data.filters.oilFilter = oilFilterChanged;
        data.filters.fuelFilter = fuelFilterChanged;
        addServiceRecord(data)
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
                            let formatedDate = new Date(data.date).toLocaleDateString(locale)
                            data.date = formatedDate;
                            addRecord(data);
                            reset();
                        })}
                    >
                        <Grid>
                            <Grid item container direction={'row'}>
                                <Autocomplete
                                    id="outlined-basic"
                                    disablePortal
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
                            </Grid>
                            <Grid item container direction={'row'}>
                                <TextField
                                    label="Двигателно масло"
                                    variant="outlined"
                                    {...register("engineOil", {
                                        required: 'Въведете описание на извършената дейност!',
                                    })}
                                />
                                <TextField
                                    label="Количество:"
                                    variant="outlined"
                                    {...register("engineOilVol", {
                                        required: 'Въведете количество!',
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: 'Въвдете само цифри!'
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid item container direction={'row'}>
                                <TextField
                                    label="Хидравлично масло"
                                    variant="outlined"
                                    {...register("hydolicOil", {
                                        required: 'Въведете описание на извършената дейност!',
                                    })}
                                />
                                <TextField
                                    label="Количество:"
                                    variant="outlined"
                                    {...register("hydolicOilVol", {
                                        required: 'Въведете количество!',
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: 'Въвдете само цифри!'
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid item container direction={'row'}>
                                <TextField
                                    label="Диференциално масло"
                                    variant="outlined"
                                    {...register("differentialOil", {
                                        required: 'Въведете описание на извършената дейност!',
                                    })}
                                />
                                <TextField
                                    label="Количество:"
                                    variant="outlined"
                                    {...register("differentialOilVol", {
                                        required: 'Въведете количество!',
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: 'Въвдете само цифри!'
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid item container direction={'row'}>
                                <TextField
                                    label="Трансмисионно масло"
                                    variant="outlined"
                                    {...register("transmissinOil", {
                                        required: 'Въведете описание на извършената дейност!',
                                    })}
                                />
                                <TextField
                                    label="Количество:"
                                    variant="outlined"
                                    {...register("transmissinOilVol", {
                                        required: 'Въведете количество!',
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: 'Въвдете само цифри!'
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid item container direction={'row'}>
                                <TextField
                                    label="Масло помпа"
                                    variant="outlined"
                                    {...register("pumpOil", {
                                        required: 'Въведете описание на извършената дейност!',
                                    })}
                                />
                                <TextField
                                    label="Количество:"
                                    variant="outlined"
                                    {...register("pumpOilVol", {
                                        required: 'Въведете количество!',
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: 'Въвдете само цифри!'
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid item container direction={'row'}>
                                <TextField
                                    label="Спирачна т-ст"
                                    variant="outlined"
                                    {...register("brakeFluid", {
                                        required: 'Въведете описание на извършената дейност!',
                                    })}
                                />
                                <TextField
                                    label="Количество"
                                    variant="outlined"
                                    {...register("brakeFluidVol", {
                                        required: 'Въведете количество!',
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: 'Въвдете само цифри!'
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid item container direction={'row'}>
                                <TextField
                                    label="Антифриз"
                                    variant="outlined"
                                    {...register("antifreeze", {
                                        required: 'Въведете описание на извършената дейност!',
                                    })}
                                />
                                <TextField
                                    label="Количество:"
                                    variant="outlined"
                                    {...register("antifreezeVol", {
                                        required: 'Въведете количество!',
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: 'Въвдете само цифри!'
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid item >
                                <TextField
                                    id="service-decription"
                                    label="Гуми:"
                                    {...register("tyres", {
                                        required: 'Въведете описание на извършената дейност!',
                                    })}
                                />
                                <TextField
                                    label="Километраж:"
                                    variant="outlined"
                                    {...register("mileage", {
                                        required: 'Въведете показанията на километража!',
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: 'Въвдете само цифри!'
                                        }
                                    })}
                                />
                            </Grid>
                            <Grid item >
                                <TextField
                                    label="Моточасовник:"
                                    variant="outlined"
                                    {...register("engineHoursMeter", {
                                        required: 'Въведете показанията на километража!',
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: 'Въвдете само цифри!'
                                        }
                                    })}
                                />
                                <TextField
                                    id="service-decription"
                                    label="Описание:"
                                    multiline
                                    rows={4}
                                    {...register("description", {
                                        required: 'Въведете описание на извършената дейност!',
                                    })}
                                />
                            </Grid>
                            <Grid item >
                                <h4>Сменени филтри:</h4>
                                <Divider />
                                Въздушен филтър
                                <Switch
                                    // checked={airFilterChanged}
                                    {...register("airFilter", {
                                        required: 'Въведете описание на извършената дейност!',
                                    })}
                                    onChange={handleAirSwitchChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <br />
                                Горивен филтър
                                <Switch
                                    checked={fuelFilterChanged}
                                    onChange={handleFuelSwitchChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <br />
                                Маслен филтър
                                <Switch
                                    checked={oilFilterChanged}
                                    onChange={handleOilrSwitchChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
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
