class Products {
  constructor() {
    this.activeClass = "overlay__btn-active";
    this.labelAdd = "Add to Cart";
    this.labelRemove = "Remove from Cart";
  }

  setLocalStorageHandler(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if (pushProduct) {
      element.classList.add(this.activeClass);
      element.innerHTML = this.labelRemove;
      cartPage.render();
    } else {
      element.classList.remove(this.activeClass);
      element.innerHTML = this.labelAdd;
      cartPage.render();
    }
    cartIcon.render(products.length);
  }

  renderSixProducts(firstIndex, lastIndex) {
    const productsStore = localStorageUtil.getProducts();
    for (firstIndex; firstIndex < lastIndex; firstIndex++) {
      const { id, name, caption, price, img, containsDiscount, lastPrice } =
        CATALOG[firstIndex];
      let activeText = "";
      let activeClass = "";
      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeText = this.labelRemove;
        activeClass = this.activeClass;
      }
      this.render(
        id,
        name,
        caption,
        price,
        img,
        containsDiscount,
        lastPrice,
        activeText,
        activeClass
      );
    }
  }
  discount(containsDiscount, lastPrice) {
    if (containsDiscount) {
      return `<span class='products__card_discount'>Rp ${lastPrice}</span>`;
    } else {
      return ``;
    }
  }
  render(
    id,
    name,
    caption,
    price,
    img,
    containsDiscount,
    lastPrice,
    activeText,
    activeClass
  ) {
    let htmlCatalog = "";
    htmlCatalog += `
        <li class="products__card ${id}">
        <img src="${img}" alt="" class="products__card_image" />
        <div class='products__card_body'>
        <h5 class="products__card_title">${name}</h5>
        <div class="products__card_caption">${caption}</div>
        <div class='products__card_prices'>
        <span class="products__card_price">Rp ${price}</span>
        ${this.discount(containsDiscount, lastPrice)}
        </div>
        </div>
        <div class="card__overlay">
        <button class="overlay__btn ${activeClass}" onclick='productsPage.setLocalStorageHandler(this, "${id}")'>${activeText}</button>
        <div class="overlay__block">
          <button class="overlay__share interaction__btn">
            Share
          </button>
          <button class="overlay__compare interaction__btn">
            Compare
          </button>
          <button class="overlay__like interaction__btn">
            Like
          </button>
        </div>
      </div>
      </li>
          `;

    ROOT_PRODUCTS.insertAdjacentHTML("beforeend", htmlCatalog);
  }
}

const productsPage = new Products();
productsPage.renderSixProducts(0, 8);
