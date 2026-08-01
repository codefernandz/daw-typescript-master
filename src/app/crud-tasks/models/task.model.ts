// ================================================================================
// 📋 Definición de Interfaces y Modelos
// ================================================================================
// Estructura de datos inmutable para representar cada tarea en el sistema.
// ================================================================================

export interface Task {
  id: string;
  description: string;
  completed: boolean;
}