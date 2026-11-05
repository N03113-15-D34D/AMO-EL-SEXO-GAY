const normalizarTexto = (texto = '') => {
  return String(texto)
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export const filtrarHistorias = (
  historias = [],
  busqueda = '',
  genero = 'Todos'
) => {
  if (!Array.isArray(historias)) return [];

  const texto = normalizarTexto(busqueda);
  const generoBuscado = normalizarTexto(genero);

  return historias.filter((item) => {
    const titulo = normalizarTexto(item.titulo);
    const autor = normalizarTexto(item.autor);
    const descripcion = normalizarTexto(item.descripcion);

    // Buscar por título, autor o descripción
    const coincideTexto =
      !texto ||
      titulo.includes(texto) ||
      autor.includes(texto) ||
      descripcion.includes(texto);

    // Separar los géneros cuando hay varios
    const generosHistoria = String(item.genero || '')
      .split('/')
      .map((g) => normalizarTexto(g));

    // Comprobar si coincide alguno de los géneros
    const coincideGenero =
      !generoBuscado ||
      generoBuscado === 'todos' ||
      generosHistoria.includes(generoBuscado);

    return coincideTexto && coincideGenero;
  });
};

