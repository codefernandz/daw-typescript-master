import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Entorno de Pruebas
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Estructura orientada al análisis del Stack y el Heap de memoria
// ================================================================================
separator("=", "Demostración de tipos de datos en TypeScript");
console.log("✅ [SYSTEM] Hello, TypeScript!");

// ================================================================================
// 📦 Tipos de Datos Básicos (Primitivos)
// ================================================================================
// [1] Demostración de asignación estricta en tipos base
// [2] Los primitivos se guardan directamente en el stack de memoria
// [3] Útiles para cálculos, validaciones y manipulación de datos simples
// ================================================================================

// ================================================================================
// 🔤 String: Representa una cadena de texto
// ================================================================================
// [1] Definición de cadenas con comillas y template literals
// [2] Los template literals permiten interpolación dinámica de expresiones `${}`
// [3] Útiles para mensajes, etiquetas, nombres y cualquier dato textual
// ================================================================================
separator("=", "String");

const systemUserName: string = "Juan";
const userWelcomeGreeting: string = `Hola, ${systemUserName}! Bienvenido a TypeScript.`;

console.log(`✅ [STRING] Name: ${systemUserName}`);
console.log(`✅ [STRING] Greeting: ${userWelcomeGreeting}`);

// ================================================================================
// 🔢 Number: Representa un valor numérico
// ================================================================================
// [1] Declaración de enteros y números de punto flotante (IEEE 754)
// [2] Nota técnica: Todos los números en JS/TS son flotantes de doble precisión
// [3] Útiles para cálculos matemáticos, estadísticas y operaciones aritméticas
// ================================================================================
separator("=", "Number");

const profileAge: number = 30;
const userHeightDimension: number = 1.75;

console.log(`✅ [NUMBER] Age: ${profileAge}`);
console.log(`✅ [NUMBER] Height: ${userHeightDimension}`);

// ================================================================================
// ☯️ Boolean: Representa un valor lógico
// ================================================================================
// [1] Evaluación de flags y estados verdaderos o falsos
// [2] Controlan el flujo de las estructuras condicionales del software
// [3] Útiles para validaciones, toggles y banderas de control
// ================================================================================
separator("=", "Boolean");

const isAccountActive: boolean = true;
const isActionDisabled: boolean = false;
const isEnrolledStudent: boolean = true;
const isCurrentlyEmployed: boolean = false;

console.log(`✅ [BOOLEAN] Is active: ${isAccountActive}`);
console.log(`✅ [BOOLEAN] Is disabled: ${isActionDisabled}`);
console.log(`✅ [BOOLEAN] Is student: ${isEnrolledStudent}`);
console.log(`✅ [BOOLEAN] Is employed: ${isCurrentlyEmployed}`);

// ================================================================================
// 🕳️ Null y Undefined: Ausencia de valor
// ================================================================================
// [1] Inicialización explícita de variables vacías o no declaradas
// [2] undefined indica que la variable existe pero carece de valor asignado
// [3] null representa una ausencia intencional del objeto asignado
// ================================================================================
separator("=", "Null y Undefined");

const criticalErrorState: null = null;
const targetedNullValue: null = null;

const initialUndefinedState: undefined = undefined;
const variableUndefinedValue: undefined = undefined;

console.log(`✅ [NULL] Error value: ${criticalErrorState}`);
console.log(`✅ [NULL] Null value: ${targetedNullValue}`);
console.log(`✅ [UNDEFINED] Not defined value: ${initialUndefinedState}`);
console.log(`✅ [UNDEFINED] Undefined value: ${variableUndefinedValue}`);

// ================================================================================
// 🧪 Mezcla de tipos y operaciones
// ================================================================================
// [1] Coerción explícita e implícita de tipos relacionales
// [2] Sobrecarga del operador `+` para concatenar cadenas de texto dinámicas
// [3] Evaluación de expresiones booleanas y comparaciones numéricas
// ================================================================================
separator("=", "Mezcla de Tipos de Datos y Operaciones");

const concatenatedBioString: string = userWelcomeGreeting + " Tienes " + profileAge + " años.";
const evaluatedMetricsString: string = "La suma de edad y altura es: " + (profileAge + userHeightDimension);
const combinedMetricsSum: number = profileAge + userHeightDimension;
const isUserLegalAdult: boolean = profileAge >= 18;

console.log(`✅ [MIXED] Concatenated String: ${concatenatedBioString}`);
console.log(`✅ [MIXED] Sum of age and height: ${combinedMetricsSum}`);
console.log(`✅ [MIXED] Sum as string: ${evaluatedMetricsString}`);
console.log(`✅ [MIXED] Is adult: ${isUserLegalAdult}`);

