        // Logic to fetch product details from data source
        const products = 
        [
            {   id: 1, 
                name: "Branch, leaf-like print", 
                image: "./resources/fabric.jpeg", 
                price: 15000,
                color: ['Pink', 'Green','Black']
            },
            { id: 2, 
                name: "Multi colored curls patterned print", 
                image: "./resources/fabric 3.jpeg", 
                description: "vibrant ankara fabric with colorful curls", 
                price: 10000,
                color: ['Red', 'Blue', 'Yellow', 'White', 'Dark-Blue']
            },
            { id: 3, 
                name: "Spiral print",
                image: "./resources/fabric 2.jpeg", 
                description: "Ankara spiral curls", 
                price: 12000,
                color: ['Black', 'Purple']},
            { id: 4, 
                name: "Toghu Bamileke Bamenda", 
                image: "./resources/Atoghu Toghu.jpeg", 
                description: "Traditional Vibes", 
                price: 30000,
                color: ['Bamileke', 'Bamenda', 'Nkwen']},
            { id: 5, 
                name: "Black Multicolored African Print", 
                image: "./resources/fabric 4.jpeg", 
                description: "Different shades of african touch print", 
                price: 12000},
            { id: 6, 
                name: "Kente Fabric", 
                image: "./resources/fabric 5.jpeg",
                 description: "Ghanian specialty", 
                 price: 14000},
            { id: 7, 
                name: "Colourful wax print", 
                image: "./resources/fabric 6.jpeg", 
                description: "Coloured material", 
                price: 8000,
                color:['Black', 'White']},
            { id: 8, 
                name: "Africa Wax print kente Gold", 
                image: "./resources/fabric 7.jpeg", 
                description: "Ghanian special wears",
                 price: 14000},
            { id: 9, 
                name: "Grey wax print", 
                image: "./resources/fabric 8.jpeg", 
                description: "Grey, blue horse print", 
                price: 7000,
                color:['Grey', 'Red','Yellow','Pink','Orange']},
            { id: 10, 
                name: "Two piece gown", 
                image: "./resources 2/ankara gown 1.jpg",
                 description: "Ankara black & white ankle length gown with lace covering",
                  price: 8000,
                  color:['Black', 'Red', 'pink','black & orange','black & blue'],
                  size:['S','M','L','XL','2XL']},
            { id: 11, name: "Colorful Ankara Gown", 
                image: "./resources 2/ankara gown2.jpg", 
                description: "Vibrant ankara gown design", 
                price: 5000,
                color:['Green','Orange', 'Black', 'Pink', 'White & Black'],
                size:['M','L','XL','2XL','3XL']},
            { id: 12, 
                name: "Simple Ankara Dress", 
                image: "./resources/dress.jpeg", 
                description: "Elegant simple ankara dress",
                 price: 9000,
                 color:['Black', 'Red', 'pink','black & orange','black & blue'],
                size:['S','M','L','XL']},
            { id: 13, 
                name: "Two Piece Ankara Set", 
                image: "./resources 2/two peice 1.jpg", 
                description: "Matching two-piece ankara outfit",
                 price: 8000,
                color:['Multicolored','Black', 'Red', 'pink','black & orange','black & blue'],
                size:['S','M','L','XL','2XL','3XL','4XL']},
            { id: 14, 
                name: "Ankara Two Piece Ensemble", 
                image: "./resources 2/two piece 2.jpg", 
                description: "Stylish two-piece ankara ensemble",
                 price: 8000,
                color:['Multicolored','Green & Black','Orange', 'Black', 'Pink', 'White & Black'],
                size:['S','M','L','XL','2XL','3XL']},
            { id: 15,
                 name: "Classy Two Piece", 
                 image: "./resources 2/two piece 3.jpg",
                  description: "classy two-piece outfit",
                   price: 8000,
                   color:['Multicolored','Red & Black','Orange', 'Black', 'Pink', 'White & Black'],
                   size:['S','M','L','XL','2XL','3XL','4XL']},
            { id: 16, 
                name: "Casual Ankara Wear", 
                image: "./resources 2/free wear1.jpg", 
                description: "Comfortable casual ankara wear",
                 price: 6000,
                 color:['Multicolored','White & Black','Orange', 'Black', 'Pink', 'Yellow & Black'],
                 size:['M','L','XL','2XL','3XL','4XL']},
            { id: 17, 
                name: "Relaxed Ankara Style", 
                image: "./resources 2/free wear2.jpg", 
                description: "Relaxed fit ankara style", 
                price: 6000,
                color:['Multicolored','Green','Orange', 'Black', 'Pink', 'White & Black','Yellow & Black'],
                size:['M','L','XL','2XL','3XL']},
            { id: 18, 
                name: "Loose Ankara Outfit", 
                image: "./resources 2/free wear3.jpg", 
                description: "Loose-fitting ankara outfit", 
                price: 6000,
                color:['Multicolored','Green & Black','Orange', 'Black', 'Pink', 'White & Black'],
                size:['M','L','XL','2XL','3XL']}
        ];

