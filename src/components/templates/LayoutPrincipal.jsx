import { Container } from 'react-bootstrap';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';

export function LayoutPrincipal({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light w-100">
      <Navbar />

      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center py-4 w-100">
        <Container className="d-flex flex-column align-items-center">
          {children}
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default LayoutPrincipal;