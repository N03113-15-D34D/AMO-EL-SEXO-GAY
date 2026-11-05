import { useState, useMemo } from 'react';
import LayoutPrincipal from '../components/templates/LayoutPrincipal';
import Hero from '../components/organisms/Hero';
import GaleriaHistorias from '../components/organisms/GaleriaHistorias';
import FiltroGenero from '../components/molecules/FiltroGenero';
import Newsletter from '../components/organisms/Newsletter';
import { historiasService } from '../services/historiasService';
import { filtrarHistorias } from '../utils/busqueda';
import { useFavoritos } from '../context/FavoritosContext';

function Inicio() {
  const [busqueda, setBusqueda] = useState('');
  const [generoSeleccionado, setGeneroSeleccionado] = useState('Todos');

  const [historias] = useState(() =>
    historiasService.obtenerTodas()
  );

  const { favoritos, toggleFavorito } = useFavoritos();

  const historiasFiltradas = useMemo(() => {
    return filtrarHistorias(
      historias,
      busqueda,
      generoSeleccionado
    );
  }, [historias, busqueda, generoSeleccionado]);

  return (
    <LayoutPrincipal>
      <div className="w-100 text-center">

        <Hero
          busqueda={busqueda}
          setBusqueda={setBusqueda}
        />

        <div className="my-4">
          <h2
            className="fw-bold mb-3"
            style={{ color: '#38213F' }}
          >
            Explora por Género 🌸
          </h2>

          <FiltroGenero
            generoSeleccionado={generoSeleccionado}
            setGeneroSeleccionado={setGeneroSeleccionado}
          />
        </div>

        <section className="my-4 w-100">
          <h3
            className="text-start fw-bold mb-4 px-2"
            style={{ color: '#38213F' }}
          >
            📖 Catálogo Completo
          </h3>

          <GaleriaHistorias
            historias={historiasFiltradas}
            favoritos={favoritos}
            onToggleFavorito={toggleFavorito}
          />
        </section>

        <Newsletter />

      </div>
    </LayoutPrincipal>
  );
}

export default Inicio;
