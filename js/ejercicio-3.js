// EJERCICIO 3
// 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
// Nota: usar confirm() 

let cadenaConcatenada = "";

do{
    let cadenaDeTexto = prompt('Escriba una palabra o frase');

    if (cadenaDeTexto === null) {
        alert('Cancelaste el programa')
        break;
    } else if (cadenaDeTexto.length === 0) {
        alert('No agregaste una palabra o frase!');
        break;
    }  else {
        cadenaConcatenada+= cadenaDeTexto + "-";
    }

} while(confirm('Desea agregar más palabras o frases?'));


document.write(`Cadena de texto concatenada: ${cadenaConcatenada.slice(0,-1)}`);
