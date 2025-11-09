import { useState } from "react";

export default function ContarClics() {
    const [clics, setClics] = useState(0);
    const manejarClic = () => {
        setClics(clics + 1);
    };
    return (
        <div style={{ minHeight: 200, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <button onClick={manejarClic} style={{ padding: "1rem 2rem", fontSize: "1.1rem", marginBottom: "1rem" }}>
                Haz clic aquí
            </button>
            <p>Número total de clics: {clics}</p>
        </div>
    );
}