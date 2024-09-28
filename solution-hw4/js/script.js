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

const cart = []

// extract roll type from url
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
const rollData = rolls[rollType];

const headerElement = document.querySelector("#roll-header");
headerElement.textContent = `${rollType} Cinnamon Roll`;

// update the roll image
const imageElement = document.querySelector("#roll-image");
imageElement.src = `../assets/products/${rollType}` + "-cinnamon-roll.jpg";

// update base price
const priceElement = document.querySelector("#roll-price");
priceElement.textContent = rollData.basePrice;

// select the glazing and pack size element
const glazingSelect = document.getElementById("glazing");
const packSelect = document.getElementById("pack-size");

function calculatePrice(){
    // Get selected options' index position
    let glazingIndex = glazingSelect.selectedIndex;
    let packIndex = packSelect.selectedIndex;

    // Get the selected options' information from the hardcoded value above
    const selectedPack = packSelect.options[packIndex].text;
    const selectedGlazing = glazingSelect.options[glazingIndex].text;
   
    const packPrice = packSizePrice[selectedPack];
    const glazingPrice = glazingOption[selectedGlazing];

    const totalPrice = ((rollData.basePrice + glazingPrice) * packPrice).toFixed(2);

    // Update the displayed total price
    document.getElementById("total-price").textContent = `$${totalPrice}`;
}

document.getElementById("glazing").addEventListener("change", calculatePrice);
document.getElementById("pack-size").addEventListener("change", calculatePrice);

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// Adding item to cart
function addToCart(){
    const rollGlazing = glazingSelect.value;
    const packSize = packSelect.value;

    const newRoll = new Roll(rollType, rollGlazing, packSize, rollData.basePrice)
    console.log(newRoll)
}

document.getElementById("add-button").addEventListener("click", addToCart);

