import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 22
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el reemplazo de elementos condicionales
// ================================================================================
separator("Ejercicio 22: Reemplazo Vegano con Puntero Seguro");

// Definición de la estructura de datos para un alimento en el menú
interface FoodItem {
  name: string;
  isVegan: boolean;
}

// Colección de frutas inmutable para el reemplazo
const availableFruits: string[] = ["Strawberry", "Banana", "Orange", "Apple"];

// Menú original con tipado explícito
const originalFoodSchedule: FoodItem[] = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// ================================================================================
// 🧮 Algoritmo: Reemplazo Vegano con Puntero Seguro
// ================================================================================
// [1] Mapea la colección de comida creando una copia profunda para respetar la inmutabilidad
// [2] Utiliza un puntero secuencial independiente para extraer las frutas del arreglo sin repetir
// [3] Nota técnica: Se previene el desbordamiento (out of bounds) si hay más platos no veganos que frutas disponibles
// ================================================================================
function sanitizeWithVeganAlternatives(schedule: FoodItem[], fruitsList: string[]): FoodItem[] {
  let fruitPointer: number = 0;

  // Retornamos un nuevo array modificado usando .map() para no alterar el array original
  return schedule.map((currentFood: FoodItem): FoodItem => {
    // Si ya es vegano, lo mantenemos intacto
    if (currentFood.isVegan) {
      return { ...currentFood };
    }

    // Evaluamos si aún quedan frutas de reemplazo en el inventario
    const replacementFruitName: string = fruitsList[fruitPointer];

    if (replacementFruitName) {
      fruitPointer++; // Desplazamos el puntero a la siguiente fruta única
      return { name: replacementFruitName, isVegan: true };
    }

    // Si nos quedamos sin frutas, se mantiene el alimento original por seguridad
    return { ...currentFood };
  });
}

// Ejecución del sanitizador e impresión en terminal
const veganizedFoodSchedule: FoodItem[] = sanitizeWithVeganAlternatives(originalFoodSchedule, availableFruits);

console.log("✅ [INVENTORY] Menú original (sin alterar):", originalFoodSchedule);
console.log("✅ [RESULT] Menú veganizado final:", veganizedFoodSchedule);