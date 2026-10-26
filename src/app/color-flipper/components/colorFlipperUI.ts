import { type ColorOption } from "../models/color.model";
import { colorPalette, getCurrentColor, setCurrentColor } from "../state/colorState";

// ================================================================================
// 🛠️ Componentes e Inyección en el DOM
// ================================================================================
// Creación de la interfaz interactiva del Color Flipper y renderizado responsivo.
// ================================================================================

let containerElement: HTMLDivElement;
let colorListElement: HTMLUListElement;
let inputElement: HTMLInputElement;
let colorCodeDisplay: HTMLHeadingElement;

/**
 * Construye la estructura base del contenedor Color Flipper en el DOM.
 */
export const buildLayout = (): void => {
  // [1] Instanciación del contenedor principal
  containerElement = document.createElement("div");
  containerElement.id = "color-flipper-container";

  // [2] Título del proyecto
  const title: HTMLHeadingElement = document.createElement("h1");
  title.textContent = "Color Flipper";

  // [3] Visualizador del código Hex activo
  colorCodeDisplay = document.createElement("h2");
  colorCodeDisplay.id = "color-code-display";

  // [4] Subtítulo informativo
  const codingColors: HTMLParagraphElement = document.createElement("p");
  codingColors.textContent = "Coding Colors Palette";

  // [5] Lista de colores
  colorListElement = document.createElement("ul");
  colorListElement.id = "color-list";

  // [6] Campo de entrada para búsqueda o código personalizado
  inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.id = "color-input";
  inputElement.placeholder = "Enter HEX (e.g. #FF5733)...";

  // [7] Escuchador de eventos en tiempo real para el input
  inputElement.addEventListener("input", handleCustomColorInput);

  // [8] Ensamblado de la interfaz
  containerElement.appendChild(title);
  containerElement.appendChild(colorCodeDisplay);
  containerElement.appendChild(codingColors);
  containerElement.appendChild(colorListElement);
  containerElement.appendChild(inputElement);

  document.body.appendChild(containerElement);
};

/**
 * Renderiza los botones de la paleta de colores usando DocumentFragment.
 */
export const renderPalette = (): void => {
  // [1] Limpieza preventiva del contenedor
  colorListElement.innerHTML = "";

  // [2] Creación del fragmento en memoria para inserción eficiente
  const fragment: DocumentFragment = document.createDocumentFragment();

  // [3] Construcción de los ítems seleccionables
  colorPalette.forEach((color: ColorOption) => {
    const listItem: HTMLLIElement = document.createElement("li");
    const button: HTMLButtonElement = document.createElement("button");

    button.textContent = color.name;
    button.style.backgroundColor = color.hex;
    button.title = `Apply ${color.name} (${color.hex})`;

    // Ajustar color de texto para legibilidad según el fondo del botón
    button.style.color = isDarkColor(color.hex) ? "#FFFFFF" : "#000000";

    button.addEventListener("click", () => applyColor(color.hex));
    listItem.appendChild(button);
    fragment.appendChild(listItem);
  });

  // [4] Inyección masiva en el DOM
  colorListElement.appendChild(fragment);

  // [5] Aplicación inicial del primer color
  applyColor(getCurrentColor());
};

/**
 * Aplica un nuevo color de fondo al cuerpo del documento y actualiza los indicadores.
 * @param hex Código hexadecimal del color a aplicar.
 */
export const applyColor = (hex: string): void => {
  // [1] Actualización del estado
  setCurrentColor(hex);

  // [2] Aplicación directa del fondo dinámico en el body
  document.body.style.backgroundColor = hex;

  // [3] Actualización del texto con el código del color
  if (colorCodeDisplay) {
    colorCodeDisplay.textContent = hex.toUpperCase();
    colorCodeDisplay.style.color = isDarkColor(hex) ? "#FFFFFF" : "#1E293B";
  }

  console.log(`✅ [DOM - Color] Fondo actualizado a: ${hex}`);
};

/**
 * Manejador del campo de entrada para colores personalizados.
 */
const handleCustomColorInput = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  const value = target.value.trim();

  // Validación básica del formato hexadecimal (#FFF o #FFFFFF)
  const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(value);

  if (isValidHex) {
    applyColor(value);
  }
};

/**
 * Función auxiliar para determinar si un color hexadecimal es oscuro o claro.
 */
const isDarkColor = (hex: string): boolean => {
  const cleanHex = hex.replace("#", "");
  const fullHex = cleanHex.length === 3
    ? cleanHex.split("").map(c => c + c).join("")
    : cleanHex;

  const num = parseInt(fullHex, 16);
  const r = (num >> 16) & 0xFF;
  const g = (num >> 8) & 0xFF;
  const b = num & 0xFF;

  // Fórmula de luminancia percibida
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
};