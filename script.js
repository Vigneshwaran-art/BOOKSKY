// To show the popup
var plusBtn = document.getElementById("addbtn")
var overlay = document.getElementById("overlay")
var outer = document.getElementById("outer")

plusBtn.addEventListener("click", function (event){
    event.preventDefault();
    overlay.classList.toggle("show");
    outer.classList.toggle("show");    
    }
)
// To hide the popup
var cancelbtn =document.getElementById("cancel")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault();
    overlay.classList.remove("show");
    outer.classList.remove("show");
})

//Addition action of details
var addbtn=document.getElementById("add")

var Boxes = document.getElementById("Boxes")
var title = document.getElementById("bt")
var author = document.getElementById("ba")
var textarea = document.getElementById("textarea")

addbtn.addEventListener("click",function(event){
    event.preventDefault();
    var div = document.createElement("div")
    div.setAttribute("class","container")
    div.innerHTML = `
    <h1>${title.value}</h1>
    <h3>${author.value}</h3>
    <p>${textarea.value}</p>
    <button class="deletebtn" onclick="deletion(event)">Delete</button>`
    Boxes.append(div)
    
    overlay.classList.remove("show");
    outer.classList.remove("show");
})

//setting up the action of delete btn
var delbtn=document.querySelector(".deletebtn")
function deletion(event){
    event.target.parentElement.remove();
}
