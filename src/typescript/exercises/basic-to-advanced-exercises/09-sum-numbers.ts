import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 09
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el análisis de reducción de arreglos
// ================================================================================
separator("Ejercicio 09: Suma de Números");

// Colección de prueba con tipado explícito e inmutable
const sampleNumbersCollection: number[] = [1, 2, 3, 5, 45, 37, 58];

// ================================================================================
// 🧮 Algoritmo: Suma de Números
// ================================================================================
// [1] Completa la función denominada sumNumbers que toma un array de números como argumento
// [2] Retorna de forma declarativa la suma acumulada de todos los elementos de la colección
// [3] Nota técnica: Se utiliza el método inmutable '.reduce()' para evitar la mutación de variables externas
// ================================================================================
function sumNumbers(targetNumbersList: number[]): number {
  // Enfoque funcional y declarativo con un acumulador inicializado en 0
  return targetNumbersList.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
}

// Ejecución y captura del resultado del proceso aritmético
const calculatedTotalAmount: number = sumNumbers(sampleNumbersCollection);

console.log("✅ [MATH] Original Collection:", sampleNumbersCollection);
console.log("✅ [MATH] Suma total acumulada:", calculatedTotalAmount);