// EJERCICIO 14 
// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo– entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
// tal”, deberá salir “h-o-l-a--q-u-e--t-a-l”.

let texto = prompt('Escriba un texto');
let textoModificado = "";

if (texto === null) {
    alert('Cancelaste el programa');

} else{
    for (let i = 0; i < texto.length; i++) {
        textoModificado+= texto[i] + "-";
    }
    
    document.write(`<p>Texto original: ${texto} <br>Texto modificado: ${textoModificado.slice(0,-1)}</p>`);
}
