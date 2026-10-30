
// PRODUCT SHOPPING CART

let cartProducts = [];

function addToCart(productName) {
    cartProducts.push(productName);

    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");

    // Check whether the shopping cart exists on the current page
    if (cartCount && cartItems) {
        cartCount.textContent = cartProducts.length;

        cartItems.innerHTML = "";

        if (cartProducts.length === 0) {
            const emptyMessage = document.createElement("li");
            emptyMessage.textContent = "Your cart is currently empty.";
            emptyMessage.className = "empty-cart";

            cartItems.appendChild(emptyMessage);
        } else {
            cartProducts.forEach(function(product) {
                const item = document.createElement("li");
                item.textContent = product;

                cartItems.appendChild(item);
            });
        }
    }
}

// CLEAR SHOPPING CART

function clearCart() {
    cartProducts = [];

    updateCart();
}

// CONTACT FORM SUBMISSION

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const thankYouMessage = document.getElementById("thank-you-message");

    if (thankYouMessage) {
        thankYouMessage.querySelector("h3").textContent =
            "Thank You, " + name + "!";

        thankYouMessage.querySelector("p").textContent =
            "Your message has been received successfully. We appreciate you contacting DeskNest.";

        thankYouMessage.hidden = false;

        document.querySelector(".contact-form form").reset();

        thankYouMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}
