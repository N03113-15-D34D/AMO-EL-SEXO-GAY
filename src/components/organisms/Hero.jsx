import { Container } from 'react-bootstrap';
import { BarraBusqueda } from '../molecules/BarraBusqueda';

export function Hero({ busqueda, setBusqueda }) {
  return (
    <div
      className="rounded-4 shadow-sm p-4 p-md-5 mb-4 text-center w-100 position-relative overflow-hidden"
      style={{ 
        backgroundImage: "linear-gradient(rgba(56, 33, 63, 0.45), rgba(56, 33, 63, 0.45)), url('/banner.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container style={{ maxWidth: '700px' }} className="position-relative z-1">
        <h1
          className="fw-bold display-5 mb-3 text-white"
        >
          Descubre tus Historias BL Favoritas 🌸
        </h1>

        <p className="fs-5 mb-4 text-white-50">
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