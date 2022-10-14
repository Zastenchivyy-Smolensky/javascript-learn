(() => {
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]");
  const $content = $tab.querySelectorAll("[data-content]");
  //一番最初にさせたい
  const init = () => {
    $content[0].style.display = "block";
  };
  init();

  //クリックイベントしたら怒るイベント
  const handleClick = (e) => {
    e.preventDefault();
    const $this = e.target;
    //クリックされたnavとそのdataを取得
    const targetVal = $this.dataset.nav;
    console.log(targetVal);

    //対象外のnav,content
    let index = 0;
    while (index < $nav.length) {
      $content[index].style.display = "none";
      $nav[index].classList.remove("is-active");
      index++;
    }
    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll(
      '[data-content="' + targetVal + '"]'
    )[0].style.display = "block";
    $nav[targetVal].classList.add("is-active");
  };
  //全nav要素に関して関数を適応・発火
  let index = 0;
  while (index < $nav.length) {
    $nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
  }
})();
