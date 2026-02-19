import { useState } from "react";
import { Juego, Categoria } from "../types";

interface JuegoFormProps {
  onAdd: (juego: Juego) => void;
}

export const JuegoForm: React.FC<JuegoFormProps> = ({ onAdd }) => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState<Categoria>(Categoria.Estrategia);
  const [jugadoresMin, setJugadoresMin] = useState<number | "">("");
  const [jugadoresMax, setJugadoresMax] = useState<number | "">("");
  const [puntuacion, setPuntuacion] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !categoria || !jugadoresMin || !jugadoresMax || !puntuacion) {
      alert("Por favor, rellena todos los campos");
      return;
    }

    onAdd({
      nombre,
      categoria,
      jugadoresMin: Number(jugadoresMin),
      jugadoresMax: Number(jugadoresMax),
      puntuacion: Number(puntuacion),
    });

    // Limpiar formulario
    setNombre("");
    setCategoria(Categoria.Estrategia);
    setJugadoresMin("");
    setJugadoresMax("");
    setPuntuacion("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <label>
        Nombre del juego:
        <input
          type="text"
          value={nombre}
          placeholder="Ej: Catan"
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>

      <label>
        Categoría:
        <select value={categoria} onChange={(e) => setCategoria(e.target.value as Categoria)}>
          {Object.values(Categoria).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label>
        Jugadores mínimos:
        <input
          type="number"
          value={jugadoresMin}
          placeholder="Ej: 2"
          onChange={(e) => setJugadoresMin(Number(e.target.value))}
        />
      </label>

      <label>
        Jugadores máximos:
        <input
          type="number"
          value={jugadoresMax}
          placeholder="Ej: 4"
          onChange={(e) => setJugadoresMax(Number(e.target.value))}
        />
      </label>

      <label>
        Puntuación (1-10):
        <input
          type="number"
          value={puntuacion}
          placeholder="Ej: 8"
          min={1}
          max={10}
          onChange={(e) => setPuntuacion(Number(e.target.value))}
        />
      </label>

      <button type="submit">Añadir juego</button>
    </form>
  );
};
