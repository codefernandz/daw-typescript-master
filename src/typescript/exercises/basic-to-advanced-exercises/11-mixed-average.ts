import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 11
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el análisis de reducción mixta (strings y numbers)
// ================================================================================
separator("Ejercicio 11: Cálculo de Promedio Mezclado");

// Colección de prueba con tipado de unión explícito e inmutable
const sampleMixedCollection: (number | string)[] = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

// ================================================================================
// 🧮 Algoritmo: Calcular Promedio Mezclado
// ================================================================================
// [1] Crea una función que reciba por parámetro un array de tipos mixtos (number o string)
// [2] Suma los valores numéricos de forma directa y la longitud (length) de los elementos de tipo string
// [3] Nota técnica: Se utiliza '.reduce()' declarativo y se previene la división por cero si la lista está vacía
// ================================================================================
function calculateMixedAverage(targetMixedList: (number | string)[]): number {
  const totalElements: number = targetMixedList.length;

  // Evitamos divisiones por cero si el array está vacío en runtime
  if (totalElements === 0) {
    return 0;
  }

  // Acumulación declarativa evaluando dinámicamente el tipo de dato en cada iteración
  const totalAccumulatedValue: number = targetMixedList.reduce((accumulator: number, currentItem: number | string) => {
    if (typeof currentItem === "number") {
      return accumulator + currentItem;
    }
    return accumulator + currentItem.length;
  }, 0);

  return totalAccumulatedValue / totalElements;
}

// Ejecución y captura del promedio mixto calculado
const calculatedMixedAverageAmount: number = calculateMixedAverage(sampleMixedCollection);

console.log("✅ [MATH] Original Mixed Collection:", sampleMixedCollection);
console.log("✅ [MATH] Promedio mezclado calculado:", calculatedMixedAverageAmount);