// ================================================================================
// 🔍 Comprobación dinámica de tipos
// ================================================================================
// [1] Verificación mediante el operador nativo typeof en tiempo de ejecución
// [2] Demostración de cómo TypeScript se borra al compilar, dejando types puros de JS
// [3] Útil para depuración y validación de datos en entornos mixtos
// ================================================================================
separator("=", "Comprobación de Tipos");

const literalStringSample: string = "This is a string";
const literalNumberSample: number = 100;
const literalBooleanSample: boolean = true;
const targetNumbersCollection: number[] = [1, 2, 3];
const mappedMetadataRecord: { id: string; code: number } = { id: "value1", code: 42 };
const operationalSumCalculator: (x: number, y: number) => number = (x, y) => x + y;

console.log(`✅ [TYPE CHECK] String type: ${typeof literalStringSample}`);
console.log(`✅ [TYPE CHECK] Number type: ${typeof literalNumberSample}`);
console.log(`✅ [TYPE CHECK] Boolean type: ${typeof literalBooleanSample}`);
console.log(`✅ [TYPE CHECK] Array type (Devuelve 'object' en JS): ${typeof targetNumbersCollection}`);
console.log(`✅ [TYPE CHECK] Object type: ${typeof mappedMetadataRecord}`);
console.log(`✅ [TYPE CHECK] Function type: ${typeof operationalSumCalculator}`);

// ================================================================================
// 🧬 Inmutabilidad por valor (Primitivos)
// ================================================================================
// [1] Demostración del comportamiento de copia en memoria stack
// [2] Las modificaciones en la variable copia no afectan en absoluto a la original
// [3] Los tipos primitivos se almacenan directamente en el stack de memoria
// ================================================================================
separator("=", "Tipos de Datos Simples (Primitivos)");

const immutableBaseString: string = "Hello, TypeScript!";
const isolatedStringCopy: string = immutableBaseString;

console.log(`✅ [PRIMITIVE] Original String: ${immutableBaseString}`);
console.log(`✅ [PRIMITIVE] Copied String: ${isolatedStringCopy}`);
console.log(`✅ [CONCATENATION] Concatenated String: ${immutableBaseString + " " + isolatedStringCopy}`);

// ================================================================================
// 🔄 Iterable Strings
// ================================================================================
// [1] Lectura indexada basada en índices numéricos secuenciales
// [2] Propiedad innata length para evaluar el tamaño total de la cadena
// [3] Acceso a caracteres individuales mediante corchetes `[]` y posición de índice
// ================================================================================
separator("=", "Iterable Strings");

const sequentialIterableString: string = "TypeScript";
console.log(`✅ [ITERABLE] Original String: ${sequentialIterableString}`);

console.log(`✅ [ITERABLE] First Character: ${sequentialIterableString[0]}`);
console.log(`✅ [ITERABLE] Second Character: ${sequentialIterableString[1]}`);
console.log(`✅ [ITERABLE] Third Character: ${sequentialIterableString[2]}`);
console.log(`✅ [ITERABLE] Fourth Character: ${sequentialIterableString[3]}`);
console.log(`✅ [ITERABLE] Fifth Character: ${sequentialIterableString[4]}`);
console.log(`✅ [ITERABLE] Sixth Character: ${sequentialIterableString[5]}`);
console.log(`✅ [ITERABLE] Seventh Character: ${sequentialIterableString[6]}`);

console.log(`✅ [ITERABLE] Length of String: ${sequentialIterableString.length}`);
console.log(`✅ [ITERABLE] Last Character: ${sequentialIterableString[sequentialIterableString.length - 1]}`);

// ================================================================================
// 🛠️ Métodos globales de String
// ================================================================================
// [1] Operaciones nativas de mutación, recorte, tokenización y búsqueda
// [2] Recordatorio: Las strings en JS/TS son inmutables; los métodos retornan nuevos valores
// [3] Útiles para manipulación de datos, validación y formateo de texto
// ================================================================================
separator("=", "Métodos de String");

const transactionalMethodString: string = "Hello, TypeScript!";
console.log(`✅ [METHODS] Original String: ${transactionalMethodString}`);

