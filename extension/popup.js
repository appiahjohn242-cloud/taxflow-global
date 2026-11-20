function calculatePopup() {
  const amt = Math.max(0, Number(document.getElementById('amount').value) || 0);
  const mode = document.getElementById('mode').value;
  let tax = 0;
  let total = amt;

  if (mode === 'vat20') {
    tax = amt * 0.20;
    total = amt + tax;
  } else if (mode === 'vat19') {
    tax = amt * 0.19;
    total = amt + tax;
  } else if (mode === 'se153') {
    tax = amt * 0.9235 * 0.153;
    total = Math.max(0, amt - tax);
  }

  document.getElementById('result').textContent =
    'Base: ' + amt.toFixed(2) + ' | Est. Tax: ' + tax.toFixed(2) + ' | Result: ' + total.toFixed(2);
}

document.getElementById('runBtn').addEventListener('click', calculatePopup);
calculatePopup();
