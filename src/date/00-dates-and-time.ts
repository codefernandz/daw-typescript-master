import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa del Objeto Date en TypeScript
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Demostración práctica de instanciación, lectura, mutación, formateo y comparación de fechas
// ================================================================================
separator("Manejo y Manipulación del Objeto Date Nativo");

// ================================================================================
// 📅 1. Instanciación e Inicialización de Fechas
// ================================================================================

// [1] Instancia con la fecha y hora actual del sistema
const currentDate: Date = new Date();
const now: Date = new Date();

// [2] Instancia con parámetros específicos: Año, Mes (0-11), Día, Hora, Min, Seg, Miliseg
// ⚠️ Nota importante: Los meses en JavaScript van indexados desde 0 (Enero = 0, Diciembre = 11)
const specificDate: Date = new Date(2023, 5, 15, 10, 30, 0, 0); // 15 de Junio de 2023
const birthday: Date = new Date(1990, 6, 15);                   // 15 de Julio de 1990

console.log("✅ [DATE - Initial] Fecha actual:", currentDate);
console.log("✅ [DATE - Initial] Fecha específica (Junio):", specificDate);
console.log("✅ [DATE - Initial] Cumpleaños (Julio):", birthday);

// ================================================================================
// 🔍 2. Obtención de Componentes (Getters)
// ================================================================================

const year: number = now.getFullYear();        // Año (ej. 2026)
const month: number = now.getMonth();          // Mes en base 0 (0-11)
const day: number = now.getDate();             // Día del mes (1-31)
const dayOfWeek: number = now.getDay();        // Día de la semana en base 0 (0 = Domingo, 6 = Sábado)
const hours: number = now.getHours();          // Hora en formato 24h (0-23)
const minutes: number = now.getMinutes();      // Minuto (0-59)
const seconds: number = now.getSeconds();      // Segundo (0-59)
const milliseconds: number = now.getMilliseconds(); // Milisegundo (0-999)

console.log(`✅ [DATE - Getters] Fecha: Año ${year}, Mes real: ${month + 1}, Día: ${day} (Día semana: ${dayOfWeek})`);
console.log(`✅ [DATE - Getters] Hora detallada: ${hours}:${minutes}:${seconds}.${milliseconds}`);

// ================================================================================
// 🛠️ 3. Modificación de Componentes (Setters / Mutación)
// ================================================================================
// Los métodos 'set' mutan directamente la instancia original de la fecha.

now.setFullYear(2025);
now.setMonth(11); // Cambia el mes a Diciembre (11)
now.setDate(25);  // Cambia el día al 25

console.log("✅ [DATE - Mutated] Fecha modificada (Navidad 2025):", now);

// ================================================================================
// 🎨 4. Formateo de Fechas e Internacionalización (i18n)
// ================================================================================

// Formateo de fecha según configuración regional en español
const formatDate: string = now.toLocaleDateString("es-ES", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

// Formateo de hora en español
const formatTime: string = now.toLocaleTimeString("es-ES", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});

console.log("✅ [DATE - Format] Fecha formateada en español:", formatDate);
console.log("✅ [DATE - Format] Hora formateada en español:", formatTime);

// ================================================================================
// ⚖️ 5. Comparación y Evaluación de Fechas
// ================================================================================

const date1: Date = new Date(2023, 0, 1);  // 1 de Enero de 2023
const date2: Date = new Date(2023, 11, 31); // 31 de Diciembre de 2023

// [1] Comparación relacional mediante operadores < y >
if (date1 < date2) {
  console.log("✅ [DATE - Compare] date1 es cronológicamente anterior a date2.");
} else if (date1 > date2) {
  console.log("✅ [DATE - Compare] date1 es cronológicamente posterior a date2.");
}

// [2] Comparación de igualdad estrita mediante marcas de tiempo en milisegundos (.getTime())
// 📋 Referencia técnica: date1 === date2 evalúa referencias en memoria y daría 'false'.
if (date1.getTime() === date2.getTime()) {
  console.log("✅ [DATE - Compare] date1 y date2 representan exactamente el mismo instante de tiempo.");
} else {
  console.log("✅ [DATE - Compare] date1 y date2 corresponden a instancias o momentos diferentes.");
}