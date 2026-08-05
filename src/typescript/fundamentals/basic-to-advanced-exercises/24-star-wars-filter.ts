import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 24
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el filtrado de datos categóricos
// ================================================================================
separator("Ejercicio 24: Filtrado de Personajes de Star Wars");

// Definición de la estructura de datos para un personaje
interface StarWarsCharacter {
  name: string;
  species: string;
}

// Colección de personajes original con tipado estricto e inmutable
const starWarsCharactersRegistry: StarWarsCharacter[] = [
  { name: "Luke Skywalker", species: "Human" },
  { name: "Darth Vader", species: "Human" },
  { name: "Chewbacca", species: "Wookiee" },
  { name: "Leia Organa", species: "Human" },
  { name: "R2-D2", species: "Droid" },
  { name: "C-3PO", species: "Droid" },
  { name: "Obi-Wan Kenobi", species: "Human" },
  { name: "Yoda", species: "Unknown" },
  { name: "Han Solo", species: "Human" }
];

// Especie objetivo para el filtro (evitando "magic strings" en el cuerpo de la función)
const targetSpecies: string = "Human";

// ================================================================================
// 🧮 Algoritmo: Filtrado Declarativo de Especies
// ================================================================================
// [1] Toma la colección completa de personajes y la especie que se desea aislar
// [2] Aplica el método declarativo '.filter()' de forma pura e inmutable
// [3] Nota técnica: Se retorna directamente la evaluación booleana sin mutar arrays externos
// ================================================================================
function filterCharactersBySpecies(characters: StarWarsCharacter[], speciesToFilter: string): StarWarsCharacter[] {
  // .filter() genera un nuevo array en memoria sin alterar el array original 'starWarsCharactersRegistry'
  return characters.filter((character: StarWarsCharacter) => character.species === speciesToFilter);
}

// Ejecución del filtro e impresión de resultados
const humanCharacters: StarWarsCharacter[] = filterCharactersBySpecies(starWarsCharactersRegistry, targetSpecies);

console.log("✅ [REGISTRY] Censo galáctico completo:", starWarsCharactersRegistry);
console.log(`✅ [RESULT] Personajes obtenidos de la especie "${targetSpecies}":`, humanCharacters);