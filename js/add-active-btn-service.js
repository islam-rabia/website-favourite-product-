function generateBtn() {
  let icons = document.querySelectorAll(".product_icon ion-icon");
  let imgs = document.querySelectorAll(".product_icon img");

  let activeButtons = JSON.parse(localStorage.getItem("activeButtons")) || [];

  icons.forEach((icon, index) => {
    if (activeButtons.includes(index)) {
      icon.classList.add("ion_active");
      imgs[index].classList.add("ion_active");
    }

    icon.addEventListener("click", () => {
      const isActive = icon.classList.toggle("ion_active");
      imgs[index].classList.toggle("ion_active");

      if (isActive) {
        if (!activeButtons.includes(index)) {
          activeButtons.push(index);
        }
      }

      localStorage.setItem("activeButtons", JSON.stringify(activeButtons));
    });
  });
}

function addLiveBtn() {
  let icons = document.querySelectorAll(".product_icon ion-icon");
  let afterSelect = document.querySelector(".header-btn .live");

  let isLiveActive = JSON.parse(localStorage.getItem("isLiveActive")) || false;

  icons.forEach((icon) => {
    if (isLiveActive) {
      afterSelect.classList.add("active");
    }

    icon.addEventListener("click", () => {
      isLiveActive = true;
      afterSelect.classList.toggle("active", isLiveActive);

      localStorage.setItem("isLiveActive", JSON.stringify(isLiveActive));
    });
  });
}

export { generateBtn, addLiveBtn };
