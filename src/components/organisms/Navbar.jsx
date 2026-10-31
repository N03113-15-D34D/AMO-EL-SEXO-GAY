import { NavLink } from 'react-router-dom';
import NavbarBT from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Logo } from '../atoms/Logo';

export function Navbar() {
  return (
    <NavbarBT expand="lg" className="shadow-sm py-3 bg-white sticky-top w-100">
      <Container fluid className="px-4"> 
        <NavbarBT.Brand as={NavLink} to="/">
          <Logo />
        </NavbarBT.Brand>
        
        <NavbarBT.Toggle aria-controls="navbar-bl" />
        
        <NavbarBT.Collapse id="navbar-bl">
          <Nav className="ms-auto gap-3">
            <Nav.Link as={NavLink} to="/" className="fw-semibold text-dark">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/populares" className="fw-semibold text-dark">
              Populares
            </Nav.Link>
            <Nav.Link as={NavLink} to="/favoritos" className="fw-semibold text-dark">
              Favoritos
            </Nav.Link>
          </Nav>
        </NavbarBT.Collapse>
      </Container>
    </NavbarBT>
  );
}

export default Navbar;