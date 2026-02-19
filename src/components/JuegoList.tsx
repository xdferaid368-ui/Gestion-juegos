import { Juego } from "../types";
import { JuegoCard } from "./JuegoCard";

interface Props {
  juegos: Juego[];
  onDelete?: (id: string) => void;
}

export const JuegoList = ({ juegos, onDelete }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {juegos.map(j => (
        <JuegoCard key={j.id} juego={j} onDelete={onDelete} />
      ))}
    </div>
  );
};
