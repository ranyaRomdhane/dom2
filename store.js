var offet = document.getElementsByClassName('delete');
console.log(offet);
for ( var i = 0; i < offet.length; i++){ 
var buttom = offet[i]
buttom.addEventListener('click', function(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
})

}


let minus=document.getElementsByClassName("minus-btn");
for(let i=0; i<minus.length; i++){
    let oneminus=minus[i];
    oneminus.addEventListener("click", function(){

        if( oneminus.nextElementSibling.value>1)
        oneminus.nextElementSibling.value--
        totalprice()
    })
  
}

let plus=document.getElementsByClassName("plus-btn");
for(let i=0; i<plus.length; i++){
    let oneplus=plus[i];
    oneplus.addEventListener("click", function(){
        oneplus.previousElementSibling.value++;
        totalprice()
})

}

//like button
let likes=document.getElementsByClassName("like");
for(let i=0; i<likes.length; i++){
    let like=likes[i];
    like.addEventListener("click", function(){
        if(  like.firstChild.style.color=="black"){
            like.firstChild.style.color="red";
        }else{
like.firstChild.style.color="black";
        }

    })
}
// totalvar
  
function totalprice (){
    var itemscontainer= document.getElementsByClassName("items")
    var itemrows= document.getElementsByClassName("Item")
    var total = 0 ;
for (i= 0; i < itemrows.length; i++)
{
var rows=itemrows[i]
var quantity = document.getElementsByClassName("Quant")[i].value
var prix = parseFloat(document.getElementsByClassName("price")[i].innerHTML)
total+=prix*quantit
}
document.getElementById("finalPrice").innerText = total

}


