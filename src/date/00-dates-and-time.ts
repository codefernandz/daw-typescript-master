import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa del Objeto Date en TypeScript
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación de
// la compilación estática mediante el inicio de la demostración práctica.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Manejo y Manipulación del Objeto Date Nativo");

// ================================================================================
// 📅 1. Instanciación e Inicialización de Fechas
// ================================================================================
// Métodos para crear objetos Date en tiempo de ejecución.
// ⚠️ Nota: Los meses en JS/TS están indexados desde 0 (0 = Enero, 11 = Diciembre).
// ================================================================================

// [1] Instancia con la fecha y hora actual del sistema (timestamp en vivo)
const currentDate: Date = new Date();
const now: Date = new Date();

// [2] Instancia con parámetros específicos (Año, Mes 0-11, Día, Hora, Min, Seg, Miliseg)
const specificDate: Date = new Date(2023, 5, 15, 10, 30, 0, 0); // 15/06/2023 - 10:30:00.000
const birthday: Date = new Date(1990, 6, 15);                   // 15/07/1990 - 00:00:00.000

// [3] Verificación y trazabilidad por consola
console.log("✅ [DATE - Initial] Fecha actual:", currentDate);
console.log("✅ [DATE - Initial] Fecha específica (Junio):", specificDate);
console.log("✅ [DATE - Initial] Cumpleaños (Julio):", birthday);

// ================================================================================
// 🔍 2. Obtención de Componentes (Getters) y Zonas Horarias
// ================================================================================
// Extracción de partes individuales de una instancia Date y lectura del desfase
// respecto a la zona horaria UTC.
// ================================================================================

// [1] Extracción de partes individuales de una instancia Date
const year: number = now.getFullYear();             // Año de 4 dígitos (ej. 2026)
const month: number = now.getMonth();               // Mes en base 0 (0-11)
const day: number = now.getDate();                  // Día del mes (1-31)
const dayOfWeek: number = now.getDay();             // Día de la semana (0 = Domingo, 6 = Sábado)
const hours: number = now.getHours();               // Formato 24h (0-23)
const minutes: number = now.getMinutes();           // Minutos (0-59)
const seconds: number = now.getSeconds();           // Segundos (0-59)
const milliseconds: number = now.getMilliseconds(); // Milisegundos (0-999)

// [2] Obtención del desfase con la zona horaria UTC
const tzOffset: number = now.getTimezoneOffset(); // Desfase respecto a UTC en minutos

// [3] Formateo y salida por consola de los valores obtenidos
console.log(`✅ [DATE - Getters] Fecha: Año ${year}, Mes real: ${month + 1}, Día: ${day} (Día semana: ${dayOfWeek})`);
console.log(`✅ [DATE - Getters] Hora detallada: ${hours}:${minutes}:${seconds}.${milliseconds}`);
console.log(`✅ [DATE - Getters] Desfase con UTC: ${tzOffset} minutos (${tzOffset / -60} horas)`);

// ================================================================================
// 🛠️ 3. Modificación de Componentes (Setters / Mutación y Aritmética)
// ================================================================================
// Alteración directa de propiedades mediante setters y manejo automático de
// desbordamiento de fechas (Overflow).
// ⚠️ Mutabilidad: Los métodos 'set' modifican el objeto original directamente.
// ================================================================================

// [1] Modificación directa de los valores de la instancia (Setters)
now.setFullYear(2025); // Modifica el año a 2025
now.setMonth(11);      // Modifica el mes a Diciembre (índice 11)
now.setDate(25);       // Modifica el día al 25

// [2] Aritmética de fechas con manejo automático de desbordamiento (Overflow)
const futureDate: Date = new Date(now.getTime());
futureDate.setDate(futureDate.getDate() + 10); // Transiciona automáticamente de Diciembre a Enero 2026

// [3] Confirmación de cambios en consola
console.log("✅ [DATE - Mutated] Fecha modificada (Navidad 2025):", now);
console.log("✅ [DATE - Arithmetic] Aritmética de fechas (+10 días):", futureDate);

// ================================================================================
// 🎨 4. Formateo de Fechas e Internacionalización (i18n / ISO)
// ================================================================================
// Transformación de la instancia Date a cadenas legibles localizadas o en formato
// ISO 8601 estandarizado para backend/APIs.
// ================================================================================

// [1] Transformación a texto localizado usando 'es-ES' (Intl)
const formatDate: string = now.toLocaleDateString("es-ES", {
  weekday: "long",    // Nombre del día (ej. "jueves")
  year: "numeric", // Año completo (ej. "2025")
  month: "long",    // Nombre del mes (ej. "diciembre")
  day: "numeric"  // Día del mes (ej. "25")
});

const formatTime: string = now.toLocaleTimeString("es-ES", {
  hour: "2-digit",  // Hora a 2 dígitos
  minute: "2-digit",  // Minutos a 2 dígitos
  second: "2-digit"   // Segundos a 2 dígitos
});

// [2] Serialización a formato UTC estándar para APIs REST (ISO 8601)
const isoFormat: string = now.toISOString();

// [3] Impresión de resultados formateados
console.log("✅ [DATE - Format] Fecha formateada en español:", formatDate);
console.log("✅ [DATE - Format] Hora formateada en español:", formatTime);
console.log("✅ [DATE - Format] Formato ISO para API REST:", isoFormat);

// ================================================================================
// ⚖️ 5. Comparación, Evaluación y Diferencia de Tiempos
// ================================================================================
// Evaluación de orden cronológico, igualdad estrita por Epoch timestamp y cálculo
// del intervalo de tiempo transcurrido.
// 📋 Nota: 'date1 === date2' compararía referencias en memoria (devolvería false).
// ================================================================================

const date1: Date = new Date(2023, 0, 1);   // 01/01/2023
const date2: Date = new Date(2023, 11, 31); // 31/12/2023

// [1] Evaluación de orden cronológico (< y > convierten implícitamente a ms)
if (date1 < date2) {
  console.log("✅ [DATE - Compare] date1 es cronológicamente anterior a date2.");
} else if (date1 > date2) {
  console.log("✅ [DATE - Compare] date1 es cronológicamente posterior a date2.");
}

// [2] Evaluación de igualdad estricta usando '.getTime()' (Epoch UTC ms)
if (date1.getTime() === date2.getTime()) {
  console.log("✅ [DATE - Compare] date1 y date2 representan exactamente el mismo instante.");
} else {
  console.log("✅ [DATE - Compare] date1 y date2 corresponden a instancias diferentes.");
}

// [3] Cálculo de diferencia transcurrida en milisegundos y días
const diffMs: number = Math.abs(date2.getTime() - date1.getTime());
const diffDays: number = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

console.log(`✅ [DATE - Difference] Tiempo transcurrido entre fechas: ${diffDays} días (${diffMs} ms)`);