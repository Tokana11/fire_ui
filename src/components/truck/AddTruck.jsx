import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import bgLocale from 'date-fns/locale/bg';
import Stack from '@mui/material/Stack';

const localeMap = {
  bg: bgLocale
}
export default function AddTruck({ addTruck }) {

  const [ open, setOpen ] = React.useState(false);
  const [ locale ] = React.useState('bg');
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      brand: '',
      model: '',
      regNumber: '',
      structure: '',
      vinNumber: '',
      insuranceNumber: '',
      mileage: '',
      engineHoursMeter: '',
      tehchInspectionDate: new Date()
    }
  });

  function addVehicle(data) {
    addTruck(data);
    handleClose();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const handleChange = (date, field) => {
    field.onChange(date);
  };
  return (
    <div>
      <Button
        size="small"
        sx={{ position: 'fixed', bottom: 16, right: 16, backgroundColor: "#1a535c" }}
        variant="contained"
        onClick={handleClickOpen}>
        <AddCircleOutlineOutlinedIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Добавяне на ПА:</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
            onSubmit={handleSubmit((data) => {
              let formatedDate = new Date(data.tehchInspectionDate).toLocaleDateString(locale)
              data.tehchInspectionDate = formatedDate;
              addVehicle(data);
              reset();
            })}
          >
            <Stack direction={'row'}>
              <TextField
                id="outlined-basic"
                label="Марка"
                variant="outlined"
                {...register("brand", {
                  required: 'Въвдете марка!',
                  minLength: {
                    value: 3,
                    message: 'Въвдете минимум три символа!'
                  },
                  pattern: {
                    value: /^[^-\s][a-zA-Z_.а-яА-Я0-9_\s-]+$/,
                    message: 'Въведените данни не могат нито да започват, нито да съдържат само интервал!'
                  }
                })}
                helperText={errors.brand?.message}
              />
              <TextField
                id="outlined-basic"
                label="Модел"
                variant="outlined"
                {...register("model", {
                  required: 'Въвдете модел!',
                  minLength: {
                    value: 2,
                    message: 'Въвдете минимум два символа!'
                  },
                  pattern: {
                    value: /^[^-\s][a-zA-Z_.а-яА-Я0-9_\s-]+$/,
                    message: 'Въведените данни не могат нито да започват, нито да съдържат само интервал!'
                  }
                })}
                helperText={errors.model?.message}
              />
            </Stack>
            <Stack direction={'row'}>
              <TextField
                id="outlined-basic"
                label="Рег. №"
                variant="outlined"
                {...register("regNumber", {
                  required: 'Въвдете Рег. №!',
                  minLength: {
                    value: 8,
                    message: 'Въвдете минимум осем символа!'
                  },
                  pattern: {
                    value: /^[^-\s][a-zA-Z_.а-яА-Я0-9_\s-]+$/,
                    message: 'Въведените данни не могат нито да започват, нито да съдържат само интервал!'
                  }
                })}
                helperText={errors.regNumber?.message}
              />
              <TextField
                id="outlined-basic"
                label="Структура"
                variant="outlined"
                {...register("structure", {
                  required: 'Въвдете структура!',
                  minLength: {
                    value: 2,
                    message: 'Въвдете минимум два символа!'
                  },
                  pattern: {
                    value: /^[^-\s][a-zA-Z_.а-яА-Я0-9_\s-]+$/,
                    message: 'Въведените данни не могат нито да започват, нито да съдържат само интервал!'
                  }
                })}
                helperText={errors.structure?.message}
              />
            </Stack>
            <Stack direction={'row'}>
              <TextField
                id="outlined-basic"
                label="VIN №"
                variant="outlined"
                {...register("vinNumber", {
                  required: 'Въвдете VIN №!',
                  minLength: {
                    value: 2,
                    message: 'Въвдете минимум два символа!'
                  },
                  pattern: {
                    value: /^[^-\s][a-zA-Z_.а-яА-Я0-9_\s-]+$/,
                    message: 'Въведените данни не могат нито да започват, нито да съдържат само интервал!'
                  }
                })}
                helperText={errors.vinNumber?.message}
              />
              <TextField
                id="outlined-basic"
                label="Застраховка №"
                variant="outlined"
                {...register("insuranceNumber", {
                  required: 'Въвдете № на застаховка!',
                  minLength: {
                    value: 2,
                    message: 'Въвдете минимум два символа!'
                  },
                  pattern: {
                    value: /^[^-\s][a-zA-Z_.а-яА-Я0-9_\s-]+$/,
                    message: 'Въведените данни не могат нито да започват, нито да съдържат само интервал!'
                  }
                })}
                helperText={errors.insuranceNumber?.message}
              />
            </Stack>
            <Stack direction={'row'}>
              <TextField
                id="outlined-basic"
                label="Километраж"
                variant="outlined"
                {...register("mileage", {
                  required: 'Въведете начален киломтраж!',
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: 'Въвдете само цифри!'
                  }
                })}
                helperText={errors.mileage?.message}
              />
              <TextField
                id="outlined-basic"
                label="Моточасовник"
                variant="outlined"
                {...register("engineHoursMeter", {
                  required: 'Въведете моточасовник!',
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: 'Въвдете само цифри!'
                  }
                })}
                helperText={errors.engineHoursMeter?.message}
              />
            </Stack>
            <Stack direction={'row'}>

              <Controller
                control={control}
                name={'tehchInspectionDate'}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[ locale ]}>
                    <DatePicker
                      label={'Дата тех. преглед'}
                      value={field.value}
                      onChange={(date) => handleChange(date.toDateString(), field)}
                      renderInput={(params) => (
                        <TextField  {...params} />
                      )}
                    />
                  </LocalizationProvider>
                )}
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
      </Dialog>
    </div >
  );
}

