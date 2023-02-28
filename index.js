const textArea = document.querySelector('.textArea');
const mensaje = document.querySelector('.mensaje');

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.display = "flex";
    textArea.value = "";    
}

function encriptar(stringEncriptada){
    let matrizcodigo = [["e","enter"],["i","imes"],["o","ober"],["u","ufat"],["a","ai"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i=0; i<matrizcodigo.length; i++){
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = none;
}

function desencriptar(stringDesencriptada){
    let matrizcodigo = [["e","enter"],["i","imes"],["o","ober"],["u","ufat"],["a","ai"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i=0; i<matrizcodigo.length; i++){
        if(stringDesencriptada.includes(matrizcodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar() {
    navigator.clipboard.writeText(textArea2.textContent)
        .then(() => swal({
            text: "Texto copiado!",
            icon: "success",
            buttons: false,
            timer: 1000,
        }))
        .catch(() => swal({
            text: "Error al copiar texto!",
            icon: "error",
            buttons: false,
            timer: 1000,
        }));
}