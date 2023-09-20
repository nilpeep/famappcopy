// Sepet bilgilerini yerel depodan alın
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Sepet içeriğini görüntüleme işlevi
function displayCart() {
    const cartItems = document.querySelector(".cart-items");
    const totalItems = document.getElementById("total-items");
    const totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = "";
    let totalItemCount = 0;
    let totalPriceValue = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        totalItemCount++;
        totalPriceValue += item.price;
    });

    totalItems.textContent = totalItemCount;
    totalPrice.textContent = `$${totalPriceValue.toFixed(2)}`;
}

// Sayfa yüklendiğinde sepeti görüntüle
window.addEventListener("DOMContentLoaded", () => {
    displayCart();
});

// Satın Al düğmesine tıklama olayını dinleme
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", () => {
    alert("Satın alma işlemi tamamlandı!");
    // Sepeti sıfırlama veya başka bir işlem yapabilirsiniz.
    localStorage.removeItem("cart");
    displayCart(); // Sepeti temizleme
});
