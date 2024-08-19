document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    this.reset();

    this.submit();
  });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const icons = document.querySelector(".icons");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  icons.classList.toggle("active");
});
