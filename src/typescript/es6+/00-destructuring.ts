import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Desestructuración (Destructuring) en TS
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación de
// la extracción inmutable de datos en objetos y arreglos.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Técnicas Avanzadas de Desestructuración (Destructuring)");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos
// ================================================================================
// Contratos de datos fuertemente tipados para los ejemplos de desestructuración.
// ================================================================================

interface Person {
  name: string;
  age: number;
  city: string;
}

interface NestedDetails {
  title: string;
  description: string;
}

interface NestedObject {
  id: number;
  details: NestedDetails;
}

// ================================================================================
// 📦 2. Desestructuración de Arreglos (Array Destructuring)
// ================================================================================
// Extracción posicional de elementos en arreglos e inclusión del operador Rest (...).
// ⚠️ Nota: La extracción se basa en la POSICIÓN de los elementos, no en su nombre.
// ================================================================================

// [1] Declaración e inicialización del arreglo base
const numbers: number[] = [1, 2, 3, 4, 5];

// [2] Extracción por posición y captura del residuo con el operador Rest (...)
const [firstNumber, secondNumber, ...restNumbers] = numbers;

// [3] Confirmación y trazabilidad en consola
console.log("✅ [ARRAY - Destructure] Primer elemento:", firstNumber);
console.log("✅ [ARRAY - Destructure] Segundo elemento:", secondNumber);
console.log("✅ [ARRAY - Destructure] Sub-arreglo remanente (Rest):", restNumbers);

// ================================================================================
// 🧩 3. Desestructuración de Objetos (Object Destructuring)
// ================================================================================
// Extracción de valores a variables independientes emparejadas por clave (Key).
// ⚠️ Nota: A diferencia de los arreglos, aquí el ORDEN no importa, solo el NOMBRE de la propiedad.
// ================================================================================

// [1] Instanciación del objeto Person fuertemente tipado
const person: Person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

// [2] Extracción directa de claves emparejadas con las propiedades del objeto
const { name: personName, age: personAge, city: personCity } = person;

// [3] Salida de datos en consola
console.log(`✅ [OBJECT - Destructure] Nombre: ${personName}`);
console.log(`✅ [OBJECT - Destructure] Edad: ${personAge} años`);
console.log(`✅ [OBJECT - Destructure] Ciudad: ${personCity}`);

// ================================================================================
// 🏗️ 4. Desestructuración Anidada (Nested Object Destructuring)
// ================================================================================
// Extracción profunda en estructuras de datos con múltiples niveles de jerarquía.
// ⚠️ Precaución: Intentar desestructurar propiedades de un objeto padre 'undefined' lanzará un TypeError.
// ================================================================================

// [1] Declaración de un objeto con propiedades complejas anidadas
const nestedObject: NestedObject = {
  id: 101,
  details: {
    title: "Módulo de Arquitectura",
    description: "Patrones de diseño y desestructuración en TypeScript."
  }
};

// [2] Extracción directa navegando al nivel interno 'details'
const {
  details: { title: detailTitle, description: detailDescription }
} = nestedObject;

// [3] Confirmación de la extracción profunda
console.log(`✅ [NESTED - Destructure] Título extraído: "${detailTitle}"`);
console.log(`✅ [NESTED - Destructure] Descripción extraída: "${detailDescription}"`);

// ================================================================================
// 🔄 5. Intercambio de Variables (Variable Swap)
// ================================================================================
// Permutación del contenido entre dos variables de forma atómica e inmutable.
// 📋 Nota: Elimina la necesidad de declarar una variable auxiliar temporal (temp).
// ================================================================================

// [1] Declaración inicial de variables
let variableA: number = 10;
let variableB: number = 20;

console.log(`🔄 [SWAP - Pre] Estado inicial: A = ${variableA}, B = ${variableB}`);

// [2] Permutación rápida mediante sintaxis de desestructuración de arreglos
[variableA, variableB] = [variableB, variableA];

// [3] Confirmación de intercambio en consola
console.log(`✅ [SWAP - Post] Estado intercambiado: A = ${variableA}, B = ${variableB}`);