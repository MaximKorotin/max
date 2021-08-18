const nav = document.querySelector(".main-nav");
const navMain = nav.querySelector(".main-nav__container");
const navToggle = nav.querySelector(".main-nav__toggle");
const buyNow = document.querySelectorAll(".buy-now");
const modalBuy = document.querySelector(".modal-buy");
const modalBuyForm = document.querySelector(".modal-buy__form");
const modalBuyButton = document.querySelector(".modal-buy__form-button");
const modalOverlay = document.querySelector(".modal-overlay");
const formFeedback = document.querySelector(".feedback__form");
const searchPhone = formFeedback.querySelector(".feedback__input--phone");
const searchEmail = formFeedback.querySelector(".feedback__input--email");
const buyPhone = document.querySelector(".modal-buy__input--phone");
const buyEmail = document.querySelector(".modal-buy__input--email");
const modalSuccess = document.querySelector(".modal-success");

let isStorageSupport = true;
let storagePhone = "";
let storageEmail = "";
let indexValue = 1;

nav.classList.remove("logo__text--nojs");
navToggle.classList.remove("main-nav__toggle--nojs");
navMain.classList.remove("main-nav__container--nojs");

function tabButton(element){
  showSale(indexValue = element);
}

function showSale(element){
  const sales = document.querySelectorAll(".sales__item");
  const tabs = document.querySelectorAll(".tabs__button");

  if(element > sales.length) {
    indexValue = 1;
  }
  if(element < 1) {
    indexValue = sales.length;
  }

  for(i = 0; i < sales.length; i++) {
    sales[i].classList.remove("sales__item--current");
  };

  for(i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("tabs__button--current");
  };

  sales[indexValue-1].classList.add("sales__item--current");
  tabs[indexValue-1].classList.add("tabs__button--current");
}

try {
  storagePhone = localStorage.getItem("phone");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

if (storagePhone) {
  searchPhone.value = storagePhone;
}

if (storageEmail) {
  searchEmail.value = storageEmail;
}

navToggle.addEventListener("click", () => {
  if (navMain.classList.contains("main-nav__container--closed")) {
    navMain.classList.remove("main-nav__container--closed");
    navMain.classList.add("main-nav__container--opened");
    navToggle.classList.remove("main-nav__toggle--closed");
    navToggle.classList.add("main-nav__toggle--opened");
  } else {
    navMain.classList.add("main-nav__container--closed");
    navMain.classList.remove("main-nav__container--opened");
    navToggle.classList.add("main-nav__toggle--closed");
    navToggle.classList.remove("main-nav__toggle--opened");
  }
});

buyNow.forEach((element) => {
  element.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalBuy.classList.add("modal-buy--open");
    modalOverlay.classList.add("modal-overlay--open");
  });
});

if (modalBuy) {
  const buyButton = modalBuy.querySelector(".modal-buy__button");

  buyButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalBuy.classList.remove("modal-buy--open");
    modalOverlay.classList.remove("modal-overlay--open");
  });

  window.addEventListener("keydown", (evt) => {
    if (evt.keyCode === 27) {
      if (modalBuy.classList.contains("modal-buy--open")) {
        evt.preventDefault();
        modalBuy.classList.remove("modal-buy--open");
        modalOverlay.classList.remove("modal-overlay--open");
      }
    }
  });

  modalOverlay.addEventListener("click", () => {
    modalBuy.classList.remove("modal-buy--open");
    modalOverlay.classList.remove("modal-overlay--open");
  });
}

modalBuyForm.addEventListener("submit", (evt) => {
  if (buyPhone.value && buyEmail.value) {
    evt.preventDefault();
    modalBuy.classList.remove("modal-buy--open");
    modalSuccess.classList.add("modal-success--open");
    modalOverlay.classList.add("modal-overlay--open");
  } else {
    evt.preventDefault();
  }

  if (modalSuccess) {
    const successButton = modalSuccess.querySelector(".modal-success__button");

    successButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      modalSuccess.classList.remove("modal-success--open");
      modalOverlay.classList.remove("modal-overlay--open");
    });

    window.addEventListener("keydown", (evt) => {
      if (evt.keyCode === 27) {
        if (modalSuccess.classList.contains("modal-success--open")) {
          evt.preventDefault();
          modalSuccess.classList.remove("modal-success--open");
          modalOverlay.classList.remove("modal-overlay--open");
        }
      }
    });

    modalOverlay.addEventListener("click", () => {
      modalSuccess.classList.remove("modal-success--open");
      modalOverlay.classList.remove("modal-overlay--open");
    });
  }
});

formFeedback.addEventListener("submit", (evt) => {
  if (searchPhone.value && searchEmail.value) {
    evt.preventDefault();
    localStorage.setItem("phone", searchPhone.value);
    localStorage.setItem("email", searchEmail.value);
    modalSuccess.classList.add("modal-success--open");
    modalOverlay.classList.add("modal-overlay--open");
  } else {
    evt.preventDefault();
  }

  if (modalSuccess) {
    const successButton = modalSuccess.querySelector(".modal-success__button");

    successButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      modalSuccess.classList.remove("modal-success--open");
      modalOverlay.classList.remove("modal-overlay--open");
    });

    window.addEventListener("keydown", (evt) => {
      if (evt.keyCode === 27) {
        if (modalSuccess.classList.contains("modal-success--open")) {
          evt.preventDefault();
          modalSuccess.classList.remove("modal-success--open");
          modalOverlay.classList.remove("modal-overlay--open");
        }
      }
    });

    modalOverlay.addEventListener("click", () => {
      modalSuccess.classList.remove("modal-success--open");
      modalOverlay.classList.remove("modal-overlay--open");
    });
  }
});
