
let cart = [];

function addToCart(name, price) {
  const options = Array.from(document.querySelectorAll('.custom-option'))
    .filter(opt => opt.checked)
    .map(opt => opt.value);
  cart.push({ name, price, options });
  alert(`${name} added to cart!`);
  localStorage.setItem('yorflora_cart', JSON.stringify(cart));
}

function loadCart() {
  const cartItems = document.getElementById('cart-items');
  const stored = JSON.parse(localStorage.getItem('yorflora_cart') || '[]');
  let total = 0;
  stored.forEach(item => {
    const line = document.createElement('p');
    line.textContent = `${item.name} - ₹${item.price} (${item.options.join(', ')})`;
    cartItems.appendChild(line);
    total += item.price;
  });
  document.getElementById('total').textContent = total;
}

function submitOrder(e) {
  e.preventDefault();
  alert("This will redirect to Razorpay. Integration coming next.");
}
