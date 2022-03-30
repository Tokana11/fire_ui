import * as React from 'react';
import { useForm } from 'react-hook-form';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function AddTruck({ addTruck }) {

  const [ open, setOpen ] = React.useState(false);
  const {
    register,
    handleSubmit,
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
      tehchInspectionDate: ''
    }
  });

  function addVehicle(data) {
    let id = 100;
    const regNumber = data.regNumber;
    const structure = data.structure
    const vinNumber = data.vinNumber
    const insuranceNumber = data.insuranceNumber
    const brand = data.brand
    const model = data.model
    const mileage = data.mileage
    const engineHoursMeter = data.engineHoursMeter
    const tehchInspectionDate = data.tehchInspectionDate
    addTruck({
      id,
      brand,
      model,
      regNumber,
      structure,
      vinNumber,
      insuranceNumber,
      mileage,
      engineHoursMeter,
      tehchInspectionDate
    })
    handleClose();
    id++;
  }

  const patternValidation = val => {
    return /\s/g.test(val);
  };

  function fieldValidation(data) {
    for (let i = 0; i < data.length; i++) {
      if (patternValidation(data[ i ].value)) {
        return true
      } else
        return false
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
            onSubmit={handleSubmit((data) => {
              if (fieldValidation(data)) {
                addVehicle(data);
                reset()
              }
              else
                alert('Въвeли сте интервал!')
            })}
          >

            <TextField
              id="outlined-basic"
              label="Марка"
              variant="outlined"
              {...register("brand", {
                required: 'Въвдете марка!', minLength: {
                  value: 3,
                  message: 'Въвдете минимум три символа!'
                }
              })}
              helperText={errors.brand?.message}
            />
            <TextField
              id="outlined-basic"
              label="Модел"
              variant="outlined"
              {...register("model", { required: 'Въвдете модел!', })}
              helperText={errors.model?.message}
            />
            <TextField
              id="outlined-basic"
              label="Рег. №"
              variant="outlined"
              {...register("regNumber", { required: 'Въвдете Рег. №!', })}
              helperText={errors.model?.message}
            />
            <TextField
              id="outlined-basic"
              label="Структура"
              variant="outlined"
              {...register("structure", { required: 'Въвдете структура!', })}
              helperText={errors.model?.message}
            />
            <TextField
              id="outlined-basic"
              label="VIN №"
              variant="outlined"
              {...register("vinNumber", { required: 'Въвдете VIN №!', })}
              helperText={errors.model?.message}
            />
            <TextField
              id="outlined-basic"
              label="Застраховка №"
              variant="outlined"
              {...register("insuranceNumber", { required: 'Въвдете № на застаховка!', })}
              helperText={errors.model?.message}
            />
            <TextField
              id="outlined-basic"
              label="Километраж"
              variant="outlined"
              {...register("mileage", { required: 'Въведете начален киломтраж!' })}
              helperText={errors.mileage?.message}
            />
            <TextField
              id="outlined-basic"
              label="Моточасовник"
              variant="outlined"
              {...register("engineHoursMeter", { required: 'Въведете моточасовник!' })}
              helperText={errors.mileage?.message}
            />
            <TextField
              id="outlined-basic"
              label="Тех. преглед"
              variant="outlined"
              {...register("tehchInspectionDate", { required: 'Въведете дата на тех. преглед!' })}
              helperText={errors.mileage?.message}
            />

            <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
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
    </div>
  );
}

