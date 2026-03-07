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
        grid.innerHTML = `<div class="col-span-full text-center py-20 text-gray-400">
            ${translations[currentLang]["noProducts"] || "No products found matching your criteria."}
        </div>`;
        return;
    }

    items.forEach((product, index) => {
        let color = product.category === "pad" ? "pink" : "blue";
        const delay = index < 12 ? index * 0.05 : 0;

        // Determine Tooltip based on Language
        const shareTooltip = currentLang === 'ne' ? 'उत्पादन सेयर गर्नुहोस्' : 'Share Product';

        grid.innerHTML += `
            <div class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col animate-pop relative" 
                 style="animation-delay: ${delay}s">
                
                <button onclick="shareProduct('${product.name}')" 
                    title="${shareTooltip}"
                    class="absolute top-4 right-4 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg text-gray-400 hover:text-green-600 transition-all z-10 active:scale-90 group">
                    
                    <i class="fas fa-paper-plane text-[10px] group-hover:-translate-y-px group-hover:translate-x-px transition-transform"></i>
                </button>

                <div class="h-32 bg-gray-50 rounded-xl flex items-center justify-center mb-3">
                    <i class="fas ${product.icon} text-${color}-300 text-5xl"></i>
                </div>
                
                <h4 class="font-bold text-gray-800 text-sm mb-1 line-clamp-1">${product.name}</h4>
                <p class="text-green-700 font-extrabold text-xs mb-3">Rs. ${product.price}</p>
                
                <button 
                    onclick="addToCart(${product.id}, '${product.name}', ${product.price})"
                    class="w-full py-2 bg-gray-900 text-white text-xs rounded-lg font-bold hover:bg-green-600 active:scale-95 transition"
                    data-i18n="addToCart">
                    ${translations[currentLang]["addToCart"]}
                </button>
            </div>`;
    });
}
// Step 1: User clicks card button -> Opens Confirmation Modal
function shareProduct(name) {
    showToast(name, 'share');
}

