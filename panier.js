function displayCart(){
    cartItems = localStorage.getItem('productInCart');
    
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

}

    
   function onloadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');
if(productNumbers){
  document.querySelector('.cart span').textContent = productNumbers ; 
}

}
 
onloadCartNumbers();
  
displayCart();