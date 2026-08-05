import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 13
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para la búsqueda e indexación de colecciones
// ================================================================================
separator("Ejercicio 13: Buscador de Nombres");

// Colección de prueba con tipado explícito e inmutable
const targetNamesRegistry: string[] = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

// Definición estricta de la estructura de retorno para la búsqueda
interface NameSearchResult {
  exists: boolean;
  position: number | null;
}

// ================================================================================
// 🧮 Algoritmo: Buscador de Nombres
// ================================================================================
// [1] Busca de forma secuencial la primera coincidencia exacta de un string dentro del array
// [2] Retorna un objeto estructurado bajo la interfaz contractual 'NameSearchResult'
// [3] Nota técnica: Se utiliza '.indexOf()' para evaluar y capturar el índice en runtime (-1 indica inexistencia)
// ================================================================================
function findNameInRegistry(namesCollection: string[], targetNameToFind: string): NameSearchResult {
  const elementIndex: number = namesCollection.indexOf(targetNameToFind);
  const doesElementExist: boolean = elementIndex !== -1;

  return {
    exists: doesElementExist,
    position: doesElementExist ? elementIndex : null,
  };
}

// Configuración de la búsqueda de prueba
const selectedSearchName: string = "Natasha";
const searchExecutionResult: NameSearchResult = findNameInRegistry(targetNamesRegistry, selectedSearchName);

console.log(`✅ [SEARCH] Target name: "${selectedSearchName}"`);
console.log(
  `✅ [RESULT] El nombre "${selectedSearchName}" ${searchExecutionResult.exists ? "existe" : "no existe"}. ` +
  `Posición capturada: ${searchExecutionResult.position}`
);