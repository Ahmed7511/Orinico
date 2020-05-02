 
 function displayCart(){
  let cartItems = localStorage.getItem("productInCart") || [];
  cartItems = JSON.parse(cartItems);
  let productsPanier = document.querySelector('.products-panier');

  if(cartItems && productsPanier){
    productsPanier.innerHTML ='' ;
    Object.values(cartItems).map(cartItem =>
    productsPanier.innerHTML += `
                     
                   <div class="name-product">${cartItem.name} </div>  
                    <div class="price-product"> ${cartItem.price/100}€  </div>
                    <div class="quantity-product"><i class="far fa-plus-square"></i> ${cartItem.quantity}  <i class="fas fa-minus-circle"></i></div>  
                    <div class ="total-product" >${cartItem.price/100 * cartItem.quantity} </div>
                  
                    `

    );
  }
 }
 displayCart();
 
 
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
  
//displayCart();