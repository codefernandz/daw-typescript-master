import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Async / Await en TypeScript
// ================================================================================
// Simplificación de código asíncrono haciendo que se lea de forma síncrona/secuencial.
// 📋 Regla Fundamental: Toda función marcada con 'async' retorna implícitamente una Promise<T>.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Manejo de Asincronía Moderno con Async / Await");

// ================================================================================
// 📋 1. Definición de Interfaces y Contratos de Datos
// ================================================================================
// Contratos de datos fuertemente tipados para evitar el uso de 'any'.
// ================================================================================

interface PokemonAbilityInfo {
  name: string;
}

interface PokemonAbility {
  ability: PokemonAbilityInfo;
}

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
}

const POKEAPI_BASE_URL: string = "https://pokeapi.co/api/v2";

// ================================================================================
// 🔄 2. Comparativa: Sintaxis con .then() vs Async / Await
// ================================================================================
// Demostración de cómo la sintaxis async/await mejora la legibilidad del código.
// ================================================================================

// [1] Enfoque tradicional basado en encadenamiento de Promesas (.then / .catch)
export function getInfoWithPromises(url: string): void {
  fetch(url)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(`[HTTP ERROR]: Estado ${response.status}`);
      }
      return response.json();
    })
    .then((data: unknown) => {
      console.log("✅ [PROMISES - .then] Datos recibidos correctamente:", data);
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error("❌ [PROMISES - Error]:", error.message);
      }
    });
}

// [2] Enfoque moderno con Async / Await y Try / Catch
export async function getInfoAsync(url: string): Promise<void> {
  try {
    const response: Response = await fetch(url);

    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: Estado ${response.status}`);
    }

    const data: unknown = await response.json();
    console.log("✅ [ASYNC/AWAIT - Function] Datos recibidos correctamente:", data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ [ASYNC/AWAIT - Error]:", error.message);
    }
  }
}

// [3] Mismo enfoque utilizando sintaxis de Arrow Function
export const getInfoArrow = async (url: string): Promise<void> => {
  try {
    const response: Response = await fetch(url);

    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: Estado ${response.status}`);
    }

    const data: unknown = await response.json();
    console.log("✅ [ASYNC/AWAIT - Arrow] Datos recibidos correctamente:", data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ [ASYNC/AWAIT - Arrow Error]:", error.message);
    }
  }
};

// ================================================================================
// 🌐 3. Caso Práctico: Consumo de PokeAPI con Async / Await
// ================================================================================
// Petición HTTP asíncrona declarativa para obtener información de un Pokémon.
// ================================================================================

// [1] Declaración de función declarativa con Async / Await
export async function getPokemonInfo(pokemonName: string): Promise<void> {
  try {
    const response: Response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: Pokémon '${pokemonName}' no encontrado. Estado: ${response.status}`);
    }

    const data: Pokemon = (await response.json()) as Pokemon;

    console.log(`✅ [POKEAPI - Async Function] Info de ${data.name.toUpperCase()} (ID: #${data.id}):`);
    console.log("📋 [POKEAPI - Details] Peso:", data.weight, "| Altura:", data.height);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ [POKEAPI - Error]:", error.message);
    }
  }
}

// [2] Declaración equivalente con Arrow Function
export const getPokemonInfoArrow = async (pokemonName: string): Promise<void> => {
  try {
    const response: Response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: Pokémon '${pokemonName}' no encontrado. Estado: ${response.status}`);
    }

    const data: Pokemon = (await response.json()) as Pokemon;

    console.log(`✅ [POKEAPI - Async Arrow] Info de ${data.name.toUpperCase()} (ID: #${data.id}):`);

    const abilities: string[] = data.abilities.map((item: PokemonAbility): string => item.ability.name);
    console.log("📋 [POKEAPI - Abilities]:", abilities);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ [POKEAPI - Arrow Error]:", error.message);
    }
  }
};

// ================================================================================
// 🚀 4. Ejecución de Ejemplo
// ================================================================================

// [1] Consultas asíncronas de demostración
getPokemonInfo("pikachu");
getPokemonInfoArrow("charizard");