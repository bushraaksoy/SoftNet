const activePage = window.location.pathname;

const navLinks = document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href.includes(activePage)) {
    link.classList.add("active");
    console.log(link.href);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".slider", {
    type: "loop", // carousel
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 5000, // Set the interval time in milliseconds
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".slider-partners", {
    type: "loop", // carousel
    perPage: 5,
    perMove: 1,
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 5000, // Set the interval time in milliseconds
  }).mount();
});
