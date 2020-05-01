

               const lien = window.location.search.substring(4)
               
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
                               '<option> select option </option>' +
                               '<option > ' + productData.lenses[0] +' </option>' +
                               '<option > ' + productData.lenses[1] +' </option>' + 
                               '<option > ' + productData.lenses[2] + ' </option>' + 
                        '</select>' + 
                         //   '<input type="text" id ="txtvalue">' + 
                        
                       '<li><strong>Name :</strong>' +productData.name +' </li>' +
                         '<li id="price"><strong>price:</strong>' +productData.price/100+'€' +' </li>' +
                          '<li><strong>Description :</strong>' +productData.description +' </li>' +
                          '</ul>' +
        
                          '</div>'
                       
                              }
                            document.getElementById('product').innerHTML = output ;
        
                              
        let carts = document.querySelectorAll('div > a');  
        
        
        for(let i=0; i < carts.length; i++){
          carts[i].addEventListener('click', () =>{
          cartNumbers(productData); // on click on lance la function
        })
        }
        function onloadCartNumbers(){
          let productNumbers = localStorage.getItem('cartNumbers');
        if(productNumbers){
          document.querySelector('.cart span').textContent = productNumbers ; 
        }
        
        }

        function cartNumbers(productData){
        
          let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);            // converti le productNumbers en numéro 
        if(productNumbers){
        
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
        
        }else{
          localStorage.setItem('cartNumbers', 1);
          document.querySelector('.cart span').textContent = 1;
        }
        
        function setItems(productData){
          let cartItems = JSON.parse(localStorage.getItem(productData.name));
            cartItems = productData 
                              
               localStorage.setItem(productData.name,JSON.stringify(cartItems));  
                     
                  
        
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
          console.log(d.options[d.selectedIndex].text) ;
         // document.getElementById('txtvalue').value = displaytext ;
        } 


        //----------------------------------page panier -----------------------------//

        function displayCart(){
            cartItems = localStorage.getItem(productData);
            cartItems = JSON.parse(cartItems);
        
            let product = document.querySelector('.products');
        
        if(cartItems && product){
           var output=""
         output += '<div class="products">'+
                   '<img src="' + cartItems.imageUrl+'" width= 70px >' +
                   
                    '<strong>Name :</strong>'  + cartItems.name +
                      
        
                       '</div>'  +
                       '<div class="price">' +cartItems.price/100+'€' +' </div>' +
                       '<div class="quantity"><i class="far fa-plus-square"></i> 1  <i class="fas fa-minus-circle"></i></div>' 
         
                
           
                   
                    }
        
                document.querySelector('.products').innerHTML = output ;
        
        }
        
            
           function onloadCartNumbers(){
          let productNumbers = localStorage.getItem('cartNumbers');
        if(productNumbers){
          document.querySelector('.cart span').textContent = productNumbers ; 
        }
        
        }
         
        onloadCartNumbers();
          
        displayCart();
           