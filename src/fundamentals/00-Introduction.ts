import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Entorno de Pruebas
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el análisis de tipado en runtime
// ================================================================================
separator("=", "Demostración de Introducción a TypeScript");
console.log("✅ [SYSTEM] Hello, TypeScript!");

// ================================================================================
// 📦 Declaración de Variables y Constantes
// ================================================================================
// [1] Definición de tipos explícitos, inferencia y reasignaciones estricta de tipos
// [2] Muestra variables inmutables (const), mutables (let) y copia por valor
// [3] Explicación de buenas prácticas: Preferir siempre 'const' para asegurar la predictibilidad del código
// ================================================================================
separator("=", "Declaración de Variables y Constantes");

// Constantes: Inmutables, no pueden reasignarse tras su definición
const systemGreetingMessage: string = "Welcome to TypeScript!";
console.log(`✅ [INFO] Constante 'systemGreetingMessage': ${systemGreetingMessage}`);

// Variables mutables: Permiten cambiar su valor respetando el tipo de dato inicial
let userProfileAge: number = 30;
console.log(`✅ [DATA] Variable 'userProfileAge': ${userProfileAge}`);

// Declaración sin inicialización: Requiere tipo explícito obligatoriamente
let hardwareProductModel: string;

hardwareProductModel = "Asus Crosshair X670E Dark Hero";
console.log(`✅ [UPDATE] 'hardwareProductModel' inicializado: ${hardwareProductModel}`);

// Reasignación válida del mismo tipo
hardwareProductModel = "AMD Ryzen 9 9950X3D";
console.log(`✅ [UPDATE] 'hardwareProductModel' reasignado: ${hardwareProductModel}`);

// Copia por valor: Al ser un primitivo, 'isolatedProductBackup' duplica el valor en memoria de forma aislada
let isolatedProductBackup: string = hardwareProductModel;
console.log(`✅ [DATA] Copia 'isolatedProductBackup': ${isolatedProductBackup}`);

// ================================================================================
// 🧮 Expresiones aritméticas y operaciones con variables
// ================================================================================
// [1] Evaluación de operadores matemáticos estándar y de asignación compuesta
// [2] Pruebas exhaustivas de pre-incremento y post-incremento
// [3] Evalúa el cambio de valor en memoria antes y después de la lectura en consola
// ================================================================================
separator("=", "Expresiones Aritméticas y Operaciones con Variables");

let baseFactorFirst: number = 10;
let baseFactorSecond: number = 20;

// Operaciones matemáticas estándar
const arithmeticSum: number = baseFactorFirst + baseFactorSecond;
const arithmeticDifference: number = baseFactorFirst - baseFactorSecond;
const arithmeticMultiplication: number = baseFactorFirst * baseFactorSecond;
const arithmeticDivision: number = baseFactorFirst / baseFactorSecond;
const arithmeticRemainder: number = baseFactorFirst % baseFactorSecond;
const arithmeticExponent: number = baseFactorFirst ** 2; // Operador de exponenciación (10 al cuadrado)

console.log(`✅ [MATH] Sum of ${baseFactorFirst} and ${baseFactorSecond} is ${arithmeticSum}.`);
console.log(`✅ [MATH] Difference of ${baseFactorFirst} and ${baseFactorSecond} is ${arithmeticDifference}.`);
console.log(`✅ [MATH] Multiplication of ${baseFactorFirst} and ${baseFactorSecond} is ${arithmeticMultiplication}.`);
console.log(`✅ [MATH] Division of ${baseFactorFirst} and ${baseFactorSecond} is ${arithmeticDivision}.`);
console.log(`✅ [MATH] Remainder (Módulo) of ${baseFactorFirst} / ${baseFactorSecond} is ${arithmeticRemainder}.`);
console.log(`✅ [MATH] Exponentiation (baseFactorFirst^2): ${arithmeticExponent}`);

