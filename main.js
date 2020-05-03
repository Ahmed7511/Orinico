//------------------page index--------------// 
$(function(){
var $products = $('#products'); 
  $.ajax({
    url: 'http://localhost:3000/api/cameras',
    type: 'GET',
    typeData: 'json',
    success: function(products){
    $.each(products, function(i , product){
      $products.append('<div class="product">'+
      '<img src="' + product.imageUrl+'">' +
      '<div>' +
      '<ul>' +
      '<li><strong>Name :</strong>' +product.name +' </li>' +
      '<li id="price"><strong>price:</strong>' +product.price/100+'€' +' </li>' +
       '<li><strong>Description :</strong>' +product.description +' </li>' +
      '</ul>' +
      '<button><a id ="btn'+[i] +'" href="produit.html?id=' + product._id +'">personnalisez votre produit </a></button>' +

       '</div>'
     );
    });
   /* let allProducts = JSON.parse(localStorage.getItem('AllProducts'));

   
       localStorage.setItem('AllProducts', JSON.stringify(products)); */
    }  
}) ;                                                  
});

function onloadCartNumbers(){
  let productNumbers = localStorage.getItem('totalCart');
if(productNumbers){
  document.querySelector('.cart span').textContent = productNumbers ; 
}
}
onloadCartNumbers();

