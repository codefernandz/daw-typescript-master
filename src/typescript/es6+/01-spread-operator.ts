import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa del Operador Spread (...) en TypeScript
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación de
// la clonación e inmutabilidad en arreglos y objetos.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Técnicas Avanzadas del Operador Spread (...)");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos
// ================================================================================
// Contratos de datos fuertemente tipados para las operaciones con objetos.
// ================================================================================

interface Point2D {
  x: number;
  y: number;
}

interface PartialDataA {
  a: number;
  b: number;
}

interface PartialDataB {
  c: number;
  d: number;
}

type CombinedData = PartialDataA & PartialDataB;

// ================================================================================
// 📦 2. Operaciones con Arreglos (Array Spread)
// ================================================================================
// Métodos para combinar, clonar y desestructurar arreglos de forma inmutable.
// ⚠️ Nota: Spread realiza una copia SUPERFICIAL (Shallow Copy) de los elementos.
// ================================================================================

// [1] Combinar múltiples arreglos en una sola colección atómica
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];

const combinedArr: number[] = [...arr1, ...arr2];

// [2] Clonar un arreglo manteniendo inmutabilidad en la nueva referencia
const originalArr: number[] = [1, 2, 3];
const clonedArr: number[] = [...originalArr];

// [3] Expandir elementos de un arreglo como argumentos individuales para funciones
const numbers: number[] = [5, 10, 15];
const maxNumber: number = Math.max(...numbers);

// [4] Trazabilidad y confirmación en consola
console.log("✅ [ARRAY - Combine] Arreglo combinado:", combinedArr);
console.log("✅ [ARRAY - Clone] Copia independiente creada:", clonedArr);
console.log(`✅ [ARRAY - Clone] ¿Misma referencia en memoria?: ${originalArr === clonedArr}`);
console.log(`✅ [ARRAY - Math] Valor máximo encontrado: ${maxNumber}`);

// ================================================================================
// 🧩 3. Operaciones con Objetos (Object Spread)
// ================================================================================
// Combinación de propiedades, clonación inmutable y actualización directa (Overwriting).
// ⚠️ Nota: Las propiedades clonadas posteriormente con la misma clave SOBREESCRIBEN a las anteriores.
// ================================================================================

// [1] Combinar dos objetos independientes en una sola estructura compuesta
const obj1: PartialDataA = { a: 1, b: 2 };
const obj2: PartialDataB = { c: 3, d: 4 };

const combinedObj: CombinedData = { ...obj1, ...obj2 };

// [2] Clonación superficial de un objeto
const originalObj: Point2D = { x: 10, y: 20 };
const clonedObj: Point2D = { ...originalObj };

// [3] Actualizar/Sobreescribir propiedades específicas respetando el principio de inmutabilidad
const updatedObj: Point2D = { ...originalObj, y: 30 };

// [4] Confirmación de operaciones por consola
console.log("✅ [OBJECT - Combine] Objeto resultante combinado:", combinedObj);
console.log("✅ [OBJECT - Clone] Objeto clonado exitosamente:", clonedObj);
console.log(`✅ [OBJECT - Clone] ¿Misma referencia en memoria?: ${originalObj === clonedObj}`);
console.log("✅ [OBJECT - Update] Objeto original intacto:", originalObj);
console.log("✅ [OBJECT - Update] Nuevo objeto actualizado (y: 30):", updatedObj);