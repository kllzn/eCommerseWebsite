class Cart {
  closeButtonHandler() {
    ROOT_CART.innerHTML = "";
  }

  deleteFromCartHandler(id) {
    let products = localStorageUtil.getProducts();
    const index = products.indexOf(id);
    products.splice(index, 1);
    localStorage.setItem(localStorageUtil.keyName, JSON.stringify(products));
    cartPage.render();
    cartIcon.render(products.length);
    ROOT_PRODUCTS.innerHTML = "";
    productsPage.renderSixProducts(0, 8);
  }

  render() {
    ROOT_CART.innerHTML = "";
    const productStore = localStorageUtil.getProducts();
    let htmlCatalog = ``;
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price, img }) => {
      if (productStore.indexOf(id) !== -1) {
        htmlCatalog += ` <li class="popup__item">
        <div class="item__img">
          <img src="${img}" alt="" />
        </div>
        <div class="item__info">
          <div class="item__name">${name}</div>
          <div class="item__price-block">
            <input
              type="number"
              name=""
              min="1"
              value="1"
              class="item__quantity" />
            <span class="x">X</span>
            <div class="item__price">Rs. ${price}</div>
          </div>
        </div>
        <div class="item__button">
          <button class="item__button" onclick='cartPage.deleteFromCartHandler("${id}")'>
            <img src="./img/popup/cancel-btn.svg" alt="" />
          </button>
        </div>
      </li>`;

        sumCatalog += price;
      }
    });

    const cart = `
 <div class="cart__popup popup">
    <header class="popup__header">
      <h3 class="popup__title">Shopping Cart</h3>
      <button class="popup__close-button" onclick='cartPage.closeButtonHandler()'>
        <img src="./img/popup/icon.svg" alt="" />
      </button>
    </header>

    <div class="popup__body">
      <ul class="popup__list">
      ${htmlCatalog}
      </ul>
    </div>
    <div class="popup__total">
      <div class="total__caption">Subtotal</div>
      <span class="total__price">Rs. ${sumCatalog}</span>
    </div>
    <div class="popup__buttons">
      <button class="popup__btn">Cart</button>
      <button class="popup__btn">Checkout</button>
      <button class="popup__btn">Comparison</button>
    </div>
  </div>`;
    ROOT_CART.insertAdjacentHTML("afterbegin", cart);
  }
}

const cartPage = new Cart();
