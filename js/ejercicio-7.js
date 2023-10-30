// EJERCICIO 7
// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1


let numero = parseInt(prompt('Escriba un número entre 1 y 50 para crear la piramide'));

if (numero > 50 || numero < 1 || isNaN(numero)) {
    alert('Por favor, ingrese un número correctamente entre 1 y 50.\nSi desea intentar de nuevo recargue la página');

} else{
    for (numero; numero >= 1; numero--) {
        let piramide = '';
        
        for (let i = numero; i >= 1; i--) {
            piramide+= numero;
        }
        
        document.write(`${piramide} <br>`);
    }
}
