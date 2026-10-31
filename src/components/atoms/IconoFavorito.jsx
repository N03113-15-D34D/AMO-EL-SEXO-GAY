export function IconoFavorito({ esFavorito, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn p-0 border-0 bg-transparent ${className}`}
      title={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      style={{ cursor: 'pointer', fontSize: '1.4rem', transition: 'transform 0.2s' }}
    >
      <span className={esFavorito ? 'text-danger' : 'text-muted'}>
        {esFavorito ? '❤️' : '🤍'}
      </span>
    </button>
  );
}

export default IconoFavorito;