

// Wait for this page to load and start the feature
document.addEventListener('DOMContentLoaded', function() {
    const spendingForm = document.getElementById('spending-form');
    const savingForm = document.getElementById('saving-form');

    if (spendingForm) {
        spendingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form values
            const date = document.getElementById('spending-date').value;
            const type = document.getElementById('spending-type').value;
            const amount = parseFloat(document.getElementById('spending-amount').value);

            console.log("date: ", date);
            console.log("amount: ", amount);

            // Check if there's existing data in localStorage
            let records = JSON.parse(localStorage.getItem('financeRecords')) || {};
            console.log(localStorage.getItem('financeRecords'));


            if (records[date]) {
                records[date].spending += amount; 
                records[date].spendType = type;
            } else {
                records[date] = { spending: amount, spendingType: type, saving: 0, savingType: ''}; // Default value for saving and spending are 0
            }

            // Save updated records back to localStorage
            localStorage.setItem('financeRecords', JSON.stringify(records));

            // Clear form inputs
            document.getElementById('spending-date').value = '';
            document.getElementById('spending-amount').value = '';
            document.getElementById('spending-type').value = 'Pick a type';

            alert("Spending record saved!");
        });
    } else {
        console.error("Spending form not found!");
    }

    // Handle the Saving form functions
    if (savingForm){
        savingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const date = document.getElementById('saving-date').value;
            const type = document.getElementById('saving-type').value;
            const amount = parseFloat(document.getElementById('saving-amount').value);

            let records = JSON.parse(localStorage.getItem('financeRecords')) || {};
            if (records[date]){
                records[date].saving += amount;
                records[date].savingType = type;

                console.log(records[date]);
            }else{
                records[date] = { spending: 0, spendingType: '', saving: amount, savingType: type };
            }
            localStorage.setItem('financeRecords', JSON.stringify(records));

            document.getElementById('saving-date').value = '';
            document.getElementById('saving-type').value = 'Pick a type';
            document.getElementById('saving-amount').value = '';

            alert("Your saving record is saved!");
        });
    } else{
        console.error("Saving form not found!")
    }
});
