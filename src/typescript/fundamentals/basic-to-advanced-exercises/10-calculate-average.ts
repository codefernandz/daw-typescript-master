import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 10
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el análisis de promedios aritméticos
// ================================================================================
separator("Ejercicio 10: Cálculo de Promedio");

// Colección de prueba con tipado explícito e inmutable
const sampleNumbersCollection: number[] = [12, 21, 38, 5, 45, 37, 6];

// ================================================================================
// 🧮 Algoritmo: Calcular Promedio
// ================================================================================
// [1] Crea una función que reciba por parámetro un array de números
// [2] Calcula la suma total y la divide por la longitud del arreglo para hallar el promedio
// [3] Nota técnica: Se maneja la validación de división por cero si la lista está vacía
// ================================================================================
function calculateAverage(targetNumbersList: number[]): number {
  const totalElements: number = targetNumbersList.length;

  // Evitamos divisiones por cero si el array está vacío en runtime
  if (totalElements === 0) {
    return 0;
  }

  // Enfoque declarativo para sumar los elementos
  const totalSum: number = targetNumbersList.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

  return totalSum / totalElements;
}

// Ejecución y captura del promedio calculado
const calculatedAverageAmount: number = calculateAverage(sampleNumbersCollection);

console.log("✅ [MATH] Original Collection:", sampleNumbersCollection);
console.log("✅ [MATH] Promedio calculado:", calculatedAverageAmount);