var textInput = document.querySelector('#apresentacao__input__texto');
var outInput = document.querySelector('#apresentacao__output');

function criptografar(){
    var texto = textInput.value;
    var result1 = texto.replace(/e/g, "enter");
    var result2 = result1.replace(/i/g, "intra");
    var result3 = result2.replace(/c/g, "corta");
    var result4 = result3.replace(/g/g, "obey");
    var result5 = result4.replace(/s/g, "usn");
    document.getElementById('apresentacao__output').innerHTML = '<textarea readonly id="apresentacao__input__texto">' + result5 + 
    '</textarea>' + '<button class="botao__copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto = textInput.value;
    var result1 = texto.replace(/enter/g, "e");
    var result2 = result1.replace(/intra/g, "i");
    var result3 = result2.replace(/corta/g, "c");
    var result4 = result3.replace(/obey/g, "g");
    var result5 = result4.replace(/usn/g, "s");
  
    document.getElementById('apresentacao__output').innerHTML = '<textarea readonly id="apresentacao__input__texto">' + result5 + 
    '</textarea>' + '<button class="botao__copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop =  document.getElementById('apresentacao__input__texto');
    textoCop.select();
    document.execCommand('copy');
}