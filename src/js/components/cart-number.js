document.addEventListener('DOMContentLoaded', () => {
  const cartBtn = document.querySelector('.control__btn--cart');
  const cartCount = cartBtn.querySelector('.control__cart-count');

  // Mock function to add an item. Replace with your own logic.
  function addItemToCart() {
    let count = parseInt(cartCount.textContent, 10);
    cartCount.textContent = count + 1;
  }

  // Event listener for adding items to the cart.
  // Bind this to your actual 'Add to Cart' buttons in real use.
  someAddToCartBtns.forEach(btn => btn.addEventListener('click', addItemToCart));
});
