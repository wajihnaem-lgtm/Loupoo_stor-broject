let searchInput = document.querySelector("#search-input");
let filterButtons = document.querySelectorAll(".filter-btn");
let productCards = document.querySelectorAll(".product-card");
let emptyState = document.querySelector("#empty-state");

let activeFilter = "all";

function updateVisibility() {
    let searchTerm = searchInput.value.toLowerCase();
    let visibleCount = 0;

    productCards.forEach((card) => {
        let name = card.getAttribute("data-name").toLowerCase();
        let category = card.getAttribute("data-category");

        let matchesFilter = (activeFilter === "all" || category === activeFilter);
        let matchesSearch = name.includes(searchTerm);

        if (matchesFilter && matchesSearch) {
            card.classList.remove("is-hidden");
            visibleCount = visibleCount + 1;
        } else {
            card.classList.add("is-hidden");
        }
    });

    if (visibleCount === 0) {
        emptyState.classList.add("is-visible");
    } else {
        emptyState.classList.remove("is-visible");
    }
}

searchInput.addEventListener("input", () => {
    updateVisibility();
});

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("is-active"));
        button.classList.add("is-active");
        activeFilter = button.getAttribute("data-filter");
        updateVisibility();
    });
});


let cart = [];

let addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
let cartBtn = document.querySelector("#cart-btn");
let cartCountSpan = document.querySelector("#cart-count");
let cartDrawer = document.querySelector("#cart-drawer");
let cartOverlay = document.querySelector("#cart-overlay");
let cartClose = document.querySelector("#cart-close");
let cartItemsEl = document.querySelector("#cart-items");
let cartEmptyMsg = document.querySelector("#cart-empty");
let cartTotalEl = document.querySelector("#cart-total");
let checkoutBtn = document.querySelector("#checkout-btn");

function addToCart(name, price) {
    console.log(name + "تمت إضافته للسلة!");
    let existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
        existingItem.qty = existingItem.qty + 1;
    } else {
        cart.push({ name: name, price: price, qty: 1 });
    }

    renderCart();
    openCart();
}


function changeQty(name, delta) {
    let item = cart.find((item) => item.name === name);
    if (!item) return;

    item.qty = item.qty + delta;

    if (item.qty <= 0) {
        cart = cart.filter((item) => item.name !== name);
    }

    renderCart();
}


function renderCart() {
    let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountSpan.textContent = totalItems;

    let totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    cartTotalEl.textContent = totalPrice + " جنيه";

    if (cart.length === 0) {
        cartEmptyMsg.classList.add("is-visible");
    } else {
        cartEmptyMsg.classList.remove("is-visible");
    }

    cartItemsEl.innerHTML = cart.map((item) => `
        <div class="cart-item">
            <div>
                <p class="cart-item__name">${item.name}</p>
                <p class="cart-item__price">${item.price} جنيه للقطعة</p>
            </div>
            <div class="cart-item__qty">
                <button data-name="${item.name}" data-delta="-1">-</button>
                <span>${item.qty}</span>
                <button data-name="${item.name}" data-delta="1">+</button>
            </div>
        </div>
    `).join("");

    cartItemsEl.querySelectorAll(".cart-item__qty button").forEach((button) => {
        button.addEventListener("click", () => {
            let name = button.getAttribute("data-name");
            let delta = Number(button.getAttribute("data-delta"));
            changeQty(name, delta);
        });
    });
}

 function openCart() {
    cartDrawer.classList.add("is-open");
    cartOverlay.classList.add("is-open");
}

function closeCart() {
    cartDrawer.classList.remove("is-open");
    cartOverlay.classList.remove("is-open");
}

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let name = button.getAttribute("data-name");
        let price = Number(button.getAttribute("data-price"));
        addToCart(name, price);
    });
});

cartBtn.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("السلة فاضية!");
        return;
    }
    alert("تم استلام طلبك، هنتواصل معاك قريب!");
    cart = [];
    renderCart();
    closeCart();
});

renderCart();