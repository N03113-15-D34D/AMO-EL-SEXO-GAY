import { Row, Col } from 'react-bootstrap';
import { TarjetaHistoria } from '../molecules/TarjetaHistoria';

export function GaleriaHistorias({ historias = [], favoritos = [], onToggleFavorito }) {
  if (!historias || historias.length === 0) {
    return (
      <div className="p-5 bg-white rounded-4 shadow-sm border my-4 w-100 text-center">
        <p className="fs-5 text-muted mb-0">
          No hay historias disponibles para mostrar 🥺
        </p>
      </div>
    );
  }

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center w-100 m-0">
      {historias.map((item) => (
        <Col key={item.id} className="d-flex justify-content-center">
          <TarjetaHistoria
            historia={item}
            esFavorito={favoritos.includes(item.id)}
            onToggleFavorito={onToggleFavorito}
          />
        </Col>
      ))}
    </Row>
  );
}

export default GaleriaHistorias;