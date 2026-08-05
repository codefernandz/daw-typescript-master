import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Renderizado de Colecciones y Conmutación de Tema
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación de
// la compilación estática mediante la iteración eficiente de arreglos en el DOM
// utilizando 'DocumentFragment' y la alternancia dinámica de temas visuales.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Renderizado Dinámico de Listas y Theme Switcher en el DOM");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos
// ================================================================================
// Estructura de datos inmutable que modela las tecnologías a renderizar
// y salida inicial por consola para trazabilidad del sistema.
// ================================================================================

interface Technology {
  name: string;
  description: string;
}

// [1] Data mock inmutable con el listado de tecnologías
const technologies: Technology[] = [
  { name: "TypeScript", description: "A typed superset of JavaScript that compiles to plain JavaScript." },
  { name: "JavaScript", description: "A high-level, interpreted programming language that conforms to the ECMAScript specification." },
  { name: "Node.js", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine." },
  { name: "React", description: "A JavaScript library for building user interfaces." },
  { name: "Angular", description: "A platform for building mobile and desktop web applications." }
];

// [2] Trazabilidad por consola del listado original de datos
console.log("📋 [DATA] List of Technologies:");
technologies.forEach((tech: Technology) => {
  console.log(`- ${tech.name}: ${tech.description}`);
});

// ================================================================================
// 🛠️ 2. Renderizado Dinámico en el DOM (DocumentFragment)
// ================================================================================
// Uso de 'DocumentFragment' como contenedor en memoria para acumular las
// inserciones de elementos 'li' y realizar una única refaccionada (reflow) del DOM.
// ================================================================================

// [1] Instanciación del elemento contenedor lista
const ulElement: HTMLUListElement = document.createElement("ul");
ulElement.id = "technologies-list";

// [2] Creación del contenedor en memoria 'DocumentFragment'
const fragment: DocumentFragment = document.createDocumentFragment();

// [3] Iteración del arreglo e inserción de ítems en el fragmento
technologies.forEach((tech: Technology) => {
  const liElement: HTMLLIElement = document.createElement("li");
  liElement.textContent = `${tech.name}: ${tech.description}`;
  fragment.appendChild(liElement);
});

// [4] Inyección única del fragmento completo en el DOM
ulElement.appendChild(fragment);
document.body.appendChild(ulElement);

console.log("✅ [DOM - List] Lista de tecnologías construida e inyectada exitosamente.");

// ================================================================================
// 🎨 3. Implementación del Conmutador de Tema (Theme Switcher)
// ================================================================================
// Configuración dinámica de estilos, instanciación del botón de acción y
// gestión del estado para alternar entre el modo claro y modo oscuro.
// ================================================================================

// [1] Referencia al elemento raíz del documento y configuración de transiciones
const bodyElement: HTMLElement = document.body;
bodyElement.style.transition = "background-color 0.3s ease, color 0.3s ease";
bodyElement.style.padding = "20px";

// [2] Instanciación y estilizado dinámico del botón conmutador
const buttonElement: HTMLButtonElement = document.createElement("button");
buttonElement.textContent = "Theme Switcher";
buttonElement.id = "theme-switcher-btn";

buttonElement.style.padding = "10px 20px";
buttonElement.style.fontSize = "16px";
buttonElement.style.backgroundColor = "#6842c2";
buttonElement.style.color = "#FFFFFF";
buttonElement.style.border = "none";
buttonElement.style.borderRadius = "4px";
buttonElement.style.cursor = "pointer";
buttonElement.style.marginTop = "15px";

// [3] Variable de estado para controlar la paleta de colores activa
let isDarkMode: boolean = false;

/**
 * Manejador para alternar la paleta de colores entre Modo Claro y Oscuro.
 */
const handleThemeToggle = (): void => {
  // [1] Inversión del estado del tema
  isDarkMode = !isDarkMode;

  // [2] Aplicación de estilos según el modo seleccionado
  if (isDarkMode) {
    bodyElement.style.backgroundColor = "#16171d";
    bodyElement.style.color = "#ffffff";
    console.log("✅ [EVENT - Theme] Tema cambiado a: Oscuro (Dark Mode)");
  } else {
    bodyElement.style.backgroundColor = "#ffffff";
    bodyElement.style.color = "#000000";
    console.log("✅ [EVENT - Theme] Tema cambiado a: Claro (Light Mode)");
  }
};

// [4] Vinculación del evento de clic y montaje en el documento
buttonElement.addEventListener("click", handleThemeToggle);
document.body.appendChild(buttonElement);