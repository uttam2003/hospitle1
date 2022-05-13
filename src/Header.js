import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
function Header() {
  return (
    <div className='freeze'>
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={require('./image/logo.png')} className='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='font-family'>HOME</Nav.Link>
            <NavDropdown title="ABOUT" id="collasible-nav-dropdown" className='font-family'>
              <NavDropdown.Item href="#action/3.1" className='font-family1'>CORPORATE BROCHURE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='font-family1'>ABOUT CLINIC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='font-family1'>ABOUT DR.JAGDISH SAKHIYA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className='font-family1'>MESSAGE FROM DIRECTOR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" className='font-family1'>AWARDS AND ACHIEVEMENT</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#TREATMENTS" className='font-family'>TREATMENTS</Nav.Link>
            <NavDropdown title="GALLERY" id="collasible-nav-dropdown" className='font-family'>
              <NavDropdown.Item href="#action/3.1" className='font-family1'>CLINIC GLIMPSE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='font-family1'>press and media</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='font-family1'>virtual tones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className='font-family1'>brochure</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" className='font-family1'>results</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" className='font-family1'>social wall</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing" className='font-family'>TECHNOLOGIES</Nav.Link>
            <Nav.Link href="#BLOG" className='font-family'>BLOG</Nav.Link>
            <Nav.Link href="#CAREER" className='font-family'>CAREER</Nav.Link>
            <Nav.Link href="#LOCATIONS" className='font-family'>LOCATIONS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
export default Header;