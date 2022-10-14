(() => {
  const $btn = document.querySelector("#js-btn");
  const $modal = document.querySelector("#js-modal");
  const $modalCloseBtn = document.querySelector("#js-close-btn");
  const $modalContents = document.querySelector("#js-modal-contents");
  $btn.addEventListener("click", function () {
    $modal.style.display = "block";
  });
  $modalCloseBtn.addEventListener("click", function () {
    console.log(1);
    $modal.style.display = "none";
  });
  $modal.addEventListener("click", () => {
    $modal.style.display = "none";
  });
  $modalContents.addEventListener("click", (event) => {
    event.stopPropagation();
  });
})();
