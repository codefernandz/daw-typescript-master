// ================================================================================
// ⚙️ Inicialización del Módulo de Utilidades
// ================================================================================
// Definición y exportación de funciones auxiliares globales para el formateo de
// salida en la terminal de ejecución, estandarizando la interfaz visual durante
// la depuración y presentación de pruebas en consola.
// ================================================================================

// ================================================================================
// 📋 Utilidad: Generador de Separadores Visuales
// ================================================================================
// Genera líneas divisorias estandarizadas de longitud fija en la terminal de comandos
// e imprime el título en mayúsculas precedido de un identificador visual.
//
// 📋 Referencia técnica:
//   Evita el ensombrecimiento de variables (variable shadowing) utilizando
//   el nombre de parámetro explícito 'symbol'.
// ================================================================================

/**
 * Imprime un separador visual en la consola con un título opcional.
 * @param title Título a desplegar en el centro del separador.
 * @param symbol Carácter utilizado para construir las líneas divisorias.
 * @param lineLength Longitud total en caracteres de la línea.
 */
export const separator = (title: string = "", symbol: string = "=", lineLength: number = 72): void => {
  // [1] Generación inmutable de la línea de separación basada en la longitud configurada
  const dividerLine: string = symbol.repeat(lineLength);

  // [2] Impresión del salto de línea inicial y la primera divisoria
  console.log(`\n${dividerLine}`);

  // [3] Verificación del título e impresión formateada en mayúsculas
  if (title) {
    console.log(`💻 ${title.toUpperCase()}`);
    console.log(dividerLine);
  }
};