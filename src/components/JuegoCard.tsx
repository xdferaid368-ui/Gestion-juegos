import { Juego } from "../types";

interface Props {
  juego: Juego;
  onDelete?: (id: string) => void;
}

export const JuegoCard = ({ juego, onDelete }: Props) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h2 className="font-bold text-lg">{juego.nombre}</h2>
      <p>Jugadores: {juego.jugadoresMin} - {juego.jugadoresMax}</p>
      <p>Categoría: {juego.categoria}</p>
      <p>Puntuación: {juego.puntuacion}/10</p>
      {onDelete && (
        <button 
          onClick={() => juego.id && onDelete(juego.id)}
          className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
        >
          Eliminar
        </button>
      )}
    </div>
  );
};
