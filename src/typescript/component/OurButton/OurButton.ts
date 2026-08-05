import { separator } from "../../utils/methods";
import "./OurButton.css";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Componentes UI en TypeScript Pure/Vanilla
// ================================================================================
// Patrón de diseño de componentes funcionales basados en plantillas de cadenas HTML
// (HTML Strings) con inyección de estilos CSS y contratos de propiedades (Props).
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Componentes UI - Patrón de Plantillas HTML & Props");

// ================================================================================
// 📋 1. Definición de Contratos de Propiedades (Props Interface)
// ================================================================================
// Modela la estructura y restricción de los argumentos que recibe el componente.
// 📋 Nota: Facilita el mantenimiento, autocompletado y reusabilidad frente a argumentos posicionales.
// ================================================================================

export interface OurButtonProps {
  text: string;
  backgroundColor: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

// ================================================================================
// 🎨 2. Componente Funcional: OurButton (HTML String Template)
// ================================================================================
// Genera el marcado HTML dinámico del botón aplicando las clases y estilos inline.
// ⚠️ Regla de Seguridad: Al inyectar 'text' directamente mediante Template Literals,
// asegúrate de que los valores no provengan de inputs de usuarios sin sanitizar para evitar XSS.
// ================================================================================

/**
 * Genera el marcado HTML de un botón estilizado dinámicamente.
 *
 * @param props Objeto con la configuración de estilos y contenido del botón.
 * @returns Cadena HTML del elemento `<button>` compilado.
 */
export const OurButton = ({
  text,
  backgroundColor,
  className = "",
  type = "button",
  disabled = false
}: OurButtonProps): string => {
  // [1] Sanitización/Formateo de clases CSS opcionales
  const combinedClasses: string = `ourButton ${className}`.trim();

  // [2] Renderizado del marcado HTML mediante Template Literals
  return `
    <button
      type="${type}"
      class="${combinedClasses}"
      style="background-color: ${backgroundColor};"
      ${disabled ? "disabled" : ""}
    >
      ${text}
    </button>
  `;
};

// ================================================================================
// 🚀 3. Firma Compatibilizada (Legacy Signature)
// ================================================================================
// Mantiene el soporte para invocaciones con argumentos posicionales simples.
// ================================================================================

export const ourButtonStyles = (
  text: string,
  backgroundColor: string,
  className: string = ""
): string => {
  console.log(`✅ [COMPONENT RENDER] Generando botón individual: "${text}"`);
  return OurButton({ text, backgroundColor, className });
};

// ================================================================================
// 🧪 4. Ejemplo de Pruebas de Renderizado
// ================================================================================

// [1] Generación de botón de éxito
const primaryButtonHtml: string = OurButton({
  text: "Guardar Cambios",
  backgroundColor: "#2ecc71",
  className: "btn-primary"
});

// [2] Generación de botón de alerta
const dangerButtonHtml: string = OurButton({
  text: "Eliminar Registro",
  backgroundColor: "#e74c3c",
  className: "btn-danger",
  disabled: true
});

console.log("📋 [HTML TEMPLATE - Primary]:\n", primaryButtonHtml);
console.log("📋 [HTML TEMPLATE - Danger]:\n", dangerButtonHtml);