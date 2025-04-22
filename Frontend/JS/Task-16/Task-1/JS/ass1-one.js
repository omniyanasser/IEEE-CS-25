let font=document.querySelector("#fonts");
let color=document.querySelector("#colors");
let size=document.querySelector("#size");


font.onchange =function(){
    document.body.style.fontFamily= font.value;
    localStorage.setItem("fontFamily",font.value);
}

color.onchange =function(){
    document.body.style.color= color.value;
    localStorage.setItem("color",color.value);
   
}

size.onchange =function(){
    document.body.style.fontSize= size.value;
    localStorage.setItem("font-size",size.value);
}

if(localStorage.getItem("fontFamily")){
    document.body.style.fontFamily=localStorage.getItem("fontFamily");
    font.value=localStorage.getItem("fontFamily");
}

if(localStorage.getItem("color")){
    document.body.style.color=localStorage.getItem("color");
    color.value=localStorage.getItem("color");
}

if(localStorage.getItem("font-size")){
    document.body.style.fontSize=localStorage.getItem("font-size");
    size.value=localStorage.getItem("font-size");
}