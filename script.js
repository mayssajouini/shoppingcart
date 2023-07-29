const cart = document.getElementById('cart');
const totalDiv = document.getElementById('total');
let total = 0;
const items = [
  { id: 1, name: 'Item 1', price: 10.99, quantity: 1 },
  { id: 2, name: 'Item 2', price: 7.49, quantity: 1 },
  { id: 3, name: 'Item 3', price: 15.00, quantity: 1 }
];

function updateTotal() {
  total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}

function renderCartItem(item) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('cart-item');

  const itemName = document.createElement('span');
  itemName.textContent = item.name;
  itemDiv.appendChild(itemName);

  const itemPrice = document.createElement('span');
  itemPrice.textContent = `$${item.price.toFixed(2)}`;
  itemDiv.appendChild(itemPrice);

  const increaseButton = document.createElement('button');
  increaseButton.textContent = '+';
  increaseButton.addEventListener('click', () => {
    item.quantity++;
    renderCart();
    updateTotal();
  });
  itemDiv.appendChild(increaseButton);

  const decreaseButton = document.createElement('button');
  decreaseButton.textContent = '-';
  decreaseButton.addEventListener('click', () => {
    if (item.quantity > 1) {
      item.quantity--;
      renderCart();
      updateTotal();
    }
  });
  itemDiv.appendChild(decreaseButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    const index = items.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      items.splice(index, 1);
      renderCart();
      updateTotal();
    }
  });
  itemDiv.appendChild(deleteButton);

  cart.appendChild(itemDiv);
}

function renderCart() {
  cart.innerHTML = '';
  items.forEach(renderCartItem);
}

renderCart();
updateTotal();
