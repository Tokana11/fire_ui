// import * as React from 'react';
// import { useState } from 'react';
// import { Button, Col, Form, Row } from "react-bootstrap";
// import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';



// export default function EditTruckDialog({ card, editTruck }) {

//     const id = card.id;
//     const [ regNumber, setRegNum ] = useState(card.regNumber);
//     const [ structure, setStructure ] = useState(card.structure);
//     const [ vinNumber, setVinNum ] = useState(card.vinNumber);
//     const [ insuranceNumber, setInsuranceNum ] = useState(card.insuranceNumber);
//     const [ brand, setBrand ] = useState(card.brand);
//     const [ model, setModel ] = useState(card.model);
//     const [ mileage, setMileage ] = useState(card.mileage);
//     const [ engineHoursMeter, setEngineHoursMeter ] = useState(card.engineHoursMeter);
//     const [ tehchInspectionDate, setTehchInspectionDate ] = useState(card.tehchInspectionDate);
//     const [ open, setOpen ] = React.useState(false);
//     const theme = useTheme();
//     const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

//     function editVehicle() {
//         editTruck({ id, regNumber, structure, vinNumber, insuranceNumber, brand, model, mileage, engineHoursMeter, tehchInspectionDate})
//         handleClose();
//     }

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div>
//             <Button variant="info" size="sm" onClick={handleClickOpen}>
//                 <CreateOutlinedIcon /> Редак.
//             </Button>
//             <Dialog
//                 fullScreen={fullScreen}
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="responsive-dialog-title"
//             >
//                 <DialogTitle id="responsive-dialog-title">
//                     Редактирай:
//                 </DialogTitle>
//                 <DialogContent>
//                     <Form>
//                         <Row className="mb-3">
//                             <Form.Group as={Col}>
//                                 <Form.Label>Марка:</Form.Label>
//                                 <Form.Control type="text"
//                                     defaultValue={brand}
//                                     onChange={e => setBrand(e.target.value)}
//                                 />
//                             </Form.Group>
//                             <Form.Group as={Col}>
//                                 <Form.Label>Модел:</Form.Label>
//                                 <Form.Control type="text"
//                                     defaultValue={model}
//                                     onChange={e => setModel(e.target.value)}
//                                 />
//                             </Form.Group>
//                         </Row>
//                         <Row>
//                             <Form.Group as={Col}>
//                                 <Form.Label>Рег. номер:</Form.Label>
//                                 <Form.Control type="text"
//                                     defaultValue={regNumber}
//                                     onChange={(e) => setRegNum(e.target.value)}
//                                 />
//                             </Form.Group>
//                             <Form.Group as={Col}>
//                                 <Form.Label>Структура:</Form.Label>
//                                 <Form.Control type="text"
//                                     defaultValue={structure}
//                                     onChange={(e) => setStructure(e.target.value)}
//                                 />
//                             </Form.Group>
//                         </Row>
//                         <Row>
//                             <Form.Group as={Col}>
//                                 <Form.Label>VIN номер:</Form.Label>
//                                 <Form.Control type="text"
//                                     defaultValue={vinNumber}
//                                     onChange={e => setVinNum(e.target.value)}
//                                 />
//                             </Form.Group>
//                             <Form.Group as={Col}>
//                                 <Form.Label>Застраховка №:</Form.Label>
//                                 <Form.Control type="text"
//                                     defaultValue={insuranceNumber}
//                                     onChange={(e) => (setInsuranceNum(e.target.value))}
//                                 />
//                             </Form.Group>
//                         </Row>
//                         <Row className="mb-3">
//                             <Form.Group as={Col}>
//                                 <Form.Label>
//                                     Километраж:
//                                 </Form.Label>
//                                 <Form.Control type="text"
//                                     defaultValue={mileage}
//                                     onChange={e => setMileage(e.target.value)}
//                                 />
//                             </Form.Group>
//                             <Form.Group as={Col}>
//                                 <Form.Label>Моточасовник:</Form.Label>
//                                 <Form.Control type="text"
//                                     defaultValue={engineHoursMeter}
//                                     onChange={e => setEngineHoursMeter(e.target.value)}
//                                 />
//                             </Form.Group>
//                             <Form.Group as={Col}>
//                                 <Form.Label>Пеминал тех. прегед:</Form.Label>
//                                 <Form.Control type="text"
//                                     defaultValue={tehchInspectionDate}
//                                     onChange={e=> setTehchInspectionDate(e.target.value)}
//                                 />
//                             </Form.Group>
//                         </Row>
//                     </Form>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button
//                         variant="outline-danger"
//                         onClick={handleClose}
//                     >
//                         Отказ
//                     </Button>
//                     {" "}
//                     <Button variant="outline-success"
//                         onClick={editVehicle}
//                     >
//                         Запиши
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }

import * as React from 'react';
import { useForm } from 'react-hook-form';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function EditTruckDialog({ card, editTruck }) {

    const [ open, setOpen ] = React.useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            id: card.id,
            brand: card.brand,
            model: card.model,
            regNumber: card.regNumber,
            structure: card.structure,
            vinNumber: card.regNumber,
            insuranceNumber: card.insuranceNumber,
            mileage: card.mileage,
            engineHoursMeter: card.engineHoursMeter,
            tehchInspectionDate: card.tehchInspectionDate
        }
    });

    function editVehicle(data) {
        const id = data.id;
        const regNumber = data.regNumber;
        const structure = data.structure
        const vinNumber = data.vinNumber
        const insuranceNumber = data.insuranceNumber
        const brand = data.brand
        const model = data.model
        const mileage = data.mileage
        const engineHoursMeter = data.engineHoursMeter
        const tehchInspectionDate = data.tehchInspectionDate
        editTruck({
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
                style={{
                    backgroundColor: "#1a535c",
                }}
                size="small"
                variant="contained"
                onClick={handleClickOpen}>
                <CreateOutlinedIcon /> Редак.
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
                                editVehicle(data);
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

