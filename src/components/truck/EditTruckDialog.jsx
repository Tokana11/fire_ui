import * as React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from "react-bootstrap";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



export default function ResponsiveDialog({ card, editTruck }) {
    const id = card.id;
    const [ regNumber, setRegNum ] = useState(card.regNumber);
    const [ structure, setStructure ] = useState(card.structure);
    const [ vinNumber, setVinNum ] = useState(card.vinNumber);
    const [ insuranceNumber, setInsuranceNum ] = useState(card.insuranceNumber);
    const [ brand, setBrand ] = useState(card.brand);
    const [ model, setModel ] = useState(card.model);
    const [ mileage, setMileage ] = useState(card.mileage);
    const [ engineHoursMeter, setEngineHoursMeter ] = useState(card.engineHoursMeter);
    const [ open, setOpen ] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    function editVehicle() {
        editTruck({id, regNumber, structure, vinNumber, insuranceNumber, brand, model, mileage, engineHoursMeter })
        handleClose();
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="info" size="sm" onClick={handleClickOpen}>
                <CreateOutlinedIcon /> Редак.
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    Редактирай:
                </DialogTitle>
                <DialogContent>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Рег. номер:</Form.Label>
                                <Form.Control type="text"
                                    defaultValue={regNumber}
                                    onChange={(e) => setRegNum(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Структура:</Form.Label>
                                <Form.Control type="text"
                                    defaultValue={structure}
                                    onChange={(e) => setStructure(e.target.value)}
                                />
                            </Form.Group>
                </Row>
                <Row>
                            <Form.Group as={Col}>
                                <Form.Label>VIN номер:</Form.Label>
                                <Form.Control type="text"
                                    defaultValue={vinNumber}
                                    onChange={e => setVinNum(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Застраховка №:</Form.Label>
                                <Form.Control type="text"
                                    defaultValue={insuranceNumber}
                                    onChange={(e) => (setInsuranceNum(e.target.value))}
                                />
                            </Form.Group>
                        </Row>
                        <br />
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Марка:</Form.Label>
                                <Form.Control type="text"
                                    defaultValue={brand}
                                    onChange={e => setBrand(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Модел:</Form.Label>
                                <Form.Control type="text"
                                    defaultValue={model}
                                    onChange={e => setModel(e.target.value)}
                                />
                            </Form.Group>
                        </Row>
                        <br />
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>
                                    Километраж:
                                </Form.Label>
                                <Form.Control type="text"
                                    defaultValue={mileage}
                                    onChange={e => setMileage(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Моточасовник:</Form.Label>
                                <Form.Control type="text"
                                    defaultValue={engineHoursMeter}
                                    onChange={e => setEngineHoursMeter(e.target.value)}
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outline-danger"
                        onClick={handleClose}
                    >
                        Отказ
                    </Button>
                    {" "}
                    <Button variant="outline-success"
                        onClick={editVehicle}
                    >
                        Запиши
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
