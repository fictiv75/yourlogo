// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const seacrhIcon = document.querySelector(".search-form__icon");
const searchBody = document.querySelector(".search-form__body");
if (seacrhIcon) {
  seacrhIcon.addEventListener("click", function (e) {
    seacrhIcon.classList.toggle("active");
    searchBody.classList.toggle("active");
  });
}