import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa del Método Array.prototype.map()
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación de
// la transformación inmutable de arreglos en TypeScript.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Transformación de Arreglos con Array.prototype.map()");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos
// ================================================================================
// Contratos de datos fuertemente tipados para las transformaciones de objetos.
// ================================================================================

interface NameMetadata {
  name: string;
  length: number;
}

// ================================================================================
// 🔄 2. Transformaciones Prácticas con .map()
// ================================================================================
// Procesa cada elemento de un arreglo creando un NUEVO arreglo con los resultados.
// ⚠️ Regla Fundamental: .map() SIEMPRE retorna un nuevo arreglo de la MISMA longitud que el original.
// ================================================================================

// [1] Caso 1: Conversión numérica simple (Años humanos a años perrunos)
const agedHumans: number[] = [10, 20, 30, 40, 50];

// Transformación: Multiplicar cada edad por el factor 7
const agedDogs: number[] = agedHumans.map((age: number): number => age * 7);

console.log("✅ [MAP - Arithmetic] Edades humanas de origen:", agedHumans);
console.log("✅ [MAP - Arithmetic] Edades caninas resultantes:", agedDogs);

// [2] Caso 2: Mapeo de cadenas a objetos estructurados (Nombres a Metadatos)
const names: string[] = ["Alice", "Bob", "Charlie", "David"];

// Transformación: Mapear cada string a un objeto de tipo NameMetadata
const nameLengths: NameMetadata[] = names.map((name: string): NameMetadata => ({
  name,
  length: name.length
}));

console.log("✅ [MAP - Objects] Nombres originales:", names);
console.log("✅ [MAP - Objects] Estructura de metadatos mapeada:", nameLengths);

// [3] Caso 3: Conversión de divisas con factor flotante (Euros a Dólares)
const EXCHANGE_RATE_EUR_TO_USD: number = 1.2;
const pricesInEuros: number[] = [10, 20, 30, 40, 50];

// Transformación: Multiplicar cada precio por la tasa de cambio
const pricesInDollars: number[] = pricesInEuros.map(
  (price: number): number => price * EXCHANGE_RATE_EUR_TO_USD
);

console.log("✅ [MAP - Currency] Precios base en EUR:", pricesInEuros);
console.log("✅ [MAP - Currency] Precios convertidos a USD:", pricesInDollars);