import { Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import PaginaEjercicio from "./components/PaginaEjercicio";

export default function App() {
  return (
    <div>
      <header style={{ padding: "1rem", borderBottom: "1px solid #eee" }}>
        <h2>Mis Ejercicios JS → React</h2>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ejercicio/:id" element={<PaginaEjercicio />} />
          <Route path="*" element={<div style={{padding:20}}>404 - No encontrado</div>} />
        </Routes>
      </main>
    </div>
  );
}


