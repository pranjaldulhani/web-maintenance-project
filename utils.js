function add(a, b) {
  return a + b;
}

function applyDiscount(price, percent) {
  return price - (price * percent) / 100;
}

function calculateTotal(prices, discountPercent) {
  let sum = 0;
  for (const p of prices) {
    sum = add(sum, p);
  }
  return applyDiscount(sum, discountPercent);
}

module.exports = { add, applyDiscount, calculateTotal };