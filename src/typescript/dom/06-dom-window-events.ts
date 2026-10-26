import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Eventos de Ventana (Window Events)
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación de
// la compilación estática mediante la captura de eventos globales de ciclo de vida,
// redimensión optimizada y desplazamiento de la ventana.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Manejo e Intercepción de Eventos de Ventana (Window Object)");

// ================================================================================
// 🚀 1. Ciclo de Vida del Documento (DOMContentLoaded vs Load)
// ================================================================================
// Diferenciación entre la construcción básica del árbol DOM y la carga completa
// de todos los recursos externos vinculados a la página.
//
// 📌 'DOMContentLoaded':
//   Se dispara cuando el HTML inicial ha sido parseado y los nodos están listos.
//   No espera por imágenes, hojas de estilo CSS ni frames.
//
// 📌 'load':
//   Se dispara cuando la ventana y la totalidad de los recursos externos
//   (imágenes, estilos, fuentes, iFrames) han finalizado su descarga.
// ================================================================================

// [1] Registro de escuchador para construcción del DOM
window.addEventListener("DOMContentLoaded", () => {
  console.log("⚡ [EVENT - DOMContentLoaded] El árbol del DOM está completamente construido y listo para ser manipulado.");
});

// [2] Registro de escuchador para carga completa de recursos
window.addEventListener("load", (event: Event): void => {
  console.log("✅ [EVENT - Load] La ventana y todos sus recursos externos se han cargado completamente.", event);
});

// ================================================================================
// 📐 2. Eventos de Redimensión (Resize) con Optimización
// ================================================================================
// El evento 'resize' se dispara continuamente durante el redimensionamiento.
// Se implementa un patrón de Debounce para posponer la ejecución del callback
// hasta que el usuario detiene la acción, evitando saturar el hilo principal.
// ================================================================================

// [1] Control de temporizador para la estrategia de Debounce
let resizeTimeout: number | undefined;

// [2] Registro del escuchador de redimensión optimizado
window.addEventListener("resize", (): void => {
  // [3] Cancelación de ejecuciones pendientes si el usuario sigue redimensionando
  if (resizeTimeout) {
    window.clearTimeout(resizeTimeout);
  }

  // [4] Programación de la lógica para ejecutarse tras 150ms de inactividad
  resizeTimeout = window.setTimeout(() => {
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;

    console.log(`✅ [EVENT - Resize] La ventana se ha redimensionado. Dimensiones actuales: ${width}px x ${height}px`);
  }, 150);
});

// ================================================================================
// 📜 3. Eventos de Desplazamiento (Scroll)
// ================================================================================
// Optimización de lecturas del desplazamiento de pantalla alineando las
// ejecuciones con la tasa de refresco del navegador mediante 'requestAnimationFrame'.
// ================================================================================

// [1] Bandera de control para limitar ejecuciones concurrentes
let isScrolling: boolean = false;

// [2] Registro del escuchador de desplazamiento de la vista
window.addEventListener("scroll", (): void => {
  if (!isScrolling) {
    // [3] Sincronización con el ciclo de renderizado del navegador
    window.requestAnimationFrame(() => {
      const scrollX: number = window.scrollX;
      const scrollY: number = window.scrollY;

      console.log(`✅ [EVENT - Scroll] Posición actual del scroll -> X: ${scrollX}px | Y: ${scrollY}px`);
      isScrolling = false;
    });

    isScrolling = true;
  }
});

// ================================================================================
// 🚪 4. Salida y Cierre de Página (beforeunload / pagehide / unload)
// ================================================================================
// Intercepción de la descarga de la ventana para advertir al usuario sobre datos
// no guardados o ejecutar persistencia final de estado.
//
// 📌 'beforeunload':
//   Permite alertar al usuario antes de salir. Requiere llamar a 'event.preventDefault()'.
//
// 📌 'pagehide':
//   Reemplazo moderno de 'unload' compatible con el Back-Forward Cache (bfcache).
//
// 📌 'unload' (Legado / Deprecado):
//   No soporta tareas asíncronas (fetch, setTimeout). Usar 'navigator.sendBeacon()'
//   para el envío de telemetría final si fuera necesario.
// ================================================================================

// [1] Intercepción previa a la salida de la página
window.addEventListener("beforeunload", (event: BeforeUnloadEvent): void => {
  event.preventDefault();
  console.log("⚠️ [EVENT - BeforeUnload] El usuario está a punto de abandonar o recargar la página.");
});

// [2] Captura de ocultación o descarga compatible con bfcache
window.addEventListener("pagehide", (event: PageTransitionEvent): void => {
  console.log("✅ [EVENT - PageHide] La ventana se está ocultando o descargando. Persistida en caché:", event.persisted);
});

// [3] Registro de descarga final (método legado)
window.addEventListener("unload", (event: Event): void => {
  console.log("✅ [EVENT - Unload] La ventana se ha descargado completamente. Evento:", event);
});