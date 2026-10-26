import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Posicionamiento Avanzado de Nodos DOM
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación de
// la compilación estática mediante la inserción precisa de elementos en el DOM.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Inserción Avanzada y Posicionamiento de Elementos DOM");

// ================================================================================
// 🛠️ 1. Creación e Inserción de Contenedor Dinámico Estándar
// ================================================================================
// Instanciación de elementos y asignación segura de contenido mediante
// '.textContent' para mitigar riesgos de XSS.
// ================================================================================

// [1] Instanciación de elementos secundarios
const newHeader: HTMLHeadingElement = document.createElement("h1");
const newParagraph: HTMLParagraphElement = document.createElement("p");

// [2] Asignación directa de contenido de texto de forma segura
newHeader.textContent = "New Header Created Dynamically";
newParagraph.textContent = "This paragraph was also created dynamically using TypeScript.";

// [3] Configuración e instanciación del contenedor principal
const newContainer: HTMLDivElement = document.createElement("div");
newContainer.id = "new-dom-element";
newContainer.className = "new-dom-class";

// [4] Inserción tradicional ordenada en el árbol usando 'appendChild'
newContainer.appendChild(newHeader);
newContainer.appendChild(newParagraph);
document.body.appendChild(newContainer);

// [5] Trazabilidad en consola
console.log("✅ [DOM] Contenedor inicial insertado en document.body:", newContainer);

// ================================================================================
// 🎯 2. Demostración de Inserción Precisa (insertAdjacentElement)
// ================================================================================
// Uso del método 'insertAdjacentElement' para controlar la posición exacta de
// inserción relativa a un nodo objetivo.
//
// 📋 Guía Referencial de Posiciones:
//   - 'beforebegin' -> Justo antes del elemento objetivo (hermano previo).
//   - 'afterbegin'  -> Dentro del elemento objetivo, como su PRIMER hijo.
//   - 'beforeend'   -> Dentro del elemento objetivo, como su ÚLTIMO hijo.
//   - 'afterend'    -> Justo después del elemento objetivo (hermano posterior).
// ================================================================================

// [1] Instanciación del contenedor de cajas y elementos de prueba
const newBoxContainer: HTMLDivElement = document.createElement("div");
newBoxContainer.id = "box-container";
newBoxContainer.className = "box-container-class";

const box1: HTMLDivElement = document.createElement("div");
box1.className = "box";
box1.textContent = "Box 1";

const box2: HTMLDivElement = document.createElement("div");
box2.className = "box";
box2.textContent = "Box 2 (Insertado con insertAdjacentElement)";

// [2] Montaje del contenedor y la primera caja en el cuerpo del documento
newBoxContainer.appendChild(box1);
document.body.appendChild(newBoxContainer);

// [3] Inserción precisa: colocar 'box2' inmediatamente después de 'box1'
box1.insertAdjacentElement("afterend", box2);

// [4] Trazabilidad y confirmación en consola
console.log("✅ [DOM] Contenedor de cajas posicionado con éxito:", newBoxContainer);
console.log("✅ [DOM] Elemento 'box2' insertado en posición 'afterend' respecto a 'box1':", box2);