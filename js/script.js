var allProduct=document.querySelectorAll(" #addtocard , #productNum")
// var card=document.querySelector(" #addtocard")
var content=document.querySelector(" #productName")
var btnShowPrice=document.querySelector("#showPrice")
var totalPrice=document.querySelector(" #Price1")
var totalProduct=document.querySelector("#productNum")
var x=0
allProduct.forEach(function(item){
  
    item.onclick=function(){
       
        content.innerHTML += totalProduct.textContent+" , "

        if( content.innerHTML !=""){
        btnShowPrice.style.display="block";
        btnShowPrice.style.backgroundcolor="white";
        btnShowPrice.style.color="black";
    }
    x += parseInt(totalProduct.getAttribute("price"))
    btnShowPrice.onclick=function(){
        totalPrice.innerHTML=x

    }
    } 
   
}
)

// btnShowPrice.onclick=function(){console.log(x)}