const totalCharacterCount: number = transactionalMethodString.length;
const substringFirstIndex: number = transactionalMethodString.indexOf("Type");
const substringLastIndex: number = transactionalMethodString.lastIndexOf("Script");
const isStartingMatch: boolean = transactionalMethodString.startsWith("Hello");
const isEndingMatch: boolean = transactionalMethodString.endsWith("Script!");
const structuralStringSlice: string = transactionalMethodString.slice(7, 17);
const replacedTargetContent: string = transactionalMethodString.replace("TypeScript", "JavaScript");
const capitalizedOutputString: string = transactionalMethodString.toUpperCase();
const lowercasedOutputString: string = transactionalMethodString.toLowerCase();
const matchesSubstringPresence: boolean = transactionalMethodString.includes("Type");
const extractedTargetSubstring: string = transactionalMethodString.substring(7, 17);
const splitSegmentsCollection: string[] = transactionalMethodString.split(", ");
const sanitizedSpacedString: string = "   Spaced String   ".trim();
const appendedTargetString: string = transactionalMethodString.concat(" Welcome!");

console.log(`✅ [METHOD] Length of String: ${totalCharacterCount}`);
console.log(`✅ [METHOD] Uppercase String: ${capitalizedOutputString}`);
console.log(`✅ [METHOD] Lowercase String: ${lowercasedOutputString}`);
console.log(`✅ [METHOD] Includes 'Type': ${matchesSubstringPresence}`);
console.log(`✅ [METHOD] Replace 'TypeScript' with 'JavaScript': ${replacedTargetContent}`);
console.log(`✅ [METHOD] Ends with 'Script!': ${isEndingMatch}`);
console.log(`✅ [METHOD] Starts with 'Hello': ${isStartingMatch}`);
console.log(`✅ [METHOD] Index of 'Type': ${substringFirstIndex}`);
console.log(`✅ [METHOD] Last Index of 'Script': ${substringLastIndex}`);
console.log(`✅ [METHOD] Substring (7, 17): ${extractedTargetSubstring}`);
console.log(`✅ [METHOD] Split String: ${splitSegmentsCollection}`);
console.log(`✅ [METHOD] Slice String (7, 17): ${structuralStringSlice}`);
console.log(`✅ [METHOD] Trimmed String (Ejemplo aislado): '${sanitizedSpacedString}'`);
console.log(`✅ [METHOD] Concatenated String: ${appendedTargetString}`);

// ================================================================================
// 📐 Métodos de Number
// ================================================================================
// [1] Formateo numérico avanzado, precisión y conversión de tipos base
// [2] Controla la cantidad de decimales y convierte números a texto manipulable
// [3] Útiles para cálculos financieros, científicos y de ingeniería
// ================================================================================
separator("=", "Métodos de Number");

const analyticalMethodNumber: number = 12345.6789;
console.log(`✅ [METHODS] Original Number: ${analyticalMethodNumber}`);

const fixedDecimalStringOutput: string = analyticalMethodNumber.toFixed(2);
const exponentialNotationString: string = analyticalMethodNumber.toExponential(2);
const precisionLimitStringOutput: string = analyticalMethodNumber.toPrecision(5);
const stringifiedNumericConversion: string = analyticalMethodNumber.toString();

console.log(`✅ [METHOD] To Fixed (2 decimales): ${fixedDecimalStringOutput}`);
console.log(`✅ [METHOD] To Exponential (base 10): ${exponentialNotationString}`);
console.log(`✅ [METHOD] To Precision (5 dígitos): ${precisionLimitStringOutput}`);
console.log(`✅ [METHOD] To String (Conversión): ${stringifiedNumericConversion}`);

// ================================================================================
// 🧮 Métodos de Math
// ================================================================================
// [1] Funciones matemáticas avanzadas y constantes predefinidas de la API de JavaScript
// [2] Operaciones trigonométricas, raíces y generación de números pseudoaleatorios
// [3] Útiles para cálculos científicos, desarrollo de videojuegos y simulaciones
// ================================================================================
separator("=", "Métodos de Math");

const absoluteNumericResult: number = Math.abs(-42);
const ceilingRoundedValue: number = Math.ceil(4.2);
const floorRoundedValue: number = Math.floor(4.8);
const upperBoundaryValue: number = Math.max(1, 5, 3, 9, 2);
const lowerBoundaryValue: number = Math.min(1, 5, 3, 9, 2);
const calculatedPowerResult: number = Math.pow(2, 3);
const pseudoRandomValue: number = Math.random();
const standardRoundedValue: number = Math.round(4.5);
const squareRootCalculated: number = Math.sqrt(16);
const trigonometricSineValue: number = Math.sin(Math.PI / 2);
const trigonometricCosineValue: number = Math.cos(0);
const trigonometricTangentValue: number = Math.tan(Math.PI / 4);
const arcSineCalculated: number = Math.asin(1);
const arcCosineCalculated: number = Math.acos(0);
const arcTangentCalculated: number = Math.atan(1);
const naturalLogarithmCalculated: number = Math.log(10);
const naturalExponentialCalculated: number = Math.exp(1);
const mathematicalPiConstant: number = Math.PI;
const mathematicalEulerConstant: number = Math.E;

