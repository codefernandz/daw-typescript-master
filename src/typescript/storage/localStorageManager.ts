import { separator } from "../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Gestor Completo de Persistencia con LocalStorage
// ================================================================================
// Módulo CRUD (Create, Read, Update, Delete) integral y fuertemente tipado.
// Permite guardar, consultar, actualizar y eliminar información en el navegador
// utilizando Genéricos (<T>), fusiones de objetos inmutaables y control de errores.
// ================================================================================

// [1] Separador visual en la terminal para indicar el inicio del módulo
separator("Persistencia en el Navegador - Gestor LocalStorage CRUD");

// ================================================================================
// 💾 1. Operaciones de Escritura y Modificación (Save & Update)
// ================================================================================
// EXPLICACIÓN DEL BLOQUE:
// Esta sección contiene las funciones responsables de serializar y almacenar datos.
// Se usa JSON.stringify() porque 'localStorage' solo puede guardar valores en texto (string).
// ================================================================================

/**
 * Guarda cualquier estructura de datos en el localStorage serializándola a JSON.
 *
 * EXPLICACIÓN DE FUNCIONAMIENTO:
 * 1. Recibe una clave 'key' (identificador) y un valor 'data' de tipo genérico <T>.
 * 2. Transforma el valor a texto JSON con JSON.stringify().
 * 3. Ejecuta localStorage.setItem() para persistir los datos.
 * 4. Captura cualquier excepción (por ejemplo, cuota de disco superada en el navegador).
 *
 * @template T Tipo del valor a almacenar (inferido automáticamente o explícito).
 * @param key Clave de acceso en el almacenamiento.
 * @param data Contenido a guardar.
 */
export const saveData = <T>(key: string, data: T): void => {
  try {
    // [1] Serialización: Conversión del objeto o tipo primitivo a una cadena en formato JSON
    const serializedData: string = JSON.stringify(data);

    // [2] Persistencia: Guardado del valor string en la memoria del navegador bajo la clave especificada
    localStorage.setItem(key, serializedData);

    // [3] Confirmación de éxito en consola
    console.log(`✅ [STORAGE - Save] Registro guardado correctamente bajo la clave: "${key}"`);
  } catch (error: unknown) {
    // [4] Manejo defensivo de errores (ej. memoria de almacenamiento llena o bloqueo de cookies/storage)
    if (error instanceof Error) {
      console.error(`❌ [STORAGE - Save Error] Fallo al guardar en la clave "${key}":`, error.message);
    } else {
      console.error(`❌ [STORAGE - Save Error] Error no identificado en "${key}":`, error);
    }
  }
};

/**
 * Actualiza un objeto existente realizando una fusión parcial (shallow merge) con los nuevos datos.
 *
 * EXPLICACIÓN DE FUNCIONAMIENTO:
 * 1. Lee el valor guardado actualmente con 'getData<T>(key)'.
 * 2. Comprueba que existan datos guardados y que sean un Objeto (excluyendo null y arrays).
 * 3. Mezcla el objeto antiguo con el nuevo objeto 'newData' mediante el operador Spread ({ ...old, ...new }).
 * 4. Vuelve a guardar el resultado mediante 'saveData<T>()'.
 *
 * @template T Tipo del objeto guardado (debe extender de un registro clave/valor).
 * @param key Clave del registro a actualizar.
 * @param newData Propiedades que se desean agregar o reemplazar en el objeto existente.
 */
export const updateData = <T extends Record<string, any>>(key: string, newData: Partial<T>): void => {
  // [1] Lectura: Recuperación del registro previo guardado en localStorage
  const existingData: T | null = getData<T>(key);

  // [2] Guardas de seguridad: Comprobación de que existan datos previos y sean un objeto fusionable
  if (existingData && typeof existingData === "object" && !Array.isArray(existingData)) {
    // [3] Fusión superficial: Copia las propiedades antiguas y sobrescribe/añade las contenidas en 'newData'
    const updatedData: T = { ...existingData, ...newData };

    // [4] Re-escritura: Guarda nuevamente la estructura combinada resultante
    saveData<T>(key, updatedData);
    console.log(`✅ [STORAGE - Update] Registro "${key}" actualizado exitosamente.`);
  } else {
    // [5] Advertencia si la clave no existía o no contenía un objeto válido para mezclar
    console.warn(`⚠️ [STORAGE - Update Warning] No se encontraron datos válidos o fusionables para la clave "${key}".`);
  }
};

// ================================================================================
// 📖 2. Operaciones de Lectura e Inspección (Read & Query)
// ================================================================================
// EXPLICACIÓN DEL BLOQUE:
// Esta sección agrupa funciones para consultar el almacenamiento.
// Se encarga de recuperar textos JSON almacenados y reconstruir sus tipos TypeScript.
// ================================================================================

