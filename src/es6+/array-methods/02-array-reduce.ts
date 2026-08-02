import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización: Guía Completa del Método Array.prototype.reduce()
// ================================================================================
// Preparación del flujo visual en la terminal de ejecución y transformación de
// colecciones en un único valor acumulado (número, string u objeto complejo).
// ================================================================================

// [1] Separador visual en la terminal de ejecución
separator("Reducción y Agregación con Array.prototype.reduce()");

// ================================================================================
// 📋 1. Definición de Interfaces y Modelos
// ================================================================================
// Contratos de datos fuertemente tipados para los ejemplos de agrupación.
// ================================================================================

interface Person {
  name: string;
  age: number;
}

interface GroupedByAge {
  [key: number]: Person[];
}

// ================================================================================
// 🧮 2. Reducción Aritmética y Métricas Basicas
// ================================================================================
// Operaciones de acumulación numérica (suma, producto, máximo y conteo).
// ⚠️ Regla Fundamental: Siempre proporciona un valor inicial (Initial Value) para
// evitar errores en arreglos vacíos.
// ================================================================================

// [1] Declaración del arreglo numérico base
const numbers: number[] = [1, 2, 3, 4, 5];

// [2] Sumar todos los números del arreglo
const sum: number = numbers.reduce(
  (accumulator: number, currentValue: number): number => accumulator + currentValue,
  0
);

console.log("✅ [REDUCE - Sum] Colección numérica original:", numbers);
console.log("✅ [REDUCE - Sum] Suma total acumulada:", sum);

// [3] Calcular el producto de todos los números del arreglo
const product: number = numbers.reduce(
  (accumulator: number, currentValue: number): number => accumulator * currentValue,
  1
);

console.log("✅ [REDUCE - Product] Producto total acumulado:", product);

// [4] Encontrar el valor máximo en la colección
const max: number = numbers.reduce(
  (accumulator: number, currentValue: number): number => Math.max(accumulator, currentValue),
  Number.NEGATIVE_INFINITY
);

console.log(`✅ [REDUCE - Max] Valor máximo determinado: ${max}`);

// [5] Contar la cantidad de elementos (Simulación de .length)
const count: number = numbers.reduce(
  (accumulator: number): number => accumulator + 1,
  0
);

console.log(`✅ [REDUCE - Count] Total de elementos contabilizados: ${count}`);

// ================================================================================
// 🔤 3. Reducción de Cadenas de Texto (String Aggregation)
// ================================================================================
// Acumulación de textos para transformarlos en una única cadena formateada.
// ================================================================================

// [1] Concatenar nombres en un solo string delimitado por espacios
const names: string[] = ["Alice", "Bob", "Charlie"];
const concatenatedNames: string = names
  .reduce(
    (accumulator: string, currentValue: string): string => `${accumulator} ${currentValue}`,
    ""
  )
  .trim();

console.log("✅ [REDUCE - String] Lista de nombres original:", names);
console.log(`✅ [REDUCE - String] Cadena resultante concatenada: "${concatenatedNames}"`);

// ================================================================================
// 📦 4. Reducción Avanzada: Agrupación de Objetos (Object Grouping)
// ================================================================================
// Transformación de un arreglo de objetos a un objeto estructurado indexado por clave.
// 📋 Nota: Es una de las técnicas más potentes de reduce() para organizar datos de backend.
// ================================================================================

// [1] Instanciación de la colección de personas
const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];

// [2] Agrupar personas por su propiedad 'age'
const groupedByAge: GroupedByAge = people.reduce(
  (accumulator: GroupedByAge, currentValue: Person): GroupedByAge => {
    const age: number = currentValue.age;

    // Crear el arreglo receptor si la llave de edad aún no existe en el acumulador
    if (!accumulator[age]) {
      accumulator[age] = [];
    }

    accumulator[age].push(currentValue);
    return accumulator;
  },
  {}
);

console.log("✅ [REDUCE - GroupBy] Estructura agrupada por edad:", groupedByAge);