import React from 'react';
import { Row } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import SingleTruckCard from './SingleTruckCard';
import AddTruck from './AddTruck';


export default function TruckCardsDeck() {

    const { cards } = useOutletContext();
    const { addTruck } = useOutletContext();


    return (

        <div>
            <Row >
                {cards.map((card) => <SingleTruckCard key={card.id} card={card} />)}
            </Row>

            <AddTruck addTruck={addTruck} />
        </div>

    )
}
