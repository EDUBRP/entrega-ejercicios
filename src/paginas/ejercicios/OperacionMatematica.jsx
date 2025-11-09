import { useState } from "react";

export default function OperacionMatematica() {
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [resultado, setResultado] = useState("");

    const ObtenerNumeros = () => {
        const valor1 = parseFloat(numero1);
        const valor2 = parseFloat(numero2);

        if (isNaN(valor1) || isNaN(valor2)) {
            alert("Por favor, ingresa números válidos en ambos campos.");
            return null;
        }
        return { valor1, valor2 };
    };

    const operar = (tipo) => {
        const numeros = ObtenerNumeros();
        if (!numeros) return;

        const { valor1, valor2 } = numeros;

        let res;
        switch (tipo) {
            case "sumar":
                res = valor1 + valor2;
                break;
            case "restar":
                res = valor1 - valor2;
                break;
            case "multiplicar":
                res = valor1 * valor2;
                break;
            case "dividir":
                if (valor2 === 0) {
                    alert("No se puede dividir por cero.");
                    return;
                }
                res = valor1 / valor2;
                break;
            default:
                return;
        }
        setResultado(`Resultado: ${res}`);
    }

    return (
        <div style={{ minHeight: 200, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <input
                type="text"
                value={numero1}
                onChange={(e) => setNumero1(e.target.value)}
                placeholder="Número 1"
                style={{ padding: "0.5rem", fontSize: "1rem", marginBottom: "1rem", marginRight: "-0.5rem" }}
            />
            <input
                type="text"
                value={numero2}
                onChange={(e) => setNumero2(e.target.value)}
                placeholder="Número 2"
                style={{ padding: "0.5rem", fontSize: "1rem", marginBottom: "1rem", marginLeft: "0.5rem" }}
            />
            <div style={{ marginBottom: "1rem" }}>
                <button onClick={() => operar("sumar")} style={{ padding: "0.5rem 1rem", fontSize: "1.1rem", marginRight: "0.5rem" }}>
                    Sumar
                </button>
                <button onClick={() => operar("restar")} style={{ padding: "0.5rem 1rem", fontSize: "1.1rem", marginRight: "0.5rem" }}>
                    Restar
                </button>
                <button onClick={() => operar("multiplicar")} style={{ padding: "0.5rem 1rem", fontSize: "1.1rem", marginRight: "0.5rem" }}>
                    Multiplicar
                </button>
                <button onClick={() => operar("dividir")} style={{ padding: "0.5rem 1rem", fontSize: "1.1rem" }}>
                    Dividir
                </button>
            </div>
            {resultado && <p>{resultado}</p>}
        </div>
    );
}