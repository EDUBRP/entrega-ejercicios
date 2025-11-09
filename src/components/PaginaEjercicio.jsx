import { Link, useParams } from "react-router-dom";
import { ejercicios } from "../data/ejercicios";

export default function PaginaEjercicios() {
  const { id } = useParams();
  const ejercicio = ejercicios.find((ex) => ex.id === id);

  if (!ejercicio) {
    return (
      <div style={{ padding: "2rem" }}>
        <p>Ejercicio no encontrado</p>
        <Link to="/">← Volver</Link>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        color: "#111", // 👈 color oscuro para texto
        backgroundColor: "#e2e2e2ff", // gris muy claro
        minHeight: "100vh",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#006d69ff" }}>
        ← Volver a la lista
      </Link>

      <h1 style={{ marginTop: "1rem", fontSize: "1.8rem", color: "#0f172a" }}>
        {ejercicio.title}
      </h1>

      <p
        style={{
          whiteSpace: "pre-line",
          background: "#ffffff", // 👈 fondo blanco del texto
          color: "#1e293b", // 👈 gris oscuro, más legible
          padding: "1rem 1.5rem",
          borderRadius: "10px",
          lineHeight: "1.6",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)", // sombra suave
          marginTop: "1rem",
        }}
      >
        {ejercicio.description}
      </p>

      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          background: "#ffffff",
          boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ marginBottom: "1rem", color: "#000000ff" }}>Solución</h2>
        {ejercicio.component}
      </div>
    </div>
  );
}

