const formatter = new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' });

const lowerBound = 1_000;
const upperBound = 25_000;

const prices = document.getElementsByClassName('price');

for (let i = 0; i < prices.length; i++) {

    // Generate random number between the lower bound and the upper bound.
    const price = Math.random() * (upperBound - lowerBound + 1) + lowerBound;

    // Add new price to DOM.
    prices[i].innerHTML = formatter.format(price);
}
