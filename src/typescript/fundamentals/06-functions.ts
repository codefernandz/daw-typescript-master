import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Entorno de Pruebas
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el análisis de firmas de funciones
// ================================================================================
separator("=", "Demostración de Funciones en TypeScript");

// ================================================================================
// 🔧 Funciones: Declaración y Llamada
// ================================================================================
// [1] Las funciones son bloques de código reutilizables que realizan tareas específicas
// [2] Se pueden declarar con parámetros y valores de retorno, permitiendo la modularidad y la abstracción
// [3] TypeScript permite tipar los parámetros y el valor de retorno para mayor seguridad y claridad en el código
// ================================================================================
separator("=", "Funciones: Declaración y Llamada");

function displayTerminalMessage(outputMessage: string): void {
  console.log("✅ [FUNCTIONS] Message:", outputMessage);
}
displayTerminalMessage("Hello, TypeScript Functions!");
displayTerminalMessage("This is a demonstration of functions in TypeScript.");

// Refactorización Clean Code: Añadimos valores por defecto para evitar 'undefined' en la impresión si se llama vacío
function executePokemonAttack(pokemonName: string = "Wild Pokemon", attackPower: number = 10): void {
  console.log(`✅ [FUNCTIONS] ${pokemonName} attacks with power ${attackPower}!`);
}
executePokemonAttack();
executePokemonAttack("Pikachu", 50);
executePokemonAttack("Charizard", 100);

// ================================================================================
// 🔧 Funciones: Parámetros y Valores de Retorno
// ================================================================================
// [1] Las funciones pueden recibir parámetros de entrada y devolver valores de salida
// [2] TypeScript permite definir tipos para los parámetros y el valor de retorno, mejorando la seguridad y la legibilidad del código
// [3] Se pueden utilizar valores predeterminados para los parámetros, lo que permite llamadas a funciones más flexibles
// ================================================================================
separator("=", "Funciones: Parámetros y Valores de Retorno");

function calculateSum(firstFactor: number, secondFactor: number): number {
  return firstFactor + secondFactor;
}
function calculateDifference(firstFactor: number, secondFactor: number): number {
  return firstFactor - secondFactor;
}
function calculateProduct(firstFactor: number, secondFactor: number): number {
  return firstFactor * secondFactor;
}

const sumResult: number = calculateSum(10, 5);
console.log("✅ [FUNCTIONS] Sum Result:", sumResult);

const differenceResult: number = calculateDifference(10, 5);
console.log("✅ [FUNCTIONS] Difference Result:", differenceResult);

const productResult: number = calculateProduct(10, 5);
console.log("✅ [FUNCTIONS] Product Result:", productResult);

// Guardas de salida (Early Return): Retornar de forma prematura simplifica la lectura evitando bloques else redundantes
function configureUserProfile(activeProfileName: string, accountEmail: string, isAdministrator: boolean): void {
  if (isAdministrator) {
    console.log(`✅ [FUNCTIONS] Admin user profile set for ${activeProfileName} with email ${accountEmail}.`);
    return;
  }
  console.log(`✅ [FUNCTIONS] Regular user profile set for ${activeProfileName} with email ${accountEmail}.`);
}

configureUserProfile("johndoe", "john.doe@example.com", true);
configureUserProfile("janedoe", "jane.doe@example.com", false);

// ================================================================================
// 🔧 Funciones: Alternativas a parametros indeterminados
// ================================================================================
// [1] TypeScript permite el uso de parámetros opcionales y valores predeterminados para manejar casos donde no se proporcionan todos los argumentos
// [2] Esto evita la necesidad de pasar valores nulos o indefinidos, mejorando la claridad y seguridad del código
// [3] Se pueden utilizar parámetros rest para manejar un número variable de argumentos, permitiendo mayor flexibilidad en las funciones
// ================================================================================
separator("=", "Funciones: Alternativas a parametros indeterminados");

function displayGranularUserInfo(
  fallbackUsername: string = "Unknown User",
  fallbackEmail: string = "unknown@example.com",
  fallbackAge: number = 0
): void {
  console.log(`✅ [FUNCTIONS] User Info: ${fallbackUsername} (${fallbackEmail} - Age: ${fallbackAge})`);
}

