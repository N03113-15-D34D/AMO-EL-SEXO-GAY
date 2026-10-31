import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LayoutPrincipal from '../components/templates/LayoutPrincipal';
import { historiasService } from '../services/historiasService';
import { useFavoritos } from '../context/FavoritosContext';
import { Etiqueta } from '../components/atoms/Etiqueta';
import { Boton } from '../components/atoms/Boton';
import { IconoFavorito } from '../components/atoms/IconoFavorito';

export default function DetalleHistoria() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favoritos, toggleFavorito } = useFavoritos();
  const [historia, setHistoria] = useState(null);

  useEffect(() => {
    const todas = historiasService.obtenerTodas();
    const encontrada = todas.find((item) => String(item.id) === String(id));
    if (encontrada) {
      setHistoria(encontrada);
    }
  }, [id]);

  if (!historia) {
    return (
      <LayoutPrincipal>
        <div className="text-center py-5">
          <h3>Obra no encontrada 🥺</h3>
          <Boton variant="primary" className="mt-3" onClick={() => navigate('/')}>
            Volver al Catálogo
          </Boton>
        </div>
      </LayoutPrincipal>
    );
  }

  const esFavorito = favoritos.includes(historia.id);

  return (
    <LayoutPrincipal>
      <div className="w-100 max-w-4xl mx-auto">
        <Boton 
          variant="outline-secondary" 
          size="sm" 
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          ← Volver atrás
        </Boton>

        <div className="bg-white rounded-4 shadow-sm border p-4 p-md-5">
          <div className="row g-4 align-items-center">
            {/* Portada */}
            <div className="col-12 col-md-5 text-center">
              <div className="position-relative d-inline-block rounded-4 overflow-hidden shadow">
                <img
                  src={historia.portada || historia.imagen}
                  alt={historia.titulo}
                  className="img-fluid"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 end-0 p-2 bg-white bg-opacity-75 rounded-circle m-2 shadow-sm">
                  <IconoFavorito
                    esFavorito={esFavorito}
                    onClick={() => toggleFavorito(historia.id)}
                  />
                </div>
              </div>
            </div>

            {/* Detalles */}
            <div className="col-12 col-md-7 text-start">
              <div className="d-flex align-items-center gap-2 mb-2">
                <Etiqueta text={historia.genero} bg="danger" />
                {historia.popular && <Etiqueta text="🔥 Popular" bg="warning" className="text-dark fw-bold" />}
              </div>

              <h1 className="fw-bold text-dark display-6 mb-2">{historia.titulo}</h1>
              <p className="text-muted fs-5 mb-3">✍️ Autor: <strong>{historia.autor}</strong></p>

              <hr />

              <h5 className="fw-bold text-dark mt-3">Sinopsis</h5>
              <p className="text-secondary leading-relaxed fs-6">
                {historia.descripcion}
              </p>

              <div className="d-flex gap-3 mt-4">
                <Boton 
                  variant={esFavorito ? 'danger' : 'outline-danger'}
                  onClick={() => toggleFavorito(historia.id)}
                >
                  {esFavorito ? '❤️ En mis favoritos' : '🤍 Agregar a favoritos'}
                </Boton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}