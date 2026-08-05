import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Entorno de Pruebas
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el análisis de flujo en runtime
// ================================================================================
separator("=", "Demostración de condicionales en TypeScript");

// ================================================================================
// 🚦 Condicionales: if, else if, else
// ================================================================================
// [1] Estructuras de control de flujo que permiten ejecutar bloques de código según condiciones booleanas
// [2] TypeScript permite el uso de operadores de comparación y lógicos para evaluar condiciones
// [3] Se pueden anidar múltiples condicionales para manejar casos complejos de lógica de negocio
// ================================================================================
separator("=", "Conditionals: if, else if, else");

const isSoftwareDeveloper: boolean = true;
if (isSoftwareDeveloper) {
  console.log("✅ [CONDITIONALS] You are a developer.");
} else {
  console.log("✅ [CONDITIONALS] You are not a developer.");
}

const currentExamScore: number = 85;
if (currentExamScore >= 90) {
  console.log("✅ [CONDITIONALS] Grade: A");
} else if (currentExamScore >= 80) {
  console.log("✅ [CONDITIONALS] Grade: B");
} else {
  console.log("✅ [CONDITIONALS] Grade: C");
}

const userAge: number = 32;
if (userAge >= 18) {
  console.log("✅ [CONDITIONALS] You are an adult.");
} else {
  console.log("✅ [CONDITIONALS] You are a minor.");
}

// ================================================================================
// 🔀 Ternary Operator: Condición ? ValorSiTrue : ValorSiFalse
// ================================================================================
// [1] Operador condicional que permite asignar valores según una condición booleana
// [2] Útil para expresiones simples y asignaciones directas en una sola línea
// [3] Nota técnica: Si la expresión ya evalúa a un booleano, se asigna directamente sin redundancias ternarias
// ================================================================================
separator("=", "Ternary Operator");

// Refactorización Clean Code: Evitamos la redundancia 'condicion ? true : false' aplicando asignación directa
const isAdultUser: boolean = userAge >= 18;
console.log("✅ [CONDITIONALS] Is adult:", isAdultUser);

const accountAccessLevel: string = isSoftwareDeveloper ? "Admin" : "User";
console.log("✅ [CONDITIONALS] Access level:", accountAccessLevel);

const examResultStatus: string = currentExamScore >= 60 ? "Passed" : "Failed";
console.log("✅ [CONDITIONALS] Exam result:", examResultStatus);

// ================================================================================
// 🔌 Switch Statement: Estructura de control para múltiples condiciones
// ================================================================================
// [1] Permite evaluar una expresión y ejecutar bloques de código según el valor coincidente
// [2] Cada caso debe terminar con 'break' para evitar la ejecución en cascada (fall-through) involuntaria
// [3] Se debe usar siempre 'default' para manejar de forma segura los casos no contemplados explícitamente
// ================================================================================
separator("=", "Switch Statement");

const activeSuperhero: string = "Spiderman";

switch (activeSuperhero) {
  case "Superman":
    console.log("✅ [CONDITIONALS] You are Superman.");
    break;
  case "Batman":
    console.log("✅ [CONDITIONALS] You are Batman.");
    break;
  case "Spiderman":
    console.log("✅ [CONDITIONALS] You are Spiderman.");
    break;
  case "Wonder Woman":
    console.log("✅ [CONDITIONALS] You are Wonder Woman.");
    break;
  default:
    console.log("✅ [CONDITIONALS] Unknown superhero.");
    break;
}