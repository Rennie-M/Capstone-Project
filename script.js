        // Logic to fetch product details from data source
        const products = 
        [
            {   id: 1, 
                name: "Branch, leaf-like print", 
                image: "./resources/fabric.jpg", 
                price: 15000 },
            { id: 2, 
                name: "Multi colored curls patterned print", 
                image: "./resources/fabric 3.jpeg", 
                description: "vibrant ankara fabric with colorful curls", 
                price: 10000},
            { id: 3, 
                name: "Spiral print",
                image: "./resources/fabric 2.jpeg", 
                description: "Ankara spiral curls", 
                price: 12000},
            { id: 4, 
                name: "Toghu Bamileke Bamenda", 
                image: "./resources/Atoghu Toghu.jpeg", 
                description: "Traditional Vibes", 
                price: 30000},
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
                price: 8000},
            { id: 8, 
                name: "Africa Wax print kente Gold", 
                image: "./resources/fabric 7.jpeg", 
                description: "Ghanian special wears",
                 price: 14000},
            { id: 9, 
                name: "Grey wax print", 
                image: "./resources/fabric 8.jpeg", 
                description: "Grey, blue horse print", 
                price: 7000},
            { id: 10, 
                name: "Two piece gown", 
                image: "./resources 2/ankara gown 1.jpeg",
                 description: "Ankara black & white ankle length goen with lace covering",
                  price: 8000},
            { id: 11, name: "Colorful Ankara Gown", 
                image: "./resources 2/ankara gown2.jpeg", 
                description: "Vibrant ankara gown design", 
                price: 10000},
            { id: 12, 
                name: "Simple Ankara Dress", 
                image: "./resources/dress.jpeg", 
                description: "Elegant simple ankara dress",
                 price: 5000},
            { id: 13, 
                name: "Two Piece Ankara Set", 
                image: "./resources 2/two peice 1.jpeg", 
                description: "Matching two-piece ankara outfit",
                 price: 8000},
            { id: 14, 
                name: "Ankara Two Piece Ensemble", 
                image: "./resources 2/two piece 2.jpeg", 
                description: "Stylish two-piece ankara ensemble",
                 price: 8000},
            { id: 15,
                 name: "Traditional Two Piece", 
                 image: "./resources 2/two piece 3.jpeg",
                  description: "Traditional-style two-piece outfit",
                   price: 8000},
            { id: 16, 
                name: "Casual Ankara Wear", 
                image: "./resources 2/free wear1.jpeg", 
                description: "Comfortable casual ankara wear",
                 price: 6000},
            { id: 17, 
                name: "Relaxed Ankara Style", 
                image: "./resources 2/free wear2.jpeg", 
                description: "Relaxed fit ankara style", 
                price: 6000},
            { id: 18, 
                name: "Loose Ankara Outfit", 
                image: "./resources 2/free wear3.jpeg", 
                description: "Loose-fitting ankara outfit", 
                price: 6000}
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
        // Updates product details in the HTML
        productDetailsContainer.innerHTML = `
            <h2>${product.name || 'Unnamed Product'}</h2>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <p>${product.description || 'No description available'}</p>
            <p>Price: ${product.price} CFA</p>
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" min="1" value="1">
            <div class="button-container">
                <button onclick="addToCart()">Add to Cart</button>
                <button onclick="buyNow()">Buy Now</button>
            </div>
        `;
    } else {
        // Handles case when product is not found
        console.error('Product not found or container missing');
        productDetailsContainer.innerHTML = `
            <p>Product not found. Please check the product ID.</p>
        `;
    }
}

// Placeholder functions for cart and buy now actions
function addToCart() {
    const quantity = document.getElementById('quantity').value;
    alert(`Added ${quantity} item(s) to cart`);
    // Implement actual cart logic here
}

function buyNow() {
    const quantity = document.getElementById('quantity').value;
    alert(`Proceeding to checkout with ${quantity} item(s)`);
    // Implement checkout logic here
}

// Call the display function when the page loads
window.onload = displayProductDetails;