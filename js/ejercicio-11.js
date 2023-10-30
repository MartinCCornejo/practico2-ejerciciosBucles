// EJERCICIO 11
// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let nombre = '';
let edad = '';

for (let i = 1; i <= 3; i++) {
    let nuevoNombre = prompt('Ingresa un nombre');
    let nuevaEdad = prompt(`Ingrese la edad de ${nuevoNombre}`);

    edad+= nuevaEdad +',';
    nombre+= nuevoNombre +',';
}

edad = edad.slice(0,-1)
nombre = nombre.slice(0,-1)
let edades = edad.split(',');
let nombres = nombre.split(',');
let edadMayor = Math.max(edades[0],edades[1],edades[2]);

