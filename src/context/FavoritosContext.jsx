import { createContext, useContext, useState, useEffect } from 'react';

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem('velvet_favoritos');
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem('velvet_favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export const useFavoritos = () => useContext(FavoritosContext);