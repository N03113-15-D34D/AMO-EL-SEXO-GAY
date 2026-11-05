import { useState } from 'react';
import LayoutPrincipal from '../components/templates/LayoutPrincipal';
import GaleriaHistorias from '../components/organisms/GaleriaHistorias';
import { historiasService } from '../services/historiasService';
import { useFavoritos } from '../context/FavoritosContext';

function Favoritos() {
  const [todas] = useState(() =>
    historiasService.obtenerTodas()
  );

  const { favoritos, toggleFavorito } = useFavoritos();

  const historiasFavoritas = todas.filter((item) =>
    favoritos.includes(item.id)
  );

  return (
    <LayoutPrincipal>
      <div className="w-100 text-center">

        {/* Encabezado */}
        <div
          className="rounded-4 shadow-sm p-4 p-md-5 mb-4"
          style={{ backgroundColor: '#F5DDE7' }}
        >
          <h1
            className="fw-bold display-6 mb-2"
            style={{ color: '#38213F' }}
          >
            ❤️ Mis Favoritos
          </h1>

          <p className="text-muted mb-0">
            Tu lista personal de manhwas y novelas guardadas.
          </p>
        </div>

        {/* Historias favoritas */}
        {historiasFavoritas.length === 0 ? (
          <div
            className="p-5 rounded-4 shadow-sm my-4"
            style={{ backgroundColor: '#F5DDE7' }}
          >
            <p className="fs-5 mb-0" style={{ color: '#75435F' }}>
              Aún no has agregado ninguna historia a favoritos 💔
            </p>
          </div>
        ) : (
          <GaleriaHistorias
            historias={historiasFavoritas}
            favoritos={favoritos}
            onToggleFavorito={toggleFavorito}
          />
        )}

      </div>
    </LayoutPrincipal>
  );
}

export default Favoritos;
