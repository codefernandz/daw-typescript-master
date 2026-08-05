import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 21
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para la clasificación demográfica de usuarios
// ================================================================================
separator("Ejercicio 21: Clasificador de Edad de Usuarios");

// Definición de la estructura de datos para el objeto Usuario
interface User {
  name: string;
  years: number;
}

// Estructura del mapa que agrupará a los usuarios clasificados
interface AgeClassificationResult {
  underage: string[];
  adults: string[];
}

// Colección de prueba con tipado estricto e inmutable
const registeredUsersRegistry: User[] = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

// Límite de edad legal para definir la mayoría de edad (evitando magic numbers)
const legalAgeOfMajority: number = 18;

// ================================================================================
// 🧮 Algoritmo: Clasificador Demográfico de Edad
// ================================================================================
// [1] Toma un listado de usuarios y un umbral numérico de mayoría de edad
// [2] Reduce el arreglo de manera inmutable acumulando los nombres en categorías correspondientes
// [3] Nota técnica: Se utiliza una sola pasada declarativa con '.reduce()' para optimizar la eficiencia
// ================================================================================
function classifyUsersByAge(usersList: User[], majorityThreshold: number): AgeClassificationResult {
  return usersList.reduce(
    (accumulator: AgeClassificationResult, currentUser: User) => {
      if (currentUser.years < majorityThreshold) {
        accumulator.underage.push(currentUser.name);
      } else {
        accumulator.adults.push(currentUser.name);
      }
      return accumulator;
    },
    { underage: [], adults: [] } // Inicialización del acumulador estructurado
  );
}

// Ejecución de la clasificación y almacenamiento en constante inmutable
const ageClassification: AgeClassificationResult = classifyUsersByAge(registeredUsersRegistry, legalAgeOfMajority);

console.log("✅ [DEMOGRAPHICS] Base de usuarios bajo análisis:", registeredUsersRegistry);
console.log("✅ [RESULT] Usuarios menores de edad:", ageClassification.underage);
console.log("✅ [RESULT] Usuarios mayores de edad:", ageClassification.adults);