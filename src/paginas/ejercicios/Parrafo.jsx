import { useState } from "react";  

export default function Parrafo() {
    const [texto, setTexto] = useState("");
    const [numCaracteres, setNumCaracteres] = useState(0);
    const [numPalabras, setNumPalabras] = useState(0);

    const manejarCambio = (e) => {
        const nuevoTexto = e.target.value;
        setTexto(nuevoTexto);
        
        const caracteresSinEspacios = nuevoTexto.replace(/\s/g, ''); // contar caracteres sin espacios
        setNumCaracteres(caracteresSinEspacios.length);
        
        const palabrasArray = nuevoTexto.trim().split(/\s+/).filter((p) => p !== "");
        setNumPalabras(nuevoTexto.trim() === "" ? 0 : palabrasArray.length);
    };

    return (
        <div
            style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                maxWidth: "600px",
                margin: "0 auto",
      }}
    >
      <h3 style={{ marginBottom: "1rem" }}>Contador de palabras y caracteres</h3>

      <textarea
        value={texto}
        onChange={manejarCambio}
        rows={6}
        placeholder="Escribe tu párrafo aquí..."
        style={{
          width: "100%",
          padding: "0.8rem",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "1px solid #cbd5e1",
          resize: "vertical",
        }}
      ></textarea>

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "500",
          color: "#1e293b",
        }}
      >
        <span>Caracteres (sin espacios): {numCaracteres}</span>
        <span>Palabras: {numPalabras}</span>
      </div>
    </div>
    )
}