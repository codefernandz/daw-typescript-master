import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Entorno de Pruebas
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para el análisis de estructuras de datos orientadas a objetos
// ================================================================================
separator("=", "Demostración de objetos en TypeScript");

const granularProfile = {
  firstName: "Luis",
  lastName: "Fernández",
  age: 32,
  email: "luis.fernandez@example.com",
  phone: "+34 123 456 789",
  address: {
    street: "Calle Falsa 123",
    city: "Madrid",
    country: "Spain",
  },
  hobbies: ["programación", "lectura", "viajar"],
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
};

// Impresión completa de la estructura del objeto en consola
console.log("✅ [OBJECT] Person Profile:", { person: granularProfile });

// ================================================================================
// 🔍 Acceso a propiedades usando Notación de Punto (.)
// ================================================================================
// [1] Es la forma más común, limpia y legible de acceder a propiedades estáticas
// [2] TypeScript provee autocompletado nativo (IntelliSense) al usar este formato
// [3] Útil cuando conocemos el nombre exacto de la clave en tiempo de desarrollo
// ================================================================================
console.log("✅ [OBJECT] Person's first name:", granularProfile.firstName);
console.log("✅ [OBJECT] Person's last name:", granularProfile.lastName);
console.log("✅ [OBJECT] Person's age:", granularProfile.age);

// ================================================================================
// 🔑 Acceso a propiedades usando Notación de Corchetes ([])
// ================================================================================
// [1] Permite el acceso dinámico evaluando strings o variables en tiempo de ejecución
// [2] Indispensable si las claves del objeto contienen caracteres especiales o espacios
// [3] Requiere pasar la clave del mapa interno en formato de cadena de texto estricta
// ================================================================================
console.log("✅ [OBJECT] Person's email:", granularProfile["email"]);
console.log("✅ [OBJECT] Person's phone:", granularProfile["phone"]);
console.log("✅ [OBJECT] Person's address:", granularProfile["address"]);
console.log("✅ [OBJECT] Person's hobbies:", granularProfile["hobbies"]);

// ================================================================================
// 📦 Object: Estructuras complejas clave-valor
// ================================================================================
// [1] Declaración de objetos con interfaces específicas explícitas en lugar del tipo 'object' genérico
// [2] Almacenamiento por referencia en el Heap de memoria con punteros en el Stack
// [3] Acceso estructurado a propiedades y serialización a JSON strings para transporte seguro de datos
// ================================================================================
separator("=", "Object: Estructuras complejas clave-valor");

// Refactorización Clean Code: Evitamos el tipo 'object' genérico implementando un tipado estructural exacto inline
let activeSystemUser: { name: string; age: number } = { name: "Alice", age: 28 };
let targetVehicle: { make: string; model: string; year: number } = { make: "Toyota", model: "Camry", year: 2020 };

// Inferencia de tipo: TS deduce el esquema exacto permitiendo el acceso directo a los campos sin lanzar errores
let catalogedBook = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

// Serialización: Conversión del grafo del objeto en texto plano mediante JSON.stringify()
console.log(`✅ [OBJECT] User: ${JSON.stringify(activeSystemUser)}`);
console.log(`✅ [OBJECT] Car: ${JSON.stringify(targetVehicle)}`);
console.log(`✅ [OBJECT] Book: ${JSON.stringify(catalogedBook)}`);

// Verificación en runtime: El operador 'typeof' catalogará todas estas estructuras simplemente como 'object'
console.log(`✅ [TYPE] user type: ${typeof activeSystemUser}`);
console.log(`✅ [TYPE] car type: ${typeof targetVehicle}`);
console.log(`✅ [TYPE] book type: ${typeof catalogedBook}`);

// Lectura de propiedades inferidas por el compilador estático
console.log(`✅ [BOOK] Title: ${catalogedBook.title}`);
console.log(`✅ [BOOK] Author: ${catalogedBook.author}`);
console.log(`✅ [BOOK] Year: ${catalogedBook.year}`);

// ================================================================================
// 🔀 Desestructuración de Objetos (Destructuring)
// ================================================================================
// [1] Permite la extracción directa de propiedades asignándolas a variables locales autónomas
// [2] Reduce drásticamente la repetición de código innecesario en la lectura de datos anidados
// [3] Soporta la declaración de valores por defecto durante el proceso de desempaquetado
// ================================================================================
const { title: extractedBookTitle, author: extractedBookAuthor } = catalogedBook;
console.log(`✅ [DESTRUCTURING] Extracted Title: ${extractedBookTitle} by ${extractedBookAuthor}`);

// ================================================================================
// 🔒 Mutabilidad Controlada (Object.freeze)
// ================================================================================
// [1] Congela un objeto impidiendo que se le agreguen, eliminen o alteren propiedades en runtime
// [2] Convierte la estructura de datos en una entidad estrictamente de solo lectura (Readonly)
// [3] Nota técnica: Es una protección superficial (shallow); las propiedades anidadas profundas no se congelan automáticamente
// ================================================================================
const frozenBook = Object.freeze({ ...catalogedBook });
console.log(`✅ [MUTABILITY] Object status: Is 'frozenBook' protected? Yes`, Object.isFrozen(frozenBook));

// ================================================================================
// 🔄 Iteración sobre Objetos (Object.keys, Object.values, Object.entries)
// ================================================================================
// [1] Permite recorrer las propiedades de un objeto de manera ordenada y controlada
// [2] Object.keys() devuelve un array con los nombres de las propiedades enumerables
// [3] Object.values() devuelve un array con los valores de las propiedades enumerables
// [4] Object.entries() devuelve un array de pares [clave, valor] de las propiedades enumerables
// ================================================================================
separator("=", "Iteración sobre Objetos");

const userProfile = {
  username: "johndoe",
  email: "johndoe@example.com",
  role: "admin",
};

const userKeys = Object.keys(userProfile);
console.log("✅ [OBJECT] User keys:", userKeys);

const userValues = Object.values(userProfile);
console.log("✅ [OBJECT] User values:", userValues);

const userEntries = Object.entries(userProfile);
console.log("✅ [OBJECT] User entries:", userEntries);