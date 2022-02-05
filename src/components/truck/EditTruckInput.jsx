import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

function EditTruckInput({ onHide, card, editVehicle }) {

    const {
        regNumber, brand, model, mileage, vinNumber, engineHoursMeter, insuranceNumber
    } = card;

    const [regNum, setRegNum] = useState(regNumber);
    const [vinNum, setVinNum] = useState(vinNumber);
    const [insuranceNum, setInsuranceNum] = useState(insuranceNumber);
    const [brand1, setBrand] = useState(brand);
    const [model1, setModel] = useState(model);
    const [mileage1, setMileage] = useState(mileage);
    const [engineHoursMeter1, setEngineHoursMeter] = useState(engineHoursMeter);


    function editTruck() {
        editVehicle({ regNum, vinNum, insuranceNum, brand1, model1, mileage1, engineHoursMeter1 })
        onHide();
    }

    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Рег. номер:</Form.Label>
                    <Form.Control type="text"
                        defaultValue={regNum}
                        onChange={(e) => setRegNum(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>VIN номер:</Form.Label>
                    <Form.Control type="text"
                        defaultValue={vinNum}
                        onChange={e => setVinNum(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Застраховка №:</Form.Label>
                    <Form.Control type="text"
                        defaultValue={insuranceNum}
                        onChange={(e) => (setInsuranceNum(e.target.value))}
                    />
                </Form.Group>
            </Row>
            <br />
            <Row>
                <Form.Group as={Col}>
                    <Form.Label>Марка:</Form.Label>
                    <Form.Control type="text"
                        defaultValue={brand1}
                        onChange={e => setBrand(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Модел:</Form.Label>
                    <Form.Control type="text"
                        defaultValue={model1}
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
                        defaultValue={mileage1}
                        onChange={e => setMileage(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Моточасовник:</Form.Label>
                    <Form.Control type="text"
                        defaultValue={engineHoursMeter1}
                        onChange={e => setEngineHoursMeter(e.target.value)}
                    />
                </Form.Group>
            </Row>
            <hr />
            <Row>
                <Form.Group as={Col}>

                </Form.Group>
                <Form.Group as={Col} style={{ textAlign: "right" }}>
                    <Button
                        variant="outline-danger"
                        onClick={onHide}
                    >
                        Отказ 
                    </Button>
                    {" "}
                    <Button variant="outline-success"
                        onClick={editTruck}
                    >
                        Запиши 
                    </Button>
                </Form.Group>
            </Row>
        </Form>
    );
}

export default EditTruckInput;