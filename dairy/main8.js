window.addEventListener("load", function () {
  generateList();
  now = new Date();
  y = now.getFullYear();
  m = now.getMonth();
  d = now.getDate();
  document.getElementById("dialyDate").value = y + "年" + m + "月" + d + "日";

  document.getElementById("saveButton").addEventListener("click", function () {
    var dialyTitle = document.getElementById("dialyTitle").value;
    var dialyContents = document.getElementById("dialyContents").value;
    var dialyDate = document.getElementById("dialyDate").value;
    var errMsg = "";
    if (dialyTitle == "") {
      errMsg = errMsg + "タイトルが必須です";
    }
    if (dialyTitle.length > 30) {
      errMsg = errMsg + "エラーメッセージ\n";
    }
    if (dialyDate == "") {
      errMsg = errMsg + "日付は必須ですか?\n";
    }
    var dateResult = dialyDate.match(/^\d{1,4}年\d{1,2}月\d{1,2}日/);
    if (dateResult == null) {
      errMsg = "エラー";
    }
    if (errMsg != "") {
      alert("保存に失敗しました\n\n" + errMsg);
      return false;
    }
    saveData = {
      title: dialyTitle,
      contents: dialyContents,
    };
    window.localStorage.setItem(dialyDate, JSON.stringify(saveData));
    document.getElementById("status").innerHTML = "成功しました";
    generateList();
  });
  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      var dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) == null) {
        alert("データが存在しません");
      } else {
        if (confirm("データを削除しますか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerHTML = "削除に成功しました";
          generateList();
        }
      }
    });
});
function generateList() {
  const data = window.localStorage;
  var dateList = "";
  for (var i = 0; i < data.length; i++) {
    var date = data.key(i);
    dateList +=
      `<a href="#" onclick=loadDialy("` + date + `")>` + date + `</a>` + `<br>`;
  }
  document.getElementById("list").innerHTML = dateList;
}
function loadDialy(dialyDate) {
  var dialyData = JSON.parse(window.localStorage.getItem(dialyDate));
  document.getElementById("dialyTitle").value = dialyData.title;
  document.getElementById("dialyDate").value = dialyDate;
  document.getElementById("dialyContents").value = dialyData.contents;
}