// Step 2: User clicks "Proceed" in Modal -> Opens actual sharing API
async function executeShare(name) {
    closeModal(); // Remove the modal before opening the share dialog

    const siteUrl = window.location.origin + window.location.pathname;
    const shareText = currentLang === 'ne'
        ? `नमस्ते! मलाई 'Sanitary Nepal' मा यो उत्पादन राम्रो लाग्यो: *${name}*। यहाँ हेर्नुहोस्: ${siteUrl}`
        : `Hi! Check out this product on 'Sanitary Nepal': *${name}*. ${siteUrl}`;

    if (navigator.share) {
        try {
            await navigator.share({ title: 'Sanitary Nepal', text: shareText, url: siteUrl });
        } catch (err) { console.log("Share cancelled"); }
    } else {
        // Desktop Fallback
        navigator.clipboard.writeText(`${shareText}`);
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    }
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
    renderOrderHistory();
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
    // Select the footer container (the div with p-6 and border-t)
    const cartFooter = document.querySelector('#cart-sidebar .p-6.border-t');

    // Reset list
    list.innerHTML = '';
    let total = 0;

    // 1. EMPTY STATE: Friendly "Back to Shop" UI
    if (cart.length === 0) {
        // Hide the footer to prevent it from pushing the content up
        if (cartFooter) cartFooter.classList.add('hidden');
        // Remove scrolling during empty state to lock the image in place
        list.classList.remove('overflow-y-auto');
        list.classList.add('overflow-hidden');
        list.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-center px-6 animate-pop">
                <div class="w-40 h-40 sm:w-48 sm:h-48 mb-6">
                    <img src="empty-shopping-cart.jpg" 
                         alt="Empty Cart" 
                         class="w-full h-full object-contain pointer-events-none opacity-90">
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                    ${translations[currentLang]['cartEmptyTitle'] || "Your cart is empty"}
                </h3>
                <p class="text-gray-500 text-sm mb-8 max-w-[220px]">
                    ${translations[currentLang]['cartEmptyDesc'] || "Looks like you haven't added anything yet. Explore our quality sanitary products!"}
                </p>
                <button onclick="toggleCart()" class="bg-green-600 text-white px-10 py-4 rounded-2xl font-bold active:scale-95 transition shadow-lg">
                    ${translations[currentLang]['startShopping'] || "Start Shopping"}
                </button>
               <div class="mt-10 w-full animate-fade-in-up">
    <div class="flex items-center justify-between mb-4">
        <span class="h-px bg-gray-200 flex-grow"></span>
        <p class="px-3 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Quick Picks</p>
        <span class="h-px bg-gray-200 flex-grow"></span>
    </div>
    
    <div class="flex justify-center gap-4 px-2">
        <button onclick="showShop('pad')" 
                class="group relative flex-1 max-w-[120px] aspect-square bg-pink-50 rounded-3xl p-4 flex flex-col items-center justify-center border-2 border-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-inner group-hover:bg-pink-100 transition-colors">
                <i class="fas fa-leaf text-2xl text-pink-500"></i>
            </div>
            <span class="text-xs font-black text-pink-700 tracking-wide">Pads</span>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>

        <button onclick="showShop('diaper')" 
                class="group relative flex-1 max-w-[120px] aspect-square bg-blue-50 rounded-3xl p-4 flex flex-col items-center justify-center border-2 border-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-inner group-hover:bg-blue-100 transition-colors">
                <i class="fas fa-baby text-2xl text-blue-500"></i>
            </div>
            <span class="text-xs font-black text-blue-700 tracking-wide">Diapers</span>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
    </div>
</div>
            </div>        
        `;
        totalEl.innerText = `Rs. 0`;
        return;
    }
    // IMPORTANT: Show the footer and restore scrolling if there are items
    if (cartFooter) cartFooter.classList.remove('hidden');
    list.classList.add('overflow-y-auto');
    list.classList.remove('overflow-hidden');

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
            <button onclick="showToast('', 'clearCart')" class="text-xs font-bold text-red-400 hover:text-red-600 transition" data-i18n="clearAll">
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
// Function to clear Cart after confirmation
function saveCart() {
    localStorage.setItem('SANITARY_NEPAL_CART', JSON.stringify(cart));
}
function executeClearCart() {
    cart = []; // Empty the global array
    saveCart();
    updateCartUI();
    renderCart(); // Update UI
    closeModal(); // Close the modal
}
// --- Core Functions ---
function updateCartUI() {
    // Calculate total items (sum of quantities)
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-badge');
    const shoppingCart = document.getElementById("shopping-cart-logo");
    if (totalItems > 0) {
        badge.innerText = totalItems;
        badge.classList.remove('hidden');
        shoppingCart.classList.replace('text-red-500','text-green-600');
        shoppingCart.classList.replace('hover:text-green-600','hover:text-yellow-400');
        // Optional: Add a little "pop" animation when the number changes
        badge.classList.add('scale-125');
        setTimeout(() => badge.classList.remove('scale-125'), 200);
    } else {
        badge.classList.add('hidden');
        shoppingCart.classList.replace('text-green-600','text-red-500');
        shoppingCart.classList.replace('hover:text-gold-400','hover:text-green-600');
    }

    // Save to local storage so the cart stays even if they refresh
    saveCart();
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
function renderOrderHistory() {
    const container = document.getElementById('order-history-list');
    const clearBtn = document.getElementById('clear-history-btn'); // Ensure your HTML has this ID
    if (!container) return;

    const orders = JSON.parse(localStorage.getItem('sanitary_nepal_orders')) || [];

    // Toggle "Clear History" button visibility
    if (clearBtn) {
        clearBtn.style.display = orders.length > 0 ? 'block' : 'none';
    }

    if (orders.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-gray-400 text-sm">No recent orders yet.</div>`;
        return;
    }

    // Set grid layout for desktop and mobile
    container.className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-2";

    container.innerHTML = orders.map(order => `
        <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col animate-pop relative h-full">
            <div class="absolute top-4 right-4 flex flex-col items-center gap-3">
                <div class="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                <button onclick="deleteOrder('${order.id}')" class="text-red-400 hover:text-red-600 p-1">
                    <i class="fas fa-trash-alt text-[15px]"></i>
                </button>
            </div>
            <div class="mb-3 pr-6">
                <span class="text-[10px] font-bold text-gray-300 block uppercase tracking-tighter">ID: ${order.id}</span>
                <p class="text-xs font-bold text-gray-800">${order.date}</p>
            </div>
            <div class="flex-grow">
                <p class="text-xs text-gray-500 line-clamp-2 leading-tight mb-3 min-h-[32px]">
                    ${order.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
                </p>
                <p class="text-sm font-black text-green-700 mb-4">Rs. ${order.total}</p>
            </div>
            <button onclick="reorder('${order.id}')" 
                class="w-full py-2.5 bg-gray-900 hover:bg-green-600 text-white text-xs 
                rounded-xl font-bold active:scale-95 transition flex items-center justify-center gap-2" data-i18n="reOrder">
                ${translations[currentLang]['reOrder']}
            </button>
        </div>
    `).join('');
}
function reorder(orderId) {
    // 1. Find the specific order in history
    const orders = JSON.parse(localStorage.getItem('sanitary_nepal_orders')) || [];
    const orderToRepeat = orders.find(o => o.id === orderId);

    if (orderToRepeat) {
        // 2. Replace current cart with these items
        // (Or use cart.push(...orderToRepeat.items) if you'd rather add to existing)
        cart = [...orderToRepeat.items];

        // 3. Update UI and open the cart so they see it worked
        updateCartUI();
        renderCart();
        // if (typeof toggleCart === "function") toggleCart();

        // 4. Show a quick toast
        showToast(translations[currentLang].reorderSuccess || "Cart refilled from history!");
    }
}
// Function to clear Order History after confirmation
function executeClearHistory() {
    localStorage.removeItem('sanitary_nepal_orders');
    renderOrderHistory(); // This will now show the "Empty" state and hide the Clear button
    closeModal(); // Close the modal
}
function deleteOrder(orderId) {
    // 1. Get current orders
    let orders = JSON.parse(localStorage.getItem('sanitary_nepal_orders')) || [];

    // 2. Filter out the one we want to delete
    orders = orders.filter(order => order.id !== orderId);

    // 3. Save back to local storage
    localStorage.setItem('sanitary_nepal_orders', JSON.stringify(orders));

    // 4. Re-render the list immediately
    renderOrderHistory();

    // Call with isDelete = true
    showToast('', 'delete');
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
    saveOrderToHistory(cart, total);
    renderOrderHistory();
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
function showToast(name, type = 'cart') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const existing = document.getElementById('active-modal');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = "active-modal";
    toast.className = "flex items-center justify-center fixed inset-0 z-[120] bg-black/40 backdrop-blur-sm px-4";

    let title, description, icon, iconBg, iconColor, btnColor, btnAction, btnText, secondaryBtn;

    if (type === 'clearCart') {
        title = currentLang === 'ne' ? "कार्ट खाली गर्ने?" : "Clear Cart?";
        description = currentLang === 'ne' ? "के तपाईं आफ्नो कार्टका सबै सामान हटाउन चाहनुहुन्छ?" : "Are you sure you want to remove all items from your cart?";
        icon = "fa-shopping-cart"; iconBg = "bg-orange-100"; iconColor = "text-orange-600";
        btnColor = "bg-orange-600 hover:bg-orange-700";
        btnText = currentLang === 'ne' ? "हो, खाली गर्नुहोस्" : "Yes, Clear All";
        btnAction = "executeClearCart()";
        secondaryBtn = `<button onclick="closeModal()" class="w-full text-gray-400 font-bold py-2 text-sm">${currentLang === 'ne' ? "रद्द गर्नुहोस्" : "Cancel"}</button>`;
    }
    else if (type === 'clearHistory') {
        title = currentLang === 'ne' ? "इतिहास हटाउने?" : "Clear History?";
        description = currentLang === 'ne' ? "के तपाईं आफ्नो सबै अर्डर इतिहास हटाउन चाहनुहुन्छ?" : "This will permanently delete your entire order history.";
        icon = "fa-history"; iconBg = "bg-red-100"; iconColor = "text-red-600";
        btnColor = "bg-red-600 hover:bg-red-700";
        btnText = currentLang === 'ne' ? "हो, हटाउनुहोस्" : "Yes, Delete History";
        btnAction = "executeClearHistory()";
        secondaryBtn = `<button onclick="closeModal()" class="w-full text-gray-400 font-bold py-2 text-sm">${currentLang === 'ne' ? "रद्द गर्नुहोस्" : "Cancel"}</button>`;
    }
    // Define content based on type
    else if (type === 'share') {
        title = currentLang === 'ne' ? "सेयर गर्न तयार?" : "Ready to Share?";
        description = currentLang === 'ne' ? `तपाईं '${name}' को जानकारी सेयर गर्न लाग्नुभएको छ।` : `You are about to share the details for '${name}'.`;
        icon = "fa-paper-plane"; iconBg = "bg-blue-100"; iconColor = "text-blue-600";
        btnColor = "bg-blue-600 hover:bg-blue-700";
        btnText = currentLang === 'ne' ? "अगाडि बढ्नुहोस्" : "Proceed to Share";
        btnAction = `executeShare('${name}')`;
        secondaryBtn = `<button onclick="closeModal()" class="w-full text-gray-400 font-bold py-2 text-sm">${currentLang === 'ne' ? "रद्द गर्नुहोस्" : "Cancel"}</button>`;
    } else if (type === 'delete') {
        title = currentLang === 'ne' ? "अर्डर हटाइयो" : "Order Removed";
        description = currentLang === 'ne' ? "तपाईंको इतिहासबाट अर्डर सफलतापूर्वक हटाइयो।" : "The order has been removed from your history.";
        icon = "fa-trash-alt"; iconBg = "bg-red-100"; iconColor = "text-red-600";
        btnColor = "bg-red-600 hover:bg-red-700";
        btnText = "OK";
        btnAction = "closeModal()";
        secondaryBtn = "";
    } else {
        // Standard Add to Cart
        title = translations[currentLang]['itemAdded'];
        description = `${name} ${translations[currentLang]['itemAddedDesc']}`;
        icon = "fa-shopping-bag"; iconBg = "bg-green-100"; iconColor = "text-green-600";
        btnColor = "bg-green-600 hover:bg-green-700";
        btnText = translations[currentLang]['ok'];
        btnAction = "closeModal()";
        secondaryBtn = `<button onclick="closeModal(); toggleCart();" class="w-full text-green-700 font-semibold py-2 text-sm hover:underline">${translations[currentLang]['viewCart']}</button>`;
    }

    toast.innerHTML = `
        <div class="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-sm w-full animate-pop text-center">
            <div class="w-20 h-20 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas ${icon} text-3xl ${iconColor}"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">${title}</h3>
            <p class="text-gray-500 text-sm mb-8 px-2">${description}</p>
            <div class="flex flex-col gap-3">
                <button onclick="${btnAction}" class="w-full ${btnColor} text-white py-4 rounded-2xl font-bold active:scale-95 transition shadow-lg">
                    ${btnText}
                </button>
                ${secondaryBtn}
            </div>
        </div>
    `;
    container.appendChild(toast);
}
// Function to close the modal
function closeModal() {
    const modal = document.getElementById('active-modal');
    if (modal) {
        modal.remove();
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
function openLoginModal() {
    const existing = document.getElementById('active-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = "active-modal";
    overlay.className = "flex items-center justify-center fixed inset-0 z-[150] bg-black/50 backdrop-blur-sm px-4";

    overlay.innerHTML = `
        <div class="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-pop">
            <div class="bg-green-600 p-6 text-white text-center">
                <h2 class="text-2xl font-black" id="auth-title">Welcome Back</h2>
                <p class="text-green-100 text-sm opacity-80" id="auth-subtitle">Login to sync your orders</p>
            </div>

            <div class="p-8">
                <form id="auth-form" onsubmit="handleAuth(event)">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase mb-1">Email Address</label>
                            <input type="email" required class="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="name@example.com">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase mb-1">Password</label>
                            <input type="password" required class="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="••••••••">
                        </div>
                        <button type="submit" class="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition mt-4">
                            Continue
                        </button>
                    </div>
                </form>

                <p class="text-center text-sm text-gray-500 mt-6">
                    <span id="auth-switch-text">Don't have an account?</span>
                    <button onclick="toggleAuthMode()" class="text-green-600 font-bold hover:underline ml-1" id="auth-switch-btn">Sign Up</button>
                </p>
                
                <button onclick="closeModal()" class="w-full text-gray-400 text-xs mt-4 hover:text-gray-600 transition">Maybe Later</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
}
