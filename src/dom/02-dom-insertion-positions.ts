import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Posicionamiento Avanzado de Nodos DOM
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Demostración práctica de inserción de elementos mediante 'insertAdjacentElement'
// ================================================================================
separator("Inserción Avanzada y Posicionamiento de Elementos DOM");

// ================================================================================
// 🛠️ 1. Creación de Contenedor Dinámico Estándar
// ================================================================================

const newHeader: HTMLHeadingElement = document.createElement("h1");
const newParagraph: HTMLParagraphElement = document.createElement("p");

// Asignación directa de contenido de texto inofensivo XSS con '.textContent'
newHeader.textContent = "New Header Created Dynamically";
newParagraph.textContent = "This paragraph was also created dynamically using TypeScript.";

const newContainer: HTMLDivElement = document.createElement("div");
newContainer.id = "new-dom-element";
newContainer.className = "new-dom-class";

// Inserción tradicional ordenada usando appendChild
newContainer.appendChild(newHeader);
newContainer.appendChild(newParagraph);
document.body.appendChild(newContainer);

console.log("✅ [DOM] Contenedor inicial insertado en document.body:", newContainer);

// ================================================================================
// 🎯 2. Demostración de Inserción Precisa (insertAdjacentElement)
// ================================================================================

// [1] Creación del contenedor de cajas y elementos de prueba
const newBoxContainer: HTMLDivElement = document.createElement("div");
newBoxContainer.id = "box-container";
newBoxContainer.className = "box-container-class";

const box1: HTMLDivElement = document.createElement("div");
box1.className = "box";
box1.textContent = "Box 1";

const box2: HTMLDivElement = document.createElement("div");
box2.className = "box";
box2.textContent = "Box 2 (Insertado con insertAdjacentElement)";

// [2] Montamos el contenedor y la primera caja en el cuerpo del documento
newBoxContainer.appendChild(box1);
document.body.appendChild(newBoxContainer);

// ================================================================================
// 📌 Guía Referencial de Posiciones de 'insertAdjacentElement':
// -----------------------------------------------------
// 'beforebegin' -> Justo antes del elemento objetivo (como hermano previo).
// 'afterbegin'  -> Dentro del elemento objetivo, como SU PRIMER hijo.
// 'beforeend'   -> Dentro del elemento objetivo, como SU ÚLTIMO hijo.
// 'afterend'    -> Justo después del elemento objetivo (como hermano posterior).
// ================================================================================

// Ejemplo real: Insertar 'box2' justo después de 'box1' dentro de la jerarquía
box1.insertAdjacentElement("afterend", box2);

console.log("✅ [DOM] Contenedor de cajas posicionado con éxito:", newBoxContainer);
console.log("✅ [DOM] Elemento 'box2' insertado en posición 'afterend' respecto a 'box1':", box2);