const products = [
    {id: 1, name: "FlowFree Ultra Pads", price: 250, category: "pad", icon: "fa-leaf"},
    {id: 2, name: "Comfort Night Pads", price: 300, category: "pad", icon: "fa-moon"},
    {id: 3, name: "Eco-Bamboo Pads", price: 350, category: "pad", icon: "fa-seedling"},
    {id: 4, name: "SoftTouch Diaper (S)", price: 850, category: "diaper", icon: "fa-baby"},
    {id: 5, name: "Premium Dry Pants (M)", price: 1100, category: "diaper", icon: "fa-baby-carriage"},
    {id: 6, name: "Premium Dry Pants (L)", price: 1250, category: "diaper", icon: "fa-baby-carriage"},
    {id: 7, name: "Newborn Gift Pack", price: 2500, category: "diaper", icon: "fa-box-open"},
    {id: 8, name: "Maternity Care Kit", price: 1800, category: "pad", icon: "fa-hand-holding-heart"}
];
let currentCategory = 'all'; // Tracks which category is currently active
// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('SANITARY_NEPAL_CART')) || [];

function renderProducts(category = 'all') {
    currentCategory = category; // Update global state
    const filtered = category === 'all'
        ? products
        : products.filter(p => p.category === category);
    renderFilteredItems(filtered);
}

function renderFilteredItems(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    if (items.length === 0) {
        // Updated to use translation for "No products found" if you have it
        grid.innerHTML = `<div class="col-span-full text-center py-20 text-gray-400">
            ${translations[currentLang]["noProducts"] || "No products found matching your criteria."}
        </div>`;
        return;
    }

    items.forEach((product, index) => {
        // 1. Determine category color
        let color = product.category === "pad" ? "pink" : "blue";
        
        // 2. Calculate animation delay (staggered effect)
        const delay = index < 12 ? index * 0.05 : 0; 

        // 3. Generate the card
        grid.innerHTML += `
            <div class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col animate-pop" 
                 style="animation-delay: ${delay}s">
                <div class="h-32 bg-gray-50 rounded-xl flex items-center justify-center mb-3">
                    <i class="fas ${product.icon} text-${color}-300 text-5xl"></i>
                </div>
                <h4 class="font-bold text-gray-800 text-sm mb-1 line-clamp-1">${product.name}</h4>
                <p class="text-green-700 font-extrabold text-xs mb-3">Rs. ${product.price}</p>
                <button 
                    onclick="addToCart(${product.id}, '${product.name}', ${product.price})"
                    class="w-full py-2 bg-gray-900 text-white text-xs rounded-lg font-bold hover:bg-${color}-600 active:scale-95 transition"
                    data-id="${product.id}" 
                    data-name="${product.name}" 
                    data-price="${product.price}" 
                    data-i18n="addToCart">
                    ${translations[currentLang]["addToCart"]}
                </button>
            </div>`;
    });
}


// 1. Show Shop Function
function showShop(category) {
    document.getElementById('priceSort').selectedIndex = 0;
    document.getElementById('productSearch').value = "";
    currentCategory = category; // Update our tracker
    // 1. Switch to the shop view
    navigateTo('shop-section');
    // 2. Render the correct products
    renderProducts(category);
    // 3. Highlight the correct button
    const btnIds = {'all': 'btn-filter-all', 'pad': 'btn-filter-pad', 'diaper': 'btn-filter-diaper'};

    let color = "green";
    if (category === "pad") color = "pink";
    else if (category === "diaper") color = "blue";

    // Reset all buttons to gray
    Object.values(btnIds).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.replace(`bg-green-600`, `bg-gray-100`);
            el.classList.replace(`bg-pink-600`, `bg-gray-100`);
            el.classList.replace(`bg-blue-600`, `bg-gray-100`);
            el.classList.replace('text-white', 'text-gray-600');
        }
    });

    // Highlight active button to green
    const activeEl = document.getElementById(btnIds[category]);
    if (activeEl) {
        activeEl.classList.replace(`bg-gray-100`, `bg-${color}-600`);
        activeEl.classList.replace('text-gray-600', 'text-white');
    }
}

