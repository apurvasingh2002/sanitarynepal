const products = [
    {
        id: '1',
        name: "Womzy 320 MM Ultra Thin",
        price: 399,
        discountedPrice: 249,
        qty: 30,
        size: "XXL",
        descTitle: "WOMZY Advanced Korean Technology Pads",
        desc: "Powered by advanced Nano Technology, these pads feature Nano Bio Quantum Technology along with Nano Silver Technology, " +
            "carefully developed to support a soothing and refreshing experience during painful periods. The innovative nano-layer works alongside " +
            "the absorbent core to provide enhanced dryness, improved freshness, and a clean, comfortable feel that lasts for hours.\n" +
            "WOMZY Pain Relief Pads are created for women who want premium care, gentle softness, and added support during period discomfort so " +
            "you can move freely, rest better, and feel confident every day of your cycle.",
        category: "pad",
        icon: "fa-leaf",
        type: "featured",
        tagLine: "Pain Relief Pads",
        fileName: "pad-painrelief-xxl-30p.jpg"
    },
    {
        id: '2',
        name: "WOMZY Sanitary Pads – Dry Gel Technology",
        price: 349,
        discountedPrice: 199,
        qty: 30,
        size: "XXL",
        descTitle: "WOMZY Sanitary Pads – Dry Gel Technology",
        desc: "Designed for heavy‑flow days and overnight comfort, these WOMZY Pads combine high-capacity absorbent layers, " +
            "odour control protection, and ultra‑soft materials to keep you dry, calm, and confident for long hours. Breathable surfaces " +
            "and leak guard channels provide secure coverage while remaining gentle on sensitive skin so that you can rest easy, all night long.",
        category: "pad",
        icon: "fa-leaf",
        type: "general",
        tagLine: "",
        fileName: "pad-drygel-xxl-30p.jpg"
    },
    {
        id: '3',
        name: "WOMZY Sanitary Pads – Dry Gel Technology",
        price: 329,
        discountedPrice: 179,
        qty: 30,
        size: "XL",
        descTitle: "WOMZY Sanitary Pads – Dry Gel Technology",
        desc: "Powered with Dry Gel absorption technology and WOMZY’s comfort layers, these maxi‑thick pads are designed for strong day and night protection. " +
            "They lock in flow quickly, keep you feeling fresh and confident, and provide long-lasting dryness even on heavy days. Soft, skin‑friendly " +
            "materials ensure comfort while offering up to 100% protection so you can move freely and stay worry free throughout your cycle.",
        category: "pad",
        icon: "fa-seedling",
        type: "general",
        tagLine: "",
        fileName: "pad-drygel-xl-30p.jpg"
    },
    {
        id: '4',
        name: "Womzy 320 MM Ultra Thin",
        price: 80,
        discountedPrice: 50,
        qty: 6,
        size: "XXL",
        descTitle: "WOMZY Advanced Korean Technology Pads",
        desc: "Powered by advanced Nano Technology, these pads feature Nano Bio Quantum Technology along with Nano Silver Technology, " +
            "carefully developed to support a soothing and refreshing experience during painful periods. The innovative nano-layer works alongside " +
            "the absorbent core to provide enhanced dryness, improved freshness, and a clean, comfortable feel that lasts for hours.\n" +
            "WOMZY Pain Relief Pads are created for women who want premium care, gentle softness, and added support during period discomfort so " +
            "you can move freely, rest better, and feel confident every day of your cycle.",
        category: "pad",
        icon: "fa-leaf",
        type: "general",
        tagLine: "",
        fileName: "pad-painrelief-xxl-6p.jpg"
    },
    {
        id: '5',
        name: "Womzy 280 MM Straight Fit",
        price: 30,
        discountedPrice: 25,
        qty: 6,
        size: "XL",
        descTitle: "Extra Long Regular Maxi",
        desc: "",
        category: "pad",
        icon: "fa-leaf",
        type: "general",
        tagLine: "",
        fileName: "pad-straightFit-xl-6p.jpg"
    },
    {
        id: '6',
        name: "Womzy Maxi Cottony Jumbo Sanitary Pads",
        price: 399,
        discountedPrice: 299,
        qty: 40,
        size: "XXXL",
        descTitle: "Maxi Cottony Jumbo Sanitary Pads With Advance Dry Gel Technology",
        desc: "",
        category: "pad",
        icon: "fa-leaf",
        type: "general",
        tagLine: "",
        fileName: "pad-maxi-cottony-jumbo-xxxl-40p.jpg"
    },
    {
        id: '7',
        name: "Womzy Maxi Cottony Jumbo Sanitary Pads",
        price: 349,
        discountedPrice: 199,
        qty: 40,
        size: "XXL",
        descTitle: "Maxi Cottony Jumbo Sanitary Pads With Advance Dry Gel Technology",
        desc: "",
        category: "pad",
        icon: "fa-box-open",
        type: "general",
        tagLine: "",
        fileName: "pad-maxi-cottony-jumbo-xxl-40p.jpg"
    },
    {
        id: '8',
        name: "Womzy Period Panties",
        price: 1800,
        discountedPrice: 1500,
        qty: 10,
        size: "XL",
        descTitle: "WOMZY Period Panties Leak-Proof Comfort & Hygiene",
        desc: "Experience confidence, comfort, and hygiene with WOMZY Period Panties, designed for modern women. " +
            "Crafted with soft, breathable fabric and advanced leak-proof layers, these panties provide full coverage " +
            "and protection during your period, keeping you fresh and dry for hours.",
        category: "pad",
        icon: "fa-hand-holding-heart",
        type: "featured",
        tagLine: "New Arrival",
        fileName: "disposable-periodpanty-10p.jpg"
    },
    {
        id: "9",
        name: "Junior Bunny Ultra Classic Baby Diaper",
        price: 249,
        discountedPrice: 149,
        qty: 20,
        size: "NB",
        descTitle: "Ultra Classic Baby Diaper With Pull Up Pant And Anti Rash Protection",
        desc: "",
        category: "diaper",
        icon: "fa-hand-holding-heart",
        type: "general",
        tagLine: "",
        fileName: "diaper-junior-bunny-front.jpg"
    },
    {
        id: "10",
        name: "Junior Bunny Ultra Classic Baby Diaper",
        price: 249,
        discountedPrice: 149,
        qty: 20,
        size: "S",
        descTitle: "Ultra Classic Baby Diaper With Pull Up Pant And Anti Rash Protection",
        desc: "",
        category: "diaper",
        icon: "fa-hand-holding-heart",
        type: "general",
        tagLine: "",
        fileName: "diaper-junior-bunny-front.jpg"
    },
    {
        id: "11",
        name: "Junior Bunny Ultra Classic Baby Diaper",
        price: 249,
        discountedPrice: 149,
        qty: 20,
        size: "M",
        descTitle: "Ultra Classic Baby Diaper With Pull Up Pant And Anti Rash Protection",
        desc: "",
        category: "diaper",
        icon: "fa-hand-holding-heart",
        type: "general",
        tagLine: "",
        fileName: "diaper-junior-bunny-front.jpg"
    },
    {
        id: "12",
        name: "Junior Bunny Ultra Classic Baby Diaper",
        price: 299,
        discountedPrice: 199,
        qty: 20,
        size: "L",
        descTitle: "Ultra Classic Baby Diaper With Pull Up Pant And Anti Rash Protection",
        desc: "",
        category: "diaper",
        icon: "fa-hand-holding-heart",
        type: "general",
        tagLine: "",
        fileName: "diaper-junior-bunny-front.jpg"
    },
    {
        id: "13",
        name: "Junior Bunny Ultra Classic Baby Diaper",
        price: 299,
        discountedPrice: 199,
        qty: 20,
        size: "XL",
        descTitle: "Ultra Classic Baby Diaper With Pull Up Pant And Anti Rash Protection",
        desc: "",
        category: "diaper",
        icon: "fa-hand-holding-heart",
        type: "general",
        tagLine: "",
        fileName: "diaper-junior-bunny-front.jpg"
    }
    ,
    {
        id: "14",
        name: "Junior Bunny Ultra Classic Baby Diaper",
        price: 299,
        discountedPrice: 199,
        qty: 20,
        size: "XXL",
        descTitle: "Ultra Classic Baby Diaper With Pull Up Pant And Anti Rash Protection",
        desc: "",
        category: "diaper",
        icon: "fa-hand-holding-heart",
        type: "featured",
        tagLine: "Best Seller",
        fileName: "diaper-junior-bunny-front.jpg"
    }
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
                    <div class="animate-pop w-full h-full" style="animation-delay: ${delay}s">    
                        <div class="group bg-white rounded-2xl p-1 border border-gray-100 shadow-sm
                            hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 
                            hover:border-grey-500/30 flex flex-col relative h-full cursor-pointer overflow-hidden">          
                            <button onclick="shareProduct('${product.name}')" 
                                class="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center 
                                    justify-center shadow-md text-gray-400 hover:text-${color}-600 transition-all z-20 active:scale-110">
                                <i class="fas fa-paper-plane text-[10px]"></i>
                            </button>
                            <span class="absolute top-2 left-4 w-8 h-8 bg-white rounded-2xl flex items-center 
                                    justify-center shadow-md text-${color}-600 z-20 text-[11px]">${product.size}</span>
                            <div class="relative h-40 sm:h-56 w-full flex items-center justify-center overflow-hidden">
                                <img src="${product.fileName}"
                                    alt="${product.name}"
                                    class="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-700">
                            </div>
                            <div class="flex-grow flex flex-col justify-between text-left p-1">
                                <div>
                                    <h4 class="font-bold text-[13px] sm:text-sm text-gray-800 leading-snug group-hover:text-${color}-600 transition-colors line-clamp-2">
                                        ${product.name} ${product.qty} Pieces
                                    </h4>
                                    <div class="flex items-center gap-2 ">
                                        <span class="text-gray-600 font-black text-sm sm:text-base">Rs. ${product.price}</span>                        
                                    </div>
                                </div>
                            <div class="mt-1 pt-1 border-t border-gray-50">
                                <button 
                                    onclick="animateAddToCart(this,'${product.id}')" id="addToCartBtn-${product.id}"
                                    class="w-full py-2.5 bg-${color}-50 text-${color}-600 rounded-lg text-[12px] sm:text-xs font-black 
                                    hover:bg-${color}-600 hover:text-white active:scale-95 transition-all flex items-center justify-center gap-2">
                                    <i class="fas fa-cart-plus"></i>
                                    <span>${translations[currentLang]["addToCart"]}</span>                    
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
    });
    checkCartStatusOnLoading();
}

