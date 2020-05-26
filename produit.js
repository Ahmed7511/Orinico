const params = window.location.search.substring(4); // on recupére l'id de chaque produit a prtir de l'url

const urlAPI = "http://localhost:3000/api/cameras/" + params; // Déclaration de l'Url de l'api
const product = document.getElementById("product");
const getProduct = async function () {        // création de la fonction asynchrone 
          let response = await fetch(urlAPI);   // on attend la response de l'API 
          let data = await response.json().then((data) => {      // une fois la response en la declare en data
                    product.innerHTML += `<div class="product">
                                          <img src= "${data.imageUrl}">
                                                <div>
                                                      <ul> 
                                                         <li><strong>Name:</strong>${data.name} </li>
                                                         <li id="price"><strong>Prix:</strong> ${data.price / 100}</li>
                                                         <li><strong>Description :</strong>${data.description}</li>
                                                         <li><strong>Lentille :</strong>
                                                                <select id ="ddselect" onchange="change();" >
             
                                                                 </select> 
                                                         <li><strong>Quantité : </strong> <input id="quantity" type ="number"> </input></li>
                                                      </ul>
                                                    </div>
                                                </div>`;

                    var dselect = document.getElementById("ddselect"); // on créé une variable pour mettre nos options via innerHTML
                    for (i = 0; i < data.lenses.length; i++) {
                              dselect.innerHTML += `<option>${data.lenses[i]}</option>`;
                    }
                    let addCart = document.querySelector(".add-card");

                    addCart.addEventListener("click", () => {
                              // on click on lance la function
                              let lenses = document.querySelector("select")
                                        .value;
                              let quantity = document.getElementById("quantity")
                                        .value; // input
                              if (quantity < 1) {
                                        alert(
                                                  "veuillez sélectionnez une quantité s'il vous plait !!"
                                        );
                                        event.preventDefault();
                              } else {
                                        let cart = {
                                                  id: data._id,
                                                  name: data.name,
                                                  price: data.price,
                                                  lenses: lenses, // Déclaration d'un objet cart qui représentent un type de produit
                                                  description: data.description,
                                                  quantity: quantity,
                                                  imageURL: data.imageUrl,
                                        };
                                        
                                        let cartItems =
                                                  JSON.parse(
                                                            localStorage.getItem(
                                                                      "productInCart"
                                                            )
                                                  ) || [];
                                        if (
                                                  localStorage.getItem(
                                                            "productInCart"
                                                  ) === null
                                        ) {
                                                  /* Si le localStorage est vide */
                                                  localStorage.setItem(
                                                            "productInCart",
                                                            JSON.stringify(
                                                                      cartItems
                                                            )
                                                  ) || []; //on crée notre Array

                                                  cartItems.push(cart); // On va ajouter le produit actuel à l'array cartItems
                                        } else {
                                                  cartItems.push(cart);
                                                  // Donc on peut simplement push les nouveaux produits pour les ajouter à l'array cartItems
                                        }
                                        localStorage.setItem(
                                                  "productInCart",
                                                  JSON.stringify(cartItems)
                                        );
                                        // Puis stringify le contenu de cartItems pour l'ajouter au localStorage
                              }
                              let cartItemsQuantityNumber = localStorage.getItem(
                                        "totalCart"
                              );
                              //console.log(typeof cartItemsQuantityNumber)
                              cartItemsQuantityNumber = parseInt(
                                        cartItemsQuantityNumber
                              ); // converti le productNumbers en numéro
                              if (cartItemsQuantityNumber) {
                                        localStorage.setItem(
                                                  "totalCart",
                                                  cartItemsQuantityNumber + 1
                                        );
                                        document.querySelector(
                                                  ".cart span"
                                        ).textContent =
                                                  cartItemsQuantityNumber + 1;
                              } else {
                                        localStorage.setItem("totalCart", 1);
                                        document.querySelector(
                                                  ".cart span"
                                        ).textContent = 1;
                              }
                              let cartCost = localStorage.getItem("totalCost");
                              //console.log(typeof cartCost)
                              if (cartCost != null) {
                                        cartCost = parseInt(cartCost);
                                        //console.log(typeof (quantity))
                                        quantity = parseInt(quantity);
                                        // console.log(typeof (quantity))
                                        localStorage.setItem(
                                                  "totalCost",
                                                  cartCost +
                                                            (data.price / 100) *
                                                                      quantity
                                        );
                              } else {
                                        localStorage.setItem(
                                                  "totalCost",
                                                  (data.price / 100) * quantity
                                        );
                              }
                    });
                    
          })
          .catch(error => console.error('error'))
};
window.onload = () => {
      //on charge la fonction au lancement de la page
      getProduct();
};

function onloadCartNumbers() {
          let cartItemsQuantityNumber = localStorage.getItem("totalCart");
          if (cartItemsQuantityNumber) {
                    document.querySelector(
                              ".cart span"
                    ).textContent = cartItemsQuantityNumber;
          }
}

onloadCartNumbers();

function change() {
          var select = document.getElementById("ddselect");
          select.option[select.selectedIndex].value;
}
