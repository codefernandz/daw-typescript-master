import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Creación e Inserción de Nodos en el DOM
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Demostración práctica de instanciación manual de elementos y nodos de texto
// ================================================================================
separator("Creación e Inserción Dinámica de Nodos DOM");

// Plantilla base exportada para inyección opcional de contenido HTML
export const domTemplate: string = "";

// ================================================================================
// 🛠️ 1. Instanciación de Elementos HTML
// ================================================================================

// [1] Creación de elementos con el método 'createElement' indicando la etiqueta
const headerElement: HTMLHeadingElement = document.createElement("h1");
const paragraphElement: HTMLParagraphElement = document.createElement("p");

// [2] Creación de nodos de texto independientes con 'createTextNode'
const textNodeHeader: Text = document.createTextNode("DOM (Document Object Model)");
const textNodeParagraph: Text = document.createTextNode(
  "El DOM es una interfaz de programación para documentos HTML y XML. Representa la página para que los programas puedan cambiar la estructura del documento, estilo y contenido."
);

// [3] Asignación de nodos de texto a sus respectivos elementos contenedores
headerElement.appendChild(textNodeHeader);
paragraphElement.appendChild(textNodeParagraph);

// Nota técnica: En código moderno de producción, también se puede lograr asignando directamente:
// headerElement.textContent = "DOM (Document Object Model)";

// ================================================================================
// 🏗️ 2. Estructuración del Contenedor Principal
// ================================================================================

const container: HTMLDivElement = document.createElement("div");
container.id = "dom-element";
container.className = "dom-class";
container.innerHTML = domTemplate;

// ================================================================================
// 🚀 3. Ensamblado y Renderizado en el Árbol del DOM
// ================================================================================

// Anidamos los elementos dentro del contenedor principal
container.appendChild(headerElement);
container.appendChild(paragraphElement);

// Finalmente, insertamos el contenedor completo en el cuerpo del documento
document.body.appendChild(container);

console.log("✅ [DOM] Contenedor principal insertado con éxito en document.body:", container);
console.log("✅ [DOM] Encabezado instanciado:", headerElement);
console.log("✅ [DOM] Párrafo descriptivo instanciado:", paragraphElement);