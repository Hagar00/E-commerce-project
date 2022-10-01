
function diplayCart(){
  //get data from the local storage
  let cartItems=localStorage.getItem("productsInCart");
  let subTotalCost=localStorage.getItem('totalcost');
  let cartcount =localStorage.getItem('cartNumbers');
  //convert json to object
  cartItems=JSON.parse(cartItems);
  //convert sring to number
  subTotalCost =parseInt(subTotalCost);
  cartcount=parseInt(cartcount);
  //get html elements
  let productContainer = document.querySelector("#cart-items");
  let subtotalContainer =document.getElementById("product_subtotal_amt");
  let counterhead=document.getElementById("cartCounterNo");
  let totalAmount =document.getElementById('total_amount');

  if(cartItems && productContainer){
    $("#emptycart").hide();
   Object.values(cartItems).forEach(item=>{
 productContainer.innerHTML+=
      `
      <div  class="card p-4" >
       <div class="row">
                  <div class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img ">
                    <!-- the image tag will be replaced with the image of the orderd item -->
                    <img src="${item.imgSrc}" class="img-fluid" alt="cart img">
                  </div>

                  <!-- cart product details -->
                  <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                    <div class="row">
                      <!-- product name -->
                      <div class="col-6 card-title">
                        <!-- will get h1 from the product items -->
                        <h1 class="mb-4 product_name">${item.fname}</h1>
                        <!-- will get the paragraph from items data -->
                        <p class="mb-2">${item.description} </p>
                      </div>
                      <!-- quantity inc dec -->
                      <div  class="col-6">
                        <ul class="pagination justify-content-end set_quantity">
                          
                          <li > <span class=item_no>${item.count}</span>
                           </li>
                          
                        </ul>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-8 d-flex justify-content-between remove_wish">
                      <button  id="remove" onclick="deletefun(${item.id},${item.price})"
                      style="background-color: #ff5a00; color:white;border-radius:5px;border:none"><i class="fas fa-trash-alt" ></i> Remove Items</button>
                      </div>
                      <div class="col-4 d-flex justify-content-end price_money">
                        <!-- inside he span we will get the item price -->
                        <h3>EGP<span id="itemPrice">${item.price} </span></h3>
                      </div>
                    </div>
                </div>
              </div>
              <i class="fa-solid fa-trash fa-2x cart_remove" style="color: red; text-align: end"></i>
            </div> `
    });

    subtotalContainer.innerHTML = subTotalCost ;
    counterhead.innerHTML=cartcount;
    totalAmount.innerHTML = subTotalCost + 20 ;
    
  }else{
    $("#hideContainer").hide();
    $("#cart-itemNo").hide();
    let emptycart=document.getElementById("emptycart");
    emptycart.innerHTML =` <div class="row custom_empty">
   
   <div class="col-md-12" >
   
       <div class="card">
     <div class="card-header">
     <h5>Cart</h5>
     </div>
     <div class="card-body cart">
         <div class="col-sm-12 empty-cart-cls text-center">
           <img src="./assest/images/no-cart.svg" width="130" height="130" class="img-fluid mb-4 mr-3">
           <h3><strong>Your Cart is Empty</strong></h3>
           <h4>Add something to make me happy :)</h4>
           <a href="./All_resturants.html" class="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</a>
           
         
         </div>
     </div>
 </div>
     
   
   </div>
  
  </div>`
  }



} 
diplayCart();

function deletefun(id,price){
  
  let cartItems=localStorage.getItem("productsInCart");
  cartItems=JSON.parse(cartItems);
  
  const item =  Object.values(cartItems).find((product)=>product.id===id);
  
  
   let cartItem =localStorage.getItem("cartNumbers")
   let item_no =document.querySelector(".item_no");
   let counterhead=document.getElementById("cartCounterNo");
   cartItem=parseInt(cartItem);
   let subTotalCost=localStorage.getItem('totalcost');
   subTotalCost=parseInt(subTotalCost);
   let subtotalContainer =document.getElementById("product_subtotal_amt");
   let updatecost;
   let delivery =document.getElementById("delivery");
   let totalAmount =document.getElementById('total_amount');
   let productContainer = document.querySelector("#cart-items");
   if(cartItem>0 && item.count>0 ){
   
   localStorage.setItem('cartNumbers',cartItem - 1);
   document.querySelector(".cart-counter").textContent= cartItem -1 ;
   counterhead.textContent=cartItem -1 ;
   cartItems[item.fname].count= item.count-1;
  
   localStorage.setItem("productsInCart",JSON.stringify(cartItems));
     item_no.textContent=item.count;
     localStorage.setItem("totalcost",subTotalCost - price);
     console.log(price);
     console.log(cartItems.price);
     console.log("==================================");
     updatecost =subTotalCost -price;
     subtotalContainer.innerHTML=updatecost;
   }
   else if(cartItem==0 && item.count==0){
       document.getElementById("remove").addEventListener("click",(e)=>{
        e.preventDefault();
       });
       delivery.innerHTML=0;
       totalAmount.innerHTML = subTotalCost + 0 ;
       do{$("#cart-items").hide()}
       while(item.count==0)
       

   }

   

}