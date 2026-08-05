import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 23
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para la clasificación por rangos de duración
// ================================================================================
separator("Ejercicio 23: Clasificador de Películas por Duración");

// Definición de la estructura de datos para el objeto Película
interface Movie {
  name: string;
  durationInMinutes: number;
}

// Estructura del objeto contenedor de las categorías resultantes
interface MovieCategories {
  small: Movie[];
  medium: Movie[];
  large: Movie[];
}

// Colección de prueba con tipado estricto e inmutable
const targetMoviesRegistry: Movie[] = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

// ================================================================================
// 🧮 Algoritmo: Clasificación Demográfica de Metrajes
// ================================================================================
// [1] Recorre una lista de películas y las agrupa dinámicamente según su duración
// [2] Película pequeña: < 100 min | Mediana: >= 100 min y < 200 min | Grande: >= 200 min
// [3] Nota técnica: Se emplea un acumulador de tipo 'MovieCategories' para centralizar la clasificación en una sola iteración
// ================================================================================
function classifyMoviesByDuration(moviesList: Movie[]): MovieCategories {
  return moviesList.reduce(
    (accumulator: MovieCategories, currentMovie: Movie) => {
      const duration: number = currentMovie.durationInMinutes;

      if (duration < 100) {
        accumulator.small.push(currentMovie);
      } else if (duration >= 100 && duration < 200) {
        accumulator.medium.push(currentMovie);
      } else {
        accumulator.large.push(currentMovie);
      }

      return accumulator;
    },
    { small: [], medium: [], large: [] } // Estado inicial estructurado
  );
}

// Ejecución de la clasificación e impresión de resultados
const categorizedMovies: MovieCategories = classifyMoviesByDuration(targetMoviesRegistry);

console.log("✅ [ANALYSIS] Total de películas procesadas:", targetMoviesRegistry.length);
console.log("✅ [RESULT] Películas pequeñas (<100 min):", categorizedMovies.small);
console.log("✅ [RESULT] Películas medianas (>=100 min y <200 min):", categorizedMovies.medium);
console.log("✅ [RESULT] Películas grandes (>=200 min):", categorizedMovies.large);