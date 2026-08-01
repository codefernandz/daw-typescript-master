import "./style.css";
import { separator } from "../../utils/methods";
import { buildLayout, renderTasks } from "./components/taskUI";
import { sortTasks } from "./state/taskState";

// ================================================================================
// ⚙️ Inicialización: Punto de Entrada de la Aplicación
// ================================================================================
// Orquestación del flujo visual en la terminal y montaje general de la aplicación.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Gestor de Tareas Interactivo (Modular)");

// [2] Construcción del layout base en el DOM
buildLayout();

// [3] Ordenamiento inicial e inyección de datos
sortTasks();
renderTasks();