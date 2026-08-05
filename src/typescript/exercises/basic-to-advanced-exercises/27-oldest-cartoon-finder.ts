import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 27
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para la búsqueda de valores mínimos acumulados
// ================================================================================
separator("Ejercicio 27: Identificador de Dibujos Animados Más Antiguo");

// Definición de la estructura de datos para una serie animada
interface Cartoon {
  name: string;
  debut: number;
}

// Colección original de dibujos animados con tipado estricto e inmutable
const animatedSeriesCatalog: Cartoon[] = [
  { name: "Bugs Bunny", debut: 1938 },
  { name: "SpongeBob SquarePants", debut: 1999 },
  { name: "Tom and Jerry", debut: 1940 },
  { name: "Mickey Mouse", debut: 1928 },
  { name: "Scooby-Doo", debut: 1969 },
  { name: "The Flintstones", debut: 1960 },
  { name: "Batman: The Animated Series", debut: 1992 },
  { name: "The Simpsons", debut: 1989 },
  { name: "Pokémon", debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

// ================================================================================
// 🧮 Algoritmo: Búsqueda del Mínimo Histórico
// ================================================================================
// [1] Toma un listado de animaciones y reduce la colección comparando el año de debut
// [2] Utiliza '.reduce()' para conservar en cada iteración el objeto con el año menor
// [3] Nota técnica: Se incluye una validación de seguridad por si la lista recibida está vacía
// ================================================================================
function findOldestCartoon(cartoonsList: Cartoon[]): Cartoon | null {
  if (cartoonsList.length === 0) return null;

  return cartoonsList.reduce((oldestAcc: Cartoon, currentCartoon: Cartoon): Cartoon => {
    return currentCartoon.debut < oldestAcc.debut ? currentCartoon : oldestAcc;
  });
}

// Ejecución del algoritmo e impresión de resultados
const oldestCartoonResult: Cartoon | null = findOldestCartoon(animatedSeriesCatalog);

console.log("✅ [CATALOG] Catálogo de animaciones procesado:", animatedSeriesCatalog);

if (oldestCartoonResult) {
  console.log(`✅ [RESULT] La serie animada más antigua es "${oldestCartoonResult.name}" (Estreno: ${oldestCartoonResult.debut})`);
} else {
  console.log("❌ [ERROR] El catálogo de animaciones está vacío.");
}