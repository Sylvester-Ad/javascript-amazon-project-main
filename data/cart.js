export const cart = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    },
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1
    }
];

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