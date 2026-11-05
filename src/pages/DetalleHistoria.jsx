import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LayoutPrincipal from '../components/templates/LayoutPrincipal';
import { historiasService } from '../services/historiasService';
import { useFavoritos } from '../context/FavoritosContext';
import { Etiqueta } from '../components/atoms/Etiqueta';
import { Boton } from '../components/atoms/Boton';
import { IconoFavorito } from '../components/atoms/IconoFavorito';

function DetalleHistoria() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { favoritos, toggleFavorito } = useFavoritos();

  const [historia, setHistoria] = useState(null);

  useEffect(() => {
    const todas = historiasService.obtenerTodas();

    const encontrada = todas.find(
      (item) => String(item.id) === String(id)
    );

    setHistoria(encontrada || null);
  }, [id]);

  if (!historia) {
    return (
      <LayoutPrincipal>
        <div className="text-center py-5">
          <h3 className="fw-bold" style={{ color: '#38213F' }}>
            Obra no encontrada 🥺
          </h3>

          <Boton
            variant="principal"
            className="mt-3"
            onClick={() => navigate('/')}
          >
            Volver al Catálogo
          </Boton>
        </div>
      </LayoutPrincipal>
    );
  }

  const esFavorito = favoritos.includes(historia.id);

  return (
    <LayoutPrincipal>
      <div className="w-100 mx-auto" style={{ maxWidth: '1000px' }}>

        {/* Botón para volver */}
        <Boton
          variant="rosa"
          size="sm"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          ← Volver atrás
        </Boton>

        {/* Contenedor principal */}
        <div
          className="rounded-4 shadow-sm p-4 p-md-5"
          style={{ backgroundColor: '#F5DDE7' }}
        >
          <div className="row g-4 align-items-center">

            {/* Portada */}
            <div className="col-12 col-md-5 text-center">
              <div className="position-relative d-inline-block rounded-4 overflow-hidden shadow">

                <img
                  src={
                    historia.portada ||
                    historia.imagen ||
                    'https://via.placeholder.com/300x400'
                  }
                  alt={historia.titulo || 'Historia BL'}
                  className="img-fluid"
                  style={{
                    maxHeight: '420px',
                    objectFit: 'cover'
                  }}
                />

                <div className="position-absolute top-0 end-0 p-2 bg-white bg-opacity-75 rounded-circle m-2 shadow-sm">
                  <IconoFavorito
                    esFavorito={esFavorito}
                    onClick={() => toggleFavorito(historia.id)}
                  />
                </div>

              </div>
            </div>

            {/* Información de la historia */}
            <div className="col-12 col-md-7 text-start">

              <div className="d-flex align-items-center gap-2 flex-wrap mb-2">
                {historia.genero && (
                  <Etiqueta text={historia.genero} bg="malva" />
                )}

                {historia.popular && (
                  <Etiqueta
                    text="🔥 Popular"
                    bg="pastel"
                  />
                )}
              </div>

              <h1
                className="fw-bold display-6 mb-2"
                style={{ color: '#38213F' }}
              >
                {historia.titulo}
              </h1>

              <p className="text-muted fs-5 mb-3">
                ✍️ Autor: <strong>{historia.autor || 'Desconocido'}</strong>
              </p>

              <hr />

              <h5
                className="fw-bold mt-3"
                style={{ color: '#38213F' }}
              >
                Sinopsis
              </h5>

              <p className="text-secondary fs-6">
                {historia.descripcion || 'No hay una sinopsis disponible.'}
              </p>

              {/* Acción de favoritos */}
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Boton
                  variant={esFavorito ? 'rosa' : 'principal'}
                  onClick={() => toggleFavorito(historia.id)}
                >
                  {esFavorito
                    ? '❤️ En mis favoritos'
                    : '🤍 Agregar a favoritos'}
                </Boton>
              </div>

            </div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}

export default DetalleHistoria;
