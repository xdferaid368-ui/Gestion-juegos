import { useEffect, useState } from "react";
import { Juego } from "./types";
import { JuegoForm } from "./components/JuegoForm";
import { JuegoList } from "./components/JuegoList";
import { getJuegos, addJuego, deleteJuego } from "./firebaseService";

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
    <div>
      {/* Navbar */}
      <div className="navbar">
        <h1>Gestión de Juegos de Mesa</h1>
      </div>

      {/* Formulario */}
      <div className="form-container">
        <JuegoForm onAdd={handleAdd} />
      </div>

      {/* Lista de juegos */}
      {loading ? (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>Cargando...</p>
      ) : (
        <div className="card-container">
          <JuegoList juegos={juegos} onDelete={handleDelete} />
        </div>
      )}
    </div>
  );
}

export default App;
