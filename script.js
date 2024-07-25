function calculateSalary() {
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
    const normalHours = parseFloat(document.getElementById('normalHours').value) || 0;
    const halfHours = parseFloat(document.getElementById('halfHours').value) || 0;
    const fullHours = parseFloat(document.getElementById('fullHours').value) || 0;
    const retirement = parseFloat(document.getElementById('retirement').value) / 100 || 0;
    const healthInsurance = parseFloat(document.getElementById('healthInsurance').value) / 100 || 0;
    const law23032 = parseFloat(document.getElementById('law23032').value) / 100 || 0;
    const familyAssignment = parseFloat(document.getElementById('familyAssignment').value) || 0;

    const normalHoursRemunerative = normalHours * hourlyRate;
    const halfHoursRemunerative = halfHours * hourlyRate * 1.5;
    const fullHoursRemunerative = fullHours * hourlyRate * 2;

    const subtotalRemunerative = normalHoursRemunerative + halfHoursRemunerative + fullHoursRemunerative;
    const retirementDiscount = subtotalRemunerative * retirement;
    const healthInsuranceDiscount = subtotalRemunerative * healthInsurance;
    const law23032Discount = subtotalRemunerative * law23032;

    const subtotalDiscount = retirementDiscount + healthInsuranceDiscount + law23032Discount;
    const totalToReceive = subtotalRemunerative - subtotalDiscount + familyAssignment;

    document.getElementById('normalHoursRemunerative').innerText = normalHoursRemunerative.toFixed(2);
    document.getElementById('halfHoursRemunerative').innerText = halfHoursRemunerative.toFixed(2);
    document.getElementById('fullHoursRemunerative').innerText = fullHoursRemunerative.toFixed(2);
    document.getElementById('retirementDiscount').innerText = retirementDiscount.toFixed(2);
    document.getElementById('healthInsuranceDiscount').innerText = healthInsuranceDiscount.toFixed(2);
    document.getElementById('law23032Discount').innerText = law23032Discount.toFixed(2);

    document.getElementById('subtotalRemunerative').innerText = subtotalRemunerative.toFixed(2);
    document.getElementById('subtotalDiscount').innerText = subtotalDiscount.toFixed(2);
    document.getElementById('subtotalNonRemunerative').innerText = familyAssignment.toFixed(2);
    document.getElementById('totalToReceive').innerText = totalToReceive.toFixed(2);
}
