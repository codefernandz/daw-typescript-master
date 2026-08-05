import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 31
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el aplanamiento de relaciones anidadas
// ================================================================================
separator("Ejercicio 31: Mapeador de Influencias Musicales Directas");

// Definición de la estructura de datos para un artista y sus influencias
interface ArtistInfluences {
  name: string;
  influences: string[];
}

// Estructura de salida plana para representar cada par único (Artista -> Influencia)
interface InfluencePair {
  artistName: string;
  influencedBy: string;
}

// Colección original de artistas con tipado estricto e inmutable
const musicLegendsRegistry: ArtistInfluences[] = [
  { name: "Kurt Cobain", influences: ["The Beatles", "Pixies", "Lead Belly"] },
  { name: "David Bowie", influences: ["Little Richard", "Chuck Berry", "The Velvet Underground"] },
  { name: "Eddie Vedder", influences: ["The Who", "Neil Young", "Jim Morrison"] },
  { name: "Freddie Mercury", influences: ["Liza Minnelli", "Jimi Hendrix", "Aretha Franklin"] },
  { name: "John Lennon", influences: ["Elvis Presley", "Chuck Berry", "Buddy Holly"] }
];

// ================================================================================
// 🧮 Algoritmo: Aplanamiento Declarativo de Estructuras Anidadas
// ================================================================================
// [1] Recorre el registro de artistas extrayendo cada array interno de influencias
// [2] Utiliza '.flatMap()' para iterar sobre la estructura anidada y retornar un único array plano
// [3] Nota técnica: '.flatMap()' combina la transformación de '.map()' con el aplanamiento de '.flat()'
// ================================================================================
function extractInfluencePairs(artistsList: ArtistInfluences[]): InfluencePair[] {
  return artistsList.flatMap((artist: ArtistInfluences) =>
    artist.influences.map((influence: string): InfluencePair => ({
      artistName: artist.name,
      influencedBy: influence
    }))
  );
}

// Ejecución del algoritmo e impresión estructurada de resultados
const mappedInfluencePairs: InfluencePair[] = extractInfluencePairs(musicLegendsRegistry);

console.log("✅ [REGISTRY] Registro de artistas procesado:", musicLegendsRegistry);
console.log("✅ [RESULT] Listado de influencias directas extraídas:");

// Impresión limpia de pares con formato de traza de consola
mappedInfluencePairs.forEach((pair: InfluencePair) => {
  console.log(` 🎵 Artista: "${pair.artistName}" ➔ Influenciado por: "${pair.influencedBy}"`);
});