import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Módulos y Exportaciones en TS
// ================================================================================
// Demostración de Exportaciones Nombradas, Exportaciones por Defecto (Default)
// y consumo de Módulos mediante Importaciones.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Manejo de Módulos (Named vs. Default Exports)");

// ================================================================================
// 📋 1. Definición de Exportaciones (Simulación de Módulo de Saludos)
// ================================================================================
// En un proyecto real, estas constantes y funciones estarían en su propio archivo
// (ej: 'src/utils/greetings.ts').
// ================================================================================

/**
 * Constante exportada de forma nombrada (Named Export).
 */
export const greeting: string = "¡Hola desde el módulo!";

/**
 * Función exportada de forma nombrada (Named Export).
 * @param name Nombre de la persona a saludar.
 */
export const greet = (name: string): string => {
  return `${greeting} ${name}`;
};

/**
 * Función interna de despedida.
 * @param name Nombre de la persona a despedir.
 */
const farewell = (name: string): string => {
  return `¡Adiós, ${name}!`;
};

/**
 * Exportación por defecto (Default Export).
 * ⚠️ Regla: Solo puede existir UNA exportación por defecto por archivo (módulo).
 */
export default farewell;

// ================================================================================
// 🚀 2. Demostración Práctica y Uso de Exportaciones
// ================================================================================
// Consumo y trazabilidad de las exportaciones nombradas y por defecto.
// ================================================================================

// [1] Uso de la constante nombrada
console.log("✅ [MODULES - Named Const]:", greeting);

// [2] Uso de la función nombrada
const greetingMessage: string = greet("Carlos");
console.log("✅ [MODULES - Named Function]:", greetingMessage);

// [3] Uso de la función exportada por defecto (farewell)
const farewellMessage: string = farewell("Ana");
console.log("✅ [MODULES - Default Export]:", farewellMessage);

// ================================================================================
// 📚 3. Guía Visual: Sintaxis de Importación en Módulos Consumidores
// ================================================================================
// Ejemplo de cómo se importarían estos elementos en otro archivo (ej. 'main.ts'):
//
// 1. Importar la exportación por defecto y las nombradas juntas:
//    import farewell, { greeting, greet } from "./concepts/modulesExports";
//
// 2. Importar todo el módulo como un namespace u objeto global:
//    import * as GreetingsModule from "./concepts/modulesExports";
//    console.log(GreetingsModule.greeting);
//    GreetingsModule.greet("Maria");
// ================================================================================