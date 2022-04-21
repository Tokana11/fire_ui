import React from "react";
import { Card, ListGroup, Col, Row, Button } from "react-bootstrap";
import EditTruck from '../truck/EditTruck';
import Image from "../../assets/images/fireTruck.png";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import { useOutletContext } from 'react-router-dom';

import DeleteDialog from '../truck/DeleteDialog';

function SingleTruckCard(props) {
    const {
        id, structure, regNumber, brand, model, mileage, vinNumber, engineHoursMeter, insuranceNumber, tehchInspectionDate
    } = props.card;

    const { editTruck } = useOutletContext();
    const { deleteTruck } = useOutletContext();


    return (
        <>

            <Card>
                <Card.Img variant="top" src={Image} />
                <Card.Body>
                    <Card.Title>{regNumber}</Card.Title>
                    <Card.Text>

                        <b>ID:</b> {id}
                        <br />

                        <b>Структура:</b> {structure}
                        <br />
                        <b>Марка:</b> {brand}
                        <br />
                        <b>Модел:</b> {model}
                        <br />
                        <b>Километраж:</b> {mileage}
                        <br />
                        <b>Моточасвоник:</b> {engineHoursMeter}
                        <br />
                        <b>Вин №:</b> {vinNumber}
                        <br />
                        <b>Застраховка:</b> {insuranceNumber}
                        <br />
                        <b>Тех. преглед:</b> {tehchInspectionDate.toString()}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <Button variant="outline-action-secondary" size={"sm"}>
                        ТТД <HelpOutlineOutlinedIcon />
                        {/*TODO possible to use accordion*/}
                    </Button>
                </ListGroup>
                <Card.Body>
                    <Row>
                        <Col>
                            <EditTruck
                                id={props.id}
                                card={props.card}
                                editTruck={editTruck}
                            />
                        </Col>
                        <Col>
                            <DeleteDialog id={id}
                                type={'truck'}
                                deleteTruck={deleteTruck}
                                deleteMessage={`данните за пожарен автомобил с рег. № ${props.card.regNumber} `}
                                buttonLabel={'Изтрий'}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card >

        </>

    );
}
export default SingleTruckCard;