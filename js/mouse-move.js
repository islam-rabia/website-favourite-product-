function mouseMove() {
  const parallaxElement = document.querySelectorAll("[data-parallax]");
  const sectionImage = document.querySelector(".section-image");

  sectionImage.addEventListener("mousemove", (event) => {
    for (let parallax of parallaxElement) {
      const moveX =
        (event.clientX / window.innerWidth) *
        Number(parallax.dataset.parallaxSpeed);

      const moveY =
        (event.clientY / window.innerHeight) *
        Number(parallax.dataset.parallaxSpeed);

      parallax.animate(
        { transform: `translate(${moveX}px, ${moveY}px)` },
        { duration: 500, fill: "forwards" }
      );
    }
  });

  sectionImage.addEventListener("mouseleave", () => {
    for (let parallax of parallaxElement) {
      parallax.animate(
        { transform: `translate(0px, 0px)` },
        { duration: 500, fill: "forwards" }
      );
    }
  });
}

export { mouseMove };
