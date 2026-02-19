import { useEffect, useState } from "react";
import { Juego } from "./types";
import { JuegoForm } from "./components/JuegoForm";
import { JuegoList } from "./components/JuegoList";
import { getJuegos, addJuego, deleteJuego } from "./firebaseService";
import "./App.css";


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
        <h2>Introduce un nuevo juego</h2>
        <p>Rellena los campos a continuación y pulsa "Añadir juego".</p>
        <JuegoForm onAdd={handleAdd} />
      </div>

      {/* Lista de juegos */}
      <div className="card-container">
        {loading ? (
          <p style={{ textAlign: "center", marginTop: "2rem" }}>Cargando...</p>
        ) : juegos.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            No hay juegos añadidos. Introduce alguno arriba.
          </p>
        ) : (
          <>
            <h2 style={{ width: "100%", textAlign: "center", marginBottom: "1rem" }}>
              Juegos añadidos
            </h2>
            <JuegoList juegos={juegos} onDelete={handleDelete} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