// Post-incremento: Primero devuelve el valor actual (10), luego incrementa baseFactorFirst a 11 en memoria
console.log(`✅ [MATH] Incrementing baseFactorFirst (post): ${baseFactorFirst++} (Valor actual en memoria: ${baseFactorFirst})`);
// Pre-incremento: Primero incrementa baseFactorFirst a 12 en memoria, luego devuelve el valor resultante
console.log(`✅ [MATH] Incrementing baseFactorFirst (pre): ${++baseFactorFirst}`);

// Post-decremento y Pre-decremento aplicado a baseFactorSecond
console.log(`✅ [MATH] Decrementing baseFactorSecond (post): ${baseFactorSecond--} (Valor actual en memoria: ${baseFactorSecond})`);
console.log(`✅ [MATH] Decrementing baseFactorSecond (pre): ${--baseFactorSecond}`);

// Operadores de asignación compuesta (Buenas prácticas de reducción de código)
let aggregateTotalScore: number = 50;
aggregateTotalScore += 10; // Equivalente a: aggregateTotalScore = aggregateTotalScore + 10
console.log(`✅ [ASSIGNMENT] Asignación compuesta (+= 10): ${aggregateTotalScore}`);

// ================================================================================
// 🌐 Scope de Variables
// ================================================================================
// [1] Validación de accesibilidad en contextos globales y locales (Léxicos)
// [2] Prueba el aislamiento de entornos mediante el ciclo de vida de una función
// [3] Explicación de clausuras: Las funciones internas recuerdan su entorno de creación
// ================================================================================
separator("=", "Scope de Variables");

// Variable Global: Accesible desde cualquier parte del archivo actual
let systemGlobalScopeVariable: string = "I am a global variable.";

function executeScopeEvaluation(): void {
  // Variable Local: Su ciclo de vida inicia y termina dentro de esta función
  let internalLocalVariable: string = "I am local to this function.";
  console.log(`✅ [SCOPE] Acceso local interno: ${internalLocalVariable}`);
  console.log(`✅ [SCOPE] Acceso global desde interno: ${systemGlobalScopeVariable}`);
}

executeScopeEvaluation();

console.log(`✅ [SCOPE] Acceso global externo: ${systemGlobalScopeVariable}`);
console.log("❌ [ERROR] Trying to access internalLocalVariable outside the function will cause an error.");

// ================================================================================
// 🔒 Bloques de código y scope de variables
// ================================================================================
// [1] Evaluación de variables declaradas mediante 'let' y 'const' en bloque aislado
// [2] Demuestra que las llaves '{}' limitan estrictamente la visibilidad (Block Scope)
// [3] Contraste histórico: Evitar el uso de 'var' debido a su falta de block scope y problemas de hoisting
// ================================================================================
separator("=", "Bloques de Código y Scope de Variables");

{
  let isolatedBlockVariable: string = "I am block scoped.";
  const isolatedBlockConst: string = "I am also block scoped.";
  console.log(`✅ [SCOPE] Variable dentro de bloque let: ${isolatedBlockVariable}`);
  console.log(`✅ [SCOPE] Variable dentro de bloque const: ${isolatedBlockConst}`);
}

// Nota técnica: Intentar leer 'isolatedBlockVariable' aquí generaría un error de compilación inmediato.

// ================================================================================
// 👤 Shadowing de Variables
// ================================================================================
// [1] Simulación de superposición de identificadores por contexto léxico
// [2] Muestra cómo una variable local oculta a una global temporalmente sin destruirla
// [3] Advertencia de Clean Code: El shadowing puede causar confusión y bugs si se abusa
// ================================================================================
separator("=", "Shadowing de Variables");

let identityShadowedVariable: string = "I am the original variable.";

function executeShadowingSimulation(): void {
  // Esta variable redefine el identificador localmente ocultando la variable externa
  let identityShadowedVariable: string = "I am the shadowed variable.";
  console.log(`✅ [SHADOW] Variable local (shadowed): ${identityShadowedVariable}`);
}

