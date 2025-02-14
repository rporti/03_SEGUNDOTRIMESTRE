# Keyboard and Mouse Events in JavaScript

## ✨ Introduction
In JavaScript, **events** allow us to detect and interact with user actions, such as clicking a button, 
pressing a key, or moving the mouse. In this document, we will learn how to use **keyboard** and **mouse** events with practical examples in a shopping cart.

---

## 🔧 1. Mouse Events
Mouse events allow us to detect actions such as moving the cursor, clicking, or hovering over an element.

### 🔍 **Example: Highlight products when hovering the mouse**
We want the shopping cart products to be highlighted when the user hovers over them and return to normal 
when the cursor moves away.

### 🌟 **Events used:**
- `mouseover` → Triggered when the user moves the cursor over an element.
- `mouseout` → Triggered when the cursor leaves the element.

### ✅ **JavaScript Code:**
```javascript
// Select all products in the list
const products = document.querySelectorAll("#productList li");

// Add events to each product
products.forEach((product) => {
    product.addEventListener("mouseover", () => {
        product.style.border = "2px solid red";
        product.style.transform = "scale(1.05)";
    });

    product.addEventListener("mouseout", () => {
        product.style.border = "1px solid #ccc";
        product.style.transform = "scale(1)";
    });
});


✨ Explanation:
We select all <li> elements inside #productList.
For each product:
mouseover: Changes the border to red and increases the size.
mouseout: Restores the original border and normal size.


🎮 2. Keyboard Events
Keyboard events allow us to detect when the user presses a key.

💡 Example: Modify product quantity with the keyboard
We want the user to be able to change the quantity of a product in the cart by typing a number and confirming 
with the Enter key.


🌟 Events used:
keydown → Triggered when the user presses a key.
✅ JavaScript Code:

function updateCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = ""; // Clear list before updating

    for (const product in cart) {
        const item = document.createElement("li");
        item.dataset.name = product;

        // Create input to change quantity
        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.min = "1";
        quantityInput.value = cart[product];
        quantityInput.classList.add("input-quantity");

        // Keyboard event: Change quantity with Enter
        quantityInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                let newQuantity = parseInt(quantityInput.value);
                if (!isNaN(newQuantity) && newQuantity > 0) {
                    cart[product] = newQuantity;
                    updateCartTotal();
                } else {
                    quantityInput.value = cart[product]; // Restore quantity if invalid
                }
            }
        });

        item.innerHTML = `${product} - ${(cart[product] * productPrices[product]).toFixed(2)}€ `;
        item.appendChild(quantityInput);
        cartList.appendChild(item);
    }

    updateCartTotal();
}
✨ Explanation:
A input field is created to modify the quantity.
A keydown event is added to the input:
If the user presses Enter, the quantity in the cart is updated.
If the entered quantity is invalid, the previous quantity is restored.


🔎 Conclusion
Mouse events (mouseover, mouseout) enhance the visual experience.
Keyboard events (keydown) enable faster and more accessible data input.
Applying events in a shopping cart improves interactivity and usability.

/*Funcion recursiva que recorra todos los productos de tu tienda los cuente y los muestre en un alert cuando acabe
la funcion
sumar el precio total con recursividad
*/