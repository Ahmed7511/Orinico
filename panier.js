
  let cartItems = localStorage.getItem("productInCart") || [];
  cartItems = JSON.parse(cartItems);
 
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
let submit = document.getElementById('submit');
submit.addEventListener('click' ,()=>{
  productsOrder();

} )

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

    console.log(products)
    console.log(contact)
     
    fetch('http://localhost:3000/api/cameras/order',
    {method: 'post',
    headers: {"content-type":"application/x-www-form-urlencoded; charset=UTF-8"},
    body: {products,contact}
    })
      .then(response => response.json())
      .then(console.log)






    



    
    }
