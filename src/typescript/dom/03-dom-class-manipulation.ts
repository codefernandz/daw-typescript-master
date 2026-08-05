import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Manipulación de Clases en el DOM
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación de
// la compilación estática para demostrar la gestión de estilos CSS mediante
// la API 'classList'.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Manipulación Dinámica de Clases con ClassList API");

// ================================================================================
// 🛠️ 1. Preparación del Elemento Objetivo
// ================================================================================
// Instanciación del elemento objetivo, asignación de identificador y montaje
// inicial en el cuerpo del documento.
// ================================================================================

// [1] Instanciación del encabezado y configuración de identificador
const headerElement: HTMLHeadingElement = document.createElement("h1");
headerElement.id = "class-manipulation-header";
headerElement.textContent = "Manipulación de Clases en el DOM";

// [2] Inserción del elemento objetivo en el documento
document.body.appendChild(headerElement);

// ================================================================================
// 🎨 2. Gestión de Clases mediante 'classList'
// ================================================================================
// Selección del elemento con validación de nulidad y manipulación dinámica
// de sus clases utilizando los métodos principales de la API 'classList'.
// ================================================================================

// [1] Selección y verificación de existencia del elemento objetivo en el DOM
const targetHeader: HTMLElement | null = document.getElementById("class-manipulation-header");

if (targetHeader) {
  // [2] .add() -> Añade una o más clases al elemento sin duplicar
  targetHeader.classList.add("highlighted", "custom-title");
  console.log("✅ [CLASS] Clase 'highlighted' agregada:", targetHeader.className);

  // [3] .contains() -> Retorna un booleano indicando si la clase está presente
  const hasHighlightClass: boolean = targetHeader.classList.contains("highlighted");
  console.log("✅ [CLASS] ¿Contiene la clase 'highlighted'?:", hasHighlightClass);

  // [4] .remove() -> Elimina una o más clases especificadas
  targetHeader.classList.remove("highlighted");
  console.log("✅ [CLASS] Clase 'highlighted' eliminada:", targetHeader.className);

  // [5] .toggle() -> Conmuta la clase (la añade si no existe, la elimina si existe)
  const isToggled: boolean = targetHeader.classList.toggle("toggled-class");
  console.log("✅ [CLASS] Clase 'toggled-class' alternada (Estado actual):", isToggled, `| Nombres: "${targetHeader.className}"`);

  // [6] .replace() -> Reemplaza una clase existente por otra nueva
  targetHeader.classList.replace("custom-title", "main-header");
  console.log("✅ [CLASS] Clase 'custom-title' reemplazada por 'main-header':", targetHeader.className);
} else {
  console.log("❌ [ERROR] No se encontró el elemento objetivo en el DOM.");
}