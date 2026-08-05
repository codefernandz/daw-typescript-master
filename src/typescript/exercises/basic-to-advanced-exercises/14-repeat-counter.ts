import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 14
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el conteo de frecuencias en diccionarios
// ================================================================================
separator("Ejercicio 14: Contador de Repeticiones");

// Colección de prueba con tipado explícito e inmutable
const targetWordsCollection: string[] = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

// Definición de la interfaz del diccionario de frecuencias
interface WordFrequencyRegistry {
  [wordKey: string]: number;
}

// ================================================================================
// 🧮 Algoritmo: Contador de Repeticiones
// ================================================================================
// [1] Crea una función que tome un arreglo de palabras en formato string
// [2] Reduce el arreglo acumulando las ocurrencias de cada palabra en un objeto literal clave-valor
// [3] Nota técnica: Se utiliza la asignación con cortocircuito '|| 0' para inicializar elementos inexistentes de manera segura
// ================================================================================
function countWordRepetitions(wordsList: string[]): WordFrequencyRegistry {
  // Enfoque declarativo inmutable utilizando acumulación en objeto de tipo WordFrequencyRegistry
  return wordsList.reduce((accumulator: WordFrequencyRegistry, currentWord: string) => {
    accumulator[currentWord] = (accumulator[currentWord] || 0) + 1;
    return accumulator;
  }, {});
}

// Ejecución y captura del mapa de conteo de frecuencias
const wordsFrequencyResult: WordFrequencyRegistry = countWordRepetitions(targetWordsCollection);

console.log("✅ [ANALYSIS] Original words list:", targetWordsCollection);
console.log("✅ [RESULT] Conteo de repeticiones mapeado:", wordsFrequencyResult);