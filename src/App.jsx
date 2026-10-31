import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { FavoritosProvider } from "./context/FavoritosContext";
import Inicio from "./pages/Inicio";
import Populares from "./pages/Populares";
import Favoritos from "./pages/Favoritos";
import DetalleHistoria from "./pages/DetalleHistoria";

export default function App() {
  return (
    <FavoritosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/favoritos" element={<Favoritos />} />
          
          {/* Ruta para ver el detalle dinámico por ID */}
          <Route path="/historia/:id" element={<DetalleHistoria />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </FavoritosProvider>
  );
}