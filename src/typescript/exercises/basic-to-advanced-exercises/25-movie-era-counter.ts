import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 25
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el análisis cronológico de cine
// ================================================================================
separator("Ejercicio 25: Conteo de Películas por Época");

// Definición de la estructura de datos para una película con año de estreno
interface MovieRelease {
  title: string;
  releaseYear: number;
}

// Estructura del objeto contador de eras cinematográficas
interface EraCounts {
  before2000: number;
  from2000Onwards: number;
}

// Colección de películas original con tipado estricto e inmutable
const cinemaCatalog: MovieRelease[] = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "The Shawshank Redemption", releaseYear: 1994 },
  { title: "Pulp Fiction", releaseYear: 1994 },
  { title: "Avatar", releaseYear: 2009 },
  { title: "The Dark Knight", releaseYear: 2008 },
  { title: "Fight Club", releaseYear: 1999 },
  { title: "Forrest Gump", releaseYear: 1994 }
];

// Año pivote de corte cronológico (evitando "magic numbers" en la función)
const pivotYear: number = 2000;

// ================================================================================
// 🧮 Algoritmo: Acumulador Cronológico de Películas
// ================================================================================
// [1] Toma la lista de películas y el año pivote para clasificar los estrenos
// [2] Procesa la colección utilizando '.reduce()' para generar un reporte inmutable
// [3] Nota técnica: Se evita declarar variables mutables ('let') usando un objeto acumulador estático
// ================================================================================
function countMoviesByEra(moviesList: MovieRelease[], cutoffYear: number): EraCounts {
  return moviesList.reduce(
    (accumulator: EraCounts, currentMovie: MovieRelease) => {
      if (currentMovie.releaseYear < cutoffYear) {
        accumulator.before2000++;
      } else {
        accumulator.from2000Onwards++;
      }
      return accumulator;
    },
    { before2000: 0, from2000Onwards: 0 } // Estado inicial del contador
  );
}

// Ejecución del algoritmo e impresión de resultados
const eraAnalysisResult: EraCounts = countMoviesByEra(cinemaCatalog, pivotYear);

console.log("✅ [CATALOG] Catálogo de películas analizado:", cinemaCatalog);
console.log(`✅ [RESULT] Películas estrenadas antes del año ${pivotYear}:`, eraAnalysisResult.before2000);
console.log(`✅ [RESULT] Películas estrenadas a partir del año ${pivotYear}:`, eraAnalysisResult.from2000Onwards);