executeShadowingSimulation();
// Fuera de la función, la variable original recupera su accesibilidad intacta
console.log(`✅ [SHADOW] Variable global (original): ${identityShadowedVariable}`);

// ================================================================================
// 🧬 Tipos de Datos Primitivos en TypeScript
// ================================================================================
// [1] Inspección de tipos fundamentales del lenguaje asignados estáticamente
// [2] Muestra el tipo devuelto por 'typeof' en JavaScript en tiempo de ejecución
// [3] Peculiaridad de JS/TS: El typeof de un valor 'null' devuelve erróneamente 'object' debido a un bug histórico
// ================================================================================
separator("=", "Tipos de Datos Primitivos en TypeScript");

let literalStringValue: string = "Hello, TypeScript!";
let literalNumericValue: number = 42;
let logicalValidationFlag: boolean = true;
let definedNullReference: null = null;
let definedUndefinedReference: undefined = undefined;
let largePrecisionInt: bigint = 9007199254740991n; // Manejo seguro de enteros de gran precisión

console.log(`✅ [TYPE] literalStringValue type: ${typeof literalStringValue}`);
console.log(`✅ [TYPE] literalNumericValue type: ${typeof literalNumericValue}`);
console.log(`✅ [TYPE] logicalValidationFlag type: ${typeof logicalValidationFlag}`);
console.log(`✅ [TYPE] definedNullReference type (Peculiaridad JS): ${typeof definedNullReference}`);
console.log(`✅ [TYPE] definedUndefinedReference type: ${typeof definedUndefinedReference}`);
console.log(`✅ [TYPE] largePrecisionInt type: ${typeof largePrecisionInt}`);

// ================================================================================
// 🏗️ Tipos de datos complejos en TypeScript
// ================================================================================
// [1] Evaluación de estructuras compuestas en JavaScript subyacente (Estructuras de referencia)
// [2] Muestra que arrays y tuplas operan nativamente como objetos en el Heap de memoria durante el runtime
// [3] Presentación avanzada de datos estructurados mediante console.table para depuración
// ================================================================================
separator("=", "Tipos de Datos Complejos en TypeScript");

let indexedNumbersCollection: number[] = [1, 2, 3, 4, 5];
let structuralStrictTuple: [string, number] = ["Age", 30]; // Tamaño fijo y tipos ordenados estrictamente
let explicitSchemaObject: { name: string; age: number } = { name: "John", age: 25 };

// Estructuración limpia en formato de tabla para la terminal con tipado explícito inline del esquema
const metadataDebuggerTable: { Variable: string; TipoJavaScript: string; EstructuraTS: string }[] = [
  { Variable: "indexedNumbersCollection", TipoJavaScript: typeof indexedNumbersCollection, EstructuraTS: "number[]" },
  { Variable: "structuralStrictTuple", TipoJavaScript: typeof structuralStrictTuple, EstructuraTS: "[string, number]" },
  { Variable: "explicitSchemaObject", TipoJavaScript: typeof explicitSchemaObject, EstructuraTS: "{ name, age }" },
];

console.table(metadataDebuggerTable);

// ================================================================================
// 🔀 Operadores lógicos
// ================================================================================
// [1] Evaluación de cortocorticuitos y álgebra booleana en consola
// [2] Pruebas intensivas con compuertas AND (&&), OR (||) y NOT (!)
// [3] Demostración de cortocircuito: El motor frena la evaluación si el resultado ya es determinista
// ================================================================================
separator("=", "Operadores Lógicos");

// Compuerta lógica AND (&&) - Requiere que todas las premisas sean verdaderas
console.log(`✅ [LOGIC] true && true -> ${true && true}`);
console.log(`✅ [LOGIC] true && false -> ${true && false}`);
console.log(`✅ [LOGIC] false && true -> ${false && true}`);
console.log(`✅ [LOGIC] false && false -> ${false && false}`);
console.log(`✅ [LOGIC] Cadena AND -> ${true && true && true && false && true}`); // Cortocircuita en el false

