const lien = window.location.search.substring(4)
$(function(){
    var $product = $('#product'); 
      $.ajax({
        url: 'http://localhost:3000/api/cameras/' + lien,
        type: 'GET',
        success: function(product){
          $product.append('<div class="product">'+
          '<img src="' + product.imageUrl+'">' +
          '<div>' +
          '<ul>' +
          '<li><strong>Name :</strong>' +product.name +' </li>' +
          '<li id="price"><strong>price:</strong>' +product.price/100+'€' +' </li>' +
           '<li><strong>Description :</strong>' +product.description +' </li>' +
           '<li><strong>Lentille :</strong>' +
               
           '<select id ="ddselect" onchange="change();" >' +
           
                   '<option > ' + product.lenses[0] +' </option>' +
                   '<option > ' + product.lenses[1] +' </option>' + 
                   '<option > ' + product.lenses[2] + ' </option>' + 
            '</select>' + 
            '<li><strong>Quantité : </strong> <input id="quantity"> </input></li>' +

          '</ul>' +
    
           '</div>'
         );
        


    
    let carts = document.querySelectorAll('div > a');  
   for(let i=0; i< carts.length; i++){
    carts[i].addEventListener('click', () =>{
        totalCart(product); // on click on lance la function
      })
    }
      function totalCart(product){

        let productNumbers = localStorage.getItem('totalCart');
      productNumbers = parseInt(productNumbers);            // converti le productNumbers en numéro 
      if(productNumbers){
      
      
      localStorage.setItem('totalCart',productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
      
      }else{
        localStorage.setItem('totalCart', 1);
        document.querySelector('.cart span').textContent = 1;
      }
      setItems(product);
      function setItems(product){
        let quantity = document.getElementById('quantity').value;
   if(quantity >1){
       alert('vous avez pas choisi une quantity !!')
   }else{
    let cart = {
        "id" : product._id ,
        "name" : product.name ,
        "price" : product.price , 
        "description" : product.description ,
        "quantity" : quantity,
        "imageURL" : product.imageUrl
    } 
  
          let cartItems =  JSON.parse(localStorage.getItem('productInCart')) || [];
          if (localStorage.getItem('productInCart') === null) {   /* Si le localStorage est vide */
         
              cartItems.push(cart)   // On va ajouter le produit actuel à l'array cartItems
              localStorage.setItem("productInCart", JSON.stringify(cart)) || []; 
        }else{
              let itemHasChanged = false; // Cette déclaration servira pour contrôler les doublons
                            
           for(let i = 0; i < cartItems.length; i++) {   
            // en fonction de la quantité de produits dans le localStorage
            // S'il y a déjà un item avec un nom ET un id identique
              if((cartItems[i].name == cart.name) && cartItems[i]._id == cart._id) { 
                  
        let cartItemsQuantityNumber = Number(cartItems[i].quantity); 
        // On récupère la quantité du produit en cours d'ajout
        let cartQuantityNumber = Number(cart.quantity);   
        // Ainsi que la quantité de produits identiques déjà présents dans le localStorage
    
        let sumQuantity = cartItemsQuantityNumber + cartQuantityNumber;
        cartItems[i].quantity = sumQuantity.toString();
        // Et on remplace la quantité du localStorage par cette nouvelle quantité
         itemHasChanged = true;  
              }

            }
         if(itemHasChanged == false) {  
            // Il y a déjà des produits dans le panier mais pas identiques à ceux qui sont en ajout
            cartItems.push(cart);       
            // Donc on peut simplement push les nouveaux produits pour les ajouter à l'array cartItems
                }
            }   
            
         localStorage.setItem("productInCart", JSON.stringify(cartItems));   
            // Puis stringify le contenu de cartItems pour l'ajouter au localStorage                      
            } 
        
        }      

    }



        /*let cartItems = localStorage.getItem(product._id);              
        let dataQuantity = document.getElementById('quantity').value;
      cartItems = product
     if(localStorage.getItem(product._id) == undefined){
        localStorage.setItem(product._id, JSON.stringify(cartItems));
        cartItems.push(localStorage.getItem(product._id));
        dataQuantity = dataQuantity + 1;  
     } else if (localStorage.getItem(product._id)){
        addQuantity();
         console.log(dataQuantity);
     }*/
    
    
  








    }  

}) ; 
                                             
});









/*const lien = window.location.search.substring(4)
               
       function main(){
       var request = new XMLHttpRequest();
 
       request.open('GET' , 'http://localhost:3000/api/cameras/'+ lien);

request.onload = function (){

  if(this.status == 200){
    var productData = JSON.parse(request.responseText);
    var output=""
    output += '<div class="product">'+
              '<img src="' + productData.imageUrl+'">' +
              '<ul>' +
             '<li><strong>ID :</strong>' +productData._id +' </li>' +
             '<li><strong>Lentille :</strong>' +
               
               '<select id ="ddselect" onchange="change();" >' +
                       '<option > ' + productData.lenses[0] +' </option>' +
                       '<option > ' + productData.lenses[1] +' </option>' + 
                       '<option > ' + productData.lenses[2] + ' </option>' + 
                '</select>' + 
                 //   '<input type="text" id ="txtvalue">' + 
                
               '<li><strong>Name :</strong>' +productData.name +' </li>' +
                 '<li id="price"><strong>price:</strong>' +productData.price/100+'€' +' </li>' +
                  '<li><strong>Description :</strong>' +productData.description +' </li>' +
                   '<li id="quantity"><strong>Quantité : </strong> 0 </li>' +
                  '</ul>' +

                  '</div>'
               
                      }
                    document.getElementById('product').innerHTML = output ;

                      
let carts = document.querySelectorAll('div > a');  

for(let i=0; i < carts.length; i++){
  carts[i].addEventListener('click', () =>{
  totalCart(productData); // on click on lance la function
})
}
function onloadCartNumbers(){
 let productNumbers = localStorage.getItem('totalCart');
if(productNumbers){
  document.querySelector('.cart span').textContent = productNumbers ; //--------le nombre de produits dans le panier
}

}

function totalCart(productData){

  let productNumbers = localStorage.getItem('totalCart');
productNumbers = parseInt(productNumbers);            // converti le productNumbers en numéro 
if(productNumbers){


localStorage.setItem('totalCart',productNumbers + 1);
document.querySelector('.cart span').textContent = productNumbers + 1;

}else{
  localStorage.setItem('totalCart', 1);
  document.querySelector('.cart span').textContent = 1;
}

function setItems(productData){
    let cartItems = [];              
    let dataQuantity = document.getElementById('quantity').value;

 if(localStorage.getItem(productData._id) == undefined){
    localStorage.setItem(productData._id, JSON.stringify(cartItems));
    cartItems.push(localStorage.getItem(productData._id));
    dataQuantity = dataQuantity + 1;  
 } else if (localStorage.getItem(productData._id)){
    addQuantity();
     console.log(dataQuantity);
 }
}
setItems(productData) ;


let cartCost = localStorage.getItem("totalCost");
  //console.log(typeof cartCost)
  if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + productData.price/100 )
  }else{
  localStorage.setItem("totalCost", productData.price/100)
  }

}


onloadCartNumbers();

};


request.send();

 
}
main();

function change(){
  var d = document.getElementById('ddselect'); 
  d.options[d.selectedIndex].text ;
 // document.getElementById('txtvalue').value = displaytext ;
} 

function addQuantity() {
    let dataQuantity = 1;
    document.getElementById('quantity-add').addEventListener('click', event => {
        dataQuantity += 1;
        console.log(dataQuantity);
    })
}*/