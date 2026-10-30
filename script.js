
// Homepage welcome button
function showWelcome() {
    alert("Welcome to DeskNest! Explore our workspace essentials.");
}

// Product Add to Cart buttons
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

// Contact form submission
function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    document.querySelector(".contact-form form").reset();
}
