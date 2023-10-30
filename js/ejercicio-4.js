// EJERCICIO 4
// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numerosSumados = 0;

do {
    let numero = parseInt(prompt('Escriba un número'));

    if (isNaN(numero)) {
        while (isNaN(numero)) {
            alert('Por favor, ingrese un número correctamente');
            numero =  parseInt(prompt('Escriba un número nuevamente'));
        }
    }

    numerosSumados+= numero;

} while (confirm('Desea agregar más números?'));

document.write(`Suma total de los números: ${numerosSumados}`);