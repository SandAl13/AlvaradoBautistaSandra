function problema3(palabra) {
    let problema3 = new Set();
    for (let char of palabra) {
        if (char >= 'A' && char <= 'Z') {
            // Agregar cada carácter al conjunto de caracteres únicos
            caracteresUnicos.add(char);
        }
    }
    // Retornar el tamaño del conjunto (número de caracteres únicos)
    return caracteresUnicos.size;
}

// Función para encontrar la palabra con más caracteres únicos
function palabraConMasCaracteresUnicos(cadena) {
    // Dividir la cadena en palabras usando la coma como separador
    let palabras = cadena.split(',');

    // Inicializar variables para almacenar la palabra con más caracteres únicos y su conteo
    let palabraMaxima = '';
    let maxCaracteresUnicos = 0;

    for (let palabra of palabras) {
        let numCaracteresUnicos = contarCaracteresUnicos(palabra);
        if (numCaracteresUnicos > maxCaracteresUnicos) {
            maxCaracteresUnicos = numCaracteresUnicos;
            palabraMaxima = palabra;
        }
    }

    return palabraMaxima;
    document.querySelector('#p3-output').textContent = 
    'Producto Escalar Minimo es de : ' +inputPalabras;
}
