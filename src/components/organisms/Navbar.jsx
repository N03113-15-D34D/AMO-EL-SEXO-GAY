
import { NavLink } from 'react-router-dom';
import NavbarBT from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { HouseHeart, Fire, Heart } from 'react-bootstrap-icons';
import { Logo } from '../atoms/Logo';

export function Navbar() {
  return (
    <NavbarBT
      expand="lg"
      sticky="top"
      className="shadow-sm py-3 w-100"
      style={{ backgroundColor: '#38213F' }}
    >
      <Container fluid className="px-4">

        <NavbarBT.Brand as={NavLink} to="/">
          <Logo />
        </NavbarBT.Brand>

        <NavbarBT.Toggle
          aria-controls="navbar-bl"
          className="bg-light"
        />

        <NavbarBT.Collapse id="navbar-bl">
          <Nav className="ms-auto gap-lg-3">

            <Nav.Link
              as={NavLink}
              to="/"
              end
              className="fw-semibold d-flex align-items-center gap-2"
              style={{ color: '#FFFFFF' }}
            >
              <HouseHeart />
              Inicio
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/populares"
              className="fw-semibold d-flex align-items-center gap-2"
              style={{ color: '#FFFFFF' }}
            >
              <Fire />
              Populares
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/favoritos"
              className="fw-semibold d-flex align-items-center gap-2"
              style={{ color: '#FFFFFF' }}
            >
              <Heart />
              Favoritos
            </Nav.Link>

          </Nav>
        </NavbarBT.Collapse>

      </Container>
    </NavbarBT>
  );
}

export default Navbar;
