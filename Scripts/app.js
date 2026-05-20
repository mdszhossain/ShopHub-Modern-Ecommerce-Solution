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