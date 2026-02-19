import { Juego, Categoria } from "./types";

export const juegosMock: Juego[] = [
  { id: "1", nombre: "Catan", jugadoresMin: 3, jugadoresMax: 4, categoria: Categoria.Estrategia, puntuacion: 9 },
  { id: "2", nombre: "Dixit", jugadoresMin: 3, jugadoresMax: 6, categoria: Categoria.Familiar, puntuacion: 8 },
];
