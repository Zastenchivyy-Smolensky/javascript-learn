addEventListener("load", function () {
  generateList();
  const objDate = new Date();
  const Y = objDate.getFullYear();
  const M = objDate.getMonth() + 1;
  const D = objDate.getDate();
  document.getElementById("dialyDate").value = Y + "年" + M + "月" + D + "日";

  document.getElementById("saveButton").addEventListener("click", function () {
    var dialyTitle = document.getElementById("dialyTitle").value;
    var dialyDate = document.getElementById("dialyDate").value;
    var dialyContents = document.getElementById("dialyContents").value;

    var saveData = {
      title: dialyTitle,
      contents: dialyContents,
    };
    localStorage.setItem(dialyDate, JSON.stringify(saveData));
    document.getElementById("status").innerText = "登録できました";
    generateList();
  });
  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      var dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) == null) {
        alert("削除すべきデータがありません");
      } else {
        if (confirm("削除してもよろしいでしょうか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerHTML = "削除できました";
          generateList();
        } else {
          alert("削除できませんでした");
        }
      }
    });
});
function generateList() {
  var data = localStorage;
  var dateList = "";
  for (var i = 0; i < data.length; i++) {
    var date = data.key(i);
    dateList +=
      `<a href="#" onclick=loadDialy("` + date + `")>` + date + `</a>` + `<br>`;
  }
  document.getElementById("list").innerHTML = dateList;
}

function loadDialy(dialyDate) {
  var dialyData = JSON.parse(localStorage.getItem(dialyDate));
  document.getElementById("dialyTitle").value = dialyData.title;
  document.getElementById("dialyDate").value = dialyDate;
  document.getElementById("dialyContents").value = dialyData.contents;
}
