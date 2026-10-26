import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa del Método Array.prototype.find()
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y evaluación de
// búsqueda del PRIMER elemento que cumpla con la condición dada.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Búsqueda Puntual con Array.prototype.find()");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos
// ================================================================================
// Contratos de datos fuertemente tipados para búsquedas en colecciones de objetos.
// ================================================================================

interface Person {
  name: string;
  age: number;
}

// ================================================================================
// 🔎 2. Búsquedas en Colecciones Primitivas (Arreglos Simples)
// ================================================================================
// Retorna el PRIMER elemento que hace que el predicado devuelva true.
// ⚠️ Regla Fundamental: A diferencia de .filter(), .find() se detiene en la primera
// coincidencia. Si ningún elemento cumple la condición, retorna 'undefined'.
// ================================================================================

// [1] Colección numérica de prueba
const numbers: number[] = [1, 2, 3, 4, 5];

// [2] Encontrar el primer número estrictamente mayor que 3
const foundNumber: number | undefined = numbers.find((num: number): boolean => num > 3);

console.log("✅ [FIND - Greater Than] Primer número > 3 encontrado:", foundNumber); // 4

// [3] Encontrar el primer número par
const foundEvenNumber: number | undefined = numbers.find((num: number): boolean => num % 2 === 0);

console.log("✅ [FIND - Even] Primer número par encontrado:", foundEvenNumber); // 2

// [4] Búsqueda sin coincidencias (Manejo de resultado undefined)
const notFoundNumber: number | undefined = numbers.find((num: number): boolean => num > 10);

console.log("⚠️ [FIND - Not Found] Resultado al buscar valor inexistente (> 10):", notFoundNumber); // undefined

// [5] Búsqueda de cadenas por longitud (> 5 caracteres)
const names: string[] = ["Alice", "Bob", "Charlie", "David"];
const foundName: string | undefined = names.find((name: string): boolean => name.length > 5);

console.log("✅ [FIND - String Length] Primer nombre con más de 5 caracteres:", foundName); // Charlie

// ================================================================================
// 📦 3. Búsqueda en Colecciones de Objetos (Object Search)
// ================================================================================
// Localización rápida de registros o entidades por propiedades únicas o criterios de rango.
// ================================================================================

// [1] Instanciación del listado de personas
const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// [2] Encontrar la primera persona con edad mayor a 30
const foundPerson: Person | undefined = people.find((person: Person): boolean => person.age > 30);

console.log("✅ [FIND - Object Condition] Primera persona con edad > 30:", foundPerson); // { name: 'Charlie', age: 35 }

// [3] Encontrar una persona por coincidencia exacta de nombre
const foundSpecificPerson: Person | undefined = people.find((person: Person): boolean => person.name === "Bob");

console.log("✅ [FIND - Exact Match] Objeto encontrado por nombre exacto ('Bob'):", foundSpecificPerson); // { name: 'Bob', age: 30 }