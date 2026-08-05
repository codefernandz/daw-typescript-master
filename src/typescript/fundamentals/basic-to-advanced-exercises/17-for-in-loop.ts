import { separator } from "../../utils/methods";

// ================================================================================
// ⚙️ Inicialización del Ejercicio 17
// ================================================================================
// [1] Preparación del flujo visual en la terminal de ejecución
// [2] Mensaje inicial del sistema para verificar la compilación estática exitosa
// [3] Configuración de trazas iniciales para la evaluación de claves de objetos
// ================================================================================
separator("Ejercicio 17: Bucle For...In (Iteración de Propiedades)");

// Definición estricta de la estructura del objeto Alien
interface Alien {
  name: string;
  species: string;
  origin: string;
  weight: number;
}

// Inicialización del objeto con tipado explícito de interfaz
const targetedAlienEntity: Alien = {
  name: "Xenomorph",
  species: "Xenomorph XX121",
  origin: "Unknown",
  weight: 180,
};

// ================================================================================
// 🔄 Algoritmo: Iteración de Propiedades (for...in)
// ================================================================================
// [1] Recorre de manera dinámica las claves asociadas al objeto 'targetedAlienEntity'
// [2] Utiliza una aserción de tipo segura 'keyof Alien' para acceder dinámicamente a los valores indexados
// [3] Nota técnica: Se emplea la verificación nativa 'Object.prototype.hasOwnProperty' para ignorar elementos heredados del prototipo
// ================================================================================
for (const rawObjectProperty in targetedAlienEntity) {
  // Aseguramos que la clave pertenece al objeto de forma directa y no a su cadena de prototipos
  if (Object.prototype.hasOwnProperty.call(targetedAlienEntity, rawObjectProperty)) {
    // Cast seguro de la propiedad a la definición tipada del objeto de origen
    const typedPropertyKey = rawObjectProperty as keyof Alien;
    const propertyValue = targetedAlienEntity[typedPropertyKey];

    console.log(`✅ [OBJECT METADATA] La propiedad ${typedPropertyKey} tiene cómo valor: ${propertyValue}`);
  }
}