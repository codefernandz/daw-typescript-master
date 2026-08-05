import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa de Encadenamiento de Promesas (Promise Chaining)
// ================================================================================
// Demostración de flujos asíncronos secuenciales, manejo de estados no deterministas
// (éxito/fallo aleatorio) y propagación centralizada de errores con .catch().
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Encadenamiento Secuencial y Manejo de Errores con Promesas");

// ================================================================================
// 📋 1. Función Generadora de Promesa Asíncrona (Producer Function)
// ================================================================================
// Simula la adición de un producto a un carrito de compras con un delay de 1s
// y una probabilidad de éxito/error del 50%.
// ⚠️ Regla Fundamental: Retornar 'resolve(list)' pasa la referencia actualizada
// del arreglo al siguiente eslabón del encadenamiento (.then).
// ================================================================================

// [1] Definición de la función con retorno tipado explícito: Promise<string[]>
const addItemToCart = (item: string, list: string[]): Promise<string[]> => {
  return new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      // Simulación de tasa de éxito o fallo aleatorio (50/50)
      const success: boolean = Math.random() > 0.5;

      if (success) {
        list.push(item);
        resolve(list);
      } else {
        reject(`Error: No se pudo agregar el artículo "${item}" al carrito.`);
      }
    }, 1000);
  });
};

// ================================================================================
// 🛒 2. Consumo Individual con Manejo de Excepciones
// ================================================================================
// Ejecución aislada de la promesa evaluando el resultado directamente.
// ================================================================================

// [1] Arreglo base para simular el carrito de compras
const cart: string[] = [];

// [2] Intento de adición individual
addItemToCart("Laptop", cart)
  .then((updatedCart: string[]) => {
    console.log("✅ [CART - Single Item] Artículo agregado con éxito. Carrito actualizado:", updatedCart);
  })
  .catch((error: unknown) => {
    console.error("❌ [CART - Single Item Error] Fallo al agregar artículo:", error);
  });

// ================================================================================
// 🔗 3. Encadenamiento Secuencial de Promesas (Promise Chaining)
// ================================================================================
// Retornar una nueva Promesa dentro de un callback .then() permite ejecutar
// operaciones asíncronas en secuencia estricta.
// 📋 Nota: Un único bloque .catch() al final captura CUALQUIER error ocurrido en
// cualquiera de los eslabones anteriores.
// ================================================================================

// [1] Estado del carrito para la demostración en secuencia
const sequentialCart: string[] = [];

addItemToCart("Mouse", sequentialCart)
  .then((updatedCart: string[]): Promise<string[]> => {
    console.log("✅ [CHAINING - Step 1] 'Mouse' agregado con éxito. Estado actual:", updatedCart);

    // Retorno de la siguiente promesa para continuar la cadena
    return addItemToCart("Keyboard", updatedCart);
  })
  .then((finalCart: string[]) => {
    console.log("✅ [CHAINING - Step 2] Todos los artículos agregados. Carrito final:", finalCart);
  })
  .then(() => {
    console.log("📋 [CHAINING - Complete] Proceso de agregación secuencial finalizado correctamente.");
  })
  .catch((error: unknown) => {
    console.error("❌ [CHAINING - Error] Fallo en la secuencia de agregación:", error);
  });