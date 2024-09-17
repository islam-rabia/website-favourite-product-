(function () {
  let navbarLinkList = document.querySelectorAll(".navbar ul li a");
  let sections = document.querySelectorAll("section");
  let currentSection = "home";

  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - section.clientHeight / 4) {
        currentSection = section.id;
      }
    });

    navbarLinkList.forEach((item) => {
      if (item.href.includes(currentSection)) {
        document.querySelector(".nav").classList.remove("nav");
        item.classList.add("nav");
      }
    });
  });
})();
