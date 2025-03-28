console.log("Task 2 Assignment 6 ");

document.addEventListener("DOMContentLoaded", function () {
  let myForm = document.querySelector("form");

  myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let num = document.querySelector("[type='number']").value;
    let textEl = document.querySelector("[type='text']").value;
    let selEl = document.querySelector("select").value;

    let allContent = document.querySelector(".results");
    allContent.innerHTML = "";

    for (let i = 1; i <= num; i++) {
      let newEl = document.createElement(selEl);

      newEl.setAttribute("class", "box");
      newEl.setAttribute("title", "Element");
      newEl.setAttribute("id", `id-${i}`);

      newEl.textContent = textEl;
      newEl.style.border = "1px solid black";
      newEl.style.backgroundColor = "red";
      newEl.style.margin = "5px";
      newEl.style.display = "inlineBlock";
      newEl.style.padding = "10px";

      allContent.appendChild(newEl);
    }
  });
});
