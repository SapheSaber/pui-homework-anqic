// Wait for this page to load and start the feature
document.addEventListener('DOMContentLoaded', function() {
    const spendingForm = document.getElementById('spending-form');
    
    if (spendingForm) {
        spendingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form values
            const date = document.getElementById('spending-date').value;
            const amount = parseFloat(document.getElementById('spending-amount').value);

            console.log("date: ", date);
            console.log("amount: ", amount);

            // Check if there's existing data in localStorage
            let records = JSON.parse(localStorage.getItem('financeRecords')) || {};

            if (records[date]) {
                records[date].spending += amount; 
            } else {
                records[date] = { spending: amount, saving: 0 }; // Default value for saving and spending are 0
            }

            // Save updated records back to localStorage
            localStorage.setItem('financeRecords', JSON.stringify(records));

            // Clear form inputs
            document.getElementById('spending-date').value = '';
            document.getElementById('spending-amount').value = '';

            alert("Spending record saved!");
        });
    } else {
        console.error("Spending form not found!");
    }
});
