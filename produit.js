
const params = window.location.search.substring(4)

$(function(){
    var $product = $('#product'); 
      $.ajax({
        url: 'http://localhost:3000/api/cameras/' + params,
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
           
            '</select>' + 
            '<li><strong>Quantité : </strong> <input id="quantity" type ="number"> </input></li>' +

          '</ul>' +
    
           '</div>'
         );
        

//console.log(product.lenses)
         var dselect = document.getElementById('ddselect');    // on créé une variable pour mettre nos options via innerHTML
    for(i=0; i < product.lenses.length; i++){
      dselect.innerHTML += '<option>'+ product.lenses[i] +'</option>' ; 
    }
 
        
    
    let cart = document.querySelector('.add-card'); 
    //console.log(cart) 
    cart.addEventListener('click', () =>{
      setItems(product);
      // on click on lance la function
      })
    
    function setItems(product){
        let quantity = document.getElementById('quantity').value; // input
            if(quantity < 1){
                alert('veuillez sélectionnez une quantité s\'il vous plait !!') 
                event.preventDefault();
           }else{
            totalCart(product); 

     function totalCart(product){

        let cartItemsQuantityNumber = localStorage.getItem('totalCart');
        //console.log(typeof cartItemsQuantityNumber)
        cartItemsQuantityNumber = parseInt(cartItemsQuantityNumber); // converti le productNumbers en numéro 
      if(cartItemsQuantityNumber){
      
      localStorage.setItem('totalCart',cartItemsQuantityNumber + 1);
      document.querySelector('.cart span').textContent = cartItemsQuantityNumber + 1;
      
      }else{
        localStorage.setItem('totalCart', 1);
        document.querySelector('.cart span').textContent = 1;
      }
      let lenses = document.querySelector('select').value;
           let cart = {
                 "id" : product._id ,                     
                 "name" : product.name ,
                "price" : product.price ,  
                "lenses": lenses,              // Déclaration d'un objet cart qui représentent un type de produit 
                "description" : product.description ,
                  "quantity" : quantity,
                "imageURL" : product.imageUrl
                 } 
  
                  let cartItems =  JSON.parse(localStorage.getItem('productInCart')) || [];
                  if (localStorage.getItem('productInCart') === null) {   /* Si le localStorage est vide */
                    localStorage.setItem("productInCart", JSON.stringify(cartItems)) || [];  //on crée notre Array

                 cartItems.push(cart)   // On va ajouter le produit actuel à l'array cartItems
                 }else{ 
                      cartItems.push(cart);       
                       // Donc on peut simplement push les nouveaux produits pour les ajouter à l'array cartItems
                         }   
            
                     localStorage.setItem("productInCart", JSON.stringify(cartItems));   
                     // Puis stringify le contenu de cartItems pour l'ajouter au localStorage                      
                        } 
                        let cartCost = localStorage.getItem("totalCost");
                        //console.log(typeof cartCost)
                        if(cartCost != null){
                          cartCost = parseInt(cartCost);
                          //console.log(typeof (quantity)) 
                         quantity = parseInt(quantity)
                        // console.log(typeof (quantity))
                          localStorage.setItem("totalCost", cartCost + product.price/100 * quantity )
                        }else{
                        localStorage.setItem("totalCost", product.price/100 * quantity)
                        }
                  }      

            }
    
               function onloadCartNumbers(){
              let cartItemsQuantityNumber = localStorage.getItem('totalCart');
            if(cartItemsQuantityNumber){
              document.querySelector('.cart span').textContent = cartItemsQuantityNumber ; 
            }
            
            }
             
            onloadCartNumbers();

          }  

        }) ; 
                                                     
        });


function change(){
  var select = document.getElementById('ddselect');
 select.option[select.selectedIndex].value;
}




               

                      
