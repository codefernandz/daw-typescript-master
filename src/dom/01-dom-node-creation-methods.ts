import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Creación e Inserción de Nodos en el DOM
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación de
// la compilación estática mediante la instanciación e inserción de nodos.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Creación e Inserción Dinámica de Nodos DOM");

// Plantilla base exportada para inyección opcional de contenido HTML
export const domTemplate: string = "";

// ================================================================================
// 🛠️ 1. Instanciación de Elementos HTML y Nodos de Texto
// ================================================================================
// Creación programática de elementos mediante createElement y manejo explícito
// de nodos de texto.
// 📋 Nota: Aunque asignar directamente '.textContent' es común en código moderno,
//     'createTextNode' permite manipular explícitamente el nodo dentro del árbol.
// ================================================================================

// [1] Creación de elementos con el método 'createElement' indicando la etiqueta
const headerElement: HTMLHeadingElement = document.createElement("h1");
const paragraphElement: HTMLParagraphElement = document.createElement("p");

// [2] Creación de nodos de texto independientes con 'createTextNode'
const textNodeHeader: Text = document.createTextNode("DOM (Document Object Model)");
const textNodeParagraph: Text = document.createTextNode(
  "El DOM es una interfaz de programación para documentos HTML y XML. Representa la página para que los programas puedan cambiar la estructura del documento, estilo y contenido."
);

// [3] Asignación y vinculación de nodos de texto a sus respectivos elementos contenedores
headerElement.appendChild(textNodeHeader);
paragraphElement.appendChild(textNodeParagraph);

// ================================================================================
// 🏗️ 2. Estructuración y Configuración del Contenedor Principal
// ================================================================================
// Instanciación del elemento contenedor raíz y asignación de identificadores,
// clases CSS y plantilla base.
// ================================================================================

// [1] Instanciación del contenedor <div> principal
const container: HTMLDivElement = document.createElement("div");

// [2] Configuración de atributos e inyección de la plantilla inicial
container.id = "dom-element";
container.className = "dom-class";
container.innerHTML = domTemplate;

// ================================================================================
// 🚀 3. Ensamblado y Renderizado en el Árbol del DOM
// ================================================================================
// Anidamiento de la estructura secundaria dentro del contenedor y posterior
// montaje final sobre el objeto 'document.body'.
// ================================================================================

// [1] Anidamos los elementos secundarios dentro del contenedor principal
container.appendChild(headerElement);
container.appendChild(paragraphElement);

// [2] Inserción final del contenedor completo en el cuerpo del documento
document.body.appendChild(container);

// [3] Trazabilidad y confirmación de renderizado en la consola
console.log("✅ [DOM] Contenedor principal insertado con éxito en document.body:", container);
console.log("✅ [DOM] Encabezado instanciado:", headerElement);
console.log("✅ [DOM] Párrafo descriptivo instanciado:", paragraphElement);