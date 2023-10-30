// EJERCICIO 17 
// 17- Realiza un script que muestre la posición de la primera vocal de un texto
// introducido por teclado.

// Ejemplo:

// Input: Hola mundo
// Output: la vocal ‘o’ está en la posición 1


let texto = prompt('Escriba un texto y mostraremos la posición de la primera vocal');
let vocales = '';

if (texto !== null) {
    for (let i = 0; i < texto.length; i++) {
        let caracteres = texto.charAt(i);
        caracteres = caracteres.toLowerCase();

        if (caracteres == 'a' || caracteres == 'e' || caracteres == 'i' || caracteres == 'o' || caracteres == 'u') {
            vocales+= caracteres;
            document.write(`<p>Texto: ${texto} <br>La vocal '${vocales[0]}' está en la posición: ${i}</p>`);
            break;
        }
    }
} else{
    alert('Cancelaste el programa');
}