// Function to get product details based on ID
function getProductDetails(productId) {
    console.log('Searching for product ID:', productId);
    console.log('Available products:', products);
    return products.find(product => product.id === parseInt(productId));
}

// Function to display product details
function displayProductDetails() {
    // Get the product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    console.log('URL Product ID:', productId);

    // Find the product
    const product = getProductDetails(productId);
    console.log('Found Product:', product);


    // Get the product details container
    const productDetailsContainer = document.getElementById('product-details');
    console.log('Product Details Container:', productDetailsContainer);


    // Check if product exists and container is found
    if (product && productDetailsContainer) {

        // Create size options HTML (only for dresses)
        const sizeOptions = (product.size || product.size || []).map(size => 
            `<option value="${size}">${size}</option>`
        ).join('');

        // Create color options HTML
        const colorOptions = product.color ? product.color.map(color => 
            `<option value="${color}">${color}</option>`
        ).join('') : '';

        // Updates product details in the HTML
        productDetailsContainer.innerHTML = `
            <h2>${product.name || 'Unnamed Product'}</h2>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <p>${product.description || 'No description available'}</p>
            <p>Unit Price: <span id="unit-price"> ${product.price}</span> CFA</p>

         ${(product.size || product.size) ? `
            <div class="size-selection">
                <label for="size">Size:</label>
                <select id="size" name="size">
                    ${sizeOptions}
                </select>
            </div>
            ` : ''}
            
            ${product.color ? `
            <div class="color-selection">
                <label for="color">Color:</label>
                <select id="color" name="color">
                    ${colorOptions}
                </select>
            </div>
            ` : ''}


            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" min="1" value="1" onchange="updateTotalPrice()">
            
            
            <p>Total Price: <span id="total-price">${product.price}</span> CFA</p>
            <div class="button-container">
                <button onclick="addToCart()">Add to Cart</button>
                <button onclick="buyNow()">Buy Now</button>
            </div>
        `;


                 // event listener to quantity input
        document.getElementById('quantity').addEventListener('input', updateTotalPrice);


    } else {
        // Handles case when product is not found
        console.error('Product not found or container missing');
        productDetailsContainer.innerHTML = `
            <p>Product not found. Please check the product ID.</p>
        `;
    }
}


// Function to update total price based on quantity
function updateTotalPrice() {
    const unitPriceElement = document.getElementById('unit-price');
    const totalPriceElement = document.getElementById('total-price');
    const quantityInput = document.getElementById('quantity');

    if (unitPriceElement && totalPriceElement && quantityInput) {
        const unitPrice = parseFloat(unitPriceElement.textContent);
        const quantity = parseInt(quantityInput.value) || 1;
        
        const totalPrice = unitPrice * quantity;
        totalPriceElement.textContent = totalPrice.toLocaleString();
    }
}

