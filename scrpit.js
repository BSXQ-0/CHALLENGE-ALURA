const text = document.querySelector(".texto");
const mensaje = document.querySelector(".textoEncriptado");
const sidebar = document.querySelector(".sidebar");

function btnEncriptar(){
    const textoEn = encriptar(text.value)
    mensaje.value = textoEn
    text.value="";
    mensaje.style.backgroundImage = "none"
    sidebar.style.color= "white"
}

function btnDesencriptar(){
    const textoEn = desencriptar(text.value)
    mensaje.value = textoEn
    text.value="";
    mensaje.style.backgroundImage = "none"
}

function encriptar(textoEncriptar){
    let mCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    textoEncriptar = textoEncriptar.toLowerCase()

    for(let i = 0; i < mCodigo.length; i++){
        if (textoEncriptar.includes(mCodigo[i][0])) {
            textoEncriptar = textoEncriptar.replaceAll(mCodigo[i][0], mCodigo[i][1])

        }

    }
    return textoEncriptar
}

function desencriptar(textoDesencriptar){
    let mCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    textoDesencriptar = textoDesencriptar.toLowerCase()

    for(let i = 0; i < mCodigo.length; i++){
        if (textoDesencriptar.includes(mCodigo[i][1])) {
            textoDesencriptar = textoDesencriptar.replaceAll(mCodigo[i][1], mCodigo[i][0])

        }

    }
    return textoDesencriptar
}

function  copiarT(){
    var copiarText = document.querySelector(".textoEncriptado");
    copiarText.select();
    document.execCommand("copy");
}
