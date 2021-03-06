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

    const [ frontTiresChanged, setFrontTiresChanged ] = React.useState(false);

    const [ rearTiresChanged, setRearTiresChanged ] = React.useState(false);

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
            tires: {
                frontTires: '',
                frontTiresChanged: false,
                frontTiresQuantity: '',
                rearTires: '',
                rearTiresChanged: false,
                rearTiresQuantity: '',
            },
            mileage: '',
            engineHoursMeter:'',
            date: new Date(),
            filters: {
                airFilter: '',
                airFilterChanged: false,
                airFilterQuantity: '',
                oilFilter: '',
                oilFilterChanged: false,
                oilFilterQuantity: '',
                fuelFilter: '',
                fuelFilterChanged: false,
                fuelFilterQuantity: ''
            },
            message: ''
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

    const addRecord = (data) => {
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
                <DialogTitle>???????????????? ???? ??????????:</DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                        onSubmit={handleSubmit((data) => {
                            let formatedDate = new Date(data.date).toLocaleDateString(locale)
                            data.date = formatedDate;
                            addRecord(data);
                            reset();
                        })}
                    >
                        <Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={6}>
                                    <Autocomplete
                                        disablePortal
                                        options={regNumOptions}
                                        onChange={(_event, regNumber) => {
                                            getStructuteByTruckRegNum(regNumber)
                                        }}
                                        renderInput={(params) => <TextField
                                            {...params}
                                            {...register("regNumber", {
                                                required: '???????????????? ??????????????????!'
                                            })}
                                            label='??????????????????'
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
                                                    label={'????????'}
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
                                        label="?????? ???? ??????????????????:"
                                        {...register("description", {
                                            required: '???????????????? ???????????????? ???? ?????????????????????? ??????????????!',
                                        })}
                                    />
                                </Grid>
                                <Grid item container direction={'row'} spacing={1}>
                                    <Grid item xs={6}>
                                        <TextField
                                            label="????????????????????:"
                                            variant="outlined"
                                            fullWidth
                                            {...register("mileage", {
                                                required: '???????????????? ?????????????????????? ???? ??????????????????????!',
                                                pattern: {
                                                    value: /^\d+(\.\d{1,2})?$/,
                                                    message: '?????????????? ???????? ??????????!'
                                                }
                                            })}
                                        />
                                    </Grid>
                                    < Grid item xs={6}>
                                        <TextField
                                            label="????????????????????????:"
                                            variant="outlined"
                                            fullWidth
                                            {...register("engineHoursMeter", {
                                                required: '???????????????? ?????????????????????? ???? ??????????????????????????!',
                                                pattern: {
                                                    value: /^\d+(\.\d{1,2})?$/,
                                                    message: '?????????????? ???????? ??????????!'
                                                }
                                            })}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <br />
                            <h5>???????????????????????????? ????????????????:</h5>
                            <Divider />
                            <br />
                            <Grid item container direction={'row'} spacing={1} >
                                <Grid item xs={8}>
                                    <TextField
                                        label="???????????????????? ??????????"
                                        variant="outlined"
                                        fullWidth
                                        {...register("engineOil")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="????????????????????:"
                                        variant="outlined"
                                        {...register("engineOilVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: '?????????????? ???????? ??????????!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={8}>
                                    <TextField
                                        label="?????????????????????? ??????????"
                                        variant="outlined"
                                        fullWidth
                                        {...register("hydolicOil")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="????????????????????:"
                                        variant="outlined"
                                        {...register("hydolicOilVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: '?????????????? ???????? ??????????!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={8}>
                                    <TextField
                                        label="?????????????????????????? ??????????"
                                        variant="outlined"
                                        fullWidth
                                        {...register("differentialOil")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="????????????????????:"
                                        variant="outlined"
                                        {...register("differentialOilVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: '?????????????? ???????? ??????????!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={8}>
                                    <TextField
                                        label="?????????????????????????? ??????????"
                                        variant="outlined"
                                        fullWidth
                                        {...register("transmissinOil")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="????????????????????:"
                                        variant="outlined"
                                        {...register("transmissinOilVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: '?????????????? ???????? ??????????!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={8}>
                                    <TextField
                                        label="?????????? ??????????"
                                        variant="outlined"
                                        fullWidth
                                        {...register("pumpOil")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="????????????????????:"
                                        variant="outlined"
                                        {...register("pumpOilVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: '?????????????? ???????? ??????????!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={8}>
                                    <TextField
                                        label="???????????????? ??????????????"
                                        variant="outlined"
                                        fullWidth
                                        {...register("brakeFluid")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="????????????????????:"
                                        variant="outlined"
                                        {...register("brakeFluidVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: '?????????????? ???????? ??????????!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={8}>
                                    <TextField
                                        label="????????????????"
                                        variant="outlined"
                                        fullWidth
                                        {...register("antifreeze")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="????????????????????:"
                                        variant="outlined"
                                        {...register("antifreezeVol", {
                                            pattern: {
                                                value: /\d+(\.\d{1,2})?$/,
                                                message: '?????????????? ???????? ??????????!'
                                            }
                                        })}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <h5>?????????????? ????????????:</h5>
                            <Divider />
                            <br />
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="???????????????? ??-??"
                                        variant="outlined"
                                        fullWidth
                                        {...register("filters.airFilter")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="????????????????????:"
                                        variant="outlined"
                                        type={'number'}
                                        {...register("filters.airFilterQuantity")}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <h6>????????a:</h6>
                                    <Switch
                                        onChange={handleAirSwitchChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="?????????????? ??-??"
                                        variant="outlined"
                                        fullWidth
                                        {...register("filters.fuelFilter")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="????????????????????:"
                                        variant="outlined"
                                        type={'number'}
                                        {...register("filters.fuelFilterQuantity")}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <br />
                                    <Switch
                                        onChange={handleFuelSwitchChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="???????????? ??-??"
                                        variant="outlined"
                                        fullWidth
                                        {...register("filters.oilFilter")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="????????????????????:"
                                        variant="outlined"
                                        type={'number'}
                                        {...register("filters.oilFilterQuantity")}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <br />
                                    <Switch
                                        onChange={handleOilSwitchChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <h5>??????????:</h5>
                            <Divider />
                            <br />
                            <Grid item container direction={'row'} spacing={1}>
                                <Grid item xs={4}>
                                    <TextField
                                        label="???????????? ????????"
                                        variant="outlined"
                                        fullWidth
                                        {...register("tires.frontTires")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="????????????????????:"
                                        variant="outlined"
                                        type={'number'}
                                        {...register("tires.frontTiresQuantity")}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <h6>??????????:</h6>
                                    <Switch
                                        onChange={handleFrontTiresChanged}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </Grid>
                                <Grid item container direction={'row'} spacing={1}>
                                    <Grid item xs={4}>
                                        <TextField
                                            label="?????????? ????????"
                                            variant="outlined"
                                            fullWidth
                                            {...register("tires.rearTires")}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            label="????????????????????:"
                                            variant="outlined"
                                            type={'number'}
                                            {...register("tires.rearTiresQuantity")}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <h6>??????????:</h6>
                                        <Switch
                                            onChange={handleRearTiresChanged}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item container direction={'row'} >
                                    <TextField
                                        fullWidth
                                        label="??????????:"
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
                                    ??????????
                                </Button>
                                {' '}
                                <Button
                                    variant='contained'
                                    color='success'
                                    type='submit'
                                >
                                    ????????????
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
            </Dialog >
        </div >
    )
}