// Compuerta lógica OR (||) - Requiere que al menos una premisa sea verdadera
console.log(`✅ [LOGIC] true || true -> ${true || true}`);
console.log(`✅ [LOGIC] true || false -> ${true || false}`);
console.log(`✅ [LOGIC] false || true -> ${false || true}`);
console.log(`✅ [LOGIC] false || false -> ${false || false}`);
console.log(`✅ [LOGIC] Cadena OR -> ${false || false || true || false || false}`); // Cortocircuita en el true

// Operador de Negación NOT (!) y Doble / Múltiple negación
console.log(`✅ [LOGIC] !true -> ${!true}`);
console.log(`✅ [LOGIC] !false -> ${!false}`);
console.log(`✅ [LOGIC] !!!!false -> ${!!!!false}`);

// Evaluation de Expresiones lógicas complejas
console.log(`✅ [LOGIC] Conjunto 1 -> ${(true && true) || false || (true && true && false)}`);
console.log(`✅ [LOGIC] Conjunto 2 -> ${true || false || (true && true && false)}`);
console.log(`✅ [LOGIC] Conjunto 3 -> ${true || false || false}`);

// Operaciones dinámicas con variables booleanas
let logicalTrueFlag: boolean = true;
console.log(`✅ [LOGIC] Negación logicalTrueFlag: ${!logicalTrueFlag}`);

let logicalFalseFlag: boolean = false;
console.log(`✅ [LOGIC] Negación logicalFalseFlag: ${!logicalFalseFlag}`);

const combinedLogicalOutcome: boolean = logicalTrueFlag && logicalFalseFlag;
console.log(`✅ [LOGIC] Operación combinada variables: ${combinedLogicalOutcome}`);

// Operador Nullish Coalescing (??) - Novedad agregada para control de valores por defecto válidos (evita falsos negativos como 0 o "")
let transientNullName: null = null;
let profileFallbackName: string = transientNullName ?? "Guest User";
console.log(`✅ [NULLISH] Control de nulos (??): ${profileFallbackName}`);

// ================================================================================
// ⚖️ Operadores de comparación
// ================================================================================
// [1] Pruebas relacionales de magnitud e igualdad estricta
// [2] Explicación de buenas prácticas: Usar siempre triple igualdad (===) e impedir la coerción implícita
// [3] Validación de diferencias semánticas entre valores idénticos
// ================================================================================
separator("=", "Operadores de Comparación");

let comparisonValueFirst: number = 5;
let comparisonValueSecond: number = 5;

console.log(`✅ [COMP] comparisonValueFirst > comparisonValueSecond -> ${comparisonValueFirst > comparisonValueSecond}`);
console.log(`✅ [COMP] comparisonValueFirst < comparisonValueSecond -> ${comparisonValueFirst < comparisonValueSecond}`);
console.log(`✅ [COMP] comparisonValueFirst >= comparisonValueSecond -> ${comparisonValueFirst >= comparisonValueSecond}`);
console.log(`✅ [COMP] comparisonValueFirst <= comparisonValueSecond -> ${comparisonValueFirst <= comparisonValueSecond}`);

// Igualdad abstracta vs Estricta
console.log(`✅ [COMP] x == y (Igualdad abstracta) -> ${comparisonValueFirst == comparisonValueSecond}`);
console.log(`✅ [COMP] x != y (Desigualdad abstracta) -> ${comparisonValueFirst != comparisonValueSecond}`);
console.log(`✅ [COMP] x === y (Igualdad estricta - Compara valor y tipo) -> ${comparisonValueFirst === comparisonValueSecond}`);
console.log(`✅ [COMP] x !== y (Desigualdad estricta) -> ${comparisonValueFirst !== comparisonValueSecond}`);