const burgerMenu = document.querySelector("#menu");
const closeMenu = document.querySelector("#close");
const nav = document.querySelector("nav");
const navItems = nav.querySelectorAll("a");

burgerMenu.addEventListener("click", (e) => {
  nav.classList.add("active");
  e.target.style.display = "none";
});

closeMenu.addEventListener("click", (e) => {
  nav.classList.remove("active");
  burgerMenu.style.display = "block";
});

// add active class when any nav item is clicked and remove from others
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));

    item.classList.add("active");
  });
});
