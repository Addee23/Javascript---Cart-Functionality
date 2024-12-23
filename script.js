let cartCount = 0;

const badge = document.querySelector(`.badge`);
const removeFromCartButton = document.querySelector(`.cta-select`);
const addToCartButton = document.querySelector(`.cta-add`);

function updateBadge() {
  badge.setAttribute(`value`, cartCount);
  badge.textContent = cartCount;
}

function updateRemoveButton() {
  if (cartCount > 0) {
    removeFromCartButton.style.display = `inline-block`;
  } else {
    removeFromCartButton.style.display = `none`;
  }
}

// Event Listener för "Remove from Cart"
removeFromCartButton.addEventListener(`click`, () => {
  if (cartCount > 0) {
    cartCount--;
    updateBadge();
    updateRemoveButton();
  }
});

// Event Listener för "Add to Cart"
addToCartButton.addEventListener(`click`, () => {
  cartCount++;
  updateBadge();
  updateRemoveButton();
});

updateBadge();
updateRemoveButton();