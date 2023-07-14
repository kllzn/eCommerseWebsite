window.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const headerMenu = document.querySelector(".header__menus");
  const accMenu = document.querySelector(".account__menu");
  const header = document.querySelector(".header");
  const cartPopup = document.querySelector(".cart__popup");
  const cartIconButton = document.querySelector(".cart-icon");
  const cartCloseButton = document.querySelector(".popup__close-button");

  burger.addEventListener("click", () => {
    if (burger.classList.contains("burger__active")) {
      document.body.classList.remove("of-hidden");
      burger.classList.remove("burger__active");
      headerMenu.classList.remove("menu__active");
      accMenu.classList.remove("account__active");
    } else {
      document.body.classList.add("of-hidden");
      burger.classList.add("burger__active");
      headerMenu.classList.add("menu__active");
      accMenu.classList.add("account__active");
    }
  });

  window.onscroll = () => {
    if (window.pageYOffset > header.offsetTop + header.offsetHeight) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
});
