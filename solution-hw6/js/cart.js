// pack size related pricing 
const packSizePrice = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
}

const glazingOption = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double chocolate": 1.5
}


// Coded base on the lab06 example
// Source: https://github.com/CMU-PUI-2024/pui-materials/tree/main/in-lab-examples/puinote-lab06/puinote-end

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.price = calculateRollPrice(basePrice, rollGlazing, packSize);

        this.element = null;
    }
}

function calculateRollPrice(basePrice, rollGlazing, packSize) {
    const glazingPrice = glazingOption[rollGlazing];
    const packMultiplier = packSizePrice[packSize];
    return ((basePrice + glazingPrice) * packMultiplier).toFixed(2);
}

// Set to store cart items
const cart = [];

function addToCart(type, glazing, size, basePrice) {
    const roll = new Roll(type, glazing, size, basePrice);
    cart.push(roll);
    console.log("New roll added: ", roll);
    saveToLocalStorage();
    updateCartTotal();
}

// Function to create a DOM element for the roll and add to cart
function createElement(roll) {
    const template = document.querySelector("#cart-item-template");
    if (!template) return; // Exit if template is not found (on another page)

    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector(".cart-item");
  
    // Add remove button function
    const btnDelete = roll.element.querySelector(".remove");
    btnDelete.addEventListener("click", () => {
      deleteRoll(roll);
    });
  
    // Find cart container and append the cloned element
    const cartContainer = document.querySelector(".cart-items");
    cartContainer.appendChild(roll.element);
  
    // Populate the cloned template with roll data
    updateElement(roll);
}

function updateElement(roll) {
    const rollImageElement = roll.element.querySelector(".product-image");
    const rollNameElement = roll.element.querySelector(".product-name");
    const glazingElement = roll.element.querySelector(".glazing-info");
    const sizeElement = roll.element.querySelector(".pack-size-info");
    const priceElement = roll.element.querySelector(".price-tag");
    // update the element content
    rollImageElement.src = `../assets/products/${roll.type.toLowerCase().replace(" ", "-")}-cinnamon-roll.jpg`;
    rollImageElement.alt = `${roll.type} Cinnamon Roll`;
    rollNameElement.textContent = `${roll.type} Cinnamon Roll`;
    glazingElement.textContent = `Glazing: ${roll.glazing}`;
    sizeElement.textContent = `Pack Size: ${roll.size}`;
    priceElement.textContent = `$${roll.price}`;
}

function updateCartTotal() {
    const totalPrice = cart.reduce((sum, roll) => sum + parseFloat(roll.price), 0).toFixed(2);
    console.log("Total Price: ", totalPrice);
    const totalPriceElement = document.getElementById("cart-total-price");
    if (totalPriceElement) {
        totalPriceElement.textContent = `$${totalPrice}`; 
    }
}

function deleteRoll(roll) {
    roll.element.remove();
  
    // Remove the roll from the cart array
    const index = cart.indexOf(roll);
    if (index !== -1) {
        cart.splice(index, 1);
    }
  
    // Update local storage
    saveToLocalStorage();
    updateCartTotal();
}

function saveToLocalStorage() {
    const cartArray = Array.from(cart);
    const cartArrayString = JSON.stringify(cartArray);
    console.log("cart in Local Storeage in JSON:", cartArrayString)
    localStorage.setItem("storedCart", cartArrayString);
}

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem("storedCart");
    if (cartArrayString) {
        const cartArray = JSON.parse(cartArrayString);
        cartArray.forEach(rollData => {
            const roll = new Roll(rollData.type, rollData.glazing, rollData.size, rollData.basePrice);
            cart.push(roll);
        });
    }
}


// Only execute render logic if we are on the cart page
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
    retrieveFromLocalStorage();
    // If on cart page, render all items
    if (document.querySelector("#cart-item-template")) {
        cart.forEach(createElement);
        updateCartTotal();
    }
});

  