console.log(`✅ [MATH] Absolute Value: ${absoluteNumericResult}`);
console.log(`✅ [MATH] Ceil (Redondeo hacia arriba): ${ceilingRoundedValue}`);
console.log(`✅ [MATH] Floor (Redondeo hacia abajo): ${floorRoundedValue}`);
console.log(`✅ [MATH] Max Value: ${upperBoundaryValue}`);
console.log(`✅ [MATH] Min Value: ${lowerBoundaryValue}`);
console.log(`✅ [MATH] Power (2^3): ${calculatedPowerResult}`);
console.log(`✅ [MATH] Random Number (0-1): ${pseudoRandomValue}`);
console.log(`✅ [MATH] Round (4.5): ${standardRoundedValue}`);
console.log(`✅ [MATH] Square Root (16): ${squareRootCalculated}`);
console.log(`✅ [MATH] Sine (90°): ${trigonometricSineValue}`);
console.log(`✅ [MATH] Cosine (0°): ${trigonometricCosineValue}`);
console.log(`✅ [MATH] Tangent (45°): ${trigonometricTangentValue}`);
console.log(`✅ [MATH] Arcsine (1): ${arcSineCalculated}`);
console.log(`✅ [MATH] Arccosine (0): ${arcCosineCalculated}`);
console.log(`✅ [MATH] Arctangent (1): ${arcTangentCalculated}`);
console.log(`✅ [MATH] Natural Log (ln 10): ${naturalLogarithmCalculated}`);
console.log(`✅ [MATH] Exponential (e^1): ${naturalExponentialCalculated}`);
console.log(`✅ [MATH] Pi (π): ${mathematicalPiConstant}`);
console.log(`✅ [MATH] Euler's Number (e): ${mathematicalEulerConstant}`);

// ================================================================================
// 📌 Boolean Example
// ================================================================================
// [1] Evaluación algorítmica de flags y estados lógicos booleanos distribuidos
// [2] Control dinámico de flujo mediante métodos inmutables declarativos de arreglos
// [3] Útiles para validaciones compuestas, filtros masivos y auditoría de flags
// ================================================================================
separator("=", "Boolean");

const academicStudentsRecord: { name: string; approved: boolean }[] = [
  { name: "Paula", approved: true },
  { name: "Luis", approved: false },
  { name: "Ana", approved: true },
  { name: "Carlos", approved: false },
];

// Refactorización Clean Code: Cambiamos el bucle for imperativo por el método declarativo .every()
const areAllStudentsApproved: boolean = academicStudentsRecord.every((currentStudent) => currentStudent.approved);

console.log(`✅ [BOOLEAN] All approved: ${areAllStudentsApproved}`);

// ================================================================================
// 🧬 Tipos de datos complejos (Objects y Arrays) y su comportamiento por referencia
// ================================================================================
// [1] Los objetos y arrays se almacenan en el heap de memoria y se pasan por referencia
// [2] Las modificaciones en la variable referenciada afectan directamente al objeto original
// [3] Nota técnica: Ambas variables apuntan exactamente a la misma dirección física de memoria
// ================================================================================
separator("=", "Tipos de Datos Complejos (Objects y Arrays)");

const originalProfileObject: { name: string; age: number } = { name: "Alice", age: 28 };
const referencedProfileObject: { name: string; age: number } = originalProfileObject;

console.log(`✅ [REFERENCE] Original Object: ${JSON.stringify(originalProfileObject)}`);

// Mutación lateral: Modificar la referencia altera la estructura compartida en el Heap
referencedProfileObject.age = 30;
console.log(`✅ [REFERENCE] Referenced Object (after modification): ${JSON.stringify(referencedProfileObject)}`);
console.log(`✅ [REFERENCE] Original Object (after modification): ${JSON.stringify(originalProfileObject)}`);
console.log(`✅ [REFERENCE] Are both objects equal? ${originalProfileObject === referencedProfileObject}`);

const originalIndicesArray: number[] = [1, 2, 3, 4, 5];
const referencedIndicesArray: number[] = originalIndicesArray;

console.log(`✅ [REFERENCE] Original Array: ${originalIndicesArray}`);

// Mutación en arrays mediante métodos mutables sobre variables referenciadas
referencedIndicesArray.push(6);
console.log(`✅ [REFERENCE] Referenced Array (after push): ${referencedIndicesArray}`);
console.log(`✅ [REFERENCE] Original Array (after push): ${originalIndicesArray}`);
console.log(`✅ [REFERENCE] Are both arrays equal? ${originalIndicesArray === referencedIndicesArray}`);