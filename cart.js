let cart = localStorage.getItem("cart");
cart = JSON.parse(cart);
console.log(cart)

for (let key in cart) {
    let items = cart[key].product;
    console.log(items)
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="card-inf">
    <input type="checkbox">
    <div class="card-img">
        <img src="${items.img}" alt="">
    </div>
    <div class="card-des">
        <h4>${items.name}</h4>
        <h3>$${items.price}</h3>
    </div>
</div>
<div class="product-inf">                        
    <div class="quantity"> 
        <div class="add-qtt">
            <div class="value-button decrease_" id="" value="Decrease Value">-</div>
             <input type="number" name="qty" id="number" value="1"/>
             <div class="value-button increase_" id="" value="Increase Value"><b>+</b></div>
            
         
    </div>

</div>
                         <div class="price-total">$${items.price}</div>`;
    document.getElementById("products").appendChild(card);
  }