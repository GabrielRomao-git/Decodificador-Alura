const texto = document.getElementById("texto");
const mensagem = document.getElementById("mensagem");


function btnCriptografa() {
    const textocriptografado = encriptar(texto.value);
    mensagem.value = textocriptografado;
    texto.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    mensagem.style.backgroundPosition = -1000 + "px";

    return stringEncriptada;
}

function btnDescriptografa() {
    const textoDesencriptado = desencriptar(texto.value);
    mensagem.value = textoDesencriptado;
    texto.value = "";
}


function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    mensagem.style.backgroundPosition = -1000 + "px";

    return stringDesencriptada;
}

function copiar() {
    mensagem.select();
    document.execCommand ("copy");
    mensagem.value = "";
    mensagem.style.backgroundPosition = "center";
}


