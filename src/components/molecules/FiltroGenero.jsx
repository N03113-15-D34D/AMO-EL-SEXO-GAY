import { Boton } from '../atoms/Boton';

export function FiltroGenero({ 
  generoSeleccionado, 
  setGeneroSeleccionado, 
  generos = ['Todos', 'Shonen-ai', 'Manhwa BL', 'Romance', 'Drama'] 
}) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-2 my-3">
      {generos.map((genero) => (
        <Boton
          key={genero}
          variant={generoSeleccionado === genero ? 'primary' : 'outline-secondary'}
          size="sm"
          onClick={() => setGeneroSeleccionado(genero)}
        >
          {genero}
        </Boton>
      ))}
    </div>
  );
}

export default FiltroGenero;