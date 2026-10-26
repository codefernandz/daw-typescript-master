import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Entorno de Pruebas
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el análisis de estructuras iterativas
// ================================================================================
separator("=", "Demostración de bucles en TypeScript");

// ================================================================================
// 🔄 Loop: While
// ================================================================================
// [1] Estructura de control de flujo que permite ejecutar un bloque de código mientras una condición booleana sea verdadera
// [2] Se evalúa la condición antes de cada iteración, por lo que si la condición es falsa desde el inicio, el bloque de código no se ejecutará
// [3] Útil para casos donde no se conoce de antemano el número de iteraciones necesarias, y se requiere una evaluación dinámica de la condición
// ================================================================================
separator("=", "Loop: While");

let whileIterationCounter: number = 0;
while (whileIterationCounter < 5) {
  console.log("✅ [LOOPS] While loop iteration:", whileIterationCounter);
  whileIterationCounter++;
}

// ================================================================================
// 🔄 Loop: Do-While
// ================================================================================
// [1] Similar al bucle while, pero garantiza que el bloque de código se ejecute al menos una vez antes de evaluar la condición
// [2] Útil cuando se necesita ejecutar una acción inicial antes de verificar la condición de continuación
// [3] Se puede combinar con condicionales y operadores lógicos para crear flujos de control más complejos
// ================================================================================
separator("=", "Loop: Do-While");

let doWhileIterationCounter: number = 0;
do {
  console.log("✅ [LOOPS] Do-While loop iteration:", doWhileIterationCounter);
  doWhileIterationCounter++;
} while (doWhileIterationCounter < 5);

// ================================================================================
// 🔄 Loop: For
// ================================================================================
// [1] Estructura de control de flujo que permite ejecutar un bloque de código un número determinado de veces
// [2] Se compone de tres partes: inicialización, condición y actualización, que se evalúan en cada iteración
// [3] Es ideal para iterar sobre rangos de valores o colecciones de datos cuando se conoce el número de iteraciones de antemano
// ================================================================================
separator("=", "Loop: For");

for (let currentStep: number = 0; currentStep < 5; currentStep++) {
  console.log("✅ [LOOPS] For loop iteration:", currentStep);
}

// ================================================================================
// 📋 Acceder a elementos de un array con bucles: For
// ================================================================================
// [1] Se puede utilizar un bucle for para iterar sobre los índices de un array y acceder a sus elementos
// [2] Esto permite realizar operaciones sobre cada elemento del array de manera controlada y secuencial
// [3] Es una técnica común para procesar colecciones de datos en aplicaciones de TypeScript
// ================================================================================
separator("=", "Accessing Array Elements with For Loop");

const targetFruits: string[] = ["🍎", "🍌", "🍇", "🍓", "🍍"];

for (let fruitIndex: number = 0; fruitIndex < targetFruits.length; fruitIndex++) {
  console.log(`✅ [LOOPS] Fruit at index ${fruitIndex}:`, targetFruits[fruitIndex]);
}

// ================================================================================
// 🛰️ Loops anidados: For dentro de For
// ================================================================================
// [1] Permite iterar sobre estructuras de datos multidimensionales, como matrices o arrays de arrays
// [2] Cada bucle interno se ejecuta completamente para cada iteración del bucle externo, creando un patrón de iteración en profundidad
// [3] Es útil para procesar datos tabulares o realizar combinaciones de elementos de diferentes colecciones
// ================================================================================
separator("=", "Nested Loops: For inside For");

const dataMatrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let rowIndex: number = 0; rowIndex < dataMatrix.length; rowIndex++) {
  for (let columnIndex: number = 0; columnIndex < dataMatrix[rowIndex].length; columnIndex++) {
    console.log(`✅ [LOOPS] Matrix element at [${rowIndex}][${columnIndex}]:`, dataMatrix[rowIndex][columnIndex]);
  }
}

const sourceFruitNames: string[] = ['Apple', 'Banana', 'Cherry', 'Strawberry', 'Pineapple'];
const computedFruitLengths: number[] = [];

