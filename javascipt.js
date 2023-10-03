document.getElementById('deposit-button').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    if (!isNaN(amount) && amount > 0) {
        const balanceElement = document.getElementById('balance');
        const currentBalance = parseFloat(balanceElement.textContent);
        const newBalance = currentBalance + amount;
        balanceElement.textContent = newBalance.toFixed(2);
        document.getElementById('transaction-amount').value = '';
    } else {
        alert('Please enter a valid positive amount for deposit.');
    }
});

document.getElementById('withdraw-button').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    if (!isNaN(amount) && amount > 0) {
        const balanceElement = document.getElementById('balance');
        const currentBalance = parseFloat(balanceElement.textContent);
        if (amount <= currentBalance) {
            const newBalance = currentBalance - amount;
            balanceElement.textContent = newBalance.toFixed(2);
            document.getElementById('transaction-amount').value = '';
        } else {
            alert('Insufficient funds for withdrawal.');
        }
    } else {
        alert('Please enter a valid positive amount for withdrawal.');
    }
});





















