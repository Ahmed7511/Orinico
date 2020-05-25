
let order = JSON.parse(localStorage.getItem("orderRecap")) || [];
let commande = document.getElementById("commande-order");

commande.innerHTML += `
    <h6> commande confirmer !</h6>
     <p>merci pour votre commande chez Orinico , nous espérons qu'elle vous plaira ! 
     Nous vous informerons par e-mail dés quelle est expédiée. </p>
    <h6>Numéro de commande :${order.getOrderId}</h6>
    <h6>le prix total : ${order.getCartCost},00 €</h6>
       `;

localStorage.clear();
