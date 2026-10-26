import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Entorno de Pruebas
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el análisis de colecciones indexadas
// ================================================================================
separator("=", "Demostración de arreglos en TypeScript");

// ================================================================================
// 📋 Array: Colecciones indexadas
// ================================================================================
// [1] Creación de arreglos con tipado explícito y de unión para estructuras mixtas
// [2] Los arreglos se almacenan por referencia en el Heap de memoria del motor de JS
// [3] Demostración de acceso a elementos mediante índices y métodos de iteración
// ================================================================================
separator("=", "Definición de Arreglos");

const favoriteFruits: string[] = ["🍎", "🍌", "🍇", "🍉", "🍓"];
const luckyNumbers: number[] = [1, 2, 3, 4, 5];
const validationFlags: boolean[] = [true, false, true, false];

// Array con tipos de unión (Heterogéneo): Permite múltiples estructuras primitivas y complejas
const heterogeneousCollection: (string | number | boolean | null | undefined | object)[] = [
  "Hello",
  42,
  true,
  "World",
  false,
  null,
  undefined,
  [], // Nota técnica: Considerado un subtipo de object en runtime
];

console.log("✅ [ARRAYS] Mixed Collection:", heterogeneousCollection);
console.log("✅ [ARRAYS] Fruits:", favoriteFruits);
console.log("✅ [ARRAYS] Numbers:", luckyNumbers);
console.log("✅ [ARRAYS] Booleans:", validationFlags);

// Array de objetos estructurado con un esquema estricto de interfaz inline
const trackedBikes: { brand: string; model: string; year: number }[] = [
  { brand: "Trek", model: "Domane SL 7", year: 2021 },
  { brand: "Specialized", model: "S-Works Tarmac SL7", year: 2022 },
  { brand: "Cannondale", model: "SuperSix EVO Hi-MOD Disc", year: 2020 },
];

console.log("✅ [ARRAYS] Bikes Object:", trackedBikes);

const totalTrackedBikes = trackedBikes.length;
console.log("✅ [ARRAYS] Length of Bikes Object:", totalTrackedBikes);

// ================================================================================
// 🔍 Acceso a elementos de arreglos usando índices
// ================================================================================
// [1] Los índices de los arreglos comienzan en 0 y se incrementan secuencialmente
// [2] TypeScript provee autocompletado nativo (IntelliSense) al conocer el esquema de la colección
// [3] Útil cuando conocemos la posición exacta del elemento en tiempo de desarrollo
// ================================================================================
separator("=", "Acceso a elementos de arreglos usando índices");

const targetElements: string[] = [
  "Element 1",
  "Element 2",
  "Element 3",
  "Element 4",
  "Element 5",
];
console.log("✅ [ARRAYS] Element at index 0:", targetElements[0]);
console.log("✅ [ARRAYS] Element at index 1:", targetElements[1]);
console.log("✅ [ARRAYS] Element at index 2:", targetElements[2]);
console.log("✅ [ARRAYS] Element at index 3:", targetElements[3]);
console.log("✅ [ARRAYS] Element at index 4:", targetElements[4]);

// ================================================================================
// 🔑 Acceso a elementos de arreglos usando métodos de iteración
// ================================================================================
// [1] Permite recorrer los elementos de un arreglo de manera estructurada y funcional
// [2] Indispensable para realizar operaciones directas de lectura sobre cada elemento
// [3] Requiere pasar una función de callback que se ejecutará de forma secuencial
// ================================================================================
separator("=", "Acceso a elementos de arreglos usando métodos de iteración");

targetElements.forEach((currentElement, elementIndex) => {
  console.log(`✅ [ARRAYS] Element at index ${elementIndex}:`, currentElement);
});

// ================================================================================
// 📦 Array: Métodos de manipulación y transformación
// ================================================================================
// [1] Permite agregar, eliminar, reemplazar y transformar elementos de un arreglo
// [2] Nota técnica: Distinción crítica entre métodos mutables (push, pop, splice) e inmutables (slice, concat)
// [3] Cuidado: Los métodos mutables alteran de forma directa la referencia existente en el Heap de memoria
// ================================================================================
separator("=", "Array: Métodos de manipulación y transformación");

const activeFruits: string[] = ["🍎", "🍌", "🍇", "🍓", "🍊"];
console.log("✅ [ARRAYS] Original Fruits Array:", activeFruits);

// push(): Método mutable. Agrega al final y retorna la nueva longitud del array (number)
const pushResultLength: number = activeFruits.push("🍍");
console.log("✅ [ARRAYS][PUSH] Array length after push():", pushResultLength, "Current Array:", activeFruits);

// pop(): Método mutable. Remueve el último elemento y lo retorna
const removedLastFruit: string | undefined = activeFruits.pop();
console.log("✅ [ARRAYS][POP] Removed element:", removedLastFruit, "Current Array:", activeFruits);

// shift(): Método mutable. Remueve el primer elemento, desplaza los índices y lo retorna
const removedFirstFruit: string | undefined = activeFruits.shift();
console.log("✅ [ARRAYS][SHIFT] Removed element:", removedFirstFruit, "Current Array:", activeFruits);

// unshift(): Método mutable. Agrega al inicio, desplaza los índices y retorna la nueva longitud
const unshiftResultLength: number = activeFruits.unshift("🥭");
console.log("✅ [ARRAYS][UNSHIFT] Array length after unshift():", unshiftResultLength, "Current Array:", activeFruits);

// splice(): Método mutable. Remueve/reemplaza elementos desde una posición dada y retorna los eliminados
const truncatedFruitsArray: string[] = activeFruits.splice(1, 2, "🍒", "🥝");
console.log("✅ [ARRAYS][SPLICE] Extracted elements via splice():", truncatedFruitsArray, "Current Array:", activeFruits);

