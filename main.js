

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
                      '<li> ID :' + products[i]._id+'</li>' +
                      '<li>Lentille :' + products[i].lenses+'</li>' +
                      '<li> name :' + products[i].name+'</li>' +
                      '<li> price:' + products[i].price+'</li>' +
                      '<li> Description :' + products[i].description+'</li>' +
                    '</ul>' +
                    '</div>';
                    }

                    document.getElementById('products').innerHTML = output ;

    }else{

    }
  };

   request.send();
 
   
 
 //function main () {
   //window.fetch('http://localhost:3000/api/cameras/')
   //.then(res => res.json())
   //.then(data => console.log(data))
 
 //}
  
   //function display(data){
     //const id = data[0].id;
     // const lentille = data.lenses;
      //const image = data.imageUrl;
      //const name = data[1].name;
      //const price = data.price;
    //const description = data.description;

    //document.getElementById('product').textContent = id;
     //document.getElementsByClassName('lentille').textContent = lentille;
     //document.getElementById('image').textContent = image;
     //document.getElementById('name').textContent = name;
     //document.getElementById('price').textContent = price;
     //document.getElementById('description').textContent = description;
  
    // console.log('name')
}

main();


