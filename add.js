document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');

    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Populate cart items
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('product-item');
        itemDiv.innerHTML = `
            <div class="product-dropdown">
                <img src="${item.image}" alt="${item.name}">
                <div class="dropdown-content">
                    <p>${item.name}</p>
                </div>
            </div>
            <p>${item.name}</p>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
});