// Global cart management
let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
// Placeholder functions for cart and buy now actions
const CartManager = {
    cart: [],
    init() {
        
            this.loadCart();
        try {
            const savedCart = localStorage.getItem('cartItems');
            this.cart = savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Could not load cart:', error);
            this.cart = [];
        }
    },

    getProductDetails(productId) {
        return products.find(product => product.id === parseInt(productId));
    },
    addToCart(product, options) {
        // Check if product already exists in cart
        const existingItemIndex = this.cart.findIndex(item => 
            item.id === product.id && 
            item.color === options.color && 
            item.size === options.size
        );

        if (existingItemIndex > -1) {
            // Update quantity if item exists
            this.cart[existingItemIndex].quantity += options.quantity;
        } else {
            // Add new item to cart
            const cartItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: options.quantity,
                color: options.color,
                size: options.size,
                image: product.image
            };
           this.cart.push(cartItem);
        }

        //Save to local storage to persistence
        this.saveCart();
        
    
    },

    // Save cart to local storage
    saveCart() {
        try {
            localStorage.setItem('cartItems', JSON.stringify(this.cart));
        } catch (error) {
            console.error('Could not save cart', error);
        }
    },


    
    // Load cart from local storage
    loadCart() {
        try {
            const savedCart = localStorage.getItem('cartItems');
            this.cart = savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Could not load cart from local storage', error);
            this.cart = [];
        }
    },

    // Remove item from cart
    removeFromCart(index) {
        this.cart.splice(index, 1);
        this.saveCart();
        this.displayCart();
    },

    // Clear entire cart
    clearCart() {
        this.cart = [];
        this.saveCart();
        this.displayCart();
    },

    // Calculate total cart value
    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    // Display cart items
    displayCart() {
        const cartContainer = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');

        if (cartContainer) {
            // Clear previous cart items
            cartContainer.innerHTML = '';

            // Display each cart item
            this.cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                cartItemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        ${item.color ? `<p>Color: ${item.color}</p>` : ''}
                        ${item.size ? `<p>Size: ${item.size}</p>` : ''}
                        <p>Price: ${item.price} CFA</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Item Total: ${itemTotal} CFA</p>
                        <button onclick="CartManager.removeFromCart(${index})">Remove</button>
                    </div>
                `;

                cartContainer.appendChild(cartItemElement);
            });

            // Display total
            if (cartTotalElement) {
                cartTotalElement.textContent = `Total: ${this.getCartTotal()} CFA`;
            }
        }
    },
    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    // Checkout process
    checkout() {
        if (this.cart.length === 0) {
            alert('Your cart is empty');
            return false;
        }

        // Implement more comprehensive checkout logic
        const confirmCheckout = confirm(`Proceed to checkout?\nTotal: ${this.getCartTotal()} CFA`);
        
        if (confirmCheckout) {
            // Here you would typically integrate with payment gateway
            alert('Thank you for your purchase!');
            this.clearCart();
            // Redirect to a thank you or order confirmation page
            window.location.href = 'checkout.html';
            return true;
        }
        return false;
    }
};



function addToCart() {
        // Get the current product details
    const productId = new URLSearchParams(window.location.search).get('productId');
    const product = getProductDetails(parseInt(productId));
    
    // Get quantity and selected options
    const quantity = parseInt(document.getElementById('quantity').value);
    const color = document.getElementById('color') 
    ? document.getElementById('color').value 
    : null;
    const size = document.getElementById('size') 
    ? document.getElementById('size').value 
    : null;
   
      // Use CartManager or direct cart management
    CartManager.addToCart(product, { quantity, color, size });

    // Alert user
    alert(`Added ${quantity} ${product.name} to cart`);
    
  // Create cart item
     const cartItem = {
        id: products.id,
        name: products.name,
        price: products.price,
        quantity: quantity,
        color: color,
        size: size,
        image: products.image
    }; 
     //confirmation
alert(`Added ${quantity} ${products.name} to cart`);
 

}


    

    

    // Function to display cart (for cart.html)
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Check if we're on the cart page
    if (cartContainer) {
        // Clear previous cart items
        cartContainer.innerHTML = '';

        // Calculate total
        let total = 0;

        // Display each cart item
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    ${item.color ? `<p>Color: ${item.color}</p>` : ''}
                    ${item.size ? `<p>Size: ${item.size}</p>` : ''}
                    <p>Price: ${item.price} CFA</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Item Total: ${itemTotal} CFA</p>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;

            cartContainer.appendChild(cartItemElement);
        });

        // Display total
        if (cartTotalElement) {
            cartTotalElement.textContent = `Total: ${total} CFA`;
        }
    }
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Function to clear entire cart
function clearCart() {
    cart = [];
    displayCart();
}




function buyNow() {
    const quantity = document.getElementById('quantity').value;
   
   addToCart();
    alert(`Proceeding to checkout with ${quantity} item(s)`);
     // Redirect to cart page
     window.location.href = 'cart.html';
}




// Initialize cart display on page load
// On page load
window.onload = function() {
    // Load existing cart from local storage
    CartManager.init();

    // If on product details page, display product details
    if (document.getElementById('product-details')) {
        displayProductDetails();
    }

    // If on cart page, display cart
    if (document.getElementById('cart-items')) {
        CartManager.displayCart();
    }
};







// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }

 // Basic checkout logic
 const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const confirmCheckout = confirm(`Proceed to checkout?\nTotal: ${total.toLocaleString()} CFA`);
    
    if (confirmCheckout) {
        window.location.href = 'checkout.html';
    }
}
