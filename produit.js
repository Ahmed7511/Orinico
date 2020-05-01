const lien = window.location.search.substring(4)
$(function(){
    var $product = $('#product'); 
      $.ajax({
        url: 'http://localhost:3000/api/cameras/' + lien,
        type: 'GET',
        success: function(products){
          $product.append('<div class="product">'+
          '<img src="' + product.imageUrl+'">' +
          '<div>' +
          '<ul>' +
          '<li><strong>Name :</strong>' +product.name +' </li>' +
          '<li id="price"><strong>price:</strong>' +product.price/100+'€' +' </li>' +
           '<li><strong>Description :</strong>' +product.description +' </li>' +
          '</ul>' +
          '<button><a id ="btn'+[i] +'" href="produit.html?id=' + product._id +'">Séléctionnée</a></button>' +
    
           '</div>'
         );
        
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