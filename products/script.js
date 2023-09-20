// Ürünleri sepete eklemek için bir işlev
function addToCart(productName, price) {
    // Sepet bilgilerini alın veya başlatın
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Ürünü sepete ekleyin
    const product = {
        name: productName,
        price: price
    };
    cart.push(product);

    // Sepet bilgilerini yerel depolamada güncelleyin
    localStorage.setItem("cart", JSON.stringify(cart));
}

// "Sepete Ekle" düğmelerine tıklama olaylarını dinleyin
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));
        addToCart(productName, price);
        alert(`${productName} sepete eklendi!`);
    });
});
