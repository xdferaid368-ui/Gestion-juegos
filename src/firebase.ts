// Importar funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu Firebase (ya real)
const firebaseConfig = {
  apiKey: "AIzaSyAEnbybGK6MEKbOBNsKalLIM4cgW5gi92o",
  authDomain: "gestion-juegos.firebaseapp.com",
  projectId: "gestion-juegos",
  storageBucket: "gestion-juegos.firebasestorage.app",
  messagingSenderId: "74726648690",
  appId: "1:74726648690:web:0b4f2c9c91117e22714beb",
  measurementId: "G-CH3ZQLR4TG"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore para usarlo en CRUD
export const db = getFirestore(app);
