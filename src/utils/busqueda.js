export const filtrarHistorias = (historias = [], busqueda = '', genero = 'Todos') => {
  if (!Array.isArray(historias)) return [];

  return historias.filter((item) => {
    const texto = busqueda.toLowerCase().trim();
    const coincideTexto =
      !texto ||
      item.titulo?.toLowerCase().includes(texto) ||
      item.autor?.toLowerCase().includes(texto) ||
      item.descripcion?.toLowerCase().includes(texto);

    const coincideGenero =
      !genero || genero === 'Todos' || item.genero === genero;

    return coincideTexto && coincideGenero;
  });
};