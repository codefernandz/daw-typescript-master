// =====================================================
// ⚙️ Inicialización del Módulo de Utilidades
// =====================================================
// [1] Definición de funciones auxiliares para el formateo de salida en terminal
// [2] Estandarización de la interfaz visual para la ejecución de scripts de prueba
// [3] Exportación de métodos globales de depuración y presentación de datos
// =====================================================

// =====================================================
// 📋 Utilidad: Generador de Separadores Visuales
// =====================================================
// [1] Genera líneas divisorias estandarizadas de longitud fija en la consola de comandos
// [2] Imprime el título en mayúsculas precedido de un identificador de sistema
// [3] Nota técnica: Evita el sombreado de nombres (shadowing) renombrando el parámetro interno a 'symbol'
// =====================================================
export const separator = (title: string = "", symbol: string = "=", lineLength: number = 72): void => {
  // Generación inmutable de la línea de separación basada en la longitud configurada
  const dividerLine: string = symbol.repeat(lineLength);

  console.log(`\n${dividerLine}`);

  if (title) {
    console.log(`💻 ${title.toUpperCase()}`);
    console.log(dividerLine);
  }
};