(() => {
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]");
  const $content = $tab.querySelectorAll("[data-content]");
  const ACTIVE_CLASS = "is-active";
  const navLen = $nav.length;
  //初期化
  const init = () => {
    $content[0].style.display = "block";
  };
  init();

  // clickしたら怒るイベント
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
    const $this = e.target;
    const targetValue = $this.dataset.nav;

    //対象外のnavを全てリセット
    let index = 0;
    while (index < navLen) {
      $content[index].style.display = "none";
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }
    console.log(targetValue);
    //コンテンツをアクティブ化する

    $tab.querySelectorAll(
      '[data-content="' + targetValue + '"]'
    )[0].style.display = "block";
    $nav[targetValue].classList.add(ACTIVE_CLASS);
    console.log($nav[targetValue].classList);
  };

  //全nav要素に対して関数を帝王
  let index = 0;
  while (index < navLen) {
    $nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
  }
})();
