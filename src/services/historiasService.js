import historiasIniciales from '../data/historias.json';

const KEY = 'velvet_historias_v2';

export const historiasService = {
  obtenerTodas: () => {
    const guardadas = localStorage.getItem(KEY);

    if (!guardadas) {
      localStorage.setItem(KEY, JSON.stringify(historiasIniciales));
      return historiasIniciales;
    }

    try {
      return JSON.parse(guardadas);
    } catch (error) {
      console.error('Error al cargar las historias:', error);

      localStorage.setItem(KEY, JSON.stringify(historiasIniciales));
      return historiasIniciales;
    }
  },

  obtenerPopulares: () => {
    const todas = historiasService.obtenerTodas();

    return todas.filter((item) => item.popular === true);
  }
};

export default historiasService;
