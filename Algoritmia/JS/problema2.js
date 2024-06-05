 function problema2(){

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    v1 = v1.sort(function(a,b){
        return a - b
    });

    v2 = v2.sort(function(a,b){
        return a - b
    });

    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    document.querySelector('#p2-output').textContent = 
    'Producto Escalar Minimo es de : ' + p2_producto;
}

function problema1() {
    var frase = document.getElementById('p1-input').value; // Obtiene la frase del input
    var palabras = frase.split(' '); // Divide la frase en palabras
    var palabrasInvertidas = palabras.reverse(); // Invierte el orden de las palabras
    var fraseInvertida = palabrasInvertidas.join(' '); // Une las palabras invertidas en una nueva frase
    document.getElementById('p1-output').textContent = 'Palabras invertidas: ' + fraseInvertida;
}

function problema3() {
    var input = document.getElementById('p3-input').value; // Obtiene el valor del input
    var palabras = input.split(','); // Divide las palabras por coma
    var maxUnicos = 0;
    var palabraConMasUnicos = '';

    palabras.forEach(function(palabra) {
        var caracteresUnicos = new Set(palabra); // Utiliza un Set para obtener caracteres únicos
        if (caracteresUnicos.size > maxUnicos) {
            maxUnicos = caracteresUnicos.size;
            palabraConMasUnicos = palabra;
        }
    });

    document.getElementById('p3-output').textContent = 'Palabra con más caracteres únicos: ' + palabraConMasUnicos;
}

