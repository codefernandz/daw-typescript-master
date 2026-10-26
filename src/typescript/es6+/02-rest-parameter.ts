import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Parámetros y Propiedades Rest (...)
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación de
// la recolección de argumentos dinámicos e inmutabilidad en estructuras.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Técnicas Avanzadas de Parámetros y Propiedades Rest (...)");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos
// ================================================================================
// Contratos de datos fuertemente tipados para los ejemplos de objetos.
// ================================================================================

interface Person {
  name: string;
  age: number;
  city: string;
}

interface Car {
  make: string;
  model: string;
  year: number;
  color: string;
}

// ================================================================================
// 🧮 2. Parámetros Rest en Funciones (Function Rest Parameters)
// ================================================================================
// Captura de una cantidad indefinida de argumentos de entrada dentro de un único arreglo.
// ⚠️ Regla de Sintaxis: El parámetro Rest DEBE ser siempre el ÚLTIMO en la firma de la función.
// ================================================================================

/**
 * Recibe N cantidad de números y calcula la suma total utilizando `.reduce()`.
 * @param numbers Lista indeterminada de valores numéricos a procesar.
 */
export const sumAll = (...numbers: number[]): number => {
  return numbers.reduce((acc: number, curr: number) => acc + curr, 0);
};

/**
 * Concatena una serie variable de cadenas de texto utilizando un separador personalizado.
 * @param separator Elemento delimitador que unirá cada texto.
 * @param strings Colección dinámica de cadenas de texto a concatenar.
 */
export const concatenateStrings = (separator: string, ...strings: string[]): string => {
  return strings.join(separator);
};

// [1] Demostración de sumAll con diferente cantidad de argumentos
const total1: number = sumAll(1, 2, 3);
const total2: number = sumAll(4, 5);
const total3: number = sumAll(10);

console.log("✅ [REST - Sum] Total de (1, 2, 3):", total1);
console.log("✅ [REST - Sum] Total de (4, 5):", total2);
console.log("✅ [REST - Sum] Total de (10):", total3);

// [2] Demostración de concatenateStrings con diferente cantidad de argumentos
const result1: string = concatenateStrings(", ", "Hello", "World", "TypeScript");
const result2: string = concatenateStrings(" - ", "A", "B", "C", "D");

console.log(`✅ [REST - Concatenate] Resultado 1: "${result1}"`);
console.log(`✅ [REST - Concatenate] Resultado 2: "${result2}"`);

// ================================================================================
// 🧩 3. Extraer Propiedades Rest en Objetos (Object Rest Properties)
// ================================================================================
// Separa claves específicas del objeto y agrupa todo el remanente en una nueva entidad.
// 📋 Nota: Es la forma estándar e inmutable de "eliminar" propiedades de un objeto sin mutarlo.
// ================================================================================

// [1] Instanciación del objeto Person
const person: Person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

// [2] Extracción de 'name' y agrupación de 'age' y 'city' dentro del objeto 'personRest'
const { name: extractedName, ...personRest } = person;

console.log("✅ [REST - Object] Nombre extraído:", extractedName);
console.log("✅ [REST - Object] Resto de propiedades agrupadas (personRest):", personRest);

// ================================================================================
// 🚀 4. Casos de Uso Avanzados y Combinados
// ================================================================================
// Registro dinámico de parámetros, actualización inmutable de arreglos y filtrado de llaves.
// ================================================================================

/**
 * Muestra por consola la lista de números recibidos y su resultado de suma acumulado.
 */
export const logNumbersAndSum = (...numbers: number[]): void => {
  const sum: number = numbers.reduce((acc: number, curr: number) => acc + curr, 0);
  console.log("✅ [REST - Combined] Números recibidos como arreglo:", numbers);
  console.log(`✅ [REST - Combined] Suma total calculada: ${sum}`);
};

// [1] Ejecución de función con firmas de argumentos variables
logNumbersAndSum(1, 2, 3, 4);
logNumbersAndSum(10, 20);

// [2] Actualización inmutable de arreglos (incorporación de elementos sin mutar la fuente)
const originalAvengers: string[] = ["Iron Man", "Captain America", "Thor"];
const updatedAvengers: string[] = [...originalAvengers, "Black Widow"];

console.log("✅ [REST - Array Update] Arreglo original intacto:", originalAvengers);
console.log("✅ [REST - Array Update] Nuevo arreglo extendido:", updatedAvengers);

// [3] Filtrado inmutable de propiedades en un objeto complejo
const car: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Red"
};

// Omitir 'make' y 'model' creando una entidad limpia con las especificaciones restantes
const { make, model, ...carDetails } = car;

console.log(`✅ [REST - Object Filter] Marca: ${make}`);
console.log(`✅ [REST - Object Filter] Modelo: ${model}`);
console.log("✅ [REST - Object Filter] Especificaciones restantes (carDetails):", carDetails);