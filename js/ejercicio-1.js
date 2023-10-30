// TRABAJO PRACTICO 1
// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje

let edad = parseInt(prompt('Escriba su edad'));

if (edad >= 18) {
    alert('Felicidades, usted es mayor de edad y puede conducir');
} else if (edad < 18) {
    alert('Lo sentimos, usted es menor de edad y no puede conducir');
} else {
    alert('Por favor, ingrese una edad válida');
}