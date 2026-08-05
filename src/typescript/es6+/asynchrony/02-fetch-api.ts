import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Peticiones HTTP con Fetch API
// ================================================================================
// Realización de peticiones asíncronas HTTP (GET, POST y Query Parameters)
// utilizando el API nativo `fetch` con tipado estricto en TypeScript.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Peticiones HTTP Asíncronas con Fetch API");

// ================================================================================
// 📋 1. Definición de Interfaces y Contratos de Datos (DTOs)
// ================================================================================
// Modelado de los datos recibidos del servidor y de las estructuras enviadas.
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

// Base URL para pruebas de consumo de API REST
const BASE_URL: string = "https://jsonplaceholder.typicode.com";

// ================================================================================
// 🌐 2. Petición HTTP GET Simple (Fetch Resource)
// ================================================================================
// Obtención de un recurso individual mediante su identificador.
// ⚠️ Regla Fundamental: `fetch` solo rechaza la promesa por errores de red.
// Los errores HTTP (404, 500) requieren verificación explícita mediante `response.ok`.
// ================================================================================

// [1] Solicitud GET simple para obtener la publicación #1
fetch(`${BASE_URL}/posts/1`)
  .then((response: Response): Promise<Post> => {
    // Validar el estado de la respuesta HTTP (Rango 200-299)
    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: Estado de respuesta no válido (${response.status})`);
    }
    return response.json() as Promise<Post>;
  })
  .then((data: Post) => {
    console.log("✅ [FETCH - GET Simple] Publicación obtenida con éxito:", data);
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error("❌ [FETCH - GET Simple Error]:", error.message);
    }
  });

// ================================================================================
// 📤 3. Petición HTTP POST (Creación de Recursos con Body)
// ================================================================================
// Envío de datos JSON al servidor definiendo el método, headers y cuerpo serializado.
// ================================================================================

// [1] Objeto a enviar al servidor
const postData: CreatePostDto = {
  title: "foo",
  body: "bar",
  userId: 1
};

// [2] Ejecución de la solicitud POST con headers y JSON stringificado
fetch(`${BASE_URL}/posts`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(postData)
})
  .then((response: Response): Promise<Post> => {
    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: Fallo al crear el recurso (${response.status})`);
    }
    return response.json() as Promise<Post>;
  })
  .then((data: Post) => {
    console.log("✅ [FETCH - POST Created] Recurso creado exitosamente en el servidor:", data);
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error("❌ [FETCH - POST Error]:", error.message);
    }
  });

// ================================================================================
// 🔎 4. Petición HTTP GET con Parámetros de Consulta (Query Params)
// ================================================================================
// Construcción dinámica de URLs con parámetros de filtrado usando `URLSearchParams`.
// ================================================================================

// [1] Definición limpia de parámetros de consulta
const queryParams: URLSearchParams = new URLSearchParams({
  userId: "1"
});

// [2] Petición GET aplicando la Query String concatenada
fetch(`${BASE_URL}/posts?${queryParams.toString()}`)
  .then((response: Response): Promise<Post[]> => {
    if (!response.ok) {
      throw new Error(`[HTTP ERROR]: Fallo al filtrar publicaciones (${response.status})`);
    }
    return response.json() as Promise<Post[]>;
  })
  .then((posts: Post[]) => {
    console.log(`✅ [FETCH - GET Filtered] Publicaciones obtenidas para el userId=1 (Total: ${posts.length}):`, posts);
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error("❌ [FETCH - GET Filtered Error]:", error.message);
    }
  });