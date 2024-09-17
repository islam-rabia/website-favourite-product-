function searchProduct() {
  let search = document.querySelector(".check-buttons form input");
  let product = document.querySelector(".product-list");
  let dataCart = product.querySelectorAll(".product-list li");
  let productName = document.querySelectorAll(".product-title h3");

  search.addEventListener("keyup", function () {
    let foundProducts = false;

    for (let i = 0; i < productName.length; i++) {
      let valueInput = search.value.toUpperCase();
      if (productName[i].innerHTML.toUpperCase().indexOf(valueInput) >= 0) {
        dataCart[i].style.display = "block";
        foundProducts = true;
      } else {
        dataCart[i].style.display = "none";
      }
    }

    const noProductsMessage = document.querySelector("#our-services h4");
    foundProducts
      ? (noProductsMessage.style.display = "none")
      : (noProductsMessage.style.display = "block");
  });
}

export { searchProduct };
