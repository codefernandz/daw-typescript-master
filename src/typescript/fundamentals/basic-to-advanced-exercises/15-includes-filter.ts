import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 15
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para la evaluación de filtros de texto
// ================================================================================
separator("Ejercicio 15: Filtrado de Productos con Includes");

// Colección de prueba con tipado explícito e inmutable
const activeProductsCatalog: string[] = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

// Variable semántica de búsqueda para evitar "magic strings"
const targetSearchKeyword: string = "Camiseta";

// ================================================================================
// 🔍 Algoritmo: Filtrado por Subcadena (.includes)
// ================================================================================
// [1] Recorre secuencialmente cada uno de los elementos de la colección de productos
// [2] Evalúa en runtime si el nombre del producto contiene la palabra clave definida
// [3] Nota técnica: El método '.includes()' de JS/TS es sensible a mayúsculas y minúsculas (case-sensitive)
// ================================================================================
for (const currentProduct of activeProductsCatalog) {
  // Evaluación lógica y directa utilizando la API nativa de String
  if (currentProduct.includes(targetSearchKeyword)) {
    console.log(`✅ [FILTER MATCH] Producto encontrado: "${currentProduct}"`);
  }
}