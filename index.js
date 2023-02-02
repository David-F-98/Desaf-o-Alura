const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const copiar = document.querySelector('.copiar');

function encriptar(textAreaN){
    let matrizAceptada = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for(i=0;i<matrizAceptada.length;i++){
        if(textAreaN.includes(matrizAceptada[i][0])){
            textAreaN = textAreaN.replaceAll(matrizAceptada[i][0],matrizAceptada[i][1]);
        }
    }
    return textAreaN;
}


function desencriptar(mensajeCod){
    let matrizAceptada = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for(i=0;i<matrizAceptada.length;i++){
        if(mensajeCod.includes(matrizAceptada[i][1])){
            mensajeCod = mensajeCod.replaceAll(matrizAceptada[i][1],matrizAceptada[i][0]);
        }
    }
    return mensajeCod;
}

function btnEncriptar(){
    mensaje.value = encriptar(textArea);
}

function btnDesencriptar(){

}

function copiar(){
    
}