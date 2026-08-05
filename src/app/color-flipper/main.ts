import "./style.css";
import { separator } from "../../typescript/utils/methods";
import { buildLayout, renderPalette } from "./components/colorFlipperUI";

// ================================================================================
// ⚙️ Inicialización: Punto de Entrada Color Flipper
// ================================================================================
// Montaje del layout y renderizado inicial del Flipper.
// ================================================================================

// [1] Separador visual en la terminal
separator("Color Flipper App (Modular)");

// [2] Construcción e inyección en el DOM
buildLayout();
renderPalette();