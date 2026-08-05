import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Pintado en el DOM con TypeScript & Async/Await
// ================================================================================
// Integración del flujo de peticiones asíncronas con la creación y manipulación
// segura de elementos del DOM (`document.createElement`), manejo de errores y append.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Asincronía y Renderizado Dinámico en el DOM");

// ================================================================================
// 📋 1. Definición de Tipos y Modelos de Datos (Type Definitions)
// ================================================================================
// Contratos de datos estructurados para las respuestas del servidor.
// ================================================================================

type PokemonAbilityInfo = {
  name: string;
};

type PokemonAbility = {
  ability: PokemonAbilityInfo;
};

type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
};

const POKEAPI_BASE_URL: string = "https://pokeapi.co/api/v2";

// ================================================================================
// 🌐 2. Selección e Infraestructura Dinámica del DOM
// ================================================================================
// Creación programática del nodo contenedor base para garantizar la presencia en pantalla.
// 📋 Nota: Se asigna un ID explícito para trazabilidad e integración CSS.
// ================================================================================

// [1] Creación del elemento contenedor en memoria
const pokemonContainer: HTMLElement | null = document.createElement("div");
pokemonContainer.id = "pokemon-container";

// ================================================================================
// 🔌 3. Capa de Servicios y Consumo Asíncrono (Data Fetching Layer)
// ================================================================================
// Función encargada únicamente de realizar la petición HTTP y retornar los datos.
// ================================================================================

// [1] Petición asíncrona tipada que retorna la entidad 'Pokemon' o 'null' en caso de fallo
async function fetchPokemonData(pokemonName: string): Promise<Pokemon | null> {
  try {
    const response: Response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: Estado ${response.status}`);
    }

    const data: Pokemon = (await response.json()) as Pokemon;
    console.log(`✅ [DATA SERVICE] Datos obtenidos exitosamente para: ${pokemonName}`);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ [Error al obtener datos del Pokémon]:", error.message);
    } else {
      console.error("❌ [Error No Identificado]:", error);
    }
    return null;
  }
}

// ================================================================================
// 🖼️ 4. Capa de Presentación y Pintado en el DOM (DOM Rendering Layer)
// ================================================================================
// Modificación pura de la interfaz e inserción en el cuerpo del documento (`document.body`).
// ================================================================================

// [1] Renderiza la información de la entidad e inserta el elemento en el DOM
function renderPokemonInfo(pokemon: Pokemon): void {
  // Verificación de guardas de nulidad para evitar excepciones en runtime
  if (!pokemonContainer) {
    console.error("⚠️ [DOM RENDER ERROR]: No se pudo instanciar el contenedor '#pokemon-container'.");
    return;
  }

  // [2] Transformación de arreglo de objetos a cadena delimitada
  const abilitiesList: string = pokemon.abilities
    .map((item: PokemonAbility): string => item.ability.name)
    .join(", ");

  // [3] Inyección dinámica de marcado HTML
  pokemonContainer.innerHTML = `
    <div class="pokemon-card">
      <h2>${pokemon.name.toUpperCase()} (ID: #${pokemon.id})</h2>
      <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
      <p><strong>Habilidades:</strong> ${abilitiesList}</p>
    </div>
  `;

  // [4] Acoplamiento del nodo al árbol DOM
  document.body.appendChild(pokemonContainer);
  console.log(`✅ [DOM RENDER] Componente de '${pokemon.name}' dibujado e insertado en el body.`);
}

// ================================================================================
// 🎮 5. Controlador de Flujo de Orquestación (Presenter / Controller)
// ================================================================================
// Enlaza la obtención de datos asíncrona con el renderizado correspondiente.
// ================================================================================

// [1] Función orquestadora
async function displayPokemonInfo(pokemonName: string): Promise<void> {
  console.log(`⚙️ [PROCESS START] Iniciando flujo para: ${pokemonName}...`);

  const pokemonData: Pokemon | null = await fetchPokemonData(pokemonName);

  if (pokemonData) {
    renderPokemonInfo(pokemonData);
  } else {
    if (pokemonContainer) {
      pokemonContainer.innerHTML = `
        <div class="error-card">
          <p>⚠️ El Pokémon '<strong>${pokemonName}</strong>' no fue encontrado.</p>
        </div>
      `;
      document.body.appendChild(pokemonContainer);
    }
  }
}

// ================================================================================
// 🚀 6. Ejecución de Ejemplo
// ================================================================================

// [1] Llamada de demostración
displayPokemonInfo("pikachu");