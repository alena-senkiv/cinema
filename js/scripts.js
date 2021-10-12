const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");

const cost = 100;
let totalPrice = 0;

schemeSvg.addEventListener("click", (e) => {
  if (!e.target.classList.contains("booked")) {
    e.target.classList.toggle("active");
    let totalSeats = schemeSvg.querySelectorAll(".active").length;
    totalPrice = cost * totalSeats;
    totalPriceTag.textContent = totalPrice;
  }
});

menuButton.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});
