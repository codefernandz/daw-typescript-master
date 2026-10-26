import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 28
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el cálculo acumulativo de metrajes
// ================================================================================
separator("Ejercicio 28: Acumulador de Duración por Género Musical");

// Definición de la estructura de datos para un álbum de música
interface Album {
  title: string;
  genre: string;
  duration: number;
}

// Colección original de álbumes con tipado estricto e inmutable
const musicAlbumsCatalog: Album[] = [
  { title: "Led Zeppelin IV", genre: "Rock", duration: 42.19 },
  { title: "The Dark Side of the Moon", genre: "Rock", duration: 42.49 },
  { title: "Back in Black", genre: "Rock", duration: 42.11 },
  { title: "Hotel California", genre: "Rock", duration: 43.08 },
  { title: "Abbey Road", genre: "Rock", duration: 47.23 },
  { title: "Thriller", genre: "Pop", duration: 42.19 },
  { title: "A Night at the Opera", genre: "Rock", duration: 43.08 },
  { title: "The Wall", genre: "Rock", duration: 81.00 },
  { title: "Born to Run", genre: "Rock", duration: 39.26 },
  { title: "The Joshua Tree", genre: "Rock", duration: 50.11 }
];

// Filtro parametrizado de género para la suma acumulada
const targetGenre: string = "Rock";

// ================================================================================
// 🧮 Algoritmo: Sumatoria de Duraciones por Criterio
// ================================================================================
// [1] Filtra la colección de álbumes reteniendo únicamente los del género especificado
// [2] Aplica '.reduce()' sobre la subcolección para calcular la suma de duraciones
// [3] Nota técnica: Se redondea a dos decimales para corregir imprecisiones flotantes nativas de JS
// ================================================================================
function calculateTotalDurationByGenre(albumsList: Album[], genreFilter: string): number {
  const totalRawDuration: number = albumsList
    .filter((album: Album) => album.genre === genreFilter)
    .reduce((accumulatedMinutes: number, currentAlbum: Album) => {
      return accumulatedMinutes + currentAlbum.duration;
    }, 0);

  // Redondeo seguro a 2 decimales para evitar imprecisiones de punto flotante
  return Number(totalRawDuration.toFixed(2));
}

// Ejecución del algoritmo e impresión de resultados
const totalRockMinutes: number = calculateTotalDurationByGenre(musicAlbumsCatalog, targetGenre);

console.log("✅ [CATALOG] Catálogo de discos procesado:", musicAlbumsCatalog);
console.log(`✅ [RESULT] La duración total acumulada para los álbumes de "${targetGenre}" es de ${totalRockMinutes} minutos`);