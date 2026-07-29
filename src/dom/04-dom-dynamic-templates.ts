import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Plantillas Dinámicas Seguras en el DOM
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Demostración práctica de interpolación de datos y sanitización contra XSS
// ================================================================================
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
/**
 * Sanitiza cadenas de texto para prevenir ataques de inyección de código (Cross-Site Scripting / XSS).
 * 
 * 📌 ¿Por qué es necesaria?
 * Al utilizar la propiedad 'innerHTML', el navegador interpreta cualquier etiqueta HTML o script 
 * inyectado dentro de los datos dinámicos. Esta función reemplaza los caracteres reservados del motor
 * de renderizado HTML por sus equivalentes en Entidades HTML seguras (HTML Entities).
 * 
 * @param str Cadena de texto potencialmente insegura recibida de una fuente externa o variable.
 * @returns Cadena escapada donde los símbolos '<', '>', '&', '"' y '\'' son inofensivos para la vista.
 */
function sanitizeHTML(str: string): string {
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
// Objeto con la información del usuario tipado con la interfaz 'UserProfile'.
// Se declara con 'const' garantizando inmutabilidad a nivel de referencia.
const currentUser: UserProfile = {
  firstName: "John",
  lastName: "Doe",
  jobTitle: "Software Engineer"
};

// ================================================================================
// 🛠️ 3. Construcción del Contenedor e Inyección de Plantilla
// ================================================================================

// Instanciación del elemento contenedor raíz mediante la API 'createElement' del DOM.
// Se tipa explícitamente como HTMLDivElement para habilitar el autocompletado y validación de TypeScript.
const boxContainer: HTMLDivElement = document.createElement("div");

// Asignación de atributos de identificación CSS y manipulación
boxContainer.id = "box-container";             // ID único en el árbol del DOM
boxContainer.className = "box-container-class"; // Clase(s) para la capa de estilos CSS

/**
 * Plantilla HTML multilínea (Template String / Literals).
 * Permite interpolar variables directamente mediante la sintaxis `${}`.
 * 
 * 💡 Buenas prácticas: Cada variable dinámica pasa por la función 'sanitizeHTML()' 
 * antes de ser renderizada en el markup final.
 */
const domTemplate: string = `
  <h1>Dynamic Content</h1>
  <p>This content is generated dynamically using a template string in TypeScript.</p>
  <p>My name is "${sanitizeHTML(currentUser.firstName)} ${sanitizeHTML(currentUser.lastName)}" and I work as a "${sanitizeHTML(currentUser.jobTitle)}".</p>
`;

// [1] Inyección del markup generado en la propiedad 'innerHTML' del contenedor
boxContainer.innerHTML = domTemplate;

// [2] Renderizado final: Inserción del contenedor en el árbol del DOM dentro de 'document.body'
// Se utiliza '.append()' que es un método moderno que permite añadir nodos o cadenas directamente.
document.body.append(boxContainer);

// ================================================================================
// 📊 Logs de Verificación y Trazabilidad
// ================================================================================
console.log("✅ [DOM] Contenedor de plantilla dinámica insertado con éxito:", boxContainer);
console.log(`✅ [DATA] Datos renderizados: ${currentUser.firstName} ${currentUser.lastName} (${currentUser.jobTitle})`);