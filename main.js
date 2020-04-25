
//------------------page index--------------//
async function main(){ 

  var request = new XMLHttpRequest();
   request.open('GET' , 'http://localhost:3000/api/cameras');

   request.onload = function (){

    if(this.status == 200){
      var products = JSON.parse(request.responseText);
      var output ="";
      for (var i in products){
        output += '<div class="product">'+
                 '<img src="' + products[i].imageUrl+'">' +
                 '<ul>' +
                 '<li><strong> Appareil photo '+ products [i].name +'</strong></li><br>' +
                    '<li>ID :'+ products[i]._id +'</li>' +
                      '<li><strong>Lentille :</strong> ' + products[i].lenses[0]+'</li>' +
                      '<li><strong> price :</strong> ' + products[i].price/100 + ' €' +'</li>' +
                      '<li><strong> Description :</strong> ' + products[i].description+'</li><br>' +
                   '<button><a id ="btn'+[i] +'" href="produit.html?id=' + products[i]._id +'">Séléctionnée</a></button>'
                     + '</ul>' +


                    '</div>';
                    }
                    document.getElementById('products').innerHTML = output ;



                    }
                   
                     
                    
                     
               
                


  };

   request.send();

}

main();
function onloadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');
if(productNumbers){
  document.querySelector('.cart span').textContent = productNumbers ; 
}
}
onloadCartNumbers();



//---------------------fin page index -----------------------//

  

