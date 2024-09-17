(function () {
  let navbarLinks = document.querySelectorAll(".navbar ul li a");

  navbarLinks.forEach((navbarLink) => {
    navbarLink.addEventListener("click", function () {
      document.querySelector(".nav").classList.remove("nav");
      this.classList.add("nav");
    });
  });
})();
