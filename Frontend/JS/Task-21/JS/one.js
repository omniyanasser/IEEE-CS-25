let data=(api)=>{
    return new Promise((resolve,reject)=>{
        let request= new XMLHttpRequest();
        request.onload=function(){
            if(this.readyState===4 && this.status===200){
                resolve(JSON.parse(this.responseText))
            }
            else{
                reject(Error("Not found"))
            }
        }
        request.open("GET",api);
        request.send();
    })
}

data("../obj.json")
.then((result)=>{
    result.length=5;
    return result
}).then((result)=>{
    let div=document.createElement("div");
    for(let i=0; i<result.length;i++){
        
         let articleDiv = document.createElement("div");

         articleDiv.innerHTML= `
           <h3>${result[i].title}</h3>
           <p>${result[i].description}</p>
           
         `;
        div.appendChild(articleDiv);
        document.body.appendChild(div);

    }
     
}).catch((rej)=>{
    return(rej)
})


async function fetchData() {
    try{
        let apiData= await fetch("../obj.json")
        let data= await apiData.json()
        data.length=5;

        let div=document.createElement("div");
    for(let i=0; i<data.length;i++){
        
         let articleDiv = document.createElement("div");

         articleDiv.innerHTML= `
           <h3>${data[i].title}</h3>
           <p>${data[i].description}</p>
           
         `;
        div.appendChild(articleDiv);
        document.body.appendChild(div);

    }

    }catch(error){
        console.log("not found")
    }
    
}

fetchData()