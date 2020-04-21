

function main(){ 

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
                      '<li><strong>ID :</strong> ' + products[i]._id+'</li>' +
                      '<li><strong>Lentille :</strong> ' + products[i].lenses[0]+'</li>' +
                      '<li><strong> name :</strong> ' + products[i].name+'</li>' +
                      '<li><strong> price :</strong> ' + products[i].price/100 + ' €' +'</li>' +
                      '<li><strong> Description :</strong> ' + products[i].description+'</li>' +
                      '<button class= "btn ' + [i] + '">Ajouter au panier</button>' +
                    '</ul>' +

                    '</div>';
                    }

                    document.getElementById('products').innerHTML = output ;

                  

                    }

  };

   request.send();
 
}

main();


let cart1 = document.getElementsByClassName('btn0');
cart1.addEventListener('click', function(){
  console.log('added')
});
