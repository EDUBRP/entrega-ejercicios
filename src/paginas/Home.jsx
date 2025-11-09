import { Link } from "react-router-dom"; // para los enlaces entre rutas
import { ejercicios } from "../data/ejercicios"; // importamos los datos de los ejercicios

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Lista de Ejercicios</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {ejercicios.map((ex) => (
          <li key={ex.id} style={{ marginBottom: "0.8rem" }}>
            <Link
              to={`/ejercicio/${ex.id}`} // enlace dinámico basado en el id del ejercicio
              style={{
                textDecoration: "none",
                color: "#1e40af",
                fontSize: "1.1rem",
              }}
            >
              {ex.title}
            </Link>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: "1rem", color: "#555" }}>
        Haz clic en un ejercicio para ver su enunciado y solución.
      </p>
    </div>
  );
}