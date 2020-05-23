 let cartItems = localStorage.getItem("productInCart") || [];
   cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem("totalCost");

  function displayCart(){
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
                </div>   

                `
                    );


       productsPanier.innerHTML += `
         <div class = "totalContainer" >
          <div class = "totalTitle">total des produits</div>
          <h4 class = "totalProduct">
          ${cartCost},00 € </h4>
          <button class="remove" ><i class="far fa-trash-alt"></i></button>

         </div>

       `
     

  }
 }

 function onloadCartNumbers(){
  let cartItemsQuantityNumber = localStorage.getItem('totalCart');
if(cartItemsQuantityNumber){
  document.querySelector('.cart span').textContent = cartItemsQuantityNumber ; 
}

}
 
onloadCartNumbers();
  
displayCart();


removeBtn = document.getElementsByClassName('remove');
for( var i=0; i<removeBtn.length; i++){
  var button = removeBtn[i]
button.addEventListener('click', function(event){
  alert('vous pouvez retourner vers la page d\'acceuil et choisir le produit que vous plaira !! ')
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  localStorage.clear();
  window.location.reload()
});
}


document.getElementById('formulaire').addEventListener('submit', function(e){
  var inputs = document.getElementsByTagName('input');       // on recupére tous les inputs 
  for(var i=0; i< inputs.length; i++){
    if(!inputs[i].value){                               //  if inputs.value = '' ; 
      error = "veuillez renseigner tous les champs !"
    }else if (inputs[i].value){
      (e).preventDefault();                   // stopper le comporetement normale
      productsOrder();
    }

  }
})


function productsOrder(){
  
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let address = document.getElementById('address').value;
  let city = document.getElementById('city').value;
  let email = document.getElementById('mail').value;
  var contact = { firstName, lastName, address, city, email }; // on mis tt les inputs dans un objet 
  let products = []
  cartItems.forEach(cartItem =>{
    products.push(cartItem.id)
  })

    fetch('http://localhost:3000/api/cameras/order',
    {method: 'post',
    headers: {'content-type':'application/json'}, // pour que  fetch comprendre qu'on va envoyer du json 
    body: JSON.stringify({products,contact})      // envoyer le body en json 
    })
      .then(response => { return response.json()})
      .then(data => {
        //console.log(data)
        //console.log(data.orderId)
        //console.log(cartCost)
       
        let getOrderId = data.orderId ;
        let getCartCost = cartCost ;
        let orderRecap = {getOrderId, getCartCost}
        
        
        localStorage.clear();
        localStorage.setItem('orderRecap', JSON.stringify(orderRecap)) // on créé un localStorage qui contient le recap 
      
    
           
       window.location = 'confirmation.html' ; 

           
      })
      

          .catch( Error => console.error('erreur'))


    }
    

