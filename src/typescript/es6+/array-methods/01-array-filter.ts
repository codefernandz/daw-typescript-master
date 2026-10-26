import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa del Método Array.prototype.filter()
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y evaluación de
// la extracción inmutable de subconjuntos de datos mediante predicados booleanos.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Filtrado Inmutable con Array.prototype.filter()");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos
// ================================================================================
// Contratos de datos fuertemente tipados para el filtrado de objetos complejos.
// ================================================================================

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

// ================================================================================
// 🔍 2. Filtrado Práctico en Colecciones Primitivas (Arreglos Simples)
// ================================================================================
// Evalúa un predicado (callback que retorna true/false) para cada elemento.
// ⚠️ Regla Fundamental: .filter() SIEMPRE crea un NUEVO arreglo únicamente con
// los elementos que satisfacen la condición (devuelven true).
// ================================================================================

// [1] Filtrar números pares e impares
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers: number[] = numbers.filter((num: number): boolean => num % 2 === 0);

console.log("✅ [FILTER - Even] Colección numérica original:", numbers);
console.log("✅ [FILTER - Even] Subconjunto de números pares:", evenNumbers);

// [2] Filtrar números según un umbral dinámico (Threshold)
const threshold: number = 5;
const numbersAboveThreshold: number[] = numbers.filter((num: number): boolean => num > threshold);

console.log(`✅ [FILTER - Threshold] Números estrictamente mayores a ${threshold}:`, numbersAboveThreshold);

// [3] Filtrar por valores numéricos negativos
const mixedNumbers: number[] = [-5, -2, 0, 3, 7, -1, 4];
const negativeNumbers: number[] = mixedNumbers.filter((num: number): boolean => num < 0);

console.log("✅ [FILTER - Negatives] Subconjunto de valores negativos:", negativeNumbers);

// [4] Filtrado por rango de edad (Mayoría de edad)
const ages: number[] = [15, 18, 21, 16, 25, 30];
const adultAges: number[] = ages.filter((age: number): boolean => age >= 18);

console.log("✅ [FILTER - Ages] Edades que cumplen mayoría de edad (>= 18):", adultAges);

// ================================================================================
// 🔤 3. Filtrado de Cadenas de Texto (String Pattern Filtering)
// ================================================================================
// Operaciones de búsqueda por sub-cadenas (.includes), extensión (.length) o inicial (.startsWith).
// ================================================================================

// [1] Filtrar palabras que contienen una sub-cadena específica ('a')
const words: string[] = ["apple", "banana", "cherry", "date", "fig", "grape"];
const wordsWithA: string[] = words.filter((word: string): boolean => word.includes("a"));

console.log("✅ [FILTER - Includes] Palabras que contienen la letra 'a':", wordsWithA);

// [2] Filtrar por prefijo de texto (inicial 'b')
const fruitsStartingWithB: string[] = words.filter((fruit: string): boolean => fruit.startsWith("b"));

console.log("✅ [FILTER - StartsWith] Frutas que comienzan por la letra 'b':", fruitsStartingWithB);

// [3] Filtrar por longitud de cadena (> 4 caracteres)
const wordsList: string[] = ["cat", "dog", "elephant", "giraffe", "hippopotamus"];
const longWords: string[] = wordsList.filter((word: string): boolean => word.length > 4);

console.log("✅ [FILTER - Length] Palabras con longitud superior a 4 caracteres:", longWords);

// ================================================================================
// 📦 4. Filtrado de Objetos Complejos (Object Property Filtering)
// ================================================================================
// Filtrado de colecciones basándose en el estado o valor de las propiedades internas.
// ================================================================================

// [1] Filtrado de objetos de tipo Person por rango de edad
const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 }
];

const adults: Person[] = people.filter((person: Person): boolean => person.age >= 30);

console.log("✅ [FILTER - Objects Person] Personas con edad >= 30:", adults);

// [2] Filtrado de objetos de tipo Product por precio límite
const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 200 }
];

const expensiveProducts: Product[] = products.filter((product: Product): boolean => product.price > 400);

console.log("✅ [FILTER - Objects Product] Productos con precio superior a 400 USD:", expensiveProducts);