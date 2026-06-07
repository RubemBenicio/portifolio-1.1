const fotos = ["/assets/Educaya1.png","/assets/Educaya2.png", "/assets/Educaya3.png"]
let i = 0;

function navegar(direcao){
    i = i+direcao;
    if(i >= fotos.length){
        i = 0;
    }
    if(i < 0){
        i = fotos.length - 1;
    }
    document.getElementById('moldura').src = fotos[i];
    console.log("foto atual:" + i);
}