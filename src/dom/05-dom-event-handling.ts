import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Eventos en el DOM
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación de
// la compilación estática mediante la captura de eventos, tipado de 'Event' y
// patrones de limpieza (cleanup).
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Manejo e Intercepción de Eventos en el DOM");

// ================================================================================
// 🛠️ 1. Creación e Inyección del Contenedor Principal
// ================================================================================
// Creación de un contenedor 'div' central para mantener organizados los
// elementos interactivos dentro del árbol del DOM.
// ================================================================================

// [1] Instanciación del contenedor e inserción en 'document.body'
const container: HTMLDivElement = document.createElement("div");
container.id = "event-container";
container.className = "event-container-class";
document.body.appendChild(container);

// ================================================================================
// 🖱️ 2. Eventos de Clic del Ratón (MouseEvent)
// ================================================================================
// Los eventos 'click' se disparan al presionar y soltar un botón del ratón
// sobre la superficie de un elemento.
// ================================================================================

// [1] Instanciación y montaje del botón de prueba
const buttonElement: HTMLButtonElement = document.createElement("button");
buttonElement.id = "event-button";
buttonElement.textContent = "Click Me";
container.appendChild(buttonElement);

/**
 * Manejador para clics de ratón.
 * @param event Objeto 'MouseEvent' con información del evento (coordenadas, target, etc.).
 */
const handleClick = (event: MouseEvent): void => {
  // [1] Extracción de metadatos del evento
  console.log("✅ [EVENT - Click] Detalle del evento:", event);
  console.log(`📡 Tipo de evento: ${event.type} | Target ID: ${(event.target as HTMLElement).id}`);
  alert("¡Botón clickeado!");
};

// [2] Vinculación del manejador mediante 'addEventListener'
buttonElement.addEventListener("click", handleClick);

// ================================================================================
// ⌨️ 3. Eventos de Teclado en Entradas (KeyboardEvent - Input)
// ================================================================================
// El evento 'keydown' se activa en el instante en que una tecla es presionada.
// ================================================================================

// [1] Instanciación y montaje del campo de texto
const inputElement: HTMLInputElement = document.createElement("input");
inputElement.type = "text";
inputElement.placeholder = "Escribe algo...";
container.appendChild(inputElement);

/**
 * Manejador para captura de teclado en campos de texto.
 * @param event Objeto 'KeyboardEvent' que expone el valor y la clave física de la tecla.
 */
const handleKeyPress = (event: KeyboardEvent): void => {
  // [1] Trazabilidad de teclas y códigos físicos
  console.log(`✅ [EVENT - Keydown] Tecla: "${event.key}" | Código Físico: ${event.code}`);
};

// [2] Registro del escuchador para presiones de tecla
inputElement.addEventListener("keydown", handleKeyPress);

// ================================================================================
// 🔀 4. Eventos de Cambio en Formulario (Event - Select)
// ================================================================================
// El evento 'change' se dispara al confirmar una selección o modificar un valor.
// ================================================================================

// [1] Instanciación de elementos del selector
const selectElement: HTMLSelectElement = document.createElement("select");

const option1: HTMLOptionElement = document.createElement("option");
option1.value = "option1";
option1.textContent = "Opción 1";

const option2: HTMLOptionElement = document.createElement("option");
option2.value = "option2";
option2.textContent = "Opción 2";

// [2] Estructuración del elemento select y montaje en el contenedor
selectElement.appendChild(option1);
selectElement.appendChild(option2);
container.appendChild(selectElement);

/**
 * Manejador para el cambio de selección.
 * @param event Objeto 'Event' genérico del DOM.
 */
const handleSelectChange = (event: Event): void => {
  // [1] Aserción de tipo en TypeScript ('as HTMLSelectElement') para acceder a '.value'
  const target = event.target as HTMLSelectElement;
  console.log("✅ [EVENT - Change] Opción seleccionada:", target.value);
};

// [3] Registro del escuchador de cambio
selectElement.addEventListener("change", handleSelectChange);

// ================================================================================
// 🎨 5. Eventos de Entrada/Salida del Puntero (MouseOver / MouseOut)
// ================================================================================
// Detección de la entrada ('mouseover') y salida ('mouseout') del cursor sobre
// la superficie de un elemento.
// ================================================================================

// [1] Instanciación y estilizado dinámico del área interactiva
const hoverElement: HTMLDivElement = document.createElement("div");
hoverElement.textContent = "Pasa el mouse por aquí";
hoverElement.style.width = "200px";
hoverElement.style.height = "100px";
hoverElement.style.backgroundColor = "#f0f0f0";
hoverElement.style.display = "flex";
hoverElement.style.alignItems = "center";
hoverElement.style.justifyContent = "center";
hoverElement.style.marginTop = "10px";
hoverElement.style.transition = "background-color 0.3s ease";

container.appendChild(hoverElement);

/**
 * Manejador al ingresar el cursor en el área.
 */
const handleMouseOver = (event: MouseEvent): void => {
  console.log("✅ [EVENT - MouseOver] Puntero ingresó al área del elemento:", event);
  hoverElement.style.backgroundColor = "#d0ffd0";
};

/**
 * Manejador al salir el cursor del área.
 */
const handleMouseOut = (event: MouseEvent): void => {
  console.log("✅ [EVENT - MouseOut] Puntero abandonó el área del elemento:", event);
  hoverElement.style.backgroundColor = "#f0f0f0";
};

// [2] Registro de escuchadores del puntero
hoverElement.addEventListener("mouseover", handleMouseOver);
hoverElement.addEventListener("mouseout", handleMouseOut);

// ================================================================================
// 🚨 6. Escuchadores Globales y Desuscripción (Cleanup / Anti-Memory Leak)
// ================================================================================
// Remoción explícita mediante 'removeEventListener' en objetos globales para
// evitar fugas de memoria y procesamiento innecesario.
// ================================================================================

// [1] Creación y configuración de estilos para el cuadro modal emergente
const modalElement: HTMLDivElement = document.createElement("div");
modalElement.id = "modal";
modalElement.style.position = "fixed";
modalElement.style.top = "50%";
modalElement.style.left = "50%";
modalElement.style.transform = "translate(-50%, -50%)";
modalElement.style.padding = "20px";
modalElement.style.backgroundColor = "#ffffff";
modalElement.style.border = "1px solid #ccc";
modalElement.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.15)";
modalElement.textContent = "Presiona 'Esc' para cerrar este modal.";

document.body.appendChild(modalElement);

/**
 * Manejador global para detectar la tecla de escape (Esc) y cerrar el modal.
 */
const handleEscKeyPress = (event: KeyboardEvent): void => {
  // [1] Verificación de la tecla presionada
  if (event.key === "Escape") {
    console.log("✅ [EVENT - Global Keydown] Tecla Esc detectada. Ocultando modal.");

    // [2] Ocultar el elemento visual
    modalElement.style.display = "none";

    // [3] Desvinculación de seguridad (Cleanup) para evitar fugas de memoria
    document.removeEventListener("keydown", handleEscKeyPress);
    console.log("🔌 [CLEANUP] Escuchador de teclado en 'document' removido exitosamente.");
  }
};

// [2] Registro del evento global en el documento
document.addEventListener("keydown", handleEscKeyPress);