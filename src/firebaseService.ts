import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { Juego } from "./types";

// Referencia a la colección "juegos"
const juegosRef = collection(db, "juegos");

// Leer todos los juegos
export const getJuegos = async (): Promise<Juego[]> => {
  const snapshot = await getDocs(juegosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Juego));
};

// Añadir un juego
export const addJuego = async (juego: Juego) => {
  await addDoc(juegosRef, juego);
};

// Eliminar un juego
export const deleteJuego = async (id: string) => {
  await deleteDoc(doc(db, "juegos", id));
};
