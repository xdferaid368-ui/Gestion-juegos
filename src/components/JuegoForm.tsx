import { useState } from "react";
import { Juego, Categoria } from "../types";

interface Props {
  onAdd: (juego: Juego) => void;
}

export const JuegoForm = ({ onAdd }: Props) => {
  const [nombre, setNombre] = useState("");
  const [jugadoresMin, setJugadoresMin] = useState(1);
  const [jugadoresMax, setJugadoresMax] = useState(4);
  const [categoria, setCategoria] = useState<Categoria>(Categoria.Estrategia);
  const [puntuacion, setPuntuacion] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ nombre, jugadoresMin, jugadoresMax, categoria, puntuacion });
    setNombre("");
    setJugadoresMin(1);
    setJugadoresMax(4);
    setCategoria(Categoria.Estrategia);
    setPuntuacion(5);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-md mb-4">
      <input 
        type="text" 
        placeholder="Nombre del juego" 
        value={nombre} 
        onChange={e => setNombre(e.target.value)} 
        className="border p-1 mb-2 w-full"
        required
      />
      <div className="flex gap-2 mb-2">
        <input type="number" value={jugadoresMin} onChange={e => setJugadoresMin(Number(e.target.value))} className="border p-1 w-1/2" min={1} />
        <input type="number" value={jugadoresMax} onChange={e => setJugadoresMax(Number(e.target.value))} className="border p-1 w-1/2" min={jugadoresMin} />
      </div>
      <select value={categoria} onChange={e => setCategoria(e.target.value as Categoria)} className="border p-1 mb-2 w-full">
        {Object.values(Categoria).map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <input type="number" value={puntuacion} onChange={e => setPuntuacion(Number(e.target.value))} className="border p-1 mb-2 w-full" min={1} max={10} />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Añadir Juego</button>
    </form>
  );
};
