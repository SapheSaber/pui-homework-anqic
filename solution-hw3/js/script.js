// Base price
let basePrice = 2.49;

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

function calculatePrice(){
    const glazingSelect = document.getElementById("glazing");
    const packSelect = document.getElementById("pack-size");
    // Get selected options' index position
    let glazingIndex = glazingSelect.selectedIndex;
    let packIndex = packSelect.selectedIndex;

    // Get the selected options' information from the hardcoded value above
    const selectedPack = packSelect.options[packIndex].text;
    const selectedGlazing = glazingSelect.options[glazingIndex].text;
   
    const packPrice = packSizePrice[selectedPack];
    const glazingPrice = glazingOption[selectedGlazing];

    console.log("The selected glazing price is " + glazingPrice);
    console.log("The selected pack price is " + packPrice);

    const totalPrice = ((basePrice + glazingPrice) * packPrice).toFixed(2);
    console.log("The total price is "+ totalPrice);

    // Update the displayed total price
    document.getElementById("total-price").textContent = `$${totalPrice}`;

}

document.getElementById("glazing").addEventListener("change", calculatePrice);
document.getElementById("pack-size").addEventListener("change", calculatePrice);