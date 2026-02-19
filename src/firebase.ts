import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { Juego } from "./types";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};


const juegosRef = collection(db, "juegos");

export const getJuegos = async (): Promise<Juego[]> => {
  const snapshot = await getDocs(juegosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Juego));
};

export const addJuego = async (juego: Juego) => {
  await addDoc(juegosRef, juego);
};

export const deleteJuego = async (id: string) => {
  await deleteDoc(doc(db, "juegos", id));
};
