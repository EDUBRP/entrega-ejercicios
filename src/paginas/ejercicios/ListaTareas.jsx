import { useEffect, useState } from "react"; 

export default function ListaTareas() {
    const [tareas, setTareas] = useState(() => {
        const tareasGuardadas = localStorage.getItem("tareas");
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    });

    const [texto, setTexto] = useState("");

    // cargar tareas desde localStorage al montar el componente
    useEffect(() => {
        const tareasGuardadas = localStorage.getItem("tareas");
        if (tareasGuardadas) setTareas(JSON.parse(tareasGuardadas));
    }, []);

    // guardar tareas en localStorage cada vez que cambian
    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    const agregarTarea = () => {
        if (texto.trim() === "")return;

        setTareas([...tareas, { texto: texto.trim(), completada: false }]);
        setTexto("");
    };

    const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
    };

    const EliminarCompletadas = () => {
        setTareas(tareas.filter((t) => !t.completada));
    };

    return (
        <div
            style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                maxWidth: "500px",
                margin: "0 auto",
                textAlign: "center",
            }}
        >
        <h3 style={{ marginBottom: "1rem" }}>📋 Lista de Tareas</h3>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
            <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Nueva tarea..."
            style={{
                flex: 1,
                padding: "0.7rem",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                fontSize: "1rem",
            }}
            />
            <button onClick={agregarTarea} style={estiloBoton("#2563eb")}>
            Agregar
            </button>
        </div>

        <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
            {tareas.map((tarea, index) => (
            <li
                key={index}
                style={{
                display: "flex",
                alignItems: "center",
                padding: "0.5rem 0",
                borderBottom: "1px solid #e2e8f0",
                }}
            >
                <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => toggleCompletada(index)}
                style={{ marginRight: "0.5rem" }}
                />
                <span
                style={{
                    textDecoration: tarea.completada ? "line-through" : "none",
                    color: tarea.completada ? "#94a3b8" : "#1e293b",
                }}
                >
                {tarea.texto}
                </span>
            </li>
            ))}
        </ul>

        <button
            onClick={EliminarCompletadas}
            style={{ ...estiloBoton("#dc2626"), marginTop: "1rem" }}
        >
            Eliminar completadas
        </button>
        </div>
    );
}

// funcion para estilos de botones
const estiloBoton = (color) => ({
    backgroundColor: color,
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.2s ease",
});