/**
 * Recupera y deserializa datos del localStorage devolviendo su tipo original.
 *
 * EXPLICACIÓN DE FUNCIONAMIENTO:
 * 1. Obtiene la cadena de texto con 'localStorage.getItem(key)'.
 * 2. Si retorna 'null' (clave inexistente), devuelve 'null' inmediatamente.
 * 3. Reconstruye el objeto/valor original convirtiendo el JSON con JSON.parse().
 * 4. Lo retorna con el tipo estricto de TypeScript asignado (<T>).
 *
 * @template T Tipo esperado al reconstruir el valor.
 * @param key Clave del registro a leer.
 * @returns Los datos deserializados con tipo T, o null si la clave no existe o el parseo falla.
 */
export const getData = <T>(key: string): T | null => {
  try {
    // [1] Lectura en bruto: Obtiene la cadena guardada (string | null)
    const data: string | null = localStorage.getItem(key);

    // [2] Guarda de nulo: Si no existe un valor registrado para esa clave, aborta retornando null
    if (data === null) {
      return null;
    }

    // [3] Deserialización: Convierte el string JSON de vuelta al objeto/primitivo original tipado
    return JSON.parse(data) as T;
  } catch (error: unknown) {
    // [4] Captura de excepciones si la cadena guardada no era un JSON válido
    if (error instanceof Error) {
      console.error(`❌ [STORAGE - Read Error] Fallo al deserializar la clave "${key}":`, error.message);
    }
    return null;
  }
};

/**
 * Verifica si una clave existe guardada en el localStorage.
 *
 * EXPLICACIÓN DE FUNCIONAMIENTO:
 * Compara si la consulta 'localStorage.getItem(key)' es diferente de 'null'.
 *
 * @param key Clave a verificar.
 * @returns True si la clave existe, False en caso contrario.
 */
export const hasKey = (key: string): boolean => {
  // [1] Evaluación directa: Compara contra null para determinar existencia
  return localStorage.getItem(key) !== null;
};

/**
 * Obtiene un listado con todas las claves presentes en el localStorage del dominio.
 *
 * EXPLICACIÓN DE FUNCIONAMIENTO:
 * Utiliza 'Object.keys(localStorage)' para iterar sobre todas las propiedades del storage.
 *
 * @returns Arreglo de cadenas con los nombres de todas las claves almacenadas.
 */
export const getAllKeys = (): string[] => {
  // [1] Extracción de claves: Retorna un array conteniendo todos los nombres de keys activas
  return Object.keys(localStorage);
};

/**
 * Recupera una colección completa en formato Diccionario (Clave -> Valor) con todos los datos.
 *
 * EXPLICACIÓN DE FUNCIONAMIENTO:
 * 1. Obtiene todas las claves mediante 'getAllKeys()'.
 * 2. Recorre cada clave y recupera su valor deserializado usando 'getData()'.
 * 3. Une todos los registros en un objeto contenedor y lo retorna.
 *
 * @returns Objeto Record<string, any> con todas las entradas procesadas.
 */
export const getAllData = (): Record<string, any> => {
  // [1] Contenedor base para agrupar todos los pares clave-valor
  const allData: Record<string, any> = {};

  // [2] Obtención del listado de claves registradas
  const keys: string[] = getAllKeys();

  // [3] Bucle de reconstrucción: Lee y decodifica cada entrada del storage
  for (const key of keys) {
    allData[key] = getData<unknown>(key);
  }

  // [4] Retorno del mapa completo de almacenamiento
  return allData;
};

// ================================================================================
// 🗑️ 3. Operaciones de Limpieza y Remoción (Delete & Clear)
// ================================================================================
// EXPLICACIÓN DEL BLOQUE:
// Funciones dedicadas a la eliminación selectiva o purga completa de los datos almacenados.
// ================================================================================

/**
 * Elimina una entrada específica del localStorage por su clave.
 *
 * EXPLICACIÓN DE FUNCIONAMIENTO:
 * Llama a 'localStorage.removeItem(key)' dentro de un bloque try...catch para
 * eliminar de forma segura una clave sin riesgo de congelar la ejecución.
 *
 * @param key Clave del registro a eliminar.
 */
export const removeData = (key: string): void => {
  try {
    // [1] Remoción: Borra el registro individual identificado por la clave
    localStorage.removeItem(key);
    console.log(`✅ [STORAGE - Remove] Clave "${key}" eliminada correctamente.`);
  } catch (error: unknown) {
    // [2] Manejo defensivo en caso de fallos de la API del navegador
    if (error instanceof Error) {
      console.error(`❌ [STORAGE - Remove Error] Fallo al eliminar la clave "${key}":`, error.message);
    }
  }
};

/**
 * Elimina la totalidad de los datos guardados en el localStorage para el dominio actual.
 *
 * EXPLICACIÓN DE FUNCIONAMIENTO:
 * Ejecuta 'localStorage.clear()' para reiniciar completamente la memoria persistente de la app.
 */
export const clearStorage = (): void => {
  try {
    // [1] Purga masiva: Elimina absolutamente todas las claves guardadas en la sesión
    localStorage.clear();
    console.log("✅ [STORAGE - Clear] Se han borrado todos los datos del localStorage.");
  } catch (error: unknown) {
    // [2] Manejo defensivo ante errores inesperados
    if (error instanceof Error) {
      console.error("❌ [STORAGE - Clear Error] Fallo al limpiar el almacenamiento:", error.message);
    }
  }
};