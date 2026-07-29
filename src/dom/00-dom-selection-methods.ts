import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Selección y Manipulación del DOM
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Demostración práctica de selección y navegación por el árbol del DOM
// ================================================================================
separator("Métodos de Selección y Propiedades del DOM");

// ================================================================================
// 🛠️ 1. Plantilla e Inyección en el DOM
// ================================================================================

// Template HTML corregido para la estructura del contenedor
export const domTemplate: string = `
  <h1>DOM (Document Object Model)</h1>
  <ul class="dom-list">
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
  </ul>
`;

/**
 * Monta la estructura inicial en el cuerpo del documento HTML
 */
function initializeDOMStructure(templateContent: string): HTMLElement {
  const container: HTMLDivElement = document.createElement("div");
  container.id = "dom-element";
  container.className = "dom-class";
  container.innerHTML = templateContent;

  document.body.appendChild(container);
  return container;
}

// Inicialización del nodo raíz de prueba
const rootContainer: HTMLElement = initializeDOMStructure(domTemplate);

// ================================================================================
// 🔍 2. Métodos Tradicionales de Selección
// ================================================================================

// Selecciona un único elemento por su atributo ID
const elementById: HTMLElement | null = document.getElementById("dom-element");

// Selecciona una HTMLCollection dinámica basada en el nombre de clase
const elementsByClassName: HTMLCollectionOf<Element> = document.getElementsByClassName("dom-class");

// Selecciona una HTMLCollection dinámica de todos los elementos por etiqueta
const elementsByTagName: HTMLCollectionOf<Element> = document.getElementsByTagName("li");

console.log("✅ [SELECT] getElementById:", elementById);
console.log("✅ [SELECT] getElementsByClassName:", elementsByClassName);
console.log("✅ [SELECT] getElementsByTagName:", elementsByTagName);

// ================================================================================
// 🎯 3. Métodos Modernos de Selección (CSS Selectors)
// ================================================================================

// Devuelve el primer elemento que coincide con el selector CSS
const singleQuerySelector: Element | null = document.querySelector(".dom-class");

// Devuelve una NodeList estática con todos los elementos que coinciden
const multiQuerySelector: NodeListOf<Element> = document.querySelectorAll("div.dom-class");

// Selección de múltiples selectores combinados por coma (Selector de grupo)
const groupQuerySelector: NodeListOf<Element> = document.querySelectorAll("#dom-element, li");

console.log("✅ [QUERY] querySelector:", singleQuerySelector);
console.log("✅ [QUERY] querySelectorAll (Single):", multiQuerySelector);
console.log("✅ [QUERY] querySelectorAll (Group):", groupQuerySelector);

// ================================================================================
// 🌲 4. Navegación por el Árbol del DOM (Parent/Children)
// ================================================================================

// Obtiene el elemento padre directo
const parentNode: HTMLElement | null = rootContainer.parentElement;

// [Nodos de Texto + Elementos]: Incluye saltos de línea y espacios en blanco
const allChildNodes: NodeListOf<ChildNode> = rootContainer.childNodes;
const firstRawChild: ChildNode | null = rootContainer.firstChild;
const lastRawChild: ChildNode | null = rootContainer.lastChild;

// [Solo Elementos HTML]: Excluye saltos de línea y nodos de texto (Práctica recomendada)
const htmlChildren: HTMLCollection = rootContainer.children;
const firstHTMLElement: Element | null = rootContainer.firstElementChild;
const lastHTMLElement: Element | null = rootContainer.lastElementChild;

console.log("✅ [TREE] parentElement:", parentNode);
console.log("📋 [TREE - Raw Nodes] childNodes (Incluye texto):", allChildNodes);
console.log("📋 [TREE - Raw Nodes] firstChild:", firstRawChild);
console.log("📋 [TREE - Raw Nodes] lastChild:", lastRawChild);

console.log("✅ [TREE - Element Nodes] children (Solo HTML):", htmlChildren);
console.log("✅ [TREE - Element Nodes] firstElementChild:", firstHTMLElement);
console.log("✅ [TREE - Element Nodes] lastElementChild:", lastHTMLElement);