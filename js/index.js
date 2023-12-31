const activePage = window.location.pathname;

const navLinks = document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href.includes(activePage)) {
    link.classList.add("active");
    console.log(link.href);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".slider-home", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 5000,
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".slider-partners", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 5000,
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".slider-news", {
    type: "loop",
    perPage: 4,
    perMove: 4,
    arrows: true,
    pagination: true,
    autoplay: true,
    interval: 5000,
  }).mount();
});
