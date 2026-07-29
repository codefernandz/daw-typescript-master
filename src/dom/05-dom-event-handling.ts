import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Eventos en el DOM
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Demostración práctica de 'addEventListener', tipado de eventos y cleanup
// ================================================================================
separator("Manejo e Intercepción de Eventos en el DOM");

// ================================================================================
// 🛠️ 1. Creación e Inyección del Contenedor Principal
// ================================================================================
// Creamos un contenedor 'div' donde alojaremos los elementos interactivos
// para mantener el árbol del DOM organizado.
const container: HTMLDivElement = document.createElement("div");
container.id = "event-container";
container.className = "event-container-class";
document.body.appendChild(container);

// ================================================================================
// 🖱️ 2. Eventos de Clic del Ratón (MouseEvent)
// ================================================================================
// Los eventos 'click' son disparados cuando el usuario presiona y suelta un botón sobre un elemento.

// [1] Instanciación del botón de prueba
const buttonElement: HTMLButtonElement = document.createElement("button");
buttonElement.id = "event-button";
buttonElement.textContent = "Click Me";
container.appendChild(buttonElement);

/**
 * Manejador para clics de ratón.
 * @param event Objeto 'MouseEvent' que contiene coordenadas (clientX, clientY), botón presionado, etc.
 */
const handleClick = (event: MouseEvent): void => {
  // 📋 Referencia técnica:
  // - event.type: Devuelve el nombre del evento ("click").
  // - event.target: Elemento del DOM que disparó el evento.
  console.log("✅ [EVENT - Click] Detalle del evento:", event);
  console.log(`📡 Tipo de evento: ${event.type} | Target ID: ${(event.target as HTMLElement).id}`);
  alert("¡Botón clickeado!");
};

// Vinculación del manejador mediante addEventListener(nombreEvento, callback)
buttonElement.addEventListener("click", handleClick);

// ================================================================================
// ⌨️ 3. Eventos de Teclado en Entradas (KeyboardEvent - Input)
// ================================================================================
// Los eventos 'keydown' se activan en el momento exacto en que una tecla es presionada.

const inputElement: HTMLInputElement = document.createElement("input");
inputElement.type = "text";
inputElement.placeholder = "Escribe algo...";
container.appendChild(inputElement);

/**
 * Manejador para captura de teclado en campos de texto.
 * @param event Objeto 'KeyboardEvent' que expone información de la tecla física y modificadores (Shift, Ctrl, etc.).
 */
const handleKeyPress = (event: KeyboardEvent): void => {
  // 📋 Referencia técnica:
  // - event.key: Retorna el valor imprimible de la tecla (ej: "a", "Enter", "Backspace").
  // - event.code: Retorna la clave física de la tecla en el teclado (ej: "KeyA", "Digit1").
  console.log(`✅ [EVENT - Keydown] Tecla: "${event.key}" | Código Físico: ${event.code}`);
};

inputElement.addEventListener("keydown", handleKeyPress);

// ================================================================================
// 🔀 4. Eventos de Cambio en Formulario (Event - Select)
// ================================================================================
// El evento 'change' se dispara cuando el usuario confirma una selección o modifica el valor de un campo.

const selectElement: HTMLSelectElement = document.createElement("select");

const option1: HTMLOptionElement = document.createElement("option");
option1.value = "option1";
option1.textContent = "Opción 1";

const option2: HTMLOptionElement = document.createElement("option");
option2.value = "option2";
option2.textContent = "Opción 2";

selectElement.appendChild(option1);
selectElement.appendChild(option2);
container.appendChild(selectElement);

/**
 * Manejador para el cambio de selección.
 * @param event Objeto 'Event' genérico del DOM.
 */
const handleSelectChange = (event: Event): void => {
  // 📋 Referencia técnica de TypeScript:
  // 'event.target' se tipa de forma genérica como EventTarget | null.
  // Es necesario usar una aserción de tipo ('as HTMLSelectElement') para acceder a la propiedad '.value' con seguridad.
  const target = event.target as HTMLSelectElement;
  console.log("✅ [EVENT - Change] Opción seleccionada:", target.value);
};

selectElement.addEventListener("change", handleSelectChange);

// ================================================================================
// 🎨 5. Eventos de Entrada/Salida del Puntero (MouseOver / MouseOut)
// ================================================================================
// Permiten detectar cuándo el cursor entra ('mouseover') o sale ('mouseout') de la superficie de un elemento.

const hoverElement: HTMLDivElement = document.createElement("div");
hoverElement.textContent = "Pasa el mouse por aquí";
hoverElement.style.width = "200px";
hoverElement.style.height = "100px";
hoverElement.style.backgroundColor = "#f0f0f0";
hoverElement.style.display = "flex";
hoverElement.style.alignItems = "center";
hoverElement.style.justifyContent = "center";
hoverElement.style.marginTop = "10px";
hoverElement.style.transition = "background-color 0.3s ease"; // Transición suave de color de fondo

container.appendChild(hoverElement);

/**
 * Manejador al ingresar con el ratón sobre el área.
 */
const handleMouseOver = (event: MouseEvent): void => {
  console.log("✅ [EVENT - MouseOver] Puntero ingresó al área del elemento:", event);
  hoverElement.style.backgroundColor = "#d0ffd0"; // Cambia a verde claro
};

/**
 * Manejador al salir con el ratón del área.
 */
const handleMouseOut = (event: MouseEvent): void => {
  console.log("✅ [EVENT - MouseOut] Puntero abandonó el área del elemento:", event);
  hoverElement.style.backgroundColor = "#f0f0f0"; // Restaura el gris original
};

hoverElement.addEventListener("mouseover", handleMouseOver);
hoverElement.addEventListener("mouseout", handleMouseOut);

// ================================================================================
// 🚨 6. Escuchadores Globales y Desuscripción (Cleanup / Anti-Memory Leak)
// ================================================================================
// Escuchar eventos en objetos globales como 'document' o 'window' requiere ser removido ('removeEventListener')
// una vez que la acción finaliza para no consumir recursos innecesarios de memoria.

// [1] Creación y estilizado de un cuadro modal centrado en pantalla
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
  if (event.key === "Escape") {
    console.log("✅ [EVENT - Global Keydown] Tecla Esc detectada. Ocultando modal.");

    // Ocultamos el elemento modal
    modalElement.style.display = "none";

    // 📋 Regla de buenas prácticas (Cleanup):
    // Desvinculamos el manejador mediante 'removeEventListener'. Esto libera memoria y evita
    // que la función siga escuchando teclas en segundo plano cuando el modal ya no es visible.
    document.removeEventListener("keydown", handleEscKeyPress);
    console.log("🔌 [CLEANUP] Escuchador de teclado en 'document' removido exitosamente.");
  }
};

// Vinculamos el evento de teclado directamente al documento global
document.addEventListener("keydown", handleEscKeyPress);