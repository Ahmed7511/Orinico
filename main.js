      
 
 function main () {
   window.fetch('http://localhost:3000/api/cameras')
      .then(res => res.json())
      .then(json => console.log(json ))
 
 }
  
   function display(data){
      const id = data.id;
      const lentille = data.lenses;
      const image = data.imageUrl;
      const name = data.name;
      const price = data.price;
    const description = data.description;

     document.getElementById('product').textContent = id;
     document.getElementsByClassName('lentille').textContent = lentille;
     document.getElementById('image').textContent = image;
     document.getElementById('name').textContent = name;
     document.getElementById('price').textContent = price;
     document.getElementById('description').textContent = description;





 }

main();


