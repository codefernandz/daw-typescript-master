import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Consumo de APIs REST (PokeAPI Example)
// ================================================================================
// Demostración práctica de integración con APIs externas utilizando Fetch API,
// manejo de respuestas JSON complejas y modelado con interfaces de TypeScript.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Consumo de API Externa: PokeAPI con Fetch API");

// ================================================================================
// 📋 1. Definición de Interfaces y Contratos de Datos (PokeAPI Schema)
// ================================================================================
// Interfaces fuertemente tipadas que reemplazan el uso de 'any' para garantizar
// el autocompletado y la seguridad de tipos en TypeScript.
// ================================================================================

interface PokemonAbilityInfo {
  name: string;
  url: string;
}

interface PokemonAbility {
  ability: PokemonAbilityInfo;
  is_hidden: boolean;
  slot: number;
}

interface PokemonTypeInfo {
  name: string;
  url: string;
}

interface PokemonType {
  slot: number;
  type: PokemonTypeInfo;
}

interface PokemonSprites {
  front_default: string | null;
  back_default: string | null;
}

interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
  sprites: PokemonSprites;
}

// URL base oficial de la PokeAPI v2
const POKEAPI_BASE_URL: string = "https://pokeapi.co/api/v2";

// ================================================================================
// 🌐 2. Consulta y Deserialización de Recurso (Pokemon Resource Fetch)
// ================================================================================
// Petición GET asíncrona para obtener el perfil detallado del Pokémon "ditto".
// ⚠️ Regla Fundamental: Siempre tipar explícitamente la respuesta deseada en la
// promesa devuelta por `.json()` mediante casteo (`as Promise<T>`).
// ================================================================================

// [1] Petición GET a la PokeAPI
fetch(`${POKEAPI_BASE_URL}/pokemon/ditto`)
  .then((response: Response): Promise<Pokemon> => {
    // Validar el estado HTTP de la respuesta (200 OK)
    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: No se pudo encontrar el Pokémon. Estado: ${response.status}`);
    }
    return response.json() as Promise<Pokemon>;
  })
  .then((data: Pokemon) => {
    console.log(`✅ [POKEAPI - Success] Pokémon obtenido: ${data.name.toUpperCase()} (ID: #${data.id})`);
    console.log("📋 [POKEAPI - Details] Peso:", data.weight, "| Altura:", data.height);

    // Mapeo de habilidades tipadas
    const abilityNames: string[] = data.abilities.map(
      (item: PokemonAbility): string => item.ability.name
    );
    console.log("📋 [POKEAPI - Abilities] Habilidades registradas:", abilityNames);
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error("❌ [POKEAPI - Error]: Fallo en la consulta:", error.message);
    } else {
      console.error("❌ [POKEAPI - Error]: Ocurrió un error no identificado:", error);
    }
  });