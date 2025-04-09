document.querySelector("p").remove();

ourEl = document.querySelector(".our-element");

newDiv = document.createElement("div");
newDiv.className = "start";
newDiv.title = "Start Element";
newDiv.setAttribute("data-value", "Start");
newDiv.textContent = "Start";

ourEl.before(newDiv);


endDiv = document.createElement("div");
endDiv.className = "end";
endDiv.title = "End Element";
endDiv.setAttribute("data-value", "End");
endDiv.textContent = "End";

ourEl.after(endDiv);