 
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
                    <button class="remove" id="${cartItem.id}" >retirer</button>
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


 
 /*
    let cartItems = localStorage.getItem("productInCart") || [];
    cartItems = JSON.parse(cartItems);
    let product = document.querySelector('.products-panier');
    cartItems.forEach(function(cartItem)  {
   //console.log(cartItem.name)
    /* let ul = document.createElement('ul');
     ul.classList.add('list-groupe-item');
     document.querySelector('.products-panier').appendChild(ul); 
   ul.textContent =cartItem.name
                   + cartItem.price/100            
                    + cartItem.quantity
                    + cartItem.price/100 * cartItem.quantity
                  
                     
   if(cartItems[i] && product){
        var output=""
      output += '<div class="name-product">' + cartItem.name + '</div>'  +
                    '<div class="price-product">' + cartItem.price/100+'€' +' </div>' +
                    '<div class="quantity-product"><i class="far fa-plus-square"></i> '+ cartItem.quantity +' <i class="fas fa-minus-circle"></i></div>' + 
                    '<div class ="total-product" >'+ cartItem.price/100 * cartItem.quantity +'</div>'
                        

                 
     
             document.querySelector('.products-panier').innerHTML = output ;

            });

/*function displayCart(){
    cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);

    let product = document.querySelector('.products');

if(cartItems && product){
   var output=""
 output += '<div class="product">'+
           '<img src="' + cartItems.imageUrl+'" width= 70px >' +
           
            '<strong>Name :</strong>'  + cartItems.name +
              

               '</div>'  +
               '<div class="price">' +cartItems.price/100+'€' +' </div>' +
               '<div class="quantity"><i class="far fa-plus-square"></i> 1  <i class="fas fa-minus-circle"></i></div>' 
 
        
   
           
            }

        document.querySelector('.products').innerHTML = output ;

}*/

    
   function onloadCartNumbers(){
  let productNumbers = localStorage.getItem('totalCart');
if(productNumbers){
  document.querySelector('.cart span').textContent = productNumbers ; 
}

}
 
onloadCartNumbers();
  
displayCart();

var removeBtn = document.getElementsByClassName('remove');
var panier = document.getElementsByClassName('panier');
console.log(panier)

panier.onclick = function(e){
  console.log('clickkkk')
}
for( var i=0; i<removeBtn.length; i++){
var button = removeBtn[i]
button.addEventListener('click', function(event){
console.log(event.target)
  var buttonClicked = event.target
  console.log(buttonClicked.prentElement)
  buttonClicked.prentElement.remove()
 
});
}