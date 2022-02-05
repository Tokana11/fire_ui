import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Badge

} from 'react-bootstrap';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AirIcon from '@mui/icons-material/Air';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EmailIcon from '@mui/icons-material/Email';

export default function Navigation() {
  const notification = <>
    <NotificationsActiveIcon />
    <span>
      <Badge bg="danger">
        3
      </Badge>
    </span>
  </>
  const message = <>
    < EmailIcon />
    <span>
      <Badge bg="danger">
        1
      </Badge>
    </span>
  </>

  return (
    <div>
      <Navbar className="md" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <LocalFireDepartmentIcon /> ПБЗН
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/trucks">
                <LocalShippingOutlinedIcon /> Автомобили
              </Nav.Link>
              <Nav.Link href="/breathing-apparatus">
                <AirIcon /> ВДА
              </Nav.Link>
              <Nav.Link href="/equipment">
                <SecurityIcon /> ПТВ
              </Nav.Link>
              <Nav.Link href="/employees">
                <PeopleOutlineIcon /> Служители
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title={message} id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Message 1</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={notification} id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Notification 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Notification 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Notification 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/profile">
                <AccountCircleIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  )
}
