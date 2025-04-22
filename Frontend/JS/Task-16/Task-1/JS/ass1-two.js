let name = document.querySelector("#name");
let age = document.querySelector("#age");
let phone = document.querySelector("#phone");

let color = document.querySelector("#colors");

name.onblur = function () {
  sessionStorage.setItem("Name", name.value);
};

age.onblur = function () {
  sessionStorage.setItem("Age", age.value);
};
phone.onblur = function () {
  sessionStorage.setItem("Phone", phone.value);
};

color.onchange = function () {
  sessionStorage.setItem("color", color.value);
};


if(sessionStorage.getItem("Name")){
    name.value=sessionStorage.getItem("Name");
}

if(sessionStorage.getItem("Age")){
    age.value=sessionStorage.getItem("Age");
}

if(sessionStorage.getItem("Phone")){
    phone.value=sessionStorage.getItem("Phone");
}

if(sessionStorage.getItem("Phone")){
    phone.value=sessionStorage.getItem("Phone");
}

if(sessionStorage.getItem("color")){
    color.value=sessionStorage.getItem("color");
}