import { useState } from "react";   

export default function GeneradorPassword() {
    const [longitud, setLongitud] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const generarPassword = () => {
        const longitudNum = parseInt(longitud);

        if (isNaN(longitudNum) || longitudNum < 4) {
            setError('La longitud debe ser un número mayor o igual a 4');
            setPassword('');
            return;
        }

        setError('');

        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        let nuevaPassword = '';
        for (let i = 0; i < longitudNum; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            nuevaPassword += caracteres.charAt(indiceAleatorio);
        }
        setPassword(nuevaPassword);
    };

    return (
        <div
            style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                maxWidth: "450px",
                margin: "0 auto",
                textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "1rem" }}>Generador de Contraseñas</h3>

      <label
        htmlFor="longitud"
        style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}
      >
        Longitud de la contraseña:
      </label>

      <input
        id="longitud"
        type="number"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
        placeholder="Introduce un número"
        style={{
          padding: "0.6rem",
          width: "100%",
          maxWidth: "200px",
          textAlign: "center",
          border: "1px solid #cbd5e1",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      />

      <br />

      <button onClick={generarPassword} style={estiloBoton("#2563eb")}>
        Generar contraseña
      </button>

      {error && (
        <p style={{ color: "#dc2626", marginTop: "1rem", fontWeight: "500" }}>
          {error}
        </p>
      )}

      {password && (
        <p
          style={{
            marginTop: "1rem",
            fontSize: "1.1rem",
            wordBreak: "break-all",
            color: "#065f46",
            background: "#ecfdf5",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            display: "inline-block",
          }}
        >
          Contraseña generada: <strong>{password}</strong>
        </p>
      )}
    </div>
  ); 
}

// funcion para el estilo de los botones
function estiloBoton(color) {
  return {
    padding: "0.8rem 1.2rem",
    fontSize: "1rem",
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "1rem",
    transition: "background-color 0.2s ease",
  };
}