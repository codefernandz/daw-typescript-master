import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 29
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para la agrupación cronológica por décadas
// ================================================================================
separator("Ejercicio 29: Agrupador de Películas de Star Wars por Década");

// Definición de la estructura de datos para una película de la saga
interface StarWarsMovie {
  title: string;
  releaseYear: number;
}

// Tipo de objeto agrupador con llaves dinámicas para las décadas
type MoviesByDecade = Record<string, StarWarsMovie[]>;

// Colección original de películas con tipado estricto e inmutable
const starWarsSagaCatalog: StarWarsMovie[] = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 }
];

// ================================================================================
// 🧮 Algoritmo: Agrupamiento Dinámico por Década (Math Floor)
// ================================================================================
// [1] Recorre la saga cinematográfica y calcula la década usando truncamiento matemático
// [2] Acumula en un objeto dinámico 'MoviesByDecade' sin mutar la colección original
// [3] Nota técnica: Se emplea 'Record<string, StarWarsMovie[]>' para permitir claves dinámicas en TS
// ================================================================================
function groupMoviesByDecade(moviesList: StarWarsMovie[]): MoviesByDecade {
  return moviesList.reduce((accumulator: MoviesByDecade, currentMovie: StarWarsMovie) => {
    // Cálculo de la década (ej: 1977 -> 197 -> 1970) + sufijo 's' para formato legible ("1970s")
    const decadeKey: string = `${Math.floor(currentMovie.releaseYear / 10) * 10}s`;

    // Si la década no existe aún en el acumulador, la inicializamos con un array vacío
    if (!accumulator[decadeKey]) {
      accumulator[decadeKey] = [];
    }

    // Insertamos la película en su década correspondiente
    accumulator[decadeKey].push(currentMovie);

    return accumulator;
  }, {});
}

// Ejecución del algoritmo e impresión de resultados
const groupedStarWarsCatalog: MoviesByDecade = groupMoviesByDecade(starWarsSagaCatalog);

console.log("✅ [CATALOG] Saga completa procesada:", starWarsSagaCatalog);
console.log("✅ [RESULT] Películas agrupadas por década de estreno:", groupedStarWarsCatalog);