class CartIcon {
  openCartHandler() {
    cartPage.render();
  }

  render(cartCount) {
    const cartIcon = `
    <button class="account__link cart-icon" onclick="cartIcon.openCartHandler()">
    <span class="material-symbols-outlined">
      shopping_cart
    </span>
    <div class="cart__count">${cartCount}</div>
  </button>
        `;
    ROOT_CART_ICON.innerHTML = cartIcon;
    // ROOT_CART_ICON.insertAdjacentHTML("beforeend", cartIcon);
  }
}

const cartIcon = new CartIcon();
const productsStore = localStorageUtil.getProducts();
cartIcon.render(productsStore.length);
