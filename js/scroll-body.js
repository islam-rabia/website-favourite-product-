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
