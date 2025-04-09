let parent =document.createElement("div");
let welcome = document.createElement("h1");
let par = document.createElement("p");
let btn=document.createElement("button");

setTimeout(pop,5000);

function pop(){
    welcome.textContent="welcome";
    par.textContent="welcome to elzero web school";
    btn.textContent="X";

    parent.style.backgroundColor = "#eee";
    parent.style.border = "1px solid #ccc";
    parent.style.padding = "20px";
    parent.style.position="relative";
    parent.style.align="center";

    btn.style.position = "absolute";
    btn.style.top = "10px";
    btn.style.right = "10px";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.backgroundColor = "red";
    btn.style.borderRadius = "50%";

    parent.append(welcome,par,btn);
    document.body.append(parent);

    btn.addEventListener("click",function(){
        parent.remove();
    });
}