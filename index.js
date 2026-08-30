// Script simple de ejemplo

console.log('Bienvenido a mi script de ejemplo');

// Variables
const nombre = 'Andrea';
const edad = 25;
const habilidades = ['JavaScript', 'DevOps', 'Node.js'];

// Función simple
function saludar(persona) {
  return `Hola, mi nombre es ${persona} y tengo ${edad} años.`;
}

// Ejecutar función
console.log(saludar(nombre));

// Mostrar habilidades
console.log('\nMis habilidades:');
habilidades.forEach((habilidad, index) => {
  console.log(`${index + 1}. ${habilidad}`);
});

// Operación simple
const suma = (a, b) => a + b;
console.log(`\nSuma de 5 + 3 = ${suma(5, 3)}`);
