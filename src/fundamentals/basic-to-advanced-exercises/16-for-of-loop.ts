import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 16
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para la evaluación de iteradores secuenciales
// ================================================================================
separator("Ejercicio 16: Bucle For...Of (Iteración Secuencial)");

// Colección de prueba con tipado explícito e inmutable
const activeDestinationsCatalog: string[] = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

// ================================================================================
// 🔄 Algoritmo: Iteración Eficiente (for...of)
// ================================================================================
// [1] Recorre de manera secuencial cada uno de los destinos disponibles en el catálogo de viajes
// [2] Extrae de forma automática el valor de cada índice en una constante local en cada iteración
// [3] Nota técnica: A diferencia de '.forEach()', el bucle 'for...of' permite el uso de sentencias de control como 'break' o 'continue'
// ================================================================================
for (const currentDestination of activeDestinationsCatalog) {
  // Impresión formateada de cada destino secuencial
  console.log(`✅ [TRAVEL DESTINATION] Destino disponible: ${currentDestination}`);
}