function maiusculo(palavra) {
    
    var inicio = palavra.substr(0,3).toUpperCase();
    var final = palavra.substr(3, palavra.length);
    
    return inicio + final
}