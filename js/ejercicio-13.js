// EJERCICIO 13 
// 13- Realiza un script que pida un texto y lo muestre en mayúsculas. 

let textoOriginal = prompt('Escriba un texto y lo mostramos en mayusculas');

if (textoOriginal === null) {
    alert('Cancelaste el programa');
} else{
    let textoEnMayusculas = textoOriginal.toUpperCase();
    document.write(`<p>Texto original: ${textoOriginal} <br>Texto en mayusculas: ${textoEnMayusculas}</p>`);
}
