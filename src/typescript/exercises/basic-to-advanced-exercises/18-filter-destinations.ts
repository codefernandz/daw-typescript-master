import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 18
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el filtrado seguro de colecciones estructuradas
// ================================================================================
separator("Ejercicio 18: Filtrado Seguro de Destinos Turísticos");

// Definición de la estructura de datos para cada destino turístico
interface PlaceToTravel {
  id: number;
  name: string;
}

// Colección de prueba con tipado estricto
const activeDestinationsList: PlaceToTravel[] = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

// Arreglo de IDs restringidos para evitar "magic numbers" dispersos en el código
const restrictedDestinationIds: number[] = [11, 40];

// ================================================================================
// 🎮 Algoritmo: Filtrado Seguro e Inmutable
// ================================================================================
// [1] Toma como base el catálogo de destinos turísticos original
// [2] Filtra de forma declarativa excluyendo los elementos cuyos IDs coincidan con los restringidos
// [3] Nota técnica: Se prefiere '.filter()' en lugar de '.splice()' para asegurar la inmutabilidad y evitar bugs de indexación
// ================================================================================
function filterDestinations(destinations: PlaceToTravel[], excludedIds: number[]): PlaceToTravel[] {
  // Retorna un nuevo array en el Heap, manteniendo intacto el array original
  return destinations.filter((currentDestination) => !excludedIds.includes(currentDestination.id));
}

// Ejecución del algoritmo y captura del catálogo sanitizado
const sanitizedDestinationsList: PlaceToTravel[] = filterDestinations(activeDestinationsList, restrictedDestinationIds);

console.log("✅ [FILTER] Original list (intacta):", activeDestinationsList);
console.log("✅ [RESULT] Sanitized list (sin IDs 11 y 40):", sanitizedDestinationsList);