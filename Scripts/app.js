// Navbar Creation
let nav = document.createElement("nav");
nav.classList.add(
    "nav-bar",
    "flex",
    "justify-between",
    "sm:items-center",
    "sm:p-8",
    "md:px-20",
    "bg-[#FFFFFF]"
);
nav.innerHTML = `
    <div class="nav-left sm:flex sm:items-center sm:gap-10 md:gap-20">
        <div class="nav-logo font-bold text-2xl">
            <i class="fa-solid fa-cart-flatbed-suitcase text-[#2F5AFB]"></i>
            <span id="logo-text" class="text-[#2c2c2c]">ShopHub</span>
        </div>
        <ul class="nav-pages hidden sm:flex sm:gap-5">
            <li>Home</li>
            <li>Products</li>
            <li>Wishlist</li>
        </ul>
    </div>
    <div class="nav-right text-right sm:hidden">
        <div id="hamburger-icon" class="">
            <i id="hamburger-ic" class="fa-solid fa-bars text-lg"></i>
            <i id="cross-ic" class="fa-solid fa-xmark hide-item text-lg"></i>
        </div>
        <div id="hambg-bottom" class="hamburger-bottom hide-item">
            <ul class="small-nav-pages">
                <li>Home</li>
                <li>Products</li>
                <li>Wishlist</li>
            </ul>
            <div class="nav-right-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-cart-flatbed-suitcase"></i>
            </div>
        </div>
    </div>
    <div class="nav-right-sm hidden sm:flex sm:gap-5">
        <i class="fa-solid fa-magnifying-glass text-xl"></i>
        <i class="fa-regular fa-heart text-xl"></i>
        <i class="fa-solid fa-cart-flatbed-suitcase text-xl"></i>
    </div>
`;

let header = document.querySelector("header");
header.appendChild(nav);


// Hamburger Logic
let hamburgerIc = document.getElementById("hamburger-ic");
let crossIc = document.getElementById("cross-ic");
let hamburgerIcon = document.querySelector("#hamburger-icon");
let hamburgerBottom = document.querySelector(".hamburger-bottom");

hamburgerIcon.addEventListener("click", function(event) {
    event.target.classList.toggle("active");
    hamburgerIc.classList.toggle("hide-item");
    crossIc.classList.toggle("hide-item");
    hamburgerBottom.classList.toggle("hide-item");
})