
//------------------page index--------------// 
$(function(){
var $products = $('#products'); 
  $.ajax({
    url: 'http://localhost:3000/api/cameras',
    type: 'GET',
    typeData: 'json',
    success: function(products){
    $.each(products, function(i , product){            // i = index , product = item
      $products.append('<div class="product">'+
      '<img src="' + product.imageUrl+'">' +
      '<div>' +
      '<ul>' +
      '<li><strong>Name :</strong>' +product.name +' </li>' +
      '<li id="price"><strong>price:</strong>' +product.price/100+'€' +' </li>' +
       '<li><strong>Description :</strong>' +product.description +' </li>' +
      '<button><a id ="btn'+[i] +'" href="produit.html?id=' + product._id +'">personnalisez votre produit </a></button>' +
      '</ul>' +
       '</div>'
     );
    });
    },  
     error: function(){
       console.log('bad request');
     }
  }) ;                                                  
});
function onloadCartNumbers(){
  let cartItemsQuantityNumber = localStorage.getItem('totalCart');
if(cartItemsQuantityNumber){
  document.querySelector('.cart span').textContent = cartItemsQuantityNumber ; 
}

}
 
onloadCartNumbers();

