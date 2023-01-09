const sideBarBlur = document.querySelector(".blur");
const openMenuBtn = document.querySelector(".open_menu");
const closeMenuBtn = document.querySelector(".close_menu");
const nav = document.querySelector("nav");
const form = document.querySelector("form");
const alert = document.querySelector("#alert");

const alertFadeIn = [{ opacity: "0" }, { opacity: "1" }];

const alertTiming = {
  duration: 500,
  iterations: 1,
};

sideBarBlur.addEventListener("click", (e) => {
  e.target.classList.contains("blur") && nav.classList.remove("menu_open");
});

openMenuBtn.addEventListener("click", () => {
  nav.classList.add("menu_open");
});

closeMenuBtn.addEventListener("click", () => {
  nav.classList.remove("menu_open");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = e.target[0].value;

  alert.animate(alertFadeIn, alertTiming);

  if (!isValidEmail(email)) {
    e.target.classList.add("alert");
    alert.textContent = "Please enter a valid email address";
    alert.style.color = "hsl(0, 100%, 63%)";
    return;
  }

  e.target.classList.add("alert");
  alert.textContent = "Thanks for subscribing";
  alert.style.color = "hsl(120, 36.6%, 47.6%)";
  e.target[0].value = "";

  setTimeout(() => {
    e.target.classList.remove("alert");
  }, 3000);
});

function isValidEmail(email) {
  const emailRegex = /^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$/;
  return emailRegex.test(email);
}
