import React from 'react';
import { Row } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import SingleTruckCard from './SingleTruckCard';

export default function TruckCardsDeck() {

    const { cards } = useOutletContext();

    return (

        <div>
            <Row xs={1} md={2} className='g-4'>
                {cards.map((card) => <SingleTruckCard key={card.id} card={card} />)}
            </Row>
        </div>

    )
}
