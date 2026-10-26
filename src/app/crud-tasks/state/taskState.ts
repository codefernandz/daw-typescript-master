import { type Task } from "../models/task.model";

// ================================================================================
// ⚙️ Estado de la Aplicación y Datos Iniciales
// ================================================================================
// Colección en memoria que actúa como la fuente única de verdad (Single Source of Truth).
// ================================================================================

// [1] Colección inicial de tareas con identificadores únicos estables
export const taskList: Task[] = [
  { id: crypto.randomUUID(), description: "Ir a hacer la compra", completed: false },
  { id: crypto.randomUUID(), description: "Crear el archivo html", completed: true },
  { id: crypto.randomUUID(), description: "Arreglar el coche", completed: false },
  { id: crypto.randomUUID(), description: "Crear proyecto millonario", completed: false },
  { id: crypto.randomUUID(), description: "Enlazar el archivo js al HTML", completed: true },
  { id: crypto.randomUUID(), description: "Ir al gimnasio", completed: true },
  { id: crypto.randomUUID(), description: "Tejer una camiseta", completed: false },
  { id: crypto.randomUUID(), description: "Ir a comprar agua", completed: false },
  { id: crypto.randomUUID(), description: "Fregar los platos", completed: true }
];

// ================================================================================
// Ordena la lista de tareas ubicando las pendientes al inicio.
// ================================================================================
export const sortTasks = (): void => {
  // [1] Ordenamiento mutable en sitio priorizando pendientes
  taskList.sort((a: Task, b: Task) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return 0;
  });
};