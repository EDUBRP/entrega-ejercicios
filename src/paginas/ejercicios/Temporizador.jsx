import { useState, useEffect, useRef } from "react";

export default function Temporizador() {
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [activo, setActivo] = useState(false);

    const intervaloRef = useRef(null);

    // Formatear el numero con 2 digitos
    const formatear = (num) => (num < 10 ? `0${num}` : num);

    // manejar el temporizador
    useEffect(() => {
        if (activo) {
            intervaloRef.current = setInterval(() => {
                setSegundos((prevSegundos) => {
                    if (prevSegundos + 1 === 60) {
                        setMinutos((prevMinutos) => {
                            if (prevMinutos + 1 === 60) {
                                setHoras((prevHoras) => prevHoras + 1);
                                return 0;
                            }
                            return prevMinutos + 1;
                        });
                        return 0;
                    }
                    return prevSegundos + 1;
                });
            }, 1000);
        }
        return () => clearInterval(intervaloRef.current);
    }, [activo]);

    const reiniciar = () => {
        setActivo(false);
        clearInterval(intervaloRef.current);
        setHoras(0);
        setMinutos(0);
        setSegundos(0);     
    };

    return (
        <div
            style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                maxWidth: "400px",
                margin: "0 auto",
                textAlign: "center",

      }}
    >
      <h3 style={{ marginBottom: "1rem" }}>Temporizador</h3>

      <h1
        style={{
          fontSize: "2rem",
          fontFamily: "monospace",
          marginBottom: "1.5rem",
          color: "#1e293b",
        }}
      >
        {formatear(horas)}:{formatear(minutos)}:{formatear(segundos)}
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setActivo(true)}
          style={estiloBoton("#16a34a")}
          disabled={activo}
        >
          Iniciar
        </button>
        <button
          onClick={() => setActivo(false)}
          style={estiloBoton("#f59e0b")}
        >
          Pausar
        </button>
        <button onClick={reiniciar} style={estiloBoton("#dc2626")}>
          Reiniciar
        </button>
      </div>
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
    transition: "background-color 0.2s ease",
  };
}