import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 32
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para la búsqueda de primer debut histórico
// ================================================================================
separator("Ejercicio 32: Búsqueda del X-Men Más Antiguo");

// Definición de la estructura de datos para un miembro de los X-Men
interface XMenMember {
  name: string;
  year: number;
}

// Colección original de mutantes con tipado estricto e inmutable
const xMenTeamRegistry: XMenMember[] = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1963 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 }
];

// ================================================================================
// 🧮 Algoritmo: Búsqueda del Debutante Más Antiguo
// ================================================================================
// [1] Valida que la colección recibida contenga elementos antes de iniciar el cálculo
// [2] Utiliza '.reduce()' para retener en cada paso el objeto con el año de aparición menor
// [3] Nota técnica: Si hay empate en el año mínimo, conserva la primera ocurrencia encontrada
// ================================================================================
function findOldestXMen(membersList: XMenMember[]): XMenMember | null {
  if (membersList.length === 0) return null;

  return membersList.reduce((oldestAcc: XMenMember, currentMember: XMenMember): XMenMember => {
    return currentMember.year < oldestAcc.year ? currentMember : oldestAcc;
  });
}

// Ejecución de la función e impresión de resultados
const oldestXMenResult: XMenMember | null = findOldestXMen(xMenTeamRegistry);

console.log("✅ [REGISTRY] Registro de mutantes procesado:", xMenTeamRegistry);

if (oldestXMenResult) {
  console.log(`✅ [RESULT] El miembro más antiguo registrado es ${oldestXMenResult.name}, aparecido en el año ${oldestXMenResult.year}.`);
} else {
  console.log("❌ [ERROR] La lista de X-Men proporcionada está vacía.");
}