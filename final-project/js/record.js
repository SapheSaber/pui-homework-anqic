// Load all the cards to the record page
document.addEventListener('DOMContentLoaded', function() {
    const records = JSON.parse(localStorage.getItem('financeRecords')) || {};
    const calendarContainer = document.querySelector('.calendar-records');

    // Clear any existing cards in the calendar container
    calendarContainer.innerHTML = '';

    for (const date in records) {
        const { spending, saving } = records[date];
        const netWorth = saving - spending;
        console.log("spending: ", spending);
        console.log("saving: ", saving);
        console.log(netWorth);

        const card = document.createElement('div');
        card.classList.add('record-entry');

        if (netWorth > 0) {
            card.classList.add('green-border');
        } else if (netWorth < 0) {
            card.classList.add('red-border');
        } else {
            card.classList.add('gray-border');
        }

        card.innerHTML = `
            <p>${new Date(date).toDateString()}</p>
            <p class="expense">-$${spending.toFixed(2)}</p>
            <p class="income">+$${saving.toFixed(2)}</p>
            <p class="net-worth">Net worth: $${netWorth.toFixed(2)}</p>
        `;

        calendarContainer.appendChild(card);
    }
});
