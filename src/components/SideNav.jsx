import React from 'react';
import { Nav } from 'react-bootstrap';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AirIcon from '@mui/icons-material/Air';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';


export default function SideNav() {
    return (
        <>
            <Nav className="side-nav">
                <Nav.Link href="/trucks">
                    <LocalShippingOutlinedIcon /> Автомобили
                </Nav.Link>
                <Nav.Link eventKey="/breathing-apparatus">
                    <AirIcon /> ВДА
                </Nav.Link>
                <Nav.Link eventKey="/equipment">
                    <SecurityIcon /> ПТВ
                </Nav.Link>
                <Nav.Link eventKey="/employees">
                    <PeopleOutlineIcon /> Служители
                </Nav.Link>
            </Nav>
        </>
    )
}