function renderFeaturedItems() {
    let container = document.getElementById("slider-container");
    container.innerHTML = "";

    products.forEach((product, index) => {
        if (product.type === "featured") {
            const delay = index < 12 ? index * 0.05 : 0;
            let color = product.category === "pad" ? "pink" : "blue";
            container.innerHTML += `
                <div class="group min-w-[300px] max-w-[320px] snap-start bg-white flex flex-col relative h-full">
                    <div class="animate-pop" style="animation-delay: ${delay}s">
                        <div class="group bg-white rounded-xl p-4 border border-${color}-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 
                                transition-all duration-500 hover:border-${color}-500/30 flex flex-col relative h-full cursor-pointer">
                            <div class="absolute top-0 left-0 bg-${color}-500 text-white text-[9px] font-black px-3 py-1 rounded-br-lg rounded-tl-xl z-10 shadow-sm">
                            ${product.tagLine}
                            </div>
                            <button onclick="shareProduct('${product.name}')" 
                                class="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center 
                                    justify-center shadow-md text-gray-400 hover:text-${color}-600 transition-all z-20 active:scale-110">
                                <i class="fas fa-paper-plane text-[10px]"></i>
                            </button>
                            <span class="absolute top-8 left-4 w-8 h-8 bg-white rounded-2xl flex items-center 
                                    justify-center shadow-md text-${color}-600 z-20 text-[11px]">${product.size}</span>
                            <div class="relative mt-1 h-56 w-full mb-1 flex items-center justify-center overflow-hidden ">
                                <img src="${product.fileName}" alt="${product.descTitle}"
                                class="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500">
                            </div>
                            <div class="flex-grow flex flex-col justify-between">
                                <div>
                                    <h4 class="font-bold text-sm text-gray-800 leading-snug group-hover:text-green-600 transition-colors">
                                        ${product.name} (${product.size}) ${product.qty} pieces
                                    </h4>
                                    <div class="flex items-center gap-2">
                                        <span class="text-${color}-600 font-black text-base">Rs. ${product.price}</span>
                                    </div>
                                </div>
                                <div class="pt-3 border-t border-gray-50 flex items-center justify-between">
                                    <button onclick="animateAddToCart(this, '${product.id}')" id="addToCartBtn-${product.id}"
                                        class="flex-1 py-2 bg-${color}-50 text-${color}-600 rounded-lg text-xs font-black hover:bg-${color}-600 
                                                hover:text-white active:scale-95 transition-all flex items-center justify-center gap-2">                                        
                                        <i class="fas fa-cart-plus"></i><span>${translations[currentLang]["addToCart"]}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
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
            await navigator.share({title: 'Sanitary Nepal', text: shareText, url: siteUrl});
        } catch (err) {
            console.log("Share cancelled");
        }
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
                    <img src="empty-shopping-cart.jpg" alt="Empty Cart" 
                         class="w-full h-full object-contain pointer-events-none opacity-90">
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                    ${translations[currentLang]['cartEmptyTitle'] || "Your cart is empty"}
                </h3>
                <p class="text-gray-500 text-sm mb-8 max-w-[220px]">
                    ${translations[currentLang]['cartEmptyDesc'] || "Looks like you haven't added anything yet. Explore our quality sanitary products!"}
                </p>
                <button onclick="toggleCart();showShop('all')" class="bg-green-600 text-white px-10 py-4 rounded-2xl font-bold active:scale-95 transition shadow-lg">
                    ${translations[currentLang]['startShopping'] || "Start Shopping"}
                </button>
                <div class="mt-10 w-full animate-fade-in-up">
                    <div class="flex items-center justify-between mb-4">
                        <span class="h-px bg-gray-200 flex-grow"></span>
                        <p class="px-3 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">${translations[currentLang]["quickPicks"]}</p>
                        <span class="h-px bg-gray-200 flex-grow"></span>
                    </div>  
                    <div class="flex justify-center gap-4 px-2">
                        <button onclick="toggleCart();showShop('pad')" 
                            class="group relative flex-1 max-w-[120px] aspect-square bg-pink-50 rounded-3xl p-4 flex flex-col 
                                items-center justify-center border-2 border-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-inner group-hover:bg-pink-100 transition-colors">
                                <i class="fas fa-leaf text-2xl text-pink-500"></i>
                            </div>
                            <span class="text-xs font-black text-pink-700 tracking-wide">${translations[currentLang]["pads"]}</span>
                           <div class="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                        <button onclick="toggleCart();showShop('diaper')" 
                            class="group relative flex-1 max-w-[120px] aspect-square bg-blue-50 rounded-3xl p-4 flex flex-col items-center justify-center border-2 border-white 
                                shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-inner group-hover:bg-blue-100 transition-colors">
                                <i class="fas fa-baby text-2xl text-blue-500"></i>
                            </div>
                            <span class="text-xs font-black text-blue-700 tracking-wide">${translations[currentLang]["diapers"]}</span>
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

function animateAddToCart(button, productId) {
    // 1. Prevent double clicks
    if (button.classList.contains('processing')) return;
    toggleCartStatus(button);
    // 4. Call your actual cart logic
    products.filter(product => {
        if (product.id === productId) addToCart(productId, product.name, product.price);
    })
}

function toggleCartStatus(button) {
    if (button) {
        button.classList.add('processing');
        // 2. Visual Feedback (Change color and text)
        const originalContent = button.innerHTML;
        button.innerHTML = `<i class="fas fa-check"></i> <span>${translations[currentLang]["addedToCart"]}</span>`;
        button.classList.replace('bg-gray-900', 'bg-green-600');
        let color = button.classList.item(2).split("-")[1];
        button.classList.replace('bg-' + color + '-50', 'bg-' + color + '-600');
        button.classList.replace('text-' + color + '-600', 'text-white');
        button.classList.replace('hover:bg-' + color + '-600', 'hover:bg-' + color + '-50');
        button.classList.replace('hover:text-white', 'hover:text-' + color + '-600');
        // 3. Trigger a "Bounce" animation
        button.classList.add('animate-bounce-short');
    }
}

function resetAddToCartBtn(button) {
    if (button) {
        button.innerHTML = `<i class="fas fa-cart-plus"></i><span>${translations[currentLang]["addToCart"]}</span>`;
        button.classList.replace('bg-green-600', 'bg-gray-900');
        let color = button.classList.item(2).split("-")[1];
        button.classList.replace('bg-' + color + '-600', 'bg-' + color + '-50');
        button.classList.replace('text-white', 'text-' + color + '-600');
        button.classList.replace('hover:bg-' + color + '-50', 'hover:bg-' + color + '-600');
        button.classList.replace('hover:text-' + color + '-600', 'hover:text-white');
        button.classList.remove('processing', 'animate-bounce-short');
    }
}

function resetAllAddToCartBtn() {
    if (cart.length > 0)
        cart.filter(item => {
            resetAddToCartBtn(document.getElementById("addToCartBtn-" + item.id))
        });
}

function scrollFeaturedProducts(direction) {
    const container = document.getElementById('slider-container');
    const scrollAmount = 320; // Roughly the width of one card + gap
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function scrollTestimonials(direction) {
    const container = document.getElementById('testimonial-container');
    // On mobile we scroll almost the full width, on desktop we scroll a fixed amount
    const scrollAmount = window.innerWidth < 768 ? container.clientWidth * 0.8 : 420;

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function handleNavClick(element, target, isShop = false) {
    // 1. "Policing" - Reset all links to their inactive state
    document.querySelectorAll('.nav-link').forEach(link => {
        // Reset text color
        link.classList.remove('text-green-600');
        link.classList.add('text-gray-600');

        // Reset underline width
        const underline = link.querySelector('.active-underline');
        if (underline) {
            underline.style.width = '0';
        }
    });

    // 2. Activate the clicked link
    element.classList.add('text-green-600');
    element.classList.remove('text-gray-600');

    // Lock the underline to 100%
    const activeUnderline = element.querySelector('.active-underline');
    if (activeUnderline) {
        activeUnderline.style.width = '100%';
    }

    // 3. Navigation Actions
    if (isShop) {
        showShop(target);
    } else {
        navigateTo(target);
    }
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
    resetAllAddToCartBtn();
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
        shoppingCart.classList.replace('text-red-500', 'text-green-600');
        shoppingCart.classList.replace('hover:text-green-600', 'hover:text-yellow-400');
        // Optional: Add a little "pop" animation when the number changes
        badge.classList.add('scale-125');
        setTimeout(() => badge.classList.remove('scale-125'), 200);
    } else {
        badge.classList.add('hidden');
        shoppingCart.classList.replace('text-green-600', 'text-red-500');
        shoppingCart.classList.replace('hover:text-gold-400', 'hover:text-green-600');
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
    resetAddToCartBtn(document.getElementById("addToCartBtn-" + cart[index].id));
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
    container.className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-1 py-1";

    container.innerHTML = orders.map(order => `
        <div class="animate-pop w-full sm:min-w-[240px] sm:max-w-[280px] snap-start h-full p-1" style="animation-delay: 0.5s">    
            <div class="group bg-white rounded-2xl p-2 md:p-4 border border-gray-200 shadow-sm
                hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 
                hover:border-gray-300 flex flex-col relative h-full cursor-pointer overflow-hidden">          
        
                <div class="absolute top-4 right-4 flex flex-col items-center gap-3 z-10">
                    <div class="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.5)]" title="Delivered"></div>
                    <button onclick="deleteOrder('${order.id}')" class="text-red-300 hover:text-red-600 transition-colors p-1">
                    <i class="fas fa-trash-alt text-[14px]"></i>
                        </button>
                </div>
                <div class="mb-1 pr-2">
                    <span class="text-[10px] font-bold text-gray-400 block uppercase tracking-widest">ID: ${order.id}</span>
                        <p class="text-sm font-black text-gray-800 mt-0.5">${order.date}</p>
                </div>
                <div class="flex-grow">
                    <div class="bg-gray-50/50 rounded-xl p-2 mb-1">
                        <p class="text-[11px] sm:text-xs text-gray-500 line-clamp-2 leading-relaxed min-h-[32px]">
                            ${order.items.map(item => `<span class="font-bold text-gray-700">${item.quantity}x</span> ${item.name}`).join(', ')}
                        </p>
                    </div>
                        <p class="text-base font-black text-green-700">Rs. ${order.total}</p>
                </div>
                <div class="mt-1 pt-1 border-t border-gray-50">
                    <button onclick="reorder('${order.id}')" id="reorderToCartBtn-${order.id}"
                        class="w-full py-2.5 bg-gray-900 hover:bg-green-600 text-white text-[11px] sm:text-xs 
                        rounded-xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg">                
                        <span>${translations[currentLang]["reOrder"]}</span>
                   </button>
                </div>
            </div>
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
        if (cart.length > 0)
            orderToRepeat.items.forEach(item => {
                const existingItem = cart.find(c => c.id === item.id);
                if (existingItem)
                    console.log(existingItem.id);
                else
                    cart.push(item);
            });
        else
            cart = [...orderToRepeat.items];
        orderToRepeat.items.forEach(item => {
            toggleCartStatus(document.getElementById("addToCartBtn-" + item.id));
        });
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
        icon = "fa-shopping-cart";
        iconBg = "bg-orange-100";
        iconColor = "text-orange-600";
        btnColor = "bg-orange-600 hover:bg-orange-700";
        btnText = currentLang === 'ne' ? "हो, खाली गर्नुहोस्" : "Yes, Clear All";
        btnAction = "executeClearCart()";
        secondaryBtn = `<button onclick="closeModal()" class="w-full text-gray-400 font-bold py-2 text-sm">${currentLang === 'ne' ? "रद्द गर्नुहोस्" : "Cancel"}</button>`;
    } else if (type === 'clearHistory') {
        title = currentLang === 'ne' ? "इतिहास हटाउने?" : "Clear History?";
        description = currentLang === 'ne' ? "के तपाईं आफ्नो सबै अर्डर इतिहास हटाउन चाहनुहुन्छ?" : "This will permanently delete your entire order history.";
        icon = "fa-history";
        iconBg = "bg-red-100";
        iconColor = "text-red-600";
        btnColor = "bg-red-600 hover:bg-red-700";
        btnText = currentLang === 'ne' ? "हो, हटाउनुहोस्" : "Yes, Delete History";
        btnAction = "executeClearHistory()";
        secondaryBtn = `<button onclick="closeModal()" class="w-full text-gray-400 font-bold py-2 text-sm">${currentLang === 'ne' ? "रद्द गर्नुहोस्" : "Cancel"}</button>`;
    }
    // Define content based on type
    else if (type === 'share') {
        title = currentLang === 'ne' ? "सेयर गर्न तयार?" : "Ready to Share?";
        description = currentLang === 'ne' ? `तपाईं '${name}' को जानकारी सेयर गर्न लाग्नुभएको छ।` : `You are about to share the details for '${name}'.`;
        icon = "fa-paper-plane";
        iconBg = "bg-blue-100";
        iconColor = "text-blue-600";
        btnColor = "bg-blue-600 hover:bg-blue-700";
        btnText = currentLang === 'ne' ? "अगाडि बढ्नुहोस्" : "Proceed to Share";
        btnAction = `executeShare('${name}')`;
        secondaryBtn = `<button onclick="closeModal()" class="w-full text-gray-400 font-bold py-2 text-sm">${currentLang === 'ne' ? "रद्द गर्नुहोस्" : "Cancel"}</button>`;
    } else if (type === 'delete') {
        title = currentLang === 'ne' ? "अर्डर हटाइयो" : "Order Removed";
        description = currentLang === 'ne' ? "तपाईंको इतिहासबाट अर्डर सफलतापूर्वक हटाइयो।" : "The order has been removed from your history.";
        icon = "fa-trash-alt";
        iconBg = "bg-red-100";
        iconColor = "text-red-600";
        btnColor = "bg-red-600 hover:bg-red-700";
        btnText = "OK";
        btnAction = "closeModal()";
        secondaryBtn = "";
    } else {
        // Standard Add to Cart
        title = translations[currentLang]['itemAdded'];
        description = `${name} ${translations[currentLang]['itemAddedDesc']}`;
        icon = "fa-shopping-bag";
        iconBg = "bg-green-100";
        iconColor = "text-green-600";
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
    const allSections = ['hero-section', 'category-cards', 'shop-section', 'about-section',
        'contact-section', 'faq-section', 'featured-slider', 'testimonials-section'];

    // 2. Hide EVERY section first to clear the screen
    allSections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    document.getElementById('slider-container').innerHTML = "";
    // 3. Show the specific content based on the link clicked
    if (sectionId === 'home') {
        document.getElementById('hero-section').classList.remove('hidden');
        document.getElementById('category-cards').classList.remove('hidden');
        document.getElementById('featured-slider').classList.remove('hidden');
        renderFeaturedItems();
        checkCartStatusOnLoading();
        document.getElementById('testimonials-section').classList.remove('hidden');
    } else if (sectionId === 'shop-section') {
        document.getElementById('shop-section').classList.remove('hidden');
        return;
    } else {
        // Other pages (Shop, About, Contact) only need ONE section
        const target = document.getElementById(sectionId);
        if (target) target.classList.remove('hidden');
    }
    window.scrollTo(0, 0);
}

function toggleFAQ(id) {
    const content = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
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
document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    renderFeaturedItems();
    checkCartStatusOnLoading();
});

function checkCartStatusOnLoading() {
    if (cart.length > 0)
        cart.forEach(item => {
            toggleCartStatus(document.getElementById("addToCartBtn-" + item.id));
        });
}
const products = [
    {
        id: '1',
        name: "Womzy 320 MM Ultra Thin",
        price: 399,
        discountedPrice:249,
        qty:30,
        size:"XXL",
        descTitle:"WOMZY Advanced Korean Technology Pads",
        desc:"Powered by advanced Nano Technology, these pads feature Nano Bio Quantum Technology along with Nano Silver Technology, " +
            "carefully developed to support a soothing and refreshing experience during painful periods. The innovative nano-layer works alongside " +
            "the absorbent core to provide enhanced dryness, improved freshness, and a clean, comfortable feel that lasts for hours.\n" +
            "WOMZY Pain Relief Pads are created for women who want premium care, gentle softness, and added support during period discomfort so " +
            "you can move freely, rest better, and feel confident every day of your cycle.",
        category: "pad",
        icon: "fa-leaf",
        type: "featured",
        tagLine: "Pain Relief Pads",
        fileName: "pad-painrelief-xxl-30p.jpg"
    },
    {
        id: '2',
        name: "WOMZY Sanitary Pads – Dry Gel Technology",
        price: 349,
        discountedPrice:199,
        qty:30,
        size:"XXL",
        descTitle:"WOMZY Sanitary Pads – Dry Gel Technology",
        desc:"Designed for heavy‑flow days and overnight comfort, these WOMZY Pads combine high-capacity absorbent layers, " +
            "odour control protection, and ultra‑soft materials to keep you dry, calm, and confident for long hours. Breathable surfaces " +
            "and leak guard channels provide secure coverage while remaining gentle on sensitive skin so that you can rest easy, all night long.",
        category: "pad",
        icon: "fa-leaf",
        type: "general",
        tagLine: "",
        fileName: "pad-drygel-xxl-30p.jpg"
    },
    {
        id: '3',
        name: "WOMZY Sanitary Pads – Dry Gel Technology",
        price: 329,
        discountedPrice:179,
        qty:30,
        size:"XL",
        descTitle:"WOMZY Sanitary Pads – Dry Gel Technology",
        desc:"Powered with Dry Gel absorption technology and WOMZY’s comfort layers, these maxi‑thick pads are designed for strong day and night protection. " +
            "They lock in flow quickly, keep you feeling fresh and confident, and provide long-lasting dryness even on heavy days. Soft, skin‑friendly " +
            "materials ensure comfort while offering up to 100% protection so you can move freely and stay worry free throughout your cycle.",
        category: "pad",
        icon: "fa-seedling",
        type: "general",
        tagLine: "",
        fileName: "pad-drygel-xl-30p.jpg"
    },
    {
        id: '4',
        name: "Womzy 320 MM Ultra Thin",
        price: 80,
        discountedPrice:50,
        qty:6,
        size:"XXL",
        descTitle:"WOMZY Advanced Korean Technology Pads",
        desc:"Powered by advanced Nano Technology, these pads feature Nano Bio Quantum Technology along with Nano Silver Technology, " +
            "carefully developed to support a soothing and refreshing experience during painful periods. The innovative nano-layer works alongside " +
            "the absorbent core to provide enhanced dryness, improved freshness, and a clean, comfortable feel that lasts for hours.\n" +
            "WOMZY Pain Relief Pads are created for women who want premium care, gentle softness, and added support during period discomfort so " +
            "you can move freely, rest better, and feel confident every day of your cycle.",
        category: "pad",
        icon: "fa-leaf",
        type: "general",
        tagLine: "",
        fileName: "pad-painrelief-xxl-6p.jpg"
    },
    {
        id: '5',
        name: "Womzy 280 MM Straight Fit",
        price: 30,
        discountedPrice:25,
        qty:6,
        size:"XL",
        descTitle:"Extra Long Regular Maxi",
        desc:"",
        category: "pad",
        icon: "fa-leaf",
        type: "general",
        tagLine: "",
        fileName: "pad-straightFit-xl-6p.jpg"
    },
    {
        id: '6',
        name: "Womzy Maxi Cottony Jumbo Sanitary Pads",
        price: 399,
        discountedPrice:299,
        qty:40,
        size:"XXXL",
        descTitle:"Maxi Cottony Jumbo Sanitary Pads With Advance Dry Gel Technology",
        desc:"",
        category: "pad",
        icon: "fa-leaf",
        type: "general",
        tagLine: "",
        fileName: "pad-maxi-cottony-jumbo-xxxl-40p.jpg"
    },
    {
        id: '7',
        name: "Womzy Maxi Cottony Jumbo Sanitary Pads",
        price: 349,
        discountedPrice:199,
        qty:40,
        size:"XXL",
        descTitle:"Maxi Cottony Jumbo Sanitary Pads With Advance Dry Gel Technology",
        desc:"",
        category: "pad",
        icon: "fa-box-open",
        type: "general",
        tagLine: "",
        fileName: "pad-maxi-cottony-jumbo-xxl-40p.jpg"
    },
    {
        id: '8',
        name: "Womzy Period Panties",
        price: 1800,
        discountedPrice:1500,
        qty:10,
        size:"XL",
        descTitle:"WOMZY Period Panties Leak-Proof Comfort & Hygiene",
        desc:"Experience confidence, comfort, and hygiene with WOMZY Period Panties, designed for modern women. " +
            "Crafted with soft, breathable fabric and advanced leak-proof layers, these panties provide full coverage " +
            "and protection during your period, keeping you fresh and dry for hours.",
        category: "pad",
        icon: "fa-hand-holding-heart",
        type: "featured",
        tagLine: "New Arrival",
        fileName: "disposable-periodpanty-10p.jpg"
    },
    {
        id: "9",
        name: "Junior Bunny Ultra Classic Baby Diaper",
        price: 249,
        discountedPrice:149,
        qty:20,
        size:"NB",
        descTitle:"Ultra Classic Baby Diaper With Pull Up Pant And Anti Rash Protection",
        desc:"",
        category: "diaper",
        icon: "fa-hand-holding-heart",
        type: "general",
        tagLine: "",
        fileName: "diaper-junior-bunny-front.jpg"
    },
    {
        id: "10",
        name: "Junior Bunny Ultra Classic Baby Diaper",
        price: 249,
        discountedPrice:149,
        qty:20,
        size:"S",
        descTitle:"Ultra Classic Baby Diaper With Pull Up Pant And Anti Rash Protection",
        desc:"",
        category: "diaper",
        icon: "fa-hand-holding-heart",
        type: "general",
        tagLine: "",
        fileName: "diaper-junior-bunny-front.jpg"
    },
    {
        id: "11",
        name: "Junior Bunny Ultra Classic Baby Diaper",
        price: 249,
        discountedPrice:149,
        qty:20,
        size:"M",
        descTitle:"Ultra Classic Baby Diaper With Pull Up Pant And Anti Rash Protection",
        desc:"",
        category: "diaper",
        icon: "fa-hand-holding-heart",
        type: "general",
        tagLine: "",
        fileName: "diaper-junior-bunny-front.jpg"
    },
    {
        id: "12",
        name: "Junior Bunny Ultra Classic Baby Diaper",
        price: 299,
        discountedPrice:199,
        qty:20,
        size:"L",
        descTitle:"Ultra Classic Baby Diaper With Pull Up Pant And Anti Rash Protection",
        desc:"",
        category: "diaper",
        icon: "fa-hand-holding-heart",
        type: "general",
        tagLine: "",
        fileName: "diaper-junior-bunny-front.jpg"
    },
    {
        id: "13",
        name: "Junior Bunny Ultra Classic Baby Diaper",
        price: 299,
        discountedPrice:199,
        qty:20,
        size:"XL",
        descTitle:"Ultra Classic Baby Diaper With Pull Up Pant And Anti Rash Protection",
        desc:"",
        category: "diaper",
        icon: "fa-hand-holding-heart",
        type: "general",
        tagLine: "",
        fileName: "diaper-junior-bunny-front.jpg"
    }
    ,
    {
        id: "14",
        name: "Junior Bunny Ultra Classic Baby Diaper",
        price: 299,
        discountedPrice:199,
        qty:20,
        size:"XXL",
        descTitle:"Ultra Classic Baby Diaper With Pull Up Pant And Anti Rash Protection",
        desc:"",
        category: "diaper",
        icon: "fa-hand-holding-heart",
        type: "featured",
        tagLine: "Best Seller",
        fileName: "diaper-junior-bunny-front.jpg"
    }
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
                    <div class="animate-pop w-full h-full" style="animation-delay: ${delay}s">    
                        <div class="group bg-white rounded-2xl p-1 border border-gray-100 shadow-sm
                            hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 
                            hover:border-grey-500/30 flex flex-col relative h-full cursor-pointer overflow-hidden">          
                            <button onclick="shareProduct('${product.name}')" 
                                class="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center 
                                    justify-center shadow-md text-gray-400 hover:text-${color}-600 transition-all z-20 active:scale-110">
                                <i class="fas fa-paper-plane text-[10px]"></i>
                            </button>
                            <span class="absolute top-2 left-4 w-8 h-8 bg-white rounded-2xl flex items-center 
                                    justify-center shadow-md text-${color}-600 z-20 text-[11px]">${product.size}</span>
                            <div class="relative h-40 sm:h-56 w-full flex items-center justify-center overflow-hidden">
                                <img src="${product.fileName}"
                                    alt="${product.name}"
                                    class="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-700">
                            </div>
                            <div class="flex-grow flex flex-col justify-between text-left p-1">
                                <div>
                                    <h4 class="font-bold text-[13px] sm:text-sm text-gray-800 leading-snug group-hover:text-${color}-600 transition-colors line-clamp-2">
                                        ${product.name} ${product.qty} Pieces
                                    </h4>
                                    <div class="flex items-center gap-2 ">
                                        <span class="text-gray-600 font-black text-sm sm:text-base">Rs. ${product.price}</span>                        
                                    </div>
                                </div>
                            <div class="mt-1 pt-1 border-t border-gray-50">
                                <button 
                                    onclick="animateAddToCart(this,'${product.id}')" id="addToCartBtn-${product.id}"
                                    class="w-full py-2.5 bg-${color}-50 text-${color}-600 rounded-lg text-[12px] sm:text-xs font-black 
                                    hover:bg-${color}-600 hover:text-white active:scale-95 transition-all flex items-center justify-center gap-2">
                                    <i class="fas fa-cart-plus"></i>
                                    <span>${translations[currentLang]["addToCart"]}</span>                    
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
    });
    checkCartStatusOnLoading();
}

