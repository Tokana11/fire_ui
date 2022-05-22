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
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

const localeMap = {
    bg: bgLocale
}

export default function EditServiceRecord({ service, editServiceRecord }) {

    const { cards } = useOutletContext();

    const [ locale ] = React.useState('bg');

    const [ open, setOpen ] = React.useState(false);

    const regNumOptions = cards.map(item => item.regNumber);

    const [ structure, setStructure ] = React.useState('');

    const [ airFilterChanged, setAirFilterChanged ] = React.useState(service.filters.airFilterChanged);

    const [ oilFilterChanged, setOilFilterChanged ] = React.useState(service.filters.oilFilterChanged);

    const [ fuelFilterChanged, setFuelFilterChanged ] = React.useState(service.filters.fuelFilterChanged);

    const [ frontTiresChanged, setFrontTiresChanged ] = React.useState(service.tires.frontTiresChanged);

    const [ rearTiresChanged, setRearTiresChanged ] = React.useState(service.tires.rearTiresChanged);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            id: service.id,
            regNumber: service.regNumber,
            structure: service.structure,
            description: service.description,
            engineOil: service.engineOil,
            engineOilVol: service.engineOilVol,
            hydolicOil: service.hydolicOil,
            hydolicOilVol: service.hydolicOilVol,
            differentialOil: service.differentialOil,
            differentialOilVol: service.differentialOilVol,
            transmissinOil: service.transmissinOil,
            transmissinOilVol: service.transmissinOilVol,
            pumpOil: service.pumpOil,
            pumpOilVol: service.pumpOilVol,
            brakeFluid: service.brakeFluid,
            brakeFluidVol: service.brakeFluidVol,
            antifreeze: service.antifreeze,
            antifreezeVol: service.antifreezeVol,
            tires: {
                frontTires: service.tires.frontTires,
                frontTiresChanged: service.tires.frontTiresChanged,
                frontTiresQuantity: service.tires.frontTiresQuantity,
                rearTires: service.tires.rearTires,
                rearTiresChanged: service.tires.rearTiresChanged,
                rearTiresQuantity: service.tires.rearTiresQuantity
            },
            mileage: service.mileage,
            engineHoursMeter: service.engineHoursMeter,
            date: service.date,
            filters: {
                airFilter: service.filters.airFilter,
                airFilterChanged: service.filters.airFilterChanged,
                airFilterQuantity: service.filters.airFilterQuantity,
                oilFilter: service.filters.oilFilter,
                oilFilterChanged: service.filters.oilFilterChanged,
                oilFilterQuantity: service.filters.oilFilterQuantity,
                fuelFilter: service.filters.fuelFilter,
                fuelFilterChanged: service.filters.fuelFilterChanged,
                fuelFilterQuantity: service.filters.fuelFilterQuantity
            },
            message: service.message
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

    const handleOilSwitchChange = (event) => {
        setOilFilterChanged(event.target.checked);
    };

    const handleFuelSwitchChange = (event) => {
        setFuelFilterChanged(event.target.checked);
    };

    const handleFrontTiresChanged = (event) => {
        setFrontTiresChanged(event.target.checked)
    }

    const handleRearTiresChanged = (event) => {
        setRearTiresChanged(event.target.checked)
    }

    const editRecord = (data) => {
        data.structure = structure;
        data.engineOilVol = Number.parseFloat(data.engineOilVol);
        data.hydolicOilVol = Number.parseFloat(data.hydolicOilVol);
        data.differentialOilVol = Number.parseFloat(data.differentialOilVol);
        data.transmissinOilVol = Number.parseFloat(data.transmissinOilVol);
        data.pumpOilVol = Number.parseFloat(data.pumpOilVol);
        data.brakeFluidVol = Number.parseFloat(data.brakeFluidVol);
        data.antifreezeVol = Number.parseFloat(data.antifreezeVol);
        data.tires.frontTiresChanged = frontTiresChanged;
        data.tires.rearTiresChanged = rearTiresChanged;
        data.filters.airFilterChanged = airFilterChanged;
        data.filters.oilFilterChanged = oilFilterChanged;
        data.filters.fuelFilterChanged = fuelFilterChanged;
        editServiceRecord(data)
        handleClose();
    }

    return (
        <div>
            <Button
                style={{
                    backgroundColor: "#1a535c",
                }}
                size="small"
                variant="contained"
                onClick={handleClickOpen}>
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
                                        defaultValue={service.regNumber}
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
                                                    defaultValue={field.date}
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
                                <Grid item container direction={'row'} >
                                    <TextField
                                        fullWidth
                                        label="Вид на дейността:"
                                        {...register("description", {
                                            required: 'Въведете описание на извършената дейност!',
                                        })}
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
                                            fullWidth
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
                            </Grid>
                            <br />
                            <h5>Експлоатацинни течности:</h5>
                            <Divider />
                            <br />
                            <Grid item container direction={'row'} spacing={1} >
                                <Grid item xs={8}>
                                    <TextField
                                        label="Двигателно масло"
                                        variant="outlined"
                                        fullWidth
                                        {...register("engineOil")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="Количество:"
                                        variant="outlined"
                                        {...register("engineOilVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: 'Въвдете само цифри!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={8}>
                                    <TextField
                                        label="Хидравлично масло"
                                        variant="outlined"
                                        fullWidth
                                        {...register("hydolicOil")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="Количество:"
                                        variant="outlined"
                                        {...register("hydolicOilVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: 'Въвдете само цифри!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={8}>
                                    <TextField
                                        label="Диференциално масло"
                                        variant="outlined"
                                        fullWidth
                                        {...register("differentialOil")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="Количество:"
                                        variant="outlined"
                                        {...register("differentialOilVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: 'Въвдете само цифри!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={8}>
                                    <TextField
                                        label="Трансмисионно масло"
                                        variant="outlined"
                                        fullWidth
                                        {...register("transmissinOil")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="Количество:"
                                        variant="outlined"
                                        {...register("transmissinOilVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: 'Въвдете само цифри!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={8}>
                                    <TextField
                                        label="Масло помпа"
                                        variant="outlined"
                                        fullWidth
                                        {...register("pumpOil")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="Количество:"
                                        variant="outlined"
                                        {...register("pumpOilVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: 'Въвдете само цифри!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={8}>
                                    <TextField
                                        label="Спирачна течност"
                                        variant="outlined"
                                        fullWidth
                                        {...register("brakeFluid")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="Количество:"
                                        variant="outlined"
                                        {...register("brakeFluidVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: 'Въвдете само цифри!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={8}>
                                    <TextField
                                        label="Антифриз"
                                        variant="outlined"
                                        fullWidth
                                        {...register("antifreeze")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="Количество:"
                                        variant="outlined"
                                        {...register("antifreezeVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: 'Въвдете само цифри!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <h5>Сменени филтри:</h5>
                            <Divider />
                            <br />
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Въздушен ф-р"
                                        variant="outlined"
                                        fullWidth
                                        {...register("filters.airFilter")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="Количество:"
                                        variant="outlined"
                                        type={'number'}
                                        {...register("filters.airFilterQuantity")}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <h6>Смянa:</h6>
                                    <Switch
                                        checked={airFilterChanged}
                                        onChange={handleAirSwitchChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Горивен ф-р"
                                        variant="outlined"
                                        fullWidth
                                        {...register("filters.fuelFilter")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="Количество:"
                                        variant="outlined"
                                        type={'number'}
                                        {...register("filters.fuelFilterQuantity")}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <br />
                                    <Switch
                                        checked={fuelFilterChanged}
                                        onChange={handleFuelSwitchChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Маслен ф-р"
                                        variant="outlined"
                                        fullWidth
                                        {...register("filters.oilFilter")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="Количество:"
                                        variant="outlined"
                                        type={'number'}
                                        {...register("filters.oilFilterQuantity")}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <br />
                                    <Switch
                                        checked={oilFilterChanged}
                                        onChange={handleOilSwitchChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <h5>Други:</h5>
                            <Divider />
                            <br />
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={4}>
                                    <TextField
                                        label="Предни гуми"
                                        variant="outlined"
                                        fullWidth
                                        {...register("tires.frontTires")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="Количество:"
                                        variant="outlined"
                                        type={'number'}
                                        {...register("tires.frontTiresQuantity")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <h6>Смяна:</h6>
                                    <Switch
                                        checked={frontTiresChanged}
                                        onChange={handleFrontTiresChanged}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </Grid>
                                <Grid item container direction={'row'} spacing={1}>
                                    <Grid item xs={4}>
                                        <TextField
                                            label="Задни гуми"
                                            variant="outlined"
                                            fullWidth
                                            {...register("tires.rearTires")}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            label="Количество:"
                                            variant="outlined"
                                            type={'number'}
                                            {...register("tires.rearTiresQuantity")}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <h6>Смяна:</h6>
                                        <Switch
                                            checked={rearTiresChanged}
                                            onChange={handleRearTiresChanged}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
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
