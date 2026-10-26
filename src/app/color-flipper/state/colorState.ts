import { type ColorOption } from '../models/color.model';

// ================================================================================
// ⚙️ Estado de la Paleta y Datos Iniciales
// ================================================================================
// Colección inmutable de colores y gestión del color seleccionado actualmente.
// ================================================================================

// [1] Paleta base representada como una colección de objetos fuertemente tipados
export const colorPalette: ColorOption[] = [
  { hex: "#28262C", name: "Raisin Black" },
  { hex: "#998FC7", name: "Blue Bell" },
  { hex: "#D4C2FC", name: "Lavender Blue" },
  { hex: "#F9F5FF", name: "Magnolia" },
  { hex: "#14248A", name: "Resolution Blue" }
];

// [2] Estado reactivo del color activo
let currentColor: string = colorPalette[0].hex;


/**
 * Obtiene el código hexadecimal del color activo.
 */
export const getCurrentColor = (): string => currentColor;

/**
 * Actualiza el color activo en el estado global.
 * @param hex Código hexadecimal del nuevo color.
 */
export const setCurrentColor = (hex: string): void => {
  currentColor = hex;
};