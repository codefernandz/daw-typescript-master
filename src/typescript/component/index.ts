import { separator } from "../utils/methods";
import { ourButtonStyles, OurButton } from "./OurButton/OurButton";

// ================================================================================
// ⚙️ Inicialización: Renderizado y Orquestación de Componentes UI en el DOM
// ================================================================================
// Demostración de montaje de componentes reutilizables, inyección de plantillas
// HTML complejas y manejo de interacción mediante Delegación de Eventos.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Montaje de Componentes UI & Delegación de Eventos");

// ================================================================================
// 🌐 1. Creación e Infraestructura del Nodo Contenedor
// ================================================================================
// Instanciación programática del elemento padre donde se montarán los componentes.
// ================================================================================

// [1] Creación del nodo div contenedor
const container: HTMLDivElement = document.createElement("div");
container.id = "our-button-container";

// ================================================================================
// 🖼️ 2. Inyección Dinámica de Plantillas (HTML Strings)
// ================================================================================
// Composición de la interfaz combinando las llamadas a los componentes UI
// y marcado HTML estándar.
// ================================================================================

// [1] Renderizado de componentes usando la firma legada y la interfaz de Props
container.innerHTML = `
  <section class="buttons-demo-section">
    <h2>Demostración de Componentes OurButton</h2>

    <!-- [Botón 1] Estilo base por defecto -->
    ${ourButtonStyles("Click me", "#9a9aff")}

    <!-- [Botón 2] Variante con clase 'highlight' -->
    ${ourButtonStyles("Login", "#ffaaaa", "highlight")}

    <ol class="content-list">
      <li>Otros</li>
      <li>Contenidos</li>
    </ol>

    <!-- [Botón 3] Renderizado moderno con interfaz de Props -->
    ${OurButton({
  text: "Cancel",
  backgroundColor: "#aaffaa",
  className: "my-custom-class",
  type: "button"
})}
  </section>
`;

// [2] Acoplamiento del contenedor al DOM
document.body.appendChild(container);
console.log("✅ [DOM MOUNT] Contenedor `#our-button-container` montado exitosamente.");

// ================================================================================
// 🎯 3. Manejo de Interacciones: Delegación de Eventos (Event Delegation)
// ================================================================================
// Al trabajar con cadenas HTML, la delegación de eventos en el elemento contenedor
// es el patrón recomendado para capturar interacciones de forma limpia y eficiente.
// ⚠️ Regla de Oro: Evita adjuntar 'addEventListener' individual a cada botón cuando
// los creas masivamente con innerHTML.
// ================================================================================

// [1] Escucha centralizada de eventos 'click' en el contenedor padre
container.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;

  // Verificación de si el elemento clickeado o su ancestro es un botón de nuestro componente
  const button = target.closest(".ourButton") as HTMLButtonElement | null;

  if (button) {
    const buttonText: string = button.textContent?.trim() || "Sin texto";
    console.log(`✅ [EVENT DELEGATION] Clic detectado en el botón: "${buttonText}"`);
  }
});