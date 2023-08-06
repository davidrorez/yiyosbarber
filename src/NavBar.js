import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './/yiyos-logo.svg';
import logo2 from './/fb-logo.svg';
import logo3 from './/insta-logo.svg';
import logo4 from './/whatsapp-logo.svg';

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" fixed="top" style={{ backgroundColor: '#efe3d0' }}>
        <div className="container-fluid">
          <Navbar.Brand href="/">
            <div style={{ width: '50px' }}>
              <img src={logo} alt="Logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavDropdown" />
          <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="navbar-nav">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="https://www.calengoo.com/booking/yiyo_s_barber_shop" target="_blank" rel="noopener noreferrer">
                Agendar Cita
              </Nav.Link>
              <Nav.Link as={Link} to="https://goo.gl/maps/3mGhVJyqqvgMi8259" target="_blank" rel="noopener noreferrer">
                Ubicación
              </Nav.Link>
            </Nav>
            <Nav className="navbar-nav ms-auto">
              <Nav.Link as={Link} to="https://www.facebook.com/barberiayiyosoficial" target="_blank"
                rel="noopener noreferrer"><img src={logo2} alt="Logo"></img></Nav.Link>
              <Nav.Link as={Link} to="https://www.instagram.com/barberia_yiyos/" target="_blank"
                rel="noopener noreferrer"><img src={logo3} alt="Logo"></img></Nav.Link>
              <Nav.Link as={Link} to="https://wa.me/50672599204" target="_blank"
                rel="noopener noreferrer"><img src={logo4} alt="Logo"></img></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
