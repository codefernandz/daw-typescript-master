import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 26
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el filtrado multicriterio de audio
// ================================================================================
separator("Ejercicio 26: Generador de Playlist por Género y Duración");

// Definición de la estructura de datos para una canción
interface Song {
  title: string;
  genre: string;
  duration: number;
}

// Colección original de canciones con tipado estricto e inmutable
const musicLibrary: Song[] = [
  { title: "Bohemian Rhapsody", genre: "Rock", duration: 5.55 },
  { title: "Stairway to Heaven", genre: "Rock", duration: 7.58 },
  { title: "Billie Jean", genre: "Pop", duration: 4.54 },
  { title: "Hotel California", genre: "Rock", duration: 6.31 },
  { title: "Sweet Child o Mine", genre: "Rock", duration: 5.56 },
  { title: "Smells Like Teen Spirit", genre: "Rock", duration: 5.01 },
  { title: "Comfortably Numb", genre: "Rock", duration: 6.23 },
  { title: "Wish You Were Here", genre: "Rock", duration: 5.34 },
  { title: "Black Dog", genre: "Rock", duration: 4.54 },
  { title: "Thunderstruck", genre: "Rock", duration: 4.52 },
  { title: "Crazy Love", genre: "Pop", duration: 3.52 },
];

// Filtros parametrizados para la lista de reproducción
const targetGenre: string = "Rock";
const minDurationMinutes: number = 5.0;

// ================================================================================
// 🧮 Algoritmo: Filtrado Multicriterio de Canciones
// ================================================================================
// [1] Recibe la biblioteca completa de temas y los criterios de corte de género y duración
// [2] Aplica un filtrado declarativo con '.filter()' para extraer solo las coincidencias exactas
// [3] Nota técnica: Mantiene la inmutabilidad de la biblioteca base retornando una nueva colección
// ================================================================================
function filterPlaylistByGenreAndDuration(
  songsList: Song[],
  genreFilter: string,
  minDuration: number
): Song[] {
  return songsList.filter(
    (currentSong: Song) => currentSong.genre === genreFilter && currentSong.duration > minDuration
  );
}

// Ejecución del algoritmo e impresión de resultados
const longRockPlaylist: Song[] = filterPlaylistByGenreAndDuration(
  musicLibrary,
  targetGenre,
  minDurationMinutes
);

console.log("✅ [LIBRARY] Biblioteca musical analizada:", musicLibrary);
console.log(
  `✅ [RESULT] Playlist de "${targetGenre}" con duración superior a ${minDurationMinutes} min:`,
  longRockPlaylist
);