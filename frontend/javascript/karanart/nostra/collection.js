var products=document.getElementById("products")
var search=document.getElementById("search-collection")
var div=products.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var value=event.target.value.toUpperCase()
    for(i=0;i<div.length;i++)
    {
        if(div[i].textContent.toUpperCase().indexOf(value)<0)
        {
            div[i].style.display="none"       
        }
        else{
                div[i].style.display="block"       
        }
    }
})