// slice(): Método inmutable. Extrae una sección y devuelve una copia superficial (shallow copy) sin alterar el original
const partialFruitsSubArray: string[] = activeFruits.slice(1, 3);
console.log("✅ [ARRAYS][SLICE] Sub-array extracted via slice():", partialFruitsSubArray, "Original Array:", activeFruits);

// concat(): Método inmutable. Une dos o más arrays devolviendo una colección completamente nueva en memoria
const mergedFruitsCollection: string[] = activeFruits.concat(["🍑", "🍐"]);
console.log("✅ [ARRAYS][CONCAT] Merged array via concat():", mergedFruitsCollection, "Original Array:", activeFruits);

// indexOf(): Retorna el primer índice donde se encuentra el elemento, o -1 si no existe
const firstOccurenceIndex: number = activeFruits.indexOf("🍇");
console.log("✅ [ARRAYS][INDEX_OF] First index of '🍇':", firstOccurenceIndex);

// lastIndexOf(): Retorna el último índice donde se encuentra el elemento, o -1 si no existe
const lastOccurenceIndex: number = activeFruits.lastIndexOf("🍇");
console.log("✅ [ARRAYS][LAST_INDEX_OF] Last index of '🍇':", lastOccurenceIndex);

// includes(): Evalúa la existencia de un elemento y retorna un flag boolean explícito
const isFruitIncluded: boolean = activeFruits.includes("🍓");
console.log("✅ [ARRAYS][INCLUDES] Does the array include '🍓'?", isFruitIncluded);

// sort(): Método mutable. Ordena los elementos en el lugar (in-place) según valores Unicode
activeFruits.sort();
console.log("✅ [ARRAYS][SORT] Fruits Array after default sort():", activeFruits);

// sort() con función de comparación personalizada para orden ascendente
activeFruits.sort((previousItem, nextItem) => (previousItem > nextItem ? 1 : -1));
console.log("✅ [ARRAYS][SORT] Fruits Array after sort() Ascending:", activeFruits);

// sort() con función de comparación personalizada para orden descendente
activeFruits.sort((previousItem, nextItem) => (previousItem < nextItem ? 1 : -1));
console.log("✅ [ARRAYS][SORT] Fruits Array after sort() Descending:", activeFruits);

// reverse(): Método mutable. Invierte el orden de los elementos en el lugar (in-place)
activeFruits.reverse();
console.log("✅ [ARRAYS][REVERSE] Fruits Array after reverse():", activeFruits);

// join(): Método inmutable. Une todos los elementos en un string, separados por un delimitador
const serializedFruitsString: string = activeFruits.join(" | ");
console.log("✅ [ARRAYS][JOIN] Serialized string via join():", serializedFruitsString);

// toString(): Método inmutable. Convierte el arreglo en un string base separado por comas
const defaultFormattedString: string = activeFruits.toString();
console.log("✅ [ARRAYS][TOSTRING] Serialized string via toString():", defaultFormattedString);

// ================================================================================
// 🔄 Array: Métodos de búsqueda, filtrado y transformación
// ================================================================================
// [1] Permite buscar, filtrar y transformar elementos bajo el paradigma de programación funcional
// [2] Conservan la inmutabilidad de los datos originales retornando nuevas estructuras refinadas
// [3] Requieren funciones de callback puras que actúen como predicados lógicos o proyectores
// ================================================================================
separator("=", "Array: Métodos de búsqueda, filtrado y transformación");

// find(): Devuelve el primer elemento que cumpla con la condición del predicado, o undefined si no hay coincidencia
const matchedFruit: string | undefined = activeFruits.find((currentFruit) => currentFruit === "🍌");
console.log("✅ [ARRAYS][FIND] Matched fruit:", matchedFruit);

// reduce(): Aplica una función acumuladora sobre cada elemento para reducirlos de forma secuencial a un único valor
const concatenatedAcumulator: string = activeFruits.reduce((accumulator, currentFruit) => accumulator + currentFruit, "");
console.log("✅ [ARRAYS][REDUCE] Reduced fruits to a single string:", concatenatedAcumulator);

// filter(): Método inmutable. Genera un nuevo array compuesto solo por los elementos que pasen la validación lógica
const excludedGrapeCollection: string[] = activeFruits.filter((currentFruit) => currentFruit !== "🍇");
console.log("✅ [ARRAYS][FILTER] Filtered collection (Excluding '🍇'):", excludedGrapeCollection);

// map(): Método inmutable. Devuelve un nuevo array aplicando una proyección o mutación estética a cada elemento
const cocktailTransformedFruits: string[] = activeFruits.map((currentFruit) => currentFruit + "🍹");
console.log("✅ [ARRAYS][MAP] Mapped cocktail fruits:", cocktailTransformedFruits);

// every(): Retorna true únicamente si el 100% de los elementos cumplen la condición lógica dada
const areAllFruitsValidLength: boolean = activeFruits.every((currentFruit) => currentFruit.length === 2);
console.log("✅ [ARRAYS][EVERY] Does every single fruit have a length of 2?", areAllFruitsValidLength);

// some(): Retorna true si al menos un elemento de la colección cumple con el criterio evaluado
const isAnyStrawberryPresent: boolean = activeFruits.some((currentFruit) => currentFruit === "🍓");
console.log("✅ [ARRAYS][SOME] Is there at least one '🍓' present?", isAnyStrawberryPresent);

// findIndex(): Retorna el índice del primer elemento que cumpla el predicado, o -1 si no lo encuentra
const matchedFruitIndex: number = activeFruits.findIndex((currentFruit) => currentFruit === "🍌");
console.log("✅ [ARRAYS][FIND_INDEX] Index location of '🍌':", matchedFruitIndex);