export function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

export function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(name, price) {
  const cart = getCart();
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  saveCart(cart);
}
