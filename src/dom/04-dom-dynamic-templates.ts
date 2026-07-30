import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Plantillas Dinámicas Seguras en el DOM
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y verificación de
// la compilación estática mediante la generación e inyección de plantillas HTML
// dinámicas sanitizadas contra ataques XSS.
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Generación e Inyección de Plantillas Dinámicas (DOM Templates)");

/**
 * Modelo de datos (Interface) para el perfil de usuario.
 * Define la estructura y el tipado estricto de las propiedades que alimentarán la plantilla.
 */
interface UserProfile {
  firstName: string;
  lastName: string;
  jobTitle: string;
}

// ================================================================================
// 🛡️ 1. Función Utilitaria: Escape de Caracteres HTML (Anti-XSS)
// ================================================================================
// Sanitiza cadenas de texto para prevenir ataques de inyección de código (Cross-Site Scripting / XSS).
//
// 📌 ¿Por qué es necesaria?
// Al utilizar la propiedad 'innerHTML', el navegador interpreta cualquier etiqueta HTML o script
// inyectado dentro de los datos dinámicos. Esta función reemplaza los caracteres reservados por sus
// equivalentes en Entidades HTML seguras.
// ================================================================================

function sanitizeHTML(str: string): string {
  // [1] Reemplazo de caracteres reservados por entidades HTML seguras
  return str
    .replace(/&/g, "&amp;")   // & -> &amp; (Evita el inicio imprevisto de entidades)
    .replace(/</g, "&lt;")    // < -> &lt;  (Evita la apertura de etiquetas <script> o HTML)
    .replace(/>/g, "&gt;")    // > -> &gt;  (Evita el cierre de etiquetas HTML)
    .replace(/"/g, "&quot;")  // " -> &quot; (Evita romper atributos encerrados en comillas dobles)
    .replace(/'/g, "&#039;"); // ' -> &#039; (Evita romper atributos o scripts encerrados en comillas simples)
}

// ================================================================================
// 📝 2. Definición de Datos de Entrada (Inmutables)
// ================================================================================
// Objeto inmutable con la información del usuario tipado con la interfaz 'UserProfile'.
// ================================================================================

// [1] Definición del objeto de datos del usuario
const currentUser: UserProfile = {
  firstName: "John",
  lastName: "Doe",
  jobTitle: "Software Engineer"
};

// ================================================================================
// 🛠️ 3. Construcción del Contenedor e Inyección de Plantilla
// ================================================================================
// Instanciación del contenedor raíz, construcción de la plantilla mediante
// Template Literals interpolados de forma segura e inyección final en el DOM.
// ================================================================================

// [1] Instanciación del elemento contenedor raíz mediante la API 'createElement'
const boxContainer: HTMLDivElement = document.createElement("div");

// [2] Asignación de atributos de identificación CSS y manipulación
boxContainer.id = "box-container";
boxContainer.className = "box-container-class";

// [3] Definición de la plantilla HTML multilínea con interpolación sanitizada
const domTemplate: string = `
  <h1>Dynamic Content</h1>
  <p>This content is generated dynamically using a template string in TypeScript.</p>
  <p>My name is "${sanitizeHTML(currentUser.firstName)} ${sanitizeHTML(currentUser.lastName)}" and I work as a "${sanitizeHTML(currentUser.jobTitle)}".</p>
`;

// [4] Inyección del markup generado en la propiedad 'innerHTML' del contenedor
boxContainer.innerHTML = domTemplate;

// [5] Renderizado final: Inserción del contenedor dentro de 'document.body'
document.body.append(boxContainer);

// [6] Logs de verificación y trazabilidad en consola
console.log("✅ [DOM] Contenedor de plantilla dinámica insertado con éxito:", boxContainer);
console.log(`✅ [DATA] Datos renderizados: ${currentUser.firstName} ${currentUser.lastName} (${currentUser.jobTitle})`);