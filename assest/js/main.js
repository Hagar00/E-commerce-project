
// create add to cart 
function onloadCartNumber(){
    let productNumbers =localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector(".cart-counter").textContent= productNumbers ;
    }
   
}
function cartNumbers (productitem){
   
    let productNumbers =localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    if(productNumbers){
       
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector(".cart-counter").textContent= productNumbers +1 ;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector(".cart-counter").textContent= 1 ;
    }
 
    setItemsLocal(productitem);
};
 function setItemsLocal(productitem){
    const item =products.find((product)=>product.id===productitem);
    let cartItems =localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
   
    if(cartItems !=null){
        if(cartItems[item.fname]==undefined){
            cartItems={
                ...cartItems,
                [item.fname]: item
            }
        }
        cartItems[item.fname].count+=1;
    }
    else{
    item.count= 1;
     cartItems={
        [item.fname] :item
    }
    }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
 };

 function totalcost(productPrice){
    const itemprice =products.find((product)=>product.id===productPrice);
    // console.log("the product price is " , itemprice.price);
    let cartCost=localStorage.getItem('totalcost');
  

    if(cartCost !=null){
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalcost", cartCost + itemprice.price);
    }else{
        localStorage.setItem("totalcost",itemprice.price);
    }
  
 };
onloadCartNumber();

function ready (){
    // remove item from cart 
    var removeCartButton = document.getElementsByClassName("cart_remove");
    console.log(removeCartButton);
    for(var i=0; i < removeCartButton.length; i++){
        var buttonRemoveCart = removeCartButton[i];
        buttonRemoveCart.addEventListener("click",removeCartItem)

    }
};
// function to remove item from cart 
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    let cartCost=localStorage.getItem('totalcost');
    console.log("remove item and decrease total cost")
    localStorage.setItem("totalcost", cartCost - item.price);
    totalAmount = 0;



};
ready();

function confirmOrder(){
    var conf=confirm("are you sure");
    if(conf==false){
        console.log("conf is false");
    }
    else if(conf==true){
        console.log("conf is true");
        window.location.href = "/index.html";
    }

};





