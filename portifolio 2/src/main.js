var contJs = document.querySelector('.containerJs');
var contHtml = document.querySelector('.containerHTML');
var contCss = document.querySelector('.containerCSS')
var contReact = document.querySelector('.containerReact');


function theme(){
    body.style.backgroundColor = ""
}
function openJs(){
    contJs.style.display = "flex";
    contHtml.style.display = "none";
    contCss.style.display = "none";
    contReact.style.display = "none";
}
function openHtml(){
    contJs.style.display = "none";
    contHtml.style.display = "flex";
    contCss.style.display = "none";
    contReact.style.display = "none";
}
function openCss(){
    contJs.style.display = "none";
    contHtml.style.display = "none";
    contCss.style.display = "flex";
    contReact.style.display = "none";
}
function openReact(){
    contJs.style.display = "none";
    contHtml.style.display = "none";
    contCss.style.display = "none";
    contReact.style.display = "flex";
}
function non(){
    contJs.style.display = "none";
    contHtml.style.display = "none";
    contCss.style.display = "none";
    contReact.style.display = "none";
}
