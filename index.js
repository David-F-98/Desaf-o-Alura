function btnEncriptar(){
    const textArea = document.querySelector('.textArea');
    const mensaje = document.querySelector('.mensaje');
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
    const textArea = document.querySelector('.textArea');
    const mensaje = document.querySelector('.mensaje');
    const subComponent = document.querySelector('.sub-contenedor2'); 
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = ""; 

    for (let indiceHijosSubComponent2 = 0; indiceHijosSubComponent2 < subComponent.children.length; indiceHijosSubComponent2++) {  
        let element = subComponent.children[indiceHijosSubComponent2]; 
        if(element.className != "mensaje"){  
            element.hidden = true;
        }
    }
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
    const mensaje = document.querySelector('.mensaje');

    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            swal({  
                text: "Texto copiado!",
                icon: "success",
                buttons: false,
                timer: 1000,
            })
        })
}