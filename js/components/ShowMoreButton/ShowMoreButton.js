class ShowMoreButton {
  render() {
    let button = ` <button class="products__button" onclick='showMoreButton.showMoreHandler(event)'>Show More</button>`;
    ROOT_PRODUCTS_BUTTON.insertAdjacentHTML("beforeend", button);
  }

  showMoreHandler(event) {
    const shownProducts = document.querySelectorAll(".products__card");
    if (shownProducts.length > 8) {
      ROOT_PRODUCTS.innerHTML = "";
      productsPage.renderSixProducts(0, 8);
      event.target.innerHTML = "Show More";
    } else {
      productsPage.renderSixProducts(8, CATALOG.length);
      event.target.innerHTML = "Hide";
    }
  }
}
const showMoreButton = new ShowMoreButton();
showMoreButton.render();
