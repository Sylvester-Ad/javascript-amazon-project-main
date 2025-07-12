
const productsGridEl = document.querySelector(".js-products-grid");

products.forEach((product) => {
    const productEl = document.createElement("div");
    productEl.classList.add("product-container");
 
    productEl.innerHTML = `
        <div class="product-image-container">
            <img class="product-image" src="${product.image}" />
        </div>
        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${Math.round(product.rating.stars * 10)}.png" />
            <div class="product-rating-count link-primary">${product.rating.count}</div>
        </div>

        <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>

        <div class="product-quantity-container">
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
        </div>
        <button class="add-to-cart-button js-add-to-cart-button button-primary">Add to Cart</button>
    `; 
    productsGridEl.appendChild(productEl);

    // Add event listener for the "Add to Cart" button
    productEl.querySelector(".js-add-to-cart-button").addEventListener("click", () => {
        const quantity = productEl.querySelector("select").value;
        const cartItem = {
            id: product.id,
            quantity: parseInt(quantity, 10),
        };
        
        // Check if the item is already in the cart 
        const existingItemIndex = cart.findIndex(item => item.id === cartItem.id);
        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += cartItem.quantity;
        } else {
            cart.push(cartItem);
        }

        // Show the "Added to Cart" message
        productEl.querySelector(".added-to-cart").style.display = "block";
    })
});
