// EJERCICIO 16 
// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
//  si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt('Escriba una palabra o texto y lo mostraremos al revez');
let textoInvertido = '';

if (texto === null) {
    alert('Cancelaste el programa');

} else {
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido+= texto[i];
    }

    document.write(`<p>Texto original: ${texto} <br>Texto al revés: ${textoInvertido}</p>`);
}