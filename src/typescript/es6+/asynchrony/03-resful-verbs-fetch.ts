import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Verbos RESTful HTTP con Fetch API
// ================================================================================
// Implementación de operaciones CRUD (Create, Read, Update, Delete) usando los
// verbos HTTP estándar (GET, POST, PUT, DELETE) y tipado estricto en TypeScript.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Operaciones RESTful (GET, POST, PUT, DELETE) con Fetch API");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos RESTful
// ================================================================================
// Contratos de datos para recursos y payloads de mutación (DTOs).
// ================================================================================

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CreatePostDto {
  title: string;
  body: string;
  userId: number;
}

interface UpdatePostDto extends CreatePostDto {
  id: number;
}

const BASE_URL: string = "https://jsonplaceholder.typicode.com";

// ================================================================================
// 📖 2. Petición GET (READ - Lectura de Recursos)
// ================================================================================
// Consulta y obtiene el estado actual de un recurso específico.
// ================================================================================

fetch(`${BASE_URL}/posts/1`)
  .then((response: Response): Promise<Post> => {
    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: Error al consultar el recurso (${response.status})`);
    }
    return response.json() as Promise<Post>;
  })
  .then((data: Post) => {
    console.log("✅ [REST - GET Response]: Recurso obtenido:", data);
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error("❌ [REST - GET Error]:", error.message);
    }
  });

// ================================================================================
// ➕ 3. Petición POST (CREATE - Creación de Recursos)
// ================================================================================
// Envía datos para la creación de un nuevo recurso en el servidor.
// ================================================================================

const newPost: CreatePostDto = {
  title: "foo",
  body: "bar",
  userId: 1
};

fetch(`${BASE_URL}/posts`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newPost)
})
  .then((response: Response): Promise<Post> => {
    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: Error al crear el recurso (${response.status})`);
    }
    return response.json() as Promise<Post>;
  })
  .then((data: Post) => {
    console.log("✅ [REST - POST Response]: Recurso creado exitosamente:", data);
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error("❌ [REST - POST Error]:", error.message);
    }
  });

// ================================================================================
// 🔄 4. Petición PUT (UPDATE - Reemplazo/Actualización Completa)
// ================================================================================
// Reemplaza por completo el estado del recurso existente por la nueva entidad enviada.
// ================================================================================

const updatedPost: UpdatePostDto = {
  id: 1,
  title: "foo updated",
  body: "bar updated",
  userId: 1
};

fetch(`${BASE_URL}/posts/1`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(updatedPost)
})
  .then((response: Response): Promise<Post> => {
    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: Error al actualizar el recurso (${response.status})`);
    }
    return response.json() as Promise<Post>;
  })
  .then((data: Post) => {
    console.log("✅ [REST - PUT Response]: Recurso actualizado exitosamente:", data);
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error("❌ [REST - PUT Error]:", error.message);
    }
  });

// ================================================================================
// 🗑️ 5. Petición DELETE (DELETE - Eliminación de Recursos)
// ================================================================================
// Elimina un recurso del servidor por su identificador.
// ⚠️ Nota: Generalmente las respuestas DELETE exitosas no retornan contenido (204 No Content)
// o devuelven una confirmación simple en lugar de la entidad completa.
// ================================================================================

fetch(`${BASE_URL}/posts/1`, {
  method: "DELETE"
})
  .then((response: Response): void => {
    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: Fallo al eliminar el recurso (${response.statusText})`);
    }
    console.log("✅ [REST - DELETE Response]: Recurso eliminado correctamente del servidor.");
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error("❌ [REST - DELETE Error]:", error.message);
    }
  });