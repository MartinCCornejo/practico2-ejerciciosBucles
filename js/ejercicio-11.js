// EJERCICIO 11
// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp


let nombre1 = prompt('Escriba el nombre de la primera persona');
let edad1 = parseInt(prompt(`Escriba la edad de ${nombre1}`));

let nombre2 = prompt('Escriba el nombre de la segunda persona');
let edad2 = parseInt(prompt(`Escriba la edad de ${nombre2}`));

let nombre3 = prompt('Escriba el nombre de la tercera persona');
let edad3 = parseInt(prompt(`Escriba la edad de ${nombre3}`));

let edadMayor = Math.max(edad1,edad2,edad3);
let nombreMayor = "";


if (edad1 > edad2 && edad1 > edad3) {
    nombreMayor+= nombre1;
} else if(edad2 > edad1 && edad2 > edad3) {
    nombreMayor+= nombre2;
} else if (edad3 > edad1 && edad3 > edad2) {
    nombreMayor+= nombre3;
} else{
    alert('Por favor indique una edad válida');
}


if (nombreMayor === null || nombreMayor.length === 0 || isNaN(edadMayor)) {
    alert('Datos incorrectos. Por favor, verifique los nombres o la edad de las personas');
} else{
    alert(`La persona más grande es ${nombreMayor} con ${edadMayor} años.`);
}
