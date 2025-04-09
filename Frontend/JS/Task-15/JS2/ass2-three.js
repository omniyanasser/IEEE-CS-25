let div = document.querySelector("div");

function count() {
    div.innerHTML -=1;
    if( div.innerHTML ==='5'){
        window.open("https://elzero.org/", "_blank", "width=400,height=400");
        
    }
    else if(div.innerHTML ==='0'){
        clearInterval(counter);
    }
}
let counter=setInterval(count, 1000);