displayGranularUserInfo();

// ================================================================================
// 🔧 Arrow Functions
// ================================================================================
// [1] Las arrow functions son una sintaxis más concisa para declarar funciones, especialmente útiles para funciones anónimas y callbacks
// [2] Mantienen el contexto de 'this' del ámbito en el que fueron definidas, evitando problemas comunes con funciones tradicionales
// [3] Se pueden utilizar con parámetros y valores de retorno, al igual que las funciones tradicionales, pero con una sintaxis más limpia
// ================================================================================
separator("=", "Arrow Functions");

const greetSystemUser = (targetedUsername: string): void => {
  console.log(`✅ [FUNCTIONS] Hello, ${targetedUsername}!`);
};
greetSystemUser("Alice");
greetSystemUser("Bob");

const fetchDefaultHelloWorld = (): string => "Hello, World!";
console.log("✅ [FUNCTIONS] Greeting:", fetchDefaultHelloWorld());

// ================================================================================
// 🔧 Argumentos en los Arrow Functions
// ================================================================================
// [1] Las arrow functions pueden recibir argumentos de manera similar a las funciones tradicionales, permitiendo la manipulación de datos
// [2] Se pueden utilizar parámetros opcionales y valores predeterminados, al igual que en las funciones tradicionales, para mayor flexibilidad
// [3] Se pueden combinar con destructuring para acceder a propiedades de objetos o elementos de arrays de manera más directa
// ================================================================================
separator("=", "Argumentos en los Arrow Functions");

// Refactorización Clean Code: Añadido tipado explícito de parámetros y retorno a las expresiones lambda de una sola línea
const multiplyNumericValue = (baseNumber: number): number => baseNumber * 2;
console.log("✅ [FUNCTIONS] Multiply Result:", multiplyNumericValue(5));

const calculateQuadrilateralArea = (boundaryWidth: number, boundaryHeight: number): number => boundaryWidth * boundaryHeight;
const calculatedAreaResult: number = calculateQuadrilateralArea(10, 5);
console.log("✅ [FUNCTIONS] Area Result:", calculatedAreaResult);

// ================================================================================
// 🛰️ Recursión: Funciones que se llaman a sí mismas
// ================================================================================
// [1] La recursión es una técnica donde una función se llama a sí misma para resolver un problema dividiéndolo en subproblemas más pequeños
// [2] Es útil para problemas que pueden definirse en términos de sí mismos, como el cálculo de factoriales o la búsqueda en estructuras de datos jerárquicas
// [3] Se debe tener cuidado con la condición de salida para evitar bucles infinitos y desbordamientos de pila (Stack Overflow)
// ================================================================================
separator("=", "Recursión: Funciones que se llaman a sí mismas");

function calculateMathematicalFactorial(targetSequenceNumber: number): number {
  if (targetSequenceNumber === 0) {
    return 1;
  }
  return targetSequenceNumber * calculateMathematicalFactorial(targetSequenceNumber - 1);
}

const operationalNumberSample: number = 5;
console.log(`✅ [FUNCTIONS] Factorial of ${operationalNumberSample}:`, calculateMathematicalFactorial(operationalNumberSample));
console.log("✅ [FUNCTIONS] Factorial Result:", calculateMathematicalFactorial(5));


// ================================================================================
// 🔧 Funciones: Parámetros de tipo objeto
// ================================================================================
// [1] TypeScript permite definir funciones que aceptan parámetros de tipo objeto, lo que facilita el manejo de múltiples valores relacionados
// [2] Esto mejora la legibilidad y la mantenibilidad del código, ya que los parámetros se agrupan en un solo objeto con propiedades descriptivas
// [3] Se pueden utilizar interfaces o tipos inline para estructurar el objeto, garantizando validación estática y autocompletado en el IDE
// ================================================================================
separator("=", "Funciones: Parámetros de tipo objeto");

// Refactorización Clean Code: Añadido tipado explícito del retorno (: void) para mantener la consistencia
const describeUserProfile = (targetUserRecord: { username: string; email: string }): void => {
  console.log(`✅ [FUNCTIONS] User Profile: ${targetUserRecord.username} (${targetUserRecord.email})`);
};

describeUserProfile({ username: "Alice", email: "alice@example.com" });