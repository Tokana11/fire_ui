import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom';
import FuelingTable from './FuelingTable';
import RepairTable from './RepairTable';
import ServiceRecord from './ServiceRecords';
import TruckNav from './TruckNav';
import TrucksPage from '../../pages/TrucksPage';
import TruckCardsDeck from './TruckCardsDeck';

export default function TruckRouter() {
    return (
        <Container>
            <Container className='mb-5'>
                <TruckNav />
            </Container>
            <Routes>
                <Route path="/" element={<TrucksPage />}>
                    <Route path="/" element={<TruckCardsDeck />} />
                    <Route path="service" element={<ServiceRecord />} />
                    <Route path="repairs" element={<RepairTable />} />
                    <Route path="fueling" element={<FuelingTable />} />
                </Route>
            </Routes>
        </Container>
    )
}
