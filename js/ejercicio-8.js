// EJERCICIO 8 
// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456


let numero = parseInt(prompt('Escriba un número entre 1 y 50 para crear la piramide'));

if (numero > 50 || numero < 1 || isNaN(numero)) {
    alert('Por favor, ingrese un número correctamente entre 1 y 50. \nSi desea intentar de nuevo recargue la página');

} else{
    for (let i = 1; i <= numero; i++) {
        let piramide = '';
        for (let contador = 1; contador <= i; contador++) {
            piramide+= contador;
        }
        document.write(`${piramide} <br>`)

    }
}
