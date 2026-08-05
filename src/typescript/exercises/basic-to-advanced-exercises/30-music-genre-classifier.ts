import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 30
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para la agrupación categórica por género
// ================================================================================
separator("Ejercicio 30: Clasificador Dinámico de Canciones por Género");

// Definición de la estructura de datos para una pista musical
interface Track {
  title: string;
  genre: string;
}

// Mapa de resultados agrupados dinámicamente por la clave del género
type TracksByGenre = Record<string, Track[]>;

// Colección original de canciones con tipado estricto e inmutable
const trackCatalog: Track[] = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" }
];

// ================================================================================
// 🧮 Algoritmo: Clasificación Categórica por Acumulación
// ================================================================================
// [1] Recorre el catálogo de canciones e identifica la propiedad 'genre' de cada pista
// [2] Inicializa de forma perezosa (lazy evaluation) cada categoría como un arreglo vacío si aún no existe
// [3] Nota técnica: Se utiliza 'Record<string, Track[]>' para asegurar un mapa de claves dinámicas en TS
// ================================================================================
function classifyTracksByGenre(tracksList: Track[]): TracksByGenre {
  return tracksList.reduce((accumulator: TracksByGenre, currentTrack: Track) => {
    const genreKey: string = currentTrack.genre;

    // Inicializamos el arreglo para el género si es la primera vez que se procesa
    if (!accumulator[genreKey]) {
      accumulator[genreKey] = [];
    }

    // Insertamos la pista actual en la categoría correspondiente
    accumulator[genreKey].push(currentTrack);

    return accumulator;
  }, {});
}

// Ejecución del algoritmo e impresión de resultados
const categorizedTracksResult: TracksByGenre = classifyTracksByGenre(trackCatalog);

console.log("✅ [CATALOG] Biblioteca de pistas analizada:", trackCatalog);
console.log("✅ [RESULT] Clasificación por géneros obtenida:", categorizedTracksResult);