import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 19
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el filtrado avanzado de strings
// ================================================================================
separator("Ejercicio 19: Filtrado Avanzado de Juguetes");

// Definición de la estructura de datos para cada juguete
interface Toy {
  id: number;
  name: string;
}

// Colección de prueba con tipado estricto
const activeToysInventory: Toy[] = [
  { id: 5, name: "Transformers" },
  { id: 11, name: "LEGO" },
  { id: 23, name: "Hot Wheels" },
  { id: 40, name: "Rascador de gato" },
  { id: 40, name: "FurReal Friends gato interactivo" },
  { id: 60, name: "Nerf Blaster" },
  { id: 71, name: "Sylvanian Families - Familia gato" }
];

// Palabra clave de exclusión para evitar acoplamientos y strings mágicos
const restrictedKeyword: string = "gato";

// ================================================================================
// 🧮 Algoritmo: Filtrado de Inventario de Juguetes
// ================================================================================
// [1] Recibe una colección de juguetes y una palabra clave de restricción
// [2] Filtra de forma inmutable devolviendo un nuevo arreglo con aquellos elementos que NO contienen la subcadena
// [3] Nota técnica: Se aplica '.toLowerCase()' tanto al nombre del juguete como a la palabra clave para un matching robusto
// ================================================================================
function filterRestrictedToys(toysCollection: Toy[], keywordToExclude: string): Toy[] {
  const normalizedKeyword: string = keywordToExclude.toLowerCase();

  return toysCollection.filter((currentToy: Toy) => {
    const normalizedToyName: string = currentToy.name.toLowerCase();
    return !normalizedToyName.includes(normalizedKeyword);
  });
}

// Ejecución del filtro y guardado en constante inmutable
const sanitizedToysInventory: Toy[] = filterRestrictedToys(activeToysInventory, restrictedKeyword);

console.log("✅ [INVENTORY] Catalogo original (intacto):", activeToysInventory);
console.log(`✅ [RESULT] Inventario sin juguetes de "${restrictedKeyword}":`, sanitizedToysInventory);