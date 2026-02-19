export enum Categoria {
  Estrategia = "Estrategia",
  Familiar = "Familiar",
  Cooperativo = "Cooperativo",
  Party = "Party",
}

export interface Juego {
  id?: string; // ID generado por Firebase
  nombre: string;
  jugadoresMin: number;
  jugadoresMax: number;
  categoria: Categoria;
  puntuacion: number; // de 1 a 10
}
