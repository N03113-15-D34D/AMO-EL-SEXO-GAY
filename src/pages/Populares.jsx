import { useState } from 'react';
import LayoutPrincipal from '../components/templates/LayoutPrincipal';
import GaleriaHistorias from '../components/organisms/GaleriaHistorias';
import { historiasService } from '../services/historiasService';
import { useFavoritos } from '../context/FavoritosContext';

function Populares() {
  const [populares] = useState(() =>
    historiasService.obtenerPopulares()
  );

  const { favoritos, toggleFavorito } = useFavoritos();

  return (
    <LayoutPrincipal>
      <div className="w-100 text-center">

        <div
          className="rounded-4 shadow-sm p-4 p-md-5 mb-4"
          style={{ backgroundColor: '#F5DDE7' }}
        >
          <h1
            className="fw-bold display-6 mb-2"
            style={{ color: '#38213F' }}
          >
            🔥 Historias Más Populares
          </h1>

          <p className="text-muted mb-0">
            Las obras más leídas y destacadas por la comunidad.
          </p>
        </div>

        <GaleriaHistorias
          historias={populares}
          favoritos={favoritos}
          onToggleFavorito={toggleFavorito}
        />

      </div>
    </LayoutPrincipal>
  );
}

export default Populares;
