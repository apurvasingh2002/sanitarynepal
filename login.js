let isLoggedIn = false;
let currentUser = null;

function toggleAuthMode() {
    const title = document.getElementById('auth-title');
    const subtitle = document.getElementById('auth-subtitle');
    const btn = document.getElementById('auth-switch-btn');
    const text = document.getElementById('auth-switch-text');

    if (title.innerText === "Welcome Back") {
        title.innerText = "Create Account";
        subtitle.innerText = "Join the Sanitary Nepal family";
        btn.innerText = "Login";
        text.innerText = "Already have an account?";
    } else {
        title.innerText = "Welcome Back";
        subtitle.innerText = "Login to sync your orders";
        btn.innerText = "Sign Up";
        text.innerText = "Don't have an account?";
    }
}

function handleAuth(event) {
    event.preventDefault();
    isLoggedIn = true;

    // UI Update: Change icon color and background to indicate logged-in state
    const loginBtn = document.getElementById('login-btn');
    loginBtn.innerHTML = `
        <div class="relative">
            <i class="fas fa-user-circle text-xl text-green-600"></i>
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
    `;

    closeModal();
    showToast("Welcome back!", 'cart');
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
