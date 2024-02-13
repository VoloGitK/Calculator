function calculate() {
    const totalSale = parseFloat(document.getElementById('totalSale').value) || 0;
    const netSales = parseFloat(document.getElementById('netSales').value) || 0;
    const serviceCharge = parseFloat(document.getElementById('serviceCharge').value) || 0;
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const barTipOutPercent = parseFloat(document.getElementById('barTipOut').value) || 0;
    const hostExpoTipOutPercent = parseFloat(document.getElementById('hostExpoTipOut').value) || 0;

    const totalChecksPaid = totalSale;
    const minusTotalNonCashItems = totalSale - cash;
    const plusTwoPointFivePercentage = serviceCharge * 0.025;
    const minusServiceCharge = serviceCharge;
    const equalsNetCashDue = totalSale - minusTotalNonCashItems + plusTwoPointFivePercentage - serviceCharge;

    const barAmount = netSales * (barTipOutPercent / 100);
    const hostExpoAmount = netSales * (hostExpoTipOutPercent / 100);
    const houseAmount = netSales * 0.02;
    const kitchenAmount = netSales * 0.025;
    const totalEarned = serviceCharge - (barAmount + hostExpoAmount + houseAmount + kitchenAmount + plusTwoPointFivePercentage);

    document.getElementById('totalChecksPaid').textContent = `$${totalChecksPaid.toFixed(2)}`;
    document.getElementById('minusTotalNonCashItems').textContent = `$${minusTotalNonCashItems.toFixed(2)}`;
    document.getElementById('plusTwoPointFivePercentage').textContent = `$${plusTwoPointFivePercentage.toFixed(2)}`;
    document.getElementById('minusServiceCharge').textContent = `$${minusServiceCharge.toFixed(2)}`;
    document.getElementById('equalsNetCashDue').textContent = `$${equalsNetCashDue.toFixed(2)}`;
    document.getElementById('equalsNetCashDue').className = equalsNetCashDue >= 0 ? 'positive' : 'negative';

    document.getElementById('barAmount').textContent = `$${barAmount.toFixed(2)}`;
    document.getElementById('hostExpoAmount').textContent = `$${hostExpoAmount.toFixed(2)}`;
    document.getElementById('houseAmount').textContent = `$${houseAmount.toFixed(2)}`;
    document.getElementById('kitchenAmount').textContent = `$${kitchenAmount.toFixed(2)}`;
    document.getElementById('totalEarned').textContent = `$${totalEarned.toFixed(2)}`;

    const greatJobMessageElement = document.getElementById('greatJobMessage');
    greatJobMessageElement.textContent = totalEarned > 0 ? `Great Job!!! You've earned ${((totalEarned / netSales) * 100).toFixed(2)}% of Net Sales.` : "";
}

function clearFields() {
    document.querySelectorAll('input, select').forEach(element => element.value = '');
    document.querySelectorAll('.result-container span').forEach(span => span.textContent = '$0.00');
    document.getElementById('greatJobMessage').textContent = '';
}
