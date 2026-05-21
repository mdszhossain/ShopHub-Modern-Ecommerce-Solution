// Navbar Creation
let nav = document.createElement("nav");
nav.classList.add(
    "nav-bar",
    "flex",
    "justify-between",
    "sm:items-center",
    "sm:p-8",
    "md:px-20",
    "bg-[#FFFFFF]",
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
                <i class="fa-solid fa-magnifying-glass text-[#2c2c2c]"></i>
                <i class="fa-regular fa-heart text-[#2c2c2c]"></i>
                <i class="fa-solid fa-cart-flatbed-suitcase text-[#2c2c2c]"></i>
            </div>
        </div>
    </div>
    <div class="nav-right-sm hidden sm:flex sm:gap-5">
        <i class="fa-solid fa-magnifying-glass text-xl text-[#2c2c2c]"></i>
        <i class="fa-regular fa-heart text-xl text-[#2c2c2c]"></i>
        <i class="fa-solid fa-cart-flatbed-suitcase text-xl text-[#2c2c2c]"></i>
    </div>
`;

let header = document.querySelector("header");
header.appendChild(nav);

// Hamburger Logic
let hamburgerIc = document.getElementById("hamburger-ic");
let crossIc = document.getElementById("cross-ic");
let hamburgerIcon = document.querySelector("#hamburger-icon");
let hamburgerBottom = document.querySelector(".hamburger-bottom");

hamburgerIcon.addEventListener("click", function (event) {
    event.target.classList.toggle("active");
    hamburgerIc.classList.toggle("hide-item");
    crossIc.classList.toggle("hide-item");
    hamburgerBottom.classList.toggle("hide-item");
});

// Under Main -> Hero Section Creation
let heroSection = document.createElement("section");
heroSection.classList.add(
    "hero-section",
    "sm:p-8",
    "md:px-20",
    "bg-gradient-to-r",
    "from-[#2563EB]",
    "via-[#6366F1]",
    "to-[#A855F7]",
    "relative",
    "top-20",
    "md:top-25",
    "z-0",
);

heroSection.innerHTML = `
    <h1 class="hero-heading text-3xl text-center font-bold text-[#FFFFFF] pt-20 mb-5 sm:text-left sm:text-4xl md:text-5xl">Welcome to ShopHub</h1>
    <p class="w-10/12 text-center text-[#FFFFFF] m-auto mb-5 sm:text-left sm:ml-0 sm:w-8/12 md:text-xl md:w-9/12 lg:w-6/12 xl:w-4/12">Discover amazing products at unbeatable prices. Shop the latest trends in electronics, fashion, and more.</p>
    <div class="pb-20 flex justify-center sm:justify-start">
        <button class="bg-[#FFFFFF] p-3 rounded-xl text-[#3758FB] font-bold">Shop Now <i class="fa-solid fa-arrow-right"></i></button>
    </div>
`;

let main = document.querySelector("main");
main.appendChild(heroSection);

// Facility Section Creation
let facilitySection = document.createElement("section");
facilitySection.classList.add(
    "facility-section",
    "sm:p-8",
    "md:px-20",
    "relative",
    "top-20",
    "md:top-25",
    "bg-white",
    "flex",
    "flex-wrap",
    "justify-center",
    "lg:justify-between",
    "xl:justify-center",
    "gap-2",
    "py-10",
    "px-5",
);

facilitySection.innerHTML = `
    <div class="flex flex-col items-center gap-2 p-5 h-40 w-60 xl:w-100">
        <div class="facility-icon-box h-15 w-15 rounded-full flex items-center justify-center bg-[#DBEAFE]">
            <i class="fa-solid fa-truck-fast text-[#3758fb] text-xl"></i>
        </div>
        <h2>Free Shipping</h2>
        <p class="text-center">On orders over $50</p>
    </div>

    <div class="flex flex-col items-center gap-2 p-5 h-40 w-60 xl:w-100">
        <div class="facility-icon-box h-15 w-15 rounded-full flex items-center justify-center bg-[#DBEAFE]">
            <i class="fa-solid fa-shield-halved text-[#3758fb] text-xl"></i>
        </div>
        <h2>Secure Payment</h2>
        <p class="text-center">100% secure transactions</p>
    </div>

    <div class="flex flex-col items-center gap-2 p-5 h-40 w-60 xl:w-100">
        <div class="facility-icon-box h-15 w-15 rounded-full flex items-center justify-center bg-[#DBEAFE]">
            <i class="fa-solid fa-wallet text-[#3758fb] text-xl"></i>
        </div>
        <h2>Easy Returns</h2>
        <p class="text-center">30-day return policy</p>
    </div>

    <div class="flex flex-col items-center gap-2 p-5 h-40 w-60 xl:w-100">
        <div class="facility-icon-box h-15 w-15 rounded-full flex items-center justify-center bg-[#DBEAFE]">
            <i class="fa-brands fa-shopify text-[#3758fb] text-xl"></i>
        </div>
        <h2>Quality Products</h2>
        <p class="text-center">Carefully curated items</p>
    </div>
`;

main.appendChild(facilitySection);

// Category Section Creation
let categorySection = document.createElement("section");
categorySection.classList.add(
    "category-section",
    "relative",
    "top-30",
    "sm:p-8",
    "md:px-20",
);

categorySection.innerHTML = `
    <div class="category-title text-center">
        <h2 class="categ-title font-bold text-2xl md:text-3xl mb-3">Shop by Category</h2>
        <p class="categ-desc">Browse our top categories</p>
    </div>

    <div class="categories text-2xl font-bold text-[#FFFFFF] text-center flex flex-wrap sm:justify-center xl:justify-evenly sm:gap-10 mt-10">
        <div id="categ-box1" class="category-box h-50 w-50 xl:h-60 xl:w-60">Electronics</div>
        <div id="categ-box2" class="category-box h-50 w-50 xl:h-60 xl:w-60">Jewelry</div>
        <div id="categ-box3" class="category-box h-50 w-50 xl:h-60 xl:w-60">Mens Clothing</div>
        <div id="categ-box4" class="category-box h-50 w-50 xl:h-60 xl:w-60">Womens Clothing</div>
    </div>
`;

main.appendChild(categorySection);

// Featured Product Section Creation
let featuredProduct = document.createElement("section");
featuredProduct.classList.add(
    "featured-product",
    "relative",
    "top-40",
    "sm:p-8",
    "md:px-20",
    "bg-white",
);
featuredProduct.innerHTML = `
    <div class="featured-text-container flex items-center justify-between pt-5">
        <div class="featured-text">
            <h2 class="featured-text-title font-bold text-2xl md:text-3xl text-center sm:text-left mb-3">Featured Products</h2>
            <p class="featured-text-desc text-center mb-5">Check out our most popular items</p>
        </div>
        <button class="view-all-btn bg-[#155DFB] text-white px-5 py-2 rounded-xl">View All <i class="fa-solid fa-arrow-right"></i></button>
    </div>
`;

main.appendChild(featuredProduct);

// card information fetching

async function featuredCardInfoFetch() {
    try {
        let res = await axios.get("https://fakestoreapi.com/products?limit=8");
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

// Featured Cards Container creation
let featuredCards = document.createElement("div");
featuredCards.classList.add(
    "featured-cards",
    "sm:w-full",
    "grid",
    "gap-10",
    "grid-cols-1",
    "sm:grid-cols-2",
    "lg:grid-cols-3",
    "xl:grid-cols-4",
    "mt-15"
);
featuredProduct.appendChild(featuredCards);

featuredCardInfoFetch().then((data) => {
    let products = data;
    console.log(products);
    for (product of products) {
        let card = document.createElement("div");
        card.classList.add(
            "card",
            "overflow-hidden",
            "bg-[#F7F9FC]",
            "rounded-3xl",
            "shadow-[0_2px_12px_rgba(0,0,0,0.3)]",
            "w-full"
        );
        card.innerHTML = `
            <div class="card-img relative h-80 bg-[#F1F3F5] rounded-t-3xl flex items-center justify-center p-6">
                <img 
                    src="${product.image}" 
                    alt="Fjallraven - Foldsack No. 1 Backpack" 
                    class="h-full w-full object-contain"
                />
                
                <button class="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>

            <div class="card-info-box p-5 bg-white rounded-b-3xl h-full">
                <div class="rate-and-stock text-sm flex items-center gap-1">
                    <i class="fa-solid fa-star text-amber-400 text-gold"></i>
                    <span class="rating font-medium text-gray-900">${product.rating.rate}</span>
                    <span class="stock text-gray-400">(<span class="stock-count">${product.rating.count}</span>)</span>
                </div>
                
                <h3 class="card-title text-lg font-medium mt-3 text-gray-900 line-clamp-1">${product.title}</h3>
                <p class="text-[#6A778E] text-sm mt-1 uppercase">${product.category}</p>
                
                <div class="flex justify-between items-center mt-5">
                    <span class="text-2xl font-bold text-gray-900">$<span class="prod-price">${product.price}</span></span>
                    <button class="add-cart-btn px-5 py-2.5 bg-[#155DFB] hover:bg-[#0c4ad4] text-white font-medium rounded-xl text-sm flex items-center gap-2 transition-colors">
                        <i class="fa-solid fa-cart-shopping"></i> Add
                    </button>
                </div>
            </div>
        `;
        featuredCards.appendChild(card);
    }
});
