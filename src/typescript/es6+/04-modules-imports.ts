import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Importación de Módulos en TS
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación del
// consumo de Módulos mediante Named, Default y Namespace (Wildcard) Imports.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Técnicas de Importación de Módulos (Imports)");

// ================================================================================
// 📦 1. Importaciones Nombradas y Por Defecto (Named & Default Imports)
// ================================================================================
// Reutilización de constantes y funciones desde un módulo externo.
// ⚠️ Nota: Las importaciones nombradas van entre llaves '{ }' y coinciden exactamente
// con el nombre exportado. La importación por defecto NO lleva llaves.
// ================================================================================

// [1] Importación de constantes y funciones específicas (Named Imports)
import { greeting, greet } from "./03-modules-exports";

// [2] Importación de la función por defecto (Default Import)
import farewell from "./03-modules-exports";

// [3] Ejecución y comprobación en consola
console.log("✅ [IMPORT - Named Const]:", greeting);

const greetingResult: string = greet("Juan");
console.log("✅ [IMPORT - Named Function]:", greetingResult);

const farewellResult: string = farewell("Juan");
console.log("✅ [IMPORT - Default Function]:", farewellResult);

// ================================================================================
// 🌐 2. Importación de Módulos Completos (Namespace / Wildcard Import)
// ================================================================================
// Agrupación de todas las exportaciones de un archivo dentro de un objeto namespace.
// 📋 Nota: Es ideal cuando un módulo expone múltiples utilidades o componentes.
// ================================================================================

// [1] Importar todas las exportaciones bajo un único alias/namespace
import * as ModuleExports from "./03-modules-exports";

// [2] Acceso a la constante nombrada a través del objeto namespace
console.log("✅ [IMPORT - Namespace Const]:", ModuleExports.greeting);

// [3] Invocación de la función nombrada
const namespaceGreeting: string = ModuleExports.greet("María");
console.log("✅ [IMPORT - Namespace Function]:", namespaceGreeting);

// [4] Invocación de la exportación por defecto desde el namespace
const namespaceDefault: string = ModuleExports.default("María");
console.log("✅ [IMPORT - Namespace Default]:", namespaceDefault);