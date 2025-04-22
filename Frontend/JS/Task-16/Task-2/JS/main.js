AOS.init();

let btnSubmit= document.querySelector("#submit");
let notesForm= document.querySelector("#noteForm") 
let notesContainer=document.querySelector(".new-note");

let arrNotes=[];

if(localStorage.getItem("note")){
  arrNotes=JSON.parse(localStorage.getItem("note"))
}

getNotes();



btnSubmit.onclick=function(){

  let title= document.querySelector("#title").value.trim();
  let desc= document.querySelector("#description").value.trim();

  if(title === ""){
      Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Please enter a title.',
          confirmButtonColor: '#3f3d56'
      });
      return;
  }
  
  if(desc===""){
      desc = "empty";
  }

  addTaskToArr(title, desc);
  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";

};

function addTaskToArr(t,d){
  const myNote ={
    id:Date.now(),
    myTitle:t,
    mydesc:d,
  };
  arrNotes.push(myNote);
  addNotesToPage(arrNotes);
  addNotesToLocalStorage(arrNotes);
}


function addNotesToPage(arrNotes){
  notesContainer.innerHTML="";

  arrNotes.forEach((myNote) =>{
    
    let newNote = document.createElement("div");
    newNote.className = "note";
    newNote.setAttribute("data-id", myNote.id);
  
      newNote.setAttribute("data-aos", "fade-up");
      newNote.setAttribute("data-aos-offset", "50");
  

    newNote.innerHTML = `
      <div class="note-header">
        <h2 class="note-title">${myNote.myTitle}</h2>

        <input type="checkbox" class="toggle-desc" id="toggle-${myNote.id}"/>
        <label for="toggle-${myNote.id}" class="toggle-icon"><i class="fa-solid fa-caret-down" style="color: #3f3d56;"></i></label>

        <button class="delete-btn">Delete</button>
      </div>
      <p class="note-desc">${myNote.mydesc}</p>
    `;

    notesContainer.appendChild(newNote);


    newNote.querySelector(".delete-btn").addEventListener("click",(e)=>{
      let noteId = newNote.getAttribute("data-id");
      
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          deleteFromLocalStorage(noteId);
          Swal.fire({
            title: "Deleted!",
            text: "Your note has been deleted.",
            icon: "success",
            confirmButtonColor: '#3f3d56'
          });
        }
      });

    });

    

    newNote.querySelector(".toggle-desc").addEventListener("change", function () {
      let desc = newNote.querySelector(".note-desc");
      let title = newNote.querySelector(".note-title");
      if (this.checked) {
        desc.style.display = "none";
        title.style.opacity = "0.6";
        title.style.backgroundColor = "#3f3d568a";
        title.style.paddingLeft = "5px";
       
      } else {
        desc.style.display = "block";
        title.style.opacity = "1";
        title.style.backgroundColor = "#f0f2f5";
       
      }});
    
  
});
}


function addNotesToLocalStorage(arrNotes){
  window.localStorage.setItem("note",JSON.stringify(arrNotes));
}

function getNotes(){
  let data=window.localStorage.getItem("note");
  if(data){
    arrNotes=JSON.parse(data);
    addNotesToPage(arrNotes);
  }
}

function deleteFromLocalStorage(noteId){
  arrNotes =arrNotes.filter(n => n.id !== Number(noteId));
  addNotesToLocalStorage(arrNotes);
  addNotesToPage(arrNotes); 
}



document.querySelector("#deleteAll").addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure?",
    text: "This will delete all notes permanently.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete all!"
  }).then((result) => {
    if (result.isConfirmed) {
      arrNotes = [];
      localStorage.removeItem("note");
      notesContainer.innerHTML = "";
      Swal.fire({
        title: "Deleted!",
        text: "All notes have been deleted.",
        icon: "success",
        confirmButtonColor: '#3f3d56'
      });
    }
  });
});

