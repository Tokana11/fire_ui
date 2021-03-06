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

export default function EditFuelingRecord({ fueling, editFuelingRecord }) {

    const { cards } = useOutletContext();

    const [ locale ] = React.useState('bg');

    const [ open, setOpen ] = React.useState(false);

    const regNumOptions = cards.map(item => item.regNumber);

    const [ structure, setStructure ] = React.useState(fueling.structure);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            id: fueling.id,
            regNumber: fueling.regNumber,
            structure: fueling.setStructure,
            date: fueling.date,
            quantity: fueling.quantity,
            price: fueling.price,
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
        data.quantity = Number.parseFloat(data.quantity)
        data.price = Number.parseFloat(data.price)
        editFuelingRecord(data)
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
                <DialogTitle>???????????????? ???? ??????????:</DialogTitle>
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
                                defaultValue={fueling.regNumber}
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
                        </Stack>
                        <Stack direction={'row'}>
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
                        </Stack>
                        <Stack direction={'row'}>
                            <TextField
                                id="outlined-basic"
                                label="????????????????????"
                                variant="outlined"
                                {...register("quantity", {
                                    required: '???????????????? ????????????????????!',
                                    pattern: {
                                        value: /^\d+(\.\d{1,2})?$/,
                                        message: '?????????????? ???????? ??????????!'
                                    }
                                })}
                                helperText={errors.quantity?.message}
                            />
                        </Stack>
                        <Stack direction={'row'}>
                            <TextField
                                id="outlined-basic"
                                label="????????"
                                variant="outlined"
                                {...register("price", {
                                    required: '???????????????? ????????!',
                                    pattern: {
                                        value: /^\d+(\.\d{1,2})?$/,
                                        message: '?????????????? ???????? ??????????!'
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
                        </div>
                    </Box>
                </DialogContent>
            </Dialog >
        </div >
    )
}
