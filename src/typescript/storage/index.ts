import { separator } from "../utils/methods";
import {
  saveData,
  getData,
  updateData,
  hasKey,
  getAllKeys,
  getAllData,
  removeData,
  clearStorage,
} from "./localStorageManager";

// ================================================================================
// ⚙️ Inicialización: Demostración y Pruebas del Gestor LocalStorage CRUD
// ================================================================================
// Módulo de pruebas integrales para validar la persisencia, actualización,
// lectura, inspección global y purga de datos en LocalStorage.
// ================================================================================

// [1] Separador inicial de ejecución
separator("Pruebas de Integración - Demo Gestor LocalStorage");

// ================================================================================
// 📋 1. Definición de Tipos y Datos de Prueba
// ================================================================================
// Interfaces estrictas para probar el tipado con Genéricos (<T>).
// ================================================================================

/**
 * Interface que define la estructura del perfil de un usuario de prueba.
 */
interface UserProfile {
  id: string;
  name: string;
  age: number;
  role: string;
  country?: string;
  active: boolean;
}

/**
 * Interface que define la configuración general de la aplicación.
 */
interface AppSettings {
  theme: "light" | "dark";
  notifications: boolean;
  language: string;
}

// [1] Creación de objetos base para persistir
const userMock: UserProfile = {
  id: "USR-101",
  name: "Carlos Mendoza",
  age: 28,
  role: "Developer",
  active: true,
};

const settingsMock: AppSettings = {
  theme: "dark",
  notifications: true,
  language: "es",
};

// ================================================================================
// 🧪 2. Flujo Secuencial de Demostración
// ================================================================================
// Ejecución ordenada de pruebas de escritura, lectura, actualización y borrado.
// ================================================================================

// --------------------------------------------------------------------------------
// [PASO 1]: Guardado de datos estructurados (saveData)
// --------------------------------------------------------------------------------
console.log("\n--- 💾 [PASO 1]: Guardado de Registros en LocalStorage ---");

// Guardamos un objeto de perfil de usuario
saveData<UserProfile>("user_profile", userMock);

// Guardamos una configuración global
saveData<AppSettings>("app_settings", settingsMock);

// Guardamos un dato primitivo simple
saveData<string>("session_token", "Bearer_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");

// --------------------------------------------------------------------------------
// [PASO 2]: Lectura e Inspección Tipada (getData)
// --------------------------------------------------------------------------------
console.log("\n--- 📖 [PASO 2]: Lectura Deserializada y Tipada ---");

// Recuperamos el perfil con su tipo estricto UserProfile
const savedUser = getData<UserProfile>("user_profile");
console.log("📋 Objeto Usuario Recuperado:", savedUser);
console.log("👉 Nombre extraído:", savedUser?.name); // Autocompletado tipado activo

// Recuperamos la configuración
const savedSettings = getData<AppSettings>("app_settings");
console.log("📋 Configuración Recuperada:", savedSettings);

// Intentamos leer una clave inexistente
const missingData = getData<UserProfile>("non_existing_key");
console.log("📋 Lectura de clave inexistente (debe ser null):", missingData);

// --------------------------------------------------------------------------------
// [PASO 3]: Actualización Parcial de Objetos (updateData)
// --------------------------------------------------------------------------------
console.log("\n--- 🔄 [PASO 3]: Actualización Parcial de Datos (Shallow Merge) ---");

// Actualizamos la edad y agregamos la propiedad 'country' al usuario existente
updateData<UserProfile>("user_profile", {
  age: 29,
  country: "España",
});

// Verificamos el resultado de la fusión
const updatedUser = getData<UserProfile>("user_profile");
console.log("📋 Usuario Tras Actualización:", updatedUser);

// --------------------------------------------------------------------------------
// [PASO 4]: Verificación de Existencia de Claves (hasKey)
// --------------------------------------------------------------------------------
console.log("\n--- ❓ [PASO 4]: Verificación de Claves Activas ---");

const hasProfileKey: boolean = hasKey("user_profile");
console.log("❓ ¿Existe la clave 'user_profile'?:", hasProfileKey ? "✅ SÍ" : "❌ NO");

const hasFakeKey: boolean = hasKey("fake_key");
console.log("❓ ¿Existe la clave 'fake_key'?:", hasFakeKey ? "✅ SÍ" : "❌ NO");

// --------------------------------------------------------------------------------
// [PASO 5]: Inspección Global de Claves y Datos (getAllKeys & getAllData)
// --------------------------------------------------------------------------------
console.log("\n--- 🌐 [PASO 5]: Inspección Global del Almacenamiento ---");

// Obtenemos un array con los nombres de todas las claves presentes
const allKeys: string[] = getAllKeys();
console.log("📋 Lista de Claves Almacenadas:", allKeys);

// Obtenemos un mapa diccionario completo con todos los objetos guardados
const allData: Record<string, any> = getAllData();
console.log("📋 Diccionario Completo de Datos Guardados:", allData);

// --------------------------------------------------------------------------------
// [PASO 6]: Remoción Selectiva (removeData)
// --------------------------------------------------------------------------------
console.log("\n--- 🗑️ [PASO 6]: Eliminación Individual de Registros ---");

// Eliminamos el token de sesión
removeData("session_token");

// Verificamos que se haya eliminado correctamente
const deletedToken = getData<string>("session_token");
console.log("📋 Verificación de Token eliminado (debe ser null):", deletedToken);

// --------------------------------------------------------------------------------
// [PASO 7]: Purga Total del Almacenamiento (clearStorage)
// --------------------------------------------------------------------------------
console.log("\n--- 🧹 [PASO 7]: Purga Completa del Almacenamiento ---");

// Limpiamos absolutamente todo el localStorage del dominio
clearStorage();

// Verificamos que la memoria haya quedado vacía
const remainingKeys: string[] = getAllKeys();
console.log("📋 Cantidad de claves restantes tras purga total:", remainingKeys.length);
console.log("❓ ¿El almacenamiento está totalmente limpio?:", remainingKeys.length === 0 ? "✅ SÍ" : "❌ NO");