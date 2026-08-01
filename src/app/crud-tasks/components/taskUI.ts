import { type Task } from "../models/task.model";
import { taskList, sortTasks } from "../state/taskState";

// ================================================================================
// 🛠️ Componentes e Inyección en el DOM
// ================================================================================
// Creación de la interfaz HTML y gestión de eventos de renderizado.
// ================================================================================

let listElements: HTMLUListElement;
let inputElement: HTMLInputElement;

// ================================================================================
// Construye la estructura base del contenedor CRUD en el DOM.
// ================================================================================
export const buildLayout = (): void => {
  // [1] Instanciación del contenedor principal
  const container: HTMLDivElement = document.createElement("div");
  container.id = "crud-container";

  // [2] Instanciación de la lista
  listElements = document.createElement("ul");
  listElements.id = "list-elements";

  // [3] Instanciación de controles
  const groupElements: HTMLDivElement = document.createElement("div");
  groupElements.id = "new-item-group";

  inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.placeholder = "Enter item text...";

  const buttonElement: HTMLButtonElement = document.createElement("button");
  buttonElement.textContent = "Add Item";

  // [4] Acoplamiento de la interfaz
  groupElements.appendChild(inputElement);
  groupElements.appendChild(buttonElement);
  container.appendChild(listElements);
  container.appendChild(groupElements);

  // [5] Montaje en el documento
  document.body.appendChild(container);

  // [6] Escuchadores de eventos para agregar tareas
  buttonElement.addEventListener("click", handleAddTask);
  inputElement.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter") handleAddTask();
  });
};

// ================================================================================
// Renderiza la colección de tareas en el DOM de forma optimizada.
// ================================================================================
export const renderTasks = (): void => {
  // [1] Limpieza del contenido previo
  listElements.innerHTML = "";

  // [2] Creación del contenedor en memoria
  const fragment: DocumentFragment = document.createDocumentFragment();

  // [3] Construcción de ítems e inserción en el fragmento
  taskList.forEach((task: Task) => {
    const listItem: HTMLLIElement = document.createElement("li");
    listItem.textContent = task.description;

    if (task.completed) {
      listItem.className = "completed";
    }

    listItem.addEventListener("click", () => toggleTaskStatus(task.id));
    fragment.appendChild(listItem);
  });

  // [4] Inyección única en el DOM
  listElements.appendChild(fragment);
  console.log("✅ [DOM - Render] Lista de tareas renderizada exitosamente.");
};

// ================================================================================
// Alterna el estado 'completed' de una tarea según su id.
// ================================================================================
const toggleTaskStatus = (taskId: string): void => {
  // [1] Búsqueda de la tarea por id
  const task = taskList.find((item: Task) => item.id === taskId);

  // [2] Modificación de estado, ordenamiento y refresco de interfaz
  if (task) {
    task.completed = !task.completed;
    console.log(`✅ [EVENT - Task] Estado cambiado para "${task.description}": completada = ${task.completed}`);
    sortTasks();
    renderTasks();
  } else {
    console.log(`❌ [ERROR - Task] No se encontró la tarea con ID: ${taskId}`);
  }
};

// ================================================================================
// Agrega una nueva tarea a la colección a partir del input.
// ================================================================================
const handleAddTask = (): void => {
  // [1] Captura y sanitización del texto
  const taskText: string = inputElement.value.trim();

  // [2] Validación de contenido
  if (taskText === "") {
    console.log("⚠️ [WARNING - Task] Intento de agregar una tarea vacía.");
    return;
  }

  // [3] Creación e inserción de la tarea
  const newTask: Task = {
    id: crypto.randomUUID(),
    description: taskText,
    completed: false
  };

  taskList.unshift(newTask);
  inputElement.value = "";
  console.log(`✅ [EVENT - Task] Nueva tarea agregada: "${newTask.description}"`);

  // [4] Reordenamiento y refresco
  sortTasks();
  renderTasks();
};