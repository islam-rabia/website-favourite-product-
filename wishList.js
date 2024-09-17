let wishList_container;
function get_data_from_localStorage() {
  if (localStorage.getItem("wishList")) {
    wishList_container = JSON.parse(localStorage.getItem("wishList"));
  }

  generateDataFunc();
}

window.addEventListener("DOMContentLoaded", () => {
  get_data_from_localStorage();
});

const app = document.querySelector(".product-list");

function generateDataFunc() {
  app.innerHTML = wishList_container
    .map((item, index) => {
      let { id, image, name, desc } = item;

      return `
      <li id="${id}" >
        <div class="product_icon close" data-ion="${index}">
          <ion-icon name="close-outline" class="icon-close"></ion-icon>
        </div>
        <div class="product-title">
          <img src="${image}" alt="image product">
          <h3>${name}</h3>
          <p>${desc}</p>
        </div>
      </li>
    `;
    })
    .join("");

  app.addEventListener("click", (event) => {
    let indexDiv = event.target.closest(".product_icon");

    if (indexDiv) {
      let index = indexDiv.dataset.ion;
      remove_from_localStorage(index);
    }
  });
}

function remove_from_localStorage(index) {
  wishList_container.splice(index, 1);
  generateDataFunc();
  localStorage.setItem("wishList", JSON.stringify(wishList_container));

  const icons = JSON.parse(localStorage.getItem("activeButtons"));

  icons.splice(index, 1);
  localStorage.setItem("activeButtons", JSON.stringify(icons));

  if (icons.length === 0) {
    localStorage.removeItem("isLiveActive");
  }
}

(function () {
  let openNavbar = document.querySelector(".open-icon");
  let closeNavbar = document.querySelector(".navbar");
  let navbarDiv = document.querySelector(".navbar-div");
  let closeIcon = document.querySelector(".close-icon");

  openNavbar.addEventListener("click", () => {
    closeNavbar.classList.add("active");
    navbarDiv.classList.add("active");
  });

  navbarDiv.addEventListener("click", () => {
    closeNavbar.classList.remove("active");
    navbarDiv.classList.remove("active");
  });

  closeIcon.addEventListener("click", () => {
    closeNavbar.classList.remove("active");
    navbarDiv.classList.remove("active");
  });

  let navbarLinks = document.querySelectorAll(".navbar ul li a");

  navbarLinks.forEach((navbarLink) => {
    navbarLink.addEventListener("click", () => {
      closeNavbar.classList.remove("active");
      navbarDiv.classList.remove("active");
    });
  });
})();

(function () {
  let header = document.querySelector("header");
  let topBody = document.querySelector(".top-body");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      header.classList.add("active");
      topBody.classList.add("active");
    } else {
      topBody.classList.remove("active");
      header.classList.remove("active");
    }
  });

  topBody.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
})();

function clear_localStorage() {
  let removeBtn = document.querySelector(".remove-btn");

  removeBtn.addEventListener("click", () => {
    localStorage.removeItem("wishList");
    localStorage.removeItem("activeButtons");
    localStorage.removeItem("isLiveActive");
    wishList_container = [];
    generateDataFunc();
  });
}

clear_localStorage();

(function () {
  document.oncontextmenu = () => {
    return false;
  };

  document.onkeydown = (event) => {
    event.preventDefault();
  };
})();
