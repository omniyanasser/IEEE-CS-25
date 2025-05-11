
let req= new XMLHttpRequest();
req.open("GET","articles.json");
req.send();
console.log(req)

//  req.onreadystatechange= function(){
//    if(req.readyState===4 && req.status===200){
//     console.log(req.responseText);
//    }
//    req.onload =function(){
//     console.log("Data Loaded")
//    }

// setTimeout(()=>{
// console.log("Data Loaded")
// },0);
    
// }


req.onreadystatechange= function(){
   if(req.readyState===4 && req.status===200){
    let mainData = JSON.parse(this.responseText);

    let div=document.createElement("div");
    div.id="data";

    for(let i=0; i<mainData.length;i++){
        mainData[i].category="All";

        let articleDiv = document.createElement("div");

         articleDiv.innerHTML= `
           <h2>Title ${mainData[i].title}</h2>
           <p>Article Number ${mainData[i].id} Body ${mainData[i].body}</p>
           <p>Author: ${mainData[i].author}</p>
          <p>Category: ${mainData[i].category}</p>
         `;
        div.appendChild(articleDiv);

    }

   
    document.body.appendChild(div);

    console.log(mainData)

     let updatedData= JSON.stringify(mainData);
      console.log(updatedData)

   }

}