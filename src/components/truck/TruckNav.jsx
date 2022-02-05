import React from 'react';
import { Nav } from "react-bootstrap";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import BuildIcon from '@mui/icons-material/Build';
import CarRepairOutlinedIcon from '@mui/icons-material/CarRepairOutlined';

import { useLocation } from "react-router-dom";


function TruckNav() {

    const { pathname } = useLocation();

    return (
        <Nav justify variant="tabs">
            <Nav.Link style={{ color: "gray" }} href="/trucks" active={pathname === '/trucks'}>
                <LocalShippingOutlinedIcon /> Автомобили
            </Nav.Link>
            <Nav.Link style={{ color: "gray" }} href="/trucks/service" active={pathname === '/trucks/service'}>
                <CarRepairOutlinedIcon /> Обслужвания
            </Nav.Link>
            <Nav.Link style={{ color: "gray" }} href="/trucks/repairs" active={pathname === '/trucks/repairs'}>
                <BuildIcon /> Ремонти
            </Nav.Link >
            <Nav.Link style={{ color: "gray" }} href="/trucks/fueling" active={pathname === '/trucks/fueling'}>
                < LocalGasStationIcon /> Зарядки
            </Nav.Link>
        </Nav >
    )
}

export default TruckNav;