// Refactorización Clean Code: Eliminación de la redundancia del sub-bucle interno innecesario para mapear longitudes
for (let nameIndex = 0; nameIndex < sourceFruitNames.length; nameIndex++) {
  const currentFruitName: string = sourceFruitNames[nameIndex];
  computedFruitLengths[nameIndex] = currentFruitName.length;
}
console.log(`✅ [LOOPS] All fruit lengths:`, computedFruitLengths);

// ================================================================================
// 🔄 Loop: For...of
// ================================================================================
// [1] Estructura de control de flujo que permite iterar directamente sobre los valores de una colección iterable, como arrays o strings
// [2] Simplifica la sintaxis al eliminar la necesidad de manejar índices manualmente, mejorando la legibilidad del código
// [3] Es especialmente útil cuando no se necesita modificar los elementos durante la iteración, sino simplemente acceder a ellos
// ================================================================================
separator("=", "Loop: For...of");

for (const singleFruit of targetFruits) {
  console.log("✅ [LOOPS] For...of loop fruit:", singleFruit);
}

const analyticalNumbers: number[] = [10, 20, 30, 40, 50];
for (const currentNumber of analyticalNumbers) {
  console.log("✅ [LOOPS] For...of loop number:", currentNumber);
}

// ================================================================================
// 🔑 Loop For para recorrer un objeto
// ================================================================================
// [1] Se puede utilizar un bucle for...of combinado con Object.keys() para iterar de forma limpia sobre las propiedades de un objeto
// [2] Esto permite procesar dinámicamente los datos de un objeto sin necesidad de conocer sus propiedades de antemano
// [3] Requiere la aserción de tipos 'keyof typeof' para asegurar el tipado correcto de la clave en TypeScript
// ================================================================================
separator("=", "Loop For to iterate over an object");

const systemAccount = {
  email: 'john.doe@example.com',
  password: 'securepassword123',
  username: 'johndoe',
};

const extractedAccountKeys = Object.keys(systemAccount);
console.log("✅ [LOOPS] All keys of the user object:", extractedAccountKeys);

for (const propertyKey of extractedAccountKeys) {
  // Nota técnica: Aseguramos el tipado dinámico indexado mapeando la clave con el esquema estricto del objeto
  const accountValue = systemAccount[propertyKey as keyof typeof systemAccount];
  console.log(`✅ [LOOPS] User property: ${propertyKey}, Value: ${accountValue}`);
}

// ================================================================================
// 👤 Loop: For...in
// ================================================================================
// [1] Estructura de control de flujo que permite iterar sobre las propiedades enumerables de un objeto, incluyendo arrays y objetos literales
// [2] Devuelve las claves (índices o nombres de propiedades) en lugar de los valores, lo que permite acceder a los elementos mediante sus claves
// [3] Nota técnica: Se incluye la validación hasOwnProperty() para ignorar propiedades heredadas a través de la cadena de prototipos
// ================================================================================
separator("=", "Loop: For...in");

for (const propertyKey in systemAccount) {
  if (systemAccount.hasOwnProperty(propertyKey)) {
    const accountValue = systemAccount[propertyKey as keyof typeof systemAccount];
    console.log(`✅ [LOOPS] User property: ${propertyKey}, Value: ${accountValue}`);
  }
}

// ================================================================================
// 🔌 Loop: For Each
// ================================================================================
// [1] Método de los arrays que permite ejecutar una función para cada elemento del array, proporcionando acceso al valor, índice y array completo
// [2] Es una alternativa más funcional y declarativa a los bucles tradicionales, mejorando la legibilidad del código
// [3] No permite el uso de break o return para salir del bucle, por lo que se recomienda para operaciones que deben aplicarse a todos los elementos
// ================================================================================
separator("=", "Loop: For Each");

const paletteColors: string[] = ["Red", "Green", "Blue", "Yellow", "Purple"];

paletteColors.forEach((currentColor, colorIndex) => {
  console.log(`✅ [LOOPS] For Each loop color at index ${colorIndex}:`, currentColor);
});