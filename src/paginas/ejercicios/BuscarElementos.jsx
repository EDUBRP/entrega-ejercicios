import { useState } from "react";

export default function BuscarElementos() {
    // lista original de elementos
    const elementos = ["Perro", "Gato", "Pez", "Loro", "Hamster", "Conejo"];
    // estado del texto que escribe el usuario          
    const [filtro, setFiltro] = useState("");
    // filtrar los elementos según el texto que escribe el usuario
    const elementosFiltrados = elementos.filter((elemento) =>
        elemento.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div style={{ minHeight: 200, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <input
                type="text"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                placeholder="Buscar elementos"
                style={{ padding: "0.5rem", fontSize: "1rem", marginBottom: "1rem" }}
            />
            <ul>
                {elementosFiltrados.map((elemento, index) => (
                    <li key={index} style={{ marginBottom: "0.5rem" }}>
                        {elemento}
                    </li>
                ))}
            </ul>
        </div>
    )
}