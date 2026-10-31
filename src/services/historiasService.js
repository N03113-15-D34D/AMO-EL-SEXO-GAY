import historiasIniciales from '../data/historias.json';

const KEY = 'velvet_historias';

export const historiasService = {
  obtenerTodas: () => {
    const guardadas = localStorage.getItem(KEY);
    if (!guardadas) {
      localStorage.setItem(KEY, JSON.stringify(historiasIniciales));
      return historiasIniciales;
    }
    return JSON.parse(guardadas);
  },

  obtenerPopulares: () => {
    const todas = historiasService.obtenerTodas();
    // Filtra las que tienen popular: true
    return todas.filter((item) => item.popular === true);
  }
};