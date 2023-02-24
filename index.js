const textArea = document.querySelector('.text-area');
const textArea2 = document.querySelector('.text-area2');
const copiar = document.querySelector('.btn-copiar');
const encriptar = document.querySelector('.btn-encriptar');
const desencriptar = document.querySelector('.btn-desencriptar');

function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    textArea2.textContent = textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    textArea2.textContent = textoDesencriptado;
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
function modificarElemento() {
    ocultar.style.display = "none";
    mostrar.style.display = "flex";
    texto.value = "";
}


/* botones.forEach((btn) => {
    btn.addEventListener("click", e => {
        let letrasMinusculas = /^(\s*[a-z]\s*)+$/;
        if (e.target.id == "copiar") {
            copiar();
        } else if (letrasMinusculas.exec(texto.value)) {
            if (e.target.id == "encriptar") {
                encriptarTexto(texto.value);
                modificarElemento();
            } else if (e.target.id == "desencriptar") {
                desencriptarTexto(texto.value);
                modificarElemento();
            }
        } else {
            swal({
                title: "Revisar texto!",
                text: "Solo letras minúsculas y sin acentos ni caracteres especiales!",
                icon: "warning",
                button: "Entiendo",
            });
        }
    })
}); */