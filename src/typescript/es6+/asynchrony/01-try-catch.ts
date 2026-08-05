import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Control de Errores con Try...Catch...Finally
// ================================================================================
// Manejo seguro de excepciones y operaciones propensas a fallos (ej. parseo de datos
// o peticiones asíncronas) sin interrumpir el flujo principal de ejecución.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Manejo Robusto de Errores con Try...Catch...Finally");

// ================================================================================
// 📋 1. Sintaxis Básica y Lanzamiento de Excepciones (Error Throwing)
// ================================================================================
// Estructura fundamental para interceptar errores provocados mediante 'throw'.
// ⚠️ Nota en TS: En TypeScript moderno, la variable capturada en 'catch' es de tipo
// 'unknown' por seguridad, lo que requiere comprobar su instancia antes de leer '.message'.
// ================================================================================

try {
  console.log("⚙️ [TRY/CATCH - Flow] Iniciando bloque de código propenso a fallos...");

  // [1] Lanzamiento explícito de un objeto de tipo Error
  throw new Error("Ocurrió un error inesperado en el procesamiento de datos.");
} catch (error: unknown) {
  // [2] Verificación del tipo de error para acceso seguro a sus propiedades
  if (error instanceof Error) {
    console.error("❌ [TRY/CATCH - Captured] Excepción capturada:", error.message);
  } else {
    console.error("❌ [TRY/CATCH - Captured] Error no estándar detectado:", error);
  }
} finally {
  // [3] Bloque de garantía que se ejecuta SIEMPRE (haya o no un error)
  console.log("📋 [TRY/CATCH - Finally] Bloque cleanup ejecutado correctamente.");
}

// ================================================================================
// 🚀 2. Caso Práctico: Deserialización Segura de JSON (JSON.parse)
// ================================================================================
// Control de errores de sintaxis al convertir cadenas a objetos JS.
// ================================================================================

// [1] Intento de parseo de un JSON con sintaxis válida
try {
  const jsonString: string = '{"name": "John", "age": 30}';
  const result: { name: string; age: number } = JSON.parse(jsonString);

  console.log("✅ [JSON - Success] Estructura deserializada con éxito:", result);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("❌ [JSON - Error] Fallo al parsear la cadena JSON:", error.message);
  }
} finally {
  console.log("📋 [JSON - Finally] Finalizó la comprobación del parseo JSON.");
}

// [2] Intento de parseo de un JSON con sintaxis inválida (Caso de fallo controlado)
try {
  const invalidJsonString: string = '{"name": "John", "age": 30,}'; // Coma residual inválida
  const invalidResult: unknown = JSON.parse(invalidJsonString);

  console.log("✅ [JSON - Success] Resultado:", invalidResult);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("❌ [JSON - Invalid Syntax] Error capturado correctamente sin romper la app:", error.message);
  }
} finally {
  console.log("📋 [JSON - Finally] Finalizó el control de errores sobre JSON malformado.");
}