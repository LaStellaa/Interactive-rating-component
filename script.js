"use strict";

const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const btnSubmit = document.querySelector(".btn-submit");
const rating = document.getElementById("rating");
const btnRates = document.querySelectorAll(".btn");

btnSubmit.addEventListener("click", function () {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

btnRates.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating.innerHTML = btn.innerHTML;
  });
});
