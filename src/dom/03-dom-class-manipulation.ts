import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Manipulación de Clases en el DOM
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Demostración práctica de la API 'classList' para gestión de estilos CSS
// ================================================================================
separator("Manipulación Dinámica de Clases con ClassList API");

// ================================================================================
// 🛠️ 1. Preparación del Elemento Objetivo
// ================================================================================

const headerElement: HTMLHeadingElement = document.createElement("h1");
headerElement.id = "class-manipulation-header";
headerElement.textContent = "Manipulación de Clases en el DOM";

document.body.appendChild(headerElement);

// ================================================================================
// 🎨 2. Gestión de Clases mediante 'classList'
// ================================================================================

// Recuperamos el elemento con validación estricta de nulidad en TS
const targetHeader: HTMLElement | null = document.getElementById("class-manipulation-header");

if (targetHeader) {
  // [1] .add() -> Añade una o más clases al elemento sin duplicar
  targetHeader.classList.add("highlighted", "custom-title");
  console.log("✅ [CLASS] Clase 'highlighted' agregada:", targetHeader.className);

  // [2] .contains() -> Retorna un booleano indicando si la clase está presente
  const hasHighlightClass: boolean = targetHeader.classList.contains("highlighted");
  console.log("✅ [CLASS] ¿Contiene la clase 'highlighted'?:", hasHighlightClass);

  // [3] .remove() -> Elimina una o más clases especificadas
  targetHeader.classList.remove("highlighted");
  console.log("✅ [CLASS] Clase 'highlighted' eliminada:", targetHeader.className);

  // [4] .toggle() -> Conmuta la clase (la añade si no existe, la elimina si existe)
  const isToggled: boolean = targetHeader.classList.toggle("toggled-class");
  console.log("✅ [CLASS] Clase 'toggled-class' alternada (Estado actual):", isToggled, `| Nombres: "${targetHeader.className}"`);

  // [5] .replace() -> Reemplaza una clase existente por otra nueva
  targetHeader.classList.replace("custom-title", "main-header");
  console.log("✅ [CLASS] Clase 'custom-title' reemplazada por 'main-header':", targetHeader.className);
} else {
  console.log("❌ [ERROR] No se encontró el elemento objetivo en el DOM.");
}