function renderFeaturedItems() {
    let container = document.getElementById("slider-container");
    container.innerHTML = "";

    products.forEach((product, index) => {
        if (product.type === "featured") {
            const delay = index < 12 ? index * 0.05 : 0;
            let color = product.category === "pad" ? "pink" : "blue";
            container.innerHTML += `
                <div class="group min-w-[240px] max-w-[280px] snap-start bg-white flex flex-col relative h-full">
                    <div class="animate-pop" style="animation-delay: ${delay}s">
                        <div class="group bg-white rounded-xl p-4 border border-${color}-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 
                                transition-all duration-500 hover:border-${color}-500/30 flex flex-col relative h-full cursor-pointer">
                            <div class="absolute top-0 left-0 bg-${color}-500 text-white text-[9px] font-black px-3 py-1 rounded-br-lg rounded-tl-xl z-10 shadow-sm">
                            ${product.tagLine}
                            </div>
                            <button onclick="shareProduct('${product.name}')" 
                                class="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center 
                                    justify-center shadow-md text-gray-400 hover:text-${color}-600 transition-all z-20 active:scale-110">
                                <i class="fas fa-paper-plane text-[10px]"></i>
                            </button>
                            <span class="absolute top-8 left-4 w-8 h-8 bg-white rounded-2xl flex items-center 
                                    justify-center shadow-md text-${color}-600 z-20 text-[11px]">${product.size}</span>
                            <div class="relative mt-1 h-56 w-full mb-1 flex items-center justify-center overflow-hidden ">
                                <img src="${product.fileName}" alt="${product.descTitle}"
                                class="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500">
                            </div>
                            <div class="flex-grow flex flex-col justify-between">
                                <div>
                                    <h4 class="font-bold text-sm text-gray-800 leading-snug group-hover:text-green-600 transition-colors">
                                        ${product.name} (${product.size}) ${product.qty} pieces
                                    </h4>
                                    <div class="flex items-center gap-2">
                                        <span class="text-${color}-600 font-black text-base">Rs. ${product.price}</span>
                                    </div>
                                </div>
                                <div class="pt-3 border-t border-gray-50 flex items-center justify-between">
                                    <button onclick="animateAddToCart(this, '${product.id}')" id="addToCartBtn-${product.id}"
                                        class="flex-1 py-2 bg-${color}-50 text-${color}-600 rounded-lg text-xs font-black hover:bg-${color}-600 
                                                hover:text-white active:scale-95 transition-all flex items-center justify-center gap-2">                                        
                                        <i class="fas fa-cart-plus"></i><span>${translations[currentLang]["addToCart"]}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
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
            await navigator.share({title: 'Sanitary Nepal', text: shareText, url: siteUrl});
        } catch (err) {
            console.log("Share cancelled");
        }
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
                    <img src="empty-shopping-cart.jpg" alt="Empty Cart" 
                         class="w-full h-full object-contain pointer-events-none opacity-90">
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                    ${translations[currentLang]['cartEmptyTitle'] || "Your cart is empty"}
                </h3>
                <p class="text-gray-500 text-sm mb-8 max-w-[220px]">
                    ${translations[currentLang]['cartEmptyDesc'] || "Looks like you haven't added anything yet. Explore our quality sanitary products!"}
                </p>
                <button onclick="toggleCart();showShop('all')" class="bg-green-600 text-white px-10 py-4 rounded-2xl font-bold active:scale-95 transition shadow-lg">
                    ${translations[currentLang]['startShopping'] || "Start Shopping"}
                </button>
                <div class="mt-10 w-full animate-fade-in-up">
                    <div class="flex items-center justify-between mb-4">
                        <span class="h-px bg-gray-200 flex-grow"></span>
                        <p class="px-3 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">${translations[currentLang]["quickPicks"]}</p>
                        <span class="h-px bg-gray-200 flex-grow"></span>
                    </div>  
                    <div class="flex justify-center gap-4 px-2">
                        <button onclick="toggleCart();showShop('pad')" 
                            class="group relative flex-1 max-w-[120px] aspect-square bg-pink-50 rounded-3xl p-4 flex flex-col 
                                items-center justify-center border-2 border-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-inner group-hover:bg-pink-100 transition-colors">
                                <i class="fas fa-leaf text-2xl text-pink-500"></i>
                            </div>
                            <span class="text-xs font-black text-pink-700 tracking-wide">${translations[currentLang]["pads"]}</span>
                           <div class="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                        <button onclick="toggleCart();showShop('diaper')" 
                            class="group relative flex-1 max-w-[120px] aspect-square bg-blue-50 rounded-3xl p-4 flex flex-col items-center justify-center border-2 border-white 
                                shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-inner group-hover:bg-blue-100 transition-colors">
                                <i class="fas fa-baby text-2xl text-blue-500"></i>
                            </div>
                            <span class="text-xs font-black text-blue-700 tracking-wide">${translations[currentLang]["diapers"]}</span>
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

function animateAddToCart(button, productId) {
    // 1. Prevent double clicks
    if (button.classList.contains('processing')) return;
    toggleCartStatus(button);
    // 4. Call your actual cart logic
    products.filter(product => {
        if (product.id === productId) addToCart(productId, product.name, product.price);
    })
}

function toggleCartStatus(button) {
    if (button) {
        button.classList.add('processing');
        // 2. Visual Feedback (Change color and text)
        const originalContent = button.innerHTML;
        button.innerHTML = `<i class="fas fa-check"></i> <span>${translations[currentLang]["addedToCart"]}</span>`;
        button.classList.replace('bg-gray-900', 'bg-green-600');
        let color = button.classList.item(2).split("-")[1];
        button.classList.replace('bg-' + color + '-50', 'bg-' + color + '-600');
        button.classList.replace('text-' + color + '-600', 'text-white');
        button.classList.replace('hover:bg-' + color + '-600', 'hover:bg-' + color + '-50');
        button.classList.replace('hover:text-white', 'hover:text-' + color + '-600');
        // 3. Trigger a "Bounce" animation
        button.classList.add('animate-bounce-short');
    }
}

function resetAddToCartBtn(button) {
    if (button) {
        button.innerHTML = `<i class="fas fa-cart-plus"></i><span>${translations[currentLang]["addToCart"]}</span>`;
        button.classList.replace('bg-green-600', 'bg-gray-900');
        let color = button.classList.item(2).split("-")[1];
        button.classList.replace('bg-' + color + '-600', 'bg-' + color + '-50');
        button.classList.replace('text-white', 'text-' + color + '-600');
        button.classList.replace('hover:bg-' + color + '-50', 'hover:bg-' + color + '-600');
        button.classList.replace('hover:text-' + color + '-600', 'hover:text-white');
        button.classList.remove('processing', 'animate-bounce-short');
    }
}

function resetAllAddToCartBtn() {
    cart.filter(item => resetAddToCartBtn(document.getElementById("addToCartBtn-" + item.id)));
}

function scrollSlider(direction) {
    const container = document.getElementById('slider-container');
    const scrollAmount = 300; // Roughly the width of one card + gap
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function handleNavClick(element, target, isShop = false) {
    // 1. "Policing" - Reset all links to their inactive state
    document.querySelectorAll('.nav-link').forEach(link => {
        // Reset text color
        link.classList.remove('text-green-600');
        link.classList.add('text-gray-600');

        // Reset underline width
        const underline = link.querySelector('.active-underline');
        if (underline) {
            underline.style.width = '0';
        }
    });

    // 2. Activate the clicked link
    element.classList.add('text-green-600');
    element.classList.remove('text-gray-600');

    // Lock the underline to 100%
    const activeUnderline = element.querySelector('.active-underline');
    if (activeUnderline) {
        activeUnderline.style.width = '100%';
    }

    // 3. Navigation Actions
    if (isShop) {
        showShop(target);
    } else {
        navigateTo(target);
    }
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
    resetAllAddToCartBtn();
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
        shoppingCart.classList.replace('text-red-500', 'text-green-600');
        shoppingCart.classList.replace('hover:text-green-600', 'hover:text-yellow-400');
        // Optional: Add a little "pop" animation when the number changes
        badge.classList.add('scale-125');
        setTimeout(() => badge.classList.remove('scale-125'), 200);
    } else {
        badge.classList.add('hidden');
        shoppingCart.classList.replace('text-green-600', 'text-red-500');
        shoppingCart.classList.replace('hover:text-gold-400', 'hover:text-green-600');
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
    resetAddToCartBtn(document.getElementById("addToCartBtn-" + cart[index].id));
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
    container.className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-1 py-1";

    container.innerHTML = orders.map(order => `
        <div class="animate-pop w-full sm:min-w-[240px] sm:max-w-[280px] snap-start h-full p-1" style="animation-delay: 0.5s">    
            <div class="group bg-white rounded-2xl p-2 md:p-4 border border-gray-200 shadow-sm
                hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 
                hover:border-gray-300 flex flex-col relative h-full cursor-pointer overflow-hidden">          
        
                <div class="absolute top-4 right-4 flex flex-col items-center gap-3 z-10">
                    <div class="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.5)]" title="Delivered"></div>
                    <button onclick="deleteOrder('${order.id}')" class="text-red-300 hover:text-red-600 transition-colors p-1">
                    <i class="fas fa-trash-alt text-[14px]"></i>
                        </button>
                </div>
                <div class="mb-1 pr-2">
                    <span class="text-[10px] font-bold text-gray-400 block uppercase tracking-widest">ID: ${order.id}</span>
                        <p class="text-sm font-black text-gray-800 mt-0.5">${order.date}</p>
                </div>
                <div class="flex-grow">
                    <div class="bg-gray-50/50 rounded-xl p-2 mb-1">
                        <p class="text-[11px] sm:text-xs text-gray-500 line-clamp-2 leading-relaxed min-h-[32px]">
                            ${order.items.map(item => `<span class="font-bold text-gray-700">${item.quantity}x</span> ${item.name}`).join(', ')}
                        </p>
                    </div>
                        <p class="text-base font-black text-green-700">Rs. ${order.total}</p>
                </div>
                <div class="mt-1 pt-1 border-t border-gray-50">
                    <button onclick="reorder('${order.id}')" id="reorderToCartBtn-${order.id}"
                        class="w-full py-2.5 bg-gray-900 hover:bg-green-600 text-white text-[11px] sm:text-xs 
                        rounded-xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg">                
                        <span>${translations[currentLang]["reOrder"]}</span>
                   </button>
                </div>
            </div>
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
        if (cart.length > 0)
            orderToRepeat.items.forEach(item => {
                const existingItem = cart.find(c => c.id === item.id);
                if (existingItem)
                    console.log(existingItem.id);
                else
                    cart.push(item);
            });
        else
            cart = [...orderToRepeat.items];
        orderToRepeat.items.forEach(item => {
            toggleCartStatus(document.getElementById("addToCartBtn-" + item.id));
        });
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
        icon = "fa-shopping-cart";
        iconBg = "bg-orange-100";
        iconColor = "text-orange-600";
        btnColor = "bg-orange-600 hover:bg-orange-700";
        btnText = currentLang === 'ne' ? "हो, खाली गर्नुहोस्" : "Yes, Clear All";
        btnAction = "executeClearCart()";
        secondaryBtn = `<button onclick="closeModal()" class="w-full text-gray-400 font-bold py-2 text-sm">${currentLang === 'ne' ? "रद्द गर्नुहोस्" : "Cancel"}</button>`;
    } else if (type === 'clearHistory') {
        title = currentLang === 'ne' ? "इतिहास हटाउने?" : "Clear History?";
        description = currentLang === 'ne' ? "के तपाईं आफ्नो सबै अर्डर इतिहास हटाउन चाहनुहुन्छ?" : "This will permanently delete your entire order history.";
        icon = "fa-history";
        iconBg = "bg-red-100";
        iconColor = "text-red-600";
        btnColor = "bg-red-600 hover:bg-red-700";
        btnText = currentLang === 'ne' ? "हो, हटाउनुहोस्" : "Yes, Delete History";
        btnAction = "executeClearHistory()";
        secondaryBtn = `<button onclick="closeModal()" class="w-full text-gray-400 font-bold py-2 text-sm">${currentLang === 'ne' ? "रद्द गर्नुहोस्" : "Cancel"}</button>`;
    }
    // Define content based on type
    else if (type === 'share') {
        title = currentLang === 'ne' ? "सेयर गर्न तयार?" : "Ready to Share?";
        description = currentLang === 'ne' ? `तपाईं '${name}' को जानकारी सेयर गर्न लाग्नुभएको छ।` : `You are about to share the details for '${name}'.`;
        icon = "fa-paper-plane";
        iconBg = "bg-blue-100";
        iconColor = "text-blue-600";
        btnColor = "bg-blue-600 hover:bg-blue-700";
        btnText = currentLang === 'ne' ? "अगाडि बढ्नुहोस्" : "Proceed to Share";
        btnAction = `executeShare('${name}')`;
        secondaryBtn = `<button onclick="closeModal()" class="w-full text-gray-400 font-bold py-2 text-sm">${currentLang === 'ne' ? "रद्द गर्नुहोस्" : "Cancel"}</button>`;
    } else if (type === 'delete') {
        title = currentLang === 'ne' ? "अर्डर हटाइयो" : "Order Removed";
        description = currentLang === 'ne' ? "तपाईंको इतिहासबाट अर्डर सफलतापूर्वक हटाइयो।" : "The order has been removed from your history.";
        icon = "fa-trash-alt";
        iconBg = "bg-red-100";
        iconColor = "text-red-600";
        btnColor = "bg-red-600 hover:bg-red-700";
        btnText = "OK";
        btnAction = "closeModal()";
        secondaryBtn = "";
    } else {
        // Standard Add to Cart
        title = translations[currentLang]['itemAdded'];
        description = `${name} ${translations[currentLang]['itemAddedDesc']}`;
        icon = "fa-shopping-bag";
        iconBg = "bg-green-100";
        iconColor = "text-green-600";
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
    const allSections = ['hero-section', 'category-cards', 'shop-section', 'about-section',
                                'contact-section', 'faq-section', 'featured-slider', 'testimonials-section'];

    // 2. Hide EVERY section first to clear the screen
    allSections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    document.getElementById('slider-container').innerHTML = "";
    // 3. Show the specific content based on the link clicked
    if (sectionId === 'home') {
        document.getElementById('hero-section').classList.remove('hidden');
        document.getElementById('category-cards').classList.remove('hidden');
        document.getElementById('featured-slider').classList.remove('hidden');
        renderFeaturedItems();
        checkCartStatusOnLoading();
        document.getElementById('testimonials-section').classList.remove('hidden');
    } else if (sectionId === 'shop-section') {
        document.getElementById('shop-section').classList.remove('hidden');
        return;
    } else {
        // Other pages (Shop, About, Contact) only need ONE section
        const target = document.getElementById(sectionId);
        if (target) target.classList.remove('hidden');
    }
    window.scrollTo(0, 0);
}

function toggleFAQ(id) {
    const content = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
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
document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    renderFeaturedItems();
    checkCartStatusOnLoading();
});

function checkCartStatusOnLoading() {
    if (cart.length > 0)
        cart.forEach(item => {
            toggleCartStatus(document.getElementById("addToCartBtn-" + item.id));
        });
}

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
