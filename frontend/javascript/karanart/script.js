
var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
var addbtn=document.getElementById("add-btn")
var cancelbtn=document.getElementById("cancel-book")
addbtn.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"

})

cancelbtn.addEventListener("click",function(){
    event.preventDefault()
      overlay.style.display="none"
    popup.style.display="none"
})

var addbook=document.getElementById("add-book")
var  container=document.querySelector(".container")
var btitle=document.getElementById("book-title")
var bauthor=document.getElementById("book-author")
var bdesc=document.getElementById("book-info")

addbook.addEventListener("click",function(){
    event.preventDefault()
    var div = document.createElement("div")

    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${btitle.value}</h2>`+`<h5>${btitle.value}</h5>`+`<p>${bdesc.value}</p>`+`<button onclick='deletebook(event)'>delete</button>`
     container.append(div)
       overlay.style.display="none"
    popup.style.display="none"
     btitle.value = ""
    bauthor.value = ""
    bdesc.value = ""
    
})

window.deletebook = function(event) {
    event.target.parentElement.remove();
};

