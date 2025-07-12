export const cart = [];

export function addToCart(cartItem) {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(item => item.id === cartItem.id);
    if (existingItemIndex > -1) {
        // If it exists, update the quantity
        cart[existingItemIndex].quantity += cartItem.quantity;
    } else {
        // If it doesn't exist, add it to the cart
        cart.push(cartItem);
    }
}