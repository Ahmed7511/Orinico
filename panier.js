 
 function displayCart(){
  let cartItems = localStorage.getItem("productInCart") || [];
  cartItems = JSON.parse(cartItems);
  let productsPanier = document.querySelector('.products-panier');

  if(cartItems && productsPanier){
    productsPanier.innerHTML ='' ;
    Object.values(cartItems).forEach(cartItem =>
    productsPanier.innerHTML += `
                <div class ="panier" >
                   <h5 class="name-product">${cartItem.name} </h5>  
                    <h5 class="price-product"> ${cartItem.price/100},00 €  </h5>
                    <h5 class="quantity-product"><i id="accre" class="far fa-plus-square"></i> ${cartItem.quantity} 
                     <i id="dec" class="fas fa-minus-circle"></i></h5>  
                    <h5 class ="total-product" >${cartItem.price/100 * cartItem.quantity},00 € </h5>
                    <button class="remove" id="${cartItem.id}" ><i class="far fa-trash-alt"></i></button>
                </div>   
                `
                    );

                    let cartCost = localStorage.getItem("totalCost");

       productsPanier.innerHTML += `
         <div class = "totalContainer" >
          <div class = "totalTitle">total des produits</div>
          <h4 class = "totalProduct">
          ${cartCost},00 € </h4>
         </div>

       `
     

  }
 }

    
   function onloadCartNumbers(){
  let productNumbers = localStorage.getItem('totalCart');
if(productNumbers){
  document.querySelector('.cart span').textContent = productNumbers ; 
}

}
 
onloadCartNumbers();
  
displayCart();


accre = document.getElementById('accre');
dec = document.getElementById('dec');
console.log(accre)

for( var i=0; i< accre.length; i++){
var accrBtn = accre[i]
accrBtn.addEventListener('click', ()=>{
  console.log('click')
})

}
removeBtn = document.getElementsByClassName('remove');
for( var i=0; i<removeBtn.length; i++){
var button = removeBtn[i]
button.addEventListener('click', function(event){
//console.log(event.target)
  var buttonClicked = event.target
  buttonClicked.parentElement.remove()
});
}