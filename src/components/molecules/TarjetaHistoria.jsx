import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Etiqueta } from '../atoms/Etiqueta';
import { IconoFavorito } from '../atoms/IconoFavorito';

export function TarjetaHistoria({ historia = {}, esFavorito = false, onToggleFavorito }) {
  const { id, titulo, autor, genero, portada, imagen, descripcion } = historia;
  const navigate = useNavigate();

  const imagenUrl = portada || imagen || 'https://via.placeholder.com/300x400';

  const manejarNavegacion = (e) => {
    // Si el clic fue en el icono de favorito, evita redirigir
    if (e.target.closest('button')) return;
    navigate(`/historia/${id}`);
  };

  return (
    <Card 
      onClick={manejarNavegacion}
      className="h-100 shadow-sm border-0 rounded-4 overflow-hidden position-relative hover-shadow transition"
      style={{ cursor: 'pointer' }}
    >
      <div className="position-absolute top-0 end-0 p-2 z-1 bg-white bg-opacity-75 rounded-circle m-2 shadow-sm">
        <IconoFavorito
          esFavorito={esFavorito}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorito && onToggleFavorito(id);
          }}
        />
      </div>

      <div style={{ height: '280px', overflow: 'hidden' }} className="bg-light">
        <Card.Img
          variant="top"
          src={imagenUrl}
          alt={titulo || 'Historia BL'}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>

      <Card.Body className="d-flex flex-column p-3 text-start">
        <div className="d-flex justify-content-between align-items-start mb-2">
          {genero && <Etiqueta text={genero} bg="danger" />}
        </div>

        <Card.Title className="fw-bold fs-6 text-dark text-truncate mb-1">
          {titulo || 'Sin Título'}
        </Card.Title>

        <Card.Subtitle className="mb-2 text-muted small">
          ✍️ {autor || 'Autor desconocido'}
        </Card.Subtitle>

        {descripcion && (
          <Card.Text className="text-muted small flex-grow-1" style={{ fontSize: '0.85rem' }}>
            {descripcion.length > 70 ? `${descripcion.substring(0, 70)}...` : descripcion}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}
export default TarjetaHistoria;