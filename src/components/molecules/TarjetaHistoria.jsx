
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Etiqueta } from '../atoms/Etiqueta';
import { IconoFavorito } from '../atoms/IconoFavorito';

export function TarjetaHistoria({
  historia = {},
  esFavorito = false,
  onToggleFavorito
}) {
  const {
    id,
    titulo,
    autor,
    genero,
    portada,
    imagen,
    descripcion
  } = historia;

  const navigate = useNavigate();

  const imagenUrl =
    portada || imagen || 'https://via.placeholder.com/300x400';

  const manejarNavegacion = (e) => {
    if (e.target.closest('button')) return;

    navigate(`/historia/${id}`);
  };

  const manejarFavorito = (e) => {
    e.stopPropagation();

    if (onToggleFavorito) {
      onToggleFavorito(id);
    }
  };

  return (
    <Card
      onClick={manejarNavegacion}
      className="h-100 w-100 shadow-sm border-0 rounded-4 overflow-hidden"
      style={{ cursor: 'pointer' }}
    >
      {/* Botón de favoritos */}
      <div className="position-absolute top-0 end-0 p-2 z-1">
        <div className="bg-white bg-opacity-75 rounded-circle shadow-sm p-2">
          <IconoFavorito
            esFavorito={esFavorito}
            onClick={manejarFavorito}
          />
        </div>
      </div>

      {/* Portada */}
      <div
        className="bg-light"
        style={{ height: '280px', overflow: 'hidden' }}
      >
        <Card.Img
          variant="top"
          src={imagenUrl}
          alt={titulo || 'Historia BL'}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      </div>

      {/* Información de la historia */}
      <Card.Body className="d-flex flex-column p-3 text-start">
        <div className="mb-2">
          {genero && <Etiqueta text={genero} bg="danger" />}
        </div>

        <Card.Title
          className="fw-bold fs-6 text-truncate mb-1"
          style={{ color: '#38213F' }}
        >
          {titulo || 'Sin título'}
        </Card.Title>

        <Card.Subtitle className="mb-2 text-muted small">
          ✍️ {autor || 'Autor desconocido'}
        </Card.Subtitle>

        <Card.Text
          className="text-muted small mb-0"
          style={{
            fontSize: '0.85rem',
            minHeight: '40px'
          }}
        >
          {descripcion
            ? descripcion.length > 70
              ? `${descripcion.substring(0, 70)}...`
              : descripcion
            : 'Descubre esta historia.'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TarjetaHistoria;
