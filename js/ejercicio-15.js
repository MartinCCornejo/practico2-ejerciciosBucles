// EJERCICIO 15 
// 15- Realiza un script que cuente el número de vocales que tiene un texto

let frase = prompt("Escriba una palabra o frase y nombraremos el total de vocales que contenga");
let vocales = 0;

if (frase === null) {
    alert('Cancelaste el programa'); 
} 
else {
    for (let i = 0; i < frase.length; i++) {
        let caracteres = frase.charAt(i).toLowerCase();
    
        if (caracteres == 'a' || caracteres == 'e' || caracteres == 'i' || caracteres == 'o' || caracteres == 'u') {
            vocales++;
        }
    }
    
    document.write(`<p>Texto: ${frase} <br>Número total de vocales: ${vocales}</p>`);
}

