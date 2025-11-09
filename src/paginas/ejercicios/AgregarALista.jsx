import { useState } from "react";

export default function AgregarALista() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const manejarAgregar = () => {
        if (inputValue.trim() !== "") { // .trim elimina los espacios en blanco al principio y al final de una cadena
            setItems([...items, inputValue.trim()]);
            setInputValue("");
        }
    };

    return (
        <div style={{ minHeight: 200, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe un ítem"
                style={{ padding: "0.5rem", fontSize: "1rem", marginBottom: "1rem" }}
            />
            <button onClick={manejarAgregar} style={{ padding: "0.5rem 1rem", fontSize: "1.1rem", marginBottom: "1rem" }}>
                Agregar a la lista
            </button>
            <ul>
                {items.map((item, index) => (
                    <li key={index} style={{ marginBottom: "0.5rem" }}>
                        {item}
                        <button
                            onClick={() => setItems(items.filter((_, i) => i !== index))}
                            style={{ marginLeft: "1rem", padding: "0.2rem 0.5rem", fontSize: "0.9rem" }}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}