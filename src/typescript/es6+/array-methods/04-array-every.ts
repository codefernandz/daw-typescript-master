import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa del Método Array.prototype.every()
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y evaluación de
// validaciones totales donde TODOS los elementos deben cumplir un predicado.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Validación Total de Condición con Array.prototype.every()");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos
// ================================================================================
// Contratos de datos fuertemente tipados para validaciones complejas de objetos.
// ================================================================================

interface Person {
  name: string;
  age: number;
}

// ================================================================================
// 🔎 2. Evaluaciones de Validación Total (Boolean Predicate Testing)
// ================================================================================
// Retorna 'true' ÚNICAMENTE si el predicado se cumple para cada uno de los elementos.
// ⚠️ Regla de Rendimiento (Cortocircuito): .every() interrumpe la iteración e
// inmediatamente retorna 'false' en cuanto encuentra el PRIMER elemento que no cumpla.
// ================================================================================

// [1] Colecciones base de prueba
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Alice", "Bob", "Charlie"];

// [2] Comprobar si todos los números son estrictamente positivos
const allPositive: boolean = numbers.every((num: number): boolean => num > 0);

console.log("✅ [EVERY - All Positive] Todos los números son positivos:", allPositive); // true

// [3] Comprobar si todos los nombres tienen una longitud estrictamente mayor a 3 caracteres
const allLongNames: boolean = names.every((name: string): boolean => name.length > 3);

console.log("⚠️ [EVERY - Name Length] Todos los nombres tienen más de 3 caracteres:", allLongNames); // false ("Bob" falla)

// [4] Comprobar si todos los números de la colección son pares
const allEven: boolean = numbers.every((num: number): boolean => num % 2 === 0);

console.log("⚠️ [EVERY - All Even] Todos los números son pares:", allEven); // false (1 falla)

// [5] Comprobar si todas las cadenas contienen la letra 'a' (Insensible a mayúsculas/minúsculas)
const allContainA: boolean = names.every((name: string): boolean => name.toLowerCase().includes("a"));

console.log("⚠️ [EVERY - Contains 'a'] Todos los nombres contienen la letra 'a':", allContainA); // false ("Bob" falla)

// ================================================================================
// 📦 3. Validación de Reglas de Negocio en Objetos (Object Validation)
// ================================================================================
// Verificación de integridad donde toda la lista de entidades debe satisfacer una regla.
// ================================================================================

// [1] Instanciación del listado de registros
const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// [2] Verificar si todos los registros cumplen con la mayoría de edad (>= 18)
const allAdults: boolean = people.every((person: Person): boolean => person.age >= 18);

console.log("✅ [EVERY - All Adults] Todos los registros cumplen mayoría de edad:", allAdults); // true