import { generateBtn, addLiveBtn } from "./add-active-btn-service.js";
import { searchProduct } from "./search-product.js";

let my__data;
async function generateDataService() {
  let result = await fetch("../data/data.json");
  let myData = await result.json();

  generateService(myData);
  generateBtn();
  addLiveBtn();
  searchProduct();
  my__data = myData;
}

const app = document.querySelector(".product-list");

function generateService(data) {
  app.innerHTML = data
    .map((item, index) => {
      let { id, name, desc, image } = item;

      return `
      <li id="${id}">
        <div class="product_icon" data-ion="${index}">
          <ion-icon name="heart-outline"></ion-icon>
          <img src="../image/heart.png" alt="image icon" />
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
      save_to_wishList(index);
    }
  });
}

let wishList_container = JSON.parse(localStorage.getItem("wishList")) || [];

function save_to_wishList(index) {
  const newItem = my__data[index];
  const isDuplicate = wishList_container.some((item) => item.id === newItem.id);

  if (!isDuplicate) {
    wishList_container.push(newItem);
    localStorage.setItem("wishList", JSON.stringify(wishList_container));
  }
}

generateDataService();
