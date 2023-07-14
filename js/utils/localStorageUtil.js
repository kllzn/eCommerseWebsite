class LocalStorageUtil {
  constructor() {
    this.keyName = "products";
  }

  getProducts() {
    const localStorageProducts = localStorage.getItem(this.keyName);
    if (localStorageProducts != null) {
      return JSON.parse(localStorageProducts);
    } else {
      return [];
    }
  }

  putProducts(id) {
    let products = this.getProducts();
    let pushProduct = false;
    const index = products.indexOf(id);

    if (index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { pushProduct, products };
  }
}

const localStorageUtil = new LocalStorageUtil();
