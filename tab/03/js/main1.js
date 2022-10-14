(() => {
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]");
  const $content = $tab.querySelectorAll("[data-content]");

  const init = () => {
    $content[0].style.display = "block";
  };
  init();
  const handleClick = (e) => {
    e.preventDefault();
    const $this = e.target;
    console.log($this);
    const targetVal = $this.dataset.nav;
    console.log(targetVal);
    let index = 0;
    while (index < $nav.length) {
      $content[index].style.display = "none";
      $nav[index].classList.remove("is-active");
      index++;
    }
    $tab.querySelectorAll(
      '[data-content="' + targetVal + '"]'
    )[0].style.display = "block";
    $nav[targetVal].classList.add("is-active");
  };
  let index = 0;
  while (index < $nav.length) {
    $nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
  }
})();
