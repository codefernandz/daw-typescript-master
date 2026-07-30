import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Renderizado de Colecciones y Conmutación de Tema
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Demostración práctica de iteración de arrays en el DOM y toggle de tema dinámico
// ================================================================================
separator("Renderizado Dinámico de Listas y Theme Switcher en el DOM");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos
// ================================================================================

interface Technology {
  name: string;
  description: string;
}

// Data mock inmutable con el listado de tecnologías
const technologies: Technology[] = [
  { name: "TypeScript", description: "A typed superset of JavaScript that compiles to plain JavaScript." },
  { name: "JavaScript", description: "A high-level, interpreted programming language that conforms to the ECMAScript specification." },
  { name: "Node.js", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine." },
  { name: "React", description: "A JavaScript library for building user interfaces." },
  { name: "Angular", description: "A platform for building mobile and desktop web applications." }
];

// Output por consola/terminal para trazabilidad
console.log("📋 [DATA] List of Technologies:");
technologies.forEach((tech: Technology) => {
  console.log(`- ${tech.name}: ${tech.description}`);
});

// ================================================================================
// 🛠️ 2. Renderizado Dinámico en el DOM (DocumentFragment)
// ================================================================================

const ulElement: HTMLUListElement = document.createElement("ul");
ulElement.id = "technologies-list";

// Uso de DocumentFragment para optimizar inserciones repetitivas en pantalla
const fragment: DocumentFragment = document.createDocumentFragment();

technologies.forEach((tech: Technology) => {
  const liElement: HTMLLIElement = document.createElement("li");
  liElement.textContent = `${tech.name}: ${tech.description}`;
  fragment.appendChild(liElement);
});

// Inserción única en el DOM
ulElement.appendChild(fragment);
document.body.appendChild(ulElement);

console.log("✅ [DOM - List] Lista de tecnologías construida e inyectada exitosamente.");

// ================================================================================
// 🎨 3. Implementación del Conmutador de Tema (Theme Switcher)
// ================================================================================

const bodyElement: HTMLElement = document.body;

// Estilos iniciales del contenedor general
bodyElement.style.transition = "background-color 0.3s ease, color 0.3s ease";
bodyElement.style.padding = "20px";

const buttonElement: HTMLButtonElement = document.createElement("button");
buttonElement.textContent = "Theme Switcher";
buttonElement.id = "theme-switcher-btn";

// Estilizado dinámico del botón de acción
buttonElement.style.padding = "10px 20px";
buttonElement.style.fontSize = "16px";
buttonElement.style.backgroundColor = "#6842c2";
buttonElement.style.color = "#FFFFFF";
buttonElement.style.border = "none";
buttonElement.style.borderRadius = "4px";
buttonElement.style.cursor = "pointer";
buttonElement.style.marginTop = "15px";

// Variable de estado para controlar el modo de color actual
let isDarkMode: boolean = false;

/**
 * Manejador para alternar la paleta de colores entre Modo Claro y Oscuro
 */
const handleThemeToggle = (): void => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    bodyElement.style.backgroundColor = "#16171d";
    bodyElement.style.color = "#ffffff";
    console.log("✅ [EVENT - Theme] Tema cambiado a: Osciuro (Dark Mode)");
  } else {
    bodyElement.style.backgroundColor = "#ffffff";
    bodyElement.style.color = "#000000";
    console.log("✅ [EVENT - Theme] Tema cambiado a: Claro (Light Mode)");
  }
};

// Registro del evento de escucha en el botón
buttonElement.addEventListener("click", handleThemeToggle);

document.body.appendChild(buttonElement);