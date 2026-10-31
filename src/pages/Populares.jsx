import { useState } from 'react';
import LayoutPrincipal from '../components/templates/LayoutPrincipal';
import GaleriaHistorias from '../components/organisms/GaleriaHistorias';
import { historiasService } from '../services/historiasService';
import { useFavoritos } from '../context/FavoritosContext';

export default function Populares() {
  const [populares] = useState(() => historiasService.obtenerPopulares());
  const { favoritos, toggleFavorito } = useFavoritos();

  return (
    <LayoutPrincipal>
      <div className="w-100 text-center">
        <div className="bg-white rounded-4 shadow-sm p-4 mb-4 border">
          <h1 className="fw-bold text-dark display-6 mb-2">🔥 Historias Más Populares</h1>
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