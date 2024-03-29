//------------------page index--------------//
const urlAPI = "http://localhost:3000/api/cameras"; // Déclaration de l'Url de l'api
const products = document.getElementById("products");
const getProducts = async function () {          // création de la fonction asynchrone
          let response = await fetch(urlAPI);         // on attend la réponse en json de l'API
          let data = await response.json().then((data) => {  // une fois qu'on a la response en la declare : data
                    data.forEach((product) => {
                              products.innerHTML += `<div class="product">
                                         <img src= "${product.imageUrl}"> 
                                               <div>
                                                     <ul> 
                                                          <li id="price"><strong>Name:</strong>${product.name} </li>
                                                          <li id="price"><strong>Prix:</strong> ${product.price / 100}</li>
                                                          <li><strong>Description :</strong>${product.description}</li>
                                                          '<button id ="btn" onclick='location.href="produit.html?id=${product._id }"'>personnalisez votre produit </button>
                                                      </ul>
                                                  </div>    
                                             </div>`;
                                             
                                              });
                                          })
                                          .catch(error => console.error('error'))
                            };
      
          getProducts();

function onloadCartNumbers() {
          let cartItemsQuantityNumber = localStorage.getItem("totalCart");
          if (cartItemsQuantityNumber) {
                    document.querySelector(
                              ".cart span"
                    ).textContent = cartItemsQuantityNumber;
          }
}

onloadCartNumbers();