function goBackHome() {
    // Hide Shop
    document.getElementById('shop-section').classList.add('hidden');

    // Show Hero and Main Landing Categories
    document.querySelector('section.hero-gradient').classList.remove('hidden');
    document.querySelector('section.py-16.container').classList.remove('hidden');

    window.scrollTo(0, 0);
}

// 2. Search Functionality
function searchProducts() {
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();

    // Filter by category first, then by search term
    const filtered = products.filter(p => {
        const matchesCategory = (currentCategory === 'all' || p.category === currentCategory);
        const matchesSearch = p.name.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    renderFilteredItems(filtered);
}

function sortProducts() {
    const sortBy = document.getElementById('priceSort').value;

    if (sortBy === 'default') return;
    let toSort = currentCategory === 'all'
        ? [...products]
        : products.filter(p => p.category === currentCategory);

    if (sortBy === 'low') {
        toSort.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high') {
        toSort.sort((a, b) => b.price - a.price);
    }

    renderFilteredItems(toSort);
}

// 1. Toggle Sidebar Visibility
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    sidebar.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');
    renderCart();
}

// function for redirect to product in cart
function backToShop() {
    showShop("all");
    toggleCart();
}

// 2. Render Cart Items inside the Sidebar
function renderCart() {
    const list = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total-price');
    const freeShippingThreshold = 2000;

    // Reset list
    list.innerHTML = '';
    let total = 0;

    // 1. EMPTY STATE: Friendly "Back to Shop" UI
    if (cart.length === 0) {
        list.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full py-20 text-center px-6">
                <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <i class="fas fa-shopping-basket text-3xl text-gray-300"></i>
                </div>
                <p class="text-gray-500 mb-6 font-medium" data-i18n="emptyCart">${translations[currentLang]['emptyCart']}</p>
                <button onclick="toggleCart(); showShop('all')" 
                    class="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition shadow-md" data-i18n="exploreShop">
                    ${translations[currentLang]['exploreShop']}
                </button>
            </div>
        `;
        totalEl.innerText = `Rs. 0`;
        return;
    }

    // 2. Calculate Total first for the Progress Bar
    cart.forEach(item => total += (item.price * item.quantity));

    // 3. RENDER FREE SHIPPING PROGRESS BAR
    let progressHTML = '';
    if (total < freeShippingThreshold) {
        const remaining = freeShippingThreshold - total;
        const percentage = (total / freeShippingThreshold) * 100;
        progressHTML = `
            <div class="p-2 bg-white border-b ">
                <div class="flex justify-between text-xs font-bold mb-2 uppercase tracking-tight text-gray-500">
                    <span data-i18n="freeShippingGoal">${translations[currentLang]['freeShippingGoal']}</span>
                    Rs. ${remaining} <span data-i18n="toGo"> ${translations[currentLang]['toGo']}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-green-600 h-2 rounded-full transition-all duration-500" style="width: ${percentage}%"></div>
                </div>
            </div>`;
    } else {
        progressHTML = `
            <div class="p-2 bg-green-50 border-b text-center">
                <p class="text-xs font-bold text-green-700 uppercase tracking-widest animate-pulse" data-i18n="freeDelivery">
                    ${translations[currentLang]['freeDelivery']}
                </p>
            </div>`;
    }
    list.innerHTML = progressHTML;
    if (cart.length > 0) {
        const headerHTML = `
        <div class="flex justify-between items-center px-4 py-2 bg-gray-50 border-b">
            <span class="text-xs font-bold text-gray-500 uppercase" >${cart.length} <span data-i18n="items"> ${translations[currentLang]['items']}</span></span>
            <button onclick="clearCart()" class="text-xs font-bold text-red-400 hover:text-red-600 transition" data-i18n="clearAll">
                ${translations[currentLang]['clearAll']}
            </button>
        </div>`;
        list.insertAdjacentHTML('afterbegin', headerHTML);
    }
    // 4. RENDER ITEM LIST
    const itemContainer = document.createElement('div');
    itemContainer.className = "p-4 space-y-4";

    cart.forEach((item, index) => {
        itemContainer.innerHTML += `
            <div class="flex flex-col border-b border-gray-50 pb-4 animate-pop">
                <div class="flex justify-between items-start mb-2">
                    <h5 class="font-bold text-gray-800 leading-tight">${item.name}</h5>
                    <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-600 transition">
                        <i class="fas fa-trash-alt text-sm"></i>
                    </button>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-green-700 font-bold text-sm">Rs. ${item.price * item.quantity}</span>
                    
                    <div class="flex items-center border rounded-lg bg-gray-50 overflow-hidden">
                        <button onclick="changeQuantity(${index}, -1)" class="px-3 py-1 hover:bg-white hover:text-green-600 transition">-</button>
                        <span class="px-3 py-1 font-bold text-xs border-x bg-white">${item.quantity}</span>
                        <button onclick="changeQuantity(${index}, 1)" class="px-3 py-1 hover:bg-white hover:text-green-600 transition">+</button>
                    </div>
                </div>
            </div>`;
    });

    list.appendChild(itemContainer);

    // 5. UPDATE TOTAL PRICE
    totalEl.innerText = `Rs. ${total}`;
}

function changeQuantity(index, delta) {
    // Update the quantity
    cart[index].quantity += delta;

    // If quantity drops to 0, remove the item entirely
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        // Save and refresh the UI
        updateCartUI();
        renderCart();
    }
}

function clearCart() {
    if (confirm("Are you sure you want to remove all items from your cart?")) {
        cart = []; // Reset the array to empty
        updateCartUI(); // Reset the red badge in the header
        renderCart();   // Re-draw the cart (shows the empty state screen)
    }
}

// --- Core Functions ---

function updateCartUI() {
    // Calculate total items (sum of quantities)
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-badge');

    if (totalItems > 0) {
        badge.innerText = totalItems;
        badge.classList.remove('hidden');

        // Optional: Add a little "pop" animation when the number changes
        badge.classList.add('scale-125');
        setTimeout(() => badge.classList.remove('scale-125'), 200);
    } else {
        badge.classList.add('hidden');
    }

    // Save to local storage so the cart stays even if they refresh
    localStorage.setItem('SANITARY_NEPAL_CART', JSON.stringify(cart));
    // console.log("Current Cart:", cart);
}

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        // console.log ("inside addToCart >>>"+existingItem);
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id, name: name, price: parseInt(price), quantity: 1
        });
    }

    updateCartUI();

    // Quick visual feedback
    showToast(name);
    // alert(`${name} added to cart!`);
}

// --- Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    // Initial UI update
    updateCartUI();

    // Listen for clicks on any "Add to Cart" button
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const btn = e.target;
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            const price = btn.getAttribute('data-price');

            addToCart(id, name, price);
        }
    });
});

// 3. Remove Item
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI(); // This is the old function that saves to localStorage
    renderCart();
}

function saveOrderToHistory(cartItems, total) {
    // 1. Get existing orders or start a new list
    let orders = JSON.parse(localStorage.getItem('sanitary_nepal_orders')) || [];

    // 2. Create the new order object
    const newOrder = {
        id: 'SN-' + Math.floor(Math.random() * 100000), // Random Order ID
        date: new Date().toLocaleDateString(),
        items: [...cartItems],
        total: total,
        status: 'Sent via WhatsApp' // Initial status
    };

    // 3. Add to the beginning of the list and keep only the last 5
    orders.unshift(newOrder);
    orders = orders.slice(0, 5);

    // 4. Save back to local storage
    localStorage.setItem('sanitary_nepal_orders', JSON.stringify(orders));
}

// 4. Order via WhatsApp
function checkoutWhatsApp() {
    if (cart.length === 0) return alert("Cart is empty!");
// Get the instructions from the textarea
    const notes = document.getElementById('cart-notes').value.trim();

    let message = "Hello Sanitary Nepal! I would like to order:\n\n";
    let total = 0;

    cart.forEach(item => {
        message += `• ${item.name} (Qty: ${item.quantity}) - Rs.${item.price * item.quantity}\n`;
        total += item.price * item.quantity;
    });

    message += "---------------------------------------\n";
    message += `*Total Amount: Rs. ${total}*\n\n`;

    if (notes) {
        message += `*Delivery Instructions:* ${notes}\n\n`;
    }
    message += "Please confirm availability and delivery time.";
    // Replace with your actual business number
    const phoneNumber = "9779858070017";
    // save order history locally
    saveOrderToHistory(cart,total);
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Ensure the header cart icon triggers the sidebar
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.fa-shopping-cart');
    if (cartIcon) {
        cartIcon.parentElement.onclick = (e) => {
            e.preventDefault();
            toggleCart();
        };
    }
});

function showToast(name) {
    // 1. Create Overlay
    const overlay = document.createElement('div');
    overlay.className = "modal-overlay";
    overlay.id = "active-modal";

    // 2. Create Modal Content
    overlay.innerHTML = `
        <div class="success-modal">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-shopping-bag text-3xl text-green-600"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-1" data-i18n="itemAdded">${translations[currentLang]['itemAdded']}</h3>
            <p class="text-gray-500 mb-6" data-i18n="itemAddedDesc">${name} ${translations[currentLang]['itemAddedDesc']}</p>
            
            <div class="flex flex-col gap-2">
                <button onclick="closeModal()" class="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition active:scale-95" data-i18n="ok">
                    ${translations[currentLang]['ok']}
                </button>
                <button onclick="closeModal(); toggleCart();" class="w-full text-green-700 font-semibold py-2 text-sm hover:underline" data-i18n="viewCart">
                    ${translations[currentLang]['viewCart']}
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('active-modal');
    if (modal) {
        modal.style.opacity = "0";
        modal.style.transition = "opacity 0.2s ease";
        setTimeout(() => modal.remove(), 200);
    }
}

function navigateTo(sectionId) {
    // 1. List all possible sections on your site
    const allSections = ['hero-section', 'category-cards', 'shop-section', 'about-section', 'contact-section', 'faq-section', 'featured-slider', 'testimonials-section'];

    // 2. Hide EVERY section first to clear the screen
    allSections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    // 3. Show the specific content based on the link clicked
    if (sectionId === 'home') {
        document.getElementById('hero-section').classList.remove('hidden');
        document.getElementById('category-cards').classList.remove('hidden');
        document.getElementById('featured-slider').classList.remove('hidden');
        document.getElementById('testimonials-section').classList.remove('hidden');
        window.scrollTo(0, 0);
    } else if (sectionId === 'shop-section') {
        document.getElementById('shop-section').classList.remove('hidden');
        document.getElementById('featured-slider').classList.remove('hidden');
    } else {
        // Other pages (Shop, About, Contact) only need ONE section
        const target = document.getElementById(sectionId);
        if (target) target.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
}

function toggleFAQ(id) {
    const content = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

function scrollSlider(direction) {
    const container = document.getElementById('slider-container');
    const scrollAmount = 300; // Adjust based on card width
    container.scrollBy({
        left: direction * scrollAmount, behavior: 'smooth'
    });
}

// Function to scroll smoothly to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-menu-sidebar');
    const overlay = document.getElementById('mobile-menu-overlay');

    // Slide animation
    sidebar.classList.toggle('-translate-x-full');
    // Fade overlay
    overlay.classList.toggle('hidden');

    // Prevent body scroll when menu is open
    if (!sidebar.classList.contains('-translate-x-full')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Show/Hide button based on scroll position
window.onscroll = function () {
    const btn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btn.classList.remove('opacity-0', 'translate-y-10');
        btn.classList.add('opacity-100', 'translate-y-0');
    } else {
        btn.classList.add('opacity-0', 'translate-y-10');
        btn.classList.remove('opacity-100', 'translate-y-0');
    }
};

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing after it's revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    // Attach to all elements with the .reveal class
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Run this when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initScrollReveal);

