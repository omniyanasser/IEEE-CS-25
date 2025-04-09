let addEl =document.querySelector(".classes-to-add");
let removeEl =document.querySelector(".classes-to-remove");
let curr =document.querySelector(".current");
let newEl = document.querySelector(".classes-list div");

function update(){
    newEl.innerHTML = "";
    let classes = Array.from(curr.classList).sort();
    if (classes.length === 0) {
        newEl.textContent = "No Classes To Show";
    }
    else {
        classes.forEach(clsContent => {let span= document.createElement("span");
          span.textContent = clsContent;
          newEl.appendChild(span); 
        });
      }
}


    addEl.addEventListener("blur",function(){
            let value = addEl.value.trim().toLowerCase();
            if(value!==""){
                let listVal = value.split(" ");
                listVal.forEach(cls => {
                    if (cls !== "") {
                      curr.classList.add(cls); 
                    }
                  });

                  update();
                  addEl.value = "";
            }

    }  

);



removeEl.addEventListener("blur",function(){
    let value = removeEl.value.trim().toLowerCase();
    if(value!==""){
        let removeVal = value.split(" ");
        removeVal.forEach(cls => {
            if (cls !== "") {
              curr.classList.remove(cls); 
            }
          });

          update();
          removeEl.value = "";
    }

}  

);

update();
