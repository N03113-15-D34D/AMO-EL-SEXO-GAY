
import { Container } from 'react-bootstrap';
import { BarraBusqueda } from '../molecules/BarraBusqueda';

export function Hero({ busqueda, setBusqueda }) {
  return (
    <div
      className="rounded-4 shadow-sm p-4 p-md-5 mb-4 text-center w-100"
      style={{ backgroundColor: '#F5DDE7' }}
    >
      <Container style={{ maxWidth: '700px' }}>
        <h1
          className="fw-bold display-5 mb-3"
          style={{ color: '#38213F' }}
        >
          Descubre tus Historias BL Favoritas 🌸
        </h1>

        <p className="text-secondary fs-5 mb-4">
          Manhwas, novelas y cómics llenos de romance, drama y dulzura.
        </p>

        {setBusqueda && (
          <div className="mt-3">
            <BarraBusqueda
              busqueda={busqueda}
              setBusqueda={setBusqueda}
            />
          </div>
        )}
      </Container>
    </div>
  );
}

export default Hero;
