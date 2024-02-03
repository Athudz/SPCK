const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Path: cart.js
const cart_render = document.getElementById("cart-render");
var total =0;
for (const item of cart) {
    const priceTotal = item.product.price * item.quantity;
    total += priceTotal;
  let cart_item = document.createElement("div");
  cart_item.classList.add("card");
  cart_item.innerHTML = `
    <div class="card-inf">
    <input type="checkbox">
    <div class="card-img">
        <img src="${item.product.img}" alt="">
    </div>
    <div class="card-des">
        <h4>${item.product.name}</h4>
        <h3>Giá: $${item.product.price}</h3>
    </div>
    </div>
    <div class="product-inf">
    <div class="quantity">
    ${item.quantity}
    </div>
    <div class="price-total">$${priceTotal}</div>
    </div>
        `;
  cart_render.appendChild(cart_item);
}
document.getElementById("total-price").innerHTML = `$ ${total.toPrecision(5)}`;
document.getElementById("btn-pay").addEventListener("click", () => {
  localStorage.removeItem("cart");
  cart_render.innerHTML = "";
  document.getElementById("total-price").innerHTML = "$ 0";
  alert("Thank you for your purchase!");
});