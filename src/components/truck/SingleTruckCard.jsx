import React from "react";
import { Card, ListGroup, Col, Row, Button } from "react-bootstrap";
import Image from "../../assets/images/fireTruck.png";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import { useOutletContext } from 'react-router-dom';

import DeleteDialog from '../truck/DeleteDialog';

function SingleTruckCard(props) {
    const {
        id, structure, regNumber, brand, model, mileage, vinNumber, engineHoursMeter, insuranceNumber
    } = props.card;

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
                            <Button variant="info" size="sm">
                                <CreateOutlinedIcon /> Редак.
                            </Button>
                        </Col>
                        <Col>
                            <DeleteDialog id={id}
                                type={'truck'}
                                deleteTruck={deleteTruck}
                                deleteMessage={`данните за пожарен автомобил с рег. № ${props.card.regNumber} `} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card >

        </>

    );
}
export default SingleTruckCard;