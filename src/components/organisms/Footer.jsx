import { Container } from 'react-bootstrap';
import { Logo } from '../atoms/Logo';

export function Footer() {
  return (
    <footer
      className="py-4 mt-auto w-100"
      style={{ backgroundColor: '#38213F' }}
    >
      <Container className="d-flex flex-column align-items-center justify-content-center text-center">
        <Logo className="mb-2" />

        <p className="text-white-50 small mb-0">
          © {new Date().getFullYear()} Velvet BL - El mejor catálogo de
          manhwas y novelas. Todos los derechos reservados.
        </p>

        <p className="small mt-2 mb-0" style={{ color: '#F5DDE7' }}>
          Hecho con 💗 para los amantes del BL.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
