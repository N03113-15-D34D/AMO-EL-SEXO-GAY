import { Container } from 'react-bootstrap';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';

export function LayoutPrincipal({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100 w-100">
      <Navbar />

      <main className="flex-grow-1 py-4 w-100">
        <Container fluid className="px-3 px-md-4">
          {children}
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default LayoutPrincipal;
