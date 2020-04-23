
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
                 '<li><strong> Appareil photo '+ products [i].name +'</strong></li><br>' +
                    '<li>ID :'+ products[i]._id +'</li>' +
                      '<li><strong>Lentille :</strong> ' + products[i].lenses[0]+'</li>' +
                      '<li><strong> price :</strong> ' + products[i].price/100 + ' €' +'</li>' +
                      '<li><strong> Description :</strong> ' + products[i].description+'</li><br>' +
                   '<button><a class ="btn" href="produit.html?id=' + products[i]._id +'">Séléctionnée</a></button>'
                     + '</ul>' +


                    '</div>';
                    }

                    document.getElementById('products').innerHTML = output ;

                  

                    }

  };

   request.send();
 
}

main();



//---------------------page produit -----------------------//

//let lien1 = ["5be1ed3f1c9d44000030b061" ]
//let lien2  =["5be1ef211c9d44000030b062 "] 
//let lien3 =["5be9bc241c9d440000a730e7"]
//var id = ['5be1ed3f1c9d44000030b061' , '5be1ef211c9d44000030b062', '5be9bc241c9d440000a730e7',
  //                 '5be9c4471c9d440000a730e8', '5be9c4c71c9d440000a730e9']
//const getProducts = document.getElementsByClassName('btn');

   function getProduct(){ 
 var request = new XMLHttpRequest();
 for (var i in products){

   request.open('GET' , 'http://localhost:3000/api/cameras/'+ products[i]._id);
 } 
   request.onload = function (){

    if(this.status == 200){
      var product = JSON.parse(request.responseText);

      var output=""
      output += '<div class="product">'+
                '<img src="' + product.imageUrl+'">' +
                '<ul>' +
               '<li><strong>ID :</strong>' +product._id +' </li>' +
               '<li><strong>Lentille :</strong>' +
                '<select><option name="lentille" value ="lenses[0]"> ' +
                   product.lenses[0] +'<option name="lentille" value="lenses[1]">' + product.lenses[1] +'</select>' + 
                  '</li>' +
               '<li><strong>Name :</strong>' +product.name +' </li>' +
               '<li><strong>Price :</strong>' +product.price/100+'€' +' </li>' +
               '<li><strong>Description :</strong>' +product.description +' </li>' +
               '</ul>'
               '</div>'

                    }
                    document.getElementById('product').innerHTML = output ;


  };

   request.send();
 
}

getProduct();

//const carts = document.getElementsByClassName('btn');
//for(i=0; i<products.length; i++){
//fetch('http://localhost:3000/api/cameras/'+id1)
//.this(response => Response.JSON())
//.this(data => console.log(data))
//}
//for(i=0; i<products.length; i++){
//function getProduct(){ 
  // var request = new XMLHttpRequest();
    // request.open("GET" , 'http://localhost:3000/api/cameras/');
  
     
//carts.addEventListener('onclick',()=>{alert('salut')});
//function parentElement(){
//  fetch('http:localhost:3000/api/cameras/5be1ed3f1c9d44000030b061')

//}






  //function Redirect0(){
    //localStorage.setItem("id1", "http:localhost:3000/api/cameras/5be1ed3f1c9d44000030b061");
   //window.location ="produit.html";
   //fetch('http:localhost:3000/api/cameras/5be1ed3f1c9d44000030b061')
  //.then(res => res.json())
    //.then(data => console.log(data))
//}
  //function Redirect1(){
    //localStorage.setItem("id2", "http:localhost:3000/api/cameras/5be1ef211c9d44000030b062");
   // window.location = "http:localhost:3000/api/cameras/5be1ef211c9d44000030b062";
  //}
   //function Redirect2(){
    //localStorage.setItem("id3", "http:localhost:3000/api/cameras/5be9bc241c9d440000a730e7");
  //  window.location = "http:localhost:3000/api/cameras/5be9bc241c9d440000a730e7";
  //}
   //function Redirect3(){
    //localStorage.setItem("id4", "http:localhost:3000/api/cameras/5be9c4471c9d440000a730e8");
    //window.location = "http:localhost:3000/api/cameras/5be9c4471c9d440000a730e8";
 // } 
  //function Redirect4(){
    //localStorage.setItem("id5", "http:localhost:3000/api/cameras/5be9c4c71c9d440000a730e9");
    //window.location = "http:localhost:3000/api/cameras/5be9c4c71c9d440000a730e9";
  //} 















//parentElement = document.getElementById(['btn0']);
//parentElement.addEventListener('click',function(){console.log('hey')})
//var carts = [document.getElementById('btn0'), document.getElementById('btn1'), document.getElementById('btn2'),
 //document.getElementById('btn3'), document.getElementById('btn4') ];   
//console.log(carts.length)



