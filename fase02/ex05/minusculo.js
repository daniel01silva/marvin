function minusculo(palavra) {
    
    var inicio = palavra.substr(0,1).toLowerCase();
    var final = palavra.substr(1, palavra.length);
    
    return inicio + final
}