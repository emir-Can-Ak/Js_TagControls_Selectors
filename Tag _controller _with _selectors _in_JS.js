var btn = document.querySelector(".addTextArea");
var container = document.querySelector(".container");
var remove = document.querySelector(".RemoveTextArea");
var remove2 = document.querySelector(".RemoveTextArea2");
var TakeFirstToDown = document.querySelector(".TakeFirstToBottom");

btn.addEventListener("click", () =>{

    let createdTextbox = document.createElement("textarea");
    createdTextbox.id = "createdText";
    createdTextbox.className = "row";
    createdTextbox.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;    
    createdTextbox.style.backgroundColor = "lightgrey";
    container.appendChild(createdTextbox);
    
})


remove.addEventListener("click", () =>{
    let deleteTextbox = document.querySelector("#createdText");

    if(deleteTextbox){
        deleteTextbox.remove();
    }

})
remove2.addEventListener("click", () =>{
    let deleteTextbox = document.querySelectorAll("#createdText");

    if(deleteTextbox){
        deleteTextbox.forEach(deleteTextbox => deleteTextbox.remove());
    }

})

TakeFirstToDown.addEventListener("click", ()=>{

    let MoveFirstBox = document.querySelector("#createdText");
    if(MoveFirstBox){
    MoveFirstBox.remove();
    }
    container.appendChild(MoveFirstBox);
})
