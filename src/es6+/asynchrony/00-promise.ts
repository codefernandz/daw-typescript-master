import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Promesas y Métodos Estáticos en TS
// ================================================================================
// Demostración del flujo asíncrono no bloqueante en el Event Loop utilizando
// Promise<T>, así como la resolución en paralelo (all) y por competición (race).
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Módulo de Asincronía - Promises, Promise.all y Promise.race");

console.log("✅ [ASYNC - Load] Módulo de asincronía cargado correctamente.");

// ================================================================================
// 📋 1. Creación y Consumo Básico de una Promesa (Promise Lifecycle)
// ================================================================================
// Instanciación de una Promise individual con manejo de resolve/reject.
// ⚠️ Nota: Promise<string> especifica que la resolución exitosa retornará un texto.
// ================================================================================

// [1] Definición de la promesa con tipado genérico explícito
const myPromise = new Promise<string>((resolve, reject) => {
  console.log("⚙️ [PROMISE - State] Estado inicial: Pending (Ejecutando lógica interna...)");

  setTimeout(() => {
    const success: boolean = true;

    if (success) {
      resolve("Operación exitosa: Datos procesados correctamente.");
    } else {
      reject("Operación fallida: Ocurrió un error en la ejecución.");
    }
  }, 1000);
});

// [2] Consumo asíncrono no bloqueante
myPromise
  .then((result: string) => {
    console.log("✅ [PROMISE - Fulfilled] Resultado individual:", result);
  })
  .catch((error: string) => {
    console.error("❌ [PROMISE - Rejected] Error individual:", error);
  });

// ================================================================================
// 🚀 2. Ejecución en Paralelo: Promise.all()
// ================================================================================
// Espera a que TODAS las promesas del arreglo se resuelvan exitosamente.
// ⚠️ Regla de Cortocircuito: Si UNA sola promesa se rechaza (reject), Promise.all()
// se rechaza INMEDIATAMENTE ignorando el resultado de las demás.
// ================================================================================

// [1] Definición de múltiples promesas heterogéneas
const promise1: Promise<number> = Promise.resolve(3);
const promise2: Promise<number> = new Promise<number>((resolve) => {
  setTimeout(() => resolve(4), 1000);
});
const promise3: Promise<number> = Promise.resolve(5);

// [2] Consumo en paralelo
Promise.all([promise1, promise2, promise3])
  .then((values: number[]) => {
    console.log("✅ [PROMISE.ALL - Success] Resultados de la ejecución en paralelo:", values); // [3, 4, 5]
  })
  .catch((error: unknown) => {
    console.error("❌ [PROMISE.ALL - Error] Al menos una promesa falló:", error);
  });

// ================================================================================
// 🏎️ 3. Competición de Promesas: Promise.race()
// ================================================================================
// Retorna el resultado de la PRIMERA promesa que se liquide (ya sea resuelta o rechazada).
// 📋 Nota: Ideal para implementar tiempos de espera límite (timeouts) en peticiones HTTP.
// ================================================================================

// [1] Definición de promesas con diferentes tiempos de respuesta
const promiseA: Promise<string> = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Resultado de la promesa A (Lenta - 2s)"), 2000);
});

const promiseB: Promise<string> = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Resultado de la promesa B (Rápida - 1s)"), 1000);
});

// [2] Evaluación por velocidad de respuesta
Promise.race([promiseA, promiseB])
  .then((result: string) => {
    console.log("✅ [PROMISE.RACE - Winner] Ganadora de la carrera por velocidad:", result); // Retorna Promesa B
  })
  .catch((error: unknown) => {
    console.error("❌ [PROMISE.RACE - Error] La primera promesa en liquidar falló:", error);
  });