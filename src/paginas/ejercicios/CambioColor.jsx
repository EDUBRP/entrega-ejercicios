import { useState } from "react";

export default function CambioColor() {
  const [color, setColor] = useState("white");

  const cambiarColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div style={{ backgroundColor: color, minHeight: 200, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button onClick={cambiarColor} style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
        Cambiar color
      </button>
    </div>
  );
}