// extract roll type from url
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
const rollData = rolls[rollType];

const headerElement = document.querySelector("#roll-header");
headerElement.textContent = `${rollType} Cinnamon Roll`;

// update the roll image
const imageElement = document.querySelector("#roll-image");
const rollTypeLower = rollType.toLowerCase();
imageElement.src = `../assets/products/${rollTypeLower}` + "-cinnamon-roll.jpg";

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


const addButton = document.getElementById("add-button");
if (addButton) {
    addButton.addEventListener("click", () => {
        const rollGlazing = glazingSelect.value;
        const packSize = packSelect.value;

        addToCart(rollType, rollGlazing, packSize, rollData.basePrice);
        console.log("Current cart:", cart);
    });
}

