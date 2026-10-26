import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Selección y Manipulación del DOM
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación del
// sistema para iniciar la demostración práctica de métodos de selección y
// navegación a través del árbol del DOM.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Métodos de Selección y Propiedades del DOM");

// ================================================================================
// 🛠️ 1. Plantilla e Inyección en el DOM
// ================================================================================
// Definición del contenido HTML base e inyección dinámica del nodo contenedor
// dentro del cuerpo del documento.
// ================================================================================

// [1] Definición del template HTML base para la estructura del contenedor
export const domTemplate: string = `
  <h1>DOM (Document Object Model)</h1>
  <ul class="dom-list">
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
  </ul>
`;

// [2] Función helper para instanciar e inyectar el nodo raíz en el cuerpo del documento
function initializeDOMStructure(templateContent: string): HTMLElement {
  const container: HTMLDivElement = document.createElement("div");
  container.id = "dom-element";
  container.className = "dom-class";
  container.innerHTML = templateContent;

  document.body.appendChild(container);
  return container;
}

// [3] Inicialización y montaje del nodo raíz de prueba
const rootContainer: HTMLElement = initializeDOMStructure(domTemplate);

// ================================================================================
// 🔍 2. Métodos Tradicionales de Selección
// ================================================================================
// Selección de elementos del DOM mediante la API clásica de document.
// 📋 Nota: getElementsByClassName y getElementsByTagName devuelven un
//     HTMLCollection dinámico (se actualiza automáticamente ante cambios en el DOM).
// ================================================================================

// [1] Selecciona un único elemento por su atributo ID
const elementById: HTMLElement | null = document.getElementById("dom-element");

// [2] Selecciona una HTMLCollection dinámica basada en el nombre de clase
const elementsByClassName: HTMLCollectionOf<Element> = document.getElementsByClassName("dom-class");

// [3] Selecciona una HTMLCollection dinámica de todos los elementos por etiqueta
const elementsByTagName: HTMLCollectionOf<Element> = document.getElementsByTagName("li");

// [4] Trazabilidad y comprobación por consola
console.log("✅ [SELECT] getElementById:", elementById);
console.log("✅ [SELECT] getElementsByClassName:", elementsByClassName);
console.log("✅ [SELECT] getElementsByTagName:", elementsByTagName);

// ================================================================================
// 🎯 3. Métodos Modernos de Selección (CSS Selectors)
// ================================================================================
// Uso de la API Selectors Level 1/2 para obtener nodos con sintaxis CSS.
// 📋 Nota: querySelectorAll devuelve una NodeList estática (Snapshot que NO
//     se actualiza automáticamente si se agregan nodos posteriormente al DOM).
// ================================================================================

// [1] Devuelve el primer elemento que coincide con el selector CSS
const singleQuerySelector: Element | null = document.querySelector(".dom-class");

// [2] Devuelve una NodeList estática con todos los elementos que coinciden
const multiQuerySelector: NodeListOf<Element> = document.querySelectorAll("div.dom-class");

// [3] Selección de múltiples selectores combinados por coma (Selector de grupo)
const groupQuerySelector: NodeListOf<Element> = document.querySelectorAll("#dom-element, li");

// [4] Trazabilidad y comprobación por consola
console.log("✅ [QUERY] querySelector:", singleQuerySelector);
console.log("✅ [QUERY] querySelectorAll (Single):", multiQuerySelector);
console.log("✅ [QUERY] querySelectorAll (Group):", groupQuerySelector);

// ================================================================================
// 🌲 4. Navegación por el Árbol del DOM (Parent/Children)
// ================================================================================
// Recorrido jerárquico distinguiendo entre nodos genéricos (incluye texto y espacios)
// y nodos de elementos HTML.
// ⚠️ Buenas Prácticas: Preferir 'children', 'firstElementChild' y 'lastElementChild'
//     para evitar errores al procesar saltos de línea no deseados como 'TextNode'.
// ================================================================================

// [1] Obtiene el elemento padre directo
const parentNode: HTMLElement | null = rootContainer.parentElement;

// [2] Nodos de texto + Elementos (Incluye saltos de línea y espacios en blanco)
const allChildNodes: NodeListOf<ChildNode> = rootContainer.childNodes;
const firstRawChild: ChildNode | null = rootContainer.firstChild;
const lastRawChild: ChildNode | null = rootContainer.lastChild;

// [3] Solo Elementos HTML (Excluye saltos de línea y nodos de texto - Práctica recomendada)
const htmlChildren: HTMLCollection = rootContainer.children;
const firstHTMLElement: Element | null = rootContainer.firstElementChild;
const lastHTMLElement: Element | null = rootContainer.lastElementChild;

// [4] Impresión y trazabilidad de la estructura jerárquica
console.log("✅ [TREE] parentElement:", parentNode);
console.log("📋 [TREE - Raw Nodes] childNodes (Incluye texto):", allChildNodes);
console.log("📋 [TREE - Raw Nodes] firstChild:", firstRawChild);
console.log("📋 [TREE - Raw Nodes] lastChild:", lastRawChild);

console.log("✅ [TREE - Element Nodes] children (Solo HTML):", htmlChildren);
console.log("✅ [TREE - Element Nodes] firstElementChild:", firstHTMLElement);
console.log("✅ [TREE - Element Nodes] lastElementChild:", lastHTMLElement);