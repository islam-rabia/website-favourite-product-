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
