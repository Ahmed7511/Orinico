

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
                   
                      '<a id ="btn'+[i]+' " href="produit.html" onclick="Redirect'+[i] +'();" >Ajouter au panier</a>' +
                   
                      '</ul>' +


                    '</div>';
                    }

                    document.getElementById('products').innerHTML = output ;

                  

                    }

  };

   request.send();
 
}

main();



//---------------------page produit -----------------------//




  function Redirect0(){
    localStorage.setItem("id1", "http:localhost:3000/api/cameras/5be1ed3f1c9d44000030b061");
    window.location = "http:localhost:3000/api/cameras/5be1ed3f1c9d44000030b061";
  } 
  function Redirect1(){
    localStorage.setItem("id2", "http:localhost:3000/api/cameras/5be1ef211c9d44000030b062");
    window.location = "http:localhost:3000/api/cameras/5be1ef211c9d44000030b062";
  }
   function Redirect2(){
    localStorage.setItem("id3", "http:localhost:3000/api/cameras/5be9bc241c9d440000a730e7");
    window.location = "http:localhost:3000/api/cameras/5be9bc241c9d440000a730e7";
  }
   function Redirect3(){
    localStorage.setItem("id4", "http:localhost:3000/api/cameras/5be9c4471c9d440000a730e8");
    window.location = "http:localhost:3000/api/cameras/5be9c4471c9d440000a730e8";
  } 
  function Redirect4(){
    localStorage.setItem("id5", "http:localhost:3000/api/cameras/5be9c4c71c9d440000a730e9");
    window.location = "http:localhost:3000/api/cameras/5be9c4c71c9d440000a730e9";
  } 















//parentElement = document.getElementById(['btn0']);
//parentElement.addEventListener('click',function(){console.log('hey')})
//var carts = [document.getElementById('btn0'), document.getElementById('btn1'), document.getElementById('btn2'),
 //document.getElementById('btn3'), document.getElementById('btn4') ];   
//console.log(carts.length)



