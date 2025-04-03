let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");
let cart = document.getElementById("cart");
let cartItems = document.getElementById("cartItems");
let cartTotal = document.getElementById("cartTotal");

let cartData = [];

function homes() {
    mainPage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "rgb(2, 173, 173)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

function shops() {
    mainPage.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";
    cart.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "rgb(2, 173, 173)";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

function blogs() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "none";

    document.getElementById("blog").style.color = "rgb(2, 173, 173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

function abouts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";
    cart.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "rgb(2, 173, 173)";
}

function contacts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
    cart.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "rgb(2, 173, 173)";
    document.getElementById("about").style.color = "black";
}

function toggleCart() {
    if (cart.style.display === "none" || cart.style.display === "") {
        cart.style.display = "block";
    } else {
        cart.style.display = "none";
    }
}

function addToCart(name, price) {
    cartData.push({ name, price });
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cartData.forEach(item => {
        let cartItem = document.createElement("div");
        cartItem.className = "cartItem";
        cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    cartTotal.innerText = total;
}

function checkout() {
    alert("Thank you for your purchase!");
    cartData = [];
    updateCart();
    toggleCart();
}

function show(img) {
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;

    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    document.querySelector(".cart").style.display = "flex";
}

function addCart() {
    alert("Added To Cart");
    location.reload();
}