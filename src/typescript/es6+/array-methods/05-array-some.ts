import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa del Método Array.prototype.some()
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y evaluación de
// comprobaciones parciales donde AL MENOS UN elemento debe cumplir un predicado.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Validación Parcial de Condición con Array.prototype.some()");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos
// ================================================================================
// Contratos de datos fuertemente tipados para validaciones en colecciones.
// ================================================================================

interface Person {
  name: string;
  age: number;
}

// ================================================================================
// 🔎 2. Evaluaciones de Validación Parcial (Boolean Predicate Testing)
// ================================================================================
// Retorna 'true' si AL MENOS UN elemento de la colección hace que el predicado sea 'true'.
// ⚠️ Regla de Rendimiento (Cortocircuito): .some() se detiene e inmediatamente retorna
// 'true' tan pronto como encuentra la PRIMERA coincidencia que satisface la condición.
// ================================================================================

// [1] Colecciones base de prueba
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Alice", "Bob", "Charlie", "David"];

// [2] Comprobar si al menos un número es mayor que 4
const hasNumberGreaterThanFour: boolean = numbers.some(
  (num: number): boolean => num > 4
);

console.log("✅ [SOME - Greater Than Four] Al menos un número es mayor que 4:", hasNumberGreaterThanFour); // true

// [3] Comprobar si al menos un nombre tiene más de 5 caracteres
const hasLongName: boolean = names.some(
  (name: string): boolean => name.length > 5
);

console.log("✅ [SOME - Long Name] Al menos un nombre tiene más de 5 caracteres:", hasLongName); // true ("Charlie" cumple)

// [4] Comprobar si al menos un número de la colección es par
const hasEvenNumber: boolean = numbers.some(
  (num: number): boolean => num % 2 === 0
);

console.log("✅ [SOME - Even Number] Al menos un número es par:", hasEvenNumber); // true (2 y 4 cumplen)

// [5] Comprobar si al menos un nombre contiene la letra 'a' (Insensible a mayúsculas/minúsculas)
const hasNameWithA: boolean = names.some(
  (name: string): boolean => name.toLowerCase().includes("a")
);

console.log("✅ [SOME - Contains 'a'] Al menos un nombre contiene la letra 'a':", hasNameWithA); // true ("Alice", "Charlie" cumplen)

// [6] Comprobar si al menos un número es negativo (Caso de no coincidencia)
const hasNegativeNumber: boolean = numbers.some(
  (num: number): boolean => num < 0
);

console.log("⚠️ [SOME - Negative Number] Al menos un número es negativo:", hasNegativeNumber); // false (ninguno cumple)

// [7] Comprobar si al menos un nombre coincide exactamente con "Bob"
const hasNameBob: boolean = names.some(
  (name: string): boolean => name === "Bob"
);

console.log("✅ [SOME - Exact Match] Al menos un nombre es exactamente 'Bob':", hasNameBob); // true ("Bob" cumple)

// ================================================================================
// 📦 3. Validación en Colecciones de Objetos (Object Condition Verification)
// ================================================================================
// Verificación rápida para detectar la presencia de entidades específicas o estados.
// ================================================================================

// [1] Instanciación del listado de personas
const people: Person[] = [
  { name: "Alice", age: 16 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 17 }
];

// [2] Comprobar si al menos una persona en la lista es mayor de edad (>= 18)
const hasAdult: boolean = people.some(
  (person: Person): boolean => person.age >= 18
);

console.log("✅ [SOME - Object Evaluation] ¿Existe al menos un mayor de edad en la lista?:", hasAdult); // true ("Bob" cumple)