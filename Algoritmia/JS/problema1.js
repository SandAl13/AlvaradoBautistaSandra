function invertirPalabras(cadena) {

    let palabras = cadena.split(' ');
    let palabrasInvertidas = palabras.reverse();
    let cadenaInvertida = palabrasInvertidas.join(' ');
    return cadenaInvertida;


}

let textoOriginal = "Esta es una lista de palabras separadas por espacios";
let textoInvertido = invertirPalabras(textoOriginal);


console.log("Texto original: " + textoOriginal);
console.log("Texto invertido: " + textoInvertido);

document.querySelector('#p1-output').textContent = 
'Producto Escalar Minimo es de : ' + textoOriginal;