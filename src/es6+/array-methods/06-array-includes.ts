import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa del Método Array.prototype.includes()
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y comprobación de
// presencia de elementos en colecciones (primitivos vs. referencias en memoria).
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Verificación de Presencia con Array.prototype.includes()");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos
// ================================================================================
// Contratos de datos fuertemente tipados para comprobaciones de presencia en objetos.
// ================================================================================

interface Person {
  name: string;
  age: number;

}

// ================================================================================
// 🔎 2. Búsqueda de Valores Primitivos (Primitives Search)
// ================================================================================
// Determina si una colección incluye un determinado elemento, devolviendo 'true' o 'false'.
// 📋 Nota: Utiliza el algoritmo SameValueZero (similar a '===' pero maneja NaN correctamente).
// ================================================================================

// [1] Colección de números
const numbers: number[] = [1, 2, 3, 4, 5];

// Comprobar presencia del número 3 (Existente)
const includesThree: boolean = numbers.includes(3);
console.log("✅ [INCLUDES - Number] El array incluye el número 3:", includesThree); // true

// Comprobar presencia del número 6 (Inexistente)
const includesSix: boolean = numbers.includes(6);
console.log("⚠️ [INCLUDES - Number] El array incluye el número 6:", includesSix); // false

// [2] Colección de cadenas de texto
const names: string[] = ["Alice", "Bob", "Charlie"];

// Comprobar presencia de la cadena "Alice" (Existente)
const includesAlice: boolean = names.includes("Alice");
console.log("✅ [INCLUDES - String] El array incluye 'Alice':", includesAlice); // true

// Comprobar presencia de la cadena "David" (Inexistente)
const includesDavid: boolean = names.includes("David");
console.log("⚠️ [INCLUDES - String] El array incluye 'David':", includesDavid); // false

// ================================================================================
// 📦 3. Comprobación en Objetos y Referencias (Reference vs Value)
// ================================================================================
// Demostración del comportamiento de .includes() con tipos por referencia.
// ⚠️ Precaución Fundamental: Dos objetos con las MISMAS propiedades NO son iguales
// si están alojados en direcciones de memoria distintas.
// ================================================================================

// [1] Instanciación del listado de objetos
const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

// [2] Búsqueda por literal de objeto (Diferente referencia en memoria -> Retorna false)
const includesAliceObject: boolean = people.includes({ name: "Alice", age: 25 });
console.log(
  "⚠️ [INCLUDES - Object Literal] El array incluye { name: 'Alice', age: 25 }:",
  includesAliceObject
); // false (falla por comparación de referencia)

// [3] Búsqueda usando la referencia exacta en memoria (Misma referencia -> Retorna true)
const aliceReference: Person = people[0];
const includesAliceReference: boolean = people.includes(aliceReference);
console.log(
  "✅ [INCLUDES - Object Reference] El array incluye la referencia exacta de Alice:",
  includesAliceReference
); // true