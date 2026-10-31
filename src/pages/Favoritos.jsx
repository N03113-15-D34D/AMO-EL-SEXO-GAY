import { useState } from 'react';
import LayoutPrincipal from '../components/templates/LayoutPrincipal';
import GaleriaHistorias from '../components/organisms/GaleriaHistorias';
import { historiasService } from '../services/historiasService';
import { useFavoritos } from '../context/FavoritosContext';

export default function Favoritos() {
  const [todas] = useState(() => historiasService.obtenerTodas());
  const { favoritos, toggleFavorito } = useFavoritos();

  const historiasFavoritas = todas.filter((item) => favoritos.includes(item.id));

  return (
    <LayoutPrincipal>
      <div className="w-100 text-center">
        <div className="bg-white rounded-4 shadow-sm p-4 mb-4 border">
          <h1 className="fw-bold text-dark display-6 mb-2">❤️ Mis Favoritos</h1>
          <p className="text-muted mb-0">
            Tu lista personal de manhwas y novelas guardadas.
          </p>
        </div>

        {historiasFavoritas.length === 0 ? (
          <div className="p-5 bg-white rounded-4 shadow-sm border my-4">
            <p className="fs-5 text-muted mb-0">
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