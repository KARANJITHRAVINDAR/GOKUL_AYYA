const text=document.getElementById("text")
const cont=document.querySelector(".body-container")
const btn=document.getElementById("btn")
const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D','E','F'];
const ass=['cse','ece','cys','mat','phy']

btn.addEventListener("mouseover",function()
{
   let bg="#"
   for(let i=0;i<6;i++)
   {
   bg+= colorchange()
   }
   console.log(bg)
   text.innerHTML=bg
 cont.style.backgroundColor=bg
})

function colorchange(){
    let hello=color[Math.floor(Math.random()*16)]
     console.log(hello)
    return hello
}

let slt=document.getElementById("slt")
btn.addEventListener("click",function () {
    let opt=document.createElement("option")
     let hello=ass[Math.floor(Math.random()*5)]
    opt.innerHTML=hello
    slt.append(opt)
})