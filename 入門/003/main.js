"use strict";

{
  const btn = document.querySelector(".btn");
  const container = document.querySelector(".container");
  btn.addEventListener("click", function () {
    btn.classList.toggle("active");
    container.classList.toggle("active");
  });
}
