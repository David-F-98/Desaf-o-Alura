const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const copiar = document.querySelector('.copiar');

function encriptar(textArea){
    let matrizAceptada = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for(let i=0;i<matrizAceptada.length;i++){
        if(textArea.includes(matrizAceptada[i][0])){
            textArea = textA.replaceAll(matrizAceptada[i][0],matrizAceptada[i][1]);
        }
    }
    return textArea;
}

function desencriptar(mensajeCod){
    let matrizAceptada = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for(let i=0;i<matrizAceptada.length;i++){
        if(mensajeCod.includes(matrizAceptada[i][1])){
            mensajeCod = mensajeCod.replaceAll(matrizAceptada[i][1],matrizAceptada[i][0]);
        }
    }
    return mensajeCod;
}

function btnEncriptar(){
    mensaje.value = encriptar(textArea.value);
}

/* function btnDesencriptar(){

}

function copiar(){
    
} */