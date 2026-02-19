import { useEffect, useState } from "react";
import { Juego } from "./types";
import { JuegoForm } from "./components/JuegoForm";
import { JuegoList } from "./components/JuegoList";
import { getJuegos, addJuego, deleteJuego } from "./firebase";

function App() {
  const [juegos, setJuegos] = useState<Juego[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchJuegos = async () => {
    setLoading(true);
    const data = await getJuegos();
    setJuegos(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJuegos();
  }, []);

  const handleAdd = async (juego: Juego) => {
    await addJuego(juego);
    fetchJuegos();
  };

  const handleDelete = async (id: string) => {
    await deleteJuego(id);
    fetchJuegos();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Juegos de Mesa</h1>
      <JuegoForm onAdd={handleAdd} />
      {loading ? <p>Cargando...</p> : <JuegoList juegos={juegos} onDelete={handleDelete} />}
    </div>
  );
}

export default App;
