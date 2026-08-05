import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 12
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el análisis de colecciones únicas
// ================================================================================
separator("Ejercicio 12: Eliminación de Duplicados");

// Colección de prueba con tipado explícito e inmutable
const duplicateElementsCollection: string[] = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

// ================================================================================
// 🧮 Algoritmo: Eliminación de Duplicados
// ================================================================================
// [1] Crea una función que reciba por parámetro un array de strings
// [2] Instancia un objeto 'Set' para filtrar de manera automática los elementos repetidos
// [3] Nota técnica: Se utiliza el operador spread '...' para convertir el Set nuevamente a un array de forma inmutable
// ================================================================================
function removeDuplicates(targetElementsList: string[]): string[] {
  // Enfoque moderno, declarativo y de alto rendimiento usando la API nativa de JavaScript
  return [...new Set(targetElementsList)];
}

// Ejecución y captura del nuevo arreglo sin duplicados
const sanitizedUniqueCollection: string[] = removeDuplicates(duplicateElementsCollection);

console.log("✅ [CLEANUP] Original Collection with duplicates:", duplicateElementsCollection);
console.log("✅ [CLEANUP] Sanitized Unique Collection:", sanitizedUniqueCollection);