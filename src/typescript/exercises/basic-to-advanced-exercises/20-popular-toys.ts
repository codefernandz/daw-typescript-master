import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 20
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el análisis cuantitativo de ventas
// ================================================================================
separator("Ejercicio 20: Filtrado de Juguetes Populares");

// Definición de la estructura de datos para el objeto Juguete
interface Toy {
  id: number;
  name: string;
  sellCount: number;
}

// Colección de prueba con tipado estricto e inmutable
const globalToysInventory: Toy[] = [
  { id: 101, name: "Super Soaker", sellCount: 15 },
  { id: 102, name: "Tamagotchi", sellCount: 22 },
  { id: 103, name: "Polly Pocket", sellCount: 8 },
  { id: 104, name: "Yo-yo", sellCount: 33 },
  { id: 105, name: "Pikachu plush toy", sellCount: 19 },
  { id: 106, name: "Rubik's Cube", sellCount: 27 },
  { id: 107, name: "Fidget Spinner", sellCount: 12 },
  { id: 108, name: "Slinky", sellCount: 5 },
  { id: 109, name: "Magic 8-Ball", sellCount: 38 },
  { id: 110, name: "Troll Doll", sellCount: 20 }
];

// Umbral de popularidad para evitar "magic numbers" en el código
const popularitySalesThreshold: number = 15;

// ================================================================================
// 🧮 Algoritmo: Filtrado por Umbral de Ventas
// ================================================================================
// [1] Recibe una colección de juguetes y un valor límite mínimo de ventas registradas
// [2] Evalúa de manera declarativa cada registro retornando solo aquellos que superen el umbral
// [3] Nota técnica: Se prefiere '.filter()' para garantizar la inmutabilidad y evitar mutar variables externas
// ================================================================================
function extractPopularToys(toysCollection: Toy[], salesThreshold: number): Toy[] {
  // Retorna una nueva lista inmutable con los elementos que cumplen la condición de corte
  return toysCollection.filter((currentToy: Toy) => currentToy.sellCount > salesThreshold);
}

// Ejecución del filtrado y guardado en constante inmutable
const filteredPopularToys: Toy[] = extractPopularToys(globalToysInventory, popularitySalesThreshold);

console.log("✅ [INVENTORY] Inventario general bajo análisis:", globalToysInventory);
console.log(`✅ [RESULT] Juguetes populares (más de ${popularitySalesThreshold} ventas):`, filteredPopularToys);