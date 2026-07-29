import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Eventos de Ventana (Window Events)
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Demostración práctica de eventos globales de ciclo de vida, redimensión y desplazamiento
// ================================================================================
separator("Manejo e Intercepción de Eventos de Ventana (Window Object)");

// ================================================================================
// 🚀 1. Ciclo de Vida del Documento (DOMContentLoaded vs Load)
// ================================================================================

/**
 * Evento: 'DOMContentLoaded'
 * 📌 Se dispara cuando el HTML inicial ha sido completamente parseado y los nodos del DOM están listos.
 * 💡 Es más rápido que 'load' porque NO espera a que terminen de cargar hojas de estilo, imágenes ni submarcos.
 */
window.addEventListener("DOMContentLoaded", () => {
  console.log("⚡ [EVENT - DOMContentLoaded] El árbol del DOM está completamente construido y listo para ser manipulado.");
});

/**
 * Evento: 'load'
 * 📌 Se dispara cuando la página entera ha cargado completamente, incluyendo recursos externos
 * (imágenes, hojas de estilo CSS, fuentes e iFrames).
 */
window.addEventListener("load", (event: Event): void => {
  console.log("✅ [EVENT - Load] La ventana y todos sus recursos externos se han cargado completamente.", event);
});

// ================================================================================
// 📐 2. Eventos de Redimensión (Resize) con Optimización
// ================================================================================

// Variables para controlar la frecuencia de ejecución (Throttling / Debouncing)
let resizeTimeout: number | undefined;

/**
 * Evento: 'resize'
 * 📌 Se dispara de forma continua mientras el usuario cambia el tamaño de la ventana del navegador.
 * 
 * ⚠️ Advertencia de Rendimiento:
 * Dado que puede ejecutarse docenas de veces por segundo, es crucial limitar su frecuencia (Debounce/Throttle)
 * para evitar bloqueos en el hilo principal de renderizado.
 */
window.addEventListener("resize", (): void => {
  // Limpiamos el temporizador previo si la ventana sigue cambiando de tamaño
  if (resizeTimeout) {
    window.clearTimeout(resizeTimeout);
  }

  // Ejecutamos la lógica únicamente cuando el usuario detiene la redimensión por 150ms
  resizeTimeout = window.setTimeout(() => {
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;

    console.log(`✅ [EVENT - Resize] La ventana se ha redimensionado. Dimensiones actuales: ${width}px x ${height}px`);
  }, 150);
});

// ================================================================================
// 📜 3. Eventos de Desplazamiento (Scroll)
// ================================================================================

let isScrolling: boolean = false;

/**
 * Evento: 'scroll'
 * 📌 Se dispara cuando la vista de la ventana se desplaza vertical u horizontalmente.
 * 
 * 💡 Optimización: Uso de 'requestAnimationFrame' para sincronizar las lecturas del scroll
 * con el refresco de pantalla del navegador (60fps/120fps).
 */
window.addEventListener("scroll", (): void => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      const scrollX: number = window.scrollX; // Desplazamiento horizontal en píxeles
      const scrollY: number = window.scrollY; // Desplazamiento vertical en píxeles

      console.log(`✅ [EVENT - Scroll] Posición actual del scroll -> X: ${scrollX}px | Y: ${scrollY}px`);
      isScrolling = false;
    });

    isScrolling = true;
  }
});

// ================================================================================
// 🚪 4. Salida y Cierre de Página (beforeunload / pagehide / unload)
// ================================================================================

/**
 * Evento: 'beforeunload'
 * 📌 Permite interceptar la salida del usuario antes de que la página sea destruida.
 * Utilizado comunmente para advertir sobre cambios no guardados en formularios.
 */
window.addEventListener("beforeunload", (event: BeforeUnloadEvent): void => {
  // Nota: Los navegadores modernos muestran un mensaje genérico de seguridad predeterminado
  // y requieren que se llame a event.preventDefault().
  event.preventDefault();
  console.log("⚠️ [EVENT - BeforeUnload] El usuario está a punto de abandonar o recargar la página.");
});

/**
 * Evento: 'pagehide' (Reemplazo moderno recomendado para 'unload')
 * 📌 Se dispara cuando la página se está ocultando o destruyendo.
 * A diferencia de 'unload', este evento funciona correctamente con el Back-Forward Cache (bfcache) de los navegadores.
 */
window.addEventListener("pagehide", (event: PageTransitionEvent): void => {
  console.log("✅ [EVENT - PageHide] La ventana se está ocultando o descargando. Persistida en caché:", event.persisted);
});

/**
 * Evento: 'unload' (Legado / Deprecado)
 * 📌 Código a ejecutar antes de que la ventana se cierre o cambie de página.
 * 
 * 📋 Referencia técnica:
 * ❌ NO se recomienda realizar operaciones asíncronas (fetch, axios, setTimeout) aquí,
 * ya que el proceso se destruye antes de resolverlas.
 * 💡 Para enviar métricas o datos al cerrar la página, se recomienda usar 'navigator.sendBeacon()'.
 */
window.addEventListener("unload", (event: Event): void => {
  console.log("✅ [EVENT - Unload] La ventana se ha descargado completamente. Evento:", event);
});