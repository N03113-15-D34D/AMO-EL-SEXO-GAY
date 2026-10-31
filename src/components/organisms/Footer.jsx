import { Container } from 'react-bootstrap';
import { Logo } from '../atoms/Logo';

export function Footer() {
  return (
    <footer className="bg-white border-top py-4 mt-auto w-100">
      <Container className="d-flex flex-column align-items-center justify-content-center text-center">
        <Logo className="mb-2" />
        <p className="text-muted small mb-0">
          © {new Date().getFullYear()} Velvet BL - El mejor catálogo de manhwas